<template>
  <div class="campo">
    <label>
      {{ label }}
      <span v-if="obrigatorio">*</span>
    </label>
    <input :type="tipo" :placeholder="placeholder" :autocomplete="completar" spellCheck="false" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @blur="$emit('blur', $event)" :readonly="bloqueado" />
  </div>
</template>

<script setup>
const props = defineProps({
  completar: { type: String, default: 'false' },
  tipo: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  modelValue: { type: [String, Number], default: '' },
  label: { type: String, default: '' },
  obrigatorio: { type: Boolean, default: false },
  bloqueado: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue', 'blur'])
</script>

<style lang="sass" scoped>
.campo
  display: flex

@media screen and (max-width: 1000px)
</style>
