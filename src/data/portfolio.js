/**
 * Centralized portfolio data. Only entries with verified: true are ever
 * rendered anywhere on the site (Home, Work, case studies, sitemap,
 * structured data). Do not add an entry here without a real, confirmed
 * client relationship — see project instructions before editing this file.
 */
export const portfolioProjects = [
  {
    id: "om-pictures",
    clientName: "Om Pictures",
    projectName: "Om Pictures Digital Presence",
    industry: "Photography, Videography & Creative Media",
    category: "Creative Business",
    headline: "Creating A Premium Digital Presence For A Creative Studio.",
    shortDescription:
      "Brainlink Softwares created a modern digital experience for Om Pictures to present photography, videography and creative services through an elegant, responsive and conversion-focused website.",
    problem:
      "Om Pictures needed a responsive, professional website to present its photography and videography portfolio — including wedding photography — and make it easy for prospective clients to enquire and connect on WhatsApp.",
    approach:
      "Brainlink Softwares designed and built a responsive frontend structured around portfolio presentation, with an enquiry experience, WhatsApp integration and an SEO-friendly page structure.",
    outcome:
      "A responsive, easy-to-navigate website that presents Om Pictures' creative work and gives visitors a direct path to enquire or start a conversation.",
    services: [
      "Website Design",
      "Website Development",
      "Responsive Frontend Development",
      "Portfolio Presentation",
      "WhatsApp Integration",
      "SEO-Friendly Structure",
    ],
    technologies: ["React", "Tailwind CSS", "Vercel"],
    projectUrl: null,
    status: "Client Project",
    featured: true,
    verified: true,
  },
  {
    id: "shubham-rathi",
    clientName: "Shubham Rathi",
    projectName: "Constituency Connect & Polling Station Management Platform",
    industry: "Political Campaign Technology",
    category: "Political Campaign Technology",
    headline: "Powering Ground Operations Across 361 Polling Stations.",
    shortDescription:
      "Brainlink Softwares built a bilingual (English/Hindi) constituency operations platform for the Bilari Assembly Constituency campaign, combining a public campaign website with polling-station search, household registration and role-based admin/volunteer management.",
    problem:
      "The campaign needed to run ground operations across all 361 polling stations of the constituency — coordinating volunteers, registering households and giving the public a way to find their polling station — while presenting a professional, bilingual public-facing campaign website.",
    approach:
      "Brainlink Softwares designed and built a full bilingual platform: a public campaign site, a polling-station search and household registration system, a volunteer application pipeline, and role-based admin/volunteer dashboards, backed by Firebase authentication and cloud data services.",
    outcome:
      "A working, production-ready platform giving the campaign a coordinated way to manage volunteers and polling-station operations across the constituency, alongside a professional bilingual public presence.",
    services: [
      "Website Development",
      "Web Application Development",
      "Bilingual (English/Hindi) Localization",
      "Role-Based Admin & Volunteer Dashboards",
      "Volunteer Management System",
      "Authentication & Cloud Integration",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase Auth", "Turso", "Cloudinary"],
    projectUrl: "https://www.shubhamrathi.org",
    status: "Client Project",
    featured: true,
    verified: true,
  },
];

export const portfolioCategories = [
  "All Projects",
  ...Array.from(new Set(portfolioProjects.filter((p) => p.verified).map((p) => p.category))),
];

export const verifiedProjects = portfolioProjects.filter((p) => p.verified);
export const featuredProjects = verifiedProjects.filter((p) => p.featured);
export const getProjectById = (id) => verifiedProjects.find((p) => p.id === id);
