const { override } = require('customize-cra');
const useSassResourcesLoader = require('./scripts/useSassResourcesLoader');

function configureJest(config) {
  return {
    ...config,
    testPathIgnorePatterns: ['.*/__tests__/fixtures/.*', './src/vendor/*.js'],
    collectCoverageFrom: [
      'src/**/*.{js,ts,tsx}',
      '!**/index.ts',
      '!**/index.tsx',
      '!src/vendor/*.js',
      '!src/setupProxy.js',
      '!src/serviceWorker.js',
      '!src/utils/polyfill/**',
      '!src/containers/App/App.tsx',
      '!src/state/history.ts',
      '!src/state/reducers.ts',
      '!src/state/sagas.ts',
      '!src/state/store.ts',
    ],
  };
}

module.exports = {
  webpack: override(useSassResourcesLoader()),
  jest: configureJest,
};
