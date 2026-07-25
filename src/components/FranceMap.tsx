import { useState } from "react";
import type { Location } from "../data/locations";
import type { GeoPosition } from "../hooks/useGeolocation";

const BOUNDS = { lngMin: -5.6, lngMax: 10.0, latMin: 41.2, latMax: 51.3 };
const W = 420;
const H = 400;

function project(lat: number, lng: number) {
  const x = ((lng - BOUNDS.lngMin) / (BOUNDS.lngMax - BOUNDS.lngMin)) * W;
  const y = H - ((lat - BOUNDS.latMin) / (BOUNDS.latMax - BOUNDS.latMin)) * H;
  return { x, y };
}

export function FranceMap({
  locations,
  plantCounts,
  userPosition,
  selectedId,
  onSelect,
}: {
  locations: Location[];
  plantCounts: Record<string, number>;
  userPosition: GeoPosition | null;
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const maxCount = Math.max(1, ...locations.map((l) => plantCounts[l.id] ?? 0));

  const clampedUser =
    userPosition &&
    userPosition.lat >= BOUNDS.latMin - 3 &&
    userPosition.lat <= BOUNDS.latMax + 3 &&
    userPosition.lng >= BOUNDS.lngMin - 3 &&
    userPosition.lng <= BOUNDS.lngMax + 3
      ? project(
          Math.min(Math.max(userPosition.lat, BOUNDS.latMin), BOUNDS.latMax),
          Math.min(Math.max(userPosition.lng, BOUNDS.lngMin), BOUNDS.lngMax),
        )
      : null;

  return (
    <div className="flex flex-col gap-2">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full rounded-2xl border border-[var(--line)] bg-[var(--paper-sunken)]"
        role="img"
        aria-label="Carte simplifiée de la France avec les jardins référencés"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            x2={W}
            y1={(H / 4) * i}
            y2={(H / 4) * i}
            stroke="var(--line)"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`v${i}`}
            y1={0}
            y2={H}
            x1={(W / 4) * i}
            x2={(W / 4) * i}
            stroke="var(--line)"
            strokeWidth="1"
          />
        ))}

        {clampedUser && (
          <g>
            <circle
              cx={clampedUser.x}
              cy={clampedUser.y}
              r="10"
              fill="var(--gold)"
              opacity="0.25"
            >
              <animate
                attributeName="r"
                values="8;16;8"
                dur="2.4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.35;0;0.35"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx={clampedUser.x}
              cy={clampedUser.y}
              r="5"
              fill="var(--gold)"
              stroke="var(--paper-raised)"
              strokeWidth="2"
            />
          </g>
        )}

        {locations.map((loc) => {
          const { x, y } = project(loc.lat, loc.lng);
          const count = plantCounts[loc.id] ?? 0;
          const baseR = 5 + (count / maxCount) * 9;
          const selected = loc.id === selectedId;
          const hovered = loc.id === hoveredId;
          const r = hovered && !selected ? baseR + 2 : baseR;
          return (
            <g
              key={loc.id}
              onClick={() => onSelect(loc.id)}
              onMouseEnter={() => setHoveredId(loc.id)}
              onMouseLeave={() => setHoveredId((id) => (id === loc.id ? null : id))}
              className="cursor-pointer transition-transform"
            >
              <circle
                cx={x}
                cy={y}
                r={r}
                fill={selected ? "var(--gold)" : "var(--accent)"}
                fillOpacity={selected ? 0.9 : hovered ? 0.9 : 0.75}
                stroke="var(--paper-raised)"
                strokeWidth="2"
              />
              {(selected || hovered) && (
                <text
                  x={x}
                  y={y - r - 6}
                  textAnchor="middle"
                  paintOrder="stroke"
                  stroke="var(--paper-sunken)"
                  strokeWidth="4"
                  className="fill-[var(--ink)] font-body text-[11px] font-medium"
                >
                  {loc.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <p className="text-center text-xs text-[var(--text-muted)]">
        Carte simplifiée à but indicatif — positions relatives, distances
        calculées à partir de vos coordonnées GPS réelles.
      </p>
    </div>
  );
}
