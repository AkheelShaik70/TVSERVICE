
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Local development uses '/', production targets the TVSERVICE GitHub repository.
  base: mode === 'production' ? '/TVSERVICE/' : '/',
}))

