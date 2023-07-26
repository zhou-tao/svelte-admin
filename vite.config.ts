import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import { createVitePlugins } from './build/vite/plugins'
import { createViteProxy } from './build/vite/proxy'

export default defineConfig(({ mode }) => {
  const isBuild = mode === 'production'
  const envDir = resolve(__dirname, 'env')
  const viteEnv = loadEnv(mode, envDir)
  const {
    VITE_PORT,
    VITE_PUBLIC_PATH,
  } = viteEnv

  return defineConfig({
    envDir,
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    esbuild: {
      minify: isBuild
    },
    server: {
      port: VITE_PORT,
      host: true,
      open: true,
      proxy: createViteProxy()
    }
  })
})
