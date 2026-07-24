import { useMemo, useState } from "react";
import { gardens, searchPlants } from "../data/gardens";
import { GardenCard } from "../components/GardenCard";
import { PlantCard } from "../components/PlantCard";
import { SearchBar } from "../components/SearchBar";

export function HomePage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchPlants(query), [query]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--ink)]">
          Explorez les jardins botaniques
        </h1>
        <p className="max-w-lg text-[var(--text)]">
          Recherchez une plante par son nom, ou parcourez un jardin espace par
          espace pour découvrir ses secrets.
        </p>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Rechercher une plante (ex. orchidée, baobab...)"
        />
      </div>

      {query.trim() ? (
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">
            {results.length} résultat{results.length !== 1 ? "s" : ""}
          </h2>
          {results.length === 0 ? (
            <p className="text-[var(--text-muted)]">
              Aucune plante ne correspond à votre recherche.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {results.map(({ garden, zone, plant }) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  zoneType={zone.type}
                  subtitle={`${garden.name} · ${zone.name}`}
                />
              ))}
            </div>
          )}
        </section>
      ) : (
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">
            Jardins
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {gardens.map((garden) => (
              <GardenCard key={garden.id} garden={garden} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
