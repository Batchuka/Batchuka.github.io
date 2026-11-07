/*
 * Textos curtos de interface (navegação, rótulos). Conteúdo longo de cada seção fica nos
 * próprios componentes/páginas ou em content collections, não aqui.
 */
export const languages = {
	pt: 'PT',
	en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

export const ui = {
	pt: {
		'site.title': 'Batchuka — Portfólio',
		'site.description': 'Portfólio pessoal: projetos, experiência e habilidades.',
		'nav.about': 'Sobre',
		'nav.projects': 'Projetos',
		'nav.experience': 'Experiência',
		'nav.skills': 'Habilidades',
		'nav.contact': 'Contato',
	},
	en: {
		'site.title': 'Batchuka — Portfolio',
		'site.description': 'Personal portfolio: projects, experience and skills.',
		'nav.about': 'About',
		'nav.projects': 'Projects',
		'nav.experience': 'Experience',
		'nav.skills': 'Skills',
		'nav.contact': 'Contact',
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
