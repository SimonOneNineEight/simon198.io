import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends('airbnb'),
  ...compat.extends('airbnb/hooks'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Indentation: 4 spaces instead of default 2
      'indent': ['error', 4],
      'react/jsx-indent': ['error', 4],
      'react/jsx-indent-props': ['error', 4],
      
      // TypeScript specific overrides
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
      
      // Next.js specific overrides
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
      'react/react-in-jsx-scope': 'off', // Next.js handles React import
      'import/extensions': 'off', // Next.js handles extensions
      'import/no-unresolved': 'off', // Next.js handles module resolution
      'import/prefer-default-export': 'off', // Allow named exports
      
      // Relaxed rules for gradual adoption
      'no-console': 'warn',
      'max-len': ['warn', { code: 120 }], // Allow longer lines
      'react/function-component-definition': 'off', // Allow various component styles
      'react/jsx-props-no-spreading': 'off', // Allow prop spreading
      
      // Next.js and TypeScript specific relaxations
      'react/prop-types': 'off', // TypeScript handles this
      'react/require-default-props': 'off', // TypeScript handles this
      'no-undef': 'off', // TypeScript handles this
      'global-require': 'off', // Sometimes needed for dynamic imports
      'no-new-func': 'off', // Needed for MDX compilation
      'react/no-unescaped-entities': 'warn', // Often needed for content
      'jsx-a11y/anchor-has-content': 'off', // Auto-generated anchors may be empty
    },
  },
  {
    ignores: [
      '.next/**',
      '.velite/**',
      'node_modules/**',
      'dist/**',
      'build/**',
    ],
  },
]