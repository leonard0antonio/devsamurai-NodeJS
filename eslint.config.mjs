import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },

 {
    rules: {
      "prettier/prettier": "error",
      "class-methods-use-this": "off",
      "no-parameter-reassign": "off",
      camelcase: "off",
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
    }
  }
]);
