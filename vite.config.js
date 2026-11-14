import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import githubContributionsHandler from './api/github-contributions.js'

const apiMiddlewarePlugin = () => {
  const mountApi = (middlewares, mode) => {
    const env = loadEnv(mode, process.cwd(), '')
    for (const [key, value] of Object.entries(env)) {
      if (process.env[key] === undefined) {
        process.env[key] = value
      }
    }

    middlewares.use('/api/github-contributions', async (req, res, next) => {
      if (!req.url || req.url === '/' || req.url.startsWith('/?')) {
        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (payload) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(payload))
          return res
        }
        try {
          await githubContributionsHandler(req, res)
        } catch (err) {
          next(err)
        }
        return
      }
      next()
    })
  }

  return {
    name: 'github-contributions-api-middleware',
    configureServer(server) {
      mountApi(server.middlewares, server.config.mode)
    },
    configurePreviewServer(server) {
      mountApi(server.middlewares, server.config.mode)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiMiddlewarePlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
})
