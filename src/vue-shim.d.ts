
// This file helps TypeScript understand Vue single-file components
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Enable direct Vue imports
declare module 'vue' {
  export * from 'vue/dist/vue.esm-bundler'
}
