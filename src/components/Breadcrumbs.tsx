import { Link } from "react-router-dom";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-stone-500">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="text-stone-300">/</span>}
          {item.to ? (
            <Link to={item.to} className="hover:text-green-700">
              {item.label}
            </Link>
          ) : (
            <span className="text-stone-700">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
