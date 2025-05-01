// /** @type {import('next').NextConfig} */
// const nextConfig = {
//    output: "export", // Active l'exportation statique
//   images: {
//     unoptimized: true, // Désactive l'optimisation d'images (nécessaire pour le mode statique)
//     domains: [
//       "avatars.githubusercontent.com",
//       "github.com",
//       "i.pravatar.cc",
//       "images.unsplash.com",
//       "www.facebook.com",
//       "scontent.fcdg1-1.fna.fbcdn.net",
//     ],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
// import withNextIntl from "next-intl/plugin";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  // output: "export", // Active l'exportation statique
  images: {
    unoptimized: true, // Désactive l'optimisation d'images (nécessaire pour le mode statique)
    domains: [
      "avatars.githubusercontent.com",
      "github.com",
      "i.pravatar.cc",
      "images.unsplash.com",
      "www.facebook.com",
      "scontent.fcdg1-1.fna.fbcdn.net",
    ],
  },
  // Ajout de la configuration i18n
  // i18n: {
  //   locales: ["en", "fr"],
  //   defaultLocale: "en",
  // },
};

// export default nextConfig;
export default withNextIntl(nextConfig);
