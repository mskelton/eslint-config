// @ts-check

import vitest from '@vitest/eslint-plugin'

/** @type {import("eslint").Linter.Config} */
export default {
  plugins: { vitest },
  rules: {
    ...vitest.configs?.all.rules,
    'vitest/no-hooks': 'off',
  },
}
