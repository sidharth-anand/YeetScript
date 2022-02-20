const literals = [
    {
        _tokenString: 'meth',
        _lineNumber: 1,
        _characterNumber: 1,
        _information: {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'},
    },
    {
        _tokenString: 'literal',
        _lineNumber: 1,
        _characterNumber: 6,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: '(',
        _lineNumber: 1,
        _characterNumber: 13,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: ')',
        _lineNumber: 1,
        _characterNumber: 14,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: ':',
        _lineNumber: 1,
        _characterNumber: 15,
        _information: {
            name: 'COMPARISON',
            fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
        },
    },
    {
        _tokenString: 'int',
        _lineNumber: 1,
        _characterNumber: 17,
        _information: {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'},
    },
    {
        _tokenString: '{',
        _lineNumber: 2,
        _characterNumber: 1,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'a',
        _lineNumber: 2,
        _characterNumber: 4,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: ':',
        _lineNumber: 2,
        _characterNumber: 5,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'int',
        _lineNumber: 2,
        _characterNumber: 7,
        _information: {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'},
    },
    {
        _tokenString: '=',
        _lineNumber: 2,
        _characterNumber: 11,
        _information: {
            name: 'COMPARISON',
            fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
        },
    },
    {
        _tokenString: '+',
        _lineNumber: 2,
        _characterNumber: 13,
        _information: {
            name: 'ARITHMETIC',
            fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
        },
    },
    {
        _tokenString: '987',
        _lineNumber: 2,
        _characterNumber: 14,
        _information: {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'},
    },
    {
        _tokenString: ';',
        _lineNumber: 3,
        _characterNumber: 1,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'b',
        _lineNumber: 3,
        _characterNumber: 7,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: ':',
        _lineNumber: 3,
        _characterNumber: 8,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'float',
        _lineNumber: 3,
        _characterNumber: 10,
        _information: {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'},
    },
    {
        _tokenString: '=',
        _lineNumber: 3,
        _characterNumber: 16,
        _information: {
            name: 'COMPARISON',
            fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
        },
    },
    {
        _tokenString: '-',
        _lineNumber: 3,
        _characterNumber: 18,
        _information: {
            name: 'ARITHMETIC',
            fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
        },
    },
    {
        _tokenString: '23.67',
        _lineNumber: 3,
        _characterNumber: 19,
        _information: {name: 'FLOAT', fullyQualifiedName: 'TOKENS/LITERALS/FLOAT'},
    },
    {
        _tokenString: ';',
        _lineNumber: 4,
        _characterNumber: 1,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'c',
        _lineNumber: 4,
        _characterNumber: 7,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: ':',
        _lineNumber: 4,
        _characterNumber: 8,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'string',
        _lineNumber: 4,
        _characterNumber: 10,
        _information: {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'},
    },
    {
        _tokenString: '=',
        _lineNumber: 4,
        _characterNumber: 17,
        _information: {
            name: 'COMPARISON',
            fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
        },
    },
    {
        _tokenString: '"hello world"',
        _lineNumber: 4,
        _characterNumber: 19,
        _information: {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'},
    },
    {
        _tokenString: ';',
        _lineNumber: 5,
        _characterNumber: 1,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'yeet',
        _lineNumber: 5,
        _characterNumber: 7,
        _information: {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'},
    },
    {
        _tokenString: '0',
        _lineNumber: 5,
        _characterNumber: 12,
        _information: {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'},
    },
    {
        _tokenString: ';',
        _lineNumber: 6,
        _characterNumber: 1,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: '}',
        _lineNumber: 6,
        _characterNumber: 3,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
];

let literalString = '';
for (const token of literals) {
    literalString += `${token._tokenString} ${token._information.name} (${token._lineNumber}, ${token._characterNumber})\n`;
}

export {literalString};
