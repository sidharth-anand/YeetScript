import _ = require('lodash');

function includes(array1: any[], array2: any[]) {
    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            return false;
        }
    }

    return true;
}

export function includeEachOther(array1: any[], array2: any[]) {
    return includes(array1, array2) && includes(array2, array1);
}

export function includesUsingEquals(array1: any[], array2: any[]) {
    for (let i = 0; i < array1.length; i++) {
        if (indexOfUsingEquals(array1[i], array2) < 0) {
            return false;
        }
    }

    return true;
}

export function includeEachOtherUsingEquals(array1: any[], array2: any[]) {
    return includesUsingEquals(array1, array2) && includesUsingEquals(array2, array1);
}

export function getOrCreateArray(dictionary: Record<any, any[]>, key:any): any[] {
    let result = dictionary[key];

    if (result === undefined) {
        result = [];
        dictionary[key] = result;
    }

    return result;
}

export function trimElements(array: string[]): string[] {
    const result: string[] = [];

    for (let i = 0; i < array.length; i++) {
        result[i] = array[i].trim();
    }

    return result;
}

export function isElement(element: any, array: any[]): boolean {
    for (let i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return true;
        }
    }

    return false;
}

export function addUnique(element: any, array: any[]): boolean {
    if (!isElement(element, array)) {
        array.push(element);

        return true;
    }

    return false;
}

function isElementUsingEquals(element: any, array: any[]): boolean {
    for (let i = 0; i < array.length; i++) {
        if (element.equals(array[i])) {
            return true;
        }
    }

    return false;
}

export function addUniqueUsingEquals(element: any, array: any[]): boolean {
    if (!isElementUsingEquals(element, array)) {
        array.push(element);

        return true;
    }

    return false;
}

export function indexOfUsingEquals(element: any, array: any[]): number {
    for (let i = 0; i < array.length; i++) {
        if (element.equals(array[i])) {
            return i;
        }
    }

    return -1;
}