import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default [
  globalIgnores(["dist", "build", "coverage", "node_modules"]),

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...(react.configs.recommended?.rules ?? {}),
      ...(reactHooks.configs.recommended?.rules ?? {}),
      ...(reactRefresh.configs.vite?.rules ?? {}),

      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];
