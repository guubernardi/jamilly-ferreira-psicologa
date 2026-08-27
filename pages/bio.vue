<template>
  <main class="bio">
    <article class="cartao">
      <!-- Capa: peça de marca gerada (degradê + folhagem), já que o atendimento
           é online e não há consultório para fotografar. -->
      <div class="capa">
        <img
          src="/imagens/bio-capa.jpg"
          alt=""
          width="1200"
          height="520"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </div>

      <div class="painel">
        <div class="identidade">
          <img
            class="retrato"
            src="/images/foto-jamilly.jpeg"
            alt="Jamilly Ferreira de Medeiros, psicóloga clínica"
            width="768"
            height="1364"
            loading="eager"
            decoding="async"
          />

          <div class="nome">
            <h1>{{ negocio.nome }}</h1>
            <div class="cargo">
              <span class="risco" aria-hidden="true"></span>
              <span>{{ negocio.cargo }}</span>
              <span class="risco" aria-hidden="true"></span>
            </div>
            <span class="crp">CRP {{ negocio.crp }}</span>
          </div>
        </div>

        <!-- Miolo: com o cartão ocupando a tela inteira, sobra altura. As margens
             automáticas deste bloco dividem essa sobra em cima e embaixo, então
             as ações ficam centradas e o rodapé encosta no fim da tela. -->
        <div class="miolo">
          <!-- Orientação da referência: diz à visitante que o cartão é tocável -->
          <p class="dica">
            <span class="risco" aria-hidden="true"></span>
            <SvgIcone nome="toque" cor="var(--cor-bege)" :tamanho="18" />
            <span>Toque nos ícones</span>
            <span class="risco" aria-hidden="true"></span>
          </p>

          <a class="pilula principal" :href="linkWhatsapp()" target="_blank" rel="noopener">
            <SvgIcone nome="whatsapp" cor="var(--cor-marrom-escuro)" :tamanho="22" />
            <span>Agende sua sessão</span>
            <SvgIcone nome="agenda" cor="var(--cor-marrom-escuro)" :tamanho="20" />
          </a>

          <nav class="icones" aria-label="Contatos">
            <a
              class="quadrado"
              :href="linkWhatsapp()"
              target="_blank"
              rel="noopener"
              aria-label="Conversar no WhatsApp"
            >
              <SvgIcone nome="whatsapp" cor="var(--cor-creme)" :tamanho="24" />
            </a>

            <!-- Sem perfil ainda, o ícone leva para /instagram, que avisa que
                 está sendo montado. Quando instagramUrl existir, vira link
                 externo sozinho. -->
            <NuxtLink
              class="quadrado"
              :to="linkInstagram()"
              :target="instagramEhExterno() ? '_blank' : undefined"
              :rel="instagramEhExterno() ? 'noopener' : undefined"
              :aria-label="`Instagram ${negocio.instagramHandle}`"
            >
              <SvgIcone nome="instagram" cor="var(--cor-creme)" :tamanho="24" />
            </NuxtLink>

            <a class="quadrado" :href="linkEmail" aria-label="Enviar e-mail">
              <SvgIcone nome="envelope-1" cor="var(--cor-creme)" :tamanho="24" />
            </a>

            <NuxtLink class="quadrado" to="/" aria-label="Conhecer o site">
              <SvgIcone nome="globo" cor="var(--cor-creme)" :tamanho="24" />
            </NuxtLink>
          </nav>

          <!-- vCard: um toque e os dados entram na agenda do celular -->
          <a class="pilula" href="/jamilly-ferreira.vcf">
            <SvgIcone nome="download" cor="var(--cor-bege)" :tamanho="20" />
            <span>Salvar meu contato</span>
          </a>
        </div>

        <p class="pe">
          Atendimento 100% online, para todo o Brasil<br />
          {{ negocio.cidade }}, {{ negocio.estadoSigla }}
        </p>
      </div>
    </article>
  </main>
</template>

<script setup>
import { negocio, linkWhatsapp, linkInstagram, instagramEhExterno } from '~/helpers/site.js'

// Layout 'default' = sem Nav e sem Footer. Um cartão de visita se basta:
// a página é o cartão, não uma seção dentro do site.
definePageMeta({
  layout: 'default'
})

const linkEmail = `mailto:${negocio.email}`

useSeo({
  caminho: '/bio',
  titulo: 'Contato | Jamilly Ferreira, Psicóloga Online',
  descricao:
    'Cartão de contato da psicóloga Jamilly Ferreira: WhatsApp, e-mail e Instagram num toque. Psicoterapia online, sessões de 50 minutos.'
})
</script>

<style lang="sass" scoped>
main.bio
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  min-height: 100vh
  min-height: 100dvh
  padding: 32px 18px
  background-color: var(--cor-fundo)
  font-family: var(--light)

.cartao
  overflow: hidden
  display: flex
  flex-direction: column
  width: 100%
  max-width: 400px
  border-radius: 30px
  background-color: var(--cor-marrom-escuro)
  box-shadow: 0 30px 70px rgba(70, 56, 48, 0.28)

