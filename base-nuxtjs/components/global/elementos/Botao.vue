<template>
  <button :disabled="carregando">
    <span>{{ texto }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  texto: {
    type: String,
    required: true
  },
  carregando: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="sass" scoped>
button
  display: flex

@media screen and (max-width: 1000px)
</style>
