module.exports = {
  extends: ["eslint:recommended", "plugin:sort/recommended", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    requireConfigFile: false,
  },
  plugins: ["sort"],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "object-shorthand": "warn",
  },
}
