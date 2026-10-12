import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/apps' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Juego', 'Utilidad', 'Herramienta', 'Productividad', 'Web']),
    status: z.enum(['idea', 'en desarrollo', 'beta', 'publicada']),
    stack: z.array(z.string()),
    size: z.string().optional(),
    icon: z.string().optional(),
    url: z.string().optional(),
    repo: z.string().optional(),
    destacado: z.boolean().optional().default(false),
  }),
});

const hardware = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/hardware' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Placa', 'Dispositivo', 'Periférico', 'Experimento']),
    status: z.enum(['idea', 'en desarrollo', 'beta', 'publicado']),
    stack: z.array(z.string()),
    icon: z.string().optional(),
    url: z.string().optional(),
    repo: z.string().optional(),
    destacado: z.boolean().optional().default(false),
  }),
});

export const collections = { apps, hardware };
