import { siteConfig } from "../data/siteConfig";
import { WhatsAppIcon } from "./icons/BrandIcons";

export default function WhatsAppFAB() {
  return (
    <a
      href={siteConfig.whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Brainlink Softwares on WhatsApp"
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 999,
        width: 52, height: 52, borderRadius: "50%",
        background: "#25D366",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        textDecoration: "none",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
    >
      <WhatsAppIcon width={24} height={24} style={{ color: "#fff" }} />
    </a>
  );
}
