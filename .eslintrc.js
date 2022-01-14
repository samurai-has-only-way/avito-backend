module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'object-curly-spacing': [
      'error',
      'always',
      {
        'objectsInObjects': true
      }
    ],
    'prefer-const': 'error',
    'semi': [
      'error',
      'always'
    ],
    'quotes': [
      'error',
      'single'
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'no-trailing-spaces': 'error',
    'no-const-assign': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-whitespace-before-property': 'error',
    'keyword-spacing': 'error',
    'space-unary-ops': 'error',
    'no-duplicate-imports': 'error',
    'max-len': [
      'warn',
      {
        'code': 80,
        'tabWidth': 2
      }
    ],
  },
};
