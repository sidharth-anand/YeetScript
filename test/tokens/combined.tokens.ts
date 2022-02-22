import Token from '../../src/compiler/token';

const tokens = [
    new Token('meth', 12, 3, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('tokenize', 12, 8, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('(', 12, 16, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('input', 12, 17, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 12, 22, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('string', 12, 24, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(',', 12, 30, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('length', 12, 32, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 12, 38, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('n', 12, 40, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(')', 12, 41, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(':', 12, 42, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('array', 12, 44, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('{', 12, 49, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('string', 12, 50, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('}', 12, 56, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('{', 13, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('tokens', 13, 4, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 13, 10, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('array', 13, 12, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('{', 13, 17, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('string', 13, 18, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('}', 13, 24, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('=', 13, 26, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('[', 13, 28, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(']', 13, 29, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(';', 14, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('anotherVariable', 14, 7, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 14, 22, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('tuple', 14, 24, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('{', 14, 29, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('string', 14, 30, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(',', 14, 36, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 14, 38, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(',', 14, 41, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('boolean', 14, 43, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('}', 14, 50, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('=', 14, 52, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('{', 14, 54, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('"asd"', 14, 55, {name: 'STRING', fullyQualifiedName: 'TOKENS/LITERALS/STRING'}),
    new Token(',', 14, 60, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('1', 14, 62, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(',', 14, 63, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('cap', 14, 65, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('}', 14, 68, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(';', 15, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('lineNumber', 16, 7, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 16, 17, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 16, 19, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('=', 16, 23, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('1', 16, 25, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(';', 17, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('lastLineIndex', 17, 7, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 17, 20, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 17, 22, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('=', 17, 26, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('0', 17, 28, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(';', 18, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('processedCharacters', 19, 7, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 19, 26, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('array', 19, 28, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('<', 19, 33, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('char', 19, 34, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('>', 19, 38, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('=', 19, 40, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('[', 19, 42, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(']', 19, 43, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(';', 20, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('for', 22, 7, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('(', 22, 10, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('i', 22, 11, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 22, 12, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 22, 14, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('=', 22, 18, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('0', 22, 20, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(';', 22, 21, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('i', 22, 23, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('<', 22, 25, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('length', 22, 27, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 22, 33, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('i', 22, 35, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('++', 22, 36, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token(')', 22, 38, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('{', 23, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('character', 23, 11, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 23, 20, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('char', 23, 22, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('=', 23, 27, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('input', 23, 29, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('[', 23, 34, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('i', 23, 35, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(']', 23, 36, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(';', 24, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('if', 26, 11, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('(', 26, 14, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('character', 26, 15, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('==', 26, 25, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('"\\r"', 26, 28, {name: 'STRING', fullyQualifiedName: 'TOKENS/LITERALS/STRING'}),
    new Token(')', 26, 32, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('{', 27, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('continue', 27, 15, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(';', 28, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('}', 29, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('if', 31, 11, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('(', 31, 14, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('character', 31, 15, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('==', 31, 25, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('"\\n"', 31, 28, {name: 'STRING', fullyQualifiedName: 'TOKENS/LITERALS/STRING'}),
    new Token(')', 31, 32, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('{', 32, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('lineNumber', 32, 15, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('++', 32, 25, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token(';', 33, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('lastLineIndex', 33, 15, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('=', 33, 29, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('i', 33, 31, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('-', 33, 33, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('1', 33, 35, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(';', 34, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('}', 35, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('processedCharacters', 36, 11, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('[', 36, 30, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('i', 36, 31, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(']', 36, 32, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('=', 36, 34, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('character', 36, 36, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 37, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('}', 38, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('if', 39, 7, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('(', 39, 10, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('pLen', 39, 11, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('>', 39, 16, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('0', 39, 18, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(')', 39, 19, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('{', 40, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('if', 40, 11, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('(', 40, 13, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('emitToken', 40, 14, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(')', 40, 23, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('{', 41, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('tokenType', 41, 15, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 41, 24, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('string', 41, 26, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('=', 41, 33, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('emitTokenType', 41, 35, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 42, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('}', 43, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('}', 44, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('yeet', 45, 7, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('tokens', 45, 12, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 46, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('}', 47, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('meth', 52, 3, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('tokenize', 52, 8, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('(', 52, 16, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('input', 52, 17, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 52, 22, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('string', 52, 23, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(',', 52, 29, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('length', 52, 31, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 52, 37, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 52, 38, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(')', 52, 41, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(':', 52, 42, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('array', 52, 43, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('{', 52, 48, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('string', 52, 49, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('}', 53, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('{', 54, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('tokens', 54, 7, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 54, 13, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('array', 54, 14, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('{', 54, 19, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('string', 54, 20, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('}', 54, 26, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('=', 54, 27, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('{', 54, 28, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token("'asd'", 54, 29, {name: 'STRING', fullyQualifiedName: 'TOKENS/LITERALS/STRING'}),
    new Token(',', 54, 34, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token("'qwe'", 54, 35, {name: 'STRING', fullyQualifiedName: 'TOKENS/LITERALS/STRING'}),
    new Token(',', 54, 40, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token("'qweqwe'", 54, 42, {name: 'STRING', fullyQualifiedName: 'TOKENS/LITERALS/STRING'}),
    new Token(',', 54, 50, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token("'asdAsdasd'", 54, 52, {name: 'STRING', fullyQualifiedName: 'TOKENS/LITERALS/STRING'}),
    new Token('}', 54, 63, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(';', 55, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('another_variable', 55, 7, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 55, 23, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('tuple', 55, 24, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('{', 55, 29, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('string', 55, 30, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(',', 55, 36, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 55, 37, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(',', 55, 40, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('boolean', 55, 41, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('}', 55, 48, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('=', 55, 49, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('{', 55, 50, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token("'asd'", 55, 51, {name: 'STRING', fullyQualifiedName: 'TOKENS/LITERALS/STRING'}),
    new Token(',', 55, 56, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('1', 55, 57, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(',', 55, 58, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('nocap', 55, 59, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('}', 55, 64, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(';', 56, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('line_number', 57, 7, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 57, 18, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 57, 19, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('=', 57, 22, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('1', 57, 23, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(',', 57, 24, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('last_line_index', 57, 26, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 57, 41, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 57, 42, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('=', 57, 46, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('0', 57, 48, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(';', 58, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('processed_characters', 59, 7, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 59, 27, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('array', 59, 28, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('{', 59, 33, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('string', 59, 34, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('}', 59, 40, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('=', 59, 41, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('[', 59, 42, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(']', 59, 43, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(';', 60, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('for', 61, 7, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('(', 61, 10, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('i', 61, 11, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 61, 12, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('int', 61, 13, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('=', 61, 16, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('0', 61, 17, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(';', 61, 18, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('i', 61, 19, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('<', 61, 20, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('length', 61, 21, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 61, 27, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token(')', 62, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('{', 63, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('if', 63, 11, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('(', 63, 13, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('character', 63, 14, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('==', 63, 23, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token("'\\r'", 63, 25, {name: 'STRING', fullyQualifiedName: 'TOKENS/LITERALS/STRING'}),
    new Token(')', 64, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('continue', 64, 15, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token(';', 64, 23, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('if', 66, 11, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('(', 66, 13, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('character', 66, 14, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('==', 66, 23, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token("'\\n'", 66, 25, {name: 'STRING', fullyQualifiedName: 'TOKENS/LITERALS/STRING'}),
    new Token(')', 67, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('{', 68, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('line_number', 68, 15, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('++', 68, 26, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token(';', 68, 28, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('last_line_index', 69, 15, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('=', 69, 30, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('i', 69, 31, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('-', 69, 32, {
        name: 'ARITHMETIC',
        fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
    }),
    new Token('1', 69, 33, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(';', 70, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('}', 71, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('processed_characters', 72, 11, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('[', 72, 31, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('i', 72, 32, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(']', 72, 33, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('=', 72, 34, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('character', 72, 35, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 73, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('if', 74, 11, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('(', 74, 13, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('p_len', 74, 14, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token('>', 74, 19, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('0', 74, 20, {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'}),
    new Token(')', 75, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('if', 75, 15, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('(', 75, 17, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('emitToken', 75, 18, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(')', 76, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('token_type', 76, 19, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(':', 76, 29, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('string', 76, 30, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('=', 76, 36, {
        name: 'COMPARISON',
        fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
    }),
    new Token('emit_token_type', 76, 37, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 77, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('yeet', 78, 11, {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'}),
    new Token('tokens', 78, 16, {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'}),
    new Token(';', 79, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('}', 80, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
    new Token('}', 81, 1, {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'}),
];

export default tokens.reduce((str: string, token: Token) => str + token.toString() + '\n', '');

