module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:prettier/recommended",
    "plugin:astro/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    quotes: ["error", "single"],
  },
};
