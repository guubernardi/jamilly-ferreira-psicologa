<template>
  <section id="pensando" class="pensando">
    <div class="cabecalho" v-revelar.filhos>
      <div class="kicker"><span>ANTES DE COMEÇAR</span></div>
      <h2>Talvez você esteja <b>pensando…</b></h2>
      <p>
        As dúvidas que aparecem antes da primeira sessão são mais comuns do que
        parecem. Nenhuma delas te impede de começar.
      </p>
    </div>

    <ul class="lista" v-revelar.filhos.subtil>
      <li v-for="item in pensamentos" :key="item.pensamento" class="item">
        <p class="pensamento">
          <span class="aspa" aria-hidden="true">“</span>
          {{ item.pensamento }}
        </p>
        <p class="resposta">{{ item.resposta }}</p>
      </li>
    </ul>

    <div class="fecho" v-revelar.filhos.subtil>
      <span class="tracinho" aria-hidden="true"></span>
      <p v-for="frase in fechoPensando" :key="frase">{{ frase }}</p>
    </div>
  </section>
</template>

<script setup>
import { pensamentos, fechoPensando } from '~/helpers/pensando.js'
</script>

<style lang="sass" scoped>
section.pensando
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  padding: 90px 40px 40px
  background-color: var(--cor-fundo)

// ---------- Cabeçalho ----------
.cabecalho
  display: flex
  flex-direction: column
  align-items: center
  gap: 18px
  margin-bottom: 48px
  text-align: center
  max-width: 640px

.kicker
  display: inline-flex
  align-items: center
  padding: 8px 18px
  border-radius: 40px
  background-color: rgba(206, 179, 148, 0.25)
  border: 1px solid rgba(206, 179, 148, 0.6)

  span
    font-family: var(--extrabold)
    font-size: 0.78rem
    letter-spacing: 2.6px
    color: var(--cor-marrom)

h2
  font-family: var(--bold)
  font-size: clamp(2rem, 3.2vw, 2.9rem)
  line-height: 1.15
  color: var(--cor-marrom-escuro)

  b
    font-family: var(--bold)
    font-weight: normal
    color: var(--cor-marrom)

.cabecalho p
  font-family: var(--light)
  font-size: clamp(1.05rem, 1.3vw, 1.2rem)
  line-height: 1.6
  color: rgba(70, 56, 48, 0.7)

// ---------- Lista: pensamento à esquerda, resposta à direita ----------
// Duas vozes na mesma linha: o que a visitante pensa e o que a Jamilly responde.
// Divide a altura da seção pela metade e não repete o formato de nenhuma outra.
.lista
  display: flex
  flex-direction: column
  gap: 18px
  width: 100%
  max-width: 1080px
  margin: 0
  padding: 0
  list-style: none

.item
  display: grid
  grid-template-columns: 0.8fr 1.2fr
  align-items: center
  gap: 34px
  padding: 26px 34px
  border-radius: 26px 26px 26px 6px
  background-color: var(--cor-branco)
  border: 1px solid rgba(122, 78, 45, 0.1)
  box-shadow: 0 6px 18px rgba(70, 56, 48, 0.06)
  transition: all 0.3s

  &:hover
    border-color: rgba(122, 78, 45, 0.24)
    box-shadow: 0 12px 26px rgba(70, 56, 48, 0.1)

.pensamento
  position: relative
  padding-left: 30px
  font-family: var(--light)
  font-style: italic
  font-size: clamp(1.08rem, 1.3vw, 1.22rem)
  line-height: 1.45
  color: var(--cor-marrom)
  text-wrap: balance

.aspa
  position: absolute
  left: 0
  top: 1px
  font-family: var(--script)
  font-size: 2rem
  line-height: 1
  color: var(--cor-bege)

// filete separando as duas vozes
.resposta
  padding-left: 34px
  border-left: 2px solid var(--cor-pessego)
  font-family: var(--light)
  font-size: 1.03rem
  line-height: 1.65
  color: rgba(70, 56, 48, 0.72)

// ---------- Fecho: ponte para a seção de contato ----------
.fecho
  display: flex
  flex-direction: column
  align-items: center
  gap: 14px
  margin-top: 56px
  max-width: 680px
  text-align: center

.tracinho
  width: 54px
  height: 2px
  border-radius: 2px
  background-color: var(--cor-pessego)

.fecho p
  font-family: var(--light)
  font-size: clamp(1.05rem, 1.3vw, 1.22rem)
  line-height: 1.65
  color: rgba(70, 56, 48, 0.72)

  &:first-of-type
    color: var(--cor-marrom-escuro)

// ---------- Responsivo ----------
@media screen and (max-width: 900px)
  .item
    grid-template-columns: minmax(0, 1fr)
    gap: 18px

  // empilhado, o filete vira uma régua horizontal acima da resposta
  .resposta
    padding-left: 0
    padding-top: 18px
    border-left: none
    border-top: 2px solid var(--cor-pessego)

@media screen and (max-width: 600px)
  section.pensando
    padding: 70px 22px 30px

  .cabecalho
    margin-bottom: 40px

  .item
    padding: 22px
    border-radius: 22px 22px 22px 6px

  .fecho
    margin-top: 44px
</style>
