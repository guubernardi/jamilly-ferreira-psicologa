<template>
  <footer>
    <div class="conteudo" v-revelar.filhos>
      <div class="marca">
        <span class="nome">{{ negocio.nome }}</span>
        <span class="papel">{{ negocio.cargo }} · CRP {{ negocio.crp }}</span>
        <p class="tag">
          Um espaço de acolhimento, escuta e construção de sentido, pra
          caminhar ao seu lado, de onde você estiver.
        </p>

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
          <a class="rede" :href="`mailto:${negocio.email}`" aria-label="Enviar e-mail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3.5 6.5 12 13l8.5-6.5" />
            </svg>
          </a>
        </div>
      </div>

      <div class="cols">
        <div class="col">
          <h3>Navegação</h3>
          <NuxtLink to="/#inicio">Início</NuxtLink>
          <NuxtLink to="/#sobre">Sobre</NuxtLink>
          <NuxtLink to="/#processo">Processo</NuxtLink>
          <NuxtLink to="/#perguntas">Perguntas</NuxtLink>
        </div>

        <div class="col">
          <h3>Contato</h3>
          <a :href="linkWhatsapp()" target="_blank" rel="noopener">{{ negocio.telefoneExibicao }}</a>
          <a :href="`mailto:${negocio.email}`">{{ negocio.email }}</a>
          <span class="local">{{ negocio.instagramHandle }}</span>
          <span class="local">Atendimento 100% online</span>
          <!-- Cidade no rodapé: sinal clássico de SEO local (NAP). O atendimento
               é online, então a linha seguinte deixa isso explícito. -->
          <span class="local">{{ negocio.cidade }} — {{ negocio.estadoSigla }}</span>
        </div>

        <div class="col">
          <h3>Documentos</h3>
          <NuxtLink to="/documentos/politicas">Política de Privacidade</NuxtLink>
          <NuxtLink to="/documentos/termos">Termos de Uso</NuxtLink>
        </div>
      </div>
    </div>

    <div class="rodape">
      <span>© {{ ano }} {{ negocio.nomeCompleto }}. Todos os direitos reservados.</span>
      <span class="credito">Feito com cuidado e acolhimento.</span>
    </div>
  </footer>
</template>

<script setup>
import { negocio, linkWhatsapp } from '~/helpers/site.js'

const ano = new Date().getFullYear()
</script>

<style scoped lang="sass">
footer
  width: 100%
  background-color: var(--cor-marrom-escuro)
  color: var(--cor-creme)

.conteudo
  display: flex
  justify-content: space-between
  gap: 80px
  width: 100%
  max-width: var(--container)
  margin: 0 auto
  padding: 80px 40px 48px

// ---------- Marca ----------
.marca
  display: flex
  flex-direction: column
  align-items: flex-start
  flex: 1 1 0
  max-width: 380px

.nome
  font-family: var(--script)
  font-size: 2.2rem
  line-height: 1
  color: var(--cor-creme)

.papel
  margin-top: 12px
  font-family: var(--bold)
  font-size: 0.85rem
  letter-spacing: 1.4px
  color: var(--cor-bege)

.tag
  margin-top: 18px
  font-family: var(--light)
  font-size: 1rem
  line-height: 1.6
  color: rgba(247, 240, 232, 0.62)

.sociais
  display: flex
  gap: 12px
  margin-top: 26px

.rede
  display: flex
  align-items: center
  justify-content: center
  width: 44px
  height: 44px
  border-radius: 50%
  background-color: rgba(255, 255, 255, 0.08)
  border: 1px solid rgba(255, 255, 255, 0.14)
  color: var(--cor-creme)
  transition: all 0.3s

  svg
    width: 20px
    height: 20px

  &:hover
    background-color: var(--cor-marrom-botao)
    border-color: transparent

// ---------- Colunas ----------
.cols
  display: flex
  // wrap: com a 3ª coluna (Documentos), entre 600 e 860px as três não cabem
  // lado a lado — sem isso o rodapé estoura a largura.
  flex-wrap: wrap
  gap: 90px

.col
  display: flex
  flex-direction: column
  gap: 14px

  h3
    font-family: var(--bold)
    font-size: 1.05rem
    color: var(--cor-creme)
    margin-bottom: 6px

  a
    font-family: var(--light)
    font-size: 1rem
    color: rgba(247, 240, 232, 0.7)
    text-decoration: none
    transition: color 0.3s

    &:hover
      color: var(--cor-creme)

  .local
    font-family: var(--light)
    font-size: 1rem
    color: rgba(247, 240, 232, 0.7)

// ---------- Barra inferior ----------
.rodape
  display: flex
  align-items: center
  justify-content: space-between
  gap: 20px
  width: 100%
  max-width: var(--container)
  margin: 0 auto
  padding: 26px 40px 34px
  border-top: 1px solid rgba(255, 255, 255, 0.1)
  font-family: var(--light)
  font-size: 0.88rem
  color: rgba(247, 240, 232, 0.5)

// ---------- Responsivo ----------
@media screen and (max-width: 860px)
  .conteudo
    flex-direction: column
    gap: 48px

  .cols
    gap: 40px 64px

@media screen and (max-width: 600px)
  .conteudo
    padding: 60px 24px 40px

  .cols
    flex-direction: column
    gap: 36px

  .rodape
    flex-direction: column
    align-items: flex-start
    gap: 10px
    padding: 24px 24px 30px
</style>
