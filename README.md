# @mskelton/eslint-config

[![Build status](https://github.com/mskelton/eslint-config/workflows/Build/badge.svg)](https://github.com/mskelton/eslint-config/actions)
[![package version](https://img.shields.io/npm/v/@mskelton/eslint-config)](https://www.npmjs.com/package/@mskelton/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Simple and sensible ESLint config.

## Description

This package contains a simple and sensible ESLint config that you can use to
get up and running with a TypeScript or JavaScript project. It uses the
[TypeScript ESLint parser](https://github.com/typescript-eslint/typescript-eslint)
and [Prettier](https://prettier.io).

## Installation

```sh
npm install -D @mskelton/eslint-config
```

After installing the package, install the required peer dependencies.

```sh
npm install -D @babel/core @babel/eslint-parser eslint eslint-plugin-sort
```

### TypeScript

If using TypeScript, install the following peer dependencies in addition to the
list above.

```sh
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### Jest

If using Jest, install the following peer dependencies in addition to the list
above.

```sh
npm install -D eslint-plugin-jest
```

### React

If using React, install the following peer dependencies in addition to the list
above.

```sh
npm install -D eslint-plugin-react eslint-plugin-react-hooks
```

## Usage

In your `.eslintrc` file, add the following content including the configs you
want for your project.

```json
{
  "extends": [
    "@mskelton",
    "@mskelton/eslint-config/typescript",
    "@mskelton/eslint-config/react",
    "@mskelton/eslint-config/jest"
  ]
}
```
