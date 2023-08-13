<script lang="ts">
  import Router from 'svelte-spa-router'
  import { AdminRoutes } from '@/router'
</script>

<main class="p3">
  <Router prefix="/admin" routes={AdminRoutes} />
</main>
