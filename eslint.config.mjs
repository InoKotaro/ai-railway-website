import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  // 基本設定（JS用）
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // JSXをパース可能にするため必須
        },
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // simple-import-sort のルール
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },

  // prettier と競合するルールを無効化
  {
    rules: {
      ...prettier.rules,
    },
  },
];
