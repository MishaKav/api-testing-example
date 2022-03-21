module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  coverageReporters: [
    // 'clover',
    // 'json',
    'json-summary',
    'text',
    'text-summary',
    // 'lcov',
  ],
  reporters: ['default', ['jest-junit', {outputDirectory: 'coverage'}]],
};
