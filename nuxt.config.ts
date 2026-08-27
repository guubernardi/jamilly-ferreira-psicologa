import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  css: ['~/assets/css/index.sass'],
  components: {
    dirs: ['~/components/global', '~/components/pages']
  },

  // URL canônica do site. Tudo (canonical, og:url, sitemap, robots, JSON-LD, llms.txt)
  // deriva daqui. Para sobrescrever na Vercel: variável NUXT_PUBLIC_SITE_URL.
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://jamillyferreirapsicologa.com.br'
    }
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
    // Gera o HTML das páginas no build: o crawler recebe a resposta pronta,
    // sem esperar renderização no servidor (TTFB menor = melhor rastreabilidade).
    prerender: {
      crawlLinks: false,
      routes: ['/', '/bio', '/documentos/politicas', '/documentos/termos']
    },
    storage: {
      memory: {
        driver: 'memory'
      }
    }
  },

  routeRules: {
    // Assets versionados/imutáveis: cache longo no navegador e na CDN.
    '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/imagens/**': { headers: { 'cache-control': 'public, max-age=2592000' } },
    '/images/**': { headers: { 'cache-control': 'public, max-age=2592000' } },
    '/icones/**': { headers: { 'cache-control': 'public, max-age=2592000' } },
    '/favicons/**': { headers: { 'cache-control': 'public, max-age=2592000' } }
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
