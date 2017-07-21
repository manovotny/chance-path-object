const Chance = require('chance');
const path = require('chance-path');

const pathObject = require('./index');

describe('index', () => {
    const chance = new Chance();

    let chancePath,
        chanceWord,
        dir,
        name,
        ext;

    beforeEach(() => {
        chance.mixin({
            path,
            pathObject
        });

        chancePath = chance.path();
        chanceWord = chance.word();

        dir = chancePath;
        name = chanceWord;
        ext = chanceWord;

        spyOn(Chance.prototype, 'path').and.returnValue(chancePath);
        spyOn(Chance.prototype, 'word').and.returnValue(chanceWord);
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

    describe('ext', () => {
        it('should **not** return by default', () => {
            const result = chance.pathObject();

            expect(result.ext).toBe('');
        });

        it('should return when specified', () => {
            const result = chance.pathObject({
                ext: true
            });

            expect(result.ext).toBe(`.${ext}`);
        });
    });

    describe('base', () => {
        it('should **not** return by default', () => {
            const result = chance.pathObject();

            expect(result.base).toBe('');
        });

        it('should return when specified', () => {
            const result = chance.pathObject({
                base: true
            });

            expect(result.base).toBe(`${chanceWord}.${chanceWord}`);
        });

        it('should return name when specified', () => {
            const result = chance.pathObject({
                base: true,
                name: true
            });

            expect(result.base).toBe(result.name);
        });

        it('should return ext when specified', () => {
            const result = chance.pathObject({
                base: true,
                ext: true
            });

            expect(result.base).toBe(result.ext);
        });

        it('should return name and ext when specified', () => {
            const result = chance.pathObject({
                base: true,
                name: true,
                ext: true
            });

            expect(result.base).toBe(result.name + result.ext);
        });
    });
});
