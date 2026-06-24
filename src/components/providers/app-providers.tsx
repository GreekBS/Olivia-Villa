"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { SCROLL_THRESHOLD } from "@/constants/layout";
import { getHeaderScrollOffset } from "@/lib/scroll";

type AppProvidersProps = {
  children: ReactNode;
};

const ScrolledPastHeroContext = createContext(false);

export function useScrolledPastHero(): boolean {
  return useContext(ScrolledPastHeroContext);
}

export function AppProviders({ children }: AppProvidersProps) {
  const reducedMotion = usePrefersReducedMotion();
  const scrolledPastHero = useScrollThreshold(SCROLL_THRESHOLD);
  const [LenisProvider, setLenisProvider] = useState<
    React.ComponentType<{ children: ReactNode }> | null
  >(null);

  useEffect(() => {
    if (reducedMotion) return;

    const initLenis = () => {
      void import("lenis/react").then(({ ReactLenis }) => {
        function LenisWrapper({ children: wrapped }: { children: ReactNode }) {
          return (
            <ReactLenis
              root
              options={{
                lerp: 0.08,
                duration: 1.2,
                smoothWheel: true,
                touchMultiplier: 1.5,
                anchors: { offset: getHeaderScrollOffset() },
              }}
            >
              {wrapped}
            </ReactLenis>
          );
        }

        setLenisProvider(() => LenisWrapper);
      });
    };

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(initLenis);
      return () => window.cancelIdleCallback(id);
    }

    const timeout = window.setTimeout(initLenis, 1);
    return () => window.clearTimeout(timeout);
  }, [reducedMotion]);

  const tree = (
    <ScrolledPastHeroContext.Provider value={scrolledPastHero}>
      {children}
    </ScrolledPastHeroContext.Provider>
  );

  if (reducedMotion || !LenisProvider) {
    return tree;
  }

  return <LenisProvider>{tree}</LenisProvider>;
}
