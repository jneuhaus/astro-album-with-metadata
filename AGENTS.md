# Project Agent Configuration

This document contains information for AI agents working on this Astro photo gallery project.

## Project Overview

This is an Astro-based photo gallery application with metadata support. The project displays photo albums with individual images that can have associated metadata (titles, descriptions).

## Key Technologies

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **Sharp** - Image processing
- **Content Collections** - For managing albums and metadata

## Available Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run astro ...` | Run Astro CLI commands |

## Project Structure

```
src/
├── components/
│   ├── Album.astro          # Album display component
│   ├── JustifiedGallery.astro # Gallery layout component
│   └── Nav.astro            # Navigation component
├── content/
│   ├── albums/              # Album images and cover files
│   └── images_metadata/     # JSON metadata for individual images
├── layouts/
│   └── Layout.astro         # Main site layout
├── pages/
│   ├── index.astro          # Homepage
│   ├── albums.astro         # Albums listing
│   ├── albums/[slug].astro  # Dynamic album pages
│   └── album*.astro         # Individual album pages
└── utils/
    └── albums.ts            # Album utility functions
```

## Content Collections

### Albums Collection
- Type: `content`
- Schema: `title` (optional), `description` (optional), `cover` (image)
- Location: `src/content/albums/`

### Images Metadata Collection  
- Type: `data`
- Schema: `title` (optional), `description` (optional)
- Location: `src/content/images_metadata/`

## Development Notes

- Images are stored in `src/content/albums/[album-name]/`
- Image metadata is stored as JSON files in `src/content/images_metadata/[album-name]/`
- The project uses justified galleries for image display
- Build output goes to `dist/` directory

## Testing Commands

When working on this project:
1. Always run `npm run dev` to test changes locally
2. Use `npm run build` to verify production build
3. Check the build output in `dist/` folder

## Common Tasks

- Adding new albums: Create folder in `src/content/albums/` and corresponding metadata
- Updating album info: Edit files in `src/content/albums/`
- Modifying gallery layout: Update `JustifiedGallery.astro` component
- Changing site structure: Modify pages in `src/pages/`
