import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    /** Short line shown in the index and in search results. */
    description: z.string(),
    date: z.coerce.date(),
    /** Which stream this belongs to. Drives the topic pages and labels. */
    topic: z.enum(['practice', 'careers']),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { writing };
