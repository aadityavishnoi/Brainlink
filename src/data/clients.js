import clientLogo from "../assets/clients/image.png";

/**
 * Verified clients only — do not add names here without a real, confirmed
 * working relationship. Currently a single documented client engagement.
 */
export const clients = [
  {
    name: "Form Auraa Architects",
    tagline: "Architecture | Interior | Landscape | Structure",
    logo: clientLogo,
    service: "Video Editing & Production",
    category: "Media & Content",
    industry: "Architecture & Design",
    contact: "Ar. Kushagra Raj · Ar. Saurav Sharma",
    location: "Greater Noida, Uttar Pradesh",
    desc: "Handled visual storytelling for the firm, providing video editing and production to showcase their architectural projects.",
  },
];

export const workCategories = ["All", ...Array.from(new Set(clients.map((c) => c.category)))];
