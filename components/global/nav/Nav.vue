<template>
  <nav>
    <div class="conteudo">
      <NuxtLink to="/" class="logo">
        <img src="/images/logo.png" alt="Jamilly Ferreira de Medeiros" />
      </NuxtLink>

      <div class="menu">
        <NuxtLink to="/">Início</NuxtLink>
        <NuxtLink to="/#atendimento">Atendimento</NuxtLink>
        <NuxtLink to="/#tratamentos">Tratamentos</NuxtLink>
        <NuxtLink to="/#duvidas">Dúvidas</NuxtLink>
      </div>

      <a href="/#agendar" class="agendar">
        <SvgIcone nome="agenda" cor="var(--cor-branco)" :tamanho="22" />
        <span>Agendar</span>
      </a>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped lang="sass">
nav
  display: flex
  justify-content: center
  width: 100%
  padding: 30px 40px
  position: sticky
  top: 0
  z-index: 100
  background-color: rgba(247, 240, 232, 0.75)
  backdrop-filter: blur(12px)
  -webkit-backdrop-filter: blur(12px)

.conteudo
  display: flex
  align-items: center
  justify-content: space-between
  gap: 30px
  width: 100%
  max-width: var(--container)

.logo
  display: flex
  align-items: center
  text-decoration: none

  img
    height: 52px
    width: auto
    object-fit: contain

.menu
  display: flex
  align-items: center
  gap: 38px

  a
    font-family: var(--light)
    font-size: 1.05rem
    color: var(--cor-marrom)
    text-decoration: none
    transition: all 0.3s

    &:hover
      color: var(--cor-marrom-escuro)

.agendar
  display: flex
  align-items: center
  gap: 10px
  padding: 14px 28px
  border-radius: 40px
  background-color: var(--cor-marrom-botao)
  text-decoration: none
  transition: all 0.3s

  span
    font-family: var(--light)
    font-size: 1.05rem
    color: var(--cor-branco)

  &:hover
    background-color: var(--cor-marrom-botao-hover)

@media screen and (max-width: 1100px)
  .menu
    display: none

@media screen and (max-width: 600px)
  nav
    padding: 20px

  .logo img
    height: 42px

  .agendar
    padding: 12px 20px
</style>
