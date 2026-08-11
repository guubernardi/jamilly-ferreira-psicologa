<template>
  <div id="tela">
    <DocumentosPoliticasSectionDocumento />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'web'
})

useSeo({
  caminho: '/documentos/politicas',
  titulo: 'Política de Privacidade | Jamilly Ferreira',
  descricao:
    'Como os dados pessoais enviados pelo site da psicóloga Jamilly Ferreira são coletados, usados e protegidos, em conformidade com a LGPD.',
  trilha: [
    { nome: 'Início', caminho: '/' },
    { nome: 'Política de Privacidade', caminho: '/documentos/politicas' }
  ]
})
</script>
