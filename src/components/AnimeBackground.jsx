export default function AnimeBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full -z-10"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >
      <path
        d="M0,200 C300,100 600,300 900,150 1200,50 1440,120 1440,120"
        fill="none"
        stroke="#2563eb"
        strokeWidth="2"
        className="anime-line anime-line-1"
      />

      <path
        d="M0,500 C400,600 800,250 1200,400 1400,520 1440,380 1440,380"
        fill="none"
        stroke="#93c5fd"
        strokeWidth="1.5"
        className="anime-line anime-line-2"
      />
    </svg>
  );
}
