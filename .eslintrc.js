module.exports = {
  parser: 'babel-eslint',
  plugins: [
    // ...
    'react-hooks',
  ],
  rules: {
    strict: 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
