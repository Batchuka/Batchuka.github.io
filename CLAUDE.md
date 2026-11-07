# CLAUDE.md

@AGENTS.md

## O projeto

Portfólio pessoal do Batchuka (usuário GitHub `Batchuka`), servido em https://batchuka.github.io. O objetivo é mostrar habilidades e projetos de forma mais organizada e livre do que um perfil do GitHub ou do LinkedIn.

A referência visual foi o site https://gabrielgreco.com: tipografia serifada grande no herói, barra lateral fixa com seções numeradas, uma faixa de números com contexto, um mascote animado e o seletor EN/PT no canto. Serve como inspiração de estrutura e tom, não para copiar: o visual e os textos precisam ser próprios.

## Decisões já tomadas

- **Hospedagem:** GitHub Pages, site de usuário (repositório `Batchuka/Batchuka.github.io`), sem domínio próprio por enquanto.
- **Stack:** Astro 7, saída estática. Sem backend: qualquer coisa interativa roda no navegador. Se um dia precisar de servidor, ele fica num serviço separado (Cloudflare Workers, Vercel) chamado pelo site.
- **Idiomas:** PT é o padrão, na raiz `/`; EN fica em `/en/` (`i18n` em `astro.config.mjs`, `prefixDefaultLocale: false`). Toda página existe nos dois idiomas, com o mesmo caminho depois do prefixo, para o seletor PT/EN funcionar (`translatePath` em `src/i18n/ui.ts`).
- **Deploy:** GitHub Actions (`withastro/action@v6` + `actions/deploy-pages@v5`) a cada push na `main`.

## Estado atual (2026-11-07)

