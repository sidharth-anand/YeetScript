import * as chalk from 'chalk';

import { TokenInformation } from "./tokenInformation";

export default class Token {
    private _tokenString: string;

    private _lineNumber: number;
    private _characterNumber: number;

    private _information: TokenInformation;

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
        return `${this._tokenString} (${this._lineNumber}, ${this._characterNumber})`;
    }

    public toFormattedString(): string {
        return `${chalk.greenBright(this._tokenString).padEnd(25)} ${chalk.cyanBright(`[${this._information.fullyQualifiedName}]`).padEnd(50)} (Ln ${this._lineNumber.toString().padStart(2)}, Col ${this._characterNumber.toString().padStart(2)})`;
    }
}