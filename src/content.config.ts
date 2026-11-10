import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/*
 * Um arquivo por item e por idioma: src/content/<coleção>/<pt|en>/<nome>.md.
 * O id da entrada fica "pt/<nome>" ou "en/<nome>", e é assim que os componentes filtram.
 * Em todas as coleções, "order" define a posição (menor primeiro) e "draft: true" esconde o item.
 */

const link = z.object({ text: z.string(), href: z.string() });

/*
 * Item de destaque: texto simples ou, com ganho, um rótulo curto à esquerda ("+1 pessoa livre")
 * com um ícone desenhado em src/components/Experience.astro.
 */
const bullet = z.union([
	z.string(),
	z.object({
		gain: z.string(),
		icon: z.enum([
			'person',
			'clock',
			'unlock',
			'bot',
			'deploy',
			'standard',
			'doc',
			'bell',
			'spark',
			'bolt',
			'plug',
			'mail',
			'shield',
		]),
		text: z.string(),
	}),
]);

/*
 * Foto ou vídeo curto servido de public/photos/ (src: "/photos/<nome>.webp" ou ".mp4").
 * position: object-position do CSS, para escolher o que aparece no recorte (padrão "center").
 * poster: imagem mostrada antes de o vídeo carregar.
 * marker: seta desenhada por cima da foto, apontando para (x, y) em % do quadro já recortado.
 */
const photo = z.object({
	src: z.string(),
	alt: z.string(),
	caption: z.string().optional(),
	position: z.string().optional(),
	poster: z.string().optional(),
	marker: z.object({ x: z.number(), y: z.number(), label: z.string() }).optional(),
});

const experience = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
	schema: z.object({
		order: z.number(),
		draft: z.boolean().default(false),
		org: z.string(),
		url: z.string().url().optional(),
		mark: z.string().optional(),
		logo: z.string().optional(),
		role: z.string(),
		period: z.string(),
		place: z.string(),
		summary: z.string(),
		tags: z.array(z.string()).default([]),
		photos: z.array(photo).default([]),
		highlights: z
			.array(
				z.object({
					label: z.string(),
					/* Diagrama desenhado em src/components/diagrams/, mostrado depois do resumo. */
					diagram: z.enum(['pytrobot', 'fiscal', 'plataforma']).optional(),
					title: z.string(),
					summary: z.string().optional(),
					bullets: z.array(bullet).default([]),
					links: z.array(link).default([]),
				}),
			)
			.default([]),
		footnote: z.string().optional(),
	}),
});

/*
 * group: product (produto de empresa) e lab (laboratório TEP) aparecem em Projetos; other não
 * aparece lá e serve aos subprodutos citados numa formação (campo projects da education).
 */
const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		order: z.number(),
		draft: z.boolean().default(false),
		group: z.enum(['product', 'lab', 'other']),
		title: z.string(),
		kind: z.string(),
		summary: z.string(),
		stack: z.array(z.string()).default([]),
		url: z.string().url(),
	}),
});

const education = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
	schema: z.object({
		order: z.number(),
		draft: z.boolean().default(false),
		kind: z.string(),
		title: z.string(),
		place: z.string(),
		period: z.string(),
		summary: z.string(),
		bullets: z.array(z.string()).default([]),
		links: z.array(link).default([]),
		/* Subprodutos: nomes de arquivo de src/content/projects/<idioma>/, em grade compacta. */
		projects: z.array(z.string()).default([]),
		photos: z.array(photo).default([]),
	}),
});

export const collections = { experience, projects, education };
