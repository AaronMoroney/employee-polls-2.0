import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'app': resolve(__dirname, 'src/app'),
      'assets': resolve(__dirname, 'src/assets'), 
      'data': resolve(__dirname, 'src/data'), 
      'entities': resolve(__dirname, 'src/entities'),
      'features': resolve(__dirname, 'src/features'),
      'pages': resolve(__dirname, 'src/pages'),
      'shared': resolve(__dirname, 'src/shared'),
      'widgets': resolve(__dirname, 'src/widgets') 
    }
  }
})
