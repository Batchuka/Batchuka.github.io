/*
 * Perfil de personalidade mostrado na aba lateral: três testes, um por subaba.
 * Os números foram lidos dos relatórios; os textos são resumo próprio, não cópia.
 * O guia de relacionamento do PI, que fala de outra pessoa, fica de fora.
 */

/* PI: posição do fator em desvios-padrão (de -3 a +3); pole é o lado que ele puxa. */
type Factor = {
	key: 'A' | 'B' | 'C' | 'D';
	score: number;
	pole: 'left' | 'right' | 'none';
	name: string;
	level: string;
	poles: [string, string];
	text: string;
	care: string;
};

/* 16Personalities: escala entre dois polos; value é a porcentagem no polo de side. */
type Scale = { group: string; poles: [string, string]; value: number; side: 'left' | 'right' };

/* Big Five: percentil do traço e dos seus dois aspectos. */
type Trait = { name: string; value: number; aspects: [string, number][]; text: string };

const href = {
	pi: 'https://www.predictiveindex.com/',
	p16: 'https://www.16personalities.com/br/teste-de-personalidade',
	p16en: 'https://www.16personalities.com/free-personality-test',
	b5: 'https://bigfiveaspects.com/',
};

export const profile = {
	pt: {
		tab: 'Perfil',
		open: 'Abrir o perfil de personalidade',
		close: 'Fechar',
		title: 'O que os testes de personalidade dizem sobre mim?',
		tabsLabel: 'Testes',
		site: 'site do teste ↗',
		strengthsLabel: 'Forte',
		careLabel: 'Atenção',
		pi: {
			short: 'PI',
			name: 'Predictive Index',
			href: href.pi,
			about: 'Avaliação comportamental usada por empresas em contratação e gestão de times. A pessoa marca, numa lista de adjetivos, os que a descrevem; o resultado posiciona quatro impulsos (dominância, extroversão, paciência e formalidade) em relação à média da população, em desvios-padrão, e os resume num padrão de referência.',
			result: {
				label: 'Padrão',
				name: 'Especialista',
				text: 'Trabalha com precisão, quer ver a prova antes de confiar e respeita a estrutura em que está.',
			},
			chartLabel:
				'Gráfico dos quatro fatores, de −3 a +3 desvios-padrão: dominância um pouco abaixo da média, extroversão abaixo, paciência no meio e formalidade acima.',
			factors: [
				{
					key: 'A',
					score: -0.3,
					pole: 'left',
					name: 'Dominância',
					level: 'um pouco abaixo da média',
					poles: ['Colaborativo', 'Independente'],
					text: 'Colaborativo e receptivo às decisões do grupo; se importa com o crescimento da equipe.',
					care: 'Pode evitar conversas difíceis ou parecer cauteloso demais.',
				},
				{
					key: 'B',
					score: -0.5,
					pole: 'left',
					name: 'Extroversão',
					level: 'abaixo da média',
					poles: ['Reservado', 'Sociável'],
					text: 'Reservado e analítico, guiado por dados. Reflete antes de falar, antecipa problemas e é criativo para resolvê-los.',
					care: 'Demora a se abrir com quem não conhece; a comunicação pode sair enxuta demais.',
				},
				{
					key: 'C',
					score: 0,
					pole: 'none',
					name: 'Paciência',
					level: 'na média',
					poles: ['Dinâmico', 'Estável'],
					text: 'Equilibra ritmo e estabilidade: dá conta de prazo urgente e de variedade sem perder a calma.',
					care: 'Pode ficar impaciente com atrasos que travam o resultado.',
				},
				{
					key: 'D',
					score: 0.9,
					pole: 'right',
					name: 'Formalidade',
					level: 'acima da média',
					poles: ['Flexível', 'Preciso'],
					text: 'Preciso. Disciplina na execução, gosto por estrutura e por coisa bem-feita, atenção ao detalhe.',
					care: 'Perfeccionista; fica pouco à vontade com ambiguidade.',
				},
			] as Factor[],
			works: {
				title: 'Como trabalho melhor',
				items: [
					'Deixe-me colaborar.',
					'Deixe-me pensar antes de responder.',
					'Dê-me estrutura: papéis e expectativas claros.',
					'Dê-me problemas da minha área para resolver.',
				],
			},
		},
		p16: {
			short: '16Personalities',
			name: '16Personalities',
			href: href.p16,
			about: 'Teste gratuito on-line que parte da tipologia de Myers-Briggs e a combina com traços do Big Five. Mede cinco escalas, cada uma entre dois polos; a porcentagem diz o quanto a pessoa pende para um lado. O resultado é um de dezesseis tipos, na variante assertiva (-A) ou turbulenta (-T).',
			result: {
				label: 'Tipo',
				name: 'Arquiteto (INTJ-A)',
				text: 'Estratégico e independente; quer entender como os sistemas funcionam para melhorá-los, e planeja antes de agir.',
			},
			scales: [
				{ group: 'Energia', poles: ['Extrovertido', 'Introvertido'], value: 72, side: 'right' },
				{ group: 'Mente', poles: ['Intuitivo', 'Realista'], value: 70, side: 'left' },
				{ group: 'Natureza', poles: ['Analítico', 'Emocional'], value: 96, side: 'left' },
				{ group: 'Abordagem', poles: ['Planejador', 'Desbravador'], value: 97, side: 'left' },
				{ group: 'Identidade', poles: ['Assertivo', 'Turbulento'], value: 58, side: 'left' },
			] as Scale[],
			strengths: [
				'Pensamento conceitual: facilidade com ideias abstratas e com planejamento de longo prazo.',
				'Aprimoramento contínuo: procura ineficiências e melhora o processo onde estiver.',
				'Entrega confiável: tarefa crítica sai precisa e bem-feita.',
			],
			cares: [
				'Impaciência com rotina e tarefa repetitiva.',
				'Feedback direto demais, que pode soar duro.',
				'Relutância em delegar o que sabe fazer bem.',
			],
		},
		b5: {
			short: 'Big Five',
			name: 'Big Five Aspects',
			href: href.b5,
			about: 'O Big Five é o modelo de personalidade mais usado na psicologia acadêmica, com cinco traços: abertura, conscienciosidade, extroversão, amabilidade e neuroticismo. A Big Five Aspect Scale, de Colin DeYoung, Lena Quilty e Jordan Peterson, divide cada traço em dois aspectos. Os números são percentis: 79 quer dizer acima de 79% das pessoas.',
			chartLabel:
				'Percentis dos cinco traços: abertura 79, conscienciosidade 91, extroversão 67, amabilidade 9 e neuroticismo 26.',
			traits: [
				{
					name: 'Abertura',
					value: 79,
					aspects: [
						['Intelecto', 91],
						['Estética', 47],
					],
					text: 'Curiosidade intelectual alta: gosta de ideias abstratas e de aprender por aprender.',
				},
				{
					name: 'Conscienciosidade',
					value: 91,
					aspects: [
						['Diligência', 90],
						['Ordem', 82],
					],
					text: 'Muito diligente e organizado: termina o que começa e gosta de processo.',
				},
				{
					name: 'Extroversão',
					value: 67,
					aspects: [
						['Entusiasmo', 56],
						['Assertividade', 73],
					],
					text: 'Acima da média, mais pela assertividade do que pelo entusiasmo: fala o que pensa.',
				},
				{
					name: 'Amabilidade',
					value: 9,
					aspects: [
						['Compaixão', 1],
						['Polidez', 50],
					],
					text: 'Bem abaixo da média: direto e cético, prefere resolver o problema a preservar a harmonia.',
				},
				{
					name: 'Neuroticismo',
					value: 26,
					aspects: [
						['Volatilidade', 10],
						['Retraimento', 53],
					],
					text: 'Abaixo da média: pouca volatilidade, não se abala fácil sob pressão.',
				},
			] as Trait[],
		},
	},
	en: {
		tab: 'Profile',
		open: 'Open the personality profile',
		close: 'Close',
		title: 'What do personality tests say about me?',
		tabsLabel: 'Tests',
		site: 'test website ↗',
		strengthsLabel: 'Strong',
		careLabel: 'Watch out',
		pi: {
			short: 'PI',
			name: 'Predictive Index',
			href: href.pi,
			about: 'A behavioral assessment companies use for hiring and managing teams. The person picks, from a list of adjectives, the ones that describe them; the result places four drives (dominance, extraversion, patience and formality) against the population average, in standard deviations, and sums them up in a reference pattern.',
			result: {
				label: 'Pattern',
				name: 'Specialist',
				text: 'Works with precision, wants proof before trusting and respects the structure around them.',
			},
			chartLabel:
				'Chart of the four factors, from −3 to +3 standard deviations: dominance slightly below average, extraversion below, patience in the middle and formality above.',
			factors: [
				{
					key: 'A',
					score: -0.3,
					pole: 'left',
					name: 'Dominance',
					level: 'slightly below average',
					poles: ['Collaborative', 'Independent'],
					text: 'Collaborative and open to group decisions; cares about the team growing.',
					care: 'May avoid hard conversations or come across as too cautious.',
				},
				{
					key: 'B',
					score: -0.5,
					pole: 'left',
					name: 'Extraversion',
					level: 'below average',
					poles: ['Reserved', 'Sociable'],
					text: 'Reserved and analytical, driven by data. Thinks before speaking, anticipates problems and is creative in solving them.',
					care: 'Takes time to open up to strangers; communication can come out too terse.',
				},
				{
					key: 'C',
					score: 0,
					pole: 'none',
					name: 'Patience',
					level: 'average',
					poles: ['Driving', 'Steady'],
					text: 'Balances pace and stability: handles tight deadlines and variety without losing calm.',
					care: 'May grow impatient with delays that block results.',
				},
				{
					key: 'D',
					score: 0.9,
					pole: 'right',
					name: 'Formality',
					level: 'above average',
					poles: ['Flexible', 'Precise'],
					text: 'Precise. Disciplined execution, a taste for structure and work done right, attention to detail.',
					care: 'Perfectionist; uneasy with ambiguity.',
				},
			] as Factor[],
			works: {
				title: 'How I work best',
				items: [
					'Let me collaborate.',
					'Let me think before I answer.',
					'Give me structure: clear roles and expectations.',
					'Give me problems in my field to solve.',
				],
			},
		},
		p16: {
			short: '16Personalities',
			name: '16Personalities',
			href: href.p16en,
			about: 'A free online test that starts from the Myers-Briggs typology and blends it with Big Five traits. It measures five scales, each between two poles; the percentage says how far the person leans to one side. The result is one of sixteen types, in an assertive (-A) or turbulent (-T) variant.',
			result: {
				label: 'Type',
				name: 'Architect (INTJ-A)',
				text: 'Strategic and independent; wants to understand how systems work in order to improve them, and plans before acting.',
			},
			scales: [
				{ group: 'Energy', poles: ['Extraverted', 'Introverted'], value: 72, side: 'right' },
				{ group: 'Mind', poles: ['Intuitive', 'Observant'], value: 70, side: 'left' },
				{ group: 'Nature', poles: ['Thinking', 'Feeling'], value: 96, side: 'left' },
				{ group: 'Tactics', poles: ['Judging', 'Prospecting'], value: 97, side: 'left' },
				{ group: 'Identity', poles: ['Assertive', 'Turbulent'], value: 58, side: 'left' },
			] as Scale[],
			strengths: [
				'Conceptual thinking: at ease with abstract ideas and long-term planning.',
				'Continuous improvement: looks for inefficiencies and improves the process everywhere.',
				'Reliable delivery: critical work comes out precise and done right.',
			],
			cares: [
				'Impatience with routine and repetitive tasks.',
				'Overly direct feedback that can sound harsh.',
				'Reluctance to delegate work already mastered.',
			],
		},
		b5: {
			short: 'Big Five',
			name: 'Big Five Aspects',
			href: href.b5,
			about: 'The Big Five is the most widely used personality model in academic psychology, with five traits: openness, conscientiousness, extraversion, agreeableness and neuroticism. The Big Five Aspect Scale, by Colin DeYoung, Lena Quilty and Jordan Peterson, splits each trait into two aspects. The numbers are percentiles: 79 means above 79% of people.',
			chartLabel:
				'Percentiles of the five traits: openness 79, conscientiousness 91, extraversion 67, agreeableness 9 and neuroticism 26.',
			traits: [
				{
					name: 'Openness',
					value: 79,
					aspects: [
						['Intellect', 91],
						['Aesthetics', 47],
					],
					text: 'High intellectual curiosity: enjoys abstract ideas and learning for its own sake.',
				},
				{
					name: 'Conscientiousness',
					value: 91,
					aspects: [
						['Industriousness', 90],
						['Orderliness', 82],
					],
					text: 'Very industrious and orderly: sees things through and likes process.',
				},
				{
					name: 'Extraversion',
					value: 67,
					aspects: [
						['Enthusiasm', 56],
						['Assertiveness', 73],
					],
					text: 'Above average, driven more by assertiveness than enthusiasm: outspoken.',
				},
				{
					name: 'Agreeableness',
					value: 9,
					aspects: [
						['Compassion', 1],
						['Politeness', 50],
					],
					text: 'Well below average: direct and skeptical, would rather solve the problem than keep the peace.',
				},
				{
					name: 'Neuroticism',
					value: 26,
					aspects: [
						['Volatility', 10],
						['Withdrawal', 53],
					],
					text: 'Below average: low volatility, not easily shaken under pressure.',
				},
			] as Trait[],
		},
	},
};
