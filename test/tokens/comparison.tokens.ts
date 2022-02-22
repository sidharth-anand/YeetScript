import Token from '../../src/compiler/token';

const tokens = [
    new Token('meth', 1, 1, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('func', 1, 6, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('(', 1, 10, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('a', 1, 11, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(':', 1, 12, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('int', 1, 14, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token(',', 1, 17, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('b', 1, 19, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(':', 1, 20, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('int', 1, 21, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token(')', 1, 24, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token(':', 1, 25, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('int', 1, 27, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('{', 2, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('a', 2, 4, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(':', 2, 5, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('int', 2, 7, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('=', 2, 11, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('9', 2, 13, {
        name: 'INTEGER',
        fullyQualifiedName: 'TOKENS/LITERALS/INTEGER',
    }),
    new Token(';', 3, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('b', 3, 7, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(':', 3, 8, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('int', 3, 10, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('=', 3, 14, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('5', 3, 16, {
        name: 'INTEGER',
        fullyQualifiedName: 'TOKENS/LITERALS/INTEGER',
    }),
    new Token(';', 4, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('c', 4, 7, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(':', 4, 8, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('bool', 4, 10, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(';', 5, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('if', 5, 7, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('(', 5, 9, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('a', 5, 10, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('>', 5, 12, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('b', 5, 14, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(')', 5, 15, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('{', 6, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('c', 6, 11, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('=', 6, 13, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('cap', 6, 15, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token(';', 7, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('}', 8, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('if', 8, 7, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('(', 8, 9, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('a', 8, 10, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('>=', 8, 12, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('b', 8, 15, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(')', 8, 16, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('{', 9, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('c', 9, 11, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('=', 9, 13, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('cap', 9, 15, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token(';', 10, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('}', 11, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('if', 11, 7, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('(', 11, 9, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('a', 11, 10, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('!=', 11, 12, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('b', 11, 15, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(')', 11, 16, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('{', 12, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('c', 12, 11, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('=', 12, 13, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('cap', 12, 15, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token(';', 13, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('}', 14, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('if', 14, 7, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('(', 14, 9, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('a', 14, 10, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('<=', 14, 12, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('b', 14, 14, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(')', 14, 15, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('{', 15, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('c', 15, 11, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('=', 15, 13, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('nocap', 15, 15, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token(';', 16, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('}', 17, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('if', 17, 7, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('(', 17, 9, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('a', 17, 10, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('<=', 17, 12, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('b', 17, 15, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(')', 17, 16, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('{', 18, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('c', 18, 11, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('=', 18, 13, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('nocap', 18, 15, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token(';', 19, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('}', 20, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('if', 20, 7, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('(', 20, 9, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('a', 20, 10, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('==', 20, 12, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('b', 20, 15, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(')', 20, 16, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('{', 21, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('c', 21, 11, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('=', 21, 13, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('nocap', 21, 15, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token(';', 22, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('}', 23, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('yeet', 23, 7, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('0', 23, 12, {
        name: 'INTEGER',
        fullyQualifiedName: 'TOKENS/LITERALS/INTEGER',
    }),
    new Token(';', 24, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('}', 24, 3, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
];

export default tokens.reduce(
    (str: string, token: Token) => str + token.toString() + '\n',
    '',
);
