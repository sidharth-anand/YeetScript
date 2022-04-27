import Grammar, { BasicLR1Item } from './grammar';
import Item from './lalrItem';
import {includeEachOtherUsingEquals, indexOfUsingEquals, addUnique, getOrCreateArray} from './tools';

export class Kernel {
	index: number;
	items: BasicLR1Item[];
	grammar?: Grammar;
	closure: BasicLR1Item[];
	gotos: Record<any, number> = {};
	keys = [];

	constructor(index: number, items: BasicLR1Item[], grammar: Grammar) {
	    this.index = index;
	    this.items = items;
	    this.closure = [...this.items];
	    this.grammar = grammar;
	}

	equals(that: Kernel): boolean {
	    return includeEachOtherUsingEquals(this.items, that.items);
	}

	toString() {
	    return 'closure{' + this.items + '} = {' + this.closure + '}';
	}
}

export default class LRClosureTable {
    grammar: Grammar;
    kernels: Kernel[];

    constructor(grammar: Grammar) {
        this.grammar = grammar;
        this.kernels = [];
        this.kernels.push(new Kernel(0, [new Item(this.grammar, this.grammar.rules[0], 0)], this.grammar));

        for (let i = 0; i < this.kernels.length;) {
            const kernel = this.kernels[i];
            this.updateClosure(kernel);

            if (this.addGotos(kernel, this.kernels)) {
                i = 0;
            } else {
                ++i;
            }
        }
    }

    updateClosure(kernel: Kernel) {
        for (let i = 0; i < kernel.closure.length; ++i) {
            const newItemsFromSymbolAfterDot = kernel.closure[i].newItemsFromSymbolAfterDot();

            for (let j = 0; j < newItemsFromSymbolAfterDot.length; j++) {
                newItemsFromSymbolAfterDot[j].addUniqueTo(kernel.closure);
            }
        }
    }

    addGotos(kernel: Kernel, kernels: Kernel[]) {
        let lookAheadsPropagated = false;
        const newKernels = {};

        for (let i = 0; i < kernel.closure.length; ++i) {
            const item = kernel.closure[i];
            const newItem = item.newItemAfterShift();

            if (newItem !== undefined) {
                const symbolAfterDot = item.rule.development[item.dotIndex];

                addUnique(symbolAfterDot, kernel.keys);
                newItem.addUniqueTo(getOrCreateArray(newKernels, symbolAfterDot));
            }
        }

        for (let i = 0; i < kernel.keys.length; ++i) {
            const key = kernel.keys[i];
            const newKernel = new Kernel(kernels.length, newKernels[key], this.grammar);
            let targetKernelIndex = indexOfUsingEquals(newKernel, kernels);

            if (targetKernelIndex < 0) {
                kernels.push(newKernel);
                targetKernelIndex = newKernel.index;
            } else {
                for (let j = 0; j < newKernel.items.length; ++j) {
                    lookAheadsPropagated ||= newKernel.items[j].addUniqueTo(kernels[targetKernelIndex].items);
                }
            }

            kernel.gotos[key] = targetKernelIndex;
        }

        return lookAheadsPropagated;
    }
}

