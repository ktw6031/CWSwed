import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            usePolling: true,    // 파일 변경 감지를 위한 폴링 활성화
        },
    },
    build: {
        outDir: 'docs'  // 빌드 출력 디렉토리를 'docs'로 설정
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/scss/index.scss;`
            }
        }
    }
})