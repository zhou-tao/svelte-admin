import App from './App.svelte'

import './styles/index.scss'
import '@unocss/reset/tailwind-compat.css'
import 'uno.css'

export default new App({
  target: document.getElementById('app'),
})
