<template>
  <main class="bio">
    <article class="cartao">
      <!-- 1. Capa: com a foto recortada (sem fundo), o topo deixa de ser "uma
           foto" e vira composição: fundo creme, o Ψ e a assinatura como marca, o
           nome à esquerda e ela sangrando pela direita. -->
      <header class="topo">
        <Psi class="marca-psi" aria-hidden="true" />

        <img
          class="retrato"
          src="/images/jamilly-recorte.webp"
          alt="Jamilly Ferreira de Medeiros, psicóloga clínica, segurando um modelo anatômico de cérebro"
          width="700"
          height="714"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />

        <div class="identidade">
          <h1>Jamilly<br />Ferreira</h1>
          <p class="papel">{{ negocio.cargo }}</p>
          <p class="papel fina">
            CRP {{ negocio.crp }}<br />
            {{ negocio.abordagem }}
          </p>
        </div>
      </header>

      <!-- 2. Atalhos: a pilha escurece de cima para baixo, como na referência.
           A cor de cada degrau vem do --tom/--tinta setados inline. -->
      <nav class="atalhos" aria-label="Contatos e links">
        <component
          v-for="atalho in atalhos"
          :key="atalho.titulo"
          :is="atalho.interno ? NuxtLink : 'a'"
          class="atalho"
          :style="{
            '--tom': atalho.tom,
            '--tom2': atalho.tom2,
            '--tinta': atalho.tinta,
            '--arte': `url(${atalho.arte})`
          }"
          v-bind="destino(atalho)"
        >
          <span class="selo">
            <SvgIcone :nome="atalho.icone" cor="var(--tinta)" :tamanho="21" />
          </span>

          <span class="rotulo">
            <strong>{{ atalho.titulo }}</strong>
            <small>{{ atalho.detalhe }}</small>
          </span>

          <span class="seta" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </component>
      </nav>

      <!-- 3. Números: os da referência são de resultado ("96% de aprovação"), que
           psicóloga não pode anunciar. Aqui só entram dados verificáveis. -->
      <ul class="numeros">
        <li v-for="dado in numeros" :key="dado.rotulo">
          <SvgIcone :nome="dado.icone" cor="var(--cor-marrom)" :tamanho="18" />
          <strong>{{ dado.valor }}</strong>
          <small>{{ dado.rotulo }}</small>
        </li>
      </ul>

      <!-- 4. Quem sou eu -->
      <section class="quem">
        <h2>Quem sou eu</h2>
        <p>
          Sou {{ negocio.nomeCompleto }}, psicóloga clínica. Acredito que cada
          pessoa carrega dentro de si as respostas que procura, às vezes só falta
          um espaço seguro pra encontrá-las. Meu trabalho é caminhar ao seu lado
          nesse processo, com escuta e acolhimento, sem julgamento e respeitando
          o seu tempo.
        </p>
        <NuxtLink class="botao" to="/#sobre">
          <span>Minha abordagem</span>
          <SvgIcone nome="seta-direita-fina" cor="var(--cor-marrom-escuro)" :tamanho="18" />
        </NuxtLink>
      </section>

      <!-- 5. Dúvidas: as três primeiras do FAQ do site, mesma fonte -->
      <section class="duvidas">
        <h2>Dúvidas</h2>
        <div class="lista">
          <div
            v-for="(item, i) in duvidas"
            :key="i"
            class="duvida"
            :class="{ aberta: aberta === i }"
          >
            <h3>
              <button
                :id="`bio-duvida-${i}`"
                :aria-expanded="aberta === i"
                :aria-controls="`bio-resposta-${i}`"
                @click="alternar(i)"
              >
                <span>{{ item.p }}</span>
                <span class="mais" aria-hidden="true"></span>
              </button>
            </h3>
            <div
              class="resposta"
              :id="`bio-resposta-${i}`"
              role="region"
              :aria-labelledby="`bio-duvida-${i}`"
            >
              <div><p>{{ item.r }}</p></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Rodapé -->
      <footer class="rodape">
        <p class="chamada">Vamos conversar?</p>
        <p class="acompanhe">
          Me acompanhe nas redes
          <span class="arroba">{{ negocio.instagramHandle }}</span>
        </p>

        <div class="redes">
          <a :href="linkWhatsapp()" target="_blank" rel="noopener" aria-label="WhatsApp">
            <SvgIcone nome="whatsapp" cor="var(--cor-creme)" :tamanho="19" />
          </a>
          <NuxtLink
            :to="linkInstagram()"
            :target="instagramEhExterno() ? '_blank' : undefined"
            :rel="instagramEhExterno() ? 'noopener' : undefined"
            :aria-label="`Instagram ${negocio.instagramHandle}`"
          >
            <SvgIcone nome="instagram" cor="var(--cor-creme)" :tamanho="19" />
          </NuxtLink>
          <a :href="linkEmail" aria-label="E-mail">
            <SvgIcone nome="envelope-1" cor="var(--cor-creme)" :tamanho="19" />
          </a>
          <NuxtLink to="/" aria-label="Site">
            <SvgIcone nome="globo" cor="var(--cor-creme)" :tamanho="19" />
          </NuxtLink>
        </div>

        <span class="firma">Jamilly Ferreira</span>
        <p class="miudo">
          © {{ ano }} {{ negocio.nomeCompleto }} · CRP {{ negocio.crp }}<br />
          Atendimento 100% online, para todo o Brasil
        </p>
      </footer>
    </article>
  </main>
