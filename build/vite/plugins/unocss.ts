import Unocss from 'unocss/vite'
import extractorSvelte from '@unocss/extractor-svelte'

export const configUnocss = () => {
  return Unocss({
    // mode: '@unocss/svelte-scoped',
    extractors: [extractorSvelte()]
  })
}
