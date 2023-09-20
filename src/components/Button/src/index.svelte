<script lang="ts">
  import type { ButtonSize, ButtonType, NativeType } from '../types'

  export let size: ButtonSize = 'default'
  export let type: ButtonType
  export let plain: boolean
  export let text: boolean
  export let round: boolean
  export let circle: boolean
  export let loading: boolean
  export let loadingIcon: string
  export let disabled: boolean
  export let icon: string
  export let nativeType: NativeType
</script>

<button>Button {type} {size} {plain} {text} {round} {circle} {loading} {loadingIcon} {disabled} {icon} {nativeType}</button>

<style lang="scss"></style>
