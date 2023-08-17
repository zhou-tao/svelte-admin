import { resolve } from 'node:path'
import autoprefixer from 'autoprefixer'
import { defineConfig, loadEnv } from 'vite'
import { parse } from 'vite-plugin-env-parser'
import { createVitePlugins } from './build/vite/plugins'
import { createProxy } from './build/vite/proxy'

export default defineConfig(({ mode }) => {
  const isBuild = mode === 'production'
  const envDir = resolve(__dirname, 'env')
  const viteEnv = parse(loadEnv(mode, envDir))
  const {
    VITE_PORT,
    VITE_PUBLIC_PATH
  } = viteEnv

  return {
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@c': resolve(__dirname, 'src/components'),
        '#': resolve(__dirname, 'types')
      }
    },
    envDir,
    css: {
      devSourcemap: false,
      postcss: {
        plugins: [
          autoprefixer() as any
        ]
      }
    },
    server: {
      port: Number(VITE_PORT),
      host: true,
      open: true,
      proxy: createProxy()
    }
  }
})
