/*
 * Ferramentas agrupadas pelo papel que têm no trabalho.
 * Os nomes não são traduzidos; só o rótulo do grupo.
 */
export const toolbox = [
	{
		label: { pt: 'Linguagens', en: 'Languages' },
		items: ['Java', 'Python', 'Go', 'Rust', 'TypeScript', 'SQL'],
	},
	{
		label: { pt: 'Integrar', en: 'Integrate' },
		items: [
			'Spring Boot',
			'APIs REST',
			'microsserviços',
			'orientação a eventos',
			'DDD',
			'gRPC',
			'FastAPI',
		],
	},
	{
		label: { pt: 'Operar', en: 'Operate' },
		items: [
			'AWS ECS/Fargate',
			'Lambda',
			'SQS',
			'EventBridge',
			'S3',
			'RDS',
			'Kubernetes',
			'Kubebuilder',
			'Docker',
			'GitHub Actions',
		],
	},
	{
		label: { pt: 'Automatizar', en: 'Automate' },
		items: ['RPA', 'PyTRobot', 'OCR', 'extração de documentos', 'LLMs', 'BPMS'],
	},
	{
		label: { pt: 'Controlar', en: 'Control' },
		items: [
			'OPC UA',
			'Modbus',
			'simulação dinâmica',
			'PID',
			'ISA-101',
			'instrumentação',
			'STM32',
			'ROS',
		],
	},
	{
		label: { pt: 'Guardar', en: 'Store' },
		items: ['MySQL', 'Oracle', 'PostgreSQL', 'SQLite', 'modelagem relacional'],
	},
];
