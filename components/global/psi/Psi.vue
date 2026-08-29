<template>
  <!-- Ψ (psi): o símbolo da psicologia. Desenhado em traço monolinha para falar a
       mesma língua dos outros SVGs do site (o galho da Sobre, a semente do
       Processo), e não em fonte: fonte dependeria do serif do sistema de quem
       abre a página. Herda a cor de quem usa, via currentColor. -->
  <svg class="psi" viewBox="0 0 120 150" fill="none" aria-hidden="true">
    <g
      stroke="currentColor"
      stroke-width="7"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <!-- haste, do topo ao pé -->
      <path d="M60 16 V134" />
      <!-- os dois braços, num U que encosta na haste -->
      <path d="M24 16 V74 C24 100 40 112 60 112 C80 112 96 100 96 74 V16" />
      <!-- serifas: pé e os três topos -->
      <path d="M42 134 H78" stroke-width="6" />
      <path d="M13 16 H35" stroke-width="6" />
      <path d="M49 16 H71" stroke-width="6" />
      <path d="M85 16 H107" stroke-width="6" />
    </g>
  </svg>
</template>

<style lang="sass" scoped>
.psi
  display: block
  width: 100%
  height: auto
</style>
