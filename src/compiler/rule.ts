import Class from './class';
import State from './State';

import { TokenInformation } from './tokenInformation';

export default class Rule {
    private _outgoingState: State;
    private _matchAgainst: string | Class;
    private _emitToken: TokenInformation | null;

    constructor(outgoingState: State, matchAgainst: string | Class, emitToken: TokenInformation | null = null) {
        this._outgoingState = outgoingState;
        this._matchAgainst = matchAgainst;
        this._emitToken = emitToken;
    }

    public get outgoingState(): State {
        return this._outgoingState;
    }

    public get emitToken(): TokenInformation | null {
        return this._emitToken;
    }

    public doesRuleMatch(character: string): boolean {
        if (character.length > 1)
            throw new Error("The doesRuleMatch function accepts only single characters");

        if (typeof this._matchAgainst === 'string')
            return this._matchAgainst === '**' || this._matchAgainst === character;
        else
            return this._matchAgainst.checkMatch(character);
    }
}