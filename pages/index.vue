<template>
  <div class="pagina">
    <IndexSectionHero />
    <Onda corTopo="var(--cor-fundo)" cor="#FFFFFF" />
    <IndexSectionSituacao />
    <Onda corTopo="#FFFFFF" cor="var(--cor-fundo)" />
    <IndexSectionProcesso />
    <Onda corTopo="var(--cor-fundo)" cor="#FFFFFF" />
    <IndexSectionSobre />
    <Onda corTopo="#FFFFFF" cor="var(--cor-fundo)" />
    <IndexSectionComoFunciona />
    <Onda corTopo="var(--cor-fundo)" cor="#FFFFFF" />
    <IndexSectionFaq />
    <Onda corTopo="#FFFFFF" cor="var(--cor-fundo)" />
    <IndexSectionContato />
    <Onda corTopo="var(--cor-fundo)" cor="var(--cor-marrom-escuro)" />
  </div>
</template>

<script setup>
import { faqs } from '~/helpers/faq.js'

definePageMeta({
  layout: 'web'
})

// Título com a intenção de busca na frente ("psicóloga online") e o nome depois:
// a marca ainda não tem volume de busca próprio, então o termo genérico puxa mais.
useSeo({
  caminho: '/',
  titulo: 'Psicóloga Online e Psicoterapia Humanizada | Jamilly Ferreira',
  descricao:
    'Psicoterapia online com Jamilly Ferreira, psicóloga clínica em São Bernardo do Campo. Sessões de 50 min por videochamada, escuta sem julgamento e sigilo.',
  // As mesmas perguntas exibidas na seção de FAQ viram FAQPage no JSON-LD.
  faqs
})
</script>

<style lang="sass" scoped>
.pagina
  display: flex
  flex-direction: column
  width: 100%
</style>
