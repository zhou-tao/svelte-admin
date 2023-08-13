import { writable, derived } from 'svelte/store'
import { ThemeEnum } from '@/enums/appEnum'
import { MenuLayout } from '@/enums/menuEnum'
import { LocalStorageEnum } from '@/enums/storageEnum'
import { getLocalStorage, setLocalStorage } from '@/hooks/web/useStorage'

const { APP_THEME, APP_HAS_FP_LOADING } = LocalStorageEnum

export const settingStore = writable({
  theme: getLocalStorage(APP_THEME, ThemeEnum.LIGHT),
  menuLayout: MenuLayout.VERTICAL,
  menuCollapsed: false,
  hasBreadcrumb: true,
  hasTabView: true,
  hasFooter: true,
  hasLocales: true,
  hasFpLoading: getLocalStorage(APP_HAS_FP_LOADING, true),
  hasPageAnimate: true,
  hasProgress: true
})

settingStore.subscribe(({ theme, hasFpLoading }) => {
  setLocalStorage(APP_THEME, theme)
  document.documentElement.className = theme === ThemeEnum.DARK ? 'dark' : ''
  setLocalStorage(APP_HAS_FP_LOADING, hasFpLoading)
})

export const isVerticalMenu = derived(settingStore, v => v.menuLayout === MenuLayout.VERTICAL)

export const isDark = derived(settingStore, v => v.theme === ThemeEnum.DARK)

export function toggleDark() {
  settingStore.update(v => ({ ...v, theme: v.theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK }))
}

export function toggleMenuLayout() {
  settingStore.update(v => ({ ...v, menuLayout: v.menuLayout === MenuLayout.HORIZONTAL ? MenuLayout.VERTICAL : MenuLayout.HORIZONTAL }))
}

export function toggleCollapse() {
  settingStore.update(v => ({ ...v, menuCollapsed: !v.menuCollapsed }))
}

export function toggleFpLoading() {
  settingStore.update(v => ({ ...v, hasFpLoading: !v.hasFpLoading }))
}

export function togglePageAnimate() {
  settingStore.update(v => ({ ...v, hasPageAnimate: !v.hasPageAnimate }))
}

export function toggleProgress() {
  settingStore.update(v => ({ ...v, hasProgress: !v.hasProgress }))
}
