<template>
  <div id="tela">
    <DocumentosPoliticasSectionDocumento />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'web'
})

useHead({
  title: 'Política de Privacidade',
  meta: [
    { name: 'description', content: 'Veja o documento de Política de Privacidade' },
    { property: 'og:title', content: 'Política de Privacidade' },
    { property: 'og:description', content: 'Veja o documento de Política de Privacidade' }
  ]
})
</script>
