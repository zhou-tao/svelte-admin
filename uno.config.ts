import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons,
  transformerVariantGroup,
  transformerDirectives
} from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'

export default defineConfig({
  extractors: [
    extractorSvelte()
  ],
  theme: {
    colors: {
      root_light: '#f5f6fa', // 最底层背景
      root_dark: '#272727',
      page_light: '#ffffff', // 基础布局背景
      page_dark: '#18181B',
      primary: '#377dff',
      regular: '#606266',
      regular_dark: '#CFD3DC',
      placeholder: '#a8abb2',
      light: 'var(--app-light-9)',
      light_hover: 'var(--app-light-8)'
    },
    height: {
      header: '64px',
      footer: '50px',
      tab: '40px'
    },
    minHeight: {
      content: 'calc(100vh - 169px)'
    }
  },
  shortcuts: {
    'bg-root': 'bg-root_light dark:bg-root_dark',
    'bg-page': 'bg-page_light dark:bg-page_dark',
    'flex-center': 'flex justify-center items-center',
    'transition-base': 'transition-all duration-150 ease-in-out',
    'page-base': 'min-h-content overflow-x-hidden box-border',
    'page-card': 'page-base bg-page rounded px-6 py-5'
  },
  rules: [
    [
      'text-brand-gradient',
      {
        'color': 'transparent',
        'background-image': 'linear-gradient(to right, #00ff8f, #00a1ff)',
        'background-clip': 'text'
      }
    ],
    [
      'bg-gradient-light',
      {
        'background-image':
          'linear-gradient( 135deg, #ABDCFF30 20%, #0396FF20 100%)'
      }
    ],
    [
      'bg-gradient-dark',
      {
        'background-image':
          'linear-gradient( 135deg, #2A5470 20%, #4C4177 100%)'
      }
    ],
    [
      'shadow-card-dark',
      {
        'box-shadow': '0 0 12px 0 rgb(0 0 0 / 9%)'
      }
    ]
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      collections: {
        app: FileSystemIconLoader('./src/assets/icons')
      },
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        'margin': '0 4px'
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
