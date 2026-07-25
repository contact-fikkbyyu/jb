import { useState } from "react";
import type { Plant } from "../types";
import {
  PlantIllustration,
  PlantIllustrationCover,
  ILLUSTRATION_SIZES,
} from "./PlantIllustration";
import { ImageLightbox } from "./ImageLightbox";
import photoManifest from "../data/photoManifest.json";

const manifest: Record<string, string> = photoManifest;

/**
 * Shows a real photo when one has been downloaded for this plant
 * (see `npm run fetch:photos`), falling back to the vector illustration
 * otherwise — or if the photo fails to load. When `zoomable`, clicking a
 * real photo opens it full-size in a lightbox.
 */
export function PlantVisual({
  plant,
  size = "md",
  zoomable = false,
}: {
  plant: Plant;
  size?: keyof typeof ILLUSTRATION_SIZES;
  zoomable?: boolean;
}) {
  const [errored, setErrored] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const photoUrl = manifest[plant.id];

  if (!photoUrl || errored) {
    return <PlantIllustration plant={plant} size={size} />;
  }

  const s = ILLUSTRATION_SIZES[size];

  return (
    <>
      <div
        className={`group relative shrink-0 ${s.wrap} overflow-hidden rounded-full ${s.ring} ring-[var(--paper-raised)] shadow-[var(--shadow-card)] ${
          zoomable ? "cursor-zoom-in" : ""
        }`}
        onClick={zoomable ? () => setZoomed(true) : undefined}
        role={zoomable ? "button" : undefined}
        aria-label={zoomable ? `Agrandir la photo de ${plant.name}` : undefined}
      >
        <img
          src={photoUrl}
          alt={plant.name}
          loading="lazy"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
        />
        {zoomable && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 text-transparent transition group-hover:bg-black/25 group-hover:text-white">
            🔍
          </div>
        )}
      </div>
      {zoomed && (
        <ImageLightbox
          src={photoUrl}
          alt={plant.name}
          onClose={() => setZoomed(false)}
        />
      )}
    </>
  );
}

/** Full-width photo (or illustration fallback) for the top of a card. */
export function PlantVisualCover({ plant }: { plant: Plant }) {
  const [errored, setErrored] = useState(false);
  const photoUrl = manifest[plant.id];

  if (!photoUrl || errored) {
    return <PlantIllustrationCover plant={plant} />;
  }

  return (
    <img
      src={photoUrl}
      alt={plant.name}
      loading="lazy"
      onError={() => setErrored(true)}
      className="h-44 w-full object-cover"
    />
  );
}