- Página inicial com conteúdo real, pronta localmente e ainda sem commit; o que está publicado é o esqueleto "Em construção". Segue a estrutura do gabrielgreco (barra lateral numerada, herói serifado, faixa de números, cartões, chips), com textos e cores próprios. O usuário quer primeiro uma versão parecida e só depois mudar a estética. Ainda não há mascote, e a seção "Skills" do gabrielgreco ficou de fora porque exige backend.
- Seções: 01 Experiência (WM Trading, ArcelorMittal), 02 Projetos (Simple Hubi, o laboratório e outros repositórios), 03 Pesquisa e formação (Ifes, duas ICs, técnico, eventos, cursos Alura, idiomas), 04 Ferramentas, 05 Serviços, 06 Contato.
- Fontes do conteúdo: os PDFs que o usuário colou no chat em 2026-11-07 (trajetória na WM, dois CVs e duas cartas), os certificados em `J:\Meu Drive\formação\` e simplehubi.com. O Lattes (bloqueado por captcha) e o LinkedIn (exige login) não puderam ser lidos.
- O título do herói ("Gosto de problema difícil. Os fáceis, eu automatizo.") é uma sugestão minha que ainda depende da escolha do usuário; está em `src/data/home.ts`.

## Decisões de conteúdo do usuário

- Posicionamento: ele é engenheiro de software **e** engenheiro de controle e automação, com o mesmo peso. O site fala dele, não de uma área.
- Pode publicar: e-mail, LinkedIn, Lattes, nomes de clientes (BYD, Vibra) e tudo o que está nos CVs. Ficam de fora: telefone, nomes de empresas que só estiveram em negociação e qualquer crítica à WM; sobre o fim do projeto de varejo, dizer apenas que ele mudou de rumo e virou a Simple Hubi. Este arquivo também é público, então não registrar aqui o que não pode ir para o site.
- Formação: não dizer que a graduação "vai ser concluída" nem dar detalhes sobre isso. Ele é engenheiro, e o resto é burocracia.
- PyTRobot é o `Batchuka/rpa-stateMachine-framework`, e a CLI é o `Batchuka/rpa-stateMachine-cli`.

## Onde fica cada coisa

- `src/data/site.ts`: nome, cargo, local e links (link vazio não aparece).
- `src/data/home.ts`: todo o texto da página inicial, em PT e EN, agrupado por seção.
- `src/data/toolbox.ts`: grupos e ferramentas da seção de ferramentas.
- `src/data/events.ts`: eventos, cursos livres e idiomas da seção de formação.
- `src/content/<experience|projects|education>/<pt|en>/<nome>.md`: um arquivo por item e por idioma; o schema está em `src/content.config.ts`. `order` define a posição e `draft: true` esconde o item. Projetos têm `group` (`product`, `lab` ou `other`; `other` aparece em grade compacta). Há um modelo de experiência em `src/content/experience/*/modelo.md`.
- `src/components/`: um componente por seção (`Hero`, `Experience`, `Projects`, `Research`, `Toolbox`, `Services`, `Contact`), mais `Sidebar`, `LangSwitch`, `SectionHead` e `Home`, que junta as seções. As páginas `src/pages/index.astro` e `src/pages/en/index.astro` só envolvem `Home` no `Base`.
- Fotos e vídeos: `public/photos/<empresa>-<assunto>.webp|.mp4`, listados no campo `photos` das entradas de experiência e de formação e renderizados por `src/components/Gallery.astro`. Os originais ficam em `J:\Meu Drive\vagas\fotos\`. Antes de qualquer foto entrar no repositório (que é público), ela precisa ser girada pelo EXIF, reduzida (no máximo 1400 px) e regravada **sem metadados**: duas fotos da ArcelorMittal tinham GPS. O `sharp` não está instalado, então o Astro não otimiza imagens; o tratamento é feito antes, com Pillow, e os vídeos com ffmpeg (`-an -map_metadata -1`).
- `src/styles/global.css`: tokens de cor, fonte e medida em `:root`, mais a base tipográfica e o esqueleto da página. O CSS de cada seção fica no próprio componente.
- Fontes: Newsreader (títulos), Source Sans 3 (texto) e JetBrains Mono (rótulos), carregadas do Google Fonts em `Base.astro`.
- Armadilha do CSS com escopo do Astro: ele adiciona um atributo a cada seletor, o que muda a especificidade. Uma regra `li + li` vence `li:nth-child(3)`; para sobrescrever, repita a forma (`li + li:nth-child(3)`).
- Armadilha do servidor de desenvolvimento: se o schema de uma coleção muda antes de os arquivos se adequarem, ele guarda a coleção como vazia (no log: `The collection "projects" does not exist or is empty`) e não se recupera sozinho. Resolve com `astro dev stop` e `astro dev --background`.
- O repositório é **público** e o site está no ar desde 2026-11-07 (Pages com `build_type=workflow`). Cada push na `main` publica; não subir nada que não deva ficar visível. Contexto: a conta é gratuita e o GitHub recusa o Pages em repositório privado (HTTP 422), por isso o repositório não pode voltar a ser privado sem derrubar o site.
- Node local: 22.23.4, o mínimo do Astro 7, instalado pelo winget como `OpenJS.NodeJS.22` (atualizar com `winget upgrade OpenJS.NodeJS.22`). `npm run dev` e `npm run build` rodam normalmente.

## Próximos passos

1. O usuário escolhe o título do herói e revisa os textos no localhost.
2. Depois, mudar a estética para uma identidade própria (paleta, fontes, talvez um mascote), partindo dos tokens em `src/styles/global.css`.
3. Projetos: o laboratório Tennessee Eastman (pasta local `C:\Projetos\tep\`) está todo público na organização `Green-Cinnamon-Labs` (conferido em 2026-11-07). Antes de linkar qualquer outro repositório, confirmar se ele é público.

## Convenções

- Conversar com o usuário em português.
- Arquivos `.md`: um parágrafo por linha (o editor quebra a linha visualmente); não quebrar manualmente.
- Comentários em código: `/* */` ou `/** */`, nunca `//`; até 100 colunas por linha.
- Ao falar do laboratório TEP, não usar "digital twin" nem "CPS"/"TEP CPS Lab": dizer "planta simulada" / "o laboratório".
- Não fazer commit nem push sem o usuário pedir.
