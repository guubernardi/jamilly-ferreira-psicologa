import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  debug: true,
  css: ['~/assets/css/index.sass'],
  components: {
    dirs: ['~/components/global', '~/components/pages']
  },
  experimental: {
    payloadExtraction: false,
    viewTransition: true
  },
  features: {
    inlineStyles: false
  },
  modules: ['@pinia/nuxt', '@nuxt/image'],
  image: {
    quality: 80,
    format: ['webp', 'avif', 'png', 'jpg'],
    densities: [1, 2]
  },
  nitro: {
    compressPublicAssets: true,
    minify: true,
    storage: {
      memory: {
        driver: 'memory'
      }
    }
  },
  vite: {
    // @edusites/icons usa top-level await; o alvo padrão (es2020) não suporta
    // e quebra o `nuxt build` (e, por tabela, o deploy da Vercel).
    build: {
      target: 'esnext'
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext'
      }
    }
  },
  compatibilityDate: '2025-04-03'
})
