import { Link, Outlet, useLocation } from "react-router-dom";
import { useInstallPrompt } from "../hooks/useInstallPrompt";

export function Layout() {
  const location = useLocation();
  const { canInstall, promptInstall } = useInstallPrompt();

  const navLink = (to: string, label: string) => {
    const active = location.pathname === to;
    return (
      <Link
        to={to}
        className={`relative pb-0.5 text-sm font-medium transition-colors ${
          active
            ? "text-[var(--ink)]"
            : "text-[var(--text-muted)] hover:text-[var(--ink)]"
        }`}
      >
        {label}
        {active && (
          <span className="absolute inset-x-0 -bottom-[13px] h-[2px] rounded-full bg-[var(--accent)]" />
        )}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <header className="sticky top-0 z-10 border-b border-[var(--line)] bg-[var(--paper)]/92 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-y-2 px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-soft)] text-base">
              🌿
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-[var(--ink)]">
              Herbier
            </span>
          </Link>
          <div className="flex items-center gap-5">
            <nav className="flex items-center gap-6">
              {navLink("/", "Plantes")}
              {navLink("/carte", "Carte")}
              {navLink("/collection", "Ma collection")}
            </nav>
            {canInstall && (
              <button
                onClick={promptInstall}
                className="flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[var(--accent-hover)]"
                title="Installer Herbier sur cet appareil"
              >
                ⬇️ Installer
              </button>
            )}
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-8">
        <Outlet />
      </main>
      <footer className="mx-auto max-w-4xl px-4 pb-10 pt-4 text-xs text-[var(--text-muted)]">
        Illustrations originales · Herbier, un compagnon de visite pour
        jardins botaniques, installable et utilisable hors-ligne.
      </footer>
    </div>
  );
}
