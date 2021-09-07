import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import assetsPlugin from './lib/vite-plugin-assets/dist/index'
import pagesPlugin from './lib/vite-plugin-pages/dist/src/index'
import contentPlugin from './lib/vite-plugin-content/dist/src/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins:[
    vue(), 
    assetsPlugin(), 
    pagesPlugin(), 
    contentPlugin()
  ]
})
