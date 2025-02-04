import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import commonjs from 'vite-plugin-commonjs';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5177, // Stel een vaste poort in
  },
  plugins: [react(), tsconfigPaths(), commonjs()],
  resolve: {
    alias: {
      'perspectives-core': '/Users/joopringelberg/Code/perspectives-core/dist/perspectives-core.js',
      '/perspectives-core.js': '/Users/joopringelberg/Code/perspectives-core/dist/perspectives-core.js'
    }
  }
})
