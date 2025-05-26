import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default () => {
  const env = loadEnv('all', process.cwd());

  return defineConfig({
  
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_PROXY_URL,
          changeOrigin: true,
        },
        '/doc': {
          target: env.VITE_PROXY_URL,
          changeOrigin: true,
        },
      },
    },
    assetsInclude: ['**/*.png'],
    
  })
}

