/* eslint-disable unicorn/filename-case */
import Grammar, {BasicLR1Item, LRRule} from './grammar';

class Item extends BasicLR1Item {
    // eslint-disable-next-line no-useless-constructor
    constructor(grammar: Grammar, rules: LRRule, dotIndex: number) {
        super(grammar, rules, dotIndex);
    }

    grammarType = 'LALR(1)';
}

export default Item;
