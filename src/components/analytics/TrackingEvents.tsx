"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { useLocale } from "@/i18n/LocaleProvider";

const eventNames = {
  "project-detail": "project_detail_click",
  "project-live": "project_live_click",
  "project-github": "project_github_click",
  "contact-email": "contact_email_click",
  "contact-linkedin": "contact_linkedin_click",
  "contact-github": "contact_github_click",
} as const;

type TrackKey = keyof typeof eventNames;

function isTrackKey(value: string): value is TrackKey {
  return value in eventNames;
}

export function TrackingEvents() {
  const { locale } = useLocale();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const source = event.target;
      if (!(source instanceof Element)) return;

      const target = source.closest<HTMLElement>("[data-track]");
      const trackKey = target?.dataset.track;
      if (!target || !trackKey || !isTrackKey(trackKey)) return;

      const properties: Record<string, string> = { locale };
      if (target.dataset.project) properties.project = target.dataset.project;

      try {
        track(eventNames[trackKey], properties);
      } catch {
        // Analytics is optional; navigation and external links must never wait for it.
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [locale]);

  return null;
}
