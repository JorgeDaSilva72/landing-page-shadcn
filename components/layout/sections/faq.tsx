import AdBanner from "@/components/AdBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ads } from "@/lib/data";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Pouvez-vous m'aider à vivre en Afrique ?",
    answer:
      "Le site est entièrement conçu par des expatriés en Afrique, pour les expatriés. Nous faisons de notre mieux pour aider ceux qui souhaitent vivre en Afrique.",
    value: "item-1",
  },
  {
    question: "Pouvez-vous m'aider à obtenir un visa ?",
    answer:
      "Non. La meilleure façon d'obtenir un visa est de commencer par rendre visite à l'ambassade ou le consulat du pays qui vous intéresse.",
    value: "item-2",
  },

  {
    question:
      "Est-il possible de promouvoir mon entreprise et mes services sur AFRIQUE AVENIR ?",
    answer:
      "Oui. Nous pouvons vous proposer différentes solutions locales ou globales. N'hésitez pas à nous contacter pour en savoir plus.",
    value: "item-3",
  },
  {
    question: "Comment contacter l'équipe ?",
    answer: "Vous pouvez utiliser notre formulaire de contact.",
    value: "item-4",
  },
];

export const FAQSection = () => {
  return (
    <section
      id="faq"
      className="container mx-auto px-4 lg:flex lg:space-x-4 pt-24 sm:pt-28"
    >
      {/* Left Sidebar for Ads */}
      <div className="hidden lg:block lg:w-1/5">
        {ads.slice(0, 2).map((ad, index) => (
          <AdBanner
            key={index}
            imageUrl={ad.imageUrl}
            linkUrl={ad.linkUrl}
            altText={ad.altText}
          />
        ))}
      </div>
      {/* Main Content */}
      <div className="container md:w-[700px] lg:w-3/5">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl text-primary text-center mb-2 tracking-wider">
            FOIRE AUX QUESTIONS
          </h2>

          <h2 className="text-xl md:text-2xl text-center font-bold">
            Retrouvez les réponses aux questions les plus fréquemment posées.
          </h2>
        </div>

        <Accordion type="single" collapsible className="AccordionRoot">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>

              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* Right Sidebar for Ads */}
      <div className="hidden lg:block lg:w-1/5">
        {ads.slice(2, 4).map((ad, index) => (
          <AdBanner
            key={index}
            imageUrl={ad.imageUrl}
            linkUrl={ad.linkUrl}
            altText={ad.altText}
          />
        ))}
      </div>
    </section>
  );
};
