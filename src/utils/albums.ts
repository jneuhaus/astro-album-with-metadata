import type {ImageMetadata} from "astro";
import {getCollection} from "astro:content";
import {getImage} from 'astro:assets';

export async function getImages(album: string) {

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

    return resolvedImages.sort();
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