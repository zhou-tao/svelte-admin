import { wrap } from 'svelte-spa-router/wrap'
import NotFound from '@/views/error/not-found.svelte'
import Login from '@/views/login/index.svelte'
import AdminLayout from '@/layouts/admin/index.svelte'

export const RootRoutes = {
  '/': Login,

  '/admin': AdminLayout,
  '/admin/*': AdminLayout,

  '*': NotFound
}

export const AdminRoutes = {
  '/dashboard': wrap({
    asyncComponent: () => import('../views/admin/dashboard/index.svelte')
  }),

  '/user/:id': wrap({
    asyncComponent: () => import('../views/admin/user/detail.svelte')
  }),

  '/user': wrap({
    asyncComponent: () => import('../views/admin/user/index.svelte')
  })
}
