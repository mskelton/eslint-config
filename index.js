module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:sort/recommended", "prettier"],
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
  plugins: ["sort"],
  rules: {
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
  },
};
