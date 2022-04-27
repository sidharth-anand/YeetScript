import {isElement, addUnique, getOrCreateArray, trimElements, addUniqueUsingEquals, includeEachOther} from './tools';

export default class Grammar {
    text: string;
    EPSILON = '\'\'';
    alphabet: Set<string> = new Set();
    nonterminals: Set<string> = new Set();
    terminals: Set<string> = new Set();
    rules: LRRule[] = [];
    firsts: Record<string, string[]> = {};
    follows: Record<string, string[]> = {};
    axiom?: string;

    constructor(text: string) {
        this.text = text;
        this.axiom = undefined;

        this.initializeRulesAndAlphabetAndNonterminals();
        this.initializeAlphabetAndTerminals();
        this.initializeFirsts();
        this.initializeFollows();
    }

    toString() {
        return this.rules.join('\n');
    }

    getRulesForNonterminal(nonterminal: any) {
        const result = [];

        for (let i = 0; i < this.rules.length; i++) {
            const rule = this.rules[i];

            if (nonterminal === rule.nonterminal) {
                result.push(rule);
            }
        }

        return result;
    }

    getSequenceFirsts(sequence: any) {
        const result: Set<string> = new Set();
        let epsilonInSymbolFirsts = true;

        for (let j = 0; j < sequence.length; j++) {
            const symbol = sequence[j];
            epsilonInSymbolFirsts = false;

            if (this.terminals.has(symbol)) {
                result.add(symbol);
                break;
            }

            for (let k = 0; k < this.firsts[symbol]?.length ?? 0; k++) {
                const first = this.firsts[symbol][k];

                epsilonInSymbolFirsts ||= first === this.EPSILON;
                if (first !== this.EPSILON)
                    result.add(first);
            }

            epsilonInSymbolFirsts ||= this.firsts[symbol] === undefined || this.firsts[symbol].length === 0;

            if (!epsilonInSymbolFirsts) {
                break;
            }
        }

        if (epsilonInSymbolFirsts) {
            result.add(this.EPSILON);
        }

        return result;
    };

    initializeRulesAndAlphabetAndNonterminals(): void {
        const lines = this.text.split('\n');

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();

            if (line !== '') {
                const rule = new LRRule(this.rules.length, line);
                this.rules.push(rule);

                if (this.axiom === undefined) {
                    this.axiom = rule.nonterminal;
                }

                this.alphabet.add(rule.nonterminal);
                this.nonterminals.add(rule.nonterminal);
            }
        }
    }

    initializeAlphabetAndTerminals(): void {
        for (let i = 0; i < this.rules.length; i++) {
            const rule = this.rules[i];

            for (let j = 0; j < rule.development.length; j++) {
                const symbol = rule.development[j];

                if (symbol !== this.EPSILON && !this.nonterminals.has(symbol)) {
                    this.alphabet.add(symbol);
                    this.terminals.add(symbol);
                }
            }
        }
    }

    initializeFirsts(): void {
        let notDone;

        do {
            notDone = false;

            for (let i = 0; i < this.rules.length; i++) {
                const rule = this.rules[i];
                const nonterminalFirsts = getOrCreateArray(this.firsts, rule.nonterminal);

                notDone ||= ((rule.development.length === 1 && rule.development[0] === this.EPSILON) ? addUnique(this.EPSILON, nonterminalFirsts) : this.collectDevelopmentFirsts(rule.development, nonterminalFirsts));
            }
        } while (notDone);
    }

    collectDevelopmentFirsts(development: string[], nonterminalFirsts: string[]): boolean {
        let result = false;
        let epsilonInSymbolFirsts = true;

        for (let j = 0; j < development.length; j++) {
            const symbol = development[j];
            epsilonInSymbolFirsts = false;

            if (this.terminals.has(symbol)) {
                result ||= addUnique(symbol, nonterminalFirsts);
                break;
            }

            for (let k = 0; k < this.firsts[symbol]?.length ?? 0; k++) {
                const first = this.firsts[symbol][k];

                epsilonInSymbolFirsts ||= first === this.EPSILON;
                if (first !== this.EPSILON)
                    result ||= addUnique(first, nonterminalFirsts);
            }

            if (!epsilonInSymbolFirsts) {
                break;
            }
        }

        if (epsilonInSymbolFirsts) {
            result ||= addUnique(this.EPSILON, nonterminalFirsts);
        }

        return result;
    }

    initializeFollows(): void {
        let notDone;

        do {
            notDone = false;

            for (let i = 0; i < this.rules.length; i++) {
                const rule = this.rules[i];

                if (i === 0) {
                    const nonterminalFollows = getOrCreateArray(this.follows, rule.nonterminal);

                    notDone ||= addUnique('$', nonterminalFollows);
                }

                for (let j = 0; j < rule.development.length; j++) {
                    const symbol = rule.development[j];

                    if (this.nonterminals.has(symbol)) {
                        const symbolFollows = getOrCreateArray(this.follows, symbol);
                        const afterSymbolFirsts = this.getSequenceFirsts(rule.development.slice(j + 1));

                        for (const first of afterSymbolFirsts) {
                            if (first === this.EPSILON) {
                                const nonterminalFollows = this.follows[rule.nonterminal];

                                for (let l = 0; l < nonterminalFollows?.length ?? 0; l++) {
                                    notDone ||= addUnique(nonterminalFollows[l], symbolFollows);
                                }
                            } else {
                                notDone ||= addUnique(first, symbolFollows);
                            }
                        }
                    }
                }
            }
        } while (notDone);
    }
}

