import Lexer from './lexer'
import Token from './token'

import {readFileSync} from 'fs';

/**
 * Parser: contains functions to parse the source code.
 */
export default class Parser {
    private _input: string;
    private _lexer: Lexer;

    /**
     * Creates an instance of Parser.
     * @param inputFile relatve path to the file to parse
     * @param classesFile relatve path to the file with class definitions
     * @param rulesFile relatve path to the file with rules
     * @param statesFile relative path to the file with the state definitions
     * @param tokensFile relative path to the file with the token definitions
     */
    constructor(inputFile: string, classesFile: string, rulesFile: string, statesFile: string, tokensFile: string, errorsFile: string) {
      this._input = readFileSync(inputFile).toString()

      this._lexer = new Lexer({
        name: 'YeetScript',
        classes: classesFile,
        rules: rulesFile,
        states: statesFile,
        tokens: tokensFile,
        errors: errorsFile
      })
    }

    /**
     * Parses parser
     * @param {boolean} [includeWhitespaces] boolean indicating whether to include whitespaces in the output
     * @param {boolean} [includeNewlines] boolean indicating whether to include newlines in the output
     * @param {boolean} [includeComments] boolean indicating whether to include comments in the output
     * @returns parse
     */
    public parse(includeWhitespaces = false, includeNewlines = false, includeComments = false): Array<Token> {
      let tokens = this._lexer.tokenize(this._input)

      if (!includeWhitespaces) {
        tokens = tokens.filter(token => token.information.name !== 'WHITESPACE')
      }

      if (!includeNewlines) {
        tokens = tokens.filter(token => token.information.name !== 'NEWLINE')
      }

      if (!includeComments) {
        tokens = tokens.filter(token => token.information.name !== 'COMMENT')
      }

      return tokens
    }
}
