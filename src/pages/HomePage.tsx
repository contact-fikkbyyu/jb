import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { plants } from "../data/plants";
import { findLocation } from "../data/locations";
import { PlantCard } from "../components/PlantCard";
import { SearchBar } from "../components/SearchBar";
import { CategoryFilter } from "../components/CategoryFilter";
import { FilterBar, type SeenFilter } from "../components/FilterBar";
import { useInfiniteReveal } from "../hooks/useInfiniteReveal";
import { useCollection } from "../context/CollectionContext";
import type { PlantCategory, Rarity } from "../types";

function parseList<T extends string>(value: string | null): Set<T> {
  return new Set((value ? value.split(",") : []).filter(Boolean) as T[]);
}

export function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isSeen } = useCollection();

  const query = searchParams.get("q") ?? "";
  const activeCategories = useMemo(
    () => parseList<PlantCategory>(searchParams.get("cat")),
    [searchParams],
  );
  const activeRarities = useMemo(
    () => parseList<Rarity>(searchParams.get("rarete")),
    [searchParams],
  );
  const seenFilter = (searchParams.get("vue") as SeenFilter) ?? "toutes";
  const locationId = searchParams.get("lieu");
  const location = locationId ? findLocation(locationId) : undefined;

  function updateParams(updates: Record<string, string | null>) {
    const next = new URLSearchParams(searchParams);
    for (const [key, value] of Object.entries(updates)) {
      if (value === null || value === "") next.delete(key);
      else next.set(key, value);
    }
    setSearchParams(next, { replace: true });
  }

  function setQuery(value: string) {
    updateParams({ q: value || null });
  }

  function toggleCategory(category: PlantCategory) {
    const next = new Set(activeCategories);
    if (next.has(category)) next.delete(category);
    else next.add(category);
    updateParams({ cat: next.size ? [...next].join(",") : null });
  }

  function toggleRarity(rarity: Rarity) {
    const next = new Set(activeRarities);
    if (next.has(rarity)) next.delete(rarity);
    else next.add(rarity);
    updateParams({ rarete: next.size ? [...next].join(",") : null });
  }

  function setSeenFilter(value: SeenFilter) {
    updateParams({ vue: value === "toutes" ? null : value });
  }

  function clearLocation() {
    updateParams({ lieu: null });
  }

  const filteredPlants = useMemo(() => {
    const q = query.trim().toLowerCase();
    return plants.filter((plant) => {
      const matchesQuery =
        !q ||
        plant.name.toLowerCase().includes(q) ||
        plant.latinName.toLowerCase().includes(q);
      const matchesCategory =
        activeCategories.size === 0 || activeCategories.has(plant.category);
      const matchesRarity =
        activeRarities.size === 0 || activeRarities.has(plant.rarity);
      const matchesLocation =
        !location || plant.locationIds.includes(location.id);
      const seen = isSeen(plant.id);
      const matchesSeen =
        seenFilter === "toutes" ||
        (seenFilter === "vues" && seen) ||
        (seenFilter === "non-vues" && !seen);
      return (
        matchesQuery &&
        matchesCategory &&
        matchesRarity &&
        matchesLocation &&
        matchesSeen
      );
    });
  }, [query, activeCategories, activeRarities, seenFilter, isSeen, location]);

  const { visibleItems, sentinelRef, hasMore } = useInfiniteReveal(
    filteredPlants,
    18,
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--ink)]">
          Explorez l'herbier
        </h1>
        <p className="max-w-lg text-[var(--text)]">
          {plants.length} plantes référencées, chacune avec une anecdote
          insolite. Cherchez un nom, filtrez par type ou par rareté.
        </p>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Rechercher une plante (ex. orchidée, baobab...)"
        />
      </div>

      <div className="flex flex-col gap-3">
        <CategoryFilter active={activeCategories} onToggle={toggleCategory} />
        <FilterBar
          activeRarities={activeRarities}
          onToggleRarity={toggleRarity}
          seenFilter={seenFilter}
          onSeenFilterChange={setSeenFilter}
        />
      </div>

      {location && (
        <div className="flex items-center gap-2 rounded-full bg-[var(--gold-soft)] px-4 py-2 text-sm text-[var(--ink)]">
          <span>
            📍 Plantes observables à <strong>{location.name}</strong> ({location.city})
          </span>
          <button
            onClick={clearLocation}
            className="ml-auto text-[var(--text-muted)] hover:text-[var(--ink)]"
            title="Retirer ce filtre"
          >
            ✕
          </button>
        </div>
      )}

      <p className="text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">
        {filteredPlants.length} plante{filteredPlants.length !== 1 ? "s" : ""}
      </p>

      {filteredPlants.length === 0 ? (
        <p className="text-[var(--text-muted)]">
          Aucune plante ne correspond à votre recherche.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
          {hasMore ? (
            <div ref={sentinelRef} className="flex justify-center py-6">
              <span className="text-sm text-[var(--text-muted)]">
                Chargement de plantes supplémentaires…
              </span>
            </div>
          ) : (
            <p className="py-6 text-center text-sm text-[var(--text-muted)]">
              Vous avez atteint la fin de l'herbier 🌿
            </p>
          )}
        </>
      )}
    </div>
  );
}
