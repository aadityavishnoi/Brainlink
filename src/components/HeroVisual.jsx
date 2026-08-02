import { BrowserMockup, PhoneMockup } from "./ProductMockup";

/**
 * Static, layered product-engineering visual for the homepage hero.
 * No 3D, no animation loop — a single composition that loads instantly.
 */
export default function HeroVisual() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 480, margin: "0 auto" }} aria-hidden="true">
      <BrowserMockup style={{ width: "100%" }} />
      <PhoneMockup
        style={{
          position: "absolute",
          bottom: -28,
          right: -16,
          transform: "rotate(-2deg)",
        }}
        accent="var(--accent)"
      />
    </div>
  );
}
