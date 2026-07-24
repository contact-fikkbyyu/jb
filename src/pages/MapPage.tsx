import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { locations, distanceKm } from "../data/locations";
import { plants } from "../data/plants";
import { CATEGORY_ICON } from "../data/categories";
import { FranceMap } from "../components/FranceMap";
import { useGeolocation } from "../hooks/useGeolocation";

export function MapPage() {
  const { status, position, error, request } = useGeolocation();
  const [searchParams] = useSearchParams();
  const [selectedId, setSelectedId] = useState<string | null>(
    searchParams.get("lieu"),
  );

  const plantCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const loc of locations) {
      counts[loc.id] = plants.filter((p) => p.locationIds.includes(loc.id))
        .length;
    }
    return counts;
  }, []);

  const categoriesByLocation = useMemo(() => {
    const map: Record<string, Set<string>> = {};
    for (const loc of locations) {
      map[loc.id] = new Set(
        plants.filter((p) => p.locationIds.includes(loc.id)).map((p) => p.category),
      );
    }
    return map;
  }, []);

  const sortedLocations = useMemo(() => {
    if (!position) return locations;
    return [...locations].sort(
      (a, b) => distanceKm(position, a) - distanceKm(position, b),
    );
  }, [position]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--ink)]">
          Autour de vous
        </h1>
        <p className="max-w-lg text-[var(--text)]">
          {locations.length} jardins et parcs botaniques réels en France.
          Localisez-vous pour voir lesquels sont les plus proches et quelles
          plantes de l'herbier vous pourriez y croiser.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={request}
          disabled={status === "loading"}
          className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)] disabled:opacity-60"
        >
          {status === "loading"
            ? "Localisation en cours…"
            : status === "granted"
              ? "📍 Position mise à jour"
              : "📍 Me localiser"}
        </button>
        {status === "denied" && (
          <span className="text-sm text-[var(--text-muted)]">
            Localisation refusée ou indisponible ({error}). La liste reste
            triable, sans distances.
          </span>
        )}
        {status === "unsupported" && (
          <span className="text-sm text-[var(--text-muted)]">
            La géolocalisation n'est pas disponible dans ce navigateur.
          </span>
        )}
      </div>

      <FranceMap
        locations={locations}
        plantCounts={plantCounts}
        userPosition={position}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      <div className="flex flex-col gap-3">
        {sortedLocations.map((loc) => {
          const count = plantCounts[loc.id] ?? 0;
          const cats = Array.from(categoriesByLocation[loc.id] ?? []);
          const dist = position ? distanceKm(position, loc) : null;
          const selected = loc.id === selectedId;
          return (
            <div
              key={loc.id}
              onClick={() => setSelectedId(loc.id)}
              className={`flex cursor-pointer flex-col gap-2 rounded-2xl border p-4 shadow-[var(--shadow-card)] transition sm:flex-row sm:items-center sm:justify-between ${
                selected
                  ? "border-[var(--gold)] bg-[var(--gold-soft)]"
                  : "border-[var(--line)] bg-[var(--paper-raised)]"
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
                    {loc.name}
                  </h3>
                  {dist !== null && (
                    <span className="rounded-full bg-[var(--paper-sunken)] px-2 py-0.5 text-xs font-medium tabular-nums text-[var(--text)]">
                      {dist < 10 ? dist.toFixed(1) : Math.round(dist)} km
                    </span>
                  )}
                </div>
                <p className="text-sm text-[var(--text-muted)]">{loc.city}</p>
                <p className="mt-1 max-w-md text-sm text-[var(--text)]">
                  {loc.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1 text-base">
                  {cats.map((c) => (
                    <span key={c} title={c}>
                      {CATEGORY_ICON[c as keyof typeof CATEGORY_ICON]}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to={`/?lieu=${loc.id}`}
                onClick={(e) => e.stopPropagation()}
                className="shrink-0 self-start rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--line-strong)] hover:text-[var(--ink)] sm:self-center"
              >
                Voir les {count} plantes →
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
