<script lang="ts">
  import Router from 'svelte-spa-router'
  import { AdminRoutes } from '@/router'
</script>

<main>
  <Router prefix="/admin" routes={AdminRoutes} />
</main>
