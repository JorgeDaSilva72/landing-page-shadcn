// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";

// enum ProService {
//   YES = 1,
//   NO = 0,
// }

// interface ServiceProps {
//   title: string;
//   pro: ProService;
//   description: string;
//   link: string;
// }

// const serviceList: ServiceProps[] = [
//   {
//     title: "Annonces immobilières",
//     description:
//       "Découvrez notre plateforme d'annonces immobilières dédiée à l'Afrique. Explorez une variété de propriétés, des appartements aux villas luxueuses, et trouvez votre prochain investissement ou résidence idéale sur notre site.",
//     pro: 1,
//     // link: "https://afrique-avenir-immo.vercel.app",
//     link: "https://afriqueavenirimmobilier.com",
//   },
//   {
//     title: "Cession et acquisition d'entreprises en Afrique",
//     description:
//       "Investissez en toute confiance en Afrique grâce à notre plateforme dédiée à l'acquisition d'entreprises innovantes.",
//     pro: 1,
//     // link: "https://afrique-avenir-acquisitions.vercel.app/",
//     link: "https://afriqueaveniracquisitions.com/",
//   },
//   {
//     title: "Votre carrière, notre mission : l'emploi.",
//     description:
//       "Avec Emploi Afrique, accédez aux meilleures offres d'emploi à travers l'Afrique. Découvrez des opportunités dans des secteurs en plein essor et trouvez l’emploi qui correspond à vos ambitions. Simple, rapide, et pensé pour les talents africains !",
//     pro: 1,
//     // link: "https://emploi-afrique.vercel.app/",
//     link: "https://afriqueaveniremplois.com/",
//   },
//   // {
//   //   title: "Votre réseau, à portée de clic !",
//   //   description:
//   //     "Découvrez les talents, les experts et les partenaires qui font avancer votre secteur. Grâce à notre annuaire professionnel, connectez-vous facilement aux acteurs clés de votre domaine, développez votre réseau et trouvez les contacts essentiels pour dynamiser vos projets et collaborations.",
//   //   pro: 0,
//   //   link: "https://annuaire-expert.vercel.app/",
//   // },
//   {
//     title: "Notre boutique officielle",
//     description:
//       "Ensemble, bâtissons l'avenir de l'Afrique : chaque achat soutient des projets de développement durable et d'impact local.",
//     pro: 0,
//     link: "https://jds-ecommerce.vercel.app/",
//   },
// ];

// export const ServicesSection = () => {
//   return (
//     <section id="services" className="container pt-24 sm:pt-28">
//       <h2 className="text-3xl md:text-4xl text-primary text-center mb-2 tracking-wider">
//         NOS SERVICES
//       </h2>

//       {/* Section d'introduction avec texte et image */}
//       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 mb-8">
//         {/* Partie texte */}
//         <div className="lg:w-1/2 text-center lg:text-left">
//           <h2 className="text-xl lg:text-2xl font-bold">
//             Développez votre entreprise
//           </h2>
//           <h3 className="mt-2 mx-auto lg:mx-0 text-xl text-muted-foreground">
//             Boostez le potentiel de votre entreprise en Afrique avec notre
//             plateforme dédiée. Profitez de conseils spécialisés, de ressources
//             stratégiques et d&apos;un réseau de partenaires pour stimuler votre
//             croissance sur ce continent dynamique. Que vous soyez une entreprise
//             établie ou une start-up ambitieuse, trouvez ici le soutien
//             nécessaire pour naviguer efficacement dans le marché africain et
//             concrétiser vos ambitions de développement.
//           </h3>
//         </div>

//         {/* Partie image */}
//         <div className="flex justify-center lg:w-1/2 overflow-hidden">
//           <Image
//             src="/africa-rogné.jpg"
//             alt="Afrique"
//             width={600}
//             height={240}
//             className="rounded-lg shadow-lg w-full object-cover object-center " // Hauteur fixe pour rognage vertical
//           />
//         </div>
//       </div>

//       {/* Liste des services */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
//         {serviceList.map(({ title, description, pro, link }) => (
//           <Card
//             key={title}
//             className="bg-muted/60 dark:bg-card h-full relative flex flex-col"
//           >
//             <CardHeader className="flex-1">
//               <CardTitle>{title}</CardTitle>
//               <CardDescription>{description}</CardDescription>
//             </CardHeader>
//             <div className="mt-auto mb-4 px-4">
//               <CardDescription>
//                 <Link
//                   target="_blank"
//                   href={link}
//                   className="transition-all border-primary hover:border-b-2 ml-1 no-underline"
//                 >
//                   <button
//                     type="button"
//                     className="w-full inline-flex justify-center py-2 px-4 border border-primary shadow-sm text-sm font-medium rounded-md bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
//                   >
//                     Visiter
//                   </button>
//                 </Link>
//               </CardDescription>
//             </div>

//             <Badge
//               data-pro={ProService.YES === pro}
//               variant="secondary"
//               className="absolute -top-2 -right-3 data-[pro=false]:hidden"
//             >
//               PRO
//             </Badge>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };

// BEGIN 01/05/2025 compatible next-intl

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
  link: string;
}

export const ServicesSection = () => {
  const t = useTranslations("ServicesSection");

  const serviceList: ServiceProps[] = [
    {
      title: t("services.realEstate.title"),
      description: t("services.realEstate.description"),
      pro: 1,
      link: "https://afriqueavenirimmobilier.com",
    },
    {
      title: t("services.businessTransfer.title"),
      description: t("services.businessTransfer.description"),
      pro: 1,
      link: "https://afriqueaveniracquisitions.com/",
    },
    {
      title: t("services.jobs.title"),
      description: t("services.jobs.description"),
      pro: 1,
      link: "https://afriqueaveniremplois.com/",
    },
    {
      title: t("services.store.title"),
      description: t("services.store.description"),
      pro: 0,
      link: "https://jds-ecommerce.vercel.app/",
    },
  ];

  return (
    <section id="services" className="container pt-24 sm:pt-28">
      <h2 className="text-3xl md:text-4xl text-primary text-center mb-2 tracking-wider">
        {t("title")}
      </h2>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 mb-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-xl lg:text-2xl font-bold">{t("subtitle")}</h2>
          <h3 className="mt-2 mx-auto lg:mx-0 text-xl text-muted-foreground">
            {t("description")}
          </h3>
        </div>

        <div className="flex justify-center lg:w-1/2 overflow-hidden">
          <Image
            src="/africa-rogné.jpg"
            alt={t("imageAlt")}
            width={600}
            height={240}
            className="rounded-lg shadow-lg w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro, link }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative flex flex-col"
          >
            <CardHeader className="flex-1">
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <div className="mt-auto mb-4 px-4">
              <CardDescription>
                <Link
                  target="_blank"
                  href={link}
                  className="transition-all border-primary hover:border-b-2 ml-1 no-underline"
                >
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-primary shadow-sm text-sm font-medium rounded-md bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    {t("visitButton")}
                  </button>
                </Link>
              </CardDescription>
            </div>

            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              {t("proBadge")}
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
