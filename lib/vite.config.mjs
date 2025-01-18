import {defineConfig} from 'vite';
import * as path from 'path';
import {visualizer} from 'rollup-plugin-visualizer';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'Vue3FormJsonSchema',
      // formats: ['es'],  /* default es+umd -> UMD has no code-splitting ! */
      fileName: (format) => `vue3-form-json-schema.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named',
        // preserveModules: true  /* es only -> UMD has no code-splitting  */
      },
      plugins: [
        visualizer({
          filename: path.resolve(__dirname, 'stats/stats.html'),
          template: 'treemap' // sunburst|treemap|network
        })
      ]
    }
  },
  esbuild: {
    minify: false  // optimize here (vite doc says no for libs!) or better not and let users optimize in their projects?
  }
})
