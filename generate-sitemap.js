// generate-sitemap.js

const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

// ✅ Your website URL (change this to your actual domain)
const SITE_URL = "https://www.brainlink.in";

// ✅ List only public routes (ignore common components)
const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/plans", changefreq: "monthly", priority: 0.8 },
  { url: "/pricing", changefreq: "monthly", priority: 0.7 },
  { url: "/service", changefreq: "monthly", priority: 0.7 },
];

(async () => {
  try {
    const sitemap = new SitemapStream({ hostname: SITE_URL });
    routes.forEach((route) => sitemap.write(route));
    sitemap.end();

    const xml = await streamToPromise(sitemap);
    const sitemapPath = "./public/sitemap.xml";

    fs.writeFileSync(sitemapPath, xml.toString());
    console.log("✅ Sitemap successfully created at:", sitemapPath);
  } catch (err) {
    console.error("❌ Error creating sitemap:", err);
  }
})();
