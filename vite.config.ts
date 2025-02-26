import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import commonjs from 'vite-plugin-commonjs'
import { default as thepackage } from './package.json'

// https://vite.dev/config/
export default defineConfig({
  base: "/www/",
  server: {
    port: 5177, // Set a fixed port
    fs: {
      allow: [
        // Allow serving files from these directories
        '/Users/joopringelberg/Code/mycontexts',
        '/Users/joopringelberg/Code/perspectives-core',
        '/Users/joopringelberg/Code/perspectives-proxy',
        '/Users/joopringelberg/Code/perspectives-react',
        '/Users/joopringelberg/Code/perspectives-pageworker',
        '/Users/joopringelberg/Code/perspectives-sharedworker'
      ]
    }
  },
  plugins: [
    react(),
    commonjs(),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      'perspectives-core': '/Users/joopringelberg/Code/perspectives-core/dist/perspectives-core.js',
      '/perspectives-core.js': '/Users/joopringelberg/Code/perspectives-core/dist/perspectives-core.js',
      'perspectives-pageworker': '/Users/joopringelberg/Code/perspectives-pageworker/dist/perspectives-pageworker.js',
      'perspectives-sharedworker': '/Users/joopringelberg/Code/perspectives-sharedworker/dist/perspectives-sharedworker.js'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  build: {
    target: 'es2023',
    rollupOptions: {
      input: {
        main: './index.html',
        manage: './manage.html'
      },
      external: [
        '/Users/joopringelberg/Code/perspectives-core/dist/perspectives-core.js',
        '/Users/joopringelberg/Code/perspectives-pageworker/dist/perspectives-pageworker.js',
        '/Users/joopringelberg/Code/perspectives-sharedworker/dist/perspectives-sharedworker.js'
      ]
    }
  },
  define: {
    __MYCONTEXTS_VERSION__: JSON.stringify(thepackage.version)
  }
})
