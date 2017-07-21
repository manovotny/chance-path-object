const Chance = require('chance');
const path = require('chance-path');

const pathObject = require('./index');

describe('index', () => {
    const chance = new Chance();

    let ppp;

    beforeEach(() => {
        chance.mixin({
            path,
            pathObject
        });

        ppp = chance.word();

        spyOn(Chance.prototype, 'path').and.returnValue(ppp);
    });

    describe('root', () => {
        it('should **not** return by default', () => {
            const result = chance.pathObject();

            expect(result.root).toBe('');
        });

        it('should return when specified', () => {
            const result = chance.pathObject({
                root: true
            });

            expect(result.root).toBe('/');
        });
    });

    describe('dir', () => {
        it('should **not** return by default', () => {
            const result = chance.pathObject();

            expect(result.dir).toBe('');
        });

        it('should return when specified', () => {
            const result = chance.pathObject({
                dir: true
            });

            expect(result.dir).toBe(ppp);
        });

        it('should return with root prepended when specified', () => {
            const result = chance.pathObject({
                dir: true,
                root: true
            });

            expect(result.dir).toBe(`/${ppp}`);
        });

        it('should return with relative directory prepended when specified', () => {
            const result = chance.pathObject({
                dir: true,
                relative: true
            });

            expect(result.dir).toBe(`../${ppp}`);
        });

        it('should return with root prepended when both root and relative are specified', () => {
            const result = chance.pathObject({
                dir: true,
                relative: true,
                root: true
            });

            expect(result.dir).toBe(`/${ppp}`);
        });
    });
});
