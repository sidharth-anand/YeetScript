export default class Class {
    private _name: string;
    private _rawContents: Array<string>;
    private matches: Array<RegExp>;

    constructor(name: string, contents: Array<string>) {
        this._name = name;
        this._rawContents = contents;
        this.matches = contents.map(classContent => classContent.length == 1 ? new RegExp(this.escapeRegExp(classContent)) : new RegExp(classContent));
    }

    public get rawContents(): Array<string> {
        return this._rawContents;
    } 

    public get name(): string {
        return this._name;
    }

    public checkMatch(character: string): boolean {
        if (character.length > 1 && this._name !== 'KEYWORDS')
            throw new Error("The checkMatch function accepts only single characters");

        return this.matches.some(match => match.test(character));
    }

    private escapeRegExp(raw: string): string {
        return raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}