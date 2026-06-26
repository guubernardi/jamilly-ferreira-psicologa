<template>
  <div class="onda" :class="{ invertida }" :style="{ backgroundColor: corTopo }">
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path
        :fill="cor"
        d="M0,28 C400,112 1040,112 1440,28 L1440,120 L0,120 Z"
      />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  // cor da seção de baixo (preenchimento da onda)
  cor: { type: String, default: '#FFFFFF' },
  // cor da seção de cima (fundo do container da onda)
  corTopo: { type: String, default: 'transparent' },
  // inverte a curva (útil quando a onda separa de baixo pra cima)
  invertida: { type: Boolean, default: false }
})
</script>

<style lang="sass" scoped>
.onda
  width: 100%
  line-height: 0
  display: block
  margin-top: -1px

  svg
    display: block
    width: 100%
    height: clamp(50px, 6vw, 110px)

.onda.invertida svg
  transform: rotate(180deg)
</style>
