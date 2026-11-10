/*
 * Ícones de traço dos diagramas no estilo da AWS, desenhados em torno de (0, 0), num quadrado
 * de 28 x 28. s: traço branco; f: preenchimento branco (opcional).
 */
const circle = (cx: number, cy: number, r: number) =>
	`M ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;

export const icons: Record<string, { s: string; f?: string }> = {
	globe: {
		s: `${circle(0, 0, 13)} M -13 0 H 13 M 0 -13 C -8 -6, -8 6, 0 13 M 0 -13 C 8 -6, 8 6, 0 13`,
	},
	doc: { s: 'M -9 -13 H 4 L 10 -7 V 13 H -9 Z M 4 -13 V -7 H 10 M -5 -1 H 6 M -5 4 H 6 M -5 9 H 2' },
	tag: { s: `M -13 -9 H 3 L 12 0 L 3 9 H -13 Z ${circle(-7, 0, 2.5)}` },
	db: {
		s: 'M -11 -9 A 11 4 0 0 1 11 -9 A 11 4 0 0 1 -11 -9 Z M -11 -9 V 9 A 11 4 0 0 0 11 9 V -9 M -11 0 A 11 4 0 0 0 11 0',
	},
	queue: { s: 'M -14 -6 H -7 V 6 H -14 Z M -3.5 -6 H 3.5 V 6 H -3.5 Z M 7 -6 H 14 V 6 H 7 Z' },
	lambda: { s: 'M -9 -12 H -4 L 9 12 M 1 -2 L -8 12' },
	scan: {
		s: 'M -13 -6 V -13 H -6 M 6 -13 H 13 V -6 M 13 6 V 13 H 6 M -6 13 H -13 V 6 M -7 -4 H 7 M -7 0 H 7 M -7 4 H 3',
	},
	spark: {
		s: '',
		f: 'M 0 -13 Q 1.5 -1.5 13 0 Q 1.5 1.5 0 13 Q -1.5 1.5 -13 0 Q -1.5 -1.5 0 -13 Z',
	},
	search: {
		s: `${circle(-3, -3, 8)} M 3 3 L 12 12`,
		f: `${circle(-6, -5, 1.6)} ${circle(-1, -6, 1.6)} ${circle(-3, 0, 1.6)}`,
	},
	/* Mestre: um nó central ligado a quatro pontas. */
	hub: {
		s: `${circle(0, 0, 4.5)} ${circle(-10, -10, 2.5)} ${circle(10, -10, 2.5)} ${circle(-10, 10, 2.5)} ${circle(10, 10, 2.5)} M -3.2 -3.2 L -8.2 -8.2 M 3.2 -3.2 L 8.2 -8.2 M -3.2 3.2 L -8.2 8.2 M 3.2 3.2 L 8.2 8.2`,
	},
	box: { s: 'M -11 -6 L 0 -12 L 11 -6 V 7 L 0 13 L -11 7 Z M -11 -6 L 0 0 L 11 -6 M 0 0 V 13' },
};
