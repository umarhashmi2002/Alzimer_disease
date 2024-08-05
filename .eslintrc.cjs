module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,  // Add Node.js environment support
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-undef': 'off',  // Disable no-undef for Node.js globals like 'exports' and 'process'
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_' },  // Ignore unused variables that start with '_'
    ],
  },
}
