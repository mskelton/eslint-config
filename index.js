module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sort/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ["sort"],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-useless-constructor": "off",
    "sort/type-properties": "warn",
    "sort/string-enums": "warn",
    "sort/string-unions": "warn",
    "no-unused-vars": "off",
    "no-useless-rename": "warn",
    "prefer-template": "error",
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
