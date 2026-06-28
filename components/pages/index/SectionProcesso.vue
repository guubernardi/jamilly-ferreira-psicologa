<template>
  <section id="beneficios" class="processo">
    <div class="folha folha-1"><Folhagem /></div>
    <div class="folha folha-2"><Folhagem /></div>

    <div class="cabecalho" v-revelar.filhos>
      <h2>O que esse processo pode <b>abrir pra você</b></h2>
      <p>
        A terapia não te entrega respostas prontas. É um espaço pra você se olhar
        com mais honestidade e construir os próprios caminhos.
      </p>
    </div>

    <div class="orbita" v-revelar>
      <!-- linhas pontilhadas ligando o centro a cada item (só desktop) -->
      <svg class="conexoes" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true">
        <g stroke="#B89172" stroke-width="2" stroke-dasharray="2 9" stroke-linecap="round" fill="none">
          <line x1="500" y1="280" x2="300" y2="150" />
          <line x1="500" y1="280" x2="700" y2="150" />
          <line x1="500" y1="280" x2="305" y2="430" />
          <line x1="500" y1="280" x2="700" y2="425" />
        </g>
      </svg>

      <!-- ilustração central: semente brotando -->
      <div class="ilustracao">
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

      <!-- itens -->
      <div class="item item-1">
        <span class="ico"><SvgIcone nome="lampada" cor="var(--cor-branco)" :tamanho="22" /></span>
        <span>Se entender de verdade</span>
      </div>
      <div class="item item-2">
        <span class="ico"><SvgIcone nome="folha" cor="var(--cor-branco)" :tamanho="22" /></span>
        <span>Fazer escolhas mais suas</span>
      </div>
      <div class="item item-3">
        <span class="ico"><SvgIcone nome="escudo" cor="var(--cor-branco)" :tamanho="22" /></span>
        <span>Um espaço seguro pra existir</span>
      </div>
      <div class="item item-4">
        <span class="ico"><SvgIcone nome="lotus" cor="var(--cor-branco)" :tamanho="22" /></span>
        <span>Reencontrar sentido</span>
      </div>
    </div>
  </section>
</template>

<script setup></script>

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
  margin-bottom: 40px
  text-align: center
  max-width: 640px

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

// ---------- Órbita ----------
.orbita
  position: relative
  z-index: 1
  width: 100%
  max-width: 1000px
  aspect-ratio: 1000 / 560

.conexoes
  position: absolute
  inset: 0
  width: 100%
  height: 100%
  z-index: 0

  line
    animation: fluir 2.4s linear infinite

.ilustracao
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  width: 27%
  z-index: 1

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

@keyframes fluir
  to
    stroke-dashoffset: -11

@media (prefers-reduced-motion: reduce)
  .ilustracao svg, .ponto, .conexoes line
    animation: none

.item
  position: absolute
  z-index: 2
  display: flex
  align-items: center
  gap: 12px
  padding: 16px 24px
  border-radius: 22px 22px 22px 4px
  background-color: var(--cor-marrom-botao)
  box-shadow: 0 12px 30px rgba(70, 56, 48, 0.14)

  span
    font-family: var(--light)
    font-size: 1.05rem
    color: var(--cor-branco)
    white-space: nowrap

  .ico
    display: flex
    align-items: center
    justify-content: center

.item-1
  top: 16%
  left: 2%
.item-2
  top: 16%
  right: 2%
.item-3
  bottom: 16%
  left: 5%
.item-4
  bottom: 4%
  right: 3%

// ---------- Mobile: empilha ----------
@media screen and (max-width: 860px)
  .orbita
    aspect-ratio: auto
    max-width: 420px
    display: flex
    flex-direction: column
    align-items: center
    gap: 18px

  .conexoes
    display: none

  .ilustracao
    position: static
    transform: none
    width: 180px
    margin-bottom: 8px

  .item
    position: static
    width: 100%
    justify-content: center

@media screen and (max-width: 600px)
  section.processo
    padding: 30px 22px 90px

  .item span
    white-space: normal
    text-align: center
</style>
