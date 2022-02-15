import Lexer from './lexer';

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

    public parse() {
        const tokens = this._lexer.tokenize(this._input);

        for (const token of tokens) {
            console.log(token.toFormattedString());
        }
    }
}