<template>
  <section id="atendimento" class="situacao">
    <div class="cabecalho">
      <span class="kicker">VOCÊ NÃO ESTÁ SOZINHA</span>
      <h2>Se encontra <b>nessa situação?</b></h2>
    </div>

    <div class="cards">
      <article v-for="card in cards" :key="card.titulo" class="card">
        <div class="icone">
          <SvgIcone :nome="card.icone" cor="var(--cor-marrom-botao)" :tamanho="34" />
        </div>
        <h3>{{ card.titulo }}</h3>
        <p>{{ card.texto }}</p>
      </article>
    </div>

    <div class="fechamento">
      <p>
        Se você se reconheceu em alguma dessas situações, saiba que dá pra
        ressignificar esse momento  e <b>você não precisa fazer isso sozinha.</b>
      </p>
      <a href="#agendar" class="botao">
        <SvgIcone nome="conversa" cor="var(--cor-branco)" :tamanho="22" />
        <span>Quero conversar</span>
      </a>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    icone: 'coracao',
    titulo: 'Um vazio difícil de nomear',
    texto: 'Por fora parece tudo no lugar, mas por dentro fica a sensação de que falta sentido, como se você vivesse no automático, sem saber bem pra quê.'
  },
  {
    icone: 'pessoas-grupo',
    titulo: 'Perda de conexão consigo mesma',
    texto: 'De tanto corresponder ao que esperam de você, foi perdendo o contato com aquilo que realmente quer, sente e acredita.'
  },
  {
    icone: 'visao-cards',
    titulo: 'Diante de escolhas e mudanças',
    texto: 'Numa fase de decisões e transições, você se sente perdida, em dúvida sobre quem é e qual caminho faz sentido seguir.'
  }
]
</script>

<style lang="sass" scoped>
section.situacao
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  padding: 30px 40px 120px
  background-color: var(--cor-branco)

.cabecalho
  display: flex
  flex-direction: column
  align-items: center
  gap: 14px
  margin-bottom: 64px
  text-align: center

.kicker
  font-family: var(--extrabold)
  font-size: 0.85rem
  letter-spacing: 3px
  color: var(--cor-bege)

h2
  font-family: var(--light)
  font-size: clamp(2rem, 3.2vw, 2.9rem)
  color: var(--cor-marrom-escuro)
  line-height: 1.15

  b
    font-family: var(--extrabold)
    font-weight: normal

.cards
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 32px
  width: 100%
  max-width: var(--container)

.card
  position: relative
  overflow: hidden
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  gap: 22px
  padding: 48px 36px
  border-radius: 26px
  background-color: var(--cor-branco)
  border: 1px solid rgba(130, 92, 64, 0.14)
  box-shadow: 0 18px 40px rgba(70, 56, 48, 0.05)
  transition: all 0.3s

  // detalhe decorativo: círculo pêssego suave saindo do canto
  &::before
    content: ''
    position: absolute
    right: -55px
    bottom: -55px
    width: 175px
    height: 175px
    border-radius: 50%
    background-color: rgba(221, 182, 158, 0.12)
    transition: all 0.3s
    z-index: 0

  &::after
    content: ''
    position: absolute
    left: -45px
    top: -45px
    width: 120px
    height: 120px
    border-radius: 50%
    border: 1.5px solid rgba(221, 182, 158, 0.18)
    transition: all 0.3s
    z-index: 0

  > *
    position: relative
    z-index: 1

  &:hover
    border-color: rgba(130, 92, 64, 0.3)
    box-shadow: 0 24px 50px rgba(70, 56, 48, 0.12)

    &::before
      background-color: rgba(221, 182, 158, 0.22)
      transform: scale(1.12)

    .icone
      background-color: var(--cor-pessego)

.icone
  display: flex
  align-items: center
  justify-content: center
  width: 84px
  height: 84px
  border-radius: 50%
  background-color: var(--cor-fundo)
  transition: all 0.3s

h3
  font-family: var(--bold)
  font-size: 1.35rem
  color: var(--cor-marrom-escuro)
  line-height: 1.3
  max-width: 240px

p
  font-family: var(--light)
  font-size: 1.05rem
  line-height: 1.65
  color: rgba(70, 56, 48, 0.7)

.fechamento
  display: flex
  flex-direction: column
  align-items: center
  gap: 30px
  margin-top: 72px
  max-width: 700px
  text-align: center

  p
    font-family: var(--light)
    font-size: clamp(1.15rem, 1.5vw, 1.4rem)
    line-height: 1.6
    color: var(--cor-marrom-escuro)

    b
      font-family: var(--bold)
      font-weight: normal

  .botao
    display: flex
    align-items: center
    gap: 12px
    padding: 18px 38px
    border-radius: 40px
    background-color: var(--cor-marrom-botao)
    text-decoration: none
    transition: all 0.3s

    span
      font-family: var(--light)
      font-size: 1.2rem
      color: var(--cor-branco)

    &:hover
      background-color: var(--cor-marrom-botao-hover)

@media screen and (max-width: 900px)
  .cards
    grid-template-columns: 1fr
    max-width: 460px

@media screen and (max-width: 600px)
  section.situacao
    padding: 20px 22px 90px

  .cabecalho
    margin-bottom: 48px

  .card
    padding: 40px 28px
</style>
