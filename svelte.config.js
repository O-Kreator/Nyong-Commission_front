const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['src'],
    },
    defaults: {
      style: 'scss',
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
  }),
};
