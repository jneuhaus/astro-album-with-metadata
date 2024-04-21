import type {ImageMetadata} from "astro";
import {getCollection} from "astro:content";

export async function getAlbumImages(album: string) {
    const imagesMetadata = await getImagesMetadata();

    // 1. List all album files from collections path
    let images = import.meta.glob<{ default: ImageMetadata }>(
        "/src/content/albums/**/*.{jpeg,jpg,png,gif,webp}"
    );

    // 2. Filter images by album
    images = Object.fromEntries(
        Object.entries(images).filter(([key]) => key.includes(album))
    );

    // 3. Images are promises, so we need to resolve the glob promises
    const resolvedImages = await Promise.all(
        Object.values(images).map((image) => image().then((mod) => mod.default))
    );

    // 4. Extend Image with domId and ImageMetadata
    const extendedImages = resolvedImages.map((image) => {
        const idx_start = image.src.lastIndexOf('/') + 1;
        const idx_end = image.src.lastIndexOf('.');
        const domId = 'id_' + image.src.substring(idx_start, idx_end);
        const imageMetadata = imagesMetadata.find( (item) => image.src.includes(item.id));
        const meta = { domId, ...imageMetadata };
        return { ...image, meta };
    });

    return extendedImages.sort();
}

export async function getImagesMetadata() {
    const images_metadata = await getCollection('images_metadata');

    return images_metadata.map((entry) => {
        if (!entry.id.endsWith('.')) {
            // @ts-ignore
            entry.id = entry.id.substring(entry.id.indexOf('/')) + '.';
        }
        return entry;
    });
}