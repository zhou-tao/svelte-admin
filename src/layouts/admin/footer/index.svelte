<script lang="ts">
  import { settingStore } from '@/store/setting'
</script>

{#if $settingStore.hasFooter}
  <footer class="h-footer">
    <div class="h-full flex-center text-placeholder">
      MIT Licensed <div class="i-app-heart text-rose-600!" /> Copyright © 2023-present toryz
    </div>
  </footer>
{/if}
