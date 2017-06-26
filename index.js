module.exports = ({root = chance.bool()} = {}) => { // eslint-disable-line no-undef
    const pathObject = {
        root: ''
    };

    if (root) {
        pathObject.root = '/';
    }

    return pathObject;
};
