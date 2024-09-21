import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

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
const serviceList: ServiceProps[] = [
  {
    title: "Annonces immobilières",
    description:
      "Découvrez notre plateforme d'annonces immobilières dédiée à l'Afrique. Explorez une variété de propriétés, des appartements aux villas luxueuses, et trouvez votre prochain investissement ou résidence idéale sur notre site.",
    pro: 1,
    link: "https://afrique-avenir-immo.vercel.app",
  },
  {
    title: "Votre réseau, à portée de clic !",
    description:
      "Découvrez les talents, les experts et les partenaires qui font avancer votre secteur. Grâce à notre annuaire professionnel, connectez-vous facilement aux acteurs clés de votre domaine, développez votre réseau et trouvez les contacts essentiels pour dynamiser vos projets et collaborations.",
    pro: 0,
    link: "https://annuaire-expert.vercel.app/",
  },
  {
    title: "Notre boutique officielle",
    description:
      "Ensemble, bâtissons l'avenir de l'Afrique : chaque achat soutient des projets de développement durable et d'impact local.",
    pro: 0,
    link: "https://jds-ecommerce.vercel.app/",
  },
  {
    title: "Service 4",
    description: "Lorem ipsum dolor sit amet consectetur.",
    pro: 1,
    link: "https://afrique-avenir-immo.vercel.app",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container pt-24 sm:pt-28">
      <h2 className="text-3xl md:text-4xl text-primary text-center mb-2 tracking-wider">
        NOS SERVICES
      </h2>

      <h2 className="text-xl md:text-2xl text-center font-bold">
        Développez votre entreprise
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Boostez le potentiel de votre entreprise en Afrique avec notre
        plateforme dédiée. Profitez de conseils spécialisés, de ressources
        stratégiques et d&apos;un réseau de partenaires pour stimuler votre
        croissance sur ce continent dynamique. Que vous soyez une entreprise
        établie ou une start-up ambitieuse, trouvez ici le soutien nécessaire
        pour naviguer efficacement dans le marché africain et concrétiser vos
        ambitions de développement.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

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
                  href={`${link} `}
                  className=" transition-all border-primary hover:border-b-2 ml-1 no-underline"
                >
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-primary  shadow-sm text-sm font-medium rounded-md bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Visiter
                  </button>
                </Link>
              </CardDescription>
            </div>

            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
