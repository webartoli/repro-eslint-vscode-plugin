import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import { ServerOptions } from 'https'
import { visualizer } from 'rollup-plugin-visualizer'

type HttpsServerOptions = { https: ServerOptions }

const https = () => {
  const path = 'certs'
  if (!fs.existsSync(path)) return {}

  const result: HttpsServerOptions = { https: {} }

  for (const file of fs.readdirSync(path)) {
    if (!file.endsWith('.pem')) continue

    const type = file.endsWith('-key.pem') ? 'key' : 'cert'
    const content = fs.readFileSync(`${path}/${file}`)
    result.https[type] = content
  }

  return result.https.key ? result : {}
}

//const key = fs.readFileSync('const/*-key.pem')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'build/visualizer/stats.html'
    })
  ],
  server: {
    port: Number(process.env.FRONTEND || 4000),
    ...https(),
    proxy: {
      '/api': `http://localhost:${process.env.PORT || 3000}`
    }
  },
  build: {
    outDir: 'build/dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'ui-engine': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': ['@fluentui/react', '@fluentui/react-hooks', 'styled-components']
        }
      }
    }
  }
})
