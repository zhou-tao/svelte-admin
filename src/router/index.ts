import { wrap } from 'svelte-spa-router/wrap'

export default {
  '/': wrap({
    asyncComponent: () => import('../views/login/index.svelte')
  }),

  '/admin/dashboard': wrap({
    asyncComponent: () => import('../views/admin/dashboard/index.svelte')
  }),

  '/admin/user': wrap({
    asyncComponent: () => import('../views/admin/user/index.svelte')
  }),

  '/admin/user/:id': wrap({
    asyncComponent: () => import('../views/admin/user/detail.svelte')
  }),

  '*': wrap({
    asyncComponent: () => import('../views/error/not-found.svelte')
  })
}
