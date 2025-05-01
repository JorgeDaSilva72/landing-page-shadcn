// "use client";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Star } from "lucide-react";
// import TopWave from "./topWave";
// import BottomWave from "./bottomWave";

// interface ReviewProps {
//   image: string;
//   name: string;
//   userName: string;
//   comment: string;
//   rating: number;
// }

// const reviewList: ReviewProps[] = [
//   {
//     image: "/testimonial/Amina Diallo.jpg",
//     name: "Amina Diallo",
//     userName: "Médecin ",
//     comment:
//       "Afrique Avenir est une véritable source d'inspiration et d'information. J'y trouve des perspectives nouvelles et innovantes pour le développement de notre continent. Bravo ",
//     rating: 5.0,
//   },
//   {
//     image: "/testimonial/kwame Mensah.jpg",
//     name: "Kwame Mensah",
//     userName: "Ingénieur ",
//     comment:
//       "Le site Afrique Avenir est fantastique ! Il met en lumière des initiatives incroyables et offre une vision optimiste de l'avenir de l'Afrique. Continuez votre excellent travail ! ",
//     rating: 4.8,
//   },

//   {
//     image: "/testimonial/Fatoumata Diop.jpg",
//     name: "Fatoumata Diop",
//     userName: "Avocate",
//     comment:
//       "Je suis impressionnée par la richesse des contenus sur Afrique Avenir. C'est une ressource incontournable pour tous ceux qui s'intéressent à l'évolution et au progrès de l'Afrique.",
//     rating: 4.9,
//   },
//   {
//     image: "/testimonial/Tunde Adebayo.jpg",
//     name: "Tunde Adebayo ",
//     userName: "Banquier",
//     comment:
//       "Afrique Avenir offre un excellent aperçu des opportunités de développement en Afrique. Les articles sont bien rédigés et les sujets très pertinents. Un site à recommander !",
//     rating: 5.0,
//   },
//   {
//     image: "/testimonial/Nia Nkrumah.jpg",
//     name: "Nia Nkrumah",
//     userName: "Professeure d'université",
//     comment:
//       "J'adore Afrique Avenir ! Le site propose des articles inspirants et des histoires de réussite qui montrent le potentiel énorme de notre continent. Merci pour cette belle plateforme !",
//     rating: 5.0,
//   },
//   {
//     image: "/testimonial/Lamine Cissé.jpg",
//     name: "Lamine Cissé",
//     userName: "Entrepreneur",
//     comment:
//       "Afrique Avenir est une mine d'or pour quiconque souhaite comprendre les défis et les opportunités en Afrique. Les analyses sont pertinentes et les solutions proposées sont innovantes. Félicitations !",
//     rating: 4.0,
//   },
// ];

// export const TestimonialSection = () => {
//   return (
//     <section
//       id="testimonials"
//       className="container relative mt-24 pt-24 sm:pt-28 pb-40"
//     >
//       <TopWave />
//       <div className="text-center mb-8">
//         <h2 className="mt-2 text-3xl md:text-4xl text-primary text-center mb-2 tracking-wider ">
//           TEMOIGNAGES
//         </h2>

//         <h2 className="text-xl md:text-2xl text-center font-bold">
//           Lisez ce que disent nos 1 000 + clients.
//         </h2>
//       </div>

//       <Carousel
//         opts={{
//           align: "start",
//         }}
//         className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
//       >
//         <CarouselContent>
//           {reviewList.map((review) => (
//             <CarouselItem
//               key={review.name}
//               className="md:basis-1/2 lg:basis-1/3"
//             >
//               <Card className="bg-muted/50 dark:bg-card">
//                 <CardContent className="pt-6 pb-0">
//                   <div className="flex gap-1 pb-6">
//                     <Star className="size-4 fill-primary text-primary" />
//                     <Star className="size-4 fill-primary text-primary" />
//                     <Star className="size-4 fill-primary text-primary" />
//                     <Star className="size-4 fill-primary text-primary" />
//                     <Star className="size-4 fill-primary text-primary" />
//                   </div>
//                   {`"${review.comment}"`}
//                 </CardContent>

//                 <CardHeader>
//                   <div className="flex flex-row items-center gap-4">
//                     <Avatar>
//                       <AvatarImage src={review.image} alt="radix" />
//                       <AvatarFallback>SV</AvatarFallback> {review.image}
//                     </Avatar>

//                     <div className="flex flex-col">
//                       <CardTitle className="text-lg">{review.name}</CardTitle>
//                       <CardDescription>{review.userName}</CardDescription>
//                     </div>
//                   </div>
//                 </CardHeader>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//       <BottomWave />
//     </section>
//   );
// };

// BEGIN 01/05/2025 compatible next-intl

"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import TopWave from "./topWave";
import BottomWave from "./bottomWave";
import { useTranslations } from "next-intl";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

export const TestimonialSection = () => {
  const t = useTranslations("TestimonialSection");

  const reviewList: ReviewProps[] = [
    {
      image: "/testimonial/Amina Diallo.jpg",
      name: t("reviews.amina.name"),
      userName: t("reviews.amina.profession"),
      comment: t("reviews.amina.comment"),
      rating: 5.0,
    },
    {
      image: "/testimonial/kwame Mensah.jpg",
      name: t("reviews.kwame.name"),
      userName: t("reviews.kwame.profession"),
      comment: t("reviews.kwame.comment"),
      rating: 4.8,
    },
    {
      image: "/testimonial/Fatoumata Diop.jpg",
      name: t("reviews.fatoumata.name"),
      userName: t("reviews.fatoumata.profession"),
      comment: t("reviews.fatoumata.comment"),
      rating: 4.9,
    },
    {
      image: "/testimonial/Tunde Adebayo.jpg",
      name: t("reviews.tunde.name"),
      userName: t("reviews.tunde.profession"),
      comment: t("reviews.tunde.comment"),
      rating: 5.0,
    },
    {
      image: "/testimonial/Nia Nkrumah.jpg",
      name: t("reviews.nia.name"),
      userName: t("reviews.nia.profession"),
      comment: t("reviews.nia.comment"),
      rating: 5.0,
    },
    {
      image: "/testimonial/Lamine Cissé.jpg",
      name: t("reviews.lamine.name"),
      userName: t("reviews.lamine.profession"),
      comment: t("reviews.lamine.comment"),
      rating: 4.0,
    },
  ];

  return (
    <section
      id="testimonials"
      className="container relative mt-24 pt-24 sm:pt-28 pb-40"
    >
      <TopWave />
      <div className="text-center mb-8">
        <h2 className="mt-2 text-3xl md:text-4xl text-primary text-center mb-2 tracking-wider">
          {t("title")}
        </h2>
        <h2 className="text-xl md:text-2xl text-center font-bold">
          {t("subtitle")}
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < Math.floor(review.rating)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <BottomWave />
    </section>
  );
};
