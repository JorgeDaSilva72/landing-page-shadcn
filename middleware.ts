// // middleware.ts
// import createMiddleware from "next-intl/middleware";
// import { locales, defaultLocale } from "../config/i18n";
// export default createMiddleware({
//   // Liste des locales supportées
//   locales: locales,
//   // Locale par défaut
//   defaultLocale: defaultLocale,
//   // Cette fonction est utilisée pour détecter la langue préférée de l'utilisateur
//   localeDetection: true,
//   localePrefix: "always", // Force le préfixe de langue dans les URLs
// });

// export const config = {
//   // Match tous les chemins sauf ceux commençant par /api/, /_next/, /_vercel/
//   // Les fichiers statiques comme les images et les icônes sont inclus automatiquement
//   matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
// };

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
