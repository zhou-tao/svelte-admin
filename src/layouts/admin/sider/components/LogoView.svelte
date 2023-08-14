<script lang="ts">
  import { push } from 'svelte-spa-router'
  import { settingStore } from '@/store/setting'
</script>

<div class="h-header flex-center cursor-pointer" on:click={() => push('/admin/dashboard')}>
  <img src="/svelte.svg" alt="logo" width="24">
  {#if !$settingStore.menuCollapsed}
    <h1
      class="text-(xl main) ml-2 font-(bold mono) whitespace-nowrap select-none"
    >
      Svelte Admin
    </h1>
  {/if}
</div>

<style lang="scss"></style>
