import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import assetsPlugin from './lib/vite-plugin-assets/dist/index'
import pagesPlugin from './lib/vite-plugin-pages/dist/src/index'
import contentPlugin from './lib/vite-plugin-content/dist/src/index'
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
