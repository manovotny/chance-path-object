const {isAbsolute, parse} = require('path');

const Chance = require('chance');

const pathObject = require('./index');

describe('index.js', () => {
    const chance = new Chance();

    let bool,
        d6,
        word;

    beforeEach(() => {
        bool = chance.bool();
        d6 = chance.d6();
        word = chance.word();

        spyOn(Chance.prototype, 'bool').and.returnValue(bool);
        spyOn(Chance.prototype, 'd6').and.returnValue(d6);
        spyOn(Chance.prototype, 'word').and.returnValue(word);

        chance.mixin({
            pathObject
        });
    });

    describe('root', () => {
        it('should return default root', () => {
            const result = chance.pathObject();

            expect(isAbsolute(result.root)).toEqual(bool);
        });

        it('should return custom root', () => {
            const root = chance.pickone([true, false]);
            const result = chance.pathObject({root});

            expect(isAbsolute(result.root)).toEqual(root);
        });
    });
});
