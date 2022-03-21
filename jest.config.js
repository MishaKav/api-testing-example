module.exports = {
  // testPathIgnorePatterns: ['/node_modules/'],
  // collectCoverageFrom: ['./src/*.{js,jsx}', './src/**/*.{js,jsx}'],
  coverageReporters: [
    //   'clover',
    //   'json',
    'json-summary',
    'text',
    'text-summary',
    //   'lcov',
  ],
  reporters: ['default', ['jest-junit', {outputDirectory: 'coverage'}]],
};
