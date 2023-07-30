/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="unocss/vite" />

interface ImportMetaEnv {
  readonly VITE_PORT: string
  readonly VITE_PUBLIC_PATH: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
