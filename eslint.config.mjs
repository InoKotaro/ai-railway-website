import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginReact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  // グローバルな無視設定
  {
    ignores: [
      '.next/',
      'node_modules/',
      'src/generated/', // Prismaが生成したファイルを無視
      '**/*.test.js', // テストファイルを無視
      '**/*.test.jsx', // テストファイルを無視
      'jest.config.mjs',
      'jest.setup.js',
    ],
  },

  // デフォルト設定
  js.configs.recommended,

  // Next.jsの推奨設定
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  // TypeScript用設定
  ...tseslint.configs.recommended,

  // グローバル変数の設定
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // React用設定
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: pluginReact,
    },
    languageOptions: {
      ...pluginReact.configs.recommended.languageOptions,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // 'React' のインポートは不要
      'react/prop-types': 'off', // prop-typesは使用しない
    },
    settings: {
      react: {
        version: 'detect', // インストールされているReactのバージョンを自動検出
      },
    },
  },

  // インポート順序のソート設定
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },

  // Prettierとの競合を解消する設定 (必ず最後に配置)
  prettier,
);