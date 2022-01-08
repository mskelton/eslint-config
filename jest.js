module.exports = {
  overrides: [
    {
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
      plugins: ["jest"],
      env: { jest: true },
      files: ["**/__tests__/**", "*.{spec,test}.{js,jsx,ts,tsx}"],
    },
    {
      env: { jest: true },
      files: ["**/__mocks__/**"],
    },
  ],
}
