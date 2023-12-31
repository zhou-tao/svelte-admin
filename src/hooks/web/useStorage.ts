import type { LocalStorageEnum } from '@/enums/storageEnum'

export const setLocalStorage = (key: LocalStorageEnum, value: any) => {
  localStorage[key] = value
}

export const getLocalStorage = (key: LocalStorageEnum, defaultValue?: any) => {
  return localStorage[key] || defaultValue
}
