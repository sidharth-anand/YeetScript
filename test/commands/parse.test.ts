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
        .command(['parse', 'test/sources/conditionals.ys', '-p'])
        .it('Conditionals pass', ctx => {
            expect(ctx.stdout).to.equal(conditionalString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/loops.ys', '-p'])
        .it('Loops pass', ctx => {
            expect(ctx.stdout).to.equal(loopString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/arithmetic.ys', '-p'])
        .it('Arithmetic pass', ctx => {
            expect(ctx.stdout).to.equal(arithmeticString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/logic.ys', '-p'])
        .it('Logic pass', ctx => {
            expect(ctx.stdout).to.equal(error);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/comparison.ys', '-p'])
        .it('comparison pass', ctx => {
            expect(ctx.stdout).to.equal(comparisonString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/literals.ys', '-p'])
        .it('literal pass', ctx => {
            expect(ctx.stdout).to.equal(literalString);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/fail/int.ys', '-p'])
        .it('Int literal fail', ctx => {
            expect(ctx.stdout).to.equal(error);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/fail/float.ys', '-p'])
        .it('Float literal fail', ctx => {
            expect(ctx.stdout).to.equal(error);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/fail/string.ys', '-p'])
        .it('String literal fail', ctx => {
            expect(ctx.stdout).to.equal(error);
        });

    test
        .stdout()
        .command(['parse', 'test/sources/combined.ys', '-p'])
        .it('Combined Test', ctx => {
            expect(ctx.stdout).to.equal(error);
        });
});
