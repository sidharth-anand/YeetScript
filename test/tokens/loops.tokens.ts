import Token from '../../src/compiler/token';

const tokens = [
    new Token('meth', 1, 1, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('sum', 1, 6, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('(', 1, 9, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('n', 1, 10, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(':', 1, 11, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('int', 1, 13, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token(')', 1, 16, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token(':', 1, 17, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('int', 1, 19, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('{', 2, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('j', 2, 4, {
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
    new Token(';', 3, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('sum', 3, 7, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(':', 3, 10, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('int', 3, 12, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('=', 3, 16, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('0', 3, 18, {
        name: 'INTEGER',
        fullyQualifiedName: 'TOKENS/LITERALS/INTEGER',
    }),
    new Token(';', 4, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('for', 4, 7, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('(', 4, 11, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('j', 4, 12, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('=', 4, 14, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('1', 4, 16, {
        name: 'INTEGER',
        fullyQualifiedName: 'TOKENS/LITERALS/INTEGER',
    }),
    new Token(';', 4, 17, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('j', 4, 19, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('<=', 4, 21, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('n', 4, 24, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(';', 4, 25, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('j', 4, 27, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('++', 4, 28, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token(')', 5, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('{', 6, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('sum', 6, 11, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('=', 6, 15, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('sum', 6, 17, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('+', 6, 21, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('j', 6, 23, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(';', 7, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('}', 8, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('yeet', 8, 7, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('sum', 8, 12, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(';', 9, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('}', 9, 3, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
];

export default tokens.reduce(
    (str: string, token: Token) => str + token.toString() + '\n',
    '',
);
