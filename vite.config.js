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
    const isBinaryAsset = /\.(png|jpe?g|gif|webp|ico|bmp|tiff|woff2?|eot|ttf|otf|mp4|webm|wav|mp3)$/i.test(cleanId);
    if (isBinaryAsset) {
      return;
    }
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

// Backend API middleware plugin to handle live application submissions and auth
const backendApiPlugin = () => ({
  name: 'backend-api-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/careers/apply' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
          try {
            const data = JSON.parse(body || '{}');
            const appsPath = 'src/data/applications.json';
            let apps = [];
            if (fs.existsSync(appsPath)) {
              apps = JSON.parse(fs.readFileSync(appsPath, 'utf-8') || '[]');
            }
            const newApp = {
              ...data,
              id: `APP-2026-${String(apps.length + 1).padStart(3, '0')}`,
              status: 'Submitted',
              submittedAt: new Date().toISOString()
            };
            apps.unshift(newApp);
            fs.writeFileSync(appsPath, JSON.stringify(apps, null, 2));
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ success: true, applicationId: newApp.id, application: newApp }));
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
        return;
      }

      if (req.url === '/api/careers/applications' && req.method === 'GET') {
        const appsPath = 'src/data/applications.json';
        let apps = [];
        if (fs.existsSync(appsPath)) {
          apps = JSON.parse(fs.readFileSync(appsPath, 'utf-8') || '[]');
        }
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(apps));
        return;
      }

      if (req.url === '/api/auth/login' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
          try {
            const { email } = JSON.parse(body || '{}');
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({
              success: true,
              user: {
                id: `usr-${Date.now()}`,
                email,
                name: email ? email.split('@')[0] : 'Learner',
                role: 'Learner',
                enrolledCourses: ["cyber-defense-01", "ai-ml-02", "database-eng-06"]
              }
            }));
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
        return;
      }

      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    fixHashPathPlugin(),
    backendApiPlugin(),
    tailwindcss(),
    react(),
  ],
  server: {
    fs: {
      strict: false,
    },
  },
})


