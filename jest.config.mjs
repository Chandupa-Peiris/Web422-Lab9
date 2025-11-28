


import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Path to your Next.js app
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  // Where your test files will live
  testMatch: [
    "<rootDir>/tests/**/*.test.js",
    "<rootDir>/__tests__/**/*.test.js"
  ],

  // Use the jsdom environment for DOM-based tests
  testEnvironment: 'jest-environment-jsdom',

  // Optional: Add setup file if needed later
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

// Export for Next.js + Jest compatibility
export default createJestConfig(config);
