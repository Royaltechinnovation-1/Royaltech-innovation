# Project structure guide

## What belongs where

- **`src/app`** — website routes only (one folder per URL)
- **`src/components`** — reusable UI pieces
- **`src/styles`** — CSS for each major page
- **`src/lib`** — business logic (leads, dashboard auth/store)
- **`public`** — files served as-is at the site root
- **`assets/inbox`** — raw dumps / unused media (do not deploy)
- **`docs`** — human notes for deploy / SEO verify

## Do not put these in root

Keep the project root clean. Only config files should live there:

- `package.json`, `next.config.ts`, `tsconfig.json`
- `.env.example`, `.gitignore`, `README.md`

Put new images in `public/...` if they go live, or `assets/inbox` if temporary.
