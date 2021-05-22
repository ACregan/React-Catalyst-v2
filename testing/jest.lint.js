const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  displayName: 'ESLint',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/src/**/*.js', '<rootDir>/src/**/*.jsx'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.history/',
    '<rootDir>/cypress',
  ],
}
