<template>
  <!-- Nav do topo / hero -->
  <nav class="topo" aria-label="Navegação principal">
    <div class="conteudo">
      <NuxtLink to="/" class="logo" aria-label="Jamilly Ferreira — página inicial" @click="fechar">
        <img
          src="/images/logo.png"
          alt="Jamilly Ferreira de Medeiros, psicóloga"
          width="290"
          height="66"
          loading="eager"
          decoding="async"
        />
      </NuxtLink>

      <div class="menu">
        <NuxtLink to="/#inicio">Início</NuxtLink>
        <NuxtLink to="/#sobre">Sobre</NuxtLink>
        <NuxtLink to="/#processo">Processo</NuxtLink>
        <NuxtLink to="/#perguntas">Perguntas</NuxtLink>
      </div>

      <a href="/#contato" class="agendar cta-desktop">
        <SvgIcone nome="agenda" cor="var(--cor-branco)" :tamanho="22" />
        <span>Agendar</span>
      </a>

      <button
        class="hamburger"
        :class="{ ativo: aberto }"
        :aria-expanded="aberto"
        :aria-label="aberto ? 'Fechar menu' : 'Abrir menu'"
        @click="alternar"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <!-- Nav flutuante (aparece ao rolar), só desktop -->
  <Teleport to="body">
    <nav class="flutuante" :class="{ visivel: rolou }" aria-label="Navegação rápida">
      <NuxtLink to="/" class="marca">
        <span class="nome">Jamilly Ferreira</span>
      </NuxtLink>

      <div class="direita">
        <div class="sociais">
          <span class="rede" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <a
            class="rede"
            :href="linkWhatsapp()"
            target="_blank"
            rel="noopener"
            aria-label="Conversar no WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l4.99-1.31A10 10 0 1 0 12 2zm0 18.2c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.13.82.84-3.05-.2-.31A8.2 8.2 0 1 1 12 20.2z" />
              <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
            </svg>
          </a>
        </div>

        <span class="divisor"></span>

        <div class="links">
          <NuxtLink to="/#inicio">Início</NuxtLink>
          <NuxtLink to="/#sobre">Sobre</NuxtLink>
          <NuxtLink to="/#processo">Processo</NuxtLink>
          <NuxtLink to="/#perguntas">Perguntas</NuxtLink>
        </div>

        <a href="/#contato" class="agendar-f">Agendar</a>
      </div>
    </nav>
  </Teleport>

  <!-- Menu mobile (overlay) -->
  <Teleport to="body">
    <div class="mobile" :class="{ aberto }">
      <NuxtLink to="/#inicio" @click="fechar">Início</NuxtLink>
      <NuxtLink to="/#sobre" @click="fechar">Sobre</NuxtLink>
      <NuxtLink to="/#processo" @click="fechar">Processo</NuxtLink>
      <NuxtLink to="/#perguntas" @click="fechar">Perguntas</NuxtLink>

      <a href="/#contato" class="agendar" @click="fechar">
        <SvgIcone nome="agenda" cor="var(--cor-branco)" :tamanho="24" />
        <span>Agendar minha sessão</span>
      </a>
    </div>
  </Teleport>
</template>

<script setup>
import { linkWhatsapp } from '~/helpers/site.js'

const aberto = ref(false)
const rolou = ref(false)

function alternar() {
  aberto.value = !aberto.value
}
function fechar() {
  aberto.value = false
}

let aoRolar
onMounted(() => {
  aoRolar = () => {
    rolou.value = window.scrollY > 500
  }
  window.addEventListener('scroll', aoRolar, { passive: true })
  aoRolar()
})
onBeforeUnmount(() => {
  if (aoRolar) window.removeEventListener('scroll', aoRolar)
})

// trava o scroll do fundo enquanto o menu mobile está aberto
watch(aberto, (v) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = v ? 'hidden' : ''
  }
})
</script>

<style scoped lang="sass">
// ============ Nav do topo / hero ============
nav.topo
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

// no desktop o nav do topo rola junto com a página (some ao rolar);
// quem assume é o nav flutuante
@media screen and (min-width: 1101px)
  nav.topo
    position: relative

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
  z-index: 101

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

