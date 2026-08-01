import { useEffect, useRef, useState } from "react";

/**
 * Desktop-only magnetic cursor ring. Gated behind (hover:hover) and
 * (pointer:fine) so touch/tablet devices keep their native cursor
 * untouched. Position updates mutate the ring's transform directly
 * (no React state per mousemove) to stay cheap; only hover/label state
 * goes through React since it changes far less often.
 */
export default function CustomCursor() {
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hoverState, setHoverState] = useState({ active: false, label: "" });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = (e) => setEnabled(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");

    const handleMove = (e) => {
      const el = ringRef.current;
      if (el) el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    const handleOver = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      if (!target) return;
      setHoverState({ active: true, label: target.getAttribute("data-cursor-label") || "" });
    };
    const handleOut = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      if (!target) return;
      setHoverState({ active: false, label: "" });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10000,
        pointerEvents: "none",
        width: hoverState.active ? 64 : 28,
        height: hoverState.active ? 64 : 28,
        borderRadius: "50%",
        border: "1.5px solid rgba(74,114,255,0.55)",
        background: hoverState.active ? "rgba(74,114,255,0.08)" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "width 0.2s cubic-bezier(0.22,1,0.36,1), height 0.2s cubic-bezier(0.22,1,0.36,1), background 0.2s ease, transform 0.08s linear",
        willChange: "transform",
      }}
    >
      {hoverState.label && (
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.62rem",
            fontWeight: 600,
            color: "var(--accent)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {hoverState.label}
        </span>
      )}
    </div>
  );
}
