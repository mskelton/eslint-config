module.exports = {
  env: {
    es6: true,
    node: true,
  },
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
}
