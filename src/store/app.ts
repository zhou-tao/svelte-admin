import { writable } from 'svelte/store'

export const appStore = writable({
  visitedViews: [],
  cachedViews: []
})
