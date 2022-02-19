Run using ./bin/dev parse [filename]

oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage
<!-- usage -->
```sh-session
$ npm install -g yeetscript
$ YeetScriptCompiler COMMAND
running command...
$ YeetScriptCompiler (--version)
yeetscript/0.0.0 win32-x64 node-v16.8.0
$ YeetScriptCompiler --help [COMMAND]
USAGE
  $ YeetScriptCompiler COMMAND
...
```
<!-- usagestop -->

# Commands
<!-- commands -->
* [`YeetScriptCompiler parse FILE`](#yeetscriptcompiler-parse-file)

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

_See code: [dist/commands/parse.ts](https://github.com/sidharth-anand/YeetScript/blob/v0.0.0/dist/commands/parse.ts)_

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
