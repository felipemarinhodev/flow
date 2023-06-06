module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["node_modules/"],
  // Cherry of the Cake
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "react/no-unknown-property": ["error", { ignore: ["jsx", "global"] }],
  },
};
