import Components from 'unplugin-vue-components/vite'

export const configAutoImport = () => {
  return Components({
    dirs: ['src/components'],
    extensions: ['svelte'],
    globs: ['src/components/*.{svelte}']
  })
}
