<script lang="ts">
  import { CToggle } from '@casual-ui/svelte'
  import { isDark, toggleDark } from '@/store/setting'

  export let type: 'base' | 'switch' = 'base'
</script>

{#if type === 'switch'}
  <div class="text-2xl flex-center gap-4">
    <div class="i-fluent-emoji-flat-sun" />
    <!-- <el-switch
      :model-value="darkTheme"
      size="large"
      inline-prompt
      active-text="暗"
      inactive-text="亮"
      on:click={toggleDark}
    /> -->
    <CToggle bind:value={$isDark} on:click={toggleDark} />
    <div class="i-fluent-emoji-flat-crescent-moon" />
  </div>
{:else}
  <span class="icon-view text-(xl regular) dark:text-regular_dark cursor-pointer" on:click={toggleDark}>
    <div class="{ $isDark ? 'i-app-sun' : 'i-app-moon' }"></div>
  </span>
{/if}
