module.exports = {
  overrides: [
    {
      extends: ["plugin:vitest/all"],
      plugins: ["vitest"],
      files: ["*.{spec,test}.{js,jsx,cjs,mjs,ts,tsx,cts,mts}"],
      rules: {
        "vitest/no-hooks": "off",
      },
    },
  ],
}
