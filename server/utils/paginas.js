// Páginas públicas do site — usadas pelo sitemap.xml e pelo llms.txt.
// Ao criar uma página nova em pages/, acrescente aqui.
import { beneficios } from '../../helpers/beneficios.js'

export const paginas = [
  {
    caminho: '/',
    titulo: 'Psicóloga Online — Jamilly Ferreira',
    resumo:
      'Página principal: quem é a Jamilly, para quem é a terapia, o que o processo pode contribuir, como funcionam as sessões, perguntas frequentes e contato.',
    prioridade: '1.0',
    frequencia: 'monthly'
  },
  {
    caminho: '/bio',
    titulo: 'Cartão de contato',
    resumo:
      'Cartão de visita digital: WhatsApp, e-mail, Instagram e download do contato para a agenda.',
    prioridade: '0.6',
    frequencia: 'yearly'
  },
  {
    caminho: '/documentos/politicas',
    titulo: 'Política de Privacidade',
    resumo: 'Como os dados enviados pelo site são coletados, usados e protegidos (LGPD).',
    prioridade: '0.3',
    frequencia: 'yearly'
  },
  {
    caminho: '/documentos/termos',
    titulo: 'Termos e Condições de Uso',
    resumo: 'Regras de uso do site, limites de responsabilidade e informações sobre o atendimento.',
    prioridade: '0.3',
    frequencia: 'yearly'
  }
]

/** Âncoras da home — cada seção é um destino de link direto. */
export const secoesHome = [
  { id: 'inicio', titulo: 'Início', resumo: 'Apresentação e chamada para agendar a sessão.' },
  {
    id: 'situacao',
    titulo: 'Se encontra nessa situação?',
    resumo:
      'Três situações comuns: vazio difícil de nomear, perda de conexão consigo mesma, e estar diante de escolhas e mudanças.'
  },
  {
    id: 'beneficios',
    titulo: 'O processo terapêutico pode contribuir para',
    // Derivado de helpers/beneficios.js para o resumo nunca divergir da lista
    // que a visitante lê na seção. Só a primeira palavra fica maiúscula.
    resumo: `${beneficios[0]}, ${beneficios
      .slice(1)
      .map((b) => b[0].toLowerCase() + b.slice(1))
      .join(', ')}.`
  },
  { id: 'sobre', titulo: 'Sobre mim', resumo: 'Quem é Jamilly Ferreira e como ela conduz o processo.' },
  {
    id: 'processo',
    titulo: 'Como funciona o processo terapêutico?',
    resumo: 'Sessões de 50 minutos, atendimento online por videochamada e processo personalizado.'
  },
  { id: 'perguntas', titulo: 'Perguntas frequentes', resumo: 'Dúvidas comuns sobre terapia online, sigilo e agendamento.' },
  {
    id: 'pensando',
    titulo: 'Talvez você esteja pensando…',
    resumo:
      'Respostas às hesitações mais comuns antes da primeira sessão: não saber por onde começar, medo de ser julgada, dúvida se a terapia é pra você e dificuldade de falar sobre o que sente.'
  },
  { id: 'contato', titulo: 'Contato', resumo: 'WhatsApp e Instagram para agendar a primeira sessão.' }
]
