// sitemap.xml gerado a partir de server/utils/paginas.js, com o domínio vindo
// do runtimeConfig — não há URL escrita à mão para ficar desatualizada.

import { paginas } from '../utils/paginas.js'

export default defineEventHandler((event) => {
  const base = useRuntimeConfig(event).public.siteUrl.replace(/\/$/, '')
  const hoje = new Date().toISOString().split('T')[0]

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')

  const urls = paginas
    .map(
      (p) => `  <url>
    <loc>${base}${p.caminho}</loc>
    <lastmod>${hoje}</lastmod>
    <changefreq>${p.frequencia}</changefreq>
    <priority>${p.prioridade}</priority>
  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
})