// ============ Hamburger ============
.hamburger
  display: none
  flex-direction: column
  justify-content: center
  gap: 6px
  width: 44px
  height: 44px
  padding: 0
  background: none
  border: none
  cursor: pointer
  z-index: 101

  span
    display: block
    width: 26px
    height: 2.5px
    margin: 0 auto
    border-radius: 2px
    background-color: var(--cor-marrom-escuro)
    transition: transform 0.3s ease, opacity 0.3s ease

  &.ativo span:nth-child(1)
    transform: translateY(8.5px) rotate(45deg)

  &.ativo span:nth-child(2)
    opacity: 0

  &.ativo span:nth-child(3)
    transform: translateY(-8.5px) rotate(-45deg)

// ============ Nav flutuante (scroll) ============
.flutuante
  position: fixed
  top: 16px
  left: 50%
  transform: translateX(-50%) translateY(-150%)
  display: flex
  align-items: center
  justify-content: space-between
  gap: 30px
  width: calc(100% - 48px)
  max-width: var(--container)
  padding: 14px 16px 14px 30px
  border-radius: 999px
  background-color: var(--cor-marrom-escuro)
  box-shadow: 0 18px 44px rgba(70, 56, 48, 0.28)
  z-index: 120
  opacity: 0
  visibility: hidden
  transition: transform 0.4s ease, opacity 0.4s ease, visibility 0.4s

  &.visivel
    transform: translateX(-50%) translateY(0)
    opacity: 1
    visibility: visible

.marca
  text-decoration: none

  .nome
    font-family: var(--script)
    font-size: 1.45rem
    line-height: 1
    color: var(--cor-creme)

.direita
  display: flex
  align-items: center
  gap: 26px

.sociais
  display: flex
  align-items: center
  gap: 8px

.rede
  display: flex
  align-items: center
  justify-content: center
  width: 38px
  height: 38px
  border-radius: 50%
  background-color: rgba(255, 255, 255, 0.08)
  border: 1px solid rgba(255, 255, 255, 0.14)
  color: var(--cor-creme)
  transition: all 0.3s

  svg
    width: 18px
    height: 18px

  &:hover
    background-color: var(--cor-marrom-botao)
    border-color: transparent

.divisor
  width: 1px
  height: 24px
  background-color: rgba(255, 255, 255, 0.18)

.links
  display: flex
  align-items: center
  gap: 26px

  a
    font-family: var(--light)
    font-size: 1rem
    color: rgba(247, 240, 232, 0.8)
    text-decoration: none
    transition: color 0.3s

    &:hover
      color: var(--cor-creme)

.agendar-f
  padding: 11px 24px
  border-radius: 40px
  background-color: var(--cor-marrom-botao)
  font-family: var(--light)
  font-size: 1rem
  color: var(--cor-branco)
  text-decoration: none
  transition: background-color 0.3s

  &:hover
    background-color: var(--cor-marrom-botao-hover)

@media screen and (max-width: 1100px)
  .flutuante
    display: none

// ============ Menu mobile (overlay) ============
.mobile
  position: fixed
  inset: 0
  z-index: 90
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  gap: 30px
  background-color: var(--cor-fundo)
  opacity: 0
  visibility: hidden
  transform: translateY(-12px)
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s

  &.aberto
    opacity: 1
    visibility: visible
    transform: translateY(0)

  a:not(.agendar)
    font-family: var(--light)
    font-size: 1.6rem
    color: var(--cor-marrom)
    text-decoration: none
    transition: color 0.3s

    &:hover
      color: var(--cor-marrom-escuro)

  .agendar
    margin-top: 14px
    padding: 18px 36px

    span
      font-size: 1.2rem

@media screen and (min-width: 1101px)
  .mobile
    display: none

// ============ Responsivo (topo) ============
@media screen and (max-width: 1100px)
  .menu, .cta-desktop
    display: none

  .hamburger
    display: flex

@media screen and (max-width: 600px)
  nav.topo
    padding: 20px

  .logo img
    height: 42px
</style>
