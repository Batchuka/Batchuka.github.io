/*
 * Mapa de habilidades: o gráfico de aranha logo abaixo dos números do herói.
 * level vai de 1 a 5 e cada nível tem uma definição (scale), para o número não ser uma nota
 * solta. Os níveis foram propostos a partir do que está no site e podem ser ajustados aqui.
 * A ordem das áreas é a ordem dos eixos, em sentido horário a partir do topo.
 */
type Area = { name: string; level: number; tools: string[] };

export const skills: Record<
	'pt' | 'en',
	{ title: string; lead: string; scale: string[]; chartLabel: string; areas: Area[] }
> = {
	pt: {
		title: 'Mapa de habilidades',
		lead: 'Cada área de 1 a 5, pelo que já fiz com ela.',
		scale: [
			'contato',
			'projetos acadêmicos',
			'projetos completos e autorais',
			'uso em produção',
			'liderança e arquitetura em produção',
		],
		chartLabel: 'Gráfico de aranha com o nível de cada área, de 1 a 5.',
		areas: [
			{ name: 'Engenharia de software', level: 5, tools: ['Java', 'Python', 'Go', 'Rust', 'Spring Boot', 'DDD'] },
			{ name: 'Web', level: 4, tools: ['TypeScript', 'Angular', 'FastAPI', 'SQL'] },
			{ name: 'Nuvem e infraestrutura', level: 4, tools: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'] },
			{ name: 'IA e dados', level: 4, tools: ['LLMs', 'FAISS', 'YOLO', 'CNN', 'wavelets'] },
			{ name: 'Algoritmos de controle', level: 3, tools: ['PID', 'função de transferência', 'Modbus'] },
			{ name: 'Processos dinâmicos', level: 3, tools: ['simulação', 'RK4', 'OPC UA'] },
			{ name: 'Embarcados', level: 2, tools: ['C', 'C++', 'STM32', 'RTOS', 'I²C'] },
			{ name: 'Hardware', level: 2, tools: ['SystemVerilog', 'assembly ARM'] },
		],
	},
	en: {
		title: 'Skill map',
		lead: 'Each area from 1 to 5, by what I have done with it.',
		scale: [
			'exposure',
			'academic projects',
			'complete projects of my own',
			'used in production',
			'leading and architecting in production',
		],
		chartLabel: 'Radar chart with the level of each area, from 1 to 5.',
		areas: [
			{ name: 'Software engineering', level: 5, tools: ['Java', 'Python', 'Go', 'Rust', 'Spring Boot', 'DDD'] },
			{ name: 'Web', level: 4, tools: ['TypeScript', 'Angular', 'FastAPI', 'SQL'] },
			{ name: 'Cloud and infrastructure', level: 4, tools: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'] },
			{ name: 'AI and data', level: 4, tools: ['LLMs', 'FAISS', 'YOLO', 'CNN', 'wavelets'] },
			{ name: 'Control algorithms', level: 3, tools: ['PID', 'transfer functions', 'Modbus'] },
			{ name: 'Dynamic processes', level: 3, tools: ['simulation', 'RK4', 'OPC UA'] },
			{ name: 'Embedded systems', level: 2, tools: ['C', 'C++', 'STM32', 'RTOS', 'I²C'] },
			{ name: 'Hardware', level: 2, tools: ['SystemVerilog', 'ARM assembly'] },
		],
	},
};
