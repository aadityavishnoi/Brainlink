import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.brainlink.in";
const SITE_NAME = "Brainlink Softwares";
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

/**
 * Centralized per-page SEO: title, description, canonical, Open Graph,
 * Twitter card and optional JSON-LD structured data.
 */
export default function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  jsonLd = null,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Custom Software, Web & Mobile App Development`;
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@BrainlinkIndia" />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": SITE_NAME,
  "url": SITE_URL,
  "logo": DEFAULT_IMAGE,
  "image": DEFAULT_IMAGE,
  "email": "team.brainlink@gmail.com",
  "telephone": "+91-94123-30177",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Meena Market Road, Kanth",
    "addressLocality": "Moradabad",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "244501",
    "addressCountry": "IN",
  },
  "sameAs": [
    "https://www.linkedin.com/company/brainlinksoftwares/",
    "https://www.instagram.com/brainlinksoftwares/",
    "https://x.com/BrainlinkIndia",
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00",
    },
  ],
};

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema({ name, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "name": name,
    "description": description,
    "url": `${SITE_URL}${url}`,
    "provider": { "@type": "Organization", "name": SITE_NAME, "url": SITE_URL },
    "areaServed": "IN",
  };
}

export function articleSchema({ title, description, image, datePublished, dateModified, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image || DEFAULT_IMAGE,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": { "@type": "Organization", "name": SITE_NAME },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": { "@type": "ImageObject", "url": DEFAULT_IMAGE },
    },
    "mainEntityOfPage": `${SITE_URL}${path}`,
  };
}

export { SITE_URL, SITE_NAME };
