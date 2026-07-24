import { Navigate, useParams } from "react-router-dom";
import { findPlant } from "../data/gardens";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { RarityBadge } from "../components/RarityBadge";
import { SeenBadge } from "../components/SeenBadge";
import { useCollection } from "../context/CollectionContext";

export function PlantPage() {
  const { plantId } = useParams<{ plantId: string }>();
  const found = plantId ? findPlant(plantId) : undefined;
  const { isSeen, toggleSeen } = useCollection();

  if (!found) return <Navigate to="/" replace />;
  const { garden, zone, plant } = found;
  const seen = isSeen(plant.id);

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumbs
        items={[
          { label: "Jardins", to: "/" },
          { label: garden.name, to: `/jardin/${garden.id}` },
          { label: zone.name, to: `/jardin/${garden.id}/espace/${zone.id}` },
          { label: plant.name },
        ]}
      />

      <div className="flex flex-col gap-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="text-6xl">{plant.emoji}</span>
            <div>
              <h1 className="font-serif text-3xl font-semibold text-stone-800">
                {plant.name}
              </h1>
              <p className="italic text-stone-500">{plant.latinName}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <RarityBadge rarity={plant.rarity} />
            {seen && <SeenBadge />}
          </div>
        </div>

        <div className="rounded-xl bg-green-50 p-4">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-green-700">
            💡 Le saviez-vous ?
          </h2>
          <p className="text-stone-700">{plant.funFact}</p>
        </div>

        <button
          onClick={() => toggleSeen(plant.id)}
          className={`self-start rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition ${
            seen
              ? "bg-stone-100 text-stone-600 hover:bg-stone-200"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          {seen ? "✓ Marquée comme vue — retirer" : "Marquer cette plante comme vue"}
        </button>
      </div>
    </div>
  );
}
