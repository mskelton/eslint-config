module.exports = {
  overrides: [
    {
      extends: ["plugin:vitest/all"],
      files: ["*.{spec,test}.{js,jsx,cjs,mjs,ts,tsx,cts,mts}"],
      plugins: ["vitest"],
      rules: {
        "vitest/no-hooks": "off",
      },
    },
  ],
}
