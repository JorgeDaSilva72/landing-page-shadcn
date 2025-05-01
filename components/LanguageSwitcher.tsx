"use client";

import { locales } from "@/config/i18n";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

// Définition du type pour les locales
type LocaleKey = string;

// Chemins vers les drapeaux SVG avec typage correct
const FLAG_IMAGES: Record<LocaleKey, string> = {
  en: "/flags/gb.svg",
  fr: "/flags/fr.svg",
  ar: "/flags/ar.svg",
  es: "/flags/es.svg",
  de: "/flags/de.svg",
  it: "/flags/it.svg",
};

// Noms complets des langues avec typage correct
const LANGUAGE_NAMES: Record<LocaleKey, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    const newPath = `/${newLocale}${pathWithoutLocale || ""}`;
    router.push(newPath);
  };

  return (
    <Select value={locale} onValueChange={switchLanguage}>
      <SelectTrigger className="w-[140px]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-4 relative">
            <Image
              src={FLAG_IMAGES[locale] || "/flags/placeholder.svg"}
              alt={LANGUAGE_NAMES[locale] || locale}
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm">{LANGUAGE_NAMES[locale] || locale}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            <div className="flex items-center gap-2">
              <div className="w-5 h-4 relative">
                <Image
                  src={FLAG_IMAGES[loc] || "/flags/placeholder.svg"}
                  alt={LANGUAGE_NAMES[loc] || loc}
                  fill
                  className="object-contain"
                />
              </div>
              <span>{LANGUAGE_NAMES[loc] || loc}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
