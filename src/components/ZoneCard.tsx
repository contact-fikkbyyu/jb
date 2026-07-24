import { Link } from "react-router-dom";
import type { Garden, Zone } from "../types";
import { ZONE_TYPE_ICON, ZONE_TYPE_GRADIENT } from "../data/rarity";
import { useCollection } from "../context/CollectionContext";

export function ZoneCard({ garden, zone }: { garden: Garden; zone: Zone }) {
  const { seenIds } = useCollection();
  const seenCount = zone.plants.filter((p) => seenIds.has(p.id)).length;
  const total = zone.plants.length;

  return (
    <Link
      to={`/jardin/${garden.id}/espace/${zone.id}`}
      className="flex flex-col gap-3 rounded-2xl border border-[var(--line)] bg-[var(--paper-raised)] p-5 shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-xl ${ZONE_TYPE_GRADIENT[zone.type]}`}
        >
          {ZONE_TYPE_ICON[zone.type]}
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
            {zone.name}
          </h3>
          <p className="text-xs text-[var(--text-muted)]">
            {total} plante{total > 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <p className="text-sm text-[var(--text)]">{zone.description}</p>
      <span className="mt-1 text-xs font-medium text-[var(--accent)] tabular-nums">
        {seenCount}/{total} vues
      </span>
    </Link>
  );
}
