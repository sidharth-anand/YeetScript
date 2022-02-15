import { Command } from '@oclif/core';

import Parser from '../compiler/parser';

export default class Parse extends Command {
  static description = 'Parse a YeetScript file and output the token list';

  static examples = [
    '<%= config.bin %> <%= command.id %> main.ys',
  ];

  static args = [{
    name: 'file',
    required: true,
    description: 'Path to the YeetScript file to parse',
    parse: (input: any) => input.toString()
  }];

  public async run(): Promise<void> {
    const {args} = await this.parse(Parse)
    console.log(args.file);
    
    const parser = new Parser(args.file, 'src/definition/ys.classes', 'src/definition/ys.rules', 'src/definition/ys.states', 'src/definition/ys.tokens');
    parser.parse();
  }
}
