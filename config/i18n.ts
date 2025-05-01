export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Définir les fonctions getMessages nécessaires pour next-intl
export async function getMessages(locale: Locale) {
  // Ajouter une vérification pour éviter l'undefined
  const safeLocale = locales.includes(locale as Locale)
    ? locale
    : defaultLocale;
  try {
    return (await import(`../messages/${safeLocale}.json`)).default;
  } catch (error) {
    console.error(`Could not load translations for ${safeLocale}`, error);
    // Fallback to default locale
    return (await import(`../messages/${defaultLocale}.json`)).default;
  }
}
