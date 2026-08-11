<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { descricaoPadrao, marca, negocio } from '~/helpers/site.js'
import { schemaGlobal, serializar } from '~/helpers/schema.js'

const base = useUrlSite()

useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  // Sufixo de marca aplicado a todo título de página que não o traga pronto.
  titleTemplate: (titulo) =>
    titulo ? (titulo.includes(negocio.nome) ? titulo : `${titulo} | ${negocio.nome}`) : `${negocio.nome} | ${negocio.cargo}`,
  meta: [
    { charset: 'utf-8' },
    { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
    // Sem maximum-scale: travar o zoom reprova em acessibilidade (WCAG 1.4.4),
    // e acessibilidade entra na avaliação de qualidade de página.
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'HandheldFriendly', content: 'true' },
    { name: 'theme-color', content: marca.corTema },
    { name: 'msapplication-TileColor', content: marca.corTema },
    { name: 'msapplication-navbutton-color', content: marca.corTema },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-title', content: negocio.nome },
    { name: 'application-name', content: negocio.nome },
    { name: 'author', content: negocio.nomeCompleto },
    { name: 'publisher', content: negocio.nomeCompleto },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
    // Sinaliza a região de atendimento para buscadores que ainda leem geo tags.
    { name: 'geo.region', content: `${negocio.paisCodigo}-${negocio.estadoSigla}` },
    { name: 'geo.placename', content: negocio.cidade },
    { name: 'geo.position', content: `${negocio.geo.lat};${negocio.geo.lng}` },
    { name: 'ICBM', content: `${negocio.geo.lat}, ${negocio.geo.lng}` },
    // Padrões de compartilhamento; cada página sobrescreve com os seus via useSeo().
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: negocio.nome },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:image:type', content: marca.compartilharTipo },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap' },
    // Fontes do texto acima da dobra: carregam junto do HTML em vez de esperar o CSS.
    { rel: 'preload', as: 'font', type: 'font/woff', href: '/fonts/figtree-light.woff', crossorigin: '' },
    { rel: 'preload', as: 'font', type: 'font/woff', href: '/fonts/figtree-bold.woff', crossorigin: '' },
    // Maior imagem da primeira tela (LCP): começa a baixar antes do parser chegar nela.
    { rel: 'preload', as: 'image', href: '/imagens/jamilly.png', fetchpriority: 'high' },
    { rel: 'manifest', href: '/manifest.webmanifest' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '194x194', href: '/favicons/favicon-194x194.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicons/android-chrome-512x512.png' }
    // Sem `mask-icon`: ele exige um SVG monocromático vetorial, e o monograma da
    // marca é raster. O Safari usa o favicon PNG normal na aba fixada.
  ],
  // Grafo de entidades do site (consultório + profissional + website).
  // Fica no app.vue para estar presente em toda página; cada página soma o seu WebPage.
  script: [
    {
      type: 'application/ld+json',
      innerHTML: serializar(schemaGlobal(base))
    }
  ]
})

// Descrição padrão: vale para qualquer página que não defina a sua.
useSeoMeta({ description: descricaoPadrao })

onMounted(() => {
  // impede arrastar imagens (cobre Firefox, onde CSS user-drag não funciona)
  document.addEventListener('dragstart', (e) => {
    if (e.target && e.target.tagName === 'IMG') e.preventDefault()
  })

  watch(
    () => useRoute().path,
    () => {
      window.scrollTo(0, 0)
    }
  )
})
</script>
