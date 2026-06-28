<template>
  <section id="perguntas" class="faq">
    <div class="cabecalho" v-revelar.filhos>
      <div class="kicker"><span>DÚVIDAS</span></div>
      <h2>Perguntas <b>frequentes</b></h2>
      <p>Algumas respostas pra te ajudar a dar o primeiro passo com mais tranquilidade.</p>
    </div>

    <div class="lista" v-revelar.filhos>
      <div
        v-for="(item, i) in faqs"
        :key="i"
        class="item"
        :class="{ aberta: aberta === i }"
      >
        <button
          class="pergunta"
          :aria-expanded="aberta === i"
          @click="alternar(i)"
        >
          <span>{{ item.p }}</span>
          <svg class="sinal" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div class="resposta">
          <div class="resposta-inner">
            <p>{{ item.r }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const aberta = ref(0)

function alternar(i) {
  aberta.value = aberta.value === i ? -1 : i
}

const faqs = [
  {
    p: 'Como funcionam as sessões online?',
    r: 'As sessões acontecem por chamada de vídeo, num ambiente seguro e sigiloso. Você só precisa de um local tranquilo e privado e de uma boa conexão de internet, pode ser de onde se sentir mais confortável.'
  },
  {
    p: 'Qual a duração e a frequência dos encontros?',
    r: 'Cada sessão tem duração média de 50 minutos. A frequência costuma ser semanal, mas a gente define juntas o ritmo que faz mais sentido pra o seu momento.'
  },
  {
    p: 'Preciso ter um motivo “grave” pra começar terapia?',
    r: 'Não. A terapia é um espaço de cuidado pra qualquer pessoa que queira se entender melhor, lidar com angústias do dia a dia ou simplesmente ter um lugar seguro pra falar.'
  },
  {
    p: 'As sessões são sigilosas?',
    r: 'Sim. Tudo o que você compartilha é protegido pelo sigilo profissional, um dos princípios fundamentais do Código de Ética da Psicologia.'
  },
  {
    p: 'Qual é a sua abordagem?',
    r: 'Trabalho com uma abordagem humanista, que enxerga você de forma integral, com acolhimento, escuta, sem julgamento e respeitando o seu tempo.'
  },
  {
    p: 'Como faço pra agendar a primeira sessão?',
    r: 'É só clicar em “Agendar minha sessão”. A gente combina um horário e, se quiser, tira suas dúvidas antes de começar, sem compromisso.'
  }
]
</script>

<style lang="sass" scoped>
section.faq
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  padding: 100px 40px 120px
  background-color: var(--cor-branco)

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

// ---------- Lista (accordion) ----------
.lista
  display: flex
  flex-direction: column
  gap: 16px
  width: 100%
  max-width: 820px

.item
  border-radius: 18px
  background-color: var(--cor-fundo)
  border: 1px solid rgba(122, 78, 45, 0.1)
  overflow: hidden
  transition: border-color 0.3s, box-shadow 0.3s

  &.aberta
    border-color: rgba(122, 78, 45, 0.28)
    box-shadow: 0 16px 36px rgba(70, 56, 48, 0.1)

.pergunta
  display: flex
  align-items: center
  justify-content: space-between
  gap: 20px
  width: 100%
  padding: 24px 28px
  background: none
  border: none
  cursor: pointer
  text-align: left

  span
    font-family: var(--bold)
    font-size: clamp(1.02rem, 1.3vw, 1.15rem)
    color: var(--cor-marrom-escuro)
    transition: color 0.3s

  &:hover span
    color: var(--cor-marrom)

.sinal
  flex: 0 0 auto
  width: 24px
  height: 24px
  color: var(--cor-marrom)
  transition: transform 0.35s ease

.item.aberta .sinal
  transform: rotate(180deg)

// animação de altura via grid (0fr -> 1fr)
.resposta
  display: grid
  grid-template-rows: 0fr
  transition: grid-template-rows 0.35s ease

.item.aberta .resposta
  grid-template-rows: 1fr

.resposta-inner
  overflow: hidden

.resposta-inner p
  padding: 0 28px 26px
  font-family: var(--light)
  font-size: clamp(1rem, 1.2vw, 1.1rem)
  line-height: 1.65
  color: rgba(70, 56, 48, 0.72)

@media (prefers-reduced-motion: reduce)
  .resposta, .sinal
    transition: none

// ---------- Responsivo ----------
@media screen and (max-width: 600px)
  section.faq
    padding: 70px 22px 80px

  .pergunta
    padding: 20px 20px

  .resposta-inner p
    padding: 0 20px 22px
</style>
