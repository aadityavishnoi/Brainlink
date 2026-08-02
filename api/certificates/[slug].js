import { neon } from "@neondatabase/serverless";
import { normalizeCertificateInput, validateCertificateSlug } from "../../src/utils/certificateFormat.js";

const sql = neon(process.env.DATABASE_URL);

/**
 * Single-purpose, internal lookup used only by the /verify-certificate/:slug
 * page. Not a general-purpose certificates API: no listing, no search by
 * name/email, no create/update/delete. Returns only the fields the public
 * verification card is allowed to show (see src/utils/certificateFormat.js
 * for the slug rules, and README.md "Public and private database fields").
 */
export default async function handler(req, res) {
  // Every response here reflects the current row in Neon — never let a CDN
  // or browser cache a "valid" result past a manual status change.
  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (req.method !== "GET") {
    return res.status(405).json({ status: "error" });
  }

  try {
    const rawSlug = req.query.slug;
    const slug = normalizeCertificateInput(Array.isArray(rawSlug) ? rawSlug[0] : rawSlug || "");

    if (!validateCertificateSlug(slug)) {
      return res.status(400).json({ status: "invalid_format" });
    }

    const rows = await sql`
      SELECT
        certificate_number,
        certificate_slug,
        recipient_name,
        certificate_title,
        internship_role,
        department,
        project_name,
        organisation_name,
        internship_start_date,
        internship_end_date,
        issue_date,
        expiry_date,
        status,
        certificate_file_url,
        public_note,
        revocation_reason_public,
        revoked_at,
        issued_by
      FROM certificates
      WHERE certificate_slug = ${slug}
      LIMIT 1
    `;

    if (!rows.length) {
      return res.status(404).json({ status: "not_found" });
    }

    return res.status(200).json({ status: "found", certificate: rows[0] });
  } catch (err) {
    // Log server-side only — never forward SQL/driver error details to the client.
    console.error("certificate lookup failed:", err);
    return res.status(500).json({ status: "error" });
  }
}
