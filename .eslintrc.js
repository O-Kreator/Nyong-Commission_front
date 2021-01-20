module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      modules: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['svelte3'],
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
  settings: {
    'svelte3/ignore-styles': () => true,
  }
};
