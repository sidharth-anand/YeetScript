import Token from '../../src/compiler/token';

const tokens = [
    new Token('meth', 1, 1, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('literal', 1, 6, {
        name: 'IDENTIFIER',
        fullyQualifiedName: 'TOKENS/IDENTIFIER',
    }),
    new Token('(', 1, 13, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token(')', 1, 14, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token(':', 1, 15, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('int', 1, 17, {
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
    new Token('+', 2, 13, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('987', 2, 14, {
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
    new Token('float', 3, 10, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('=', 3, 16, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('-', 3, 18, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('23.67', 3, 19, {
        name: 'FLOAT',
        fullyQualifiedName: 'TOKENS/LITERALS/FLOAT',
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
    new Token('string', 4, 10, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('=', 4, 17, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('"hello"', 4, 19, {
        name: 'STRING',
        fullyQualifiedName: 'TOKENS/LITERALS/STRING',
    }),
    new Token(';', 5, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('yeet', 5, 7, {
        name: 'KEYWORD',
        fullyQualifiedName: 'TOKENS/KEYWORD',
    }),
    new Token('0', 5, 12, {
        name: 'INTEGER',
        fullyQualifiedName: 'TOKENS/LITERALS/INTEGER',
    }),
    new Token(';', 6, 1, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
    new Token('}', 6, 3, {
        name: 'DELIMITER',
        fullyQualifiedName: 'TOKENS/DELIMITER',
    }),
];

export default tokens.reduce(
    (str: string, token: Token) => str + token.toString() + '\n',
    '',
);
