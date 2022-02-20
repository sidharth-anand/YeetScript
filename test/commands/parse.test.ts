import {expect, test} from '@oclif/test';
import {conditionalString} from '../tokens/conditionals';
import {loopString} from '../tokens/loops';
import {arithmeticString} from '../tokens/arithemtic';
import {error} from 'console';
import {comparisonString} from '../tokens/comparsion';
import {literalString} from '../tokens/literals';

describe('parse', () => {
    test
        .stdout()
        .command(['parse', 'test/sources/conditionals.ys', '-c'])
        .it('Conditionals pass', ctx => {
            expect(ctx.stdout).to.equal(conditionalString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/loops.ys', '-c'])
        .it('Loops pass', ctx => {
            expect(ctx.stdout).to.equal(loopString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/arithmetic.ys', '-c'])
        .it('Arithmetic pass', ctx => {
            expect(ctx.stdout).to.equal(arithmeticString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/logic.ys', '-c'])
        .it('Logic pass', ctx => {
            expect(ctx.stdout).to.equal(error);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/comparison.ys', '-c'])
        .it('comparison pass', ctx => {
            expect(ctx.stdout).to.equal(comparisonString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/literals.ys', '-c'])
        .it('literal pass', ctx => {
            expect(ctx.stdout).to.equal(literalString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/fail/int.ys', '-c'])
        .it('Int literal fail', ctx => {
            expect(ctx.stdout).to.equal(error);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/fail/float.ys', '-c'])
        .it('Float literal fail', ctx => {
            expect(ctx.stdout).to.equal(error);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/fail/string.ys', '-c'])
        .it('String literal fail', ctx => {
            expect(ctx.stdout).to.equal(error);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/combined.ys', '-c'])
        .it('Combined Test', ctx => {
            expect(ctx.stdout).to.equal(error);
        });
});
