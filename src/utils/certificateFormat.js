/**
 * Certificate ID normalization and validation.
 *
 * Pure, dependency-free — imported directly by the frontend (search form,
 * result page) AND by the Vercel serverless lookup function
 * (api/certificates/[slug].js reaches into src/ via a relative import; CRA's
 * ModuleScopePlugin only restricts imports *from inside* src/, not into it,
 * so this single file is a safe source of truth for both runtimes without
 * duplicating the rules).
 *
 * Canonical slug format: BLS-CERT-2026-AUG-001
 */

const VERIFY_PATH_MARKER = "/verify-certificate/";

export const CERTIFICATE_SLUG_PATTERN = /^BLS-CERT-\d{4}-[A-Z]{3}-\d{3,4}$/;
export const CERTIFICATE_FORMAT_EXAMPLE = "BLS/CERT/2026/AUG-001";
export const CERTIFICATE_SLUG_EXAMPLE = "BLS-CERT-2026-AUG-001";

/**
 * If given a full verification URL (or bare path), returns just the
 * certificate ID segment after "/verify-certificate/". Otherwise returns
 * the input unchanged, so a plain certificate ID passes straight through.
 */
export function extractCertificateSlugFromUrl(input) {
  if (typeof input !== "string") return "";
  const idx = input.toLowerCase().indexOf(VERIFY_PATH_MARKER);
  if (idx === -1) return input;
  let rest = input.slice(idx + VERIFY_PATH_MARKER.length);
  rest = rest.split(/[?#]/)[0]; // drop any query string or hash
  rest = rest.replace(/\/+$/, ""); // drop trailing slash
  return decodeURIComponent(rest);
}

/**
 * Converts an already-extracted certificate number/slug into canonical
 * slug form: uppercase, "/" and whitespace collapsed to a single "-",
 * repeated separators collapsed, no leading/trailing "-".
 */
export function certificateNumberToSlug(raw) {
  if (typeof raw !== "string") return "";
  let value = raw.trim().toUpperCase();
  value = value.replace(/\//g, "-");
  value = value.replace(/[\s_]+/g, "-");
  value = value.replace(/-{2,}/g, "-");
  value = value.replace(/^-+|-+$/g, "");
  return value;
}

/**
 * Full pipeline: trim -> extract from URL if present -> canonical slug.
 * Accepts "BLS/CERT/2026/AUG-001", "bls-cert-2026-aug-001", a full
 * verification URL, or an already-canonical slug.
 */
export function normalizeCertificateInput(input) {
  if (typeof input !== "string") return "";
  const trimmed = input.trim();
  if (!trimmed) return "";
  const extracted = extractCertificateSlugFromUrl(trimmed);
  return certificateNumberToSlug(extracted);
}

/**
 * True only for a well-formed canonical slug. Rejects anything containing
 * characters outside A-Z, 0-9 and "-" before checking the exact pattern —
 * so no HTML, script tags, SQL fragments or stray punctuation ever reach
 * a database query as a "certificate ID".
 */
export function validateCertificateSlug(slug) {
  if (typeof slug !== "string" || !slug) return false;
  if (!/^[A-Z0-9-]+$/.test(slug)) return false;
  return CERTIFICATE_SLUG_PATTERN.test(slug);
}
