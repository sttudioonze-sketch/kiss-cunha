# Projeto — Site Dra. Kiss Cunha

Estado em 29/09/2026. Site estático (HTML, CSS e JS, sem build), publicado pelo GitHub Pages.

## Links
- Site: https://sttudioonze-sketch.github.io/kiss-cunha/
- Lista de links (bio): https://sttudioonze-sketch.github.io/kiss-cunha/lista.html
- Guia secreto de terapias manuais: https://sttudioonze-sketch.github.io/kiss-cunha/guia-terapias-s8estc/ (fora do menu e do Google, com `noindex`)
- Qualquer página em outro idioma: acrescente `?lang=en` ou `?lang=es` ao link
- Repositório: https://github.com/sttudioonze-sketch/kiss-cunha (público; o push funciona daqui porque o login está no Keychain)

## Arquivos
| Arquivo | O que é |
|---|---|
| `index.html` | Site: hero, diferenciais, sobre, procedimentos, técnicas, frase, FAQ, contato |
| `lista.html` | Link na bio: agenda, curso, especialidades |
| `guia-terapias-s8estc/index.html` | Guia de terapias manuais (8 massagens, Thai, empresas) + PDF para baixar |
| `css/site.css` | Base de tudo: paleta, glass, botões dourados, rodapé, efeitos |
| `css/lista.css`, `css/guia.css` | Ajustes próprios de cada página |
| `js/site.js` | Menu, FAQ, botão flutuante |
| `js/efeitos.js` | Entrada ao rolar, luz no cursor, parallax, alinhamento da hero |
| `js/i18n.js` | Traduções EN/ES e mensagens do WhatsApp |
| `TEXTOS.md` | Textos originais do Wix e a copy revisada |
| `MAPA-SITE-ATUAL.md` | Mapeamento do site antigo no Wix |
| `originais/` | Fotos em alta, PDF, docx e geradores das capas (não vai para o GitHub) |

## Identidade
- Paleta: noir `#121213`, charcoal `#2F2F2E`, brass `#BFA26F`, soft grey `#D3D3CF`, off-white `#FAFAF9`
- Fontes: Six Caps (nomes gigantes em dourado), Cormorant Garamond (títulos), Jost (texto)
- Estilo glass em cards e menu; botões de agendar em vidro dourado (`.btn-ouro`)
- Nome atrás da especialista: foto original de fundo + recorte por cima (recorte feito com o Vision do macOS)

## Como atualizar
1. **Texto em português:** se o mesmo texto existir em `js/i18n.js`, atualize a chave lá também. Senão, ele fica em português nas outras línguas.
2. **Envio:** a cada envio, suba o número `?v=` dos links de CSS/JS nas 3 páginas. O GitHub Pages guarda cache por 10 minutos.
3. **Capas de WhatsApp:** ao trocar uma capa, use um nome de arquivo novo, porque o WhatsApp guarda a prévia antiga.
4. **Agenda da lista:** edite os itens em `lista.html`, no trecho marcado "Para atualizar a agenda".

## Pendências
- Agenda de outubro em diante (a lista ainda mostra agosto e setembro)
- Confirmar o ano do curso de 31 de outubro
- A Dra. Kiss revisar as descrições das técnicas e os textos do guia (conteúdo de saúde)
- Revisão do inglês e do espanhol por alguém fluente
- Instagram (@dra.kisscunha) e endereço em Porto Alegre: já estão no guia; falta decidir se entram no site e na lista
- Domínio `kisscunha.com.br`: apontar para o GitHub Pages e trocar as URLs de `og:image`
- Apagar o token do GitHub que ficou exposto no Terminal
