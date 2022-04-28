import Grammar from './grammar';
import LRClosureTable from './lrClosureTable';
import {isElement} from './tools';


export class LRState {
    private _keys: Map<string, Array<LRAction>> = new Map();

    constructor(public index: number) {}

    addToKey(key: string, action: LRAction) {
        if (!Array.from(this._keys.keys()).includes(key)) {
            this._keys.set(key, [action]);
        } else {
            this._keys.set(key, [...this._keys.get(key)!, action]);
        }
    }

    get keys(): Map<string, Array<LRAction>> {
        return this._keys;
    }
}

class LRAction {
    actionType: string;
    actionValue: number;

    constructor(actionType: string, actionValue: number) {
        this.actionType = actionType;
	    this.actionValue = actionValue;
    }

    toString() {
        return this.actionType + this.actionValue;
    }
}

export default class LRTable {
    grammar: Grammar;
    states: LRState[];
    EPSILON = '\'\'';

    constructor(closureTable: LRClosureTable) {
        this.grammar = closureTable.grammar;
	    this.states = [];

        for (let i = 0; i < closureTable.kernels.length; i++) {
            const kernel = closureTable.kernels[i];
            const state = new LRState(this.states.length);
            this.states.push(state);

            for (let j = 0; j < kernel.keys.length; j++) {
                const key = kernel.keys[j];
                const nextStateIndex = kernel.gotos[key];

                state.addToKey(key, new LRAction((closureTable.grammar.terminals.has(key) ? 's' : ''), nextStateIndex));
            }

            for (let j = 0; j < kernel.closure.length; j++) {
                const item = kernel.closure[j];

                if (item.dotIndex === item.rule.development.length || item.rule.development[0] === this.EPSILON) {
                    for (let k = 0; k < item.lookAheads.length; k++) {
                        const lookAhead = item.lookAheads[k];
                        state.addToKey(lookAhead, new LRAction('r', item.rule.index));
                    }
                }
            }
        }
    }
}
