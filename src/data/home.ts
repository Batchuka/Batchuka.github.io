/*
 * Texto da página inicial, nos dois idiomas. Cada chave de primeiro nível é uma seção.
 */
const lab = 'https://github.com/Green-Cinnamon-Labs';
const gh = 'https://github.com/Batchuka';

export const home = {
	pt: {
		hero: {
			title: 'Gosto de problema difícil. Os fáceis, eu automatizo.',
			mark: 'Sim, este site foi feito por IA.',
			lead: 'Sou engenheiro de software e de controle e automação. Passei cinco anos na WM Trading transformando trabalho manual em sistema, de robôs de RPA a uma arquitetura orientada a eventos. Hoje levo o mesmo raciocínio a uma planta química simulada.',
			card: {
				kicker: 'Green Cinnamon Labs',
				title: 'Um laboratório para problemas que dão trabalho.',
				text: 'Minha iniciativa de projetos ambiciosos. O primeiro: uma planta química supervisionada por Kubernetes.',
				href: lab,
			},
			caption: 'Código aberto, do modelo ao supervisor.',
			primary: { text: 'ver a experiência ↓', href: '#experience' },
			secondary: { text: 'ver o código ↗', href: gh },
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
					href: '#wm-trading',
				},
				{
					value: '5.000',
					text: 'processos de importação por dia: a capacidade projetada do ecossistema de eventos',
					link: 'orquestrador',
					href: '#wm-trading',
				},
				{
					value: '200+',
					text: 'clientes atendidos pelas soluções, entre eles BYD e Vibra',
					link: 'Classificação Fiscal',
					href: '#wm-trading',
				},
			],
			note: 'Cada número leva ao trecho que o explica.',
		},
		experience: {
			eyebrow: '01 / Experiência',
			title: 'Abstrair é ignorar com critério.',
			lead: 'O que cada empresa me deu para resolver, e o que ficou de pé.',
		},
		projects: {
			eyebrow: '02 / Projetos',
			title: 'Coisas que construí e que continuam de pé.',
			lead: 'Um produto que nasceu de uma arquitetura que conduzi, um laboratório que é meu e alguns repositórios que contam o resto.',
			groups: {
				product: {
					title: 'Produto',
					lead: '',
				},
				lab: {
					title: 'Green Cinnamon Labs · Tennessee Eastman',
					lead: 'O Kubernetes pode ser a camada supervisória de uma planta de processo? Uma planta química simulada, dividida em repositórios, para responder.',
				},
				other: {
					title: 'Outros repositórios',
					lead: '',
				},
			},
			all: { text: 'todos os repositórios ↗', href: gh },
		},
		research: {
			eyebrow: '03 / Pesquisa e formação',
			title: 'Engenheiro, com passagem pela pesquisa.',
			lead: 'Formação no Ifes, duas iniciações científicas e o que apresentei pelo caminho.',
			events: 'Eventos',
			lattes: { text: 'currículo Lattes ↗', href: 'https://lattes.cnpq.br/6488888504638365' },
		},
		toolbox: {
			eyebrow: '04 / Ferramentas',
			title: 'O que aparece no trabalho, agrupado pelo que faz.',
			lead: 'Do robô de RPA à malha de controle.',
		},
		services: {
			eyebrow: '05 / Serviços',
			title: 'Do back-office à planta.',
			lead: 'Problemas em que posso ajudar, cada um com algo que mostra como.',
			items: [
				{
					title: 'Automação de processos e documentos',
					text: 'Robôs, extração de documentos e fluxos com uma pessoa no circuito, que tiram o trabalho repetitivo de quem opera sem tirar dela a decisão.',
					link: 'PyTRobot: framework de RPA em máquina de estados',
					href: `${gh}/rpa-stateMachine-framework`,
				},
				{
					title: 'Backend e integração orientada a eventos',
					text: 'Microsserviços que conversam por eventos, com um orquestrador que conduz o fluxo de cada cliente a partir de configuração, e não de código novo.',
					link: 'demo-event-driven: orquestrador em Spring Boot',
					href: `${gh}/demo-event-driven`,
				},
				{
					title: 'Simulação e supervisão industrial',
					text: 'Modelos dinâmicos que rodam continuamente, sinais publicados por OPC UA e uma camada supervisória que julga a planta contra uma política declarada.',
					link: 'o laboratório Tennessee Eastman',
					href: `${lab}/spec-tennessee-eastman`,
				},
				{
					title: 'IHMs e visualização',
					text: 'Telas de operação seguindo a ISA-101: cinza no normal, cor só no anormal, tendências e alarmes onde o operador já está olhando.',
					link: 'tep-ihm: IHM web do laboratório',
					href: `${lab}/tep-ihm`,
				},
			],
			primary: { text: 'conversar sobre um projeto ↓', href: '#contact' },
			secondary: { text: 'ver os projetos ↑', href: '#projects' },
		},
		contact: {
			eyebrow: '06 / Contato',
			title: 'Tem um problema difícil? Melhor ainda.',
			lead: 'Escreva. Respondo em português ou em inglês.',
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
			mark: 'Yes, this website was made by AI.',
			lead: 'I am a software engineer and a control & automation engineer. I spent five years at WM Trading turning manual work into systems, from RPA bots to an event-driven architecture. Today I bring the same thinking to a simulated chemical plant.',
			card: {
				kicker: 'Green Cinnamon Labs',
				title: 'A lab for problems that take work.',
				text: 'My own initiative for ambitious projects. The first one: a chemical plant supervised by Kubernetes.',
				href: lab,
			},
			caption: 'Open source, from the model to the supervisor.',
			primary: { text: 'see the experience ↓', href: '#experience' },
			secondary: { text: 'see the code ↗', href: gh },
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
					text: 'of manual work removed every year across logistics, legal and compliance',
					link: 'automations',
					href: '#wm-trading',
				},
				{
					value: '5,000',
					text: 'import processes a day: the designed capacity of the event-driven platform',
					link: 'orchestrator',
					href: '#wm-trading',
				},
				{
					value: '200+',
					text: 'clients served by these systems, BYD and Vibra among them',
					link: 'Tax Classification',
					href: '#wm-trading',
				},
			],
			note: 'Every number links to the part that explains it.',
		},
		experience: {
			eyebrow: '01 / Experience',
			title: 'Abstraction is ignoring things on purpose.',
			lead: 'What each company gave me to solve, and what is still standing.',
		},
		projects: {
			eyebrow: '02 / Projects',
			title: 'Things I built that are still standing.',
			lead: 'A product born from an architecture I led, a lab of my own and a few repositories that tell the rest.',
			groups: {
				product: {
					title: 'Product',
					lead: '',
				},
				lab: {
					title: 'Green Cinnamon Labs · Tennessee Eastman',
					lead: 'Can Kubernetes be the supervisory layer of a process plant? A simulated chemical plant, split into repositories, to find out.',
				},
				other: {
					title: 'Other repositories',
					lead: '',
				},
			},
			all: { text: 'all repositories ↗', href: gh },
		},
		research: {
			eyebrow: '03 / Research & education',
			title: 'An engineer who did some research along the way.',
			lead: 'A degree at Ifes, two undergraduate research projects and what I presented along the way.',
			events: 'Events',
			lattes: { text: 'Lattes CV ↗', href: 'https://lattes.cnpq.br/6488888504638365' },
		},
		toolbox: {
			eyebrow: '04 / Toolbox',
			title: 'What shows up in the work, grouped by what it does.',
			lead: 'From the RPA bot to the control loop.',
		},
		services: {
			eyebrow: '05 / Services',
			title: 'From the back office to the plant.',
			lead: 'Problems I can help with, each with something that shows how.',
			items: [
				{
					title: 'Process and document automation',
					text: 'Bots, document extraction and human-in-the-loop flows that take repetitive work off people without taking the decision away from them.',
					link: 'PyTRobot: a state-machine RPA framework',
					href: `${gh}/rpa-stateMachine-framework`,
				},
				{
					title: 'Event-driven backends and integration',
					text: 'Microservices that talk through events, with an orchestrator that runs each client’s flow from configuration rather than new code.',
					link: 'demo-event-driven: a Spring Boot orchestrator',
					href: `${gh}/demo-event-driven`,
				},
				{
					title: 'Industrial simulation and supervision',
					text: 'Dynamic models that run continuously, signals published over OPC UA and a supervisory layer that judges the plant against a declared policy.',
					link: 'the Tennessee Eastman lab',
					href: `${lab}/spec-tennessee-eastman`,
				},
				{
					title: 'HMIs and visualization',
					text: 'Operator screens following ISA-101: gray when normal, color only when abnormal, trends and alarms where the operator is already looking.',
					link: 'tep-ihm: the lab’s web HMI',
					href: `${lab}/tep-ihm`,
				},
			],
			primary: { text: 'discuss a project ↓', href: '#contact' },
			secondary: { text: 'see the projects ↑', href: '#projects' },
		},
		contact: {
			eyebrow: '06 / Contact',
			title: 'Got a hard problem? Even better.',
			lead: 'Write to me. I reply in Portuguese or English.',
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
