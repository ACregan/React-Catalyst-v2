module.exports = {
  parser: 'babel-eslint',
  plugins: [
    // ...
    'react',
    'react-hooks',
  ],
  rules: {
    strict: 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
