import { svelte } from '@sveltejs/vite-plugin-svelte'
import unocss from 'unocss/vite'
import extractorSvelte from '@unocss/extractor-svelte'
import legacy from '@vitejs/plugin-legacy'
import { configAutoImport } from './auto-imports'

export const createVitePlugins = (viteEnv, isBuild) => {
  const { VITE_USE_LEGACY } = viteEnv

  const vitePlugins = [
    svelte(),

    // unocss 配置
    unocss({
      // mode: '@unocss/svelte-scoped',
      extractors: [extractorSvelte()]
    }),

    // element-plus 自动导入
    configAutoImport()
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
