<script lang="ts">
  import Router from 'svelte-spa-router'
  import { AdminRoutes } from '@/router'
</script>

<main class="p3 pb0">
  <Router prefix="/admin" routes={AdminRoutes} />
</main>
