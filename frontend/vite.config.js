import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 🚨 ÇOK ÖNEMLİ
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
