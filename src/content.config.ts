import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const albums = defineCollection({
    loader: glob({ pattern: '**\/[^_]*.md', base: './src/content/albums'}),
    schema: ({ image }) =>
        z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            cover: image(),
        }),
});

const images_metadata = defineCollection({
    loader: glob({ pattern: '**\/[^_]*.json', base: './src/content/images_metadata' }),
    schema: z.object({
        title: z.string().optional(),
        description: z.string().optional()
    }),
});

export const collections = {
    'albums': albums,
    'images_metadata': images_metadata,
};
