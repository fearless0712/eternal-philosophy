"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { DEFAULT_LOCALE, isLocale, LOCALE_STORAGE_KEY, type Locale } from "./config";

type LocaleContextValue = { locale: Locale; setLocale: (locale: Locale) => void };
const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    (onStoreChange) => {
      const handleStorage = (event: StorageEvent) => {
        if (event.key === LOCALE_STORAGE_KEY) onStoreChange();
      };
      window.addEventListener("storage", handleStorage);
      window.addEventListener("ep:locale-change", onStoreChange);
      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener("ep:locale-change", onStoreChange);
      };
    },
    () => {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      return isLocale(stored) ? stored : DEFAULT_LOCALE;
    },
    () => DEFAULT_LOCALE,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale(next: Locale) {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
      window.dispatchEvent(new Event("ep:locale-change"));
    },
  }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
