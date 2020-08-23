module.exports = {
  preset: "jest-playwright-preset",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/playwright/tsconfig.json",
    },
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  collectCoverageFrom: ["specs/**/*.spec.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/cypress/",
    "<rootDir>/webdriver/",
  ],
};
