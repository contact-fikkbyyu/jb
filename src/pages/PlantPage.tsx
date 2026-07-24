import { Navigate, useParams } from "react-router-dom";
import { findPlant } from "../data/gardens";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { RarityBadge } from "../components/RarityBadge";
import { SeenBadge } from "../components/SeenBadge";
import { PlantIllustration } from "../components/PlantIllustration";
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

      <div className="flex flex-col gap-6 rounded-2xl border border-[var(--line)] bg-[var(--paper-raised)] p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <PlantIllustration plant={plant} zoneType={zone.type} size="lg" />
            <div>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)]">
                {plant.name}
              </h1>
              <p className="italic text-[var(--text-muted)]">
                {plant.latinName}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <RarityBadge rarity={plant.rarity} />
            {seen && <SeenBadge />}
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent-soft-line)] bg-[var(--accent-soft)] p-5">
          <h2 className="mb-1.5 flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-[var(--accent-hover)]">
            💡 Le saviez-vous ?
          </h2>
          <p className="leading-relaxed text-[var(--text)]">{plant.funFact}</p>
        </div>

        <button
          onClick={() => toggleSeen(plant.id)}
          className={`self-start rounded-full px-5 py-2.5 text-sm font-medium transition ${
            seen
              ? "bg-[var(--paper-sunken)] text-[var(--text)] hover:bg-[var(--line)]"
              : "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
          }`}
        >
          {seen
            ? "✓ Marquée comme vue — retirer"
            : "Marquer cette plante comme vue"}
        </button>
      </div>
    </div>
  );
}
