type NetworkPatternProps = {
  className?: string
  opacity?: number
}

const NODES = [
  [40, 30],
  [120, 18],
  [210, 42],
  [300, 22],
  [390, 50],
  [80, 90],
  [170, 78],
  [260, 110],
  [350, 86],
  [430, 120],
  [30, 150],
  [110, 170],
  [200, 145],
  [290, 175],
  [380, 155],
  [70, 220],
  [160, 240],
  [250, 215],
  [340, 245],
  [420, 210],
] as const

const LINKS: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [1, 5],
  [1, 6],
  [2, 6],
  [2, 7],
  [3, 8],
  [4, 8],
  [4, 9],
  [5, 10],
  [5, 11],
  [6, 11],
  [6, 12],
  [7, 12],
  [7, 13],
  [8, 13],
  [8, 9],
  [9, 14],
  [10, 15],
  [11, 15],
  [11, 16],
  [12, 16],
  [12, 17],
  [13, 17],
  [13, 18],
  [14, 18],
  [14, 19],
  [16, 17],
  [17, 18],
]

export function NetworkPattern({ className = '', opacity = 0.45 }: NetworkPatternProps) {
  return (
    <svg
      viewBox="0 0 460 270"
      className={`pointer-events-none ${className}`}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g opacity={opacity}>
        {LINKS.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
        {NODES.map(([x, y], i) => (
          <circle
            key={`${x}-${y}-${i}`}
            cx={x}
            cy={y}
            r={i % 4 === 0 ? 3.4 : 2.2}
            fill="currentColor"
          />
        ))}
      </g>
    </svg>
  )
}

export function NetworkGlobe({ className = 'h-16 w-16 text-white' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="28" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" />
      <ellipse cx="40" cy="40" rx="14" ry="28" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
      <ellipse cx="40" cy="40" rx="28" ry="12" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
      <path
        d="M16 32c8-6 16-9 24-9s16 3 24 9M16 48c8 6 16 9 24 9s16-3 24-9"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.2"
      />
      {[
        [40, 12],
        [58, 20],
        [68, 36],
        [62, 56],
        [44, 68],
        [24, 62],
        [14, 44],
        [22, 24],
        [40, 40],
        [52, 44],
        [32, 50],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.1" fill="currentColor" />
      ))}
      <path
        d="M40 12L58 20L68 36L62 56L44 68L24 62L14 44L22 24Z"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1"
      />
      <path d="M22 24L40 40L58 20M14 44L40 40L62 56M32 50L44 68" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1" />
    </svg>
  )
}

export function Halftone({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-[42%] ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.38) 1.15px, transparent 1.25px)',
        backgroundSize: '11px 11px',
        maskImage: 'linear-gradient(to top, black 10%, transparent)',
        WebkitMaskImage: 'linear-gradient(to top, black 10%, transparent)',
      }}
      aria-hidden="true"
    />
  )
}
