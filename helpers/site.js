// Fonte única de verdade do site: identidade, contato, redes e termos de busca.
// Tudo que aparece em metatags, JSON-LD, sitemap, robots.txt e llms.txt sai daqui,
// então mudar um dado (WhatsApp, CRP, e-mail) é mudar em UM lugar só.
//
// Único dado ainda ausente: instagramUrl (o perfil profissional não existe).

export const SITE_URL = 'https://jamillyferreirapsicologa.com.br'

export const negocio = {
  nome: 'Jamilly Ferreira',
  nomeCompleto: 'Jamilly Ferreira de Medeiros',
  cargo: 'Psicóloga Clínica',
  crp: '06/237828', // Conselho Regional de Psicologia — 6ª região (SP)
  abordagem: 'Existencial-humanista',

  // Contato
  whatsapp: '5511976461399', // DDI+DDD+número, só dígitos (formato do wa.me)
  telefoneExibicao: '(11) 97646-1399',
  email: 'jamillyferreira.psi@gmail.com',
  instagramHandle: '@jamillyferreirapsicologa',
  // A Jamilly ainda vai criar o perfil profissional; enquanto for null o handle
  // aparece como texto, sem link, e fica fora do sameAs do JSON-LD.
  instagramUrl: null,

  // Localização — atendimento é 100% online (Brasil inteiro), mas a base física
  // em São Bernardo do Campo sustenta as buscas locais ("psicóloga em SBC").
  cidade: 'São Bernardo do Campo',
  estado: 'São Paulo',
  estadoSigla: 'SP',
  pais: 'Brasil',
  paisCodigo: 'BR',
  regiao: 'Grande ABC',
  // Centro de São Bernardo do Campo. Sem endereço de rua: o atendimento é online
  // e publicar endereço residencial não faz sentido.
  geo: { lat: -23.6914, lng: -46.5646 }
}

// Áreas atendidas: o online cobre o país, mas listar o entorno de SBC ajuda o
// Google a associar o site às buscas locais da região.
export const areasAtendidas = [
  'São Bernardo do Campo',
  'Santo André',
  'São Caetano do Sul',
  'Diadema',
  'Mauá',
  'Ribeirão Pires',
  'São Paulo',
  'Brasil'
]

export const servicos = [
  {
    nome: 'Psicoterapia individual online',
    descricao:
      'Atendimento psicológico individual por videochamada, com sessões de 50 minutos e frequência semanal, em abordagem existencial-humanista.'
  },
  {
    nome: 'Terapia para crises existenciais e busca de sentido',
    descricao:
      'Acompanhamento para quem sente vazio, falta de sentido ou vive no automático e quer reencontrar direção.'
  },
  {
    nome: 'Terapia para ansiedade e angústia',
    descricao:
      'Espaço de escuta e acolhimento para lidar com angústia, ansiedade e sofrimento emocional do dia a dia.'
  },
  {
    nome: 'Apoio psicológico em transições de vida',
    descricao:
      'Suporte em fases de escolhas e mudanças: carreira, relacionamentos, maternidade, luto e recomeços.'
  },
  {
    nome: 'Autoconhecimento e reconexão consigo mesma',
    descricao:
      'Processo terapêutico para quem perdeu contato com os próprios desejos de tanto corresponder às expectativas dos outros.'
  }
]

// Termos que o site quer disputar. Não vão para <meta keywords> (ignorada pelo
// Google desde 2009) — servem de guia editorial e alimentam o llms.txt.
export const termosBusca = [
  'psicóloga online',
  'psicóloga São Bernardo do Campo',
  'terapia online',
  'psicoterapia online',
  'psicóloga clínica online',
  'terapia existencial humanista',
  'psicóloga ABC paulista',
  'atendimento psicológico online',
  'terapia para ansiedade online',
  'psicóloga para autoconhecimento'
]

export const marca = {
  corTema: '#F7F0E8',
  corMarrom: '#463830',
  // Peça de compartilhamento 1200x630 (1.91:1, a proporção que Facebook,
  // WhatsApp, LinkedIn e X esperam). Gerada a partir do lockup da marca + foto.
  compartilhar: '/imagens/compartilhar.jpg',
  compartilharLargura: 1200,
  compartilharAltura: 630,
  compartilharTipo: 'image/jpeg',
  logo: '/images/logo.png'
}

// Descrição curta reaproveitada em vários lugares (og:description padrão, manifest,
// JSON-LD). Mantida abaixo de ~160 caracteres para não ser cortada na SERP.
export const descricaoPadrao =
  'Psicoterapia online com Jamilly Ferreira, psicóloga clínica. Um espaço de acolhimento, escuta e construção de sentido. Atendimento humanizado e sigiloso.'

/** Monta uma URL absoluta a partir de um caminho relativo. */
export function urlAbsoluta(caminho = '/', base = SITE_URL) {
  if (!caminho) return base
  if (/^https?:\/\//.test(caminho)) return caminho
  return `${base.replace(/\/$/, '')}${caminho.startsWith('/') ? caminho : `/${caminho}`}`
}

/** Link do WhatsApp com mensagem pré-preenchida. */
export function linkWhatsapp(
  mensagem = 'Olá, Jamilly! Vim pelo site e gostaria de agendar uma sessão.'
) {
  return `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensagem)}`
}

/** Perfis oficiais — vira o `sameAs` do JSON-LD. Só entra o que existe de fato. */
export function perfisSociais() {
  return [negocio.instagramUrl].filter(Boolean)
}

/**
 * Destino do ícone do Instagram: o perfil real quando existir, senão a página
 * /instagram, que avisa que ainda está sendo montado. Assim nenhum ícone da
 * interface fica morto, e no dia que `instagramUrl` for preenchido todos os
 * pontos passam a apontar pro perfil de verdade sem mais nenhuma edição.
 */
export function linkInstagram() {
  return negocio.instagramUrl || '/instagram'
}

/** true quando o Instagram já é um link externo (precisa de target/rel). */
export function instagramEhExterno() {
  return Boolean(negocio.instagramUrl)
}
