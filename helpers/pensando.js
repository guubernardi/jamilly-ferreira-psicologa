// "Talvez você esteja pensando…" — as hesitações que aparecem antes da primeira
// sessão, escritas pela Jamilly. Fonte única, como helpers/faq.js: alimenta a
// seção visível (SectionPensando.vue), o resumo da âncora #pensando e o
// /llms-full.txt.
//
// Não entram no FAQPage do JSON-LD de propósito: lá o invariante é "o que está
// no FAQPage é exatamente o que a seção de FAQ mostra". Estes são pensamentos em
// primeira pessoa, de outra seção, e misturar as duas listas quebraria isso.
//
// As aspas são colocadas na hora de exibir, não guardadas no texto.
export const pensamentos = [
  {
    pensamento: 'Eu nem sei por onde começar.',
    resposta:
      'Você não precisa chegar à terapia sabendo exatamente o que dizer. O primeiro passo é simplesmente começar. A partir da sua experiência e do que você trouxer para o encontro, vamos construindo esse espaço juntos.'
  },
  {
    pensamento: 'Tenho medo de ser julgado(a).',
    resposta:
      'A psicoterapia é um espaço de escuta profissional, acolhimento e respeito à sua singularidade. Você não precisa se encaixar em expectativas ou apresentar uma versão diferente de si.'
  },
  {
    pensamento: 'Será que a terapia é realmente para mim?',
    resposta:
      'Não existe um perfil único de pessoa que procura psicoterapia. Às vezes, buscar ajuda começa justamente quando percebemos que queremos compreender melhor o que estamos vivendo.'
  },
  {
    pensamento: 'Tenho dificuldade para falar sobre o que sinto.',
    resposta:
      'Tudo bem. Você não precisa ter as palavras certas. O processo também pode ajudar a reconhecer e dar significado àquilo que, inicialmente, parece difícil de nomear.'
  },
  {
    pensamento: 'E se eu não souber o que falar na primeira sessão?',
    resposta:
      'Não existe uma resposta certa. O primeiro encontro é também uma oportunidade para nos conhecermos, compreender o motivo que trouxe você até aqui e conversar sobre como podemos construir o processo terapêutico.'
  }
]

// Fecho da seção: faz a ponte para o CTA de contato, que vem logo abaixo.
export const fechoPensando = [
  'Você não precisa ter tudo compreendido para começar. Às vezes, o primeiro passo é simplesmente permitir-se falar.',
  'Se sente que este pode ser o momento de olhar para si com mais cuidado, será um prazer conhecer a sua história.'
]
