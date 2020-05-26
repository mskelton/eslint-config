module.exports = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
      ],
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
          },
        ],
        "no-useless-constructor": "off",
      },
    },
  ],
};
