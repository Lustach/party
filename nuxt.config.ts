// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";
export default defineNuxtConfig({
  ssr: false,
  vite: {
    plugins: [
      svgLoader({
        /* ... */
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use \"@/assets/colors.scss\"as *;  @use \"@/assets/scss/_media.scss\" as *;"
        }
      }
    },
    server: {
      hmr: {
        port: 3008
      }
    }
  },
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxtjs/eslint-module", "nuxt-svgo"]
});
