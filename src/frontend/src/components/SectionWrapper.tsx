import { type ReactNode, useEffect, useRef } from "react";
import { ChakraSpokes } from "./ChakraSVG";

interface SectionWrapperProps {
  children: ReactNode;
  variant?: "default" | "alt" | "dark";
  pattern?: "dots" | "diagonal" | "grid" | "none";
  withLotus?: boolean;
  withChakra?: boolean;
  className?: string;
}

export default function SectionWrapper({
  children,
  variant = "default",
  pattern = "dots",
  withLotus = false,
  withChakra = false,
  className = "",
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("scroll-reveal", "section-hidden");
  }, []);

  const bgClass =
    variant === "alt"
      ? "bg-section-alt dark:bg-[oklch(0.17_0.03_238)]"
      : variant === "dark"
        ? "bg-[oklch(0.285_0.065_234)] dark:bg-[oklch(0.12_0.025_240)]"
        : "bg-section dark:bg-[oklch(0.15_0.025_240)]";

  const patternClass =
    pattern === "dots"
      ? "bg-dot-pattern"
      : pattern === "diagonal"
        ? "bg-diagonal-pattern"
        : pattern === "grid"
          ? "bg-grid-pattern"
          : "";

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${bgClass} ${className}`}
    >
      {pattern !== "none" && (
        <div
          className={`absolute inset-0 ${patternClass} opacity-50 pointer-events-none`}
        />
      )}

      {withLotus && (
        <svg
          viewBox="0 0 300 300"
          className="absolute -bottom-10 -right-10 w-72 h-72 opacity-[0.03] pointer-events-none"
          aria-hidden="true"
        >
          <ellipse
            cx="150"
            cy="200"
            rx="80"
            ry="100"
            fill="none"
            stroke="oklch(0.285 0.065 234)"
            strokeWidth="4"
          />
          <ellipse
            cx="110"
            cy="190"
            rx="55"
            ry="90"
            fill="none"
            stroke="oklch(0.285 0.065 234)"
            strokeWidth="3"
            transform="rotate(-25 110 190)"
          />
          <ellipse
            cx="190"
            cy="190"
            rx="55"
            ry="90"
            fill="none"
            stroke="oklch(0.285 0.065 234)"
            strokeWidth="3"
            transform="rotate(25 190 190)"
          />
          <ellipse
            cx="80"
            cy="195"
            rx="40"
            ry="75"
            fill="none"
            stroke="oklch(0.285 0.065 234)"
            strokeWidth="2"
            transform="rotate(-50 80 195)"
          />
          <ellipse
            cx="220"
            cy="195"
            rx="40"
            ry="75"
            fill="none"
            stroke="oklch(0.285 0.065 234)"
            strokeWidth="2"
            transform="rotate(50 220 195)"
          />
          <circle
            cx="150"
            cy="150"
            r="20"
            fill="none"
            stroke="oklch(0.72 0.09 75)"
            strokeWidth="3"
          />
          <circle cx="150" cy="150" r="6" fill="oklch(0.72 0.09 75)" />
        </svg>
      )}

      {withChakra && (
        <svg
          viewBox="0 0 200 200"
          className="absolute top-4 left-4 w-40 h-40 opacity-[0.04] animate-spin-slow pointer-events-none"
          aria-hidden="true"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="oklch(0.285 0.065 234)"
            strokeWidth="3"
          />
          <circle cx="100" cy="100" r="8" fill="oklch(0.72 0.09 75)" />
          <ChakraSpokes
            cx={100}
            cy={100}
            innerR={8}
            outerR={80}
            stroke="oklch(0.285 0.065 234)"
            strokeWidth={1.5}
          />
        </svg>
      )}

      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[oklch(0.72_0.09_75/0.2)] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[oklch(0.72_0.09_75/0.15)] to-transparent" />

      {children}
    </div>
  );
}
