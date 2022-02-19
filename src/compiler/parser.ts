import Lexer from './lexer';
import Token from './token';

import { readFileSync } from 'fs';

export default class Parser {
    private _input: string;
    private _lexer: Lexer;

    constructor(inputFile: string, classesFile: string, rulesFile: string, statesFile: string, tokensFile: string) {
        this._input = readFileSync(inputFile).toString();
        
        this._lexer = new Lexer({
            name: 'YeetScript',
            classes: classesFile,
            rules: rulesFile,
            states: statesFile,
            tokens: tokensFile
        });
    }

    public parse(includeWhitespaces: boolean = false, includeNewlines: boolean = false): Array<Token> {
        let tokens = this._lexer.tokenize(this._input);

        if(!includeWhitespaces) {
            tokens = tokens.filter(token => token.information.name !== 'WHITESPACE');
        }

        if(!includeNewlines) {
            tokens = tokens.filter(token => token.information.name !== 'NEWLINE');
        }

        return tokens;
    }
}