import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

function localApiPlugin() {
  return {
    name: 'local-api',
    configureServer(server) {
      server.middlewares.use('/api/projects', (req, res) => {
        const dataPath = path.resolve(__dirname, 'data/projects.json');
        if (req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          try {
             const data = fs.readFileSync(dataPath, 'utf-8');
             res.end(data);
          } catch(e) {
             res.end('[]');
          }
          return;
        }
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            fs.writeFileSync(dataPath, body, 'utf-8');
            res.end(JSON.stringify({ success: true }));
          });
          return;
        }
      });

      server.middlewares.use('/api/categories', (req, res) => {
        const dataPath = path.resolve(__dirname, 'data/categories.json');
        if (req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          try {
             const data = fs.readFileSync(dataPath, 'utf-8');
             res.end(data);
          } catch(e) {
             res.end('[]');
          }
          return;
        }
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            fs.writeFileSync(dataPath, body, 'utf-8');
            res.end(JSON.stringify({ success: true }));
          });
          return;
        }
      });
    }
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), localApiPlugin()],
    base: './',
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
      },
    },
    server: {
      port: 3115,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: {
        ignored: ['**/data/**']
      }
    },
  };
});
