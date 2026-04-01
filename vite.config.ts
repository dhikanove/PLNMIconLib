import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  // 🔥 BUILD LIBRARY
  if (mode === 'lib') {
    return {
      plugins: [vue()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/icons/index.ts'),
          name: 'PlnmIconLib',
          fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
          formats: ['es', 'cjs'],
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue',
            },
            exports: 'named',
          },
        },
        sourcemap: true,
        emptyOutDir: true,
      },
    }
  }

  // 🌐 BUILD DEMO
  return {
    plugins: [vue()],
    build: {
      outDir: 'docs',
      emptyOutDir: true,
    },
  }
})