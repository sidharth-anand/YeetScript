import {Command} from '@oclif/core';
import Parser from '../compiler/parser';
import {readFileSync} from 'fs';
import ParseTable from '../compiler/parseTable';
// import YeetScriptSimplified from '../grammar/YeetScriptSimplified.ebnf';

export default class Ast extends Command {
  static description = 'Determine if sequence of tokens is valid and generate AST'

  static examples = [
      '<%= config.bin %> <%= command.id %> main.ys',
  ]

  static args = [{
      name: 'file',
      required: true,
      description: 'Path to the YeetScript file to parse',
      ast: (input: any) => input.toString(),
  }]

  public async run(): Promise<void> {
      const {args} = await this.parse(Ast);
      const parser = new Parser(args.file, 'src/definition/ys.classes', 'src/definition/ys.rules', 'src/definition/ys.states', 'src/definition/ys.tokens', 'src/definition/ys.errors');
      const tokens = parser.parse();

      let tokenString = '';
      tokenString = tokens.map(token => {
          return token.toParser();
      }).join('');

      const tokensPassed = (tokenString + '$').split(' ');
      console.log(tokenString);

      const urmom = readFileSync('src/grammar/YeetScriptSimplified.ebnf').toString();

      const parseTable = new ParseTable(tokensPassed, urmom);
      const output = parseTable.parseInput();
      console.log(output);
  }
}
