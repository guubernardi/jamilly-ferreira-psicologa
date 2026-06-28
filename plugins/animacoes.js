import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Diretiva v-revelar: anima a entrada do elemento ao entrar na viewport.
//   v-revelar           -> revela o próprio elemento
//   v-revelar.filhos    -> revela os filhos diretos em sequência (stagger)
//   v-revelar.subtil    -> deslocamento menor
//   v-revelar="0.2"     -> atraso (delay) em segundos
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)
  }

  const semMovimento = () =>
    import.meta.client &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  nuxtApp.vueApp.directive('revelar', {
    getSSRProps: () => ({}),
    mounted(el, binding) {
      if (semMovimento()) return

      const filhos = binding.modifiers.filhos
      const alvos = filhos ? gsap.utils.toArray(el.children) : el

      // fromTo com destino fixo (opacity:1, y:0): o estado final é sempre
      // correto, mesmo com re-execução por HMR. clearProps limpa o inline no fim.
      const tween = gsap.fromTo(
        alvos,
        {
          opacity: 0,
          y: binding.modifiers.subtil ? 16 : 34
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          stagger: filhos ? 0.12 : 0,
          delay: typeof binding.value === 'number' ? binding.value : 0,
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      )
      el._revelar = tween
    },
    unmounted(el) {
      if (el._revelar) {
        el._revelar.scrollTrigger && el._revelar.scrollTrigger.kill()
        el._revelar.kill()
        el._revelar = null
      }
    }
  })

  // recalcula gatilhos depois que imagens/fontes carregam (evita posições erradas)
  if (import.meta.client) {
    nuxtApp.hook('app:mounted', () => {
      requestAnimationFrame(() => ScrollTrigger.refresh())
    })
    window.addEventListener('load', () => ScrollTrigger.refresh())
  }
})
