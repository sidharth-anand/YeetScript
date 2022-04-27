import {Command, Flags} from '@oclif/core';

import Parser from '../compiler/parser';

/**
 * Reads a file written in YeetScript and parses it into a list of tokens
 */
export default class Parse extends Command {
  static description = 'Parse a YeetScript file and output the token list';

  /**
   * Commandline: examples of command usages
   */
  static examples = [
      '<%= config.bin %> <%= command.id %> main.ys',
      '<%= config.bin %> <%= command.id %> main.ys --include-whitespaces --include-newlines',
  ];

  /**
   * Commandline: args
   */
  static args = [{
      name: 'file',
      required: true,
      description: 'Path to the YeetScript file to parse',
      parse: (input: any) => input.toString(),
  }];

  /**
   * Commandline: flags
   */
  static flags = {
      'include-newlines': Flags.boolean({
          char: 'n',
          default: false,
          required: false,
      }),
      'include-whitespaces': Flags.boolean({
          char: 'w',
          default: false,
          required: false,
      }),
      'include-comments': Flags.boolean({
        char: 'c',
        default: false,
        required: false
      }),

      'plain-output': Flags.boolean({
          char: 'p',
          default: false,
          required: false,
      }),
  };

  /**
   * Parses the file from the args in the command and outputs the token list
   * @returns a prommise
   */
  public async run(): Promise<void> {
      const {args, flags} = await this.parse(Parse);

      const parser = new Parser(args.file, 'src/definition/ys.classes', 'src/definition/ys.rules', 'src/definition/ys.states', 'src/definition/ys.tokens', 'src/definition/ys.errors');
      const tokens = parser.parse(flags['include-whitespaces'], flags['include-newlines']);

      for (const token of tokens) {
          if (flags['plain-output']) {
              console.log(token.toString());
          } else {
              console.log(token.toFormattedString());
          }
      }
  }
}
