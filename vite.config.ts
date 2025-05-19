
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "vue": path.resolve(__dirname, "node_modules/vue/dist/vue.esm-bundler.js"),
    },
    dedupe: ['vue']
  },
  optimizeDeps: {
    include: ['vue']
  }
}));
