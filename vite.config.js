


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Task-Management-System/', // 👈 Ye repo name hai (case-sensitive)
})