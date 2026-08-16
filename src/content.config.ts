import {defineCollection, reference} from 'astro:content';
import {glob} from 'astro/loaders';
import {z} from 'astro/zod';

const episodes = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/data/episodes'}),
  schema: z.object({
    guest: z.string(),
    guestEn: z.string(),
    affiliation: z.string(),
    affiliationEn: z.string().optional(),
    episodeNumber: z.number(),
    season: z.number(),
    primaryLanguage: z.enum(['zh', 'en']).default('zh'),
    sealTitle: z.string(),
    sealColor: z.string(),
    sealTint: z.string(),
    title: z.string(),
    titleEn: z.string().optional(),
    summary: z.string(),
    summaryEn: z.string().optional(),
    fields: z.array(z.string()),
    fieldsEn: z.array(z.string()).optional(),
    portrait: z.string().optional(),
    portraitPosition: z.string().optional(),
    portraitScale: z.number().optional(),
    highlights: z.array(z.string()).optional(),
    highlightsEn: z.array(z.string()).optional(),
    sourceUrl: z.url().optional()
  })
});

const fulls = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/data/full'}),
  schema: z.object({
    episode: reference('episodes'),
    partName: z.string().default('全文'),
    title: z.string(),
    dek: z.string(),
    publishedAt: z.coerce.date(),
    wordCount: z.number()
  })
});

const parts = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/data/parts'}),
  schema: z.object({
    episode: reference('episodes'),
    part: z.number(),
    partName: z.string(),
    title: z.string(),
    dek: z.string(),
    hook: z.string().optional(),
    publishedAt: z.coerce.date(),
    hostNoteDraft: z.boolean().default(true)
  })
});

const enBriefs = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/data/en-briefs'}),
  schema: z.object({
    episode: reference('episodes'),
    title: z.string(),
    dek: z.string()
  })
});

const enFulls = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/data/en-fulls'}),
  schema: z.object({
    episode: reference('episodes'),
    title: z.string(),
    dek: z.string(),
    publishedAt: z.coerce.date(),
    wordCount: z.number()
  })
});

export const collections = {episodes, fulls, parts, enBriefs, enFulls};
