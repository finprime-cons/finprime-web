import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit to 1000 KB
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split libraries into 'vendor' chunk
          if (id.includes('node_modules')) {
            return 'vendor'; // Bundle all node_modules into 'vendor' chunk
          }

          // Dynamically split routes or large files
          if (id.includes('project-1-main/components')) {
            return 'components'; // Bundle all components into 'components' chunk
          }
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5002'
    }
},
assetsInclude: ['**/*.JPG', '**/*.PNG', '**/*.GIF', '**/*.SVG'],
});