export default {
  extends: [
    'eslint-config-airbnb-base',
    './rules.js',
  ],
  rules: {},
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
