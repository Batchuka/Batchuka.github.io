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

- Só o esqueleto existe: layout base, navegação por âncoras (`#about`, `#projects`, `#experience`, `#skills`, `#contact`), seletor PT/EN e páginas placeholder "Em construção" / "Under construction". Não há CSS nem conteúdo real ainda.
- O repositório foi criado **privado**, a pedido do usuário. A conta é gratuita, e o GitHub recusa o Pages em repositório privado (testado em 2026-11-07: `Your current plan does not support GitHub Pages for this repository`, HTTP 422). Por isso o job `deploy` do workflow falha a cada push até o repositório ficar público; o job `build` funciona e serve de verificação. Para publicar, quando o site estiver pronto:
  ```sh
  gh repo edit Batchuka/Batchuka.github.io --visibility public --accept-visibility-change-consequences
  gh api -X POST repos/Batchuka/Batchuka.github.io/pages -f build_type=workflow
  gh workflow run deploy.yml -R Batchuka/Batchuka.github.io
  ```
- O Node local da máquina (22.22.0) está abaixo do mínimo do Astro 7 (22.23.4), e `npm run dev` / `npm run build` recusam rodar. Correção definitiva: `winget upgrade OpenJS.NodeJS.LTS` (ou instalar o Node 24 LTS). Paliativo sem mexer no sistema: `npx -y node@24 node_modules/astro/bin/astro.mjs build` (ou `dev`).

## Próximos passos

1. Definir a identidade visual (paleta, fontes, layout da barra lateral) e escrever o CSS global no `Base.astro` ou em `src/styles/`.
2. Escrever o conteúdo de cada seção nos dois idiomas. Conteúdo longo (projetos, experiências) deve virar content collection (`src/content/`), com um arquivo por item e por idioma, em vez de ficar escrito direto nas páginas.
3. Seção de projetos: o material principal é o laboratório Tennessee Eastman (pasta local `C:\Projetos\tep\`): planta simulada em Rust (`tep-plant`), framework `monjolo`, OPC-UA, IHM com SQLite + ECharts (`tep-ihm`), supervisor genérico no Kubernetes com função de custo declarada como CRD (`plant-supervisor`), historiador (`tep-historian`) e o registro de experimentos. Antes de linkar um desses repositórios, confirmar se ele é público.
4. Tornar o repositório público e confirmar o primeiro deploy.

## Convenções

- Conversar com o usuário em português.
- Arquivos `.md`: um parágrafo por linha (o editor quebra a linha visualmente); não quebrar manualmente.
- Comentários em código: `/* */` ou `/** */`, nunca `//`; até 100 colunas por linha.
- Ao falar do laboratório TEP, não usar "digital twin" nem "CPS"/"TEP CPS Lab": dizer "planta simulada" / "o laboratório".
- Não fazer commit nem push sem o usuário pedir.
