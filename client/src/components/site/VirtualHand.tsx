type Props = {
  /** 0 = open, 1 = closed */
  closure: number;
  className?: string;
};

const fingers = [
  { x: 52, len: 66 },
  { x: 77, len: 80 },
  { x: 102, len: 76 },
  { x: 127, len: 60 },
];

/** Stylised front-facing virtual hand that curls as `closure` rises. */
export function VirtualHand({ closure, className }: Props) {
  const c = Math.max(0, Math.min(1, closure));
  const curl = 1 - 0.68 * c;
  const thumbAngle = -38 + 70 * c;

  return (
    <svg viewBox="0 0 200 250" className={className} role="img" aria-label={`Virtual hand, ${Math.round(c * 100)}% closed`}>
      <defs>
        <linearGradient id="vh-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9d7f7" />
          <stop offset="100%" stopColor="#8fa9ea" />
        </linearGradient>
      </defs>
      <g fill="url(#vh-fill)" stroke="#1f3f94" strokeWidth="2.5" strokeLinejoin="round">
        <rect x="70" y="190" width="60" height="60" rx="10" opacity="0.85" />
        {fingers.map(f => (
          <rect
            key={f.x}
            x={f.x}
            y={118 - f.len}
            width="22"
            height={f.len + 8}
            rx="11"
            style={{
              transformBox: "fill-box",
              transformOrigin: "50% 100%",
              transform: `scaleY(${curl})`,
            }}
          />
        ))}
        <rect
          x="34"
          y="120"
          width="22"
          height="62"
          rx="11"
          style={{
            transformBox: "fill-box",
            transformOrigin: "50% 100%",
            transform: `rotate(${thumbAngle}deg)`,
          }}
        />
        <rect x="48" y="108" width="104" height="96" rx="30" />
      </g>
      <g stroke="#1f3f94" strokeWidth="2" strokeLinecap="round" opacity={0.25 + 0.5 * c}>
        {fingers.map(f => (
          <line key={f.x} x1={f.x + 5} x2={f.x + 17} y1={122} y2={122} />
        ))}
      </g>
    </svg>
  );
}
