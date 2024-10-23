// @ts-check

import vitest from "eslint-plugin-vitest"

/** @type {import("eslint").Linter.Config} */
export default {
  plugins: { vitest },
  rules: {
    ...vitest.configs.all.rules,
    "vitest/no-hooks": "off",
  },
}
