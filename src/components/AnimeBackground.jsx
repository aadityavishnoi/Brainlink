import { useEffect } from "react";
import anime from "animejs";

export default function AnimeBackground() {
  useEffect(() => {
    anime({
      targets: ".anime-path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 4000,
      delay: anime.stagger(400),
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full -z-10"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >
      <path
        d="M0,200 C300,100 600,300 900,150 1200,50 1440,120 1440,120"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        className="anime-path"
      />
      <path
        d="M0,450 C400,550 800,250 1200,400 1400,520 1440,380 1440,380"
        fill="none"
        stroke="#93c5fd"
        strokeWidth="1.5"
        className="anime-path"
      />
    </svg>
  );
}
