# Removed services sub-page design (backup)

The old design of the six service detail pages was moved here so nothing is lost:

- `service-detail/`      the section components (hero, marquee, overview, features, ...)
- `service-detail.css`   the styles for those sections
- `pages/<slug>/page.tsx` the original page files (with the old section layout)

The live pages in `src/app/services/<slug>/page.tsx` now render only the header, an empty
content area and the footer, keeping their SEO metadata. The content still lives in
`src/data/services-data.ts`.

To restore a page: copy `service-detail/` back to `src/components/`, `service-detail.css`
back to `src/styles/`, and the page file back into `src/app/services/<slug>/`.
