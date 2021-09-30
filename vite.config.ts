import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import globalStyle from '@originjs/vite-plugin-global-style'
import Components from 'unplugin-vue-components/vite'
import content from '@originjs/vite-plugin-content'
import pages from '@originjs/vite-plugin-pages'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{
      find: '@',
      replacement: path.resolve(__dirname, 'src'),
    }],
  },
  plugins:[
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    globalStyle(),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow typescript
      dts: true,
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    content(),
    pages(),
    Markdown()
  ],
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: true,
  }
})
