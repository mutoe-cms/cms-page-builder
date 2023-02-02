/* eslint-disable @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function */

import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1200,

  e2e: {
    setupNodeEvents (on, config) {},
    baseUrl: 'http://localhost:5173',
  },

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
})
