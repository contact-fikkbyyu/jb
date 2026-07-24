export function SearchBar({
  value,
  onChange,
  placeholder = "Rechercher une plante...",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
        🔍
      </span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-stone-300 bg-white py-2.5 pl-10 pr-4 text-sm text-stone-800 shadow-sm outline-none placeholder:text-stone-400 focus:border-green-500 focus:ring-2 focus:ring-green-200"
      />
    </div>
  );
}
