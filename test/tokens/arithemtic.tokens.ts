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
    new Token('x', 1, 11, {
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
    new Token('y', 1, 19, {
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
    new Token('{', 3, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('add', 3, 5, {
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
    new Token(',', 3, 13, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('sub', 3, 15, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(':', 3, 18, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('int', 3, 19, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token(';', 4, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('mul', 4, 5, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(':', 4, 8, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('float', 4, 10, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token(',', 4, 15, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('div', 4, 17, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(':', 4, 20, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('float', 4, 21, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token(';', 5, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('add', 5, 5, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('=', 5, 9, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('x', 5, 11, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('+', 5, 13, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('y', 5, 15, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(';', 6, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('sub', 6, 5, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('=', 6, 9, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('x', 6, 11, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('-', 6, 13, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('y', 6, 15, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(';', 7, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('mul', 7, 5, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('=', 7, 9, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('x', 7, 11, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('*', 7, 13, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('y', 7, 15, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(';', 8, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('div', 8, 5, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('=', 8, 9, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('x', 8, 11, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('/', 8, 13, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('(', 8, 15, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('float', 8, 16, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token(')', 8, 21, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('y', 8, 22, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token(';', 9, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('return', 9, 5, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('0', 9, 12, {
        name: 'INTEGER',
        fullyQualifiedName: 'TOKENS/LITERALS/INTEGER',
    }),
    new Token(';', 10, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('}', 10, 3, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
];

export default tokens.reduce((str: string, token: Token) => str + token.toString() + '\n', '');
