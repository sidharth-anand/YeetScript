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
    new Token('add', 2, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 2, 8, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 2, 10, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(';', 3, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('sub', 3, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 3, 8, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 3, 9, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(';', 4, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('mul', 4, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 4, 8, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('float', 4, 10, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(';', 5, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('div', 5, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 5, 8, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('float', 5, 9, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(';', 6, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('add', 7, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('=', 7, 9, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('x', 7, 11, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('+', 7, 13, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('y', 7, 15, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 8, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('sub', 8, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('=', 8, 9, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('x', 8, 11, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('-', 8, 13, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('y', 8, 15, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 9, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('mul', 9, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('=', 9, 9, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('x', 9, 11, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('*', 9, 13, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('y', 9, 15, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 10, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('div', 10, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('=', 10, 9, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('x', 10, 11, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('/', 10, 13, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('(', 10, 15, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('float', 10, 16, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(')', 10, 21, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('y', 10, 22, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 11, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('add', 12, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('++', 12, 8, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token(';', 13, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('--', 13, 5, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('sub', 13, 7, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 14, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('mul', 14, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('=', 14, 9, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('mul', 14, 11, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('**', 14, 15, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('2', 14, 18, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(';', 15, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('add', 16, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('+=', 16, 9, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('sub', 16, 12, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 17, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('sub', 17, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('-=', 17, 9, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('add', 17, 12, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 18, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('mul', 18, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('*=', 18, 9, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('div', 18, 12, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 19, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('div', 19, 5, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('/=', 19, 9, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('mul', 19, 12, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 20, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('yeet', 21, 5, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('0', 21, 10, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(';', 22, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('}', 22, 3, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
];

export default tokens.reduce((str: string, token: Token) => str + token.toString() + '\n', '');
