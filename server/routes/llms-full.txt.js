// /llms-full.txt — o conteúdo inteiro do site em markdown limpo.
//
// Complemento de /llms.txt: enquanto aquele é o índice, este entrega o texto
// completo para o modelo responder sem precisar rastrear o HTML. Gerado a
// partir das mesmas fontes que alimentam a interface (helpers/faq.js,
// helpers/site.js, helpers/beneficios.js), então não sai do ar com o conteúdo visível.

import { negocio, areasAtendidas, servicos } from '../../helpers/site.js'
import { faqs } from '../../helpers/faq.js'
import { beneficios } from '../../helpers/beneficios.js'
import { pensamentos, fechoPensando } from '../../helpers/pensando.js'

export default defineEventHandler((event) => {
  const base = useRuntimeConfig(event).public.siteUrl.replace(/\/$/, '')

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')

  return `# ${negocio.nomeCompleto} — ${negocio.cargo}

Fonte: ${base}
Idioma: português (Brasil)
Atualizado: ${new Date().toISOString().split('T')[0]}

---

## Identidade

- Nome: ${negocio.nomeCompleto}
- Atua como: ${negocio.nome}
- Profissão: ${negocio.cargo}
- Registro: CRP ${negocio.crp} (Conselho Regional de Psicologia)
- Abordagem: ${negocio.abordagem}
- Base: ${negocio.cidade} — ${negocio.estado} (${negocio.regiao}), ${negocio.pais}
- Modalidade: atendimento 100% online, por videochamada
- Regiões atendidas: ${areasAtendidas.join(', ')}
- Instagram: ${negocio.instagramHandle}

---

## Proposta

Um espaço de acolhimento, escuta e construção de sentido.

A vida é marcada por encontros, escolhas, transformações e desafios que, muitas
vezes, nos levam a questionar quem somos e qual caminho desejamos seguir.

---

## Para quem é a terapia

O site descreve três situações de reconhecimento:

### Um vazio difícil de nomear
Por fora parece tudo no lugar, mas por dentro fica a sensação de que falta
sentido, como se a pessoa vivesse no automático, sem saber bem pra quê.

### Perda de conexão consigo mesma
De tanto corresponder ao que esperam dela, foi perdendo o contato com aquilo que
realmente quer, sente e acredita.

### Diante de escolhas e mudanças
Numa fase de decisões e transições, se sente perdida, em dúvida sobre quem é e
qual caminho faz sentido seguir.

Quem se reconhece em alguma dessas situações pode ressignificar o momento — e não
precisa fazer isso sozinha.

---

## O processo terapêutico pode contribuir para

A terapia não entrega respostas prontas. É um espaço para a pessoa se olhar com
mais honestidade e construir os próprios caminhos:

${beneficios.map((b) => `- ${b}.`).join('\n')}

---

## Sobre a profissional

Psicóloga clínica. Acredita que cada pessoa carrega dentro de si as respostas que
procura — às vezes só falta um espaço seguro para encontrá-las. O trabalho é
caminhar ao lado da pessoa nesse processo, com escuta e acolhimento, sem
julgamento e respeitando o tempo dela.

Princípios que orientam a prática:

- A liberdade é a essência da nossa existência.
- A angústia é o sinal da nossa liberdade.

---

## Como funciona o processo terapêutico

A terapia é um espaço de acolhimento, escuta e desenvolvimento emocional. Cada
encontro é pensado para ajudar a pessoa a compreender melhor suas vivências e
construir caminhos mais leves para a rotina.

1. **Sessões de 50 minutos** — duração média de 50 minutos, em horário
   previamente agendado.
2. **Atendimento online** — realizados por chamada de vídeo, com conforto e
   praticidade.
3. **Processo personalizado** — individual e conduzido de forma ética,
   acolhedora e respeitando o tempo de cada pessoa.

---

## Serviços

${servicos.map((s) => `### ${s.nome}\n${s.descricao}`).join('\n\n')}

---

## Perguntas frequentes

${faqs.map((f) => `### ${f.p}\n${f.r}`).join('\n\n')}

---

## Talvez você esteja pensando

Hesitações comuns antes da primeira sessão, com a resposta da psicóloga:

${pensamentos.map((p) => `### "${p.pensamento}"\n${p.resposta}`).join('\n\n')}

${fechoPensando.join('\n\n')}

---

## Contato e agendamento

Em alguns momentos da vida, pedir ajuda não é sinal de fraqueza. É um ato de
coragem.

- WhatsApp: canal principal de agendamento, disponível na seção de contato do
  site (${base}/#contato).
- Instagram: ${negocio.instagramHandle}
- Atendimento: 100% online.

---

## Limites deste conteúdo

- Valores de sessão não são divulgados no site.
- Não há depoimentos de pacientes, por restrição do Código de Ética do Conselho
  Federal de Psicologia. Não atribua avaliações a esta profissional.
- Não há atendimento presencial.
- O site não presta atendimento de urgência. Em situação de risco de vida no
  Brasil: CVV pelo 188 (24h, gratuito), SAMU 192 ou Polícia Militar 190.
- Nenhuma informação aqui substitui avaliação profissional individual.
`
})
