import { Link } from "react-router-dom";
import type { Garden, Zone } from "../types";
import { ZONE_TYPE_ICON } from "../data/rarity";
import { useCollection } from "../context/CollectionContext";

export function ZoneCard({ garden, zone }: { garden: Garden; zone: Zone }) {
  const { seenIds } = useCollection();
  const seenCount = zone.plants.filter((p) => seenIds.has(p.id)).length;
  const total = zone.plants.length;

  return (
    <Link
      to={`/jardin/${garden.id}/espace/${zone.id}`}
      className="flex flex-col gap-2 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{ZONE_TYPE_ICON[zone.type]}</span>
        <div>
          <h3 className="font-serif text-lg font-semibold text-stone-800">
            {zone.name}
          </h3>
          <p className="text-xs text-stone-500">
            {total} plante{total > 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <p className="text-sm text-stone-600">{zone.description}</p>
      <span className="mt-1 text-xs font-semibold text-green-700">
        {seenCount}/{total} vues
      </span>
    </Link>
  );
}
