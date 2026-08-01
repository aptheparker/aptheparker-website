import type { Locale } from "@/lib/i18n";
import type { SiteContent } from "./types";
import { en } from "./en";
import { ko } from "./ko";
import { zh } from "./zh";

export type { SiteContent } from "./types";

/** Locale-independent facts (links, identity). */
export const profile = {
  name: "Jihwan Park",
  alias: "aptheparker",
  email: "aptheparker@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/aptheparker/",
    github: "https://github.com/aptheparker",
  },
};

const contents: Record<Locale, SiteContent> = { en, ko, zh };

export function getContent(locale: Locale): SiteContent {
  return contents[locale];
}
