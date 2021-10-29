module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'import/no-cycle': 'off',
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
  },
};
