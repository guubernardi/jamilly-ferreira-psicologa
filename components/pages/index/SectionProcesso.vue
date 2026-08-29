<template>
  <section id="beneficios" class="processo">
    <div class="folha folha-1"><Folhagem /></div>
    <div class="folha folha-2"><Folhagem /></div>

    <div class="cabecalho" v-revelar.filhos>
      <h2>O processo terapêutico pode <b>contribuir para:</b></h2>
      <p>
        A terapia não te entrega respostas prontas. É um espaço pra você se olhar
        com mais honestidade e construir os próprios caminhos.
      </p>
    </div>

    <div class="corpo">
      <!-- ilustração: semente brotando (divisor entre o cabeçalho e a lista) -->
      <div class="ilustracao" v-revelar>
        <svg viewBox="0 0 220 260" aria-hidden="true">
          <g fill="none" stroke="#A06E45" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <!-- broto -->
            <g transform="translate(110 102)">
              <line x1="0" y1="0" x2="0" y2="-34" stroke-width="2" />
              <path d="M0,-6 C-7,-18 -7,-34 0,-44 C7,-34 7,-18 0,-6 Z" />
              <path d="M0,-6 C-7,-18 -7,-34 0,-44 C7,-34 7,-18 0,-6 Z" transform="rotate(-26)" />
              <path d="M0,-6 C-7,-18 -7,-34 0,-44 C7,-34 7,-18 0,-6 Z" transform="rotate(26)" />
              <path d="M0,-6 C-6,-16 -6,-28 0,-36 C6,-28 6,-16 0,-6 Z" transform="rotate(-50)" />
              <path d="M0,-6 C-6,-16 -6,-28 0,-36 C6,-28 6,-16 0,-6 Z" transform="rotate(50)" />
            </g>
            <!-- pontinhos (animados) -->
            <circle class="ponto ponto-1" cx="110" cy="44" r="2.4" fill="#A06E45" stroke="none" />
            <circle class="ponto ponto-2" cx="86" cy="58" r="2.2" fill="#A06E45" stroke="none" />
            <circle class="ponto ponto-3" cx="134" cy="58" r="2.2" fill="#A06E45" stroke="none" />
            <!-- círculo (a pessoa/vaso) -->
            <circle cx="110" cy="172" r="72" fill="#F3E9DC" />
            <!-- sorriso -->
            <path d="M84,182 Q110,206 136,182" />
          </g>
        </svg>
      </div>

      <ul class="lista" v-revelar.filhos.subtil>
        <li class="item" v-for="beneficio in beneficios" :key="beneficio">
          <span class="marca">
            <SvgIcone nome="folha" cor="var(--cor-marrom)" :tamanho="18" />
          </span>
          <span class="rotulo">{{ beneficio }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { beneficios } from '~/helpers/beneficios.js'
</script>

<style lang="sass" scoped>
section.processo
  position: relative
  overflow: hidden
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  padding: 40px 40px 120px
  background-color: var(--cor-fundo)

// folhagem decorativa de fundo (SVG)
.folha
  position: absolute
  z-index: 0
  color: var(--cor-bege)
  opacity: 0.4
  pointer-events: none

.folha-1
  top: -10px
  left: -40px
  width: 220px
  height: 360px
  transform: rotate(18deg)

.folha-2
  right: -50px
  bottom: -30px
  width: 260px
  height: 400px
  transform: rotate(-160deg)

.cabecalho
  position: relative
  z-index: 1
  display: flex
  flex-direction: column
  align-items: center
  gap: 18px
  margin-bottom: 56px
  text-align: center
  max-width: 700px

h2
  font-family: var(--light)
  font-size: clamp(2rem, 3.2vw, 2.9rem)
  color: var(--cor-marrom-escuro)
  line-height: 1.15

  b
    font-family: var(--extrabold)
    font-weight: normal

.cabecalho p
  font-family: var(--light)
  font-size: clamp(1.05rem, 1.3vw, 1.25rem)
  line-height: 1.6
  color: rgba(70, 56, 48, 0.7)

// ---------- Corpo: tudo no mesmo eixo central ----------
.corpo
  position: relative
  z-index: 1
  display: flex
  flex-direction: column
  align-items: center
  gap: 48px
  width: 100%
  max-width: var(--container)

.ilustracao
  flex: 0 0 auto
  width: 200px

  svg
    display: block
    width: 100%
    height: auto
    filter: drop-shadow(0 22px 28px rgba(120, 86, 56, 0.22))
    animation: flutuar 6s ease-in-out infinite

// pontinhos do broto cintilando (escalonados)
.ponto
  transform-box: fill-box
  transform-origin: center
  animation: cintilar 2.8s ease-in-out infinite

.ponto-2
  animation-delay: 0.5s

.ponto-3
  animation-delay: 1s

@keyframes flutuar
  0%, 100%
    transform: translateY(0)
  50%
    transform: translateY(-10px)

@keyframes cintilar
  0%, 100%
    opacity: 0.35
    transform: scale(0.8)
  50%
    opacity: 1
    transform: scale(1.25)

@media (prefers-reduced-motion: reduce)
  .ilustracao svg, .ponto
    animation: none

// ---------- Lista de benefícios ----------
// Flex-wrap em vez de grid: 11 não fecha nenhuma grade, e no flex a última
// linha incompleta fica centralizada sozinha em vez de deixar buraco no canto.
.lista
  display: flex
  flex-wrap: wrap
  justify-content: center
  gap: 16px
  width: 100%
  max-width: 1300px
  margin: 0
  padding: 0
  list-style: none

.item
  display: flex
  flex: 0 1 calc(33.333% - 11px)
  align-items: center
  gap: 14px
  padding: 15px 20px
  border-radius: 18px 18px 18px 4px
  background-color: var(--cor-branco)
  border: 1px solid rgba(122, 78, 45, 0.1)
  box-shadow: 0 6px 18px rgba(70, 56, 48, 0.06)
  transition: all 0.3s

  &:hover
    border-color: rgba(122, 78, 45, 0.28)
    box-shadow: 0 12px 26px rgba(70, 56, 48, 0.12)

.marca
  display: flex
  flex: 0 0 auto
  align-items: center
  justify-content: center
  width: 36px
  height: 36px
  border-radius: 50%
  background-color: var(--cor-fundo)

.rotulo
  font-family: var(--light)
  font-size: 1.05rem
  line-height: 1.4
  color: var(--cor-marrom-escuro)
  // rótulo de 2 linhas quebra ao meio em vez de largar uma palavra sozinha
  text-wrap: balance

// ---------- Responsivo ----------
@media screen and (max-width: 1100px)
  .item
    flex-basis: calc(50% - 8px)

@media screen and (max-width: 700px)
  .corpo
    gap: 36px

  .ilustracao
    width: 160px

  .lista
    max-width: 460px

  .item
    flex-basis: 100%

@media screen and (max-width: 600px)
  section.processo
    padding: 30px 22px 90px

  .cabecalho
    margin-bottom: 40px

  .item
    padding: 13px 16px
    gap: 12px

  .marca
    width: 32px
    height: 32px

  .rotulo
    font-size: 1rem
</style>
