const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  moduleDirectories: ['node_modules', 'testing'],
  testMatch: ['**/?(*.)+(spec|test).(js|ts|tsx)'],
  testPathIgnorePatterns: [
    '<rootDir>/lib',
    '<rootDir>/dist',
    '<rootDir>/.history',
    '<rootDir>/cypress',
  ],
  moduleNameMapper: {
    '\\.(module|css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|avi|mov|ogg)$':
      '<rootDir>/testing/__mocks__/fileMock.js',
  },
  displayName: 'Jest',
  testEnvironment: 'jsdom',
  // testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotResolver: '<rootDir>/testing/snapshotResolver.js',
}
