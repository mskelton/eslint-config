# @mskelton/eslint-config

[![Build status](https://github.com/mskelton/eslint-config/workflows/Build/badge.svg)](https://github.com/mskelton/eslint-config/actions)
[![package version](https://img.shields.io/npm/v/@mskelton/eslint-config)](https://www.npmjs.com/package/@mskelton/eslint-config)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Simple and sensible ESLint config.

## Description

This package contains a simple and sensible ESLint config that you can use to get up and running with a TypeScript or JavaScript project. It uses the [TypeScript ESLint parser][ts-eslint-parser] and [Prettier][prettier].

## Installation

```sh
npm install --save-dev @mskelton/eslint-config
```

After installing the package, install the required peer dependencies.

```sh
npm install --save-dev eslint eslint-plugin-prettier eslint-plugin-sort prettier
```

### TypeScript

If using TypeScript, install the following peer dependencies in addition to the list above.

```sh
npm install --save-dev @typescript-eslint/eslint-plugin
```

### React

If using React, install the following peer dependencies in addition to the list above.

```sh
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

## Usage

In your `.eslintrc` file, add `@mskelton` to the list of extended configurations.

```json
{
  "extends": ["@mskelton"]
}
```

### TypeScript

If using TypeScript, add `@mskelton/eslint-config/typescript` to the ESLint `extends` list.

### React

If using TypeScript, add `@mskelton/eslint-config/react` to the ESLint `extends` list.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/mskelton"><img src="https://avatars3.githubusercontent.com/u/25914066?v=4" width="100px;" alt="Mark Skelton"/><br /><sub><b>Mark Skelton</b></sub></a><br /><a href="https://github.com/mskelton/eslint-config/commits?author=mskelton" title="Code">💻</a> <a href="https://github.com/mskelton/eslint-config/commits?author=mskelton" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

[ts-eslint-parser]: https://github.com/typescript-eslint/typescript-eslint
[prettier]: https://prettier.io
