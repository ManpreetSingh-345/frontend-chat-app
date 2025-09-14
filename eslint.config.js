import globals from "globals";
import pluginReact from "eslint-plugin-react";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
      react: pluginReact,
    },
    rules: {
      "unicorn/better-regex": "error",
      "unicorn/no-null": "error",
    },
  },
  pluginReact.configs.flat.recommended,
]);