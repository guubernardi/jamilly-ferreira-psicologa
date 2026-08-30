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
pages/bio.vue               # /bio — cartão de visita digital (sem Nav/Footer)
components/
  global/                   # auto-import; nome = caminho com segmentos repetidos colapsados
    nav/Nav.vue             # -> <Nav>
    footer/Footer.vue       # -> <Footer>
    onda/Onda.vue           # -> <Onda>  (divisor em onda entre seções)
    elementos/Botao.vue     # -> <ElementosBotao> (stub)
    psi/Psi.vue             # -> <Psi> (o Ψ da psicologia, traço monolinha)
  pages/
    index/SectionHero.vue   # -> <IndexSectionHero>
    index/SectionSituacao.vue # -> <IndexSectionSituacao>
    index/SectionProcesso.vue # -> <IndexSectionProcesso>
    index/SectionSobre.vue  # -> <IndexSectionSobre>
    index/SectionComoFunciona.vue # -> <IndexSectionComoFunciona>
    index/SectionFaq.vue    # -> <IndexSectionFaq> (accordion interativo)
    index/SectionPensando.vue # -> <IndexSectionPensando> (objeções antes da 1a sessão)
    index/SectionContato.vue # -> <IndexSectionContato> (CTA final: WhatsApp + Instagram)
helpers/
  site.js                   # FONTE ÚNICA: nome, CRP, WhatsApp, e-mail, cidade, serviços, termos
  faq.js                    # perguntas do FAQ (usadas pela seção, pelo JSON-LD e pelo llms-full)
  beneficios.js             # os 11 itens do "pode contribuir para" (seção + paginas.js + llms-full)
  pensando.js               # "Talvez você esteja pensando…": 5 hesitações + fecho
  schema.js                 # construtores de JSON-LD (schema.org)
composables/useSeo.js       # useSeo() = title + description + canonical + OG + Twitter + JSON-LD
server/
  utils/paginas.js          # páginas e âncoras públicas (sitemap + llms.txt)
  routes/robots.txt.js      # robots dinâmico (bloqueia previews da Vercel)
  routes/sitemap.xml.js     # sitemap dinâmico
  routes/llms.txt.js        # índice p/ assistentes de IA (padrão llmstxt.org)
  routes/llms-full.txt.js   # conteúdo completo do site em markdown
  routes/jamilly-ferreira.vcf.js # vCard do botão "Salvar meu contato" do /bio
error.vue                   # página 404/erro (noindex, com Nav e Footer)
assets/css/
  variaveis.sass            # tokens (cores, fontes, escala de fonte) em :root
  fonts.sass                # @font-face Figtree (Pacifico vem do Google Fonts no app.vue)
  index.sass                # @use de todos os css base
plugins/edusites-icons.js   # registra <SvgIcone> global
public/images/              # logo.png (logo completa), jamilly-header.png,
                            # foto-jamilly.jpeg (retrato do /bio e do vCard),
                            # sobre-mim-jamilly.jpeg (Sobre mim)
