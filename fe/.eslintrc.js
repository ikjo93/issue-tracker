module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'linebreak-style': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: false },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
