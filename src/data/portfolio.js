/**
 * Centralized portfolio data. Only entries with verified: true are ever
 * rendered anywhere on the site (Home, Work, case studies, sitemap,
 * structured data). Do not add an entry here without a real, confirmed
 * client relationship — see project instructions before editing this file.
 */
export const portfolioProjects = [
  {
    id: "parkin10-mobility",
    clientName: "Parkin10 Mobility Private Limited",
    projectName: "Parkin10 Connect",
    industry: "Smart Mobility & Parking Technology",
    category: "Mobility Technology",
    headline: "Building A Smarter Vehicle Communication Ecosystem.",
    shortDescription:
      "Brainlink Softwares contributed to the development of Parkin10's digital mobility ecosystem, including web experiences, QR-based vehicle communication and real-time calling technology.",
    problem:
      "Parkin10 needed a way for people to reach a vehicle's owner instantly and safely, without exchanging phone numbers, plus a web presence that reflected a modern mobility-tech product.",
    approach:
      "Brainlink Softwares worked on the Parkin10 Connect web experience — a vehicle QR-based communication system that lets one person reach another through the platform rather than a shared phone number — alongside supporting web and backend integration work.",
    outcome:
      "A working web-calling and QR communication flow integrated into Parkin10's product, along with backend and API integration support for the wider platform.",
    services: [
      "Website Development",
      "Web Application Development",
      "QR-Based Communication System",
      "WebRTC Calling Infrastructure",
      "Backend & API Integration",
      "Technical Architecture",
    ],
    technologies: ["React", "Node.js", "WebRTC", "PostgreSQL"],
    projectUrl: null,
    status: "Client Project",
    featured: true,
    verified: true,
  },
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
];

export const portfolioCategories = [
  "All Projects",
  ...Array.from(new Set(portfolioProjects.filter((p) => p.verified).map((p) => p.category))),
];

export const verifiedProjects = portfolioProjects.filter((p) => p.verified);
export const featuredProjects = verifiedProjects.filter((p) => p.featured);
export const getProjectById = (id) => verifiedProjects.find((p) => p.id === id);
