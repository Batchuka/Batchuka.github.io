# batchuka.github.io

Portfólio pessoal, em português e inglês, publicado no GitHub Pages em https://batchuka.github.io.

Feito com [Astro](https://astro.build), gerado como site estático. O deploy roda em [.github/workflows/deploy.yml](.github/workflows/deploy.yml) a cada push na `main`.

## Rodar localmente

Requer Node.js ≥ 22.23.4 (o Astro 7 recusa versões anteriores).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve dist/ localmente
```

## Estrutura

| Caminho | O que é |
|---|---|
| `src/pages/index.astro` | Página em português (raiz `/`) |
| `src/pages/en/index.astro` | Página em inglês (`/en/`) |
| `src/layouts/Base.astro` | Layout comum: `<head>`, navegação, seletor PT/EN |
| `src/i18n/ui.ts` | Textos curtos de interface nos dois idiomas e helpers de rota |
| `public/` | Arquivos servidos como estão (favicon, imagens, PDFs) |
