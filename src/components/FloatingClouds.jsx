/**
 * Soft anime-sky cloud shapes for hero/footer backgrounds. Pure SVG + CSS
 * float animation — no images, no WebGL, cheap to render anywhere.
 */
function Cloud({ className, style, opacity = 0.7, fill = "#FFFFFF" }) {
  return (
    <svg
      viewBox="0 0 200 90"
      aria-hidden="true"
      className={className}
      style={{ position: "absolute", ...style }}
    >
      <ellipse cx="60" cy="55" rx="55" ry="30" fill={fill} opacity={opacity} />
      <ellipse cx="110" cy="40" rx="45" ry="34" fill={fill} opacity={opacity} />
      <ellipse cx="150" cy="58" rx="42" ry="26" fill={fill} opacity={opacity} />
      <ellipse cx="90" cy="65" rx="70" ry="24" fill={fill} opacity={opacity} />
    </svg>
  );
}

export default function FloatingClouds({ variant = "hero" }) {
  if (variant === "footer") {
    return (
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <Cloud className="float-anim-slow" style={{ top: "8%", left: "-4%", width: 220 }} opacity={0.5} />
        <Cloud className="float-anim" style={{ top: "24%", right: "2%", width: 180 }} opacity={0.4} fill="#EEF5FF" />
        <Cloud className="float-anim-slow" style={{ bottom: "4%", left: "38%", width: 260 }} opacity={0.35} />
      </div>
    );
  }

  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <Cloud className="float-anim-slow" style={{ top: "10%", left: "2%", width: 200 }} opacity={0.8} />
      <Cloud className="float-anim" style={{ top: "22%", right: "6%", width: 160 }} opacity={0.65} fill="#F5F0FF" />
      <Cloud className="float-anim-slow" style={{ top: "58%", left: "12%", width: 140 }} opacity={0.55} fill="#EEF5FF" />
      <Cloud className="float-anim" style={{ bottom: "6%", right: "14%", width: 220 }} opacity={0.6} />
    </div>
  );
}
