import {Command, Flags} from '@oclif/core';

import Parser from '../compiler/parser';

export default class Parse extends Command {
  static description = 'Parse a YeetScript file and output the token list';

  static examples = [
      '<%= config.bin %> <%= command.id %> main.ys',
      '<%= config.bin %> <%= command.id %> main.ys --include-whitespaces --include-newlines',
  ];

  static args = [{
      name: 'file',
      required: true,
      description: 'Path to the YeetScript file to parse',
      parse: (input: any) => input.toString(),
  }];

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
      'include-color': Flags.boolean({
          char: 'c',
          default: false,
          required: false,
      }),
  };

  public async run(): Promise<void> {
      const {args, flags} = await this.parse(Parse);

      const parser = new Parser(args.file, 'src/definition/ys.classes', 'src/definition/ys.rules', 'src/definition/ys.states', 'src/definition/ys.tokens');
      const tokens = parser.parse(flags['include-whitespaces'], flags['include-newlines']);

      for (const token of tokens) {
          if (flags['include-color']) {
              console.log(token.toString());
          } else {
              console.log(token.toFormattedString());
          }
      }
  }
}
