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
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-useless-rename": "warn",
    "object-shorthand": "warn",
    "sort/imports": [
      "warn",
      {
        groups: [
          { type: "side-effect", order: 10 },
          { regex: "^\\.+\\/", order: 40 },
          { type: "dependency", order: 20 },
          { type: "other", order: 30 },
        ],
        typeOrder: "last",
      },
    ],
    "sort/exports": "off",
  },
}
