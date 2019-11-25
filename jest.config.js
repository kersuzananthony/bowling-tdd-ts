module.exports = {
  "roots": [
    "<rootDir>"
  ],
  testMatch: [
    "<rootDir>/tests/**/*.(test).{js,jsx,ts,tsx}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
