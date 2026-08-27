import { descricaoPadrao, marca, negocio, urlAbsoluta } from '~/helpers/site.js'
import { schemaPagina, serializar } from '~/helpers/schema.js'

/** URL base do site, vinda de NUXT_PUBLIC_SITE_URL (com fallback no nuxt.config). */
export function useUrlSite() {
  return useRuntimeConfig().public.siteUrl.replace(/\/$/, '')
}

/**
 * Aplica o SEO completo de uma página: título, descrição, canonical,
 * Open Graph, Twitter Card e o JSON-LD da página.
 *
 * Centralizado para que nenhuma página esqueça o canonical ou a og:image —
 * o erro mais comum e mais caro em site pequeno.
 *
 * @param {object} opcoes
 * @param {string} opcoes.titulo       Título da aba/SERP (já com o sufixo da marca, se quiser)
 * @param {string} opcoes.descricao    Meta description (ideal 120–160 caracteres)
 * @param {string} opcoes.caminho      Caminho da página, ex.: '/' ou '/documentos/termos'
 * @param {string} [opcoes.imagem]     Caminho da imagem de compartilhamento
 * @param {boolean}[opcoes.noindex]    Tira a página do índice (404, páginas utilitárias)
 * @param {Array}  [opcoes.faqs]       Perguntas/respostas → vira FAQPage no JSON-LD
 * @param {Array}  [opcoes.trilha]     Breadcrumb: [{ nome, caminho }]
 */
export function useSeo(opcoes = {}) {
  const {
    titulo,
    descricao = descricaoPadrao,
    caminho = '/',
    imagem = marca.compartilhar,
    noindex = false,
    faqs = null,
    trilha = null
  } = opcoes

  const base = useUrlSite()
  const url = urlAbsoluta(caminho, base)
  const imagemAbsoluta = urlAbsoluta(imagem, base)

  useSeoMeta({
    title: titulo,
    description: descricao,
    // Robots por página: o global permite indexação; aqui dá pra negar caso a caso.
    robots: noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    ogType: 'website',
    ogSiteName: negocio.nome,
    ogLocale: 'pt_BR',
    ogTitle: titulo,
    ogDescription: descricao,
    ogUrl: url,
    ogImage: imagemAbsoluta,
    ogImageWidth: marca.compartilharLargura,
    ogImageHeight: marca.compartilharAltura,
    ogImageAlt: `${negocio.nomeCompleto}, ${negocio.cargo}`,
    twitterCard: 'summary_large_image',
    twitterTitle: titulo,
    twitterDescription: descricao,
    twitterImage: imagemAbsoluta
  })

  // Em página noindex não vai canonical nem JSON-LD: canonical pede indexação
  // da URL enquanto o robots pede o contrário, e sinal conflitante o buscador
  // resolve como quiser.
  useHead({
    link: noindex ? [] : [{ rel: 'canonical', href: url }],
    script: noindex
      ? []
      : [
          {
            type: 'application/ld+json',
            innerHTML: serializar(
              schemaPagina(base, { caminho, titulo, descricao, faqs, trilha })
            )
          }
        ]
  })
}