</template>

<script setup>
import { negocio, linkWhatsapp, linkInstagram, instagramEhExterno } from '~/helpers/site.js'
import { faqs } from '~/helpers/faq.js'

// Layout 'default' = sem Nav e sem Footer. Um cartão de visita se basta:
// a página é o cartão, não uma seção dentro do site.
definePageMeta({
  layout: 'default'
})

// Precisa ser o componente, não a string 'NuxtLink': em <component :is>, uma
// string é tratada como nome de elemento nativo, e os dois atalhos internos
// saíam no HTML como <NuxtLink> literal, que o navegador ignora. Resultado:
// "Conhecer meu trabalho" e "Instagram" não clicavam.
const NuxtLink = resolveComponent('NuxtLink')

const linkEmail = `mailto:${negocio.email}`
const ano = new Date().getFullYear()

// Só as três primeiras: o cartão é um atalho, não a página de FAQ.
const duvidas = faqs.slice(0, 3)

const aberta = ref(0)
function alternar(i) {
  aberta.value = aberta.value === i ? -1 : i
}

// `arte` é um recorte de objeto tirado das fotos reais da Jamilly (o caderno nas
// mãos, a estante, a planta, o ripado da parede, o Ψ), tonalizado em sépia com
// ffmpeg e guardado em public/imagens/bio/. Nada de banco de imagem.
//
// Cada degrau é um degradê, e o fim de um encosta no começo do próximo: a pilha
// inteira lê como uma rampa só, do bege ao marrom escuro. A troca de `tinta`
// (escura -> creme) cai entre o 2º e o 3º, onde o fundo fica escuro o bastante:
// todos os pares texto/fundo ficam acima de 4.5:1.
const atalhos = [
  {
    titulo: 'Agendar sessão',
    detalhe: 'Falar comigo no WhatsApp',
    icone: 'whatsapp',
    href: linkWhatsapp(),
    externo: true,
    arte: '/imagens/bio/caderno.jpg',
    tom: '#F0E3D2',
    tom2: '#DCC5A8',
    tinta: '#463830'
  },
  {
    titulo: 'Conhecer meu trabalho',
    detalhe: 'Site completo',
    icone: 'globo',
    to: '/',
    interno: true,
    arte: '/imagens/bio/livros.jpg',
    tom: '#DCC5A8',
    tom2: '#C4A585',
    tinta: '#463830'
  },
  {
    titulo: 'Instagram',
    detalhe: negocio.instagramHandle,
    icone: 'instagram',
    to: linkInstagram(),
    interno: true,
    externo: instagramEhExterno(),
    arte: '/imagens/bio/planta.jpg',
    tom: '#85603F',
    tom2: '#6F4F34',
    tinta: '#F7F0E8'
  },
  {
    titulo: 'E-mail',
    detalhe: negocio.email,
    icone: 'envelope-1',
    href: linkEmail,
    arte: '/imagens/bio/ripado.jpg',
    tom: '#6F4F34',
    tom2: '#55402F',
    tinta: '#F7F0E8'
  },
  {
    titulo: 'Salvar meu contato',
    detalhe: 'Adicionar à agenda do celular',
    icone: 'download',
    href: '/jamilly-ferreira.vcf',
    arte: '/imagens/bio/psi.jpg',
    tom: '#463830',
    tom2: '#322820',
    tinta: '#F7F0E8'
  }
]

