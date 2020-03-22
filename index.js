module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      files: ["*.spec.js", "*.spec.jsx"],
      env: {
        jest: true,
      },
    },
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ["sort-keys-fix", "sort-destructure-keys"],
  rules: {
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "sort-destructure-keys/sort-destructure-keys": [
      "error",
      { caseSensitive: false },
    ],
    "sort-keys-fix/sort-keys-fix": ["warn", "asc", { caseSensitive: false }],
  },
};
