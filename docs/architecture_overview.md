# Kenya Cyber SA Platform – Architecture Overview

## Objectives
- Deliver a functional web application that mirrors the static prototype experience while adding live data handling, authentication (mock SSO), and persistence.
- Maintain all existing public pages (Home, Advisories, Advisory Detail, KEV, Trends, Report Incident) and workspace flows (Inbox, Case, Publish Review), extending them as needed for a minimum viable operational demo.
- Use mock JSON datasets for seed data but persist runtime changes in a lightweight relational database.
- Provide a clear path for future integrations with OpenCTI/MISP and STIX/TAXII exports.

## High-Level Architecture
```
kenya-cyber-sa-platform/
├── apps/
│   ├── backend/       # Node.js (Express + TypeScript) API
│   └── frontend/      # React (Vite + TypeScript) SPA
├── packages/
│   └── ui/            # (Optional) Shared UI components (future)
├── prisma/            # Database schema & migrations (SQLite for MVP)
├── docs/              # Research, policy and planning artifacts
└── ...
```

### Technology Stack
- **Frontend**: React 18 + Vite + TypeScript, React Router, TanStack Query for data fetching, Zustand for lightweight state where needed, Chart.js for trends visualisations, Tailwind CSS for rapid styling while matching dark theme from prototype.
- **Backend**: Node.js 20, Express.js + TypeScript, Prisma ORM targeting SQLite (file-based) for quick persistence, Zod for request/response validation, Passport.js with a mock SSO strategy (pre-seeded users + simulated OAuth flow).
- **Testing & Tooling**: Vitest + Testing Library for frontend, Jest (ts-jest) for backend, ESLint + Prettier shared config, pnpm workspaces for dependency management, Husky (optional) for git hooks.

### Deployment Targets (for demo)
- Containerised via Docker Compose (frontend, backend, sqlite volume) for consistent local/demo deployments.
- Production-ready pathway: push images to container registry, deploy to cloud (e.g., Azure Web App, AWS ECS, or GKE). Static assets can also be hosted on CDN if decoupled.

## Functional Scope

### Public Portal
- **Home**: fetch latest advisories, KEV KPI, weekly highlights from backend endpoints (`/api/public/home`).
- **Advisories List/Detail**: CRUD operations available internally, public GET endpoints with filters (`/api/public/advisories`, `/api/public/advisories/:id`, `/api/public/advisories/:id/export`).
- **KEV Kenya**: dataset served via `/api/public/kev` with CSV/JSON export routes.
- **Trends**: aggregated metrics from incidents/advisories computed server-side (`/api/public/trends?week=YYYY-WW`). Backend enforces k-anonymity before returning chart data.
- **Report Incident CTA**: directs to awareness content for general public; actual submission constrained to authenticated workspace users.

### Workspace (Restricted)
- **Authentication**: login triggers mock SSO handoff; backend issues session cookie (Express session + in-memory store for demo) mapping to seeded identities and roles (Analyst, Editor, Legal, Publisher, Admin).
- **Inbox/Triage**: list incidents with filters, real-time updates via server-sent events or polling (MVP uses polling).
- **Case View**: update status, add timeline notes, manage IOC entries (indicator patterns stored in DB), attach draft advisories.
- **Publish Review**: redaction scanner service, approval workflow, final publish triggers creation/update of public advisory records and audit log entry.
- **Admin**: manage users (create, deactivate, role updates) and view integration stubs (OpenCTI/MISP sync status, KEV refresh).

### Additional Pages (New)
- **Members Dashboard**: summarises internal metrics (incident counts, pending approvals) for logged-in users.
- **Help Centre**: hosts quick reference, policy links, and onboarding materials (static Markdown rendered client-side).

## Data Model Overview
Key entities captured in Prisma schema:
- `User`: id, email, displayName, organisation, roles (enum array), lastLogin.
- `Session`: for mock SSO sessions (if using DB-backed sessions).
- `Incident`: title, summary, tlp (enum), severity, sector, incidentType, status, occurredAt, reporterId, createdAt, updatedAt.
- `IncidentNote`: belongs to incident, authorId, body, createdAt.
- `Indicator`: incidentId, type, value, tlp, description.
- `Advisory`: status (draft/published/internal), title, slug, summary, actions, detection, audience, severity, tlp, publishedAt, createdById, sourceIncidentId (optional).
- `AdvisoryApproval`: records which role/user approved and when.
- `KevRecord`: cve, vendor, product, status, dateAdded, deadline, reference, sectors (string array), recommendedDeadline, description.
- `TrendSnapshot`: weekNumber, year, data JSON (aggregated metrics), generatedAt.
- `AuditLog`: actorId, actionType, entityType, entityId, metadata JSON, createdAt.

