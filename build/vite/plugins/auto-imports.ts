import Components from 'unplugin-svelte-components/vite'

export const configAutoImport = () => {
  return Components({
    dts: 'types/component.d.ts',
    dirs: ['src/components'],
    extensions: ['svelte'],
    external: [
      {
        from: '@casual-ui/svelte',
        names: [
          'CForm',
          'CFormItem',
          'CButton',
          'CInput',
          'CCheckbox',
          'openNotification'
        ],
        defaultImport: false
      }
    ]
  })
}
