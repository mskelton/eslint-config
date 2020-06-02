module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:sort/recommended", "prettier"],
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
