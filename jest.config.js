/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.[j]s?(x)", "**/?(*.)+(spec|test).[j]s?(x)"],
  modulePathIgnorePatterns: ["dist", "deploy"],
};
