const Chance = require('chance');
const path = require('chance-path');

const pathObject = require('./index');

describe('index', () => {
    const chance = new Chance();

    let dir,
        name;

    beforeEach(() => {
        chance.mixin({
            path,
            pathObject
        });

        dir = chance.path();
        name = chance.word();

        spyOn(Chance.prototype, 'path').and.returnValue(dir);
        spyOn(Chance.prototype, 'word').and.returnValue(name);
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

            expect(result.dir).toBe(dir);
        });

        it('should return with root prepended when specified', () => {
            const result = chance.pathObject({
                dir: true,
                root: true
            });

            expect(result.dir).toBe(`/${dir}`);
        });

        it('should return with relative directory prepended when specified', () => {
            const result = chance.pathObject({
                dir: true,
                relative: true
            });

            expect(result.dir).toBe(`../${dir}`);
        });

        it('should return with root prepended when both root and relative are specified', () => {
            const result = chance.pathObject({
                dir: true,
                relative: true,
                root: true
            });

            expect(result.dir).toBe(`/${dir}`);
        });
    });

    describe('name', () => {
        it('should **not** return by default', () => {
            const result = chance.pathObject();

            expect(result.name).toBe('');
        });

        it('should return when specified', () => {
            const result = chance.pathObject({
                name: true
            });

            expect(result.name).toBe(name);
        });

        it('should return as dotfile when specified', () => {
            const result = chance.pathObject({
                name: true,
                dotfile: true
            });

            expect(result.name).toBe(`.${name}`);
        });
    });
});
