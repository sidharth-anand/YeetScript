import Class from './class';
import State from './state';

import {TokenInformation} from './tokenInformation';

/**
 * Class to represent lanugage rules
 */
export default class Rule {
    private _outgoingState: State;
    private _matchAgainst: string | Class;
    private _emitToken: TokenInformation | null;

    /**
     * Creates an instance of rule.
     * @param outgoingState last state the lexer was in before the rule was applied
     * @param matchAgainst next character to match against
     * @param [emitToken] emitted token if the rule matches
     */
    constructor(outgoingState: State, matchAgainst: string | Class, emitToken: TokenInformation | null = null) {
      this._outgoingState = outgoingState
      this._matchAgainst = matchAgainst
      this._emitToken = emitToken
    }

    public get outgoingState(): State {
      return this._outgoingState
    }

    public get emitToken(): TokenInformation | null {
      return this._emitToken
    }

    /**
     * Checks if the current rule matches the passed character
     * @param character
     * @returns true if rule match, false otherwise
     */
    public doesRuleMatch(character: string): boolean {
        if (character.length > 1)
            throw new Error('The doesRuleMatch function accepts only single characters');

      if (typeof this._matchAgainst === 'string')
        return this._matchAgainst === '**' || this._matchAgainst === character
      return this._matchAgainst.checkMatch(character)
    }
}
