export default class Tree {
    value: string;
    children: Tree[];

    constructor(value: string, children: Tree[] = []) {
        this.value = value;
	    this.children = children;
    }

    toString(): string {
        return this.value.toString();
    }
}
