module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['sort-destructure-keys'],
  rules: {
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      { caseSensitive: false },
    ],
    'sort-keys': 'error',
  },
}
