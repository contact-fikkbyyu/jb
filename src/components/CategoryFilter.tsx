import type { PlantCategory } from "../types";
import { CATEGORY_ICON, CATEGORY_LABEL, CATEGORY_ORDER } from "../data/categories";

export function CategoryFilter({
  active,
  onToggle,
}: {
  active: Set<PlantCategory>;
  onToggle: (category: PlantCategory) => void;
}) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <div className="flex w-max gap-2 sm:w-full sm:flex-wrap">
        {CATEGORY_ORDER.map((category) => {
          const isActive = active.has(category);
          return (
            <button
              key={category}
              onClick={() => onToggle(category)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-inset transition ${
                isActive
                  ? "bg-[var(--ink)] text-[var(--paper)] ring-[var(--ink)]"
                  : "bg-[var(--paper-raised)] text-[var(--text)] ring-[var(--line)] hover:ring-[var(--line-strong)]"
              }`}
            >
              <span>{CATEGORY_ICON[category]}</span>
              {CATEGORY_LABEL[category]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
