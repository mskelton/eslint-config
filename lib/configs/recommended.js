// @ts-check

import eslint from "@eslint/js"
import prettier from "eslint-config-prettier"
import sort from "eslint-plugin-sort"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  sort.configs["flat/recommended"],
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-useless-constructor": "error",
      "no-template-curly-in-string": "error",
      "no-unused-vars": "off",
      "no-useless-constructor": "off",
      "no-useless-rename": "warn",
      "no-var": "error",
      "object-shorthand": "warn",
      "prefer-template": "error",
      "sort/exports": "off",
      "sort/imports": [
        "warn",
        {
          groups: [
            { order: 10, type: "side-effect" },
            { order: 40, regex: "^\\.+\\/" },
            { order: 20, type: "dependency" },
            { order: 30, type: "other" },
          ],
          typeOrder: "last",
        },
      ],
      "sort/string-enums": "warn",
      "sort/string-unions": "warn",
      "sort/type-properties": "warn",
    },
  },
)
