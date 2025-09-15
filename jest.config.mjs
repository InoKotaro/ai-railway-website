import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle CSS imports (e.g., from Swiper)
    '\.css$': '<rootDir>/jest/mocks/styleMock.js',
    // Handle Swiper specific extension-less imports
    '^swiper/css$': '<rootDir>/jest/mocks/styleMock.js',
    '^swiper/css/navigation$': '<rootDir>/jest/mocks/styleMock.js',
    '^swiper/css/pagination$': '<rootDir>/jest/mocks/styleMock.js',
    // Handle path aliases
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default createJestConfig(customJestConfig);