// ---------- Capa ----------
.capa
  width: 100%
  height: 172px

  img
    display: block
    width: 100%
    height: 100%
    object-fit: cover

// ---------- Painel escuro ----------
.painel
  display: flex
  flex-direction: column
  align-items: center
  flex: 1 1 auto
  padding: 0 22px 26px

// Quando o cartão ocupa a tela toda sobra altura. As margens automáticas aqui
// dividem essa sobra igualmente acima e abaixo, então as ações ficam centradas
// e o rodapé encosta no fim da tela, sem um buraco só embaixo.
.miolo
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  margin: auto 0

// ---------- Identidade ----------
// A margem negativa sobe a linha inteira para o retrato invadir a capa; o
// padding equivalente no bloco de texto devolve o nome para dentro do painel.
.identidade
  display: flex
  align-items: flex-start
  gap: 15px
  width: 100%
  margin-top: -54px

.retrato
  flex: 0 0 auto
  width: 104px
  height: 104px
  border-radius: 50%
  object-fit: cover
  // retrato de corpo inteiro: ancorar perto do topo mantém o rosto no recorte
  object-position: 50% 12%
  border: 3px solid var(--cor-marrom-escuro)
  box-shadow: 0 0 0 2px var(--cor-bege)

.nome
  display: flex
  flex-direction: column
  align-items: flex-start
  min-width: 0
  flex: 1 1 auto
  padding-top: 62px

h1
  font-family: var(--script)
  font-size: 1.72rem
  line-height: 1.05
  color: var(--cor-creme)

.cargo
  display: flex
  align-items: center
  gap: 8px
  width: 100%
  margin-top: 7px

  span:not(.risco)
    font-family: var(--bold)
    font-size: 0.62rem
    letter-spacing: 2.2px
    text-transform: uppercase
    white-space: nowrap
    color: var(--cor-bege)

.risco
  flex: 1 1 auto
  min-width: 10px
  height: 1px
  background-color: rgba(206, 179, 148, 0.45)

.crp
  margin-top: 5px
  font-size: 0.72rem
  letter-spacing: 0.6px
  color: rgba(247, 240, 232, 0.5)

// ---------- Dica ----------
.dica
  display: flex
  align-items: center
  gap: 10px
  width: 100%
  margin: 26px 0 16px

  span:not(.risco)
    font-size: 0.9rem
    white-space: nowrap
    color: var(--cor-bege)

  :deep(svg)
    flex: 0 0 auto

// ---------- Pílulas ----------
.pilula
  display: flex
  align-items: center
  justify-content: center
  gap: 10px
  width: 100%
  padding: 15px 20px
  border-radius: 40px
  border: 1px solid rgba(206, 179, 148, 0.55)
  background-color: rgba(206, 179, 148, 0.08)
  text-decoration: none
  transition: all 0.3s

  span
    font-family: var(--bold)
    font-size: 1rem
    color: var(--cor-creme)

  &:hover
    background-color: rgba(206, 179, 148, 0.2)
    border-color: var(--cor-bege)

// Ação principal: invertida, para puxar o toque
.pilula.principal
  background-color: var(--cor-bege)
  border-color: var(--cor-bege)

  span
    color: var(--cor-marrom-escuro)

  &:hover
    background-color: #DCC6AB
    border-color: #DCC6AB

// ---------- Fileira de ícones ----------
.icones
  display: flex
  align-items: center
  justify-content: center
  gap: 12px
  width: 100%
  margin: 14px 0

.quadrado
  display: flex
  align-items: center
  justify-content: center
  flex: 1 1 0
  aspect-ratio: 1 / 1
  max-width: 66px
  border-radius: 16px
  border: 1px solid rgba(206, 179, 148, 0.55)
  background-color: rgba(206, 179, 148, 0.08)
  text-decoration: none
  transition: all 0.3s

  &:hover
    background-color: rgba(206, 179, 148, 0.22)
    border-color: var(--cor-bege)

// ---------- Pé ----------
.pe
  margin-top: 20px
  text-align: center
  font-size: 0.74rem
  line-height: 1.6
  color: rgba(247, 240, 232, 0.45)

// ---------- Responsivo ----------
// No celular o cartão vira a tela inteira: sem moldura, sem canto arredondado
// e sem sombra. O que era um cartão flutuante passa a ser a própria página.
@media screen and (max-width: 560px)
  main.bio
    align-items: stretch
    padding: 0

  .cartao
    max-width: none
    min-height: 100vh
    min-height: 100dvh
    border-radius: 0
    box-shadow: none

  .capa
    height: 200px

  .pe
    // respeita a barra de gestos do iPhone
    padding-bottom: env(safe-area-inset-bottom, 0px)

@media screen and (max-width: 380px)
  main.bio
    padding: 20px 12px

  .painel
    padding: 0 16px 22px

  .identidade
    gap: 12px

  .retrato
    width: 92px
    height: 92px

  .nome
    padding-top: 56px

  h1
    font-size: 1.5rem

  .quadrado
    border-radius: 14px
</style>
