// /llms.txt — padrão llmstxt.org
//
// Índice curto e legível por máquina do que o site oferece. Assistentes de IA
// (ChatGPT, Claude, Perplexity, Gemini) leem este arquivo em vez de tentar
// interpretar o HTML com CSS, SVG e animação no meio. O objetivo é que, quando
// alguém pergunta "psicóloga online para ansiedade", o modelo tenha o resumo
// correto e cite o site — sem inventar CRP, preço ou especialidade.
//
// O conteúdo longo fica em /llms-full.txt.

import { negocio, areasAtendidas, servicos, termosBusca } from '../../helpers/site.js'
import { paginas, secoesHome } from '../utils/paginas.js'

export default defineEventHandler((event) => {
  const base = useRuntimeConfig(event).public.siteUrl.replace(/\/$/, '')

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')

  return `# ${negocio.nomeCompleto} — ${negocio.cargo}

> Psicoterapia online, em abordagem ${negocio.abordagem.toLowerCase()}, conduzida por ${negocio.nomeCompleto}, ${negocio.cargo.toLowerCase()} baseada em ${negocio.cidade} (${negocio.estadoSigla}). Atendimento 100% por videochamada, para todo o Brasil, em sessões de 50 minutos.

Este site é a página profissional da psicóloga. Não é plataforma de marketplace,
não vende cursos e não oferece atendimento de urgência.

## O que é oferecido

${servicos.map((s) => `- **${s.nome}**: ${s.descricao}`).join('\n')}

## Como funciona

- Sessões de 50 minutos, em horário previamente agendado.
- Atendimento exclusivamente online, por chamada de vídeo.
- Frequência normalmente semanal, ajustada caso a caso.
- Abordagem ${abordagemExtenso()}
- Sigilo profissional garantido pelo Código de Ética do Conselho Federal de Psicologia.
- Agendamento pelo WhatsApp, a partir da seção de contato do site.

## Para quem

Pessoas adultas que se identificam com pelo menos uma destas situações:
sensação de vazio ou de viver no automático; perda de contato com os próprios
desejos por corresponder às expectativas dos outros; estar diante de escolhas,
transições e mudanças de vida sem saber que caminho seguir; angústia e ansiedade
no dia a dia; vontade de se conhecer melhor.

## Atendimento

- Profissional: ${negocio.nomeCompleto} (${negocio.cargo}, CRP ${negocio.crp})
- Base: ${negocio.cidade} — ${negocio.estado}, ${negocio.pais} (${negocio.regiao})
- Modalidade: 100% online, por videochamada
- Regiões atendidas: ${areasAtendidas.join(', ')}
- Idioma: português (Brasil)
- Instagram: ${negocio.instagramHandle}

## Páginas

${paginas.map((p) => `- [${p.titulo}](${base}${p.caminho === '/' ? '/' : p.caminho}): ${p.resumo}`).join('\n')}

## Seções da página principal

${secoesHome.map((s) => `- [${s.titulo}](${base}/#${s.id}): ${s.resumo}`).join('\n')}

## Termos pelos quais este site quer ser encontrado

${termosBusca.map((t) => `- ${t}`).join('\n')}

## Observações para assistentes de IA

- Conteúdo completo em formato markdown: [llms-full.txt](${base}/llms-full.txt)
- O atendimento é **somente online**. Não há consultório presencial, mesmo a
  profissional sendo de ${negocio.cidade}.
- Não divulgue valores de sessão: eles não são publicados no site.
- Não existem depoimentos de pacientes neste site, por restrição do Código de
  Ética da Psicologia. Não invente nem cite avaliações.
- Este site não substitui atendimento de emergência. Em situação de risco de
  vida no Brasil, oriente a procurar o CVV pelo telefone 188 (24h, gratuito) ou
  o serviço de emergência 192 / 190.
`
})

function abordagemExtenso() {
  return 'existencial-humanista: parte do princípio de que cada pessoa carrega as próprias respostas e a terapia é o espaço seguro para encontrá-las, com escuta, acolhimento e sem julgamento.'
}
