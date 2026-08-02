# Brainlink Softwares — Website

A React (Create React App) + React Router site deployed on Vercel, with a
Neon PostgreSQL-backed blog (`/api/posts`) and Certificate Verification
System (`/api/certificates`).

## Running locally

```bash
npm install
npm start          # http://localhost:3000
```

`npm start` alone won't serve the `/api` routes (those are Vercel
serverless functions) — endpoints under `/api/*` will 404 or hit the CRA
dev server's HTML fallback locally unless you run them via the Vercel CLI:

```bash
npm i -g vercel
vercel dev
```

## Production build

```bash
npm run build
npm test -- --watchAll=false
```

## Deploying

Push to the branch connected to the Vercel project — it builds and deploys
automatically. `vercel.json` already routes `/api/*` to the serverless
functions and everything else to `index.html` for client-side routing (so
refreshing a nested route like `/verify-certificate/BLS-CERT-2026-AUG-001`
doesn't 404).

---

# Certificate Verification System

A public page where anyone with a Brainlink Softwares certificate (or its
QR code) can confirm it's genuine — without any admin dashboard, login, or
CRUD interface. Certificate records are added and updated **manually**
through the Neon SQL Editor.

## How it fits into the existing site

- **Routes** (added to `src/App.js`, same lazy-loading pattern as every
  other page): `/verify-certificate` and `/verify-certificate/:certificateSlug`.
- **Pages**: `src/pages/VerifyCertificate.jsx` (search form),
  `src/pages/VerifyCertificateResult.jsx` (result page) — both use the
  existing `Layout`, `PageHero`, `SEO`, `Reveal` components and the site's
  existing card/button/field CSS classes, so they look like part of the
  same site, not a bolted-on tool.
- **Server-side lookup**: `api/certificates/[slug].js`, a Vercel
  serverless function using `@neondatabase/serverless` (already a project
  dependency) — the exact same pattern as the existing `api/posts/[slug].js`.
- **Shared normalization logic**: `src/utils/certificateFormat.js`, plain
  JS with no dependencies, imported by both the frontend pages and the
  serverless function (Node's module resolution has no issue reaching into
  `src/` from `api/`; CRA's `ModuleScopePlugin` only restricts the other
  direction).

## 1. Neon PostgreSQL setup

1. Create a Neon project (or reuse the one already backing `/api/posts`).
2. Copy the pooled connection string from the Neon dashboard.
3. Run the migration below against that database.

## 2. Running the SQL migration

Open the Neon SQL Editor (or `psql "$DATABASE_URL"`) and run:

```
db/migrations/001_create_certificates.sql
```

This creates the `certificates` table, its indexes, and an `updated_at`
trigger. It's safe to re-run (`CREATE TABLE IF NOT EXISTS`, etc.).

## 3. Adding `DATABASE_URL`

**Local development** — copy `.env.example` to `.env` and fill in the real
connection string:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require
```

**Vercel** — Project Settings → Environment Variables:

| Name | Value | Environments |
|---|---|---|
| `DATABASE_URL` | your Neon connection string | Production, Preview, Development |

Note there is no `REACT_APP_` prefix — that's intentional. CRA only
inlines env vars prefixed `REACT_APP_` into the browser bundle, so
`DATABASE_URL` is never bundled into frontend JavaScript; it only exists
inside the Vercel serverless function's Node.js runtime.

## 4. Adding a certificate record manually (Neon SQL Editor)

Replace the placeholder recipient details before running:

```sql
INSERT INTO certificates (
    certificate_number,
    certificate_slug,
    recipient_name,
    recipient_email,
    certificate_title,
    internship_role,
    department,
    project_name,
    organisation_name,
    internship_start_date,
    internship_end_date,
    issue_date,
    status,
    certificate_file_url,
    public_note,
    issued_by
)
VALUES (
    'BLS/CERT/2026/AUG-001',
    'BLS-CERT-2026-AUG-001',
    'RECIPIENT NAME',
    'recipient@example.com',
    'Certificate of Internship',
    'Frontend Developer Intern',
    'Software Development',
    'OM Pictures Website',
    'Brainlink Softwares',
    '2026-07-01',
    '2026-08-05',
    '2026-08-05',
    'valid',
    NULL,
    'Successfully completed the assigned internship responsibilities.',
    'Brainlink Softwares'
);
```

`certificate_number` is the human-readable ID as printed on the physical
certificate (`BLS/CERT/2026/AUG-001`); `certificate_slug` is the
URL-safe form (`BLS-CERT-2026-AUG-001`) used in the QR code / link. Keep
both in sync manually — the app does not derive one from the other at
insert time.

## 5. Activating a certificate

New rows default to `status = 'pending'` and won't show as verified until
activated:

```sql
UPDATE certificates
SET status = 'valid'
WHERE certificate_slug = 'BLS-CERT-2026-AUG-001';
```

## 6. Revoking a certificate

```sql
UPDATE certificates
SET
    status = 'revoked',
    revoked_at = NOW(),
    revocation_reason_public = 'This certificate has been revoked by the issuing organisation.'
WHERE certificate_slug = 'BLS-CERT-2026-AUG-001';
```

The verification page reads Neon on every request with `Cache-Control:
no-store` — a revocation is visible immediately, with no cached "valid"
result left showing.

## 7. Marking a certificate as expired

```sql
UPDATE certificates
SET status = 'expired'
WHERE certificate_slug = 'BLS-CERT-2026-AUG-001';
```

## 8. Restoring a certificate

```sql
UPDATE certificates
SET
    status = 'valid',
    revoked_at = NULL,
    revocation_reason_public = NULL,
    revocation_reason_internal = NULL
WHERE certificate_slug = 'BLS-CERT-2026-AUG-001';
```

## 9. Deleting a test certificate

```sql
DELETE FROM certificates
WHERE certificate_slug = 'BLS-CERT-2026-AUG-001';
```

## 10. Adding a certificate PDF link

Upload the PDF anywhere with a stable public URL (e.g. Vercel Blob, S3,
Google Drive share link) and set:

```sql
UPDATE certificates
SET certificate_file_url = 'https://example.com/path/to/certificate.pdf'
WHERE certificate_slug = 'BLS-CERT-2026-AUG-001';
```

The "View Certificate File" button only appears when this column is set.

## 11. Testing a QR verification URL

Physical certificate QR codes should encode only:

```
https://www.brainlink.in/verify-certificate/BLS-CERT-2026-AUG-001
```

To test: open that URL directly in a browser (including a fresh
incognito window, and after a hard refresh) — it should render the
verification result without needing to visit `/verify-certificate` first,
and without a 404, since `vercel.json`'s SPA rewrite covers any
non-`/api` path.

## 12. Supported certificate ID formats

All of the following resolve to the same certificate:

```
BLS/CERT/2026/AUG-001
BLS-CERT-2026-AUG-001
bls-cert-2026-aug-001
  BLS-CERT-2026-AUG-001   (leading/trailing spaces)
https://www.brainlink.in/verify-certificate/BLS-CERT-2026-AUG-001
```

Normalization/validation logic lives in `src/utils/certificateFormat.js`.
The canonical slug pattern is `BLS-CERT-<4-digit year>-<3-letter month>-<3–4 digit sequence>`.
Anything outside `A-Z`, `0-9` and `-` after normalization (HTML, SQL
fragments, stray punctuation, etc.) is rejected before it ever reaches a
database query.

## 13. Public vs. private database fields

The API (`api/certificates/[slug].js`) explicitly selects only these
columns — never `SELECT *`:

**Returned to the public page:** `certificate_number`, `certificate_slug`,
`recipient_name`, `certificate_title`, `internship_role`, `department`,
`project_name`, `organisation_name`, `internship_start_date`,
`internship_end_date`, `issue_date`, `expiry_date`, `status`,
`certificate_file_url`, `public_note`, `revocation_reason_public`,
`revoked_at`, `issued_by`.

**Never returned:** `recipient_email`, `internal_note`,
`revocation_reason_internal`, the database `id` (UUID), `created_at`,
`updated_at`, or anything else in the row.

## 14. Security and privacy

- All Neon queries run server-side only, inside the Vercel serverless
  function, using the `@neondatabase/serverless` tagged-template query
  builder (parameterized — never string-concatenated SQL).
- `DATABASE_URL` has no `REACT_APP_`/`VITE_`/`NEXT_PUBLIC_`/`PUBLIC_`
  prefix, so it is never included in the frontend bundle.
- The endpoint only supports `GET /api/certificates/:slug` — no listing,
  no search by name/email, no create/update/delete. It is an internal
  handler for this one page, not a documented/reusable public API.
- Slugs are validated against a strict format before any query runs.
- Errors are logged server-side (`console.error`) only; the client only
  ever sees a generic `{ status: "error" }` — no SQL text, stack traces,
  or connection details.
- Individual certificate pages (`/verify-certificate/:slug`) are marked
  `noindex` and never include the recipient's name in page metadata, to
  limit search-engine exposure of personal information. The search page
  itself (`/verify-certificate`) stays indexable.
- Responses are sent with `Cache-Control: no-store` so a manual status
  change in Neon (e.g. revoking a certificate) is reflected immediately.

---

## Other environment variables

`REACT_APP_SUPABASE_URL` / `REACT_APP_SUPABASE_ANON_KEY` are present in
`.env` for other parts of the project; the Supabase anon key is a public,
publishable key by Supabase's own design and is safe to expose
client-side, unlike `DATABASE_URL`.
