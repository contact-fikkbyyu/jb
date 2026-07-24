import { useState } from "react";
import type { Plant } from "../types";
import { PlantIllustration, ILLUSTRATION_SIZES } from "./PlantIllustration";
import photoManifest from "../data/photoManifest.json";

const manifest: Record<string, string> = photoManifest;

/**
 * Shows a real photo when one has been downloaded for this plant
 * (see `npm run fetch:photos`), falling back to the vector illustration
 * otherwise — or if the photo fails to load.
 */
export function PlantVisual({
  plant,
  size = "md",
}: {
  plant: Plant;
  size?: keyof typeof ILLUSTRATION_SIZES;
}) {
  const [errored, setErrored] = useState(false);
  const photoUrl = manifest[plant.id];

  if (!photoUrl || errored) {
    return <PlantIllustration plant={plant} size={size} />;
  }

  const s = ILLUSTRATION_SIZES[size];

  return (
    <div
      className={`relative shrink-0 ${s.wrap} overflow-hidden rounded-full ${s.ring} ring-[var(--paper-raised)] shadow-[var(--shadow-card)]`}
    >
      <img
        src={photoUrl}
        alt={plant.name}
        loading="lazy"
        onError={() => setErrored(true)}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
