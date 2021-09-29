import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import globalStyle from '@originjs/vite-plugin-global-style'
import Components from 'unplugin-vue-components/vite'
import content from '@originjs/vite-plugin-content'
import pages from '@originjs/vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins:[
    vue(),
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
    pages()
  ],
  server: {
    port: 3000
  }
})
