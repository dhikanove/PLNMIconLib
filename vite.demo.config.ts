import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: './', // 🔥 penting buat preview / static hosting
    plugins: [vue()],
    build: {
        outDir: 'docs',
        emptyOutDir: true,
    },
})