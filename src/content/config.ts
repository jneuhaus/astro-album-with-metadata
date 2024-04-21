import { defineCollection, z } from "astro:content";

const albums = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            cover: image(),
        }),
});

const images_metadata = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string().optional(),
        description: z.string().optional()
    }),
});

export const collections = {
    'albums': albums,
    'images_metadata': images_metadata,
};