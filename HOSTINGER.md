# Deploy on Hostinger (Node.js Apps)

This app needs **Node.js hosting** (not shared `public_html` PHP hosting). It uses API routes, middleware, and a file-based dashboard store.

## hPanel settings

| Field | Value |
| --- | --- |
| Application type | `next` |
| Node.js version | `20` or `22` |
| Install command | `npm ci` |
| Build script / command | `npm run build` |
| Start command | `npm run start -- -p $PORT` |
| Output directory | `.next` |

## Environment variables (required)

Set these in Hostinger before the first deploy:

- `DASHBOARD_SESSION_SECRET` — long random string (session cookies)
- `DASHBOARD_DEFAULT_PASSWORD` — initial login password for seeded users

Optional:

- `DATA_DIR` — writable folder for `dashboard-store.json` (default: `./data`)
- `LEADS_WEBHOOK_URL` — webhook for lead form posts

## Steps

1. Push this repo to GitHub (or upload a ZIP without `node_modules` / `.next`).
2. hPanel → **Websites** → **Add Website** → **Node.js Apps**.
3. Import the repo (or upload), apply the settings above, add env vars, deploy.
4. Point your domain to the Node.js app.
5. Confirm Google Search Console file: `https://your-domain/google0315e67638842bf7.html`

## Notes

- Hostinger builds Next.js with `output: "standalone"` automatically.
- Do not use static `output: "export"` — APIs and the dashboard will not work.
- Change the default dashboard password after first login.
- Auth API routes live under `/api/session/*` (not `/api/auth`) to avoid Hostinger/Imunify locking folders named `auth`.
