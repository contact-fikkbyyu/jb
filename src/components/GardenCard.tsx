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
      className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div>
        <h2 className="font-serif text-xl font-semibold text-stone-800">
          {garden.name}
        </h2>
        <p className="text-sm text-stone-500">{garden.city}</p>
      </div>
      <p className="text-sm text-stone-600">{garden.description}</p>
      <div className="mt-1 flex items-center justify-between text-xs text-stone-500">
        <span>{garden.zones.length} espaces · {total} plantes</span>
        <span className="font-semibold text-green-700">
          {seenCount}/{total} vues
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-100">
        <div
          className="h-full rounded-full bg-green-500 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </Link>
  );
}
