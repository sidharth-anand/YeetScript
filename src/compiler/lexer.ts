import Class from './class';
import Rule from './rule';
import State from './state';
import Token from './token';

import { LanguageDefinition } from './definition';
import { TokenInformation } from './tokenInformation';

import { readFileSync } from 'fs';

export default class Lexer {
    private _languageDefinition: LanguageDefinition;

    private _classes: Array<Class> = [];
    private _states: Array<State> = [];
    private _tokenTypes: Array<TokenInformation> = [];

    private _currentState: State;

    constructor(languageDefinition: LanguageDefinition) {
        this._languageDefinition = languageDefinition;

        this.initializeClasses();
        this.initializeStates();
        this.initializeTokenTypes();
        this.initializeRules();

        this._currentState = this._states[0];
    }

    public tokenize(input: string): Array<Token> {
        input = input.replace('\t', ' ');
        input = input.replace('    ', ' ');

        const tokens: Array<Token> = [];

        let lineNumber = 1;
        let lastLineIndex = 0;

        let processedCharacters: Array<string> = [];

        for (let i = 0; i < input.length; i++) {
            const character = input[i];

            if (character == '\r') {
                continue;
            }

            if (character == '\n') {
                lineNumber++;
                lastLineIndex = i - 1;
            }

            const matchingRule = this._currentState.getMatchingRule(character);

            if (matchingRule.emitToken) {
                let tokenType = matchingRule.emitToken;

                const keywordsClass = this._classes.find(classDefinition => classDefinition.name === 'KEYWORDS');

                if (keywordsClass) {
                    if(keywordsClass.checkMatch(processedCharacters.join('')))
                        tokenType = this._tokenTypes.find(tokenType => tokenType.name === 'KEYWORD')!;
                }

                const token = new Token(processedCharacters.join(''), lineNumber, i - processedCharacters.length - lastLineIndex + 1, tokenType);
                tokens.push(token);

                processedCharacters = [];
            }

            processedCharacters.push(character);
        
            this._currentState = matchingRule.outgoingState;
        }

        if (processedCharacters.length > 0) {
            const matchingRule = this._currentState.getMatchingRule('\n');

            if (matchingRule.emitToken) {
                let tokenType = matchingRule.emitToken;

                const token = new Token(processedCharacters.join(''), lineNumber, input.length - lastLineIndex, tokenType);
                tokens.push(token);
            }
        }

        return tokens;
    }

    private initializeClasses(): void {
        const classesFile = readFileSync(this._languageDefinition.classes);

        const classDefinitions = classesFile.toString().split(/\[([A-Z]*)\]/g);

        for (let i = 1; i < classDefinitions.length; i += 2) {
            const className = classDefinitions[i].trim();
            const classMatches = classDefinitions[i + 1].split('\n').map(d => d.trim()).filter(d => d.length > 0);

            this._classes.push(new Class(className, classMatches));
        }
    }

    private initializeStates(): void {
        const statesFile = readFileSync(this._languageDefinition.states);

        const stateDefinitions = statesFile.toString().split(/\[[A-Z]*\]/g).map(d => d.trim().split('\n')).flat().map(d => d.trim()).filter(d => d.length > 0);

        stateDefinitions.forEach(stateName => {
            this._states.push(new State(stateName));
        });
    }

    private initializeRules(): void {
        const rulesFile = readFileSync(this._languageDefinition.rules);

        const ruleDefinitions = rulesFile.toString().split(/\[[A-Z ]*\]/g).join('').split('\n').map(d => d.trim()).filter(d => d.length > 0);

        ruleDefinitions.forEach(ruleDefinition => {
            const definition = ruleDefinition.split(' - ');

            const incomingState = this.getStateByName(definition[0]);
            const matchTarget = this.getClassByName(definition[1]) || definition[1];


            if (!definition[2].includes('emit')) {
                const outgoingState = this.getStateByName(definition[2]);

                incomingState.addOutgoingRule(new Rule(outgoingState, matchTarget));
            } else {
                const emitDefinition = definition[2].split(' emit ');

                const tokenType = this._tokenTypes.find(type => type.name === emitDefinition[1]);
                const outgoingState = this.getStateByName(emitDefinition[0]);

                incomingState.addOutgoingRule(new Rule(outgoingState, matchTarget, tokenType));
            }
        });
    }

    public initializeTokenTypes(): void {
        const tokenTypesFile = readFileSync(this._languageDefinition.tokens);

        const tokenTypes = tokenTypesFile.toString().split('\n').map(d => d.replace('\r', '')).filter(d => d.length > 0);

        const fullyQualifiedName: Array<string> = [];

        let lastIndent = 0;

        for (let i = 0; i < tokenTypes.length; i++) {
            let line = tokenTypes[i];
            let currentIndent = 0;

            while (line.startsWith('    ')) {
                line = line.slice(4);
                currentIndent++;
            }

            if (currentIndent < lastIndent)
                fullyQualifiedName.pop();

            lastIndent = currentIndent;

            if (line.startsWith('[') && line.endsWith(']')) {
                fullyQualifiedName.push(line.slice(1, -1));
            } else {
                this._tokenTypes.push({
                    name: line.trim(),
                    fullyQualifiedName: fullyQualifiedName.join('/') + '/' + line.trim()
                });
            }
        }
    }

    private getStateByName(name: string): State {
        const state = this._states.find(state => state.name === name);

        if (!state)
            throw new Error(`No state with name ${name} found`);

        return state;
    }

    private getClassByName(name: string): Class | undefined {
        return this._classes.find(classDefinition => classDefinition.name === name);
    }
}