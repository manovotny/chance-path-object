// ({root = false, dir = false, name = false, ext = false, base = false, relative = false, dotfile = false} = {}) => {
//     const object = {
//         base: '',
//         dir: '',
//         ext: '',
//         name: '',
//         root: ''
//     };
//
//     if (root) {
//         object.root = '/';
//     }
//
//     if (dir) {
//         if (root) {
//             object.dir = object.root + chance.path();
//         } else if (relative) {
//             object.dir = `../${chance.path()}`;
//         } else {
//             object.dir = chance.path();
//         }
//     }
//
//     if (name) {
//         object.name = dotfile ? `.${chance.word()}` : chance.word();
//     }
//
//     if (ext) {
//         object.ext = `.${chance.word()}`;
//     }
//
//     if (base) {
//         if (object.name.length && object.ext.length) {
//             object.base = object.name + object.ext;
//         } else if (object.name.length) {
//             object.base = object.name;
//         } else if (object.ext.length) {
//             object.base = object.ext;
//         } else {
//             object.base = `${chance.word()}.${chance.word()}`;
//         }
//     }
//
//     return object;
// }


module.exports = ({root = false, dir = false, relative = false, name = false, dotfile = false, ext = false} = {}) => {
    const pathObject = {
        root: '',
        dir: '',
        name: '',
        ext: ''
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

    return pathObject;
};
