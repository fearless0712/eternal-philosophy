export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];
export type Localized<T> = Record<Locale, T>;

export const DEFAULT_LOCALE: Locale = "ja";
export const LOCALE_STORAGE_KEY = "ep:locale:v1";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}
