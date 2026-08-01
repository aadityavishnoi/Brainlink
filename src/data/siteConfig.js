/**
 * Single source of truth for verified contact details, business info and
 * social links. Every page pulls from here instead of hardcoding values,
 * so a change only needs to happen once.
 */
export const siteConfig = {
  name: "Brainlink Softwares",
  domain: "brainlink.in",
  email: "team.brainlink@gmail.com",
  phone: "+91-94123-30177",
  phoneHref: "tel:+919412330177",
  whatsappNumber: "918126280200",
  whatsappHref: (text = "Hi, Brainlink Softwares") =>
    `https://wa.me/918126280200?text=${encodeURIComponent(text)}`,
  address: "Meena Market Road, Kanth, Moradabad (244501), Uttar Pradesh",
  msmeUdyam: "UDYAM-UP-59-0113622",
  hours: {
    weekdays: "Mon – Sat: 10:00 AM – 7:00 PM IST",
    weekend: "Sunday: WhatsApp only",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/brainlinksoftwares/",
    instagram: "https://www.instagram.com/brainlinksoftwares/",
    x: "https://x.com/BrainlinkIndia",
  },
};
