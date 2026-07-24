import { Link } from "react-router-dom";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-[var(--text-muted)]">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-[var(--line-strong)]">/</span>}
          {item.to ? (
            <Link to={item.to} className="hover:text-[var(--accent)]">
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--text)]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
