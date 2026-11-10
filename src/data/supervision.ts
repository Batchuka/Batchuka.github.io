/*
 * 03 Atualmente: os passos do laboratório (tep-plant, monjolo, IHM) e, no último, a pesquisa com
 * Kubernetes, com o artigo submetido ao IEEE ICIT 2027 (work in progress). Fonte:
 * gajeiro-research/paper-ieee/main.pdf, copiado para public/papers/. Os números vêm do artigo.
 */
const paper = '/papers/kubernetes-plant-supervision-icit2027.pdf';
const gajeiro = 'https://github.com/Green-Cinnamon-Labs/gajeiro-research';
const lab = 'https://github.com/Green-Cinnamon-Labs';
const spec = `${lab}/spec-tennessee-eastman`;

export const supervision = {
	pt: {
		eyebrow: '03 / Atualmente',
		title: 'Estude muito o que mais lhe interessa, da maneira mais indisciplinada, irreverente e original possível.',
		cite: 'Richard Feynman',
		lead: 'Uma planta química simulada, construída peça por peça, e a pergunta que ela levantou.',
		steps: [
			{
				title: 'Do Fortran para o Rust',
				text: 'Reescrevi em Rust o modelo do Tennessee Eastman de [Downs e Vogel (1993)](https://doi.org/10.1016/0098-1354%2893%2980018-I), a partir da implementação de referência em Fortran, como um programa que roda sem parar e publica os sinais por OPC UA. Em regime permanente, reproduz o custo publicado: 170,63 contra 170,61 $/h.',
				links: [{ text: 'tep-plant ↗', href: `${lab}/tep-plant` }],
			},
			{
				title: 'monjolo',
				icon: '/logos/monjolo.svg',
				text: 'O que não era química saiu do simulador e virou um framework próprio: um runtime determinístico para simulação contínua, com modelos componíveis, integrador RK4 e adaptador OPC UA. Não sabe nada do Tennessee Eastman; qualquer planta cabe nele, como no monjolo, a máquina que gira sozinha movida pela água.',
				links: [{ text: 'monjolo ↗', href: `${lab}/monjolo` }],
			},
			{
				title: 'A IHM',
				text: 'Uma tela de operação no padrão ISA-101 (IEC 63303): cinza no normal, cor só no anormal, cada medição junto do seu sensor e, ao lado, o veredito do supervisor.',
				image: {
					src: '/photos/ifes-tep-ihm.webp',
					alt: 'Tela da IHM com o fluxograma do Tennessee Eastman em tons de cinza, medições junto aos equipamentos, dois alarmes no reator e o painel do supervisor aberto à esquerda.',
					caption: 'A IHM com o painel do supervisor aberto, durante uma não conformidade.',
				},
				links: [{ text: 'tep-ihm ↗', href: `${lab}/tep-ihm` }],
			},
			{
				title: 'A pesquisa: gajeiro',
				icon: '/logos/gajeiro.webp',
				text: 'Com a planta de pé, veio a pergunta: o que uma supervisão por Kubernetes precisa demonstrar? O gajeiro era o marinheiro que vigiava o horizonte do alto do mastro, o papel da camada supervisória.',
				links: [{ text: 'gajeiro-research ↗', href: gajeiro }],
			},
		],
		intro: [
			'O Kubernetes mantém sistemas de software perto de um estado declarado: o usuário diz o que quer, e controladores comparam isso o tempo todo com o que observam. Numa planta de processo, a mesma ideia vira uma camada supervisória: a política de operação é um recurso declarado, e um controlador avalia a planta contra ela.',
			'Construí essa camada sobre uma simulação do Tennessee Eastman, e ela funcionou de ponta a ponta. Mas funcionar não respondia se a planta estava supervisionada. Uma norma como a ISO/IEC 27001 pede que a organização mostre que certos processos existem, seja qual for a ferramenta; a pergunta passou a ser o que uma implementação precisa demonstrar.',
		],
		results: {
			title: 'O que aconteceu nas corridas',
			items: [
				{
					value: '1,15 h',
					text: 'de processo para o controlador acusar a perda de uma alimentação.',
				},
				{
					value: '−37%',
					text: 'de custo em 30 h, enquanto a planta caminhava para o desligamento.',
				},
				{
					value: '2 h',
					text: 'de antecedência do veredito, que veio de um limite de nível declarado, não do custo.',
				},
			],
			note: 'Desses resultados saiu um primeiro rascunho de requisitos, que a implementação atende só em parte.',
		},
		paper: {
			kicker: 'Artigo · work in progress',
			title: 'What Must Kubernetes-Based Plant Supervision Demonstrate? Lessons from a First Implementation',
			authors: 'Matheus Corteletti Delfino e Rafael Emerick Zape de Oliveira (Ifes)',
			venue: 'Submetido ao IEEE ICIT 2027, em Florianópolis. Versão submetida, em inglês.',
			download: { text: 'baixar o PDF ↓', href: paper },
			links: [
				{ text: 'código do laboratório ↗', href: spec },
			],
		},
	},
	en: {
		eyebrow: '03 / Now',
		title: 'Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.',
		cite: 'Richard Feynman',
		lead: 'A simulated chemical plant, built piece by piece, and the question it raised.',
		steps: [
			{
				title: 'From Fortran to Rust',
				text: 'I rewrote the [Downs and Vogel (1993)](https://doi.org/10.1016/0098-1354%2893%2980018-I) Tennessee Eastman model in Rust, from the reference Fortran implementation, as a program that runs continuously and publishes its signals over OPC UA. In steady state it reproduces the published cost: 170.63 against 170.61 $/h.',
				links: [{ text: 'tep-plant ↗', href: `${lab}/tep-plant` }],
			},
			{
				title: 'monjolo',
				icon: '/logos/monjolo.svg',
				text: 'What was not chemistry left the simulator and became a framework of its own: a deterministic runtime for continuous simulation, with composable models, an RK4 integrator and an OPC UA adapter. It knows nothing about Tennessee Eastman; any plant fits in it, like the monjolo, the water-driven machine that keeps turning on its own.',
				links: [{ text: 'monjolo ↗', href: `${lab}/monjolo` }],
			},
			{
				title: 'The HMI',
				text: 'An operating screen following ISA-101 (IEC 63303): gray when normal, color only when abnormal, each measurement next to its sensor and, beside it, the supervisor verdict.',
				image: {
					src: '/photos/ifes-tep-ihm.webp',
					alt: 'HMI screen with the Tennessee Eastman flowsheet in shades of gray, measurements next to the equipment, two alarms on the reactor and the supervisor panel open on the left.',
					caption: 'The HMI with the supervisor panel open, during a non-compliance.',
				},
				links: [{ text: 'tep-ihm ↗', href: `${lab}/tep-ihm` }],
			},
			{
				title: 'The research: gajeiro',
				icon: '/logos/gajeiro.webp',
				text: 'With the plant running, the question came: what must Kubernetes-based supervision demonstrate? The gajeiro was the sailor who watched the horizon from the top of the mast, the role of the supervisory layer.',
				links: [{ text: 'gajeiro-research ↗', href: gajeiro }],
			},
		],
		intro: [
			'Kubernetes keeps software systems close to a declared state: the user says what they want, and controllers keep comparing it with what they observe. In a process plant, the same idea becomes a supervisory layer: the operating policy is a declared resource, and a controller evaluates the plant against it.',
			'I built this layer on a simulation of the Tennessee Eastman process, and it worked end to end. But working did not answer whether the plant was supervised. A standard such as ISO/IEC 27001 asks an organization to show that certain processes exist, whatever the tool; the question became what an implementation must demonstrate.',
		],
		results: {
			title: 'What happened in the runs',
			items: [
				{
					value: '1.15 h',
					text: 'of process time for the controller to flag the loss of a feed.',
				},
				{
					value: '−37%',
					text: 'cost in 30 h, while the plant drifted toward shutdown.',
				},
				{
					value: '2 h',
					text: 'of warning before shutdown, from a declared level limit, not from cost.',
				},
			],
			note: 'These results became a first draft of requirements, which the implementation meets only in part.',
		},
		paper: {
			kicker: 'Paper · work in progress',
			title: 'What Must Kubernetes-Based Plant Supervision Demonstrate? Lessons from a First Implementation',
			authors: 'Matheus Corteletti Delfino and Rafael Emerick Zape de Oliveira (Ifes)',
			venue: 'Submitted to IEEE ICIT 2027, Florianópolis. Submitted version.',
			download: { text: 'download the PDF ↓', href: paper },
			links: [
				{ text: 'lab code ↗', href: spec },
			],
		},
	},
};
