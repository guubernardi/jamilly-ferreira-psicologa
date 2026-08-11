// Construtores de JSON-LD (schema.org).
//
// O grafo descreve três entidades ligadas por @id:
//   #psicologa → o consultório/serviço (Psychologist, subtipo de LocalBusiness)
//   #jamilly   → a profissional (Person), com credencial CRP
//   #website   → o site em si
// Cada página acrescenta seu próprio nó WebPage apontando para esse grafo.
//
// Motivo de existir: buscadores e LLMs não inferem "psicóloga, online, ABC
// paulista, abordagem existencial-humanista" do HTML visual. O JSON-LD diz isso
// de forma literal e não ambígua.

import {
  negocio,
  areasAtendidas,
  servicos,
  descricaoPadrao,
  marca,
  perfisSociais,
  urlAbsoluta
} from './site.js'

/** IDs estáveis do grafo — referenciados entre nós e entre páginas. */
export function ids(base) {
  return {
    psicologa: `${base}/#psicologa`,
    pessoa: `${base}/#jamilly`,
    site: `${base}/#website`
  }
}

/**
 * Grafo global (vai no app.vue, presente em todas as páginas).
 */
export function schemaGlobal(base) {
  const id = ids(base)
  const sameAs = perfisSociais()
  const imagem = urlAbsoluta(marca.compartilhar, base)

  const pessoa = {
    '@type': 'Person',
    '@id': id.pessoa,
    name: negocio.nomeCompleto,
    alternateName: negocio.nome,
    jobTitle: negocio.cargo,
    description: `${negocio.cargo} com atendimento online em abordagem ${negocio.abordagem.toLowerCase()}.`,
    url: base,
    image: imagem,
    gender: 'Female',
    knowsLanguage: 'pt-BR',
    knowsAbout: [
      'Psicologia clínica',
      'Psicoterapia online',
      'Abordagem existencial-humanista',
      'Ansiedade e angústia',
      'Autoconhecimento',
      'Crises existenciais e busca de sentido',
      'Transições de vida'
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Registro profissional',
      name: `CRP ${negocio.crp}`,
      recognizedBy: {
        '@type': 'Organization',
        name: 'Conselho Federal de Psicologia',
        alternateName: 'CFP',
        url: 'https://site.cfp.org.br/'
      }
    },
    worksFor: { '@id': id.psicologa }
  }
  if (sameAs.length) pessoa.sameAs = sameAs

  const consultorio = {
    '@type': ['Psychologist', 'ProfessionalService'],
    '@id': id.psicologa,
    name: `${negocio.nome} — ${negocio.cargo}`,
    description: descricaoPadrao,
    url: base,
    image: imagem,
    logo: urlAbsoluta(marca.logo, base),
    founder: { '@id': id.pessoa },
    employee: { '@id': id.pessoa },
    knowsLanguage: 'pt-BR',
    availableLanguage: { '@type': 'Language', name: 'Português', alternateName: 'pt-BR' },
    medicalSpecialty: 'Psychiatric',
    // Sem endereço de rua: o atendimento é 100% online. A localidade sustenta
    // as buscas locais sem expor endereço residencial.
    address: {
      '@type': 'PostalAddress',
      addressLocality: negocio.cidade,
      addressRegion: negocio.estadoSigla,
      addressCountry: negocio.paisCodigo
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: negocio.geo.lat,
      longitude: negocio.geo.lng
    },
    areaServed: areasAtendidas.map((nome) => ({
      '@type': nome === 'Brasil' ? 'Country' : 'City',
      name: nome
    })),
    serviceType: 'Psicoterapia online',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Atendimentos',
      itemListElement: servicos.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.nome,
          description: s.descricao,
          serviceType: 'Psicoterapia',
          provider: { '@id': id.psicologa },
          areaServed: { '@type': 'Country', name: 'Brasil' },
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: `${base}/#contato`,
            availableLanguage: 'pt-BR',
            serviceLocation: { '@type': 'VirtualLocation', url: `${base}/#contato` }
          }
        }
      }))
    }
  }
  if (sameAs.length) consultorio.sameAs = sameAs
  // Só publica contato quando deixar de ser placeholder — dado falso em JSON-LD
  // é pior que dado ausente.
  if (!/^5500/.test(negocio.whatsapp)) {
    consultorio.telephone = `+${negocio.whatsapp}`
  }

  const site = {
    '@type': 'WebSite',
    '@id': id.site,
    url: base,
    name: `${negocio.nome} | ${negocio.cargo}`,
    description: descricaoPadrao,
    inLanguage: 'pt-BR',
    publisher: { '@id': id.pessoa },
    copyrightHolder: { '@id': id.pessoa }
  }

  return { '@context': 'https://schema.org', '@graph': [consultorio, pessoa, site] }
}

/**
 * Nó WebPage de uma página. `faqs` opcional acrescenta o tipo FAQPage.
 */
export function schemaPagina(base, { caminho = '/', titulo, descricao, faqs = null, trilha = null }) {
  const id = ids(base)
  const url = urlAbsoluta(caminho, base)

  const pagina = {
    '@type': faqs ? ['WebPage', 'FAQPage'] : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: titulo,
    description: descricao,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': id.site },
    about: { '@id': id.pessoa },
    primaryImageOfPage: urlAbsoluta(marca.compartilhar, base)
  }

  if (faqs) {
    pagina.mainEntity = faqs.map((f) => ({
      '@type': 'Question',
      name: f.p,
      acceptedAnswer: { '@type': 'Answer', text: f.r }
    }))
  }

  const grafo = [pagina]

  if (trilha && trilha.length) {
    const listaId = `${url}#trilha`
    pagina.breadcrumb = { '@id': listaId }
    grafo.push({
      '@type': 'BreadcrumbList',
      '@id': listaId,
      itemListElement: trilha.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.nome,
        item: urlAbsoluta(item.caminho, base)
      }))
    })
  }

  return { '@context': 'https://schema.org', '@graph': grafo }
}

/**
 * Serializa com segurança para dentro de <script>: escapa "<" para que uma
 * string de conteúdo não consiga fechar a tag.
 */
export function serializar(objeto) {
  return JSON.stringify(objeto).replace(/</g, '\\u003c')
}
