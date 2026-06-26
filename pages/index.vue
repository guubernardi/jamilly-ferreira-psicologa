<template>
  <div class="pagina">
    <IndexSectionHero />
    <Onda corTopo="var(--cor-fundo)" cor="#FFFFFF" />
    <IndexSectionSituacao />
    <Onda corTopo="#FFFFFF" cor="var(--cor-fundo)" />
    <IndexSectionProcesso />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'web'
})

useHead({
  title: 'Jamilly Ferreira | Psicóloga',
  meta: [
    { name: 'description', content: '' },
    { property: 'og:title', content: 'Jamilly Ferreira | Psicóloga' },
    { property: 'og:description', content: '' }
  ]
})
</script>

<style lang="sass" scoped>
.pagina
  display: flex
  flex-direction: column
  width: 100%
</style>
