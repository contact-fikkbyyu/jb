import { Link, Outlet, useLocation } from "react-router-dom";

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-serif text-lg font-semibold text-stone-800">
              Herbier
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm font-medium text-stone-600">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "text-green-700"
                  : "hover:text-green-700"
              }
            >
              Jardins
            </Link>
            <Link
              to="/collection"
              className={
                location.pathname === "/collection"
                  ? "text-green-700"
                  : "hover:text-green-700"
              }
            >
              Ma collection
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
