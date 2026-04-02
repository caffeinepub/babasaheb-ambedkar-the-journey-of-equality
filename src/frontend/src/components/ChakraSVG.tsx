/**
 * Reusable Ashoka Chakra SVG components.
 * Uses computed angle as key to satisfy noArrayIndexKey lint rule.
 */

const SPOKE_ANGLES = Array.from({ length: 24 }, (_, i) => (i * 360) / 24);

interface ChakraSpokesProps {
  cx: number;
  cy: number;
  innerR: number;
  outerR: number;
  stroke?: string;
  strokeWidth?: number;
}

export function ChakraSpokes({
  cx,
  cy,
  innerR,
  outerR,
  stroke = "oklch(0.285 0.065 234)",
  strokeWidth = 2,
}: ChakraSpokesProps) {
  return (
    <>
      {SPOKE_ANGLES.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={angle}
            x1={cx + innerR * Math.sin(rad)}
            y1={cy - innerR * Math.cos(rad)}
            x2={cx + outerR * Math.sin(rad)}
            y2={cy - outerR * Math.cos(rad)}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        );
      })}
    </>
  );
}

interface ChakraProps {
  size?: number;
  className?: string;
  spokeColor?: string;
  hubColor?: string;
  ringColor?: string;
  strokeWidth?: number;
  innerR?: number;
  outerR?: number;
  extraRing?: number;
}

export function Chakra({
  size = 400,
  className = "",
  spokeColor = "oklch(0.285 0.065 234)",
  hubColor = "oklch(0.72 0.09 75)",
  ringColor = "oklch(0.285 0.065 234)",
  strokeWidth = 2,
  innerR,
  outerR,
  extraRing,
}: ChakraProps) {
  const c = size / 2;
  const outer = outerR ?? c * 0.97;
  const inner = innerR ?? c * 0.09;
  const secondary = extraRing ?? c * 0.77;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
    >
      <circle
        cx={c}
        cy={c}
        r={outer}
        fill="none"
        stroke={ringColor}
        strokeWidth={strokeWidth + 1}
      />
      {extraRing && (
        <circle
          cx={c}
          cy={c}
          r={secondary}
          fill="none"
          stroke={ringColor}
          strokeWidth={strokeWidth * 0.7}
        />
      )}
      <circle cx={c} cy={c} r={inner * 0.6} fill={hubColor} />
      <ChakraSpokes
        cx={c}
        cy={c}
        innerR={inner}
        outerR={secondary}
        stroke={spokeColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
