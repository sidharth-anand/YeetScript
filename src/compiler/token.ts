import * as chalk from 'chalk';

import {TokenInformation} from './tokenInformation';

/**
 * Class to represent lanugage tokens
 */
export default class Token {
    private _tokenString: string;

    private _lineNumber: number;
    private _characterNumber: number;

    private _information: TokenInformation;

    /**
     * Creates an instance of token.
     * @param tokenString token string. Example: "and", "for", ";"
     * @param lineNumber represents the line number the token is on
     * @param characterNumber represents the index of the character in the line
     * @param information further details about the token (name and a full name)
     */
    constructor(tokenString: string, lineNumber: number, characterNumber: number, information: TokenInformation) {
        this._tokenString = tokenString;

        this._lineNumber = lineNumber;
        this._characterNumber = characterNumber;

        this._information = information;
    }

    public get tokenString(): string {
        return this._tokenString;
    }

    public get lineNumber(): number {
        return this._lineNumber;
    }

    public get characterNumber(): number {
        return this._characterNumber;
    }

    public get information(): TokenInformation {
        return this._information;
    }

    public toString(): string {
        return `${this._tokenString} ${this._information.name} (${this._lineNumber}, ${this._characterNumber})`;
    }

    public toFormattedString(): string {
        return `${chalk.greenBright(this._tokenString === '\n' ? ' ' : this._tokenString).padEnd(25)} ${chalk.cyanBright(`[${this._information.fullyQualifiedName}]`).padEnd(50)} (Ln ${this._lineNumber.toString().padStart(2)}, Col ${this._characterNumber.toString().padStart(2)})`;
    }

    public toParser(): string {
        if (!(this._information.name === 'IDENTIFIER') && !this._information.fullyQualifiedName.includes("LITERAL")) {
            return `${this._information.name}[${this._tokenString}] `;
        }

        return `${this._information.name} `;
    }
}
