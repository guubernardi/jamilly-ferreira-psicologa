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
    index/SectionProcesso.vue # -> <IndexSectionProcesso>
    index/SectionSobre.vue  # -> <IndexSectionSobre>
    index/SectionComoFunciona.vue # -> <IndexSectionComoFunciona>
    index/SectionFaq.vue    # -> <IndexSectionFaq> (accordion interativo)
    index/SectionContato.vue # -> <IndexSectionContato> (CTA final: WhatsApp + Instagram)
assets/css/
  variaveis.sass            # tokens (cores, fontes, escala de fonte) em :root
  fonts.sass                # @font-face Figtree (Pacifico vem do Google Fonts no app.vue)
  index.sass                # @use de todos os css base
plugins/edusites-icons.js   # registra <SvgIcone> global
public/images/              # logo.png (logo completa), jamilly-header.png
public/imagens/             # jamilly.png (hero), jamilly-sentada.png (Sobre mim),
                            # ornamento-sobre.svg (galho divisor do "SOBRE MIM"), logo-marca.png
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

- **Pronto**: Nav (logo via `public/images/logo.png`; **menu hamburger no mobile**
  ≤1100px — overlay creme em tela cheia, ícone anima p/ "X", trava scroll do body,
  `Teleport to="body"`; **nav flutuante no scroll** (desktop ≥1101px) — pill
  marrom-escuro que desce ao rolar >500px, com nome em Pacifico + ícones sociais +
  links + Agendar; no desktop o nav do topo vira `position: relative` (rola junto) e
  o flutuante assume), Hero, Onda (divisor U),
  Seção "Se encontra nessa situação?" (3 cards + frase-ponte + CTA),
  Seção "O que esse processo pode abrir pra você" (`SectionProcesso.vue` — ilustração
  SVG da semente brotando no centro + 4 balões em órbita com linhas pontilhadas;
  empilha no mobile),
  Seção "Sobre mim" (`SectionSobre.vue` — 2 colunas: foto `jamilly-sentada.png` à
  esquerda em moldura/porta-retrato + acento pêssego deslocado + selo glass "Escuta
  sem julgamento"; à direita título "SOBRE MIM" com ornamento de galho (SVG inline) +
  parágrafo + **assinatura em Pacifico "Jamilly Ferreira"**; empilha no mobile).
  **Decisões:** fundo branco + moldura creme (Figma é creme, mas branco mantém a
  alternância creme↔branco das ondas); **sem botão de CTA** (cliente pediu p/ remover —
  o "Agendar" já aparece muitas vezes; a assinatura fecha a seção),
  Seção "Como funciona o processo terapêutico?" (`SectionComoFunciona.vue` — baseada
  em referência do cliente, adaptada: layout **espelhado** (texto+lista à esquerda,
  foto à direita) p/ diferenciar da Sobre; kicker "O PROCESSO" + título + parágrafo +
  **lista numerada de 3 itens** (ícone em círculo + título + descrição + número
  fantasma) + CTA; foto em moldura **branca** sobre fundo creme (inverso da Sobre) +
  acento de contorno fino + selo glass "Abordagem · Humanista"; empilha no mobile).
  **Placeholder:** reusa `jamilly-sentada.png` (mesma foto da Sobre) — TROCAR por foto
  de atendimento; foto idêntica nas 2 seções fica repetitiva.
  Seção "Perguntas frequentes" (`SectionFaq.vue` — **accordion interativo**: `ref(0)`
  controla qual item está aberto, 1 aberto por vez; animação de altura via grid
  `0fr→1fr`; chevron SVG inline que rotaciona; itens creme sobre seção branca; 6
  perguntas com conteúdo adaptado p/ Jamilly). **Atenção HMR:** componente novo —
  precisa **reiniciar o dev server** p/ a interatividade (hidratação) funcionar.
  Footer (`components/global/footer/Footer.vue` — fundo marrom-escuro + texto creme;
  marca em Pacifico "Jamilly Ferreira" (a logo .png é escura, não usar no escuro);
  tagline + 3 redes sociais (SVG inline: instagram/whatsapp/email) + colunas
  Navegação e Contato + barra inferior com ano dinâmico). **Placeholders:** telefone,
  e-mail, @instagram e CRP são fictícios — substituir pelos dados reais da Jamilly.
  Seção "Vamos conversar / Dê o primeiro passo hoje" (`SectionContato.vue` — CTA final,
  fundo creme: kicker + título + parágrafo + 2 cards: **WhatsApp** (`.acao.destaque`,
  primário marrom, `wa.me` placeholder) e **Instagram** (`.acao.info`, NÃO é link —
  só mostra `@jamillyferreirapsicologa`; a Jamilly ainda vai criar o Insta
  profissional). Resolve os CTAs: todos os "Agendar" agora apontam p/ `#contato`.
- Ordem na home (`index.vue`): Hero → Onda → Situacao → Onda → Processo → Onda → Sobre
  → Onda → ComoFunciona → Onda → Faq → Onda → Contato → Onda(→marrom) → Footer (global).
- **Âncoras das seções (ids únicos)**: Hero=`inicio`, Situacao=`situacao`,
  Processo(benefícios)=`beneficios`, Sobre=`sobre`, ComoFunciona=`processo`,
  Faq=`perguntas`. Nav/footer linkam: Início→`#inicio`, Sobre→`#sobre`,
  Processo→`#processo`, Perguntas→`#perguntas`. `section[id]` tem
  `scroll-margin-top: 100px` (normalize.sass) p/ não esconder sob a nav fixa.
  Obs.: os CTAs "Agendar" ainda apontam p/ `#agendar` (âncora inexistente — ligar
  ao destino real de agendamento depois).
- **Status geral**: home completa (Hero→Contato→Footer). Instagram real = handle
  `@jamillyferreirapsicologa` SEM link (perfil profissional ainda não existe).
  Pendências = **número real do WhatsApp** (hoje `wa.me/5500000000000` placeholder em
  Contato; ícones sociais de nav/footer ainda `href="#"`), CRP real, trocar foto da
  ComoFunciona (hoje reusa `jamilly-sentada`). Depoimentos: **evitar** (restrição do
  Código de Ética do CFP p/ depoimento de paciente).

> Atenção: ao criar um **componente novo**, o HMR do Nuxt às vezes não o registra
> (aparece como custom element não resolvido) e/ou **quebra a hidratação do app
> inteiro** (nada fica interativo — accordion, hamburger etc.). Reinicie o dev server.
> Pegadinha de CSS: `position: fixed` dentro de um ancestral com `backdrop-filter`
> (ex.: a `<nav>`) se ancora nesse ancestral, não na viewport. Overlays full-screen
> (menu mobile) devem usar `<Teleport to="body">`.
- Conteúdo/textos das seções vêm do Figma; o visual dos cards é repaginado (cliente
  não curtiu o design original dos cards).

## Fluxo de trabalho

- Cliente é **muito visual e iterativo** — valida por screenshots. Use o dev server +
  skill `agent-browser` (`screenshot`) pra conferir cada mudança antes de apresentar.
- Sempre fechar o browser (`agent-browser close`) após screenshots.
- Screenshots de trabalho ficam em `.design-ref/` (não versionar).
