module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 0,
    'comma-dangle': 0,
    'node/no-callback-literal': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
}
