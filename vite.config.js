import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/jacloudstudio/',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['motion', 'gsap'],
          'ui': ['react-icons', 'lottie-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    middlewareMode: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'motion', 'gsap'],
  },
})
