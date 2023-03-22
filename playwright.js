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
    "playwright/prefer-strict-equal": "error",
    "playwright/prefer-to-be": "error",
    "playwright/prefer-to-have-length": "error",
    "playwright/require-top-level-describe": "error",
  },
}
