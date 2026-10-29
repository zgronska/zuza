import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

export const tones = ['primary', 'accent', 'highlight'] as const;

const skills = defineCollection({
  loader: file('src/content/skills.json'),
  schema: z.object({
    order: z.number().int(),
    title: z.string(),
    icon: z.enum(['code', 'layers', 'accessibility', 'wrench']),
    tone: z.enum(tones),
    items: z.array(z.string()).min(1),
  }),
});

const work = defineCollection({
  loader: file('src/content/work.json'),
  schema: z.object({
    order: z.number().int(),
    company: z.string(),
    role: z.string(),
    period: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    tone: z.enum(tones),
    current: z.boolean().default(false),
  }),
});

export const collections = { skills, work };
