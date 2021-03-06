module.exports = {
  env: {
    browser: true,
  },
  extends: ["plugin:react/recommended", "prettier/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": [
      "error",
      {
        reservedFirst: true,
      },
    ],
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
