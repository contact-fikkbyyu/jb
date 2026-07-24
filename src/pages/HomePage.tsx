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
      <div className="flex flex-col gap-2">
        <h1 className="font-serif text-3xl font-semibold text-stone-800">
          Explorez les jardins botaniques
        </h1>
        <p className="text-stone-600">
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
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
            {results.length} résultat{results.length !== 1 ? "s" : ""}
          </h2>
          {results.length === 0 ? (
            <p className="text-stone-500">
              Aucune plante ne correspond à votre recherche.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {results.map(({ garden, zone, plant }) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  subtitle={`${garden.name} · ${zone.name}`}
                />
              ))}
            </div>
          )}
        </section>
      ) : (
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
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
