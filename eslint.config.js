import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist/', '.astro/', 'node_modules/']),
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
  eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  eslintConfigPrettier,
]);
