/*
 * Eventos da seção Formação e idiomas, mostrados logo abaixo dos números do herói.
 * Fonte: certificados em J:\Meu Drive\formação\Certificados.
 */
export const events = [
	{
		date: '2023-11',
		role: { pt: 'Apresentação', en: 'Presentation' },
		title: {
			pt: 'Predição de falhas em mancais de rolamentos de motores elétricos industriais com CNNs e LSTM',
			en: 'Fault prediction in bearings of industrial electric motors with CNNs and LSTM',
		},
		event: { pt: 'VII Jornada de Integração do Ifes', en: '7th Ifes Integration Conference' },
	},
	{
		date: '2021-11',
		role: { pt: 'Publicação em anais', en: 'Published in proceedings' },
		title: {
			pt: 'Instrumentar a cadeira de rodas com uma rede de sensores ultrassom usando I²C',
			en: 'Instrumenting a wheelchair with a network of ultrasonic sensors over I²C',
		},
		event: {
			pt: 'V Jornada de Integração do Ifes · ISBN 978-65-81152-39-0',
			en: '5th Ifes Integration Conference · ISBN 978-65-81152-39-0',
		},
	},
	{
		date: '2021-05',
		role: { pt: 'Ouvinte', en: 'Attendee' },
		title: {
			pt: 'Um passeio pelo mundo das três mais famosas álgebras hipercomplexas bidimensionais',
			en: 'A walk through the three most famous two-dimensional hypercomplex algebras',
		},
		event: { pt: 'Ifal · campus Maceió', en: 'Ifal · Maceió campus' },
	},
	{
		date: '2017-10',
		role: { pt: 'Ouvinte', en: 'Attendee' },
		title: {
			pt: 'Técnicas preditivas: ensaios aplicados na indústria de petróleo e gás; geração de energia elétrica no Brasil e a crise de abastecimento',
			en: 'Predictive techniques in the oil and gas industry; electric power generation in Brazil and the supply crisis',
		},
		event: { pt: 'I Semana Tecnológica do Ifes Vitória', en: '1st Ifes Vitória Technology Week' },
	},
];


export const languages = {
	label: { pt: 'Idiomas', en: 'Languages' },
	text: {
		pt: 'Português nativo · Inglês avançado (C1) · Aprendendo Italiano',
		en: 'Portuguese, native · English, advanced (C1) · Learning Italian',
	},
	/* Depois do texto, na fonte Noto Color Emoji (o Windows 10 não tem o 🤌). */
	emoji: '🤌🍕',
};
