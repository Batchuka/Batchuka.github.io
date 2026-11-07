import { defineConfig } from 'astro/config';

/*
 * Site de usuário do GitHub Pages: servido na raiz, sem `base`.
 * PT é o idioma padrão (sem prefixo); EN vive em /en/.
 */
export default defineConfig({
	site: 'https://batchuka.github.io',
	i18n: {
		defaultLocale: 'pt',
		locales: ['pt', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
