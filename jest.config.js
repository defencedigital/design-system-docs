process.env.RNDS_LOG_LEVEL = 'debug'

module.exports = {
  moduleNameMapper: {
    '^.+\\.svg': '<rootDir>/jest/__mocks__/svgrMock.js',
    '@royalnavy/fonts': '<rootDir>/jest/__mocks__/fileMock.js',
    firacode: '<rootDir>/jest/__mocks__/fileMock.js',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/jest/__mocks__/fileMock.js',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/__mocks__/fileMock.js',
  },
  testMatch: ['**/?(*.)(test).ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js'],
  globalSetup: '<rootDir>/jest/globalSetup.js',
  transformIgnorePatterns: [
    '/node_modules/(?!(@royalnavy/design-tokens|hex-rgb)).+\\.js$',
  ],
  testEnvironment: 'jest-environment-jsdom-global',
}