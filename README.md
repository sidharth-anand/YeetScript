# YeetScript Compiler

## Group Details
#### Group 12
- Akhil Macherla _(2019A7PS1211H)_
- Aryan Arora _(2019A7PS1204H)_
- Sidharth Anand _(2019A7PS1203H)_
- Yashaswi Yenugu _(2019A7PS1210H)_

======================================================================
* [`Commands`](#commands)
* [`Building`](#building)
* [`Language Definition`](#language-definition)
* [`Testing`](#testing)
* [`Examples`](#examples)

# Commands
<!-- commands -->

## `YeetScriptCompiler parse FILE`

Parse a YeetScript file and output the token list

```
USAGE
  $ YeetScriptCompiler parse [FILE] [-n] [-w]

ARGUMENTS
  FILE  Path to the YeetScript file to parse

FLAGS
  -n, --include-newlines
  -w, --include-whitespaces

DESCRIPTION
  Parse a YeetScript file and output the token list

EXAMPLES
  $ YeetScriptCompiler parse main.ys
```

_See code: [src/commands/parse.ts](https://github.com/sidharth-anand/YeetScript/tree/master/src/commands/parse.ts)_

## `YeetScriptCompiler help [COMMAND]`

Display help for YeetScriptCompiler.

```
USAGE
  $ YeetScriptCompiler help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for YeetScriptCompiler.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

<!-- commandsstop -->

# Building

To get YeetScriptCompiler up and running you must have [nodejs](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/) installed.

 - Clone the repo ( `git clone https://github.com/sidharth-anand/YeetScript.git` )
 - Move into the project ( `cd YeetScript` )
 - Install dependencies ( `yarn install` )
 - Build the project ( `yarn build` )
 - Run the parser with a test file ( `./bin/dev parse test/sources/combined.ys` )

 ## Documentation

 You can find JSDoc style documentation for every major class and function alongside the code.


# Language Definition

All the files related to the language definition can be found in _[src/definitions](https://github.com/sidharth-anand/YeetScript/tree/master/src/definition)_

The transition rules for the DFA are at _[ys.rules](https://github.com/sidharth-anand/YeetScript/tree/master/src/definition/ys.rules)_ and the BNF for YeetScript is at _[ys.bnf](https://github.com/sidharth-anand/YeetScript/tree/master/src/definition/ys.bnf)_

# Testing 

To test the project you can simply run

```
yarn test
```

This should trigger 11 extensive unit tests which cover all aspects of the YeetScript language and various codestyles. It should also contain failing tests for inavlid token sequences.

# Examples

The examples are part of the test suite and conver all essential aspects of the YeetScript language. You can find them in _[test/sources](https://github.com/sidharth-anand/YeetScript/tree/master/test/sources)_. 

The correct output token stream for these example YeetScript files can be found in _[test/tokens](https://github.com/sidharth-anand/YeetScript/tree/master/test/tokens)_. 