import { plants } from "../data/plants";
import { RARITY_LABELS, RARITY_ORDER, RARITY_DOT } from "../data/rarity";
import { CATEGORY_ORDER, CATEGORY_LABEL, CATEGORY_ICON } from "../data/categories";
import { PlantCard } from "../components/PlantCard";
import { useCollection } from "../context/CollectionContext";

export function CollectionPage() {
  const { seenIds } = useCollection();
  const total = plants.length;
  const seenCount = plants.filter((plant) => seenIds.has(plant.id)).length;
  const pct = total === 0 ? 0 : Math.round((seenCount / total) * 100);

  const rarityStats = RARITY_ORDER.map((rarity) => {
    const inRarity = plants.filter((plant) => plant.rarity === rarity);
    const seen = inRarity.filter((plant) => seenIds.has(plant.id)).length;
    return { rarity, seen, total: inRarity.length };
  });

  const categoryStats = CATEGORY_ORDER.map((category) => {
    const inCategory = plants.filter((plant) => plant.category === category);
    const seen = inCategory.filter((plant) => seenIds.has(plant.id)).length;
    return { category, seen, total: inCategory.length };
  }).filter((stat) => stat.total > 0);

  const seenPlants = plants.filter((plant) => seenIds.has(plant.id));

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--ink)]">
          Ma collection
        </h1>
        <p className="text-[var(--text)]">
          Toutes les plantes que vous avez repérées lors de vos visites.
        </p>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--paper-raised)] p-6 shadow-[var(--shadow-card)]">
        <div className="flex items-end justify-between">
          <span className="font-display text-4xl font-semibold tabular-nums text-[var(--accent)]">
            {seenCount}
            <span className="text-lg font-normal text-[var(--text-muted)]">
              /{total}
            </span>
          </span>
          <span className="text-sm font-medium text-[var(--text-muted)] tabular-nums">
            {pct}% découvert
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--paper-sunken)]">
          <div
            className="h-full rounded-full bg-[var(--accent)] transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="mt-1 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {rarityStats.map(({ rarity, seen, total }) => (
            <div
              key={rarity}
              className="rounded-xl bg-[var(--paper-sunken)] p-3"
            >
              <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)]">
                <span className={`h-2 w-2 rounded-full ${RARITY_DOT[rarity]}`} />
                {RARITY_LABELS[rarity]}
              </div>
              <p className="mt-1 text-lg font-semibold tabular-nums text-[var(--ink)]">
                {seen}
                <span className="text-sm font-normal text-[var(--text-muted)]">
                  /{total}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">
          Progression par type de plante
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {categoryStats.map(({ category, seen, total }) => {
            const cPct = total === 0 ? 0 : Math.round((seen / total) * 100);
            return (
              <div
                key={category}
                className="rounded-xl border border-[var(--line)] bg-[var(--paper-raised)] p-4"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 font-medium text-[var(--text)]">
                    <span>{CATEGORY_ICON[category]}</span>
                    {CATEGORY_LABEL[category]}
                  </span>
                  <span className="text-[var(--text-muted)] tabular-nums">
                    {seen}/{total}
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--paper-sunken)]">
                  <div
                    className="h-full rounded-full bg-[var(--accent)]"
                    style={{ width: `${cPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">
          Plantes découvertes
        </h2>
        {seenPlants.length === 0 ? (
          <p className="text-[var(--text-muted)]">
            Vous n'avez pas encore marqué de plante comme vue. Parcourez
            l'herbier et cliquez sur le bouton ○ d'une plante pour commencer
            votre collection !
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {seenPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
