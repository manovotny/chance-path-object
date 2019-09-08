const Chance = require('chance');

const pathObject = require('./index');

describe('index', () => {
    const chance = new Chance();

    let chanceD6, chancePath, chanceWord;

    beforeEach(() => {
        chance.mixin({
            pathObject
        });

        chanceD6 = chance.d6();
        chanceWord = chance.word();

        spyOn(Chance.prototype, 'd6').and.returnValue(chanceD6);
        spyOn(Chance.prototype, 'word').and.returnValue(chanceWord);

        chancePath = chance.n(chance.word, chance.d6()).join('/');
    });

    describe('root', () => {
        test('should return an empty string by default', () => {
            const result = chance.pathObject();

            expect(result.root).toBe('');
        });

        test('should return when specified', () => {
            const result = chance.pathObject({
                root: true
            });

            expect(result.root).toBe('/');
        });
    });

    describe('dir', () => {
        test('should return an empty string by default', () => {
            const result = chance.pathObject();

            expect(result.dir).toBe('');
        });

        test('should return when specified', () => {
            const result = chance.pathObject({
                dir: true
            });

            expect(result.dir).toBe(chancePath);
        });

        test('should return with root prepended when specified', () => {
            const result = chance.pathObject({
                dir: true,
                root: true
            });

            expect(result.dir).toBe(`/${chancePath}`);
        });

        test('should return with relative directory prepended when specified', () => {
            const result = chance.pathObject({
                dir: true,
                relative: true
            });

            expect(result.dir).toBe(`../${chancePath}`);
        });

        test('should return with root prepended when both root and relative are specified', () => {
            const result = chance.pathObject({
                dir: true,
                relative: true,
                root: true
            });

            expect(result.dir).toBe(`/${chancePath}`);
        });
    });

    describe('name', () => {
        test('should return an empty string by default', () => {
            const result = chance.pathObject();

            expect(result.name).toBe('');
        });

        test('should return when specified', () => {
            const result = chance.pathObject({
                name: true
            });

            expect(result.name).toBe(chanceWord);
        });

        test('should return as dotfile when specified', () => {
            const result = chance.pathObject({
                dotfile: true,
                name: true
            });

            expect(result.name).toBe(`.${chanceWord}`);
        });
    });

    describe('ext', () => {
        test('should return an empty string by default', () => {
            const result = chance.pathObject();

            expect(result.ext).toBe('');
        });

        test('should return when specified', () => {
            const result = chance.pathObject({
                ext: true
            });

            expect(result.ext).toBe(`.${chanceWord}`);
        });
    });

    describe('base', () => {
        test('should return an empty string by default', () => {
            const result = chance.pathObject();

            expect(result.base).toBe('');
        });

        test('should return when specified', () => {
            const result = chance.pathObject({
                base: true
            });

            expect(result.base).toBe(`${chanceWord}.${chanceWord}`);
        });

        test('should return name when specified', () => {
            const result = chance.pathObject({
                base: true,
                name: true
            });

            expect(result.base).toBe(result.name);
        });

        test('should return ext when specified', () => {
            const result = chance.pathObject({
                base: true,
                ext: true
            });

            expect(result.base).toBe(result.ext);
        });

        test('should return name and ext when specified', () => {
            const result = chance.pathObject({
                base: true,
                ext: true,
                name: true
            });

            expect(result.base).toBe(result.name + result.ext);
        });
    });
});
