# chance-path-object [![Build Status](https://travis-ci.org/manovotny/chance-path-object.svg?branch=master)](https://travis-ci.org/manovotny/chance-path-object)

> A [Chance.js mixin](http://chancejs.com/#mixin) to generate path objects.

Path objects are what Node uses for input to [`path.format`](https://nodejs.org/api/path.html#path_path_format_pathobject) and for output from [`path.parse`](https://nodejs.org/api/path.html#path_path_parse_path).

## Install

### NPM

```
$ npm i chance-path-object
```

### Yarn

```
$ yarn add chance-path-object
```

## Usage

```js
import Chance from 'chance';
import pathObject from 'chance-path-object';

const chance = new Chance();

chance.mixin({
    pathObject
});

chance.pathObject();
```

By default, `chance-path-object` will return an path object with keys, but no values.

Example:

```js
{
    base: '',
    dir: '',
    ext: '',
    name: '',
    root: ''
}
```

### Options

Below is a list of available configuration options that you can pass into `chance-path-object`.

```js
chance.pathObject({
    // options
});
```

The options are designed to be explicitly inclusive and used together in order to generate a desired path object output.

Example:

```js
chance.pathObject({
    base: true,
    ext: true,
    name: true
});
```

Result:

```js
{
    base: 'some-name.some-ext',
    dir: '',
    ext: '.some-ext',
    name: 'some-name',
    root: ''
}
```

#### root

Specifies if the path object should contain a `root` property.

For example, `chance.pathObject({root: true})` would produce:

```js
{
    base: '',
    dir: '',
    ext: '',
    name: '',
    root: '/'
}
```

> Defaults to `false`.

#### dir

Specifies if the path object should contain a `dir` property.

For example, `chance.pathObject({dir: true})` would produce:

```js
{
    base: '',
    dir: 'some/random/path',
    ext: '',
    name: '',
    root: ''
}
```

If `root` is also provided, it will prepend root to the `dir` as well.

For example, `chance.pathObject({root: true, dir: true})` would produce:

```js
{
    base: '',
    dir: '/some/random/path',
    ext: '',
    name: '',
    root: '/'
}
```

> Defaults to `false`.

#### relative

This is used in conjunction with the [`dir`](#dir) option.

Specifies if the path object should contain a relative dir path.

For example, `chance.pathObject({dir: true, relative: true})` would produce:

```js
{
    base: '',
    dir: '../some/random/path',
    ext: '',
    name: '',
    root: ''
}
```

> Defaults to `false`.

#### name

Specifies if the path object should contain a `name` property.

For example, `chance.pathObject({name: true})` would produce:

```js
{
    base: '',
    dir: '',
    ext: '',
    name: 'some-random-name',
    root: ''
}
```

> Defaults to `false`.

#### dotfile

This is used in conjunction with the [`name`](#name) option.

Specifies if the path object should contain a dotfile for a name.

For example, `chance.pathObject({name: true, dotfile: true})` would produce:

```js
{
    base: '',
    dir: '',
    ext: '',
    name: '.some-dotfile',
    root: ''
}
```

> Defaults to `false`.

#### ext

Specifies if the path object should contain an `ext` property.

For example, `chance.pathObject({ext: true})` would produce:

```js
{
    base: '',
    dir: '',
    ext: '.some-ext',
    name: '',
    root: ''
}
```

> Defaults to `false`.

#### base

Specifies if the path object should contain a `base` property.

For example, `chance.pathObject({base: true})` would produce:

```js
{
    base: 'some-name.some-ext',
    dir: '',
    ext: '',
    name: '',
    root: ''
}
```

However, if the [`name`](#name) or [`ext`](#ext) options above are used, their values will be used to construct the `base` property.

> Defaults to `false`.

## License

MIT © [Michael Novotny](http://manovotny.com)
