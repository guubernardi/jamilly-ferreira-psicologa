<template>
  <NuxtLayout name="web">
    <section class="erro">
      <div class="conteudo">
        <span class="codigo">{{ erro?.statusCode || 404 }}</span>
        <h1>{{ titulo }}</h1>
        <p>{{ mensagem }}</p>

        <div class="acoes">
          <a href="/" class="botao" @click.prevent="voltar('/')">
            <SvgIcone nome="casa" cor="var(--cor-branco)" :tamanho="22" />
            <span>Voltar para o início</span>
          </a>
          <a href="/#contato" class="secundario" @click.prevent="voltar('/#contato')">
            Falar com a Jamilly
          </a>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({ error: { type: Object, default: null } })
const erro = computed(() => props.error)

const ehNaoEncontrado = computed(() => (erro.value?.statusCode || 404) === 404)

const titulo = computed(() =>
  ehNaoEncontrado.value ? 'Essa página não existe' : 'Algo saiu do lugar'
)
const mensagem = computed(() =>
  ehNaoEncontrado.value
    ? 'O endereço que você tentou acessar não está aqui — pode ter sido movido ou digitado com algum erro. Nada de mais: dá pra continuar pelo início.'
    : 'Tivemos um problema inesperado ao carregar esta página. Tente novamente em instantes.'
)

// noindex: página de erro fora do índice, senão o Google guarda uma URL quebrada
// como se fosse conteúdo do site.
useSeo({
  caminho: '/404',
  titulo: `${titulo.value} | Jamilly Ferreira`,
  descricao: mensagem.value,
  noindex: true
})

// clearError limpa o estado de erro antes de navegar; sem isso o Nuxt mantém a
// tela de erro montada mesmo depois da troca de rota.
function voltar(destino = '/') {
  clearError({ redirect: destino })
}
</script>

<style lang="sass" scoped>
section.erro
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
  gap: 20px
  max-width: 620px
  text-align: center

.codigo
  font-family: var(--script)
  font-size: clamp(4rem, 10vw, 7rem)
  line-height: 1
  color: var(--cor-bege)

h1
  font-family: var(--bold)
  font-size: clamp(1.8rem, 3.2vw, 2.6rem)
  line-height: 1.15
  color: var(--cor-marrom-escuro)

p
  font-family: var(--light)
  font-size: clamp(1.02rem, 1.3vw, 1.15rem)
  line-height: 1.65
  color: rgba(70, 56, 48, 0.7)

.acoes
  display: flex
  align-items: center
  gap: 24px
  flex-wrap: wrap
  justify-content: center
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
  section.erro
    padding: 90px 22px
</style>
