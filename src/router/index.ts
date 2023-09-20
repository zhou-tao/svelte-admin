import { wrap } from 'svelte-spa-router/wrap'
import NotFound from '@/views/error/not-found.svelte'
import Docs from '@/views/docs/index.svelte'
import Login from '@/views/login/index.svelte'
import AdminLayout from '@/layouts/admin/index.svelte'

export const RootRoutes = {
  '/': Login,
  '/docs': Docs,

  '/admin': AdminLayout,
  '/admin/*': AdminLayout,

  '*': NotFound
}

export const AdminRoutes = {
  '/dashboard': wrap({
    // @ts-expect-error async route
    asyncComponent: () => import('../views/admin/dashboard/index.svelte')
  }),

  '/user/:id': wrap({
    // @ts-expect-error async route
    asyncComponent: () => import('../views/admin/user/detail.svelte')
  }),

  '/user': wrap({
    // @ts-expect-error async route
    asyncComponent: () => import('../views/admin/user/index.svelte')
  })
}
