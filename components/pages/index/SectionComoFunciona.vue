<template>
  <section id="processo" class="como">
    <div class="conteudo">
      <!-- Texto + lista -->
      <div class="texto" v-revelar.filhos>
        <div class="kicker"><span>O PROCESSO</span></div>

        <h2>Como funciona o processo <b>terapêutico?</b></h2>

        <p>
          A terapia é um espaço de acolhimento, escuta e desenvolvimento
          emocional. Cada encontro é pensado pra te ajudar a compreender melhor
          suas vivências e construir caminhos mais leves pra a sua rotina.
        </p>

        <div class="lista">
          <div class="item">
            <span class="ico"><SvgIcone nome="video" cor="var(--cor-marrom)" :tamanho="22" /></span>
            <div class="info">
              <h3>Sessões de 50 minutos</h3>
              <p>As sessões têm duração média de 50 minutos e acontecem em horário previamente agendado.</p>
            </div>
            <span class="num">01</span>
          </div>

          <div class="item">
            <span class="ico"><SvgIcone nome="tarefas" cor="var(--cor-marrom)" :tamanho="22" /></span>
            <div class="info">
              <h3>Atendimento online</h3>
              <p>Os atendimentos são realizados online, por chamada de vídeo, com conforto e praticidade.</p>
            </div>
            <span class="num">02</span>
          </div>

          <div class="item">
            <span class="ico"><SvgIcone nome="usuario" cor="var(--cor-marrom)" :tamanho="22" /></span>
            <div class="info">
              <h3>Processo personalizado</h3>
              <p>O processo é individual e conduzido de forma ética, acolhedora e respeitando o seu tempo.</p>
            </div>
            <span class="num">03</span>
          </div>
        </div>

        <a href="#contato" class="agendar">
          <SvgIcone nome="agenda" cor="var(--cor-branco)" :tamanho="24" />
          <span>Agendar minha sessão</span>
        </a>
      </div>

      <!-- Foto -->
      <div class="visual" v-revelar="0.1">
        <div class="acento"></div>
        <div class="moldura">
          <img
            class="foto"
            src="/imagens/jamilly-sentada.png"
            alt="Jamilly Ferreira de Medeiros, psicóloga, durante atendimento"
          />
        </div>

        <div class="selo">
          <SvgIcone nome="usuario" cor="var(--cor-marrom)" :tamanho="20" />
          <div class="selo-txt">
            <strong>Abordagem</strong>
            <span>Existencial-humanista</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="sass" scoped>
section.como
  display: flex
  justify-content: center
  width: 100%
  padding: 100px 40px 120px
  background-color: var(--cor-fundo)

.conteudo
  display: flex
  align-items: center
  justify-content: space-between
  gap: 90px
  width: 100%
  max-width: var(--container)

// ---------- Texto / lista ----------
.texto
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 24px
  flex: 1 1 0
  max-width: 620px

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
  font-size: clamp(1.9rem, 3vw, 2.7rem)
  line-height: 1.15
  color: var(--cor-marrom-escuro)

  b
    font-family: var(--bold)
    font-weight: normal
    color: var(--cor-marrom)

.texto > p
  font-family: var(--light)
  font-size: clamp(1.05rem, 1.3vw, 1.2rem)
  line-height: 1.6
  color: rgba(70, 56, 48, 0.72)

// lista numerada
.lista
  display: flex
  flex-direction: column
  gap: 16px
  width: 100%
  margin-top: 4px

.item
  position: relative
  display: flex
  align-items: center
  gap: 18px
  padding: 20px 26px
  border-radius: 18px
  background-color: var(--cor-branco)
  border: 1px solid rgba(122, 78, 45, 0.1)
  box-shadow: 0 10px 26px rgba(70, 56, 48, 0.06)
  overflow: hidden
  transition: all 0.3s

  &:hover
    border-color: rgba(122, 78, 45, 0.28)
    box-shadow: 0 16px 36px rgba(70, 56, 48, 0.12)

.ico
  flex: 0 0 auto
  display: flex
  align-items: center
  justify-content: center
  width: 52px
  height: 52px
  border-radius: 50%
  background-color: var(--cor-fundo)

.info
  flex: 1 1 auto

  h3
    font-family: var(--bold)
    font-size: 1.12rem
    color: var(--cor-marrom-escuro)

  p
    font-family: var(--light)
    font-size: 0.95rem
    line-height: 1.5
    color: rgba(70, 56, 48, 0.65)
    margin-top: 4px

.num
  flex: 0 0 auto
  font-family: var(--extrabold)
  font-size: 2.6rem
  line-height: 1
  color: rgba(122, 78, 45, 0.12)
  margin-left: 8px

.agendar
  display: flex
  align-items: center
  gap: 12px
  margin-top: 12px
  padding: 18px 36px
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

// ---------- Foto ----------
.visual
  position: relative
  flex: 0 0 44%
  max-width: 460px
  aspect-ratio: 460 / 580

// acento de contorno fino (camada de profundidade leve)
.acento
  position: absolute
  z-index: 0
  inset: -22px 30px 28px -28px
  border: 1.5px solid rgba(206, 179, 148, 0.7)
  border-radius: 48px
  pointer-events: none

.moldura
  position: absolute
  z-index: 1
  inset: 0
  padding: 20px
  border-radius: 48px
  background-color: var(--cor-branco)
  box-shadow: 0 30px 54px rgba(70, 56, 48, 0.12)

.foto
  display: block
  width: 100%
  height: 100%
  object-fit: cover
  object-position: center
  border-radius: 34px

.selo
  position: absolute
  z-index: 2
  left: -26px
  bottom: 9%
  display: flex
  align-items: center
  gap: 12px
  padding: 14px 20px
  border-radius: 16px 0 16px 0
  background-color: rgba(255, 255, 255, 0.55)
  backdrop-filter: blur(16px) saturate(150%)
  -webkit-backdrop-filter: blur(16px) saturate(150%)
  border: 1px solid rgba(255, 255, 255, 0.65)
  box-shadow: 0 8px 32px rgba(70, 56, 48, 0.14), inset 0 1px 1px rgba(255, 255, 255, 0.5)

.selo-txt
  display: flex
  flex-direction: column
  line-height: 1.2

  strong
    font-family: var(--bold)
    font-size: 0.95rem
    color: var(--cor-marrom-escuro)

  span
    font-family: var(--light)
    font-size: 0.85rem
    color: rgba(70, 56, 48, 0.7)

// ---------- Responsivo ----------
@media screen and (max-width: 960px)
  .conteudo
    flex-direction: column-reverse
    gap: 64px

  .texto
    align-items: center
    text-align: center
    max-width: 620px

  h2, .texto > p
    text-align: center

  .item
    text-align: left

  .visual
    flex: 0 0 auto
    width: 100%
    max-width: 380px

@media screen and (max-width: 600px)
  section.como
    padding: 70px 22px 80px

  .item
    padding: 16px 18px
    gap: 14px

  .num
    font-size: 2rem

  .selo
    left: -12px
    padding: 11px 16px
</style>
