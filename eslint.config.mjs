import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';
import globals from 'globals';

export default defineConfig({
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  plugins: {
    react: pluginReact,
    import: pluginImport,
  },
  extends: [
    pluginReact.configs.flat.recommended, // reactはflat config対応
    // pluginImport.configs.recommended は flat config未対応なので使わない
  ],
  rules: {
    // import/order ルールを手動で指定
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',

    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
