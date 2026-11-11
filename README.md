# RoyalTech Innovation Website

Next.js website + internal dashboard for RoyalTech Innovation.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Folder structure

```
royaltech/
├── docs/                 Deploy notes + reference files
├── assets/inbox/         Unused / raw media (not for production)
├── public/               Live website images, videos, verify files
│   ├── careers/          Careers job images + CTA bg
│   ├── gallery/          Gallery photos
│   ├── reviews/          Review avatars
│   └── trust/            Trust logos
├── src/
│   ├── app/              Routes (pages + API)
│   │   ├── about/        /about
│   │   ├── careers/      /careers
│   │   ├── contact/      /contact
│   │   ├── services/     /services
│   │   ├── process/      /process
│   │   ├── portfolio/    /portfolio
│   │   ├── gallery/      /gallery
│   │   ├── privacy/      /privacy
│   │   ├── terms/        /terms
│   │   ├── login/        /login
│   │   ├── dashboard/    Internal dashboards
│   │   └── api/          API routes (leads, auth, dashboard)
│   ├── components/       UI components
│   │   └── dashboard/    Dashboard-only components
│   ├── lib/              Helpers + dashboard store/auth
│   │   └── dashboard/
│   └── styles/           Page CSS (careers, services, etc.)
├── package.json
├── next.config.ts
└── .env.example
```

## Important paths

| What | Where |
|------|--------|
| Home page | `src/app/page.tsx` |
| Shared layout / fonts | `src/app/layout.tsx` |
| Global styles | `src/app/globals.css` |
| Page styles | `src/styles/` |
| Header / Footer | `src/components/Header.tsx`, `Footer.tsx` |
| Contact / career leads API | `src/app/api/leads/route.ts` |
| Google site verify file | `public/google49cae0159d96d3c9.html` |
| Hostinger deploy notes | `docs/HOSTINGER-DEPLOY.txt` |

## Environment

Copy `.env.example` to `.env.local`:

```
LEADS_WEBHOOK_URL=
```

## Deploy (Hostinger)

1. Zip source (exclude `node_modules`, `.next`, `.env.local`, `assets/inbox`)
2. Upload to Hostinger Node.js app
3. Build: `build` · Output: `.next` · Node 20+
4. Set `LEADS_WEBHOOK_URL` in Hostinger env

See `docs/HOSTINGER-DEPLOY.txt` for full steps.
