import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import assetsPlugin from '@originjs/vite-plugin-assets'
import pagesPlugin from 'vite-plugin-pages'
import contentPlugin from '@originjs/vite-plugin-content'
// import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins:[
    vue(), 
    assetsPlugin(), 
    pagesPlugin(), 
    contentPlugin(),
    // https://github.com/antfu/unplugin-vue-components
    // Components({
    //   // allow auto load markdown components under `./src/components/`
    //   extensions: ['vue', 'md'],

    //   dts: true,

    //   // allow auto import and register components used in markdown
    //   include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    // })
  ]
})
