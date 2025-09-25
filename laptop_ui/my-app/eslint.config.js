import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: { jsx: true },
    },
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,jsx}"],
    plugins: { react: pluginReact },
    extends: ["plugin:react/recommended"],
    rules: {
      // optional: turn off the "React must be in scope" rule for React 17+
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn", // or "error" if you want stricter linting
    },
    settings: {
      react: {
        version: "detect", // auto-detect React version
      },
    },
  },
]);
