module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    'src/utils/CoordinateTransform.js',
    'src/utils/index.js',
    'src/utils/types.js',
    'src/components/**/*.{js,vue}',
    '!src/components/VideoPlayer/index.vue',
    '!src/components/Screenfull/index.vue'
  ],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  testURL: 'http://localhost/'
}
