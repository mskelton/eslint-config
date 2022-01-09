module.exports = {
  overrides: [
    {
      extends: "plugin:@typescript-eslint/recommended",
      parser: "@typescript-eslint/parser",
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
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
      },
    },
  ],
}
