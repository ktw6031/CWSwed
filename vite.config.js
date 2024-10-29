import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            usePolling: true,    // 파일 변경 감지를 위한 폴링 활성화
        },
    },
    base: '',
    build: {
        outDir: 'docs',
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/scss/index.scss;`
            }
        }
    }
})