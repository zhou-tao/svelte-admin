import type { PluginOption } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import envParser from 'vite-plugin-env-parser'
import legacy from '@vitejs/plugin-legacy'

// import { configAutoImport } from './auto-imports'
import { configUnocss } from './unocss'

export const createVitePlugins = (viteEnv: Record<string, any>, isBuild: boolean) => {
  const { VITE_USE_LEGACY } = viteEnv

  const vitePlugins: PluginOption = [
    svelte(),

    envParser({
      dts: 'types/env.d.ts'
    }),

    // unocss 配置
    configUnocss()

    // 组件自动导入
    // configAutoImport()
  ]

  if (isBuild) {
    // 生产环境兼容不支持ESM浏览器以及内置babel
    VITE_USE_LEGACY
      && vitePlugins.push(
        legacy({
          targets: ['defaults', 'not IE 11']
        })
      )
  }

  return vitePlugins
}
