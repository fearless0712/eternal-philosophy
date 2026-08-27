"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/config";
import styles from "./LanguageSwitch.module.css";

export function LanguageSwitch() {
  const { locale, setLocale } = useLocale();
  const option = (value: Locale, label: string) => (
    <button className={locale === value ? styles.active : styles.inactive} type="button" onClick={() => setLocale(value)} aria-pressed={locale === value}>{label}</button>
  );

  return <div className={styles.switcher} aria-label="Language">{option("ja", "JP")}<span>/</span>{option("en", "EN")}</div>;
}