// Números da referência são de resultado; estes são de fato, e saem de site.js.
const numeros = [
  { icone: 'relogio', valor: '50 min', rotulo: 'por sessão' },
  { icone: 'videochamada', valor: '100%', rotulo: 'online' },
  { icone: 'certificado', valor: 'CRP', rotulo: negocio.crp }
]

/** Monta href/to conforme o atalho seja link externo, rota interna ou inerte. */
function destino(atalho) {
  if (atalho.interno) {
    return {
      to: atalho.to,
      target: atalho.externo ? '_blank' : undefined,
      rel: atalho.externo ? 'noopener' : undefined
    }
  }
  return {
    href: atalho.href,
    target: atalho.externo ? '_blank' : undefined,
    rel: atalho.externo ? 'noopener' : undefined
  }
}

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
  max-width: 460px
  border-radius: 34px
  background-color: var(--cor-creme)
  box-shadow: 0 30px 70px rgba(70, 56, 48, 0.28)

// ---------- 1. Capa ----------
.topo
  position: relative
  overflow: hidden
  // Ψ e nome empilhados a partir do topo, não ancorados embaixo: assim o texto
  // fica na altura dela (peito/cérebro) em vez de na altura das mãos, e ainda
  // ganha folga, porque a silhueta é bem mais estreita em cima do que embaixo.
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 26px 22px 0
  // A altura acompanha a largura do cartão. Altura fixa quebrava: em tela
  // estreita ela continuava com a largura da altura antiga e sangrava pra fora,
  // cortada no meio do cérebro.
  aspect-ratio: 1 / 0.94
  background-color: var(--cor-creme)

// O Ψ da parede da foto original, que o recorte apagou, volta como marca do
// layout. Fica à esquerda do rosto, no mesmo lugar em que estava na parede.
.marca-psi
  position: relative
  z-index: 2
  width: 78px
  margin-bottom: 20px
  color: var(--cor-bege)
  opacity: 0.55

