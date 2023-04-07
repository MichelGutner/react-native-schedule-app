module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>/src/'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testTimeout: 20000,
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|@react-navigation)|react-native-modal/)',
  ],
  setupFiles: ['./jest.setup.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/utils/api',
    '<rootDir>/src/utils/tests',
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
