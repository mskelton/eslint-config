module.exports = {
  extends: "plugin:playwright/playwright-test",
  rules: {
    "playwright/missing-playwright-await": [
      "error",
      { customMatchers: ["toPassAxe"] },
    ],
    "playwright/prefer-lowercase-title": [
      "error",
      { ignoreTopLevelDescribe: true },
    ],
    "playwright/require-top-level-describe": "error",
    "prefer-lowercase-title": "error",
    "prefer-strict-equal": "error",
    "prefer-to-be": "error",
    "prefer-to-have-length": "error",
    "require-require-soft-assertions": "error",
    "require-top-level-describe": "error",
  },
}
