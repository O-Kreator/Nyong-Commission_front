module.export = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['svelte3'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    indent: ['error', 2],
    'eol-last': 'error',
    'max-len': ['error', 120, 2, {ignoreUrls: true}],
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    'no-multi-spaces': 'error',
    'no-unused-vars': 'warn',
  },
};
