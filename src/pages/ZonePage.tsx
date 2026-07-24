import { useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { findZone } from "../data/gardens";
import { PlantCard } from "../components/PlantCard";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SearchBar } from "../components/SearchBar";
import { FilterBar, type SeenFilter } from "../components/FilterBar";
import { ZONE_TYPE_ICON } from "../data/rarity";
import type { Rarity } from "../types";
import { useCollection } from "../context/CollectionContext";

export function ZonePage() {
  const { gardenId, zoneId } = useParams<{
    gardenId: string;
    zoneId: string;
  }>();
  const found = gardenId && zoneId ? findZone(gardenId, zoneId) : undefined;
  const { isSeen } = useCollection();

  const [query, setQuery] = useState("");
  const [activeRarities, setActiveRarities] = useState<Set<Rarity>>(new Set());
  const [seenFilter, setSeenFilter] = useState<SeenFilter>("toutes");

  const filteredPlants = useMemo(() => {
    if (!found) return [];
    return found.zone.plants.filter((plant) => {
      const matchesQuery = plant.name
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      const matchesRarity =
        activeRarities.size === 0 || activeRarities.has(plant.rarity);
      const seen = isSeen(plant.id);
      const matchesSeen =
        seenFilter === "toutes" ||
        (seenFilter === "vues" && seen) ||
        (seenFilter === "non-vues" && !seen);
      return matchesQuery && matchesRarity && matchesSeen;
    });
  }, [found, query, activeRarities, seenFilter, isSeen]);

  if (!found) return <Navigate to="/" replace />;
  const { garden, zone } = found;

  function toggleRarity(rarity: Rarity) {
    setActiveRarities((prev) => {
      const next = new Set(prev);
      if (next.has(rarity)) next.delete(rarity);
      else next.add(rarity);
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumbs
        items={[
          { label: "Jardins", to: "/" },
          { label: garden.name, to: `/jardin/${garden.id}` },
          { label: zone.name },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="flex items-center gap-2 font-serif text-3xl font-semibold text-stone-800">
          <span>{ZONE_TYPE_ICON[zone.type]}</span>
          {zone.name}
        </h1>
        <p className="text-stone-600">{zone.description}</p>
      </div>

      <div className="flex flex-col gap-3">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Filtrer les plantes de cet espace..."
        />
        <FilterBar
          activeRarities={activeRarities}
          onToggleRarity={toggleRarity}
          seenFilter={seenFilter}
          onSeenFilterChange={setSeenFilter}
        />
      </div>

      {filteredPlants.length === 0 ? (
        <p className="text-stone-500">Aucune plante ne correspond aux filtres.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
}
