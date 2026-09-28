# Jamilly Ferreira | Psicóloga

Site institucional da psicóloga clínica Jamilly Ferreira (CRP 06/237828), com psicoterapia online em abordagem existencial-humanista. Além da home (apresentação, situações de atendimento, processo, FAQ e contato), inclui um cartão de visita digital (`/bio`) com botão para salvar o contato direto na agenda do celular.

Site no ar: **https://jamilly-ferreira.vercel.app**

## Destaques

- SEO centralizado em `composables/useSeo.js`: título, descrição, canonical, Open Graph, Twitter Card e JSON-LD aplicados de forma consistente em cada página, com opção de `noindex` por rota.
- Grafo JSON-LD (schema.org) com `Person`, `Psychologist`/`ProfessionalService`, `WebSite`, `FAQPage` e `BreadcrumbList` interligados por `@id` (`helpers/schema.js`), incluindo credencial profissional (CRP) e área de atendimento.
- Rotas server-side geradas dinamicamente a partir de uma única fonte de dados (`helpers/site.js`): `sitemap.xml`, `robots.txt` (com bloqueio automático de ambientes de preview da Vercel), `llms.txt` e `llms-full.txt` (conteúdo do site em markdown para agentes de IA) e um `.vcf` (vCard) para o botão "salvar contato" da página `/bio`.
- Animações de entrada ao rolar a página com GSAP + ScrollTrigger (diretiva `v-revelar`, com variante `.filhos` para stagger e `.subtil` para deslocamento menor), respeitando `prefers-reduced-motion`.
- Acessibilidade: viewport sem bloqueio de zoom (WCAG 1.4.4) e prerender configurado para as rotas principais, reduzindo o tempo até o HTML útil para crawlers.
- Design tokens centralizados em SASS (`assets/css/variaveis.sass`) com paleta de cores e escala tipográfica fluida (`clamp()`) como variáveis CSS.

## Stack

- [Nuxt 3](https://nuxt.com/) (Vue 3, Vue Router) com SSR e prerender de rotas selecionadas
- SASS indentado (`sass-embedded`) como pré-processador de estilos
- [GSAP](https://gsap.com/) + ScrollTrigger para animações
- [Pinia](https://pinia.vuejs.org/) para estado global
- [@nuxt/image](https://image.nuxt.com/) (módulo configurado no projeto)
- [@edusites/icons](https://www.npmjs.com/package/@edusites/icons) como biblioteca de ícones/SVGs
- Nitro server routes (sitemap, robots, llms.txt, vCard)
- pnpm como gerenciador de pacotes

## Estrutura

```
assets/css/        tokens (variáveis), fontes, normalize, animações, scrollbar
components/global/   header, footer, elementos de UI, folhagem/onda decorativas
components/pages/    seções da home, bio e páginas de documentos
composables/         useSeo (meta tags + JSON-LD por página)
helpers/              dados do negócio, schema.js (JSON-LD), FAQ, textos
pages/                home, bio, instagram, política e termos
server/routes/        sitemap.xml, robots.txt, llms.txt, llms-full.txt, vCard
server/utils/         lista de páginas usada pelo sitemap e llms.txt
layouts/               layout base (nav + main + footer)
plugins/               animações (GSAP/ScrollTrigger), ícones, emitter, cliente HTTP
public/                favicons, fontes, ícones, imagens e manifest
```

## Rodando localmente

Projeto usa pnpm (há `pnpm-lock.yaml` no repositório). A URL do site é lida de `NUXT_PUBLIC_SITE_URL` (ver `.env.example`), com fallback definido em `nuxt.config.ts`.

```bash
pnpm install

# ambiente de desenvolvimento
pnpm dev

# build de produção
pnpm build

# preview do build de produção
pnpm preview
```

---

Desenvolvido por [Gustavo Bernardi](https://github.com/guubernardi).
