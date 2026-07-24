import { useMemo } from "react";
import { gardens, getAllPlants } from "../data/gardens";
import { RARITY_LABELS, RARITY_ORDER, RARITY_DOT } from "../data/rarity";
import { PlantCard } from "../components/PlantCard";
import { useCollection } from "../context/CollectionContext";

export function CollectionPage() {
  const { seenIds } = useCollection();
  const allPlants = useMemo(() => getAllPlants(), []);
  const total = allPlants.length;
  const seenCount = allPlants.filter(({ plant }) => seenIds.has(plant.id)).length;
  const pct = total === 0 ? 0 : Math.round((seenCount / total) * 100);

  const rarityStats = RARITY_ORDER.map((rarity) => {
    const inRarity = allPlants.filter(({ plant }) => plant.rarity === rarity);
    const seen = inRarity.filter(({ plant }) => seenIds.has(plant.id)).length;
    return { rarity, seen, total: inRarity.length };
  });

  const seenPlants = allPlants.filter(({ plant }) => seenIds.has(plant.id));

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-serif text-3xl font-semibold text-stone-800">
          Ma collection
        </h1>
        <p className="text-stone-600">
          Toutes les plantes que vous avez repérées lors de vos visites.
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <div className="flex items-end justify-between">
          <span className="font-serif text-4xl font-semibold text-green-700">
            {seenCount}
            <span className="text-lg font-normal text-stone-400">/{total}</span>
          </span>
          <span className="text-sm font-semibold text-stone-500">{pct}% découvert</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-stone-100">
          <div
            className="h-full rounded-full bg-green-500 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {rarityStats.map(({ rarity, seen, total }) => (
            <div key={rarity} className="rounded-xl bg-stone-50 p-3">
              <div className="flex items-center gap-1.5 text-xs font-medium text-stone-500">
                <span className={`h-2 w-2 rounded-full ${RARITY_DOT[rarity]}`} />
                {RARITY_LABELS[rarity]}
              </div>
              <p className="mt-1 text-lg font-semibold text-stone-800">
                {seen}
                <span className="text-sm font-normal text-stone-400">/{total}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
          Progression par jardin
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {gardens.map((garden) => {
            const plants = garden.zones.flatMap((z) => z.plants);
            const seen = plants.filter((p) => seenIds.has(p.id)).length;
            const gPct = plants.length === 0 ? 0 : Math.round((seen / plants.length) * 100);
            return (
              <div
                key={garden.id}
                className="rounded-xl border border-stone-200 bg-white p-4"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-stone-700">{garden.name}</span>
                  <span className="text-stone-500">
                    {seen}/{plants.length}
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-stone-100">
                  <div
                    className="h-full rounded-full bg-green-500"
                    style={{ width: `${gPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
          Plantes découvertes
        </h2>
        {seenPlants.length === 0 ? (
          <p className="text-stone-500">
            Vous n'avez pas encore marqué de plante comme vue. Parcourez un
            jardin et cliquez sur le bouton ○ d'une plante pour commencer votre
            collection !
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {seenPlants.map(({ garden, zone, plant }) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                subtitle={`${garden.name} · ${zone.name}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
