import React, { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../css/index.css";

const teamMembers = [
  {
    name: "Aaditya Vishnoi",
    role: "Co-Founder",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEwlb2boefMFA/profile-displayphoto-scale_400_400/B56ZpF2eFBHQAg-/0/1762108500586?e=1770249600&v=beta&t=CzZIFcDA1c67mpokXXbmRAD4pPP6SqOgrMpBwO3Hat8",
    linkedin: "https://www.linkedin.com/in/aadityavishnoi",
    instagram: "https://www.instagram.com/steadyspace",
    speech:
      "Brainlink was started with a simple belief — software should solve real problems, not create new ones. We focus on clean architecture, long-term scalability, and honest engineering. Every project we take reflects our responsibility toward our clients’ businesses.",
  },
  {
    name: "Ayush Gautam",
    role: "Co-Founder",
    img: "https://media.licdn.com/dms/image/v2/D5603AQHsFSBUn3U-FA/profile-displayphoto-scale_400_400/B56ZvHvIsoIQAg-/0/1768582584574?e=1770249600&v=beta&t=X3EplQ0nZEaU7IC_FxY2rOwb1OGlHO-KNPJhUSMxQ2k",
    linkedin: "https://www.linkedin.com/in/ayush24kr",
    instagram: "https://www.instagram.com/ayus.h_24/",
    speech:
      "Our goal has never been to build flashy products. We build systems that teams can trust in production. At Brainlink, execution matters more than promises, and quality matters more than speed.",
  },
];

export default function Team() {
  /* ================= SEO ================= */
  useEffect(() => {
    document.title =
      "Team | Brainlink Softwares – Founders & Leadership";

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Meet the founders and leadership team behind Brainlink Softwares. Learn about our vision, culture, and the people building scalable software solutions."
    );
  }, []);

  /* ================= SCHEMA ================= */
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brainlink Softwares",
    url: "https://www.brainlink.in",
    founder: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      sameAs: [member.linkedin],
    })),
  };

  return (
    <>
      <Header />

      {/* Schema JSON */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900">
            The Team Behind Brainlink Softwares
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed font-outfit">
            Meet the founding team of <strong>Brainlink Softwares</strong>, a
            software development company focused on scalable web solutions,
            clean architecture, and long-term business growth.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto" />

      {/* Team Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-12 sm:grid-cols-2 justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl px-10 py-12 text-center shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={member.img}
                  alt={`${member.name} – ${member.role} at Brainlink Softwares`}
                  className="w-32 h-32 mx-auto rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-300 transition"
                  loading="lazy"
                />

                <h3 className="mt-8 text-2xl font-semibold font-outfit text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-blue-600 font-medium tracking-wide">
                  {member.role}
                </p>

                <div className="mt-6 flex justify-center gap-6">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-700 text-xl"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-500 text-xl"
                    aria-label={`${member.name} Instagram`}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Speech */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 font-outfit text-gray-900">
            Message from the Founders
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border rounded-3xl p-10 shadow-sm hover:shadow-xl transition"
              >
                <div className="flex items-center gap-5 mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-blue-600">{member.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed italic">
                  “{member.speech}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold font-outfit text-gray-900">
            How We Work
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We value ownership over titles, clarity over noise, and execution
            over excuses. Every line of code is written with long-term impact
            in mind.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
