<template>
  <section id="inicio" class="hero">
    <div class="conteudo">
      <div class="texto" v-revelar.filhos>
        <div class="selo">
          <SvgIcone nome="cerebro" cor="var(--cor-marrom-escuro)" :tamanho="25" />
          <span>PSICOTERAPIA ONLINE</span>
        </div>

        <h1>
          Um espaço de acolhimento, escuta e
          <b>construção de sentido.</b>
        </h1>

        <p>
          A vida é marcada por encontros, escolhas, transformações e desafios
          que, muitas vezes, nos levam a questionar quem somos e qual
          <b>caminho desejamos seguir.</b>
        </p>

        <a href="#contato" class="agendar">
          <SvgIcone nome="agenda" cor="var(--cor-branco)" :tamanho="26" />
          <span>Agendar minha sessão</span>
        </a>
      </div>

      <div class="visual" v-revelar="0.15">
        <div class="blob"></div>
        <div class="recorte recorte-cima"></div>
        <div class="recorte recorte-baixo"></div>

        <img class="foto" src="/imagens/jamilly.png" alt="Jamilly Ferreira de Medeiros, psicóloga" />

        <div class="badge badge-1">
          <SvgIcone nome="cerebro-ia" cor="var(--cor-marrom)" :tamanho="22" />
          <span>Psicóloga Clínica</span>
        </div>
        <div class="badge badge-2">
          <SvgIcone nome="usuario" cor="var(--cor-marrom)" :tamanho="22" />
          <span>Abordagem humanista</span>
        </div>
        <div class="badge badge-3">
          <SvgIcone nome="celular" cor="var(--cor-marrom)" :tamanho="22" />
          <span>100% Online</span>
        </div>
        <div class="badge badge-4">
          <SvgIcone nome="cadeado" cor="var(--cor-marrom)" :tamanho="22" />
          <span>Sigilo profissional</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="sass" scoped>
section.hero
  display: flex
  justify-content: center
  width: 100%
  padding: 60px 40px 120px

.conteudo
  display: flex
  align-items: center
  justify-content: space-between
  gap: 60px
  width: 100%
  max-width: var(--container)

// ---------- Texto ----------
.texto
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 32px
  flex: 1 1 0
  max-width: 680px

.selo
  display: flex
  align-items: center
  gap: 10px
  padding: 14px 26px
  border-radius: 15px 0 15px 0
  background-color: var(--cor-bege)

  span
    font-family: var(--extrabold)
    font-size: 0.95rem
    letter-spacing: 2.7px
    color: var(--cor-marrom-escuro)

h1
  font-family: var(--light)
  font-size: clamp(2.4rem, 4vw, 3.6rem)
  line-height: 1.12
  color: var(--cor-marrom-escuro)

  b
    font-family: var(--extrabold)
    font-weight: normal

p
  font-family: var(--light)
  font-size: clamp(1.15rem, 1.4vw, 1.45rem)
  line-height: 1.6
  color: var(--cor-preto)
  max-width: 640px

  b
    font-family: var(--extrabold)
    font-weight: normal
    color: var(--cor-marrom)

.agendar
  display: flex
  align-items: center
  gap: 12px
  margin-top: 8px
  padding: 18px 36px
  border-radius: 40px
  background-color: var(--cor-marrom-botao)
  text-decoration: none
  transition: all 0.3s

  span
    font-family: var(--light)
    font-size: 1.25rem
    color: var(--cor-branco)

  &:hover
    background-color: var(--cor-marrom-botao-hover)

// ---------- Visual / Foto ----------
.visual
  position: relative
  flex: 0 0 50%
  max-width: 700px
  aspect-ratio: 665 / 545

// Blob pêssego, retângulo arredondado geométrico.
// Cantos: topo-dir e baixo-esq grandes/suaves; topo-esq e baixo-dir recortados
.blob
  position: absolute
  left: 12%
  right: 7%
  top: 18%
  bottom: 1%
  background-color: var(--cor-pessego)
  border-radius: 48px 110px 48px 110px
  z-index: 1

// Recortes (cor do fundo) que "quebram" os cantos topo-esq e baixo-dir
.recorte
  position: absolute
  background-color: var(--cor-fundo)
  z-index: 2

.recorte-cima
  top: 18%
  left: 12%
  width: 21%
  height: 15%
  border-radius: 0 0 42px 0

.recorte-baixo
  bottom: 1%
  right: 7%
  width: 21%
  height: 15%
  border-radius: 42px 0 0 0

.foto
  position: absolute
  z-index: 3
  left: 51%
  bottom: 2%
  transform: translateX(-50%)
  width: 56%
  height: 106%
  object-fit: contain
  object-position: bottom

.badge
  position: absolute
  z-index: 4
  display: flex
  align-items: center
  gap: 10px
  padding: 15px 20px
  border-radius: 16px 0 16px 0
  background-color: rgba(255, 255, 255, 0.35)
  backdrop-filter: blur(16px) saturate(150%)
  -webkit-backdrop-filter: blur(16px) saturate(150%)
  border: 1px solid rgba(255, 255, 255, 0.55)
  box-shadow: 0 8px 32px rgba(70, 56, 48, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.5)
  white-space: nowrap

  span
    font-family: var(--light)
    font-size: 1rem
    color: var(--cor-preto)

.badge-1
  top: 12%
  left: 2%
.badge-2
  top: 8%
  right: -5%
.badge-3
  top: 54%
  left: 0%
.badge-4
  top: 80%
  right: -1%

// ---------- Responsivo ----------
@media screen and (max-width: 1100px)
  .conteudo
    flex-direction: column
    gap: 80px

  .texto
    align-items: center
    text-align: center
    max-width: 680px

    p
      margin: 0 auto

  .visual
    flex: 0 0 auto
    width: 100%
    max-width: 520px

@media screen and (max-width: 600px)
  section.hero
    padding: 40px 22px 80px

  .badge
    padding: 12px 16px

    span
      font-size: 0.85rem

  .badge-3
    left: 0
  .badge-4
    right: 0
</style>