public/imagens/             # jamilly.png (hero), jamilly-sentada.png (ComoFunciona),
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
- **Sem palavra órfã**: `normalize.sass` aplica `text-wrap: balance` em títulos e
  `text-wrap: pretty` em `p`/`li`, pra nenhuma linha terminar com uma palavra
  solta. Em rótulo curto de card, repetir `text-wrap: balance` local.
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
  Seção "O processo terapêutico pode contribuir para:" (`SectionProcesso.vue` —
  composição toda no eixo central: cabeçalho, ilustração SVG da semente brotando
  como divisor, e os 11 itens de `helpers/beneficios.js` em cards claros. A lista
  é **flex-wrap com `justify-content: center`**, não grid: 11 não fecha nenhuma
  grade, e no flex a última linha incompleta centraliza em vez de deixar buraco
  no canto. 3 por linha no desktop, 2 até 1100px, 1 até 700px),
  Seção "Sobre mim" (`SectionSobre.vue` — 2 colunas: foto `sobre-mim-jamilly.jpeg` à
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
  **Placeholder:** usa `jamilly-sentada.png` — TROCAR por foto de atendimento.
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
  Seção "Talvez você esteja pensando…" (`SectionPensando.vue` — texto da Jamilly,
  em `helpers/pensando.js`: 5 hesitações antes da primeira sessão + um fecho de 2
  frases. Cada item é um **card de duas vozes**: à esquerda o pensamento em itálico
  marrom com aspa decorativa em Pacifico, à direita a resposta, separadas por um
  filete pêssego vertical (vira régua horizontal ao empilhar em ≤900px). Formato
  escolhido pra não repetir nem o accordion do FAQ nem a grade de chips do Processo,
  e porque em 2 colunas a seção fica com metade da altura. Fundo creme, colada no
  Contato),
  Seção "Vamos conversar / Dê o primeiro passo hoje" (`SectionContato.vue` — CTA final,
  fundo creme: kicker + título + parágrafo + 2 cards: **WhatsApp** (`.acao.destaque`,
  primário marrom) e **Instagram** (`.acao.info`, aponta para o perfil real).
  Resolve os CTAs: todos os "Agendar" agora apontam p/ `#contato`.
- Ordem na home (`index.vue`): Hero → Onda → Situacao → Onda → Processo → Onda → Sobre
  → Onda → ComoFunciona → Onda → Faq → Onda → **Pensando** → Contato → Onda(→marrom)
  → Footer (global). **Pensando e Contato não têm onda entre si**: as duas são creme
  e formam um movimento único de fechamento, o fecho de uma emenda no CTA da outra.
- **Âncoras das seções (ids únicos)**: Hero=`inicio`, Situacao=`situacao`,
  Processo(benefícios)=`beneficios`, Sobre=`sobre`, ComoFunciona=`processo`,
  Faq=`perguntas`, Pensando=`pensando`. Nav/footer linkam: Início→`#inicio`, Sobre→`#sobre`,
  Processo→`#processo`, Perguntas→`#perguntas`. `section[id]` tem
  `scroll-margin-top: 100px` (normalize.sass) p/ não esconder sob a nav fixa.
- **Status geral**: home completa (Hero→Contato→Footer) + SEO técnico completo.
  **Todos os dados reais já preenchidos** em `helpers/site.js`: WhatsApp, telefone,
  e-mail, CRP (06/237828) e Instagram (`@jamillyferreira.psico`, perfil no ar,
  já no `sameAs` do JSON-LD). Pendências de
  mídia: trocar a foto da ComoFunciona (hoje usa `jamilly-sentada`) e otimizar
  os PNGs pesados (`jamilly.png` 818KB, `jamilly-sentada.png` 1MB → WebP).
  A `sobre-mim-jamilly.jpeg` veio em 367x905 e ocupa ~372px de largura: no 1x
  passa, no 2x fica levemente macia. Pedir o original em resolução maior.
  Depoimentos: **evitar** (restrição do Código de Ética do CFP p/ depoimento de
  paciente) — o `llms.txt` já instrui as IAs a não inventarem avaliações.

> Atenção: ao criar um **componente novo**, o HMR do Nuxt às vezes não o registra
> (aparece como custom element não resolvido) e/ou **quebra a hidratação do app
> inteiro** (nada fica interativo — accordion, hamburger etc.). Reinicie o dev server.
> Pegadinha de CSS: `position: fixed` dentro de um ancestral com `backdrop-filter`
> (ex.: a `<nav>`) se ancora nesse ancestral, não na viewport. Overlays full-screen
> (menu mobile) devem usar `<Teleport to="body">`.
- Conteúdo/textos das seções vêm do Figma; o visual dos cards é repaginado (cliente
  não curtiu o design original dos cards).

## SEO

**Regra de ouro: dado do negócio só existe em `helpers/site.js`.** CRP, WhatsApp,
e-mail, cidade, Instagram e serviços saem dali para o rodapé, o Nav, a seção de
Contato, o JSON-LD, o `llms.txt` e o `sitemap.xml`. Nunca escreva um telefone ou
um `wa.me/...` direto no template.

**Domínio**: `https://jamillyferreirapsicologa.com.br`, vindo de
`runtimeConfig.public.siteUrl` (env `NUXT_PUBLIC_SITE_URL`, ver `.env.example`).
Canonical, `og:url`, sitemap, robots, JSON-LD e llms.txt derivam dele — não há
URL escrita à mão.

**Toda página nova** deve chamar `useSeo({ caminho, titulo, descricao })` no
`<script setup>` (nada de `useHead` com título solto) e ser acrescentada em
`server/utils/paginas.js`, senão fica fora do sitemap e do llms.txt.

**JSON-LD** (`helpers/schema.js`): grafo global no `app.vue` com três entidades
ligadas por `@id` — `#psicologa` (Psychologist + ProfessionalService, com
areaServed e catálogo de serviços), `#jamilly` (Person, com credencial CRP) e
`#website`. Cada página soma seu `WebPage`; a home vira também `FAQPage`, e as
páginas de documento ganham `BreadcrumbList`. Validar em
search.google.com/test/rich-results.

**Arquivos para IA**: `/llms.txt` (índice, padrão llmstxt.org) e `/llms-full.txt`
(site inteiro em markdown). Ambos gerados das mesmas fontes da interface, então
não desatualizam. Contêm restrições explícitas para o modelo não inventar: nada
de preço, nada de depoimento, atendimento só online, e o CVV 188 para emergência.
O `robots.txt` libera os crawlers de IA (GPTBot, ClaudeBot, PerplexityBot,
Google-Extended etc.) de propósito — a intenção é ser citado como fonte.

**Preview da Vercel**: `robots.txt` devolve `Disallow: /` quando
`VERCEL_ENV !== 'production'`, para a URL `*.vercel.app` não ser indexada e
competir com o site real como conteúdo duplicado.

**Favicons** (`public/favicons/`): gerados do monograma "JM" recortado de
`public/imagens/logo-marca.png` (bbox `x 617,y 199,185×189` — o arquivo **já tem
canal alfa**, o fundo é transparente, não branco). Fundo creme `#F7F0E8`, marca a
78% do quadro; a versão *maskable* usa 52% por causa do recorte circular do
Android. Como a tinta original é bronze claro (`#9d8475`) e cobre só ~9% do
quadro, nos tamanhos **≤48px a marca é repintada no marrom `#463830`** — no
bronze ela sumia na aba. A 16px ainda é uma mancha suave: traço de script fino
não é representável nesse tamanho, e engrossar por gama fecha o quadro todo.
Não existe `safari-pinned-tab.svg` (exigiria vetor monocromático; o Safari cai
no PNG normal).

**Cuidados**:
- `helpers/pensando.js` alimenta a seção, a âncora `#pensando` e o `/llms-full.txt`.
  As 5 hesitações **não entram no `FAQPage`** do JSON-LD de propósito: o invariante
  é "o que está no FAQPage é exatamente o que a seção de FAQ mostra". Se um dia
  quiser incluí-las, o certo é um segundo `FAQPage` ou juntar as duas listas na
  seção visível, nunca só no schema.
- Os 11 benefícios saem de `helpers/beneficios.js` e alimentam a seção, o resumo
  da âncora `#beneficios` em `server/utils/paginas.js` (derivado por código, não
  copiado) e o `/llms-full.txt`. Mesma lógica do FAQ: uma lista só.
- O FAQ visível e o `FAQPage` do JSON-LD leem o mesmo `helpers/faq.js`. Se algum
  dia divergirem, é penalidade — não duplique a lista.
- A `og:image` é `/imagens/compartilhar.jpg` (1200×630), montada a partir do
  lockup de `logo-marca.png` + a foto do hero sobre blob pêssego. Se trocar,
  atualize `marca.compartilhar`, as dimensões **e** `compartilharTipo` em
  `helpers/site.js`.
- **As fontes da marca não renderizam por ferramenta**: `.woff` não carrega nem
  via `fontfile` do Pango/sharp nem via `@font-face` embutido em SVG — os dois
  caem silenciosamente na fonte padrão *sem erro* (compare larguras para
  detectar). Por isso peças geradas fora do navegador usam o lockup do logo como
  arte; só texto de apoio sai em fonte do sistema (Constantia).
- Não travar zoom no viewport (`maximum-scale`) — reprova em acessibilidade.

## Página /bio (cartão de visita digital)

Pedido da Jamilly. **Refeita** sobre uma segunda referência que ela mandou (o
link-in-bio de uma consultora, foto grande no topo + pilha de botões em degradê).
Estrutura:

```
1. capa    -> fundo creme + <Psi> no topo-esquerda + o recorte SEM FUNDO dela
              sangrando pela direita; nome/cargo/CRP em marrom sobre o creme
2. atalhos -> 5 botões: Agendar (WhatsApp), Site, Instagram, E-mail, vCard
3. números -> 50 min / 100% online / CRP
4. quem sou eu -> bloco marrom escuro + botão "Minha abordagem" -> /#sobre
5. dúvidas -> accordion com as 3 primeiras de helpers/faq.js
6. rodapé  -> "Vamos conversar?" + redes + assinatura Pacifico + CRP
```

- `pages/bio.vue`, com `layout: 'default'` (sem Nav e sem Footer: a página **é**
  o cartão, não uma seção do site).
- **A capa é composição, não foto.** O recorte com alfa (`jamilly-recorte.png`,
  feito pelo Gustavo fora do projeto) é o que faz o topo ler como página e não
  como "uma foto colada". O que ele exige:
  - o **véu escuro sumiu**: sobre creme o nome é marrom escuro, não precisa de
    contraste artificial;
  - o **Ψ voltou como `<Psi>`**, no topo-esquerda, que é onde ele estava na parede
    da foto original. Sem ele o recorte perde o "isto é psicologia";
  - o pé do recorte leva `mask-image: linear-gradient(to top, transparent 0%,
    #000 7%)`. Sem isso ela termina numa **linha reta** sobre o creme, porque não
    há troca de cor embaixo pra disfarçar o corte.
- **A capa é toda proporcional, nunca em px.** `.topo` tem `aspect-ratio: 1/0.94`
  e o recorte tem `width: 88%` / `right: -12%` da largura do cartão. Já quebrou
  uma vez por estar em px: com `height: 480px` fixo, em tela estreita ela mantinha
  a largura da tela larga, sangrava pra fora e **o corte caía no meio do cérebro**.
  Em %, a fração dela que aparece é a mesma em qualquer largura, e o corte da
  direita cai sempre na manga.
- **Ψ e nome empilham a partir do topo** (`flex-direction: column`), não ancorados
  embaixo. Não é só estética: a silhueta é bem mais estreita em cima (a borda
  esquerda dela sai de ~290px de largura no peito para ~150px na altura das mãos),
  então texto em cima ganha folga e texto embaixo encosta nela. Com o layout atual
  a menor folga entre o texto e o corpo dela é ~20px.
- **O asset é cortado na linha 800** do PNG já aparado, porque abaixo disso a
  almofada se abre e ocupa a largura inteira. Antes de mexer em qualquer número,
  medir de novo:

  ```bash
  python -c "
  from PIL import Image
  im = Image.open('public/images/jamilly-recorte.png').convert('RGBA')
  im = im.crop(im.getchannel('A').getbbox()); w,h = im.size; a = im.getchannel('A').load()
  for pct in range(0,101,8):
      y = min(h-1, round(h*pct/100))
      esq = next((x for x in range(w) if a[x,y] > 24), None)
      print(pct, y, esq)"
  ```

  Gerar o `.webp` que a página usa (o PNG é só a fonte):

  ```bash
  python -c "
  from PIL import Image
  im = Image.open('public/images/jamilly-recorte.png').convert('RGBA')
  im = im.crop(im.getchannel('A').getbbox())
  im = im.crop((0, 0, im.width, 800))
  im = im.resize((700, round(im.height*700/im.width)), Image.LANCZOS)
  im.save('public/images/jamilly-recorte.webp', 'WEBP', quality=86, method=6)"
  ```

  706KB de PNG viram **42KB de WebP**. O `jamilly-recorte.png` continua em
  `public/` só como fonte para regerar; **nenhuma página o pede**, então ele é
  peso morto no deploy e pode sair de lá quando alguém quiser limpar.
- **Os números da referência não podiam ser copiados.** Lá são de resultado
  ("+1000 alunas", "96% de aprovação"); o Código de Ética do CFP não permite que
  psicóloga anuncie resultado, e não havia dado real. Os três que ficaram são
  verificáveis e saem de `helpers/site.js`. Se pedirem para "colocar números",
  é essa a conversa.
- **Degradê dos atalhos**: cada botão é um `linear-gradient(120deg, --tom, --tom2)`
  e o fim de um encosta no começo do próximo, então a pilha lê como uma rampa só,
  do bege ao marrom escuro. Os tons vão inline no `:style` a partir do array
  `atalhos`. A `--tinta` (cor do texto) troca de escura para creme entre o 2º e o
  3º degrau, que é onde o fundo escurece o bastante: **todos os pares ficam acima
  de 4.5:1**. Mexer num tom sem recalcular o contraste quebra isso.
- **Arte de fundo dos atalhos** (`public/imagens/bio/`): cada botão tem um recorte
  de **objeto** tirado das fotos reais da Jamilly, tonalizado em sépia, sangrando
  pela direita. Nada de banco de imagem, e nenhum recorte mostra o rosto dela (a
  referência usa cena/objeto, não retrato):

  | arquivo | origem | região |
  |---|---|---|
  | `caderno.jpg` | `imagens/jamilly-sentada.png` | `crop=460:140:250:1045` (mãos no caderno) |
  | `livros.jpg` | `imagens/jamilly-sentada.png` | `crop=300:100:0:130` (estante) |
  | `planta.jpg` | `imagens/jamilly-sentada.png` | `crop=248:90:520:230` (folhagem) |
  | `ripado.jpg` | `imagens/jamilly-sentada.png` | `crop=338:110:430:20` (parede de ripas) |
  | `psi.jpg` | `images/jamilly-cerebro.jpeg` | `crop=340:130:45:215` (o Ψ da parede) |

  Gerados com **ffmpeg** (o `sharp` está no `node_modules` mas **sem binário
  nativo compilado** nesta máquina, então `require('sharp')` quebra). Receita:

  ```bash
  TOM="colorchannelmixer=.393:.769:.189:0:.349:.686:.168:0:.272:.534:.131,colorbalance=rm=0.10:gm=0.01:bm=-0.06,eq=saturation=1.05"
  ffmpeg -y -i <origem> -vf "crop=<w>:<h>:<x>:<y>,scale=640:-2,$TOM" -q:v 5 <destino>
  ```

  Todos abaixo de 13KB. A arte entra num `::after` com `z-index: -1` (acima do
  degradê, abaixo do conteúdo) e **máscara** `linear-gradient(90deg, transparent
  46%, #000 95%)`: a imagem só começa a aparecer depois que o texto acabou, então
  o contraste do rótulo continua no tom sólido. Subir a `opacity` do `::after` é
  seguro; mexer no início da máscara não é.
- **Sem fonte nova.** A referência é toda em serifada itálica; aqui os títulos de
  bloco usam Pacifico (`--script`), que já é a voz de display da marca. Não vale
  importar uma quarta família por causa de uma página.
- **Os atalhos internos precisam do componente, não da string.** Em
  `<component :is>`, `'NuxtLink'` como string vira nome de elemento nativo e sai no
  HTML como `<NuxtLink>` literal, que o navegador ignora: dois atalhos ficaram sem
  clicar. O certo é `resolveComponent('NuxtLink')`, guardado numa const.
- O Instagram usa `linkInstagram()`. Com `instagramUrl` preenchido ele aponta pro
  perfil real com `target=_blank`; se um dia voltar a ser `null`, cai sozinho em
  `/instagram` (página que avisa que o perfil está sendo montado). Essa página
  hoje está **órfã**: nada linka pra ela, e ela nunca esteve no sitemap nem no
  llms.txt. O texto dela ficou desatualizado, então ou some ou vira redirect.
- **"Salvar meu contato"** baixa `/jamilly-ferreira.vcf`, gerado em
  `server/routes/jamilly-ferreira.vcf.js` a partir de `helpers/site.js`.
  vCard **3.0** de propósito (a 4.0 tem suporte irregular no Android) e linhas
  separadas por CRLF, como o padrão exige.
- Ícones de `@edusites/icons`: `whatsapp`, `globo`, `instagram`, `envelope-1`,
  `download`, `relogio`, `videochamada`, `certificado`, `seta-direita-fina`.
  Conferir se o nome existe antes de usar, com
  `ls node_modules/@edusites/icons/src/icones/ | grep termo`.
- `public/imagens/bio-capa.jpg` ficou **sem uso** (era o banner da versão antiga).
- Entra no sitemap e no llms.txt via `server/utils/paginas.js`, e no prerender
  via `nuxt.config.ts`. Não fica linkada no Nav: o destino dela é a bio do
  Instagram.

## Fluxo de trabalho

- Cliente é **muito visual e iterativo** — valida por screenshots. Use o dev server +
  skill `agent-browser` (`screenshot`) pra conferir cada mudança antes de apresentar.
- Sempre fechar o browser (`agent-browser close`) após screenshots.
- Screenshots de trabalho ficam em `.design-ref/` (não versionar).
