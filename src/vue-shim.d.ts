
// This file helps TypeScript understand Vue single-file components
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Make sure TypeScript recognizes the Vue import
declare module 'vue' {
  import { App } from 'vue'
  export * from 'vue'
  export { App }
}
