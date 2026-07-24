import { Navigate, useParams } from "react-router-dom";
import { findGarden } from "../data/gardens";
import { ZoneCard } from "../components/ZoneCard";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { useCollection } from "../context/CollectionContext";

export function GardenPage() {
  const { gardenId } = useParams<{ gardenId: string }>();
  const garden = gardenId ? findGarden(gardenId) : undefined;
  const { seenIds } = useCollection();

  if (!garden) return <Navigate to="/" replace />;

  const plants = garden.zones.flatMap((z) => z.plants);
  const seenCount = plants.filter((p) => seenIds.has(p.id)).length;

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumbs items={[{ label: "Jardins", to: "/" }, { label: garden.name }]} />

      <div className="flex flex-col gap-2">
        <h1 className="font-serif text-3xl font-semibold text-stone-800">
          {garden.name}
        </h1>
        <p className="text-sm text-stone-500">{garden.city}</p>
        <p className="text-stone-600">{garden.description}</p>
        <p className="text-sm font-semibold text-green-700">
          {seenCount}/{plants.length} plantes découvertes
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
          Espaces
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {garden.zones.map((zone) => (
            <ZoneCard key={zone.id} garden={garden} zone={zone} />
          ))}
        </div>
      </section>
    </div>
  );
}
