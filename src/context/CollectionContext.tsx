import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "jb-plantes-vues";

interface CollectionContextValue {
  seenIds: Set<string>;
  isSeen: (plantId: string) => boolean;
  toggleSeen: (plantId: string) => void;
}

const CollectionContext = createContext<CollectionContextValue | null>(null);

function loadSeenIds(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

export function CollectionProvider({ children }: { children: ReactNode }) {
  const [seenIds, setSeenIds] = useState<Set<string>>(() => loadSeenIds());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...seenIds]));
  }, [seenIds]);

  const value = useMemo<CollectionContextValue>(
    () => ({
      seenIds,
      isSeen: (plantId: string) => seenIds.has(plantId),
      toggleSeen: (plantId: string) =>
        setSeenIds((prev) => {
          const next = new Set(prev);
          if (next.has(plantId)) {
            next.delete(plantId);
          } else {
            next.add(plantId);
          }
          return next;
        }),
    }),
    [seenIds],
  );

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollection(): CollectionContextValue {
  const ctx = useContext(CollectionContext);
  if (!ctx) {
    throw new Error("useCollection must be used within a CollectionProvider");
  }
  return ctx;
}
