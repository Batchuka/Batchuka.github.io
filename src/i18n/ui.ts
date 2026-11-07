/*
 * Textos curtos de interface (navegação, rótulos). O texto das seções fica em src/data/home.ts,
 * e conteúdo longo (experiência, projetos) em src/content/.
 */
export const languages = {
	pt: 'PT',
	en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

export const ui = {
	pt: {
		'site.title': 'Matheus Corteletti · Engenheiro de Software e de Controle e Automação',
		'site.description':
			'Portfólio de Matheus Corteletti Delfino: automação, backend orientado a eventos, ' +
			'simulação e supervisão de processos.',
		'nav.experience': 'Experiência',
		'nav.projects': 'Projetos',
		'nav.research': 'Formação',
		'nav.toolbox': 'Ferramentas',
		'nav.services': 'Serviços',
		'nav.contact': 'Contato',
		'link.open': 'abrir',
	},
	en: {
		'site.title': 'Matheus Corteletti · Software and Control & Automation Engineer',
		'site.description':
			'Portfolio of Matheus Corteletti Delfino: automation, event-driven backends, ' +
			'process simulation and supervision.',
		'nav.experience': 'Experience',
		'nav.projects': 'Projects',
		'nav.research': 'Education',
		'nav.toolbox': 'Toolbox',
		'nav.services': 'Services',
		'nav.contact': 'Contact',
		'link.open': 'open',
	},
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function getLangFromUrl(url: URL): Lang {
	const [, first] = url.pathname.split('/');
	return first in ui ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
	return (key: UiKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/* Caminho equivalente da página atual no outro idioma (para o seletor PT/EN). */
export function translatePath(url: URL, target: Lang): string {
	const current = getLangFromUrl(url);
	let rest = url.pathname;
	if (current !== defaultLang) rest = rest.replace(new RegExp(`^/${current}`), '') || '/';
	return target === defaultLang ? rest : `/${target}${rest === '/' ? '/' : rest}`;
}
