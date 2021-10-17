/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: false,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,

    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",

    // An array of regexp pattern strings used to skip coverage collection
    collectCoverageFrom: [
      "src/**/*.{js,ts}",
      "!**/node_modules/**",
      "!**/__e2e-tests__/**",
      "!src/server.ts",
      "!src/**/index.ts",
      "!src/**/*.d.ts",
      "!src/**/mock-data.ts",
    ],

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: "v8",

    // An object that configures minimum threshold enforcement for coverage results
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: -10,
      },
    },

    // Make calling deprecated APIs throw helpful error messages
    errorOnDeprecated: true,

    // Automatically reset mock state between every test
    resetMocks: true,

    // The root directory that Jest should scan for tests and modules within
    // rootDir: undefined,

    // A list of paths to directories that Jest should use to search for files in
    // roots: [
    //   "<rootDir>"
    // ],

    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.test.ts'],

    // A map from regular expressions to paths to transformers
    // transform: undefined,

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transform: {
        '^.+\\.(ts)$': 'ts-jest',
    },

    // Indicates whether each individual test should be reported during the run
    verbose: true,
};
