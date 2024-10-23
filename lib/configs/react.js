import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import globals from "globals"

/** @type {import("eslint").Linter.Config} */
export default {
  ...react.configs.flat.recommended,
  languageOptions: {
    ...react.configs.flat.recommended.languageOptions,
    globals: {
      ...globals.browser,
    },
  },
  plugins: {
    ...react.configs.flat.recommended.plugins,
    "react-hooks": reactHooks,
  },
  rules: {
    ...react.configs.flat.recommended.rules,
    "react/button-has-type": "error",
    "react/destructuring-assignment": "error",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "function-expression",
      },
    ],
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-sort-props": ["error", { reservedFirst: true }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
