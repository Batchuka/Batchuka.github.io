/*
 * Texto simples dos arquivos de conteúdo com links no formato Markdown: [texto](href).
 * Escapa o resto do HTML e devolve a string pronta para set:html. Um link interno aponta
 * para o id de uma experiência (#simple-hubi) ou de um destaque (#wm-trading-3).
 */
const escape = (s: string) =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inline(text: string): string {
	return escape(text).replace(
		/\[([^\]]+)\]\(([^)\s]+)\)/g,
		(_, label: string, href: string) => `<a class="inline-link" href="${href}">${label}</a>`,
	);
}
