const loops = [
    {
        _tokenString: 'meth',
        _lineNumber: 1,
        _characterNumber: 1,
        _information: {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'},
    },
    {
        _tokenString: 'sum',
        _lineNumber: 1,
        _characterNumber: 6,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: '(',
        _lineNumber: 1,
        _characterNumber: 9,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'n',
        _lineNumber: 1,
        _characterNumber: 10,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: ':',
        _lineNumber: 1,
        _characterNumber: 11,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'int',
        _lineNumber: 1,
        _characterNumber: 13,
        _information: {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'},
    },
    {
        _tokenString: ')',
        _lineNumber: 1,
        _characterNumber: 16,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: ':',
        _lineNumber: 1,
        _characterNumber: 17,
        _information: {
            name: 'COMPARISON',
            fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
        },
    },
    {
        _tokenString: 'int',
        _lineNumber: 1,
        _characterNumber: 19,
        _information: {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'},
    },
    {
        _tokenString: '{',
        _lineNumber: 2,
        _characterNumber: 1,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'j',
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
        _tokenString: ';',
        _lineNumber: 3,
        _characterNumber: 1,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'sum',
        _lineNumber: 3,
        _characterNumber: 7,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: ':',
        _lineNumber: 3,
        _characterNumber: 10,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'int',
        _lineNumber: 3,
        _characterNumber: 12,
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
        _tokenString: '0',
        _lineNumber: 3,
        _characterNumber: 18,
        _information: {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'},
    },
    {
        _tokenString: ';',
        _lineNumber: 4,
        _characterNumber: 1,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'for',
        _lineNumber: 4,
        _characterNumber: 7,
        _information: {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'},
    },
    {
        _tokenString: '(',
        _lineNumber: 4,
        _characterNumber: 11,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'j',
        _lineNumber: 4,
        _characterNumber: 12,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: '=',
        _lineNumber: 4,
        _characterNumber: 14,
        _information: {
            name: 'COMPARISON',
            fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
        },
    },
    {
        _tokenString: '1',
        _lineNumber: 4,
        _characterNumber: 16,
        _information: {name: 'INTEGER', fullyQualifiedName: 'TOKENS/LITERALS/INTEGER'},
    },
    {
        _tokenString: ';',
        _lineNumber: 4,
        _characterNumber: 17,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'j',
        _lineNumber: 4,
        _characterNumber: 19,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: '<=',
        _lineNumber: 4,
        _characterNumber: 21,
        _information: {
            name: 'COMPARISON',
            fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
        },
    },
    {
        _tokenString: 'n',
        _lineNumber: 4,
        _characterNumber: 24,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: ';',
        _lineNumber: 4,
        _characterNumber: 25,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'j',
        _lineNumber: 4,
        _characterNumber: 27,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: '++',
        _lineNumber: 4,
        _characterNumber: 28,
        _information: {
            name: 'ARITHMETIC',
            fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
        },
    },
    {
        _tokenString: ')',
        _lineNumber: 5,
        _characterNumber: 1,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: '{',
        _lineNumber: 6,
        _characterNumber: 1,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'sum',
        _lineNumber: 6,
        _characterNumber: 11,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: '=',
        _lineNumber: 6,
        _characterNumber: 15,
        _information: {
            name: 'COMPARISON',
            fullyQualifiedName: 'TOKENS/OPERATORS/COMPARISON',
        },
    },
    {
        _tokenString: 'sum',
        _lineNumber: 6,
        _characterNumber: 17,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: '+',
        _lineNumber: 6,
        _characterNumber: 21,
        _information: {
            name: 'ARITHMETIC',
            fullyQualifiedName: 'TOKENS/OPERATORS/ARITHMETIC',
        },
    },
    {
        _tokenString: 'j',
        _lineNumber: 6,
        _characterNumber: 23,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: ';',
        _lineNumber: 7,
        _characterNumber: 1,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: '}',
        _lineNumber: 8,
        _characterNumber: 1,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: 'yeet',
        _lineNumber: 8,
        _characterNumber: 7,
        _information: {name: 'KEYWORD', fullyQualifiedName: 'TOKENS/KEYWORD'},
    },
    {
        _tokenString: 'sum',
        _lineNumber: 8,
        _characterNumber: 12,
        _information: {name: 'IDENTIFIER', fullyQualifiedName: 'TOKENS/IDENTIFIER'},
    },
    {
        _tokenString: ';',
        _lineNumber: 9,
        _characterNumber: 1,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
    {
        _tokenString: '}',
        _lineNumber: 9,
        _characterNumber: 3,
        _information: {name: 'DELIMITER', fullyQualifiedName: 'TOKENS/DELIMITER'},
    },
];

let loopString = '';
for (const token of loops) {
    loopString += `${token._tokenString} ${token._information.name} (${token._lineNumber}, ${token._characterNumber})\n`;
}

export {loopString};
