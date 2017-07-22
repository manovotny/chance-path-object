/* eslint-disable complexity */
module.exports = ({root = false, dir = false, relative = false, name = false, dotfile = false, ext = false, base = false} = {}) => {
    const pathObject = {
        base: '',
        dir: '',
        ext: '',
        name: '',
        root: ''
    };

    if (root) {
        pathObject.root = '/';
    }

    if (dir) {
        const path = chance.n(chance.word, chance.d6()).join('/'); // eslint-disable-line no-undef

        if (root) {
            pathObject.dir = pathObject.root + path;
        } else if (relative) {
            pathObject.dir = `../${path}`;
        } else {
            pathObject.dir = path;
        }
    }

    if (name) {
        pathObject.name = dotfile ? `.${chance.word()}` : chance.word(); // eslint-disable-line no-undef
    }

    if (ext) {
        pathObject.ext = `.${chance.word()}`; // eslint-disable-line no-undef
    }

    if (base) {
        if (pathObject.name && pathObject.ext) {
            pathObject.base = pathObject.name + pathObject.ext;
        } else if (pathObject.name) {
            pathObject.base = pathObject.name;
        } else if (pathObject.ext) {
            pathObject.base = pathObject.ext;
        } else {
            pathObject.base = `${chance.word()}.${chance.word()}`; // eslint-disable-line no-undef
        }
    }

    return pathObject;
};
/* eslint-enable */
