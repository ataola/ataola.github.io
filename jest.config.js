module.exports = {
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@api/(.*)': '<rootDir>/src/api/$1',
    '@data/(.*)': '<rootDir>/src/data/$1',
    '@views/(.*)': '<rootDir>/src/views/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@store/(.*)': '<rootDir>/src/store/$1',
    '@layout/(.*)': '<rootDir>/src/layout/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@router/(.*)': '<rootDir>/src/router/$1',
    '@static/(.*)': '<rootDir>/src/static/$1',
    '@mock/(.*)': '<rootDir>/src/mock/$1',
    '@scss/(.*)': '<rootDir>/src/assets/scss/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@directives/(.*)': '<rootDir>/src/directives/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@constants/(.*)': '<rootDir>/src/constants/$1',
  },
  transform: {
    // .vue文件用 vue-jest 处理
    '^.+\\.vue$': 'vue-jest',
    // .js或者.jsx用 babel-jest处理
    '^.+\\.jsx?$': 'babel-jest',
    //.ts文件用ts-jest处理
    '^.+\\.ts$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  testMatch: ['**/?(*.)+(spec).[jt]s?(x)'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
}
