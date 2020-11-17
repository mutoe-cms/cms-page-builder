const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  preprocess: sveltePreprocess({
    tsconfigFile: './tsconfig.json',
    scss: {
      prependData: '@import \'src/style/variables\';',
    },
  }),
}
