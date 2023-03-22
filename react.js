module.exports = {
  extends: "plugin:react/recommended",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-hooks"],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-sort-props": ["error", { reservedFirst: true }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "warn",
  },
}
