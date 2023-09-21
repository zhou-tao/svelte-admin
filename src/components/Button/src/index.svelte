<script lang="ts">
  import type { ButtonSize, ButtonType, NativeType } from '../types'
  import { useNamespace } from '@/utils/css'

  export let size: ButtonSize = 'default'
  export let type: ButtonType | undefined = undefined
  export let plain = false
  export let text = false
  export let round = false
  export let circle = false
  export let loading = false
  export let loadingIcon = ''
  export let disabled = false
  export let icon = ''
  export let nativeType: NativeType | undefined = undefined

  const { gen, b, bm, is } = useNamespace('button')
</script>

<button class={gen(b(), bm(type), is('plain', plain), is('text', text), is('round', round), is('circle', circle), is('loading', loading), is('disabled', disabled))}>
  <span><slot/></span>
</button>

<style lang="scss">
.q-button {
  @apply p-(x-15px y-8px) rounded outline-none bg-[var(--fill-blank)] border-1 border-[var(--border-darker)] cursor-pointer;
  color: var(--text-regular);
  font-size: var(--font-size-base);

  &--primary {
    @apply bg-[var(--primary)] text-[var(--white)] border-[var(--primary)];
  }
  &--success {
    @apply bg-[var(--success)] text-[var(--white)] border-[var(--success)];
  }
  &--warning {
    @apply bg-[var(--warning)] text-[var(--white)] border-[var(--warning)];
  }
  &--danger {
    @apply bg-[var(--danger)] text-[var(--white)] border-[var(--danger)];
  }
  &--info {
    @apply bg-[var(--info)] text-[var(--white)] border-[var(--info)];
  }
}
</style>
