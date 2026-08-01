/**
 * Static, non-3D illustration of the Brainlink Digital City — shown while
 * the R3F scene chunk loads, and permanently for reduced-motion users or
 * browsers without WebGL. Same visual language (core, islands, screens),
 * built purely in SVG/CSS so it never depends on a GPU context.
 */
export default function HeroSceneFallback({ animated = true }) {
  const floatClass = animated ? "float-anim" : "";
  const floatSlowClass = animated ? "float-anim-slow" : "";

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 460, aspectRatio: "1/1", margin: "0 auto" }}>
      <svg viewBox="0 0 420 420" width="100%" height="100%" role="img" aria-label="Illustration of the Brainlink digital city: a central core connected to floating islands and holographic screens">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4A72FF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#8C6BFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8C6BFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* orbit rings */}
        <circle cx="210" cy="200" r="150" fill="none" stroke="rgba(74,114,255,0.18)" strokeDasharray="3 6" />
        <circle cx="210" cy="200" r="105" fill="none" stroke="rgba(140,107,255,0.2)" strokeDasharray="3 6" />

        {/* core */}
        <g className={floatClass}>
          <circle cx="210" cy="200" r="70" fill="url(#coreGlow)" />
          <polygon points="210,155 244,178 244,222 210,245 176,222 176,178" fill="#4A72FF" opacity="0.92" />
          <polygon points="210,155 244,178 210,200 176,178" fill="#5C82FF" opacity="0.95" />
        </g>

        {/* islands */}
        <g className={floatSlowClass} style={{ transformOrigin: "76px 140px" }}>
          <ellipse cx="76" cy="150" rx="42" ry="14" fill="#EEF5FF" stroke="rgba(74,114,255,0.25)" />
          <rect x="60" y="118" width="20" height="28" rx="4" fill="#4A72FF" />
          <polygon points="70,108 60,118 80,118" fill="#8C6BFF" />
        </g>

        <g className={floatClass} style={{ transformOrigin: "348px 140px" }}>
          <ellipse cx="348" cy="150" rx="38" ry="13" fill="#F5F0FF" stroke="rgba(140,107,255,0.25)" />
          <rect x="333" y="120" width="18" height="26" rx="4" fill="#8C6BFF" />
          <polygon points="342,110 333,120 351,120" fill="#32C7E8" />
        </g>

        <g className={floatSlowClass} style={{ transformOrigin: "70px 290px" }}>
          <ellipse cx="70" cy="296" rx="34" ry="12" fill="#FFF4EE" stroke="rgba(255,126,182,0.25)" />
          <rect x="57" y="270" width="16" height="22" rx="4" fill="#FF7EB6" />
        </g>

        <g className={floatClass} style={{ transformOrigin: "352px 288px" }}>
          <ellipse cx="352" cy="294" rx="36" ry="12" fill="#EEF5FF" stroke="rgba(50,199,232,0.25)" />
          <rect x="338" y="266" width="17" height="24" rx="4" fill="#32C7E8" />
        </g>

        {/* floating screens */}
        <g className={floatClass} style={{ transformOrigin: "140px 90px" }}>
          <rect x="112" y="70" width="56" height="38" rx="6" fill="#ffffff" stroke="#4A72FF" strokeOpacity="0.4" />
          <rect x="120" y="80" width="20" height="6" rx="2" fill="#4A72FF" opacity="0.6" />
          <rect x="120" y="90" width="32" height="6" rx="2" fill="#4A72FF" opacity="0.35" />
        </g>
        <g className={floatSlowClass} style={{ transformOrigin: "290px 320px" }}>
          <rect x="262" y="302" width="56" height="38" rx="6" fill="#ffffff" stroke="#8C6BFF" strokeOpacity="0.4" />
          <rect x="270" y="312" width="20" height="6" rx="2" fill="#8C6BFF" opacity="0.6" />
          <rect x="270" y="322" width="32" height="6" rx="2" fill="#8C6BFF" opacity="0.35" />
        </g>

        {/* data path */}
        <path d="M76,150 C130,190 160,210 210,200 C260,190 300,170 348,150" fill="none" stroke="#32C7E8" strokeOpacity="0.4" strokeDasharray="2 6" />
      </svg>
    </div>
  );
}
