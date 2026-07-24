import type { Plant } from "../types";
import { CATEGORY_GRADIENT } from "../data/categories";

const SIZES = {
  sm: { wrap: "h-16 w-16", emoji: "text-2xl", ring: "ring-2" },
  md: { wrap: "h-20 w-20", emoji: "text-3xl", ring: "ring-2" },
  lg: { wrap: "h-28 w-28", emoji: "text-5xl", ring: "ring-[3px]" },
} as const;

export function PlantIllustration({
  plant,
  size = "md",
}: {
  plant: Plant;
  size?: keyof typeof SIZES;
}) {
  const s = SIZES[size];
  return (
    <div
      className={`relative shrink-0 ${s.wrap} rounded-full bg-gradient-to-br ${CATEGORY_GRADIENT[plant.category]} ${s.ring} ring-[var(--paper-raised)] shadow-[var(--shadow-card)]`}
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-[0.22] text-[var(--ink)]"
      >
        <path
          d="M50 88 C50 60 50 45 50 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M50 62 C38 58 30 48 28 34"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M50 45 C62 41 70 31 72 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`absolute inset-0 flex items-center justify-center ${s.emoji} drop-shadow-sm`}
      >
        {plant.emoji}
      </span>
    </div>
  );
}
