# @mskelton/eslint-config

[![Build status](https://github.com/mskelton/eslint-config/workflows/Release/badge.svg)](https://github.com/mskelton/eslint-config/actions)
[![package version](https://img.shields.io/npm/v/@mskelton/eslint-config)](https://www.npmjs.com/package/@mskelton/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Simple and sensible ESLint config.

## Description

This package contains a simple and sensible ESLint config that you can use to
get up and running. It uses the
[TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint) and
[Prettier](https://prettier.io).

## Installation

```sh
npm install -D @mskelton/eslint-config eslint
```

## Usage

In your `eslint.config.mjs` file, add the following content including the
configs you want for your project.

```js
import mskelton from '@mskelton/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...mskelton.recommended,
  mskelton.react,
  {
    ...mskelton.playwright,
    files: ['test/**/*.spec.ts'],
  },
  {
    ...mskelton.vitest,
    files: ['**/__tests__/**/*.{spec,test}.{js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
  },
  {
    ...mskelton.jest,
    files: ['**/__tests__/**/*.{spec,test}.{js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
  },
]
```
