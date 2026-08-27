<template>
  <section class="construcao">
    <div class="conteudo" v-revelar.filhos>
      <span class="selo">
        <SvgIcone nome="instagram" cor="var(--cor-marrom)" :tamanho="34" />
      </span>

      <span class="kicker">EM BREVE</span>

      <h1>O Instagram está <b>sendo preparado</b></h1>

      <p>
        O perfil profissional da Jamilly ainda está em construção. Assim que
        estiver no ar, ele vai aparecer aqui e em todos os links do site.
      </p>

      <span class="arroba">{{ negocio.instagramHandle }}</span>

      <p class="enquanto">
        Enquanto isso, se quiser conversar ou tirar uma dúvida, o WhatsApp está
        aberto. Não precisa esperar o perfil ficar pronto.
      </p>

      <div class="acoes">
        <a class="botao" :href="linkWhatsapp()" target="_blank" rel="noopener">
          <SvgIcone nome="whatsapp" cor="var(--cor-branco)" :tamanho="22" />
          <span>Falar no WhatsApp</span>
        </a>

        <NuxtLink class="secundario" to="/">Voltar para o início</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { negocio, linkWhatsapp } from '~/helpers/site.js'

definePageMeta({
  layout: 'web'
})

// noindex: página de espera não tem valor de busca, e indexá-la só criaria uma
// URL fraca competindo com o site. Sai do índice e fica fora do sitemap.
useSeo({
  caminho: '/instagram',
  titulo: 'Instagram em breve | Jamilly Ferreira',
  descricao:
    'O perfil profissional da psicóloga Jamilly Ferreira no Instagram está sendo preparado. Enquanto isso, o contato é pelo WhatsApp.',
  noindex: true
})
</script>

<style lang="sass" scoped>
section.construcao
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  min-height: 70vh
  padding: 120px 40px

.conteudo
  display: flex
  flex-direction: column
  align-items: center
  gap: 18px
  max-width: 620px
  text-align: center

.selo
  display: flex
  align-items: center
  justify-content: center
  width: 84px
  height: 84px
  border-radius: 50%
  background-color: var(--cor-branco)
  border: 1px solid rgba(122, 78, 45, 0.14)
  box-shadow: 0 16px 34px rgba(70, 56, 48, 0.1)

.kicker
  margin-top: 6px
  font-family: var(--extrabold)
  font-size: 0.78rem
  letter-spacing: 2.6px
  color: var(--cor-bege)

h1
  font-family: var(--light)
  font-size: clamp(1.9rem, 3.2vw, 2.7rem)
  line-height: 1.15
  color: var(--cor-marrom-escuro)

  b
    font-family: var(--extrabold)
    font-weight: normal
    color: var(--cor-marrom)

p
  font-family: var(--light)
  font-size: clamp(1.02rem, 1.3vw, 1.15rem)
  line-height: 1.65
  color: rgba(70, 56, 48, 0.7)

.arroba
  margin-top: 4px
  padding: 10px 22px
  border-radius: 40px
  background-color: rgba(206, 179, 148, 0.22)
  border: 1px solid rgba(206, 179, 148, 0.55)
  font-family: var(--bold)
  font-size: 1rem
  color: var(--cor-marrom)

.enquanto
  margin-top: 4px

.acoes
  display: flex
  align-items: center
  justify-content: center
  flex-wrap: wrap
  gap: 24px
  margin-top: 14px

.botao
  display: flex
  align-items: center
  gap: 12px
  padding: 16px 32px
  border-radius: 40px
  background-color: var(--cor-marrom-botao)
  text-decoration: none
  transition: all 0.3s

  span
    font-family: var(--light)
    font-size: 1.1rem
    color: var(--cor-branco)

  &:hover
    background-color: var(--cor-marrom-botao-hover)

.secundario
  font-family: var(--light)
  font-size: 1.05rem
  color: var(--cor-marrom)
  text-decoration: none
  transition: all 0.3s

  &:hover
    color: var(--cor-marrom-escuro)

@media screen and (max-width: 600px)
  section.construcao
    padding: 90px 22px
</style>
