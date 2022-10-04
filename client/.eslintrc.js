module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-console': 0,
    'react/jsx-indent': 0,
    'react/no-unknown-property': 0,
    'react/require-default-props': 0,
    'no-restricted-exports': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'react/jsx-no-useless-fragment': 0,
  },
};
