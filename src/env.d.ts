/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'particles.vue3'

/// <reference types="vite/client" />
// https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
interface ImportMetaEnv {
  readonly VITE_HOST: string
  readonly VITE_PORT: string
  readonly VITE_APP_TITLE: string
  readonly VITE_API_DOMAIN: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
