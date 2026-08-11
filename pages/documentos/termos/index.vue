<template>
  <div id="tela">
    <DocumentosTermosSectionDocumento />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'web'
})

useSeo({
  caminho: '/documentos/termos',
  titulo: 'Termos e Condições de Uso | Jamilly Ferreira',
  descricao:
    'Termos e condições de uso do site da psicóloga Jamilly Ferreira: regras de navegação, limites de responsabilidade e informações sobre o atendimento online.',
  trilha: [
    { nome: 'Início', caminho: '/' },
    { nome: 'Termos e Condições de Uso', caminho: '/documentos/termos' }
  ]
})
</script>
