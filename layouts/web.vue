<template>
  <div id="tela">
    <Nav />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
#tela
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  min-height: 100vh
  background-color: var(--cor-fundo)
  font-family: var(--light)
  color: var(--cor-marrom-escuro)
  overflow-x: hidden

main
  display: flex
  flex-direction: column
  align-items: center
  justify-content: flex-start
  width: 100%

@media screen and (max-width: 1000px)
</style>
