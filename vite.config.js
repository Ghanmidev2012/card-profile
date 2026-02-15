import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/card-profile/', // ضع هنا اسم المستودع (Repository Name) الخاص بك على GitHub
})
