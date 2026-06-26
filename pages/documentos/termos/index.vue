<template>
  <div id="tela">
    <DocumentosTermosSectionDocumento />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'web'
})

useHead({
  title: 'Termos e Condições de Uso',
  meta: [
    { name: 'description', content: 'Veja o documento de Termos e Condições de Uso' },
    { property: 'og:title', content: 'Termos e Condições de Uso' },
    { property: 'og:description', content: 'Veja o documento de Termos e Condições de Uso' }
  ]
})
</script>