export class LRRule {
	index: number;
	split: string[];
	nonterminal: string;
	development: string[];

	constructor(index: number, text: string) {
	    this.index = index;
	    this.split = text.split('->');
	    this.nonterminal = this.split[0].trim();
	    this.development = trimElements(this.split[1].trim().split(' '));
	}

	toString() {
	    return this.nonterminal + ' -> ' + this.development.join(' ');
	}

	equals(that: this) {
	    if (this.nonterminal !== that.nonterminal) {
	        return false;
	    }

	    if (this.development.length !== that.development.length) {
	        return false;
	    }

	    for (const i in this.development) {
	        if (this.development[i] !== that.development[i]) {
	            return false;
	        }
	    }

	    return true;
	}
}

export class BasicItem {
    rule: LRRule;
    grammar: Grammar;
    dotIndex: number;
    EPSILON = '\'\'';
    lookAheads: string[] = [];

    constructor(grammar: Grammar, rule: LRRule, dotIndex: number) {
        this.rule = rule;
        this.grammar = grammar;
        this.dotIndex = dotIndex;
    }

    addUniqueTo(items: BasicItem[]) {
        return addUniqueUsingEquals(this, items);
    }

    newItemsFromSymbolAfterDot() {
        const result: BasicItem[] = [];
        const nonterminalRules = this.grammar.getRulesForNonterminal(this.rule.development[this.dotIndex]);

        for (let j = 0; j < nonterminalRules.length; j++) {
            addUniqueUsingEquals(new BasicLR1Item(this.grammar, nonterminalRules[j], 0), result);
        }

        return result;
    }

    newItemAfterShift() {
        if (this.dotIndex < this.rule.development.length && this.rule.development[this.dotIndex] !== this.EPSILON) {
            return new BasicLR1Item(this.grammar, this.rule, this.dotIndex + 1);
        }
    }

    equals(that: this) {
        return this.rule.equals(that.rule) && (this.dotIndex === that.dotIndex);
    }

    toString() {
        return this.rule.nonterminal + ' -> ' + this.rule.development.slice(0, this.dotIndex).join(' ') + '.' +
				(isElement(this.EPSILON, this.rule.development) ? '' : this.rule.development.slice(this.dotIndex).join(' '));
    }
}

export class BasicLR1Item extends BasicItem {
    constructor(grammar: Grammar, rule: LRRule, dotIndex: number) {
        super(grammar, rule, dotIndex);
        this.lookAheads = rule.index === 0 ? ['$'] : [];
    }

    newItemsFromSymbolAfterDot() {
        const result: BasicItem[] = super.newItemsFromSymbolAfterDot();

        if (result.length === 0) {
            return result;
        }

        const newLookAheads: Set<string> = new Set();
        let epsilonPresent = false;
        const firstsAfterSymbolAfterDot = this.grammar.getSequenceFirsts(this.rule.development.slice(this.dotIndex + 1));

        for (const first of firstsAfterSymbolAfterDot) {
            if (this.EPSILON === first) {
                epsilonPresent = true;
            } else {
                newLookAheads.add(first);
            }
        }

        if (epsilonPresent) {
            for (let i = 0; i < this.lookAheads.length; i++) {
                newLookAheads.add(this.lookAheads[i]);
            }
        }

        for (let i = 0; i < result.length; i++) {
            result[i].lookAheads = [...newLookAheads];
        }

        return result;
    }

    newItemAfterShift() {
        const result = super.newItemAfterShift();

        if (result !== undefined) {
            result.lookAheads = [...this.lookAheads];
        }

        return result;
    }

    addUniqueTo(items: BasicItem[]) {
        let result = false;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];

            if (super.equals((item as any))) {
                for (let i = 0; i < this.lookAheads.length; i++) {
                    result ||= addUnique(this.lookAheads[i], item.lookAheads);
                }

                return result;
            }
        }

        items.push(this);

        return true;
    }

    basicEquals(that: this) {
        return super.equals(that);
    }

    toString() {
        return '[' + super.toString() + ', ' + this.lookAheads.join('/') + ']';
    }
}
