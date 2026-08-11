import {defineCollection,reference} from 'astro:content';
import {glob} from 'astro/loaders';
import {z} from 'astro/zod';
const episodes=defineCollection({loader:glob({pattern:'**/*.md',base:'./src/data/episodes'}),schema:z.object({guest:z.string(),guestEn:z.string(),affiliation:z.string(),episodeNumber:z.number(),season:z.number(),sealTitle:z.string(),sealColor:z.string(),sealTint:z.string(),title:z.string(),summary:z.string(),fields:z.array(z.string())})});
const fulls=defineCollection({loader:glob({pattern:'**/*.md',base:'./src/data/full'}),schema:z.object({episode:reference('episodes'),partName:z.string().default('全文'),title:z.string(),dek:z.string(),publishedAt:z.coerce.date(),wordCount:z.number()})});
const parts=defineCollection({loader:glob({pattern:'**/*.md',base:'./src/data/parts'}),schema:z.object({episode:reference('episodes'),part:z.number(),partName:z.string(),title:z.string(),dek:z.string(),hook:z.string().optional(),publishedAt:z.coerce.date(),hostNoteDraft:z.boolean().default(true)})});
export const collections={episodes,fulls,parts};
