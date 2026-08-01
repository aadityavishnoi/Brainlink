/**
 * Engagement models replace rigid "package" pricing with a clearer picture
 * of what's included, what isn't, and how each model works. The two
 * starting prices below are the studio's existing published rates —
 * nothing here is invented.
 */
export const engagementModels = [
  {
    id: "starter-presence",
    name: "Starter Website / Digital Presence",
    tag: null,
    startingPrice: "₹9,999",
    priceNote: "starting price, per project",
    desc: "A professional, responsive online presence for a small business or individual — designed, built and deployed.",
    includes: [
      "A custom-designed responsive website (not a template flip)",
      "Up to the pages agreed in your proposal",
      "Basic on-page SEO setup (titles, meta descriptions, sitemap)",
      "Deployment assistance and a walkthrough of the finished site",
    ],
    excludes: [
      "Hosting and domain costs (billed by your provider, not Brainlink)",
      "Custom backend logic or database-driven features",
      "Ongoing content updates after handover",
    ],
    conditions: "Starting price applies to a standard brochure-style site. Additional pages, custom animation, or e-commerce functionality are quoted separately once scope is confirmed.",
    revisions: "Revision rounds are agreed in writing before work begins, based on project size.",
    support: "A short post-launch support window is included; ongoing maintenance is available separately.",
    highlight: false,
    cta: "Request This",
  },
  {
    id: "custom-product",
    name: "Custom Product Development",
    tag: "Most Requested",
    startingPrice: "Custom Quote",
    priceNote: "scoped per project",
    desc: "Web applications, internal tools, SaaS platforms and business software built to your specification.",
    includes: [
      "Discovery, technical planning and architecture design",
      "Full-cycle development with milestone check-ins",
      "API and third-party integrations as required",
      "Testing and a production deployment",
    ],
    excludes: [
      "Third-party service costs (payment gateways, SMS/email providers, cloud hosting)",
      "Ongoing feature development beyond the agreed scope",
    ],
    conditions: "Every custom build is quoted after a scoping call, based on complexity, integrations and timeline — there's no fixed starting price for this category because no two products are the same.",
    revisions: "Revision rounds and milestone reviews are defined in the project proposal.",
    support: "Support period is agreed at project sign-off, based on the scale of what's delivered.",
    highlight: true,
    cta: "Get a Project Estimate",
  },
  {
    id: "dedicated-support",
    name: "Dedicated Development Support",
    tag: null,
    startingPrice: "₹19,999",
    priceNote: "starting price, per month",
    desc: "Ongoing development capacity for businesses that need continuous feature work, fixes and technical support.",
    includes: [
      "A defined monthly capacity for feature development and fixes",
      "Priority response for critical issues",
      "Regular status updates on work completed",
    ],
    excludes: [
      "Ground-up new product builds (scoped separately as Custom Product Development)",
      "Third-party subscription or infrastructure costs",
    ],
    conditions: "Starting price reflects a baseline monthly capacity; larger scopes are quoted after a short capacity-planning call.",
    revisions: "Not applicable — this model covers ongoing work rather than a single fixed deliverable.",
    support: "Continues for as long as the engagement is active, on a month-to-month basis.",
    highlight: false,
    cta: "Talk About This",
  },
  {
    id: "enterprise",
    name: "Enterprise & Custom Solutions",
    tag: null,
    startingPrice: "Custom",
    priceNote: "based on scope",
    desc: "Complex integrations, scalable platforms and long-term development partnerships for larger organizations.",
    includes: [
      "Dedicated technical planning and architecture consultation",
      "Legacy system review and modernization support",
      "Long-term development partnership with regular audits",
    ],
    excludes: [
      "Fixed pricing — enterprise scope varies too much to publish a starting figure",
    ],
    conditions: "We start with a technical discovery phase to understand existing systems, constraints and compliance needs before proposing a plan.",
    revisions: "Defined per engagement, typically tied to milestone sign-off rather than a fixed count.",
    support: "Ongoing support structured as part of the long-term engagement agreement.",
    highlight: false,
    cta: "Contact Us",
  },
];
