// vCard servido em /jamilly-ferreira.vcf, usado pelo botão "Salvar meu contato"
// da página /bio. É o que transforma o cartão digital em contato de verdade:
// o visitante toca uma vez e nome, telefone e e-mail entram na agenda.
//
// Versão 3.0 de propósito: a 4.0 tem suporte irregular no Android e em apps de
// agenda mais antigos, e aqui compatibilidade importa mais que modernidade.

import { negocio, urlAbsoluta } from '../../helpers/site.js'

/** Escapa os caracteres que o formato vCard trata como estrutura. */
function esc(valor = '') {
  return String(valor)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
}

export default defineEventHandler((event) => {
  const base = useRuntimeConfig(event).public.siteUrl.replace(/\/$/, '')

  // O padrão pede CRLF entre as linhas; LF sozinho quebra em alguns leitores.
  const linhas = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc('Medeiros')};${esc('Jamilly Ferreira de')};;;`,
    `FN:${esc(negocio.nomeCompleto)}`,
    `TITLE:${esc(negocio.cargo)}`,
    `ROLE:${esc(`${negocio.cargo} · CRP ${negocio.crp}`)}`,
    `TEL;TYPE=CELL,VOICE:+${negocio.whatsapp}`,
    `EMAIL;TYPE=INTERNET,PREF:${esc(negocio.email)}`,
    `URL:${base}`,
    `ADR;TYPE=WORK:;;;${esc(negocio.cidade)};${esc(negocio.estadoSigla)};;${esc(negocio.pais)}`,
    `NOTE:${esc(
      `Psicoterapia online em abordagem ${negocio.abordagem.toLowerCase()}. Sessões de 50 minutos por videochamada, para todo o Brasil. CRP ${negocio.crp}.`
    )}`,
    `PHOTO;VALUE=URI:${urlAbsoluta('/images/foto-jamilly.jpeg', base)}`,
    `REV:${new Date().toISOString()}`,
    'END:VCARD'
  ]

  setHeader(event, 'content-type', 'text/vcard; charset=utf-8')
  setHeader(event, 'content-disposition', 'attachment; filename="jamilly-ferreira.vcf"')
  setHeader(event, 'cache-control', 'public, max-age=3600')

  return linhas.join('\r\n') + '\r\n'
})
