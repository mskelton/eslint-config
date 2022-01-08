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
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": [
      "error",
      {
        reservedFirst: true,
      },
    ],
    "react/prop-types": "off",
  },
}
