import { Link } from "react-router-dom";
import type { Garden } from "../types";
import { useCollection } from "../context/CollectionContext";

export function GardenCard({ garden }: { garden: Garden }) {
  const { seenIds } = useCollection();
  const plants = garden.zones.flatMap((z) => z.plants);
  const seenCount = plants.filter((p) => seenIds.has(p.id)).length;
  const total = plants.length;
  const pct = total === 0 ? 0 : Math.round((seenCount / total) * 100);

  return (
    <Link
      to={`/jardin/${garden.id}`}
      className="flex flex-col gap-3 rounded-2xl border border-[var(--line)] bg-[var(--paper-raised)] p-5 shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-card-hover)]"
    >
      <div>
        <h2 className="font-display text-xl font-semibold text-[var(--ink)]">
          {garden.name}
        </h2>
        <p className="text-sm text-[var(--text-muted)]">{garden.city}</p>
      </div>
      <p className="text-sm text-[var(--text)]">{garden.description}</p>
      <div className="mt-1 flex items-center justify-between text-xs text-[var(--text-muted)]">
        <span>
          {garden.zones.length} espaces · {total} plantes
        </span>
        <span className="font-medium text-[var(--accent)] tabular-nums">
          {seenCount}/{total} vues
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--paper-sunken)]">
        <div
          className="h-full rounded-full bg-[var(--accent)] transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </Link>
  );
}
