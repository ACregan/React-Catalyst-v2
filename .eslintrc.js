const path = require('path')
module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: [
    // ...
    'react',
    'react-hooks',
    'eslint-plugin-cypress',
  ],
  rules: {
    strict: 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'eslint-config-prettier',
    'plugin:cypress/recommended',
  ],
  env: {
    jest: true,
    node: true,
    browser: true,
    'cypress/globals': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/src/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
  ],
}
