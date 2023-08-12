/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="unocss/vite" />

declare interface ViteEnv {
  VITE_PORT: number
  VITE_PUBLIC_PATH: string
  VITE_USE_LEGACY: boolean
}

interface ImportMetaEnv
  extends Readonly<Record<keyof ViteEnv, string>> {
  __: never
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
