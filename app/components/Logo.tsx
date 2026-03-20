export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <rect x="10" y="28" width="38" height="14" rx="4" fill="#22c55e" />

      {/* Head */}
      <rect x="44" y="24" width="14" height="10" rx="3" fill="#22c55e" />

      {/* Upper jaw snout */}
      <rect x="54" y="22" width="6" height="5" rx="1.5" fill="#16a34a" />

      {/* Lower jaw snout */}
      <rect x="54" y="27" width="6" height="4" rx="1.5" fill="#15803d" />

      {/* Teeth top */}
      <rect x="55" y="26" width="2" height="3" rx="0.5" fill="white" />
      <rect x="58" y="26" width="2" height="3" rx="0.5" fill="white" />

      {/* Eye */}
      <rect x="48" y="22" width="5" height="5" rx="1" fill="#0f172a" />
      <rect x="49" y="23" width="2" height="2" rx="0.5" fill="#4ade80" />
      <rect x="50" y="23" width="1" height="1" rx="0.3" fill="white" />

      {/* Spine ridges */}
      <rect x="14" y="24" width="4" height="5" rx="1" fill="#16a34a" />
      <rect x="21" y="22" width="4" height="7" rx="1" fill="#16a34a" />
      <rect x="28" y="21" width="4" height="8" rx="1" fill="#16a34a" />
      <rect x="35" y="22" width="4" height="7" rx="1" fill="#16a34a" />

      {/* Tail */}
      <path
        d="M10 32 Q4 30 2 38 Q6 36 10 42"
        stroke="#22c55e"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Legs */}
      <rect x="16" y="40" width="5" height="8" rx="2" fill="#16a34a" />
      <rect x="24" y="40" width="5" height="8" rx="2" fill="#16a34a" />
      <rect x="33" y="40" width="5" height="8" rx="2" fill="#16a34a" />
      <rect x="41" y="40" width="5" height="8" rx="2" fill="#16a34a" />

      {/* Feet */}
      <rect x="14" y="46" width="9" height="3" rx="1.5" fill="#15803d" />
      <rect x="22" y="46" width="9" height="3" rx="1.5" fill="#15803d" />
      <rect x="31" y="46" width="9" height="3" rx="1.5" fill="#15803d" />
      <rect x="39" y="46" width="9" height="3" rx="1.5" fill="#15803d" />

      {/* Tech circuit lines on body */}
      <line x1="20" y1="33" x2="40" y2="33" stroke="#4ade80" strokeWidth="0.8" opacity="0.6" />
      <line x1="30" y1="29" x2="30" y2="41" stroke="#4ade80" strokeWidth="0.8" opacity="0.6" />
      <circle cx="30" cy="33" r="1.5" fill="#4ade80" opacity="0.8" />
      <circle cx="22" cy="33" r="1" fill="#4ade80" opacity="0.6" />
      <circle cx="38" cy="33" r="1" fill="#4ade80" opacity="0.6" />
    </svg>
  );
}
