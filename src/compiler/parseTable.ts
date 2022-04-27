import Grammar from './grammar';
import LRClosureTable from './lrClosureTable';
import LRTable from './lrTable';
import Tree from './tree';

export default class ParseTable {
    input: string[];
    grammar: Grammar;
    lrClosureTable: LRClosureTable;
    lrTable: LRTable;
    constructor(input: string[], grammar: string) {
        this.input = input;
        this.grammar = new Grammar(grammar);
        this.lrClosureTable = new LRClosureTable(this.grammar);
        this.lrTable = new LRTable(this.lrClosureTable);
    }

    parseInput() {
        const stack: any[] = [0];
        function stateIndex() {
            return stack[2 * ((stack.length - 1) >> 1)];
        }
    
        const EPSILON = '\'\'';
        const tokens = this.input;
        let tokenIndex = 0;
        let token: any = tokens[tokenIndex];
        let state = this.lrTable.states[stateIndex()];
        let action = state?.keys?.get(token);
        let actionElement = typeof action === 'undefined' ? undefined : action[0];
    
        while (typeof action !== 'undefined' && actionElement?.toString() !== 'r0') {
            if (actionElement!.actionType === 's') {
                stack.push(tokens[tokenIndex++]);
                stack.push(actionElement!.actionValue);
            } else if (actionElement!.actionType === 'r') {
                const ruleIndex = actionElement!.actionValue;
                const rule = this.lrTable.grammar.rules[ruleIndex];
                const removeCount = rule.development.includes(EPSILON) ? 0 : rule.development.length * 2;
                const removedElements = stack.splice(stack.length - removeCount, removeCount);
                const node = new Tree(rule.nonterminal, []);
    
                for (let j = 0; j < removedElements.length; j += 2) {
                    node.children.push(removedElements[j]);
                }
    
                stack.push(node);
            } else {
                stack.push(Number.parseInt(actionElement!.toString(), 10));
            }
            
            state = this.lrTable.states[stateIndex()];
            token = stack.length % 2 === 0 ? stack[stack.length - 1] : tokens[tokenIndex];
            action = state?.keys.get((typeof token === 'string' || typeof token === 'number') ? token : token.value);
            actionElement = typeof action === 'undefined' ? undefined : action[0];
        }
    
        if (actionElement?.toString() === 'r0') {
            console.log('Parsed succesful');
            return stack[0];
        }
    
        console.log('Parsing failed');
        return stack;
    }
    
}

