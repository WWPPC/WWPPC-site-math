import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import multiPublicDir from 'vite-multiple-assets';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => ['codeblock'].includes(tag)
                }
            }
        }),
        multiPublicDir(['public', 'WWPPC-site-common/public'])
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src/'),
            '#': resolve(__dirname, 'WWPPC-site-common/src/'),
            '#p': resolve(__dirname, 'WWPPC-site-common/public/')
        }
    },
    build: {
        target: 'es2021'
    },
    server: {
        port: 5174
    }
})