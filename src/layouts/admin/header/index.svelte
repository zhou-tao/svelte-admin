<script lang="ts">
  import ThemeSwitch from '@c/ThemeSwitch/src/ThemeSwitch.svelte'
  import LogoView from '../sider/components/LogoView.svelte'
  import Menu from '../sider/components/menu/Menu.svelte'
  import Breadcrumb from './components/Breadcrumb.svelte'
  import { settingStore, isVerticalMenu } from '@/store/setting'
  import { userStore } from '@/store/user'
  import { MenuLayout } from '@/enums/menuEnum'
  import { isSupported, isFullScreenStore, toggleFullScreen } from '@/hooks/web/useFullScreen'

  let menuMode = MenuLayout.HORIZONTAL

</script>

<header
  class="h-header px-6 flex-center justify-between b-b-(1 solid root_light) dark:b-root_dark bg-page"
>
  <div class="flex items-center gap-6">
    {#if $isVerticalMenu}
      <span class="cursor-pointer leading-0" on:click={() => settingStore.update(v => ({ ...v, menuCollapsed: !v.menuCollapsed }))}>
        {#if $settingStore.menuCollapsed}
          <div class="i-ep-expand" />
        {:else}
          <div class="i-ep-fold" />
        {/if}
      </span>
    {:else}
      <!-- class="mr-6" -->
      <LogoView />
    {/if}
    {#if $settingStore.hasBreadcrumb && $isVerticalMenu}
      <Breadcrumb />
    {/if}
  </div>
  {#if !isVerticalMenu}
    <Menu bind:mode={menuMode} />
  {/if}
  <div class="flex items-center gap-5">
    {#if isSupported}
      <div class="icon-view" on:click={toggleFullScreen}>
        <div class="{$isFullScreenStore ? 'i-app-fullscreen-exit' : 'i-ep-full-screen'}"></div>
      </div>
    {/if}
    <div class="icon-view">
      <div class="i-ep-bell-filled" />
    </div>
    <ThemeSwitch />
    <div class="flex items-center cursor-pointer">
      <img src={$userStore.avatar} alt="avatar" class="w-8 h-8 rounded-full shadow-lg b-(1 solid light opacity-40) object-cover" />
      <span class="text-base ml-2">{$userStore.username}</span>
    </div>
  </div>
</header>
