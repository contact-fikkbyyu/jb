import { useEffect, useRef, useState } from "react";

/**
 * Progressively reveals items from a (locally available) list as the user
 * scrolls, to give an infinite-scroll feel without a paginated backend.
 * Resets to the first page whenever the `items` array identity changes
 * (e.g. after a search or filter change).
 */
export function useInfiniteReveal<T>(items: T[], pageSize = 18) {
  const [count, setCount] = useState(pageSize);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCount(pageSize);
  }, [items, pageSize]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCount((c) => Math.min(c + pageSize, items.length));
        }
      },
      { rootMargin: "600px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [items, pageSize]);

  return {
    visibleItems: items.slice(0, count),
    sentinelRef,
    hasMore: count < items.length,
  };
}
