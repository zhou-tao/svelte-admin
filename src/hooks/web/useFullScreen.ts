import { onDestroy } from 'svelte'
import { writable, get } from 'svelte/store'

const Full_Screen_Event = 'fullscreenchange'

export const isSupported = document.fullscreenEnabled

export const isFullScreenStore = writable(false)

export function toggleFullScreen() {
  if (!isSupported) {
    console.warn('sorry, current browser does not supported!')
    return
  }

  // 监听点击与快捷键触发的全屏事件
  document.addEventListener(Full_Screen_Event, setFullScreenVal)
  if (get(isFullScreenStore)) {
    document.exitFullscreen()
  }
  else {
    document.body.requestFullscreen()
  }
}

export function autoRemoveListener() {
  onDestroy(() => {
    document.removeEventListener(Full_Screen_Event, setFullScreenVal)
  })
}

function setFullScreenVal() {
  isFullScreenStore.update(v => !v)
}
