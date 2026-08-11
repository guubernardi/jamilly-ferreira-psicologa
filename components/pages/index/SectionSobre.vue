<template>
  <section id="sobre" class="sobre">
    <div class="conteudo">
      <!-- Foto (porta-retrato com camadas) -->
      <div class="visual" v-revelar>
        <div class="brilho"></div>
        <div class="acento"></div>
        <div class="moldura">
          <img
            class="foto"
            src="/images/foto-jamilly.jpeg"
            alt="Jamilly Ferreira de Medeiros, psicóloga clínica em abordagem existencial-humanista"
            width="768"
            height="1364"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div class="selo-foto">
          <SvgIcone nome="coracao" cor="var(--cor-marrom)" :tamanho="20" />
          <span>Escuta sem julgamento</span>
        </div>
      </div>

      <!-- Texto -->
      <div class="texto" v-revelar.filhos="0.1">
        <div class="titulo">
          <h2>SOBRE MIM</h2>
          <svg class="ornamento" viewBox="0 0 216 21.1595" fill="none" aria-hidden="true">
            <g stroke="var(--cor-marrom)" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M88.1145 16.75L95.1859 14.3572M95.1859 14.3572C96.6859 14.0715 103.757 11.6786 103.757 11.6786M95.1859 14.3572V14.3215M95.1859 14.3572C98.4478 15.1905 105.614 18.0215 105.9 20.8215C102.71 21.0119 95.6431 19.6143 95.1859 14.3572ZM103.757 11.6786C102.853 9.98809 102.172 4.49286 107.543 0.321432C108.138 2.86906 108.386 9.56429 103.757 11.6786ZM103.757 11.6786C106.734 11.9167 113.786 13.5214 115.329 16.0357C111.472 17.1072 103.186 17.3357 103.757 11.6786ZM103.757 11.6786L108.4 10.0357M95.1859 14.3215C94.4716 12.0357 93.7716 5.82143 98.4002 3.53572C98.805 5.32143 99.0716 10.8357 95.1859 14.3215ZM108.4 10.0357C111.734 10.0357 118.629 8.50714 119.543 2.39286C117.376 2.29761 112.114 3.69286 108.4 10.0357Z"
                stroke-width="0.642857"
              />
              <line y1="10.1977" x2="78" y2="10.1977" />
              <line x1="138" y1="10.1977" x2="216" y2="10.1977" />
            </g>
          </svg>
        </div>

        <p>
          Sou psicóloga clínica e acredito que cada pessoa carrega dentro de si
          as respostas que procura, às vezes só falta um espaço seguro pra
          encontrá-las. Meu trabalho é caminhar ao seu lado nesse processo, com
          escuta e acolhimento, sem julgamento e respeitando o seu tempo.
        </p>

        <ul class="frases">
          <li>A liberdade é a essência da nossa existência</li>
          <li>A angústia é o sinal da nossa liberdade</li>
        </ul>

        <span class="assinatura">Jamilly Ferreira</span>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="sass" scoped>
section.sobre
  display: flex
  justify-content: center
  width: 100%
  padding: 90px 40px 120px
  background-color: var(--cor-branco)

.conteudo
  display: flex
  align-items: center
  justify-content: center
  gap: 110px
  width: 100%
  max-width: var(--container)

// ---------- Foto / porta-retrato ----------
.visual
  position: relative
  flex: 0 0 auto
  width: 100%
  max-width: 420px
  aspect-ratio: 420 / 580

// brilho pêssego ambiente atrás da foto
.brilho
  position: absolute
  inset: -8% -12% -12% -8%
  z-index: 0
  background: radial-gradient(closest-side, rgba(221, 182, 158, 0.55), rgba(221, 182, 158, 0) 72%)
  filter: blur(8px)
  pointer-events: none

// forma pêssego deslocada (camada de profundidade)
.acento
  position: absolute
  z-index: 1
  inset: 36px -26px -30px 40px
  background-color: var(--cor-pessego)
  border-radius: 90px 30px 90px 30px

.moldura
  position: absolute
  z-index: 2
  inset: 0
  padding: 24px 24px 44px
  border-radius: 84px 28px 84px 28px
  background-color: var(--cor-fundo)
  border: 1px solid rgba(122, 78, 45, 0.16)
  box-shadow: 0 30px 54px rgba(70, 56, 48, 0.16)

.foto
  display: block
  width: 100%
  height: 100%
  object-fit: cover
  object-position: center
  border-radius: 64px 16px 64px 16px

// selo flutuante (glassmorphism) sobre a foto
.selo-foto
  position: absolute
  z-index: 3
  left: -22px
  bottom: 8%
  display: flex
  align-items: center
  gap: 10px
  padding: 14px 20px
  border-radius: 16px 0 16px 0
  background-color: rgba(255, 255, 255, 0.45)
  backdrop-filter: blur(16px) saturate(150%)
  -webkit-backdrop-filter: blur(16px) saturate(150%)
  border: 1px solid rgba(255, 255, 255, 0.6)
  box-shadow: 0 8px 32px rgba(70, 56, 48, 0.14), inset 0 1px 1px rgba(255, 255, 255, 0.5)
  white-space: nowrap

  span
    font-family: var(--light)
    font-size: 0.98rem
    color: var(--cor-marrom-escuro)

// ---------- Texto ----------
.texto
  display: flex
  flex-direction: column
  align-items: center
  gap: 26px
  flex: 1 1 0
  max-width: 600px
  text-align: center

.titulo
  display: flex
  flex-direction: column
  align-items: center
  gap: 14px

h2
  font-family: var(--bold)
  font-size: clamp(2.6rem, 4.4vw, 4rem)
  letter-spacing: 2px
  color: var(--cor-marrom)
  line-height: 1

.ornamento
  width: clamp(180px, 16vw, 216px)
  height: auto

.texto p
  font-family: var(--light)
  font-size: clamp(1.1rem, 1.5vw, 1.45rem)
  line-height: 1.7
  color: var(--cor-preto)

.frases
  display: flex
  flex-direction: column
  gap: 14px
  width: 100%
  max-width: 460px
  margin: 4px 0 2px
  list-style: none
  padding: 0

  li
    position: relative
    padding: 10px 0 10px 26px
    font-family: var(--light)
    font-style: italic
    font-size: clamp(1rem, 1.3vw, 1.18rem)
    line-height: 1.5
    color: var(--cor-marrom)
    text-align: left
    border-left: 2px solid var(--cor-pessego)

  li::before
    content: "“"
    position: absolute
    left: 10px
    top: 4px
    font-family: var(--script)
    font-size: 1.4rem
    line-height: 1
    color: var(--cor-bege)

.assinatura
  font-family: var(--script)
  font-size: clamp(1.9rem, 2.6vw, 2.5rem)
  line-height: 1
  color: var(--cor-marrom)
  margin-top: -4px

// ---------- Responsivo ----------
@media screen and (max-width: 960px)
  .conteudo
    flex-direction: column
    gap: 72px

  .visual
    max-width: 360px

  .texto
    max-width: 620px

@media screen and (max-width: 600px)
  section.sobre
    padding: 60px 22px 80px

  .visual
    max-width: 300px

  .acento
    inset: 28px -16px -22px 28px
    border-radius: 64px 22px 64px 22px

  .moldura
    padding: 16px 16px 30px
    border-radius: 60px 20px 60px 20px

  .selo-foto
    left: -10px
    padding: 11px 15px

    span
      font-size: 0.85rem
</style>
