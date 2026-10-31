import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import fs from 'fs'

// Plugin to ensure paths with '#' (like Windows 'E:/C#/risnext') load reliably in dev server
const fixHashPathPlugin = () => ({
  name: 'fix-hash-path',
  enforce: 'pre',
  load(id) {
    const cleanId = id.split('?')[0];
    if (cleanId.includes('#') && fs.existsSync(cleanId)) {
      try {
        if (fs.statSync(cleanId).isFile()) {
          return fs.readFileSync(cleanId, 'utf-8');
        }
      } catch {
        // ignore and let next plugin handle
      }
    }
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    fixHashPathPlugin(),
    tailwindcss(),
    react(),
  ],
  server: {
    fs: {
      strict: false,
    },
  },
})


