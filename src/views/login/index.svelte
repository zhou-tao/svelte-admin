<script lang="ts">
  import LoginForm from './components/LoginForm.svelte'
  import ThemeSwitch from '@/components/ThemeSwitch/src/ThemeSwitch.svelte'
  import Banner from '@/assets/images/login_banner.svg'
</script>

<div
  class="relative w-screen h-screen flex-center justify-around overflow-hidden bg-gradient-light dark:bg-gradient-dark"
>
  <img src={Banner} class="w-lg" alt="banner">
  <div class="fixed top-3% right-2% text-xl">
    <ThemeSwitch />
  </div>
  <LoginForm />
</div>
