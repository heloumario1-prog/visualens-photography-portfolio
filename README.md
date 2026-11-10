# VisuaLens — Photography Portfolio

Created by **Mario Helou** for the VisuaLens Photography Portfolio assignment.

An editorial photography portfolio built with plain HTML, CSS, and JavaScript. No framework, installation, API key, or build step is needed.

## Run locally

Open `index.html` from the submission folder in Chrome, Edge, or Firefox. Alternatively, open the folder in VS Code and choose **Open with Live Server**.

## Features

- Responsive, multi-column masonry gallery with 12 locally bundled photographs.
- Five category filters: Nature, Portraits, Architecture, Urban, and Travel.
- Hover zoom and photo preview buttons.
- Full-screen lightbox with next/previous navigation within the selected category.
- Left/Right arrow keyboard navigation; Escape closes dialogs.
- Native dialog focus handling, accessible labels, visible keyboard focus, reduced-motion support, and live filter count announcements.
- Responsive mobile navigation and a two-column gallery on small screens.
- About section and project inquiry brief generator with clipboard copying.

## Files

- `index.html`: Semantic page structure, navigation, sections, and dialogs.
- `styles.css`: Theme, typography, masonry layout, responsive breakpoints, hover effects.
- `script.js`: Photograph data, gallery rendering, filters, lightbox, menu, brief generator.
- `assets/`: Twelve bundled JPEG photographs.
- `photos.json`: Reference inventory of the curated images.

## How it works

CSS `columns` and `break-inside: avoid` produce the masonry layout. JavaScript filters a photo array, builds the visible cards, and opens the clicked image in a native `<dialog>`. Navigation wraps at either end of the filtered collection. Media queries adjust the gallery and navigation for smaller screens.

The inquiry form produces a local project brief. It does not submit or store messages on a server. Google Fonts enhance typography when online; system fonts provide a fallback.

## Verification

Verified in desktop Chrome: category filtering, matching photo counts, opening a photo, next-photo navigation, Escape dismissal, and inquiry brief generation. JavaScript syntax check passed. Small-screen styling is included; physical-device testing was not performed.

## Photography and credits

This is a demonstration portfolio; Mario Helou is the website author, not the photographer. Images are curated from Unsplash, with image URLs listed in `IMAGE-CREDITS.md`. Do not represent the photographs as your own work.

## Submit

1. Extract the ZIP.
2. Open `index.html` to review the project.
3. Upload all extracted files to a GitHub repository, keeping `assets` alongside `index.html`.
4. For GitHub Pages: Settings → Pages → Deploy from a branch → main → / (root) → Save.
5. Submit the repository URL; include the GitHub Pages URL if the assignment accepts a demo link.

Suggested repository name: `visualens-photography-portfolio`.
