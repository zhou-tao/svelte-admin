<script lang="ts">
  import { MenuLayout } from '@/enums/menuEnum'

  export let mode: MenuLayout = MenuLayout.VERTICAL
</script>

<div class="text-center">{mode} Menu</div>
