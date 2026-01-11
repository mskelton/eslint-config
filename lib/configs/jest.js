// @ts-check

import jest from 'eslint-plugin-jest'

/** @type {import("eslint").Linter.Config} */
export default {
  ...jest.configs['flat/recommended'],
  rules: {
    ...jest.configs['flat/recommended'].rules,
    ...jest.configs['flat/style'].rules,
  },
}