Mock data seeding will populate baseline incidents, advisories, KEV records, and users corresponding to ODPC/Machakos/Kajiado sample personas.

## API Surface (Draft)

### Public Routes (`/api/public`)
- `GET /health`
- `GET /home` – returns KPIs (kevCount, latestAdvisories[], trendHighlight).
- `GET /advisories` – query params: tlp (default CLEAR), severity, audience, search, page, pageSize.
- `GET /advisories/:id`
- `GET /advisories/:id/export` – JSON download, includes STIX report stub.
- `GET /kev` – same dataset for table (supports query params `status`, `vendor`, `q`).
- `GET /kev/export.csv`
- `GET /kev/export.json`
- `GET /trends` – query `week` (ISO week) or `range`.
- `GET /policy` – returns publication policy markdown.

### Workspace Routes (`/api/workspace`)
- `POST /auth/mock-sso/start` – initiates mock login, returns redirect URL.
- `POST /auth/mock-sso/callback` – completes login, issues session.
- `POST /auth/logout`
- `GET /users/me`
- `GET /incidents` – filters: status, severity, tlp, search, sector.
- `POST /incidents`
- `GET /incidents/:id`
- `PATCH /incidents/:id`
- `POST /incidents/:id/notes`
- `POST /incidents/:id/indicators`
- `DELETE /incidents/:id/indicators/:indicatorId`
- `POST /incidents/:id/draft-advisory`
- `GET /advisories/drafts`
- `POST /advisories/:id/approve`
- `POST /advisories/:id/publish` – body indicates target (public | members).
- `GET /admin/users`, `POST /admin/users`, `PATCH /admin/users/:id`
- `GET /admin/integrations`
- `POST /admin/kev/sync` (stub – logs request, updates timestamp)

### Internal Services
- **RedactionService**: receives advisory body, returns sanitized content and flagged items.
- **TrendService**: nightly (or manual) job recomputes `TrendSnapshot` from incidents and advisories complying with k-anonymity.
- **NotificationService**: for MVP, logs “notifications” to database; CLI utility can display or convert to email later.

## Authentication & Authorization
- Mock SSO implemented using Passport custom strategy: user selects identity (pre-defined) -> backend creates session.
- Session stored via `express-session` with SQLite-backed store (connect-sqlite3) for simplicity.
- Authorization middleware enforces role-based access (RBAC) using enums (ANALYST, EDITOR, LEGAL, PUBLISHER, ADMIN).
- TLP enforcement: middleware ensures only CLEAR data accessible on public routes; for workspace, users limited to incidents flagged as AMBER/RED if they belong to owning organisation (for AMBER+STRICT), otherwise aggregated via `participantOrgId` field.

## Frontend Routing
- `/` – Home
- `/advisories` and `/advisories/:slug`
- `/kev`
- `/trends`
- `/report` – explains submission process; prompts login for partners.
- `/workspace/login`
- `/workspace/dashboard`
- `/workspace/incidents`
- `/workspace/incidents/:id`
- `/workspace/advisories/:id/review`
- `/workspace/admin/users`
- `/workspace/help`

Axios (or Fetch wrapper) handles API calls with interceptors for session cookies. React Query caches results and handles background refresh.

## Data Privacy & Guardrails
- Backend strips or masks sensitive fields before returning to public routes (e.g., no incident timeline exposed).
- Redaction pipeline runs automatically on publish and stores sanitized version separately from internal draft.
- K-anonymity enforced in TrendService: metrics below threshold replaced with `null` and accompanied by message.

## Future Integrations (Not in MVP)
- STIX/TAXII server using `@oasis-open/cti-taxii-server` or OpenCTI connectors.
- MISP sync job bridging indicators using remote APIs.
- Real SSO integration (e.g., Azure AD) by swapping Passport mock strategy with OAuth2/OIDC.

## Next Steps
1. Scaffold monorepo with pnpm workspaces and shared tooling configs.
2. Define Prisma schema + seed scripts based on mock datasets.
3. Implement authentication + core incident/advisory endpoints.
4. Build frontend pages iteratively, starting with public portal then workspace flows.
5. Write integration tests for key endpoints and UI tests for publish workflow.
6. Containerize and push to GitHub repository for collaboration/demo deployment.

