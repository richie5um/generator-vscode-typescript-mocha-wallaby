module.exports = function() {
  return {
    files: [
      '!app/**/*.spec.ts',
      'app/**/*.ts'
    ],
    tests: [
      'app/**/*.spec.ts'
    ],
    debug: true,
    testFramework: 'mocha',
    env: {
      type: 'node'
    }
  };
};
