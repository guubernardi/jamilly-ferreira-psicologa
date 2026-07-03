<template>
  <section id="contato" class="contato">
    <div class="conteudo" v-revelar.filhos>
      <div class="kicker"><span>VAMOS CONVERSAR</span></div>

      <h2>Dê o primeiro <b>passo hoje</b></h2>

      <p>
        Em alguns momentos da vida, pedir ajuda não é sinal de fraqueza. É um ato
        de coragem. Se você sente que chegou a hora de olhar para si mesma com mais
        atenção e acolhimento, será uma honra acompanhar você nessa jornada.
      </p>

      <div class="acoes">
        <a
          class="acao destaque"
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener"
          aria-label="Conversar no WhatsApp"
        >
          <span class="ico">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l4.99-1.31A10 10 0 1 0 12 2zm0 18.2c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.13.82.84-3.05-.2-.31A8.2 8.2 0 1 1 12 20.2z" />
              <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
            </svg>
          </span>
          <span class="txt">
            <strong>WhatsApp</strong>
            <small>Fale comigo agora</small>
          </span>
        </a>

        <div class="acao info">
          <span class="ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <span class="txt">
            <strong>Instagram</strong>
            <small>@jamillyferreirapsicologa</small>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="sass" scoped>
section.contato
  display: flex
  justify-content: center
  width: 100%
  padding: 100px 40px 120px
  background-color: var(--cor-fundo)

.conteudo
  display: flex
  flex-direction: column
  align-items: center
  gap: 22px
  width: 100%
  max-width: 720px
  text-align: center

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
  font-size: clamp(2rem, 3.4vw, 3rem)
  line-height: 1.12
  color: var(--cor-marrom-escuro)

  b
    font-family: var(--bold)
    font-weight: normal
    color: var(--cor-marrom)

.conteudo > p
  font-family: var(--light)
  font-size: clamp(1.08rem, 1.4vw, 1.3rem)
  line-height: 1.65
  color: rgba(70, 56, 48, 0.72)

// ---------- Ações ----------
.acoes
  display: flex
  flex-wrap: wrap
  justify-content: center
  gap: 22px
  margin-top: 18px

.acao
  display: flex
  align-items: center
  gap: 16px
  min-width: 270px
  padding: 22px 30px
  border-radius: 22px
  background-color: var(--cor-branco)
  border: 1px solid rgba(122, 78, 45, 0.14)
  box-shadow: 0 14px 32px rgba(70, 56, 48, 0.07)
  text-decoration: none
  text-align: left
  transition: all 0.3s

  &:hover
    box-shadow: 0 22px 44px rgba(70, 56, 48, 0.14)
    border-color: rgba(122, 78, 45, 0.3)

  .ico
    display: flex
    align-items: center
    justify-content: center
    flex: 0 0 auto
    width: 52px
    height: 52px
    border-radius: 50%
    background-color: var(--cor-fundo)
    color: var(--cor-marrom)

    svg
      width: 26px
      height: 26px

  .txt
    display: flex
    flex-direction: column
    gap: 2px

    strong
      font-family: var(--bold)
      font-size: 1.18rem
      color: var(--cor-marrom-escuro)

    small
      font-family: var(--light)
      font-size: 0.92rem
      color: rgba(70, 56, 48, 0.6)

// card informativo (Instagram, sem link por enquanto)
.acao.info
  cursor: default

  &:hover
    box-shadow: 0 14px 32px rgba(70, 56, 48, 0.07)
    border-color: rgba(122, 78, 45, 0.14)

// ação principal (WhatsApp)
.acao.destaque
  background-color: var(--cor-marrom-botao)
  border-color: transparent

  &:hover
    background-color: var(--cor-marrom-botao-hover)
    border-color: transparent

  .ico
    background-color: rgba(255, 255, 255, 0.16)
    color: var(--cor-branco)

  .txt strong
    color: var(--cor-branco)

  .txt small
    color: rgba(255, 255, 255, 0.78)

// ---------- Responsivo ----------
@media screen and (max-width: 600px)
  section.contato
    padding: 70px 22px 80px

  .acoes
    flex-direction: column
    width: 100%

  .acao
    width: 100%
    min-width: 0
</style>
