# Jamilly Ferreira — Site (Psicóloga)

Landing page para a psicóloga **Jamilly Ferreira de Medeiros**. Estética calma e
acolhedora, paleta terrosa (creme / marrom / pêssego). Base partiu de um
boilerplate Nuxt que foi limpo (workshop "Dominando NuxtJS" removido).

Design de referência (Figma): fileKey `8u12eixIt4NohCl9ZgBcjX`.

## Stack & comandos

- **Nuxt 3** + **Vue 3** (`<script setup>`), SSR ligado
- **SASS (sintaxe indentada `.sass`)** — não usar Tailwind nem CSS-in-JS
- **Pinia** (`stores/`), **@nuxt/image**, **@edusites/icons** (ícones)
- Gerenciador: **pnpm**

```bash
pnpm dev        # desenvolvimento (http://localhost:3000)
pnpm build      # build
pnpm preview    # preview do build
```

## Estrutura

```
app.vue                     # <head> global (metatags, fontes, favicons)
layouts/web.vue             # layout principal: Nav + <slot> + Footer; #tela = bg/fonte global
pages/index.vue             # home — monta as seções e as ondas entre elas
components/
  global/                   # auto-import; nome = caminho com segmentos repetidos colapsados
    nav/Nav.vue             # -> <Nav>
    footer/Footer.vue       # -> <Footer>
    onda/Onda.vue           # -> <Onda>  (divisor em onda entre seções)
    elementos/Botao.vue     # -> <ElementosBotao> (stub)
  pages/
    index/SectionHero.vue   # -> <IndexSectionHero>
    index/SectionSituacao.vue # -> <IndexSectionSituacao>
assets/css/
  variaveis.sass            # tokens (cores, fontes, escala de fonte) em :root
  fonts.sass                # @font-face Figtree (Pacifico vem do Google Fonts no app.vue)
  index.sass                # @use de todos os css base
plugins/edusites-icons.js   # registra <SvgIcone> global
public/images/              # logo.png (logo completa), jamilly-header.png
public/imagens/             # jamilly.png (foto recortada do hero), logo-marca.png
stores/                     # Pinia
```

> Naming de componente (pathPrefix do Nuxt): segmentos **idênticos consecutivos**
> são colapsados. `nav/Nav` → `Nav`; `onda/Onda` → `Onda`; mas
> `index/SectionHero` → `IndexSectionHero` e `elementos/Botao` → `ElementosBotao`.

## Design system (tokens em `assets/css/variaveis.sass`)

Cores (CSS vars, usar sempre `var(--…)`):

| Token | Valor | Uso |
|---|---|---|
| `--cor-fundo` / `--cor-creme` | `#F7F0E8` | fundo creme padrão (hero, círculo de ícone) |
| `--cor-branco` | `#FFFFFF` | fundo de seções alternadas, cards |
| `--cor-marrom-escuro` | `#463830` | títulos / texto principal |
| `--cor-marrom` | `#7A4E2D` | links, destaques |
| `--cor-marrom-botao` | `#825C40` | botões |
| `--cor-marrom-botao-hover` | `#6E4D35` | hover de botão |
| `--cor-bege` | `#CEB394` | selo, kicker |
| `--cor-pessego` | `#DDB69E` | blob do hero, detalhes |
| `--cor-vidro` | `rgba(249,249,249,0.68)` | (badges usam glass próprio) |

**Layout**: `--container: 1400px` = trilho de conteúdo compartilhado. Todas as
seções alinham o conteúdo principal a esse `max-width` (nav, hero `.conteudo`,
cards) + padding lateral `40px`. Larguras menores (parágrafos centrados ~640px,
`.orbita` 1000px) são intencionais p/ legibilidade/composição, não quebram o grid.

Fontes (CSS vars): `--light` (figtree-light, texto), `--bold` (figtree-semibold),
`--extrabold` (figtree-bold, destaques/títulos bold), `--script` (Pacifico).
Tamanhos fluidos `--f0`…`--f10` disponíveis (mas seções usam `clamp()` direto).

## Ícones — `@edusites/icons`

Global, sem import. Cor preta por padrão; customiza `cor` e `tamanho`.

```vue
<SvgIcone nome="agenda" cor="var(--cor-branco)" :tamanho="22" />
```

Ícones em uso: `agenda`, `cerebro`, `cerebro-ia`, `usuario`, `celular`, `cadeado`,
`coracao`, `pessoas-grupo`, `visao-cards`, `conversa`. (Lib tem 570 ícones em PT;
`buscarIcones('termo')` para procurar.)

## Padrões visuais estabelecidos

- **Transição entre seções = onda em "U"**: `<Onda cor="<cor-da-secao-de-baixo>" />`
  entre duas seções. As seções **alternam de cor** (creme ↔ branco) pra onda
  aparecer. Curva simétrica (bowl), não em S.
- **Hover**: `transition: all 0.3s`. **Sem `translateY`** em botões/links (preferência
  do cliente). Links da nav: só muda cor (sem sublinhado/`::after`). Cards podem ter
  efeito de sombra/escala em pseudo-elementos.
- **Botões**: pill (`border-radius: 40px`), fundo `--cor-marrom-botao`, texto branco,
  ícone à esquerda.
- **Tags/badges do hero**: glassmorphism (fundo translúcido + `backdrop-filter: blur`
  + borda clara + brilho `inset`).
- **Blob do hero** (`SectionHero.vue`): retângulo arredondado **geométrico** (NÃO
  orgânico/ondulado). Cantos topo-dir e baixo-esq com raio grande; topo-esq e
  baixo-dir "quebrados" por `.recorte` (divs na cor do fundo). Foto (`.foto`) sobe
  além do topo do blob (cabeça "vaza").

## Status

- **Pronto**: Nav (logo via `public/images/logo.png`), Hero, Onda (divisor U),
  Seção "Se encontra nessa situação?" (3 cards + frase-ponte + CTA),
  Seção "O que esse processo pode abrir pra você" (`SectionProcesso.vue` — ilustração
  SVG da semente brotando no centro + 4 balões em órbita com linhas pontilhadas;
  empilha no mobile).
- Ordem na home (`index.vue`): Hero → Onda → Situacao → Onda → Processo.
- **Próximas seções (Figma)**: "Sobre mim".

> Atenção: ao criar um **componente novo**, o HMR do Nuxt às vezes não o registra
> (aparece como custom element não resolvido). Reinicie o dev server nesse caso.
- Conteúdo/textos das seções vêm do Figma; o visual dos cards é repaginado (cliente
  não curtiu o design original dos cards).

## Fluxo de trabalho

- Cliente é **muito visual e iterativo** — valida por screenshots. Use o dev server +
  skill `agent-browser` (`screenshot`) pra conferir cada mudança antes de apresentar.
- Sempre fechar o browser (`agent-browser close`) após screenshots.
- Screenshots de trabalho ficam em `.design-ref/` (não versionar).
