module.exports = {
  env: {
    browser: true,
    es2015: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  'ignorePatterns': ['.eslintrc.js'],
  extends: 'eslint: recommended',
  rules: {
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-console': 'error',
    'no-alert': 'error',
    'quotes': ['error', 'single'],
    'semi': 'error',
  },
};
