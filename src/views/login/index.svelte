<script lang="ts">
  import LoginForm from './components/LoginForm.svelte'
  import ThemeSwitch from '@/components/ThemeSwitch/src/ThemeSwitch.svelte'
</script>

<div
  class="relative w-screen h-screen flex-center justify-around overflow-hidden bg-gradient-light dark:bg-gradient-dark"
>
  <img src="/src/assets/images/login_banner.svg" class="w-lg" alt="banner">
  <div class="fixed top-3% right-2% text-xl">
    <ThemeSwitch />
  </div>
  <LoginForm />
</div>
