import Class from './class'
import Rule from './rule'
import State from './state'
import Token from './token'

import {LanguageDefinition} from './definition';
import {TokenInformation} from './tokenInformation';

import {readFileSync} from 'fs';

/**
 * Lexer for YeetScript
 */
export default class Lexer {
  private _languageDefinition: LanguageDefinition;

  private _classes: Array<Class> = [];
  private _states: Array<State> = [];
  private _tokenTypes: Array<TokenInformation> = [];

  private _currentState: State;

    /**
     * Creates an instance of lexer.
     * @param languageDefinition: An object of LanguageDefinition which contains the classes, rules, states, and tokens to use.
     */
    constructor(languageDefinition: LanguageDefinition) {
      this._languageDefinition = languageDefinition

      this.initializeClasses()
      this.initializeStates()
      this.initializeTokenTypes()
      this.initializeRules()

      this._currentState = this._states[0]
    }

    /**
     * Tokenizes the input string
     * @param input: The input string to extract tokens from
     * @returns tokenize: An array of the tokens in the input string
     */
    public tokenize(input: string): Array<Token> {
      input = input.replace('\t', ' ')
      input = input.replace('    ', ' ')

      const tokens: Array<Token> = []

      let lineNumber = 1
      let lastLineIndex = 0

      let processedCharacters: Array<string> = []

      // Looping through the input string character by character
      for (let i = 0; i < input.length; i++) {
        const character = input[i];

        // Ignoring carriage return
        if (character == '\r') {
          continue
        }

        // Incrementing line number count on new line
        if (character == '\n') {
          lineNumber++
          lastLineIndex = i - 1
        }

        // Checking the current state for a match with the next character
        const matchingRule = this._currentState.getMatchingRule(character)

        // If there is a matching rule, then the current state is changed to the outgoing state and the character is added to the processed characters
        if (matchingRule.emitToken) {
          let tokenType = matchingRule.emitToken

          const keywordsClass = this._classes.find(classDefinition => classDefinition.name === 'KEYWORDS')

          if (keywordsClass && keywordsClass.checkMatch(processedCharacters.join(''))) tokenType = this._tokenTypes.find(tokenType => tokenType.name === 'KEYWORD')!

          const token = new Token(processedCharacters.join(''), lineNumber, i - processedCharacters.length - lastLineIndex + 1, tokenType)
          tokens.push(token)

          processedCharacters = []
        }

        processedCharacters.push(character)

        this._currentState = matchingRule.outgoingState
      }

      //  Tokens are created from the characters in the processed characters array and are added to the array of tokens
      if (processedCharacters.length > 0) {
        // Get a matching rule for the last character
        const matchingRule = this._currentState.getMatchingRule('\n')

        // Emit token if there is a matching rule
        if (matchingRule.emitToken) {
          const tokenType = matchingRule.emitToken

          const token = new Token(processedCharacters.join(''), lineNumber, input.length - lastLineIndex, tokenType)
          tokens.push(token)
        }
      }

      return tokens
    }

    /**
     * Reads the language definition file, processes it, and initializes the classes
     */
    private initializeClasses(): void {
      const classesFile = readFileSync(this._languageDefinition.classes)

      // Splitting characters into an array of strings
      const classDefinitions = classesFile.toString().split(/\[([A-Z]*)]/g)

      for (let i = 1; i < classDefinitions.length; i += 2) {
        const className = classDefinitions[i].trim()
        const classMatches = classDefinitions[i + 1].split('\n').map(d => d.trim()).filter(d => d.length > 0)

        this._classes.push(new Class(className, classMatches))
      }
    }

    /**
     * Reads the language definition file, processes it, and initializes the states
     */
    private initializeStates(): void {
      const statesFile = readFileSync(this._languageDefinition.states)

      const stateDefinitions = statesFile.toString().split(/\[[A-Z]*]/g).flatMap(d => d.trim().split('\n')).map(d => d.trim()).filter(d => d.length > 0)

      for (const stateName of stateDefinitions) {
        this._states.push(new State(stateName))
      }
    }

    /**
     * Reads the language definition file, processes it, and initializes the rules
     */
    private initializeRules(): void {
      const rulesFile = readFileSync(this._languageDefinition.rules)

      const ruleDefinitions = rulesFile.toString().split(/\[[ A-Z]*]/g).join('').split('\n').map(d => d.trim()).filter(d => d.length > 0)

      // Looping through the rule definitions and creating rules
      for (const ruleDefinition of ruleDefinitions) {
        const definition = ruleDefinition.split(' - ')

        const incomingState = this.getStateByName(definition[0])
        const matchTarget = this.getClassByName(definition[1]) || definition[1]

        // Separate outgoing rules for emit statements and tokens
        if (!definition[2].includes('emit')) {
          const outgoingState = this.getStateByName(definition[2])

          incomingState.addOutgoingRule(new Rule(outgoingState, matchTarget))
        } else {
          const emitDefinition = definition[2].split(' emit ')

          const tokenType = this._tokenTypes.find(type => type.name === emitDefinition[1])
          const outgoingState = this.getStateByName(emitDefinition[0])

          incomingState.addOutgoingRule(new Rule(outgoingState, matchTarget, tokenType))
        }
      }
    }

    /**
     * Reads the language definition file, processes it, and initializes the token types
     */
    public initializeTokenTypes(): void {
      const tokenTypesFile = readFileSync(this._languageDefinition.tokens)

      const tokenTypes = tokenTypesFile.toString().split('\n').map(d => d.replace('\r', '')).filter(d => d.length > 0)

      const fullyQualifiedName: Array<string> = []

      let lastIndent = 0

      // Looping through the token types, removing the indents, and adding them to the class-level token types object
      for (let line of tokenTypes) {
        let currentIndent = 0

        while (line.startsWith('    ')) {
          line = line.slice(4)
          currentIndent++
        }

        if (currentIndent < lastIndent)
          fullyQualifiedName.pop()

        lastIndent = currentIndent

        if (line.startsWith('[') && line.endsWith(']')) {
          fullyQualifiedName.push(line.slice(1, -1))
        } else {
          this._tokenTypes.push({
            name: line.trim(),
            fullyQualifiedName: fullyQualifiedName.join('/') + '/' + line.trim(),
          })
        }
      }
    }

    /**
     * Gets state by name
     * @param name: The name of the state to get
     * @returns: The state with the given name
     */
    private getStateByName(name: string): State {
      // Finds the state by the name
      const state = this._states.find(state => state.name === name)

      // If state is not found, then an error is thrown
      if (!state)
        throw new Error(`No state with name ${name} found`)

      return state
    }

    /**
     * Gets class by name
     * @param name: name of the class to get
     * @returns: The class with the given name
     */
    private getClassByName(name: string): Class | undefined {
      return this._classes.find(classDefinition => classDefinition.name === name)
    }
}
