// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  vite:{
    plugins: [
      svgLoader({
        /* ... */
      })
    ]
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
})
