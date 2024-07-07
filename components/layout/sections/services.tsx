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
      "Découvrez notre plateforme d'annonces immobilières dédiée à l'Afrique. Explorez une variété de propriétés, des appartements urbains aux villas luxueuses, et trouvez votre prochain investissement ou résidence idéale sur notre site.",
    pro: 1,
    link: "https://afrique-avenir-immo.vercel.app",
  },
  {
    title: "Service 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dicta.",
    pro: 0,
    link: "https://afrique-avenir-immo.vercel.app",
  },
  {
    title: "Service 3",
    description: "Lorem dolor sit amet adipisicing.",
    pro: 0,
    link: "https://afrique-avenir-immo.vercel.app",
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
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl text-primary text-center mb-2 tracking-wider">
        SERVICES
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
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
              <CardDescription>
                <Link
                  target="_blank"
                  href={`${link} `}
                  className="text-primary transition-all border-primary hover:border-b-2 ml-1"
                >
                  Y aller
                </Link>
              </CardDescription>
            </CardHeader>
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
