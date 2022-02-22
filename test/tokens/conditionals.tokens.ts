import Token from '../../src/compiler/token';

const tokens = [
    new Token('meth', 1, 1, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('func', 1, 6, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('(', 1, 10, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('x', 1, 11, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 1, 12, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 1, 14, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(',', 1, 17, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('y', 1, 19, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 1, 20, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 1, 21, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(')', 1, 24, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(':', 1, 25, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('int', 1, 27, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('{', 2, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('num1', 2, 4, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 2, 8, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 2, 9, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('=', 2, 13, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('x', 2, 15, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 3, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('num2', 3, 7, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 3, 11, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 3, 12, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('=', 3, 16, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('y', 3, 18, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 4, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('if', 4, 7, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('(', 4, 9, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('num1', 4, 10, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('>', 4, 15, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('num2', 4, 17, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(')', 5, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('{', 6, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('yeet', 6, 11, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('num1', 6, 16, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 7, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('}', 8, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('else', 8, 7, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('{', 9, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('yeet', 9, 11, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('num2', 9, 16, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 10, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('}', 11, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('yeet', 11, 7, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('0', 11, 12, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(';', 12, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('}', 12, 3, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
];

export default tokens.reduce((str: string, token: Token) => str + token.toString() + '\n', '');
