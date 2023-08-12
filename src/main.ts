import App from './App.svelte'

import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import '@casual-ui/svelte/dist/style/style.css'
import './styles/index.scss'

export default new App({
  target: document.getElementById('app')
})
