# eslint-config-standard-ts

[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> An extension of eslint-config-standard, made for TypeScript.

## Installation

```shell
$ npm install eslint-config-standard-ts

# or yarn
$ yarn add eslint-config-standard-ts
```

## Usage

<!-- TODO: Introduction of API use -->

```javascript
const eslintConfigStandardTs = require('eslint-config-standard-ts')
const result = eslintConfigStandardTs('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### eslintConfigStandardTs(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [zce](https://zce.me)



[license-img]: https://img.shields.io/github/license/zce/eslint-config-standard-ts
[license-url]: https://github.com/zce/eslint-config-standard-ts/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/eslint-config-standard-ts
[downloads-url]: https://npmjs.org/package/eslint-config-standard-ts
[version-img]: https://img.shields.io/npm/v/eslint-config-standard-ts
[version-url]: https://npmjs.org/package/eslint-config-standard-ts
[dependency-img]: https://img.shields.io/david/zce/eslint-config-standard-ts
[dependency-url]: https://david-dm.org/zce/eslint-config-standard-ts
[devdependency-img]: https://img.shields.io/david/dev/zce/eslint-config-standard-ts
[devdependency-url]: https://david-dm.org/zce/eslint-config-standard-ts?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
