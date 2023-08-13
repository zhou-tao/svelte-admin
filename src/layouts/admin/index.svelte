<script lang="ts">
  import Header from './header/index.svelte'
  import Sider from './sider/index.svelte'
  import Tabs from './tabs/index.svelte'
  import Content from './content/index.svelte'
  import Footer from './footer/index.svelte'
</script>

<div class="admin-layout h-full bg-root">
  <div class="flex h-full">
    <Sider />
    <div class="h-full flex-1">
      <Header />
      <Tabs />
      <Content />
      <Footer />
    </div>
  </div>
</div>
