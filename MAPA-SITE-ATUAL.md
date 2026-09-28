# Mapa do site atual — kisscunha.com.br (Wix Studio)

Mapeado em 28/09/2026. Página única (home). Altura ~7.100px no desktop.

## Identidade
- **Cliente:** Dra. Kiss Cunha — enfermeira esteta. "Estética Avançada & Terapias Manuais".
- **Title:** Kiss Cunha | Terapias manuais e Estética Avançada
- **Contato:** WhatsApp +55 (11) 91480-1043 · dra.kisscunha@gmail.com
- **CTA padrão:** "Agende uma Consulta" → `https://wa.me/5511914801043?text=Olá Dra. Kiss, tudo bem, gostaria de agendar uma consulta!`
- **Logo:** monograma "K" em círculo, traço fino (dourado no fundo escuro, ameixa no fundo claro).

## Paleta (amostrada)
| Papel | Cor |
|---|---|
| Ameixa (fundos escuros, títulos) | `#472A37` |
| Dourado/champanhe (títulos no escuro, botões) | `#F1CF97` |
| Fundo claro | `#F5F5F5` |
| Texto | `#000000` / `#323232` |

Fotos recebem véu ameixa translúcido (`rgba(71,42,55,.5)`).

## Tipografia
Títulos em sans condensada bold, caixa alta (aparenta **Barlow Condensed**). Corpo em Barlow/Helvetica light. Fontes do Wix são uploads customizados (`wfont_…`), então os nomes exatos não aparecem.

## Estrutura (ordem)
1. **Header:** logo + menu Home / Blog / Contato.
2. **Hero:** "UM NOVO OLHAR SOBRE A SUA **BELEZA NATURAL**" · sub "Revitalize sua beleza e recarregue suas energias" · "Oferecemos cuidados à saúde, procedimentos estéticos avançados e a oportunidade de desfrutar do nosso spa integrativo" · CTA.
3. **Procedimentos:** "CONHEÇA OS NOSSOS **PROCEDIMENTOS**". São 3 cards de foto com véu ameixa e título dourado; clicar mostra o texto (flip/expande):
   - Massagens Estéticas e Terapêuticas
   - Harmonização Facial (preenchedores, toxina botulínica, bioestimuladores)
   - Harmonização Corporal (bioestimuladores de colágeno, enzimas lipolíticas, radiofrequência, ultrassom)
4. **FAQ (acordeão):** "TIRE SUAS DÚVIDAS SOBRE **ESTÉTICA AVANÇADA**", com 5 perguntas:
   - Quanto tempo dura o efeito do botox e dos preenchedores (botox dura 3–6 meses; ácido hialurônico, 6 meses a 2 anos)
   - Como funciona a consulta (anamnese, avaliação facial e corporal, equipe, pós-procedimento)
   - Como saber se sou candidato adequado (4 critérios)
   - Diferença da harmonização feita por enfermeira esteta
   - Riscos e benefícios do botox e do ácido hialurônico (listas longas)
   - Seguido de CTA.
5. **Banner:** "SUA AUTOESTIMA EM PRIMEIRO LUGAR, SEMPRE." (foto de atendimento + véu ameixa, texto dourado).
6. **Sobre:** "Conheça **DRA. KISS CUNHA** — Referência em Estética Avançada". São 4 parágrafos em 1ª pessoa, foto recortada à direita e CTA.
7. **Footer (ameixa):** logo, nome, tagline, menu, contatos, crédito "Sttudio11 Web Design". Textura de pincel branca na borda de cima.

O texto integral de cada seção está no DOM e é fácil de reextrair.

## Problemas encontrados
- **Blog** (`/blank`) está vazio e o slug ficou como padrão do Wix.
- **Ícones sociais** apontam para as contas do **Wix** (instagram.com/wix, etc.), não para as da cliente.
- "Contato" no menu leva à home, sem âncora.
- A pergunta do FAQ diz "DR KISS CUNHA" (sem o "A").
- O FAQ de riscos é longo demais para acordeão e rende melhor em página ou post próprio.
- O hero usa imagens pequenas (HERO BANNERS 563×2500, recortes 160×89).
- Não há endereço, horário, Instagram real nem depoimentos.

## Imagens (static.wixstatic.com/media/…)
- `c41eef_2ebfa924…~mv2.png` (994×994), foto da Dra. / logo
- `c41eef_a3b3afaf…~mv2.jpg`, HERO BANNERS
- `c41eef_6b66ff88…~mv2.jpg` (649×1024), foto de procedimento
- `c41eef_813b4d6d…`, `c41eef_4c107715…`, `c41eef_e627f7a8…`, fotos dos cards
- `c41eef_5d29455d…~mv2.jpg`, "Banner Vermelho"
- `c41eef_41c95c66…~mv2.jpg`, IMG_9442
