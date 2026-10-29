import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

export const tones = ['primary', 'accent', 'highlight'] as const;

const skills = defineCollection({
  loader: file('src/content/skills.json'),
  schema: z.object({
    title: z.string(),
    icon: z.enum(['code', 'layers', 'accessibility', 'wrench']),
    tone: z.enum(tones),
    span: z.enum(['wide', 'narrow']),
    items: z.array(z.string()).min(1),
  }),
});

export const collections = { skills };
