/*
 * Texto da página inicial, nos dois idiomas. Cada chave de primeiro nível é uma seção.
 */
const lab = 'https://github.com/Green-Cinnamon-Labs';

export const home = {
	pt: {
		hero: {
			title: 'Gosto de problema difícil. Os fáceis, eu automatizo.',
			mark: 'Sim, este site foi feito com a ajuda de IA.',
			lead: 'Gosto de entender por que as coisas são como são. Meu primeiro impulso não é o atalho: vou a fundo, abstraio o problema e só então chego a uma solução simples e concisa, que não precise ser resolvida de novo, quase sempre com uma ideia emprestada de outra área. Tenho uma veia forte para padronizar e automatizar, e me dou bem com refatoração, design e arquitetura de produto. Mas sei a urgência das coisas, e sei ser pragmático quando precisa.',
			card: {
				kicker: 'Green Cinnamon Labs',
				title: 'Meu laboratório para problemas que dão trabalho.',
				text: 'Uma iniciativa de projetos ambiciosos. O primeiro: uma planta química supervisionada por Kubernetes.',
				href: lab,
			},
			primary: { text: 'ver a experiência ↓', href: '#experience' },
			secondary: { text: 'contato ↓', href: '#contact' },
		},
		stats: {
			items: [
				{
					value: '5 anos',
					text: 'de engenharia de software na WM Trading, de estagiário a líder técnico',
					link: 'WM Trading',
					href: '#wm-trading',
				},
				{
					value: '2.200 h',
					text: 'de trabalho manual eliminadas por ano em logística, jurídico e compliance',
					link: 'automações',
					href: '#wm-trading-1',
				},
				{
					value: '5.000',
					text: 'processos de importação por dia: a capacidade projetada do ecossistema de eventos',
					link: 'orquestrador',
					href: '#wm-trading-3',
				},
				{
					value: '200+',
					text: 'clientes atendidos pelas soluções, entre eles BYD e Vibra',
					link: 'Classificação Fiscal',
					href: '#wm-trading-2',
				},
				{
					value: 'INTJ-A',
					text: 'Arquiteto no 16Personalities e Especialista no Predictive Index: analítico, planejador e preciso',
					link: 'perfil',
					href: '#profile',
					profile: true,
				},
				{
					value: '8 áreas',
					text: 'de embarcados e hardware digital a software, nuvem, controle e processos dinâmicos',
					link: 'competências',
					href: '#skills',
				},
			],
		},
		experience: {
			eyebrow: '01 / Experiência',
			title: 'Uma boa abstração significa ignorar o detalhe certo no momento certo.',
			cite: 'Mary Shaw',
		},
		research: {
			eyebrow: '02 / Formação',
			title: 'O cientista estuda o que existe; o engenheiro cria o que nunca existiu.',
			cite: 'Theodore von Kármán',
			events: 'Eventos',
			byproducts: 'Feito durante o curso',
			play: 'Assistir',
		},
		contact: {
			eyebrow: '05 / Contato',
			title: 'Tem um problema difícil? Vamos conversar.',
			labels: {
				email: 'E-mail',
				linkedin: 'LinkedIn',
				github: 'GitHub',
				lab: 'Laboratório',
				lattes: 'Lattes',
			},
		},
	},
	en: {
		hero: {
			title: 'I like hard problems. The easy ones, I automate.',
			mark: 'Yes, this website was made with the help of AI.',
			lead: 'I like to understand why things are the way they are. My first instinct is not the shortcut: I go deep, abstract the problem and only then reach a simple, concise solution that never needs solving again, usually with an idea borrowed from another field. I have a strong streak for standardizing and automating, and I do well at refactoring, design and product architecture. But I know when things are urgent, and I can be pragmatic when it counts.',
			card: {
				kicker: 'Green Cinnamon Labs',
				title: 'My lab for problems that take work.',
				text: 'An initiative for ambitious projects. The first one: a chemical plant supervised by Kubernetes.',
				href: lab,
			},
			primary: { text: 'see the experience ↓', href: '#experience' },
			secondary: { text: 'contact ↓', href: '#contact' },
		},
		stats: {
			items: [
				{
					value: '5 years',
					text: 'of software engineering at WM Trading, from intern to tech lead',
					link: 'WM Trading',
					href: '#wm-trading',
				},
				{
					value: '2,200 h',
					text: 'of manual work removed per year in logistics, legal and compliance',
					link: 'automations',
					href: '#wm-trading-1',
				},
				{
					value: '5,000',
					text: 'import processes a day: the designed capacity of the event ecosystem',
					link: 'orchestrator',
					href: '#wm-trading-3',
				},
				{
					value: '200+',
					text: 'clients served by the solutions, BYD and Vibra among them',
					link: 'Tax Classification',
					href: '#wm-trading-2',
				},
				{
					value: 'INTJ-A',
					text: 'Architect on 16Personalities and Specialist on the Predictive Index: analytical, a planner and precise',
					link: 'profile',
					href: '#profile',
					profile: true,
				},
				{
					value: '8 areas',
					text: 'from embedded systems and digital hardware to software, cloud, control and dynamic processes',
					link: 'skills',
					href: '#skills',
				},
			],
		},
		experience: {
			eyebrow: '01 / Experience',
			title: 'Good abstraction is ignoring the right detail at the right times.',
			cite: 'Mary Shaw',
		},
		research: {
			eyebrow: '02 / Education',
			title: 'A scientist studies what is, whereas an engineer creates what never was.',
			cite: 'Theodore von Kármán',
			events: 'Events',
			byproducts: 'Built during the degree',
			play: 'Watch',
		},
		contact: {
			eyebrow: '05 / Contact',
			title: 'Got a hard problem? Let’s talk.',
			labels: {
				email: 'Email',
				linkedin: 'LinkedIn',
				github: 'GitHub',
				lab: 'Lab',
				lattes: 'Lattes',
			},
		},
	},
};
