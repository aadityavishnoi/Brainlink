import { Suspense, lazy, useEffect, useState } from "react";
import HeroSceneFallback from "./HeroSceneFallback";

const BrainlinkDigitalCity = lazy(() => import("../three/BrainlinkDigitalCity"));

function detectWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

/**
 * Decides whether the visitor gets the full interactive 3D city or the
 * static illustration: reduced-motion and no-WebGL always get the static
 * version (it carries the same information, so nothing is 3D-only).
 * Everyone else gets the real scene, lazy-loaded so it never blocks the
 * hero's first paint — the fallback illustration renders immediately while
 * the ~heavier 3D chunk streams in behind it.
 */
export default function HeroScene() {
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState("fallback");

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasWebGL = detectWebGL();
    setMode(prefersReduced || !hasWebGL ? "fallback" : "3d");
    setReady(true);
  }, []);

  if (!ready) return <HeroSceneFallback animated={false} />;

  if (mode === "fallback") return <HeroSceneFallback />;

  const mobile = window.innerWidth < 768;

  return (
    <div style={{ width: "100%", maxWidth: 480, aspectRatio: "1/1", margin: "0 auto" }}>
      <Suspense fallback={<HeroSceneFallback />}>
        <BrainlinkDigitalCity mobile={mobile} />
      </Suspense>
    </div>
  );
}
