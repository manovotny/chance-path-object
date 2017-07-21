module.exports = ({root = false, dir = false, relative = false, name = false, dotfile = false, ext = false, base = false} = {}) => {
    const pathObject = {
        root: '',
        dir: '',
        name: '',
        ext: '',
        base: ''
    };

    if (root) {
        pathObject.root = '/';
    }

    if (dir) {
        if (root) {
            pathObject.dir = pathObject.root + chance.path();
        } else if (relative) {
            pathObject.dir = `../${chance.path()}`;
        } else {
           pathObject.dir = chance.path();
        }
    }

    if (name) {
        pathObject.name = dotfile ? `.${chance.word()}` : chance.word();
    }

    if (ext) {
        pathObject.ext = `.${chance.word()}`;
    }

    if (base) {
        if (pathObject.name && pathObject.ext) {
            pathObject.base = pathObject.name + pathObject.ext;
        } else if (pathObject.name) {
            pathObject.base = pathObject.name;
        } else if (pathObject.ext) {
            pathObject.base = pathObject.ext;
        } else {
            pathObject.base = `${chance.word()}.${chance.word()}`;
        }
    }

    return pathObject;
};
