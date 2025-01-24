import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5177, // Stel een vaste poort in
  },
  plugins: [react()],
})
