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
    'import/no-extraneous-dependencies': 'off',
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
    'react/require-default-props': [
      1,
      {
        functions: 'ignore',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
