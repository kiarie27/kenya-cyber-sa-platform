# Kenya Cyber SA Platform

A functional demo web application for the Kenya Cyber Situational Awareness platform. The project combines a React/Vite frontend with a TypeScript Express backend, providing public situational awareness pages, a restricted workspace backed by mock SSO, and a SQLite persistence layer seeded with realistic sample data.

## Key Features

- **Public Portal**: Home dashboard, advisories listing & detail pages, KEV Kenya table with export options, weekly trend snapshots, and guidance on reporting incidents.
- **Workspace**: Mock SSO flow, authenticated dashboard, incident inbox with filters, draft advisory workflow, approval & publish endpoints with automated redaction safeguards.
- **Data Guardrails**: TLP-aware access control, redaction of sensitive indicators on publication, k-anonymity enforced for trend outputs.
- **Seed Data & Tests**: Prisma seed script hydrates users, incidents, advisories, KEV entries, and trend snapshots. Jest tests cover the core service layers.

## Tech Stack

- **Frontend**: React 19, Vite, TypeScript, Tailwind CSS, TanStack Query.
- **Backend**: Express, TypeScript, Prisma ORM (SQLite), Passport (custom mock SSO strategy).
- **Tooling**: eslint, prettier, ts-jest, npm workspaces.

## Project Structure

```
kenya-cyber-sa-platform/
├── apps/
│   ├── backend/          # Express API + Prisma schema & seed
│   └── frontend/         # React SPA
├── docs/                 # Research, architecture notes
├── package.json          # Workspace orchestration
└── README.md             # This document
```

## Prerequisites

- Node.js 20+
- npm 10+

The repository relies on npm workspaces. All commands should be executed from the project root unless stated otherwise.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Seed the database** (creates `apps/backend/data/kcsa.db`)
   ```bash
   npm run db:seed
   ```

3. **Start the development servers** (runs backend on `4000`, frontend on `5173`)
   ```bash
   npm run dev
   ```

   - Backend API: http://localhost:4000/api
   - Frontend app: http://localhost:5173/

   The Vite dev server proxies `/api` requests to the Express backend.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Run backend & frontend in parallel dev mode |
| `npm run build` | Build backend (tsc) and frontend (vite) bundles |
| `npm run lint` | Run eslint across both workspaces |
| `npm run test` | Execute backend Jest test suites |
| `npm run db:seed` | Apply Prisma schema & seed sample data |
| `npm --workspace apps/backend run dev` | Run backend only (ts-node-dev) |
| `npm --workspace apps/frontend run dev` | Run frontend only (Vite) |

## Mock SSO Credentials

Use one of the seeded email addresses to sign into the workspace:

- `analyst@icta.go.ke`
- `editor@icta.go.ke`
- `legal@odpc.go.ke`
- `machakos.ciso@county.go.ke`
- `kajiado.ciso@county.go.ke`
- `odpc.analyst@odpc.go.ke`

These users carry different role combinations (Analyst, Editor, Legal, Publisher) to exercise the approval workflow.

## API Highlights

- `GET /api/public/home` – KPIs for homepage
- `GET /api/public/advisories` – Paginated advisories list
- `GET /api/public/advisories/:slug` – Advisory detail + export
- `GET /api/public/kev` & exports – KEV Kenya catalog
- `GET /api/public/trends` – Trend snapshots with k-anonymity enforcement
- `POST /api/auth/mock-sso` – Mock login (email based)
- `GET /api/workspace/incidents` – Workspace incident queue with filters
- `POST /api/workspace/incidents/:id/draft-advisory` – Draft a publication
- `POST /api/workspace/advisories/:id/publish` – Publish to public or members (redaction enforced)

Full request/response shapes are defined in `apps/frontend/src/types/api.ts` and via Prisma models.

## Testing & QA

- Backend tests: `npm --workspace apps/backend run test`
- Linting: `npm run lint`
- Frontend build verification: `npm --workspace apps/frontend run build`

Console output from the seed script is visible during tests; this is expected.

## GitHub Repository Setup

To publish this project:

```bash
git init
git add .
git commit -m "Initial commit: Kenya Cyber SA platform MVP"
git branch -M main
git remote add origin https://github.com/<your-username>/kenya-cyber-sa-platform.git
git push -u origin main
```

Replace `<your-username>` with the destination GitHub account. Once pushed, enable GitHub Pages or deploy via your preferred hosting provider.

## Next Steps

- Implement richer workspace flows (case detail, draft review UI, approvals UX).
- Integrate real indicator exports (STIX/TAXII) and external feeds.
- Harden security (rate limiting, production session store, HTTPS enforcement).
- Expand automated test coverage, especially for frontend components.

---

For further architectural detail, refer to `docs/architecture_overview.md` and the research compendium in `docs/inspiration_research.md`.
