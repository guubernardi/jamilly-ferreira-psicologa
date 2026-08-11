// robots.txt gerado em tempo de execução.
//
// Dois motivos para não ser arquivo estático:
// 1. o domínio sai do runtimeConfig, então nunca fica desatualizado;
// 2. deploys de preview da Vercel (*.vercel.app) são bloqueados por completo —
//    sem isso o Google indexa a URL de preview e ela compete com o site real
//    como conteúdo duplicado.

export default defineEventHandler((event) => {
  const base = useRuntimeConfig(event).public.siteUrl.replace(/\/$/, '')
  const ehProducao = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production'

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')

  if (!ehProducao) {
    return ['# Ambiente de preview — fora do índice.', 'User-agent: *', 'Disallow: /', ''].join('\n')
  }

  const linhas = [
    '# https://jamillyferreirapsicologa.com.br',
    '# Psicoterapia online — Jamilly Ferreira, psicóloga clínica.',
    '',
    'User-agent: *',
    'Allow: /',
    '',
    '# Rotas internas do Nuxt: sem conteúdo indexável.',
    'Disallow: /_nuxt/',
    'Disallow: /api/',
    '',
    '# Assistentes de IA e buscas generativas têm acesso liberado — a intenção é',
    '# que o site seja citado como fonte quando alguém pergunta sobre terapia',
    '# online. Resumo estruturado do conteúdo em /llms.txt.',
    ''
  ]

  const agentesIa = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-User',
    'Claude-SearchBot',
    'anthropic-ai',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot',
    'Applebot-Extended',
    'Amazonbot',
    'Meta-ExternalAgent',
    'DuckAssistBot',
    'cohere-ai',
    'YouBot',
    'Bingbot'
  ]

  for (const agente of agentesIa) {
    linhas.push(`User-agent: ${agente}`, 'Allow: /', '')
  }

  linhas.push(`Sitemap: ${base}/sitemap.xml`, '')

  // Ponteiro para o llms.txt. Não faz parte do padrão robots.txt, mas alguns
  // agentes leem o arquivo inteiro e comentários servem de dica.
  linhas.push(`# LLMs: ${base}/llms.txt`, `# LLMs (completo): ${base}/llms-full.txt`, '')

  // Reduz custo de banda com crawlers de SEO comercial, que não trazem visitante.
  linhas.push(
    'User-agent: AhrefsBot',
    'Crawl-delay: 10',
    '',
    'User-agent: SemrushBot',
    'Crawl-delay: 10',
    ''
  )

  return linhas.join('\n')
})
