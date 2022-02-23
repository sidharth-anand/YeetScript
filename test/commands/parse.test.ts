import {expect, test} from '@oclif/test';

import ConditionalString from '../tokens/conditionals.tokens';
import LoopString from '../tokens/loops.tokens';
import ArithmeticString from '../tokens/arithemtic.tokens';
import ComparisonString from '../tokens/comparison.tokens';
import LiteralString from '../tokens/literals.tokens';
import LogicString from '../tokens/logic.tokens';
import CombinedString from '../tokens/combined.tokens';

describe('parse', () => {
    test
        .stdout()
        .command(['parse', 'test/sources/conditionals.ys', '-p'])
        .it('Conditionals pass', ctx => {
            expect(ctx.stdout).to.equal(ConditionalString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/loops.ys', '-p'])
        .it('Loops pass', ctx => {
            expect(ctx.stdout).to.equal(LoopString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/arithmetic.ys', '-p'])
        .it('Arithmetic pass', ctx => {
            expect(ctx.stdout).to.equal(ArithmeticString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/logic.ys', '-p'])
        .it('Logic pass', ctx => {
            expect(ctx.stdout).to.equal(LogicString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/comparison.ys', '-p'])
        .it('comparison pass', ctx => {
            expect(ctx.stdout).to.equal(ComparisonString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/literals.ys', '-p'])
        .it('literal pass', ctx => {
            expect(ctx.stdout).to.equal(LiteralString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/fail/int.ys', '-p'])
        .it('Int literal fail', ctx => {
            expect(ctx.stdout).to.contain('Lexer Failed::Fatal Error');
        });

    test
        .stdout()
        .command(['parse', 'test/sources/fail/float.ys', '-p'])
        .it('Float literal fail', ctx => {
            expect(ctx.stdout).to.contain('Lexer Failed::Fatal Error');
        });

    test
        .stdout()
        .command(['parse', 'test/sources/fail/string.ys', '-p'])
        .it('String literal fail', ctx => {
            expect(ctx.stdout).to.contain('Lexer Failed::Fatal Error');
        });

    test
        .stdout()
        .command(['parse', 'test/sources/fail/identifier.ys', '-p'])
        .it('Invalid indentifier fail', ctx => {
            expect(ctx.stdout).to.contain('Lexer Failed::Fatal Error');
        });

    test
        .stdout()
        .command(['parse', 'test/sources/combined.ys', '-p'])
        .it('Combined Test', ctx => {
            expect(ctx.stdout).to.equal(CombinedString);
        });
});
