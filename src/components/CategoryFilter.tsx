import type { PlantCategory } from "../types";
import {
  CATEGORY_ICON,
  CATEGORY_ORDER,
  CATEGORY_SHORT_LABEL,
} from "../data/categories";

export function CategoryFilter({
  active,
  onToggle,
}: {
  active: Set<PlantCategory>;
  onToggle: (category: PlantCategory) => void;
}) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:-mx-0 sm:px-0">
      <div className="flex w-max gap-3">
        {CATEGORY_ORDER.map((category) => {
          const isActive = active.has(category);
          return (
            <button
              key={category}
              onClick={() => onToggle(category)}
              className={`flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-1.5 rounded-2xl border transition ${
                isActive
                  ? "border-[var(--accent)] bg-[var(--accent-soft)] shadow-[var(--shadow-card)]"
                  : "border-[var(--line)] bg-[var(--paper-raised)] hover:border-[var(--line-strong)]"
              }`}
            >
              <span className="text-3xl">{CATEGORY_ICON[category]}</span>
              <span
                className={`text-center text-xs font-medium leading-tight ${
                  isActive ? "text-[var(--ink)]" : "text-[var(--text)]"
                }`}
              >
                {CATEGORY_SHORT_LABEL[category]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
