import Rule from './rule'

/**
 * Class to represent language's states
 */
export default class State {
    private _name: string;
    private _outgoingRules: Array<Rule> = [];

    constructor(name: string) {
      this._name = name
    }

    public get name(): string {
      return this._name
    }

    /**
     * Adds outgoing rule to the list of rules
     * @param rule to add
     */
    public addOutgoingRule(rule: Rule): void {
      this._outgoingRules.push(rule)
    }

    /**
     * Gets matching rule for character
     * @param character
     * @returns matching rule, else error
     */
    public getMatchingRule(character: string): Rule | undefined {
        return this._outgoingRules.find(rule => rule.doesRuleMatch(character));
    }
}
