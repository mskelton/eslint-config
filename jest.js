module.exports = {
  overrides: [
    {
      env: {
        jest: true,
      },
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
      files: ["**/__tests__/**", "*.{spec,test}.{js,jsx,ts,tsx}"],
      plugins: ["jest"],
    },
  ],
};