// Tudo em % da largura do cartão, nunca em px: assim a proporção do que aparece
// dela é a mesma em qualquer tela. Com 88% de largura e 9% de sangria, o corte
// da direita cai na manga dela, e o cérebro inteiro fica dentro do cartão.
.retrato
  position: absolute
  right: -12%
  bottom: 0
  z-index: 1
  width: 88%
  height: auto
  object-fit: contain
  object-position: bottom right
  // sem isto o recorte termina numa linha reta sobre o creme, porque não há
  // troca de cor embaixo pra disfarçar o corte
  mask-image: linear-gradient(to top, transparent 0%, #000 7%)
  -webkit-mask-image: linear-gradient(to top, transparent 0%, #000 7%)

// O nome fica na faixa livre à esquerda: acima da altura do colo, o recorte não
// tem pixel nenhum ali, então o texto cai sobre o creme e não sobre ela.
.identidade
  position: relative
  z-index: 2
  max-width: 46%

h1
  font-family: var(--extrabold)
  font-size: clamp(1.75rem, 8vw, 2.3rem)
  line-height: 1.02
  letter-spacing: -0.5px
  color: var(--cor-marrom-escuro)

.papel
  margin-top: 12px
  font-family: var(--bold)
  font-size: 0.72rem
  letter-spacing: 0.8px
  text-transform: uppercase
  color: var(--cor-marrom)

.papel.fina
  margin-top: 6px
  font-family: var(--light)
  font-size: 0.78rem
  line-height: 1.6
  letter-spacing: 0
  text-transform: none
  color: rgba(70, 56, 48, 0.6)

// ---------- 2. Atalhos ----------
.atalhos
  display: flex
  flex-direction: column
  gap: 10px
  padding: 22px 18px 4px

.atalho
  display: flex
  align-items: center
  gap: 14px
  padding: 14px 16px
  position: relative
  overflow: hidden
  isolation: isolate
  border-radius: 18px
  background-image: linear-gradient(120deg, var(--tom), var(--tom2))
  text-decoration: none
  transition: all 0.3s

  // Recorte de uma foto real da Jamilly sangrando pela direita, como na
  // referência. z-index -1 põe a arte acima do degradê e abaixo do conteúdo
  // (o isolation garante que ela não escape para trás do cartão).
  // A máscara só deixa a imagem aparecer depois de 46% da largura, que é onde
  // o texto já acabou: assim nenhum par texto/fundo cai abaixo de 4.5:1.
  &::after
    content: ''
    position: absolute
    inset: 0
    z-index: -1
    background-image: var(--arte)
    background-position: center
    background-size: cover
    opacity: 0.62
    mask-image: linear-gradient(90deg, transparent 46%, #000 95%)
    -webkit-mask-image: linear-gradient(90deg, transparent 46%, #000 95%)

  &:hover
    filter: brightness(1.06)
    box-shadow: 0 10px 24px rgba(70, 56, 48, 0.2)

.selo
  display: flex
  flex: 0 0 auto
  align-items: center
  justify-content: center
  width: 42px
  height: 42px
  border-radius: 13px
  background-color: rgba(255, 255, 255, 0.22)
  border: 1px solid rgba(255, 255, 255, 0.28)

.rotulo
  display: flex
  flex-direction: column
  gap: 2px
  min-width: 0
  flex: 1 1 auto

  strong
    font-family: var(--bold)
    font-weight: normal
    font-size: 1.02rem
    line-height: 1.2
    color: var(--tinta)

  small
    overflow: hidden
    font-size: 0.76rem
    line-height: 1.3
    text-overflow: ellipsis
    white-space: nowrap
    color: var(--tinta)
    opacity: 0.72

.seta
  display: flex
  flex: 0 0 auto
  align-items: center
  justify-content: center
  width: 28px
  height: 28px
  border-radius: 50%
  border: 1px solid currentColor
  color: var(--tinta)
  opacity: 0.55

  svg
    width: 15px
    height: 15px

// ---------- 3. Números ----------
.numeros
  display: grid
  grid-template-columns: repeat(3, minmax(0, 1fr))
  gap: 8px
  margin: 20px 18px 0
  padding: 16px 10px
  border-radius: 18px
  background-color: rgba(206, 179, 148, 0.24)
  list-style: none

  li
    display: flex
    flex-direction: column
    align-items: center
    gap: 3px
    text-align: center

  strong
    font-family: var(--extrabold)
    font-weight: normal
    font-size: 1.02rem
    line-height: 1.1
    color: var(--cor-marrom-escuro)

  small
    font-size: 0.68rem
    letter-spacing: 0.6px
    text-transform: uppercase
    color: rgba(70, 56, 48, 0.6)

// ---------- 4. Quem sou eu ----------
.quem
  display: flex
  flex-direction: column
  align-items: flex-start
  margin: 20px 18px 0
  padding: 26px 24px 24px
  border-radius: 24px
  background-color: var(--cor-marrom-escuro)

  h2
    font-family: var(--script)
    font-size: 1.72rem
    line-height: 1
    color: var(--cor-creme)

  p
    margin-top: 14px
    font-size: 0.92rem
    line-height: 1.65
    color: rgba(247, 240, 232, 0.72)

.botao
  display: inline-flex
  align-items: center
  gap: 10px
  margin-top: 20px
  padding: 12px 22px
  border-radius: 40px
  background-color: var(--cor-bege)
  text-decoration: none
  transition: all 0.3s

  span
    font-family: var(--bold)
    font-size: 0.92rem
    color: var(--cor-marrom-escuro)

  &:hover
    background-color: #DCC6AB

// ---------- 5. Dúvidas ----------
.duvidas
  padding: 26px 24px 8px

  h2
    font-family: var(--script)
    font-size: 1.6rem
    line-height: 1
    color: var(--cor-marrom)

.lista
  display: flex
  flex-direction: column
  margin-top: 14px

.duvida
  border-bottom: 1px solid rgba(122, 78, 45, 0.16)

  // o último risco encostaria no rodapé escuro
  &:last-child
    border-bottom: none

  button
    display: flex
    align-items: center
    justify-content: space-between
    gap: 14px
    width: 100%
    padding: 15px 0
    background: none
    border: none
    text-align: left

  button span:not(.mais)
    font-family: var(--light)
    font-size: 0.92rem
    line-height: 1.4
    color: var(--cor-marrom-escuro)

// sinal de "+" que vira "−" ao abrir: dois riscos, um deles gira
.mais
  position: relative
  flex: 0 0 auto
  width: 15px
  height: 15px

  &::before,
  &::after
    content: ''
    position: absolute
    top: 50%
    left: 0
    width: 100%
    height: 1.6px
    border-radius: 2px
    background-color: var(--cor-marrom)
    transform: translateY(-50%)
    transition: all 0.3s

  &::after
    transform: translateY(-50%) rotate(90deg)

.duvida.aberta .mais::after
  transform: translateY(-50%) rotate(0deg)

// altura animada via grid, mesma técnica do FAQ do site
.resposta
  display: grid
  grid-template-rows: 0fr
  transition: grid-template-rows 0.35s ease

  > div
    overflow: hidden

  p
    padding-bottom: 16px
    font-size: 0.86rem
    line-height: 1.6
    color: rgba(70, 56, 48, 0.7)

.duvida.aberta .resposta
  grid-template-rows: 1fr

// ---------- 6. Rodapé ----------
.rodape
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 26px
  padding: 30px 24px 28px
  text-align: center
  background-color: var(--cor-marrom-escuro)

.chamada
  font-family: var(--script)
  font-size: 1.5rem
  line-height: 1.2
  color: var(--cor-creme)

.acompanhe
  margin-top: 8px
  font-size: 0.82rem
  line-height: 1.5
  color: rgba(247, 240, 232, 0.6)

.arroba
  color: var(--cor-bege)

.redes
  display: flex
  gap: 10px
  margin-top: 18px

  a
    display: flex
    align-items: center
    justify-content: center
    width: 40px
    height: 40px
    border-radius: 50%
    border: 1px solid rgba(206, 179, 148, 0.45)
    background-color: rgba(206, 179, 148, 0.1)
    text-decoration: none
    transition: all 0.3s

    &:hover
      background-color: rgba(206, 179, 148, 0.26)
      border-color: var(--cor-bege)

.firma
  margin-top: 24px
  font-family: var(--script)
  font-size: 1.35rem
  line-height: 1
  color: var(--cor-bege)

.miudo
  margin-top: 12px
  font-size: 0.68rem
  line-height: 1.7
  color: rgba(247, 240, 232, 0.4)

// ---------- Responsivo ----------
// No celular o cartão vira a tela inteira: sem moldura e sem canto arredondado.
@media screen and (max-width: 520px)
  main.bio
    padding: 0

  .cartao
    max-width: none
    border-radius: 0
    box-shadow: none

  .rodape
    padding-bottom: calc(28px + env(safe-area-inset-bottom, 0px))

@media screen and (max-width: 380px)
  .topo
    height: 430px

  h1
    font-size: 2.15rem

  .atalhos
    padding: 20px 14px 4px

  .atalho
    gap: 12px
    padding: 12px 13px

  .selo
    width: 38px
    height: 38px

  .numeros,
  .quem
    margin-left: 14px
    margin-right: 14px

  .duvidas
    padding: 24px 18px 8px
</style>
