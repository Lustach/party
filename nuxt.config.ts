// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  vite:{
    plugins: [
      svgLoader({
        /* ... */
      })
    ],
    css:{
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/colors.scss" as *;',
        },
      },
    }
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
})
