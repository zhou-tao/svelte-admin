<script lang="ts">
  import LogoView from './components/LogoView.svelte'
  import Menu from './components/menu/Menu.svelte'
  import { settingStore } from '@/store/setting'
</script>

<aside class="{`${$settingStore.menuCollapsed ? 'w-54px' : 'w-260px'} b-r-(1 solid root_light) dark:b-r-root_dark overflow-x-hidden pb-12 box-border bg-page transition-width duration-400 ease-in-out`}">
  <LogoView />
  <Menu />
</aside>
