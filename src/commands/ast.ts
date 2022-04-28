import {Command} from '@oclif/core';
import Parser from '../compiler/parser';
import {readFileSync, writeFileSync} from 'fs';
import ParseTable from '../compiler/parseTable';
import {formatTree} from '../compiler/treeView';

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
  }, {
      name: 'template',
      required: false,
      default: 'render/parse.html'
  }, {
      name: 'output',
      required: false,
      default: 'images/parse.html'
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

      const rules = readFileSync('src/grammar/YeetScriptSimplified.ebnf').toString();

      const parseTable = new ParseTable(tokensPassed, rules);
      const parseTree = parseTable.parseInput();
      const treeString = formatTree(parseTree);

      const treeTemplate = readFileSync(args.template).toString();
      writeFileSync(args.output, treeTemplate.replace('%parsetree%', treeString));
  }
}
