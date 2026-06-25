<template>
  <div id="tela">
    <IndexSectionHero />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'web'
})

useHead({
  title: 'Workshop Dominando NuxtJS',
  meta: [
    { name: 'description', content: 'Aprenda na prática a criar um site com NuxtJS ao vivo nos dias 06 e 07 de Dezembro' },
    { property: 'og:title', content: 'Workshop Dominando NuxtJS' },
    { property: 'og:description', content: 'Aprenda na prática a criar um site com NuxtJS ao vivo nos dias 06 e 07 de Dezembro' }
  ]
})
</script>
