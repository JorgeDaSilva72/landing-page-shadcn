// "use client";
// import GithubIcon from "@/components/icons/github-icon";
// import LinkedInIcon from "@/components/icons/linkedin-icon";
// import XIcon from "@/components/icons/x-icon";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardFooter,
//   CardDescription,
// } from "@/components/ui/card";
// import Image from "next/image";
// import { Link } from "@/i18n/navigation";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// interface TeamProps {
//   imageUrl: string;
//   firstName: string;
//   lastName: string;
//   positions: string[];
//   socialNetworks: SocialNetworkProps[];
// }
// interface SocialNetworkProps {
//   name: string;
//   url: string;
// }
// export const TeamSection = () => {
//   const teamList: TeamProps[] = [
//     {
//       // imageUrl: "https://i.pravatar.cc/250?img=58",
//       imageUrl: "/team/Herve Krist.jpg",

//       // "https://scontent.fcdg1-1.fna.fbcdn.net/v/t39.30808-1/417458750_10224126368733054_8524091925298616823_n.jpg?stp=c0.180.1080.1080a_dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=_MyFDh4eHjYQ7kNvgH6Vb1s&_nc_ht=scontent.fcdg1-1.fna&_nc_gid=AvwI_sHVNTh0-X0rQIApK7w&oh=00_AYCGxvc4eaqVtL8alP4GPA-raeyEq2yhVNnv14xqLf8U8g&oe=66EC8C5B",
//       firstName: "Herve",
//       lastName: "Krist",
//       positions: ["Directeur Général", "CEO – Chief Executive Officer"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/",
//         },

//         {
//           name: "X",
//           url: "https://x.com/",
//         },
//       ],
//     },
//     {
//       imageUrl: "/team/jorge.webp",
//       firstName: "Jorge",
//       lastName: "Da Silva",
//       positions: ["Directeur Technique", "CTO – Chief Technology Officer"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com",
//         },
//         {
//           name: "X",
//           url: "https://x.com",
//         },
//         {
//           name: "Github",
//           url: "https://github.com/",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         // "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "/team/Cedrico Elsior.jpg",
//       firstName: "Cedrico",
//       lastName: "Elsior",
//       positions: ["Directeur Financier", "CFO – Chief Financial Officer"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/",
//         },
//         {
//           name: "X",
//           url: "https://x.com",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       firstName: "Sarah",
//       lastName: "Robinson",
//       positions: ["Directeur Marketing", " CMO – Chief Marketing Officer"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/",
//         },

//         {
//           name: "X",
//           url: "https://x.com/",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       firstName: "Michael",
//       lastName: "Holland",
//       positions: [
//         "Directeur des Ressources Humaines",
//         "CHRO – Chief Human Resources Officer",
//       ],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/",
//         },
//         {
//           name: "X",
//           url: "https://x.com/",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       firstName: "Zoe",
//       lastName: "Garcia",
//       positions: ["Directeur Commercial", "CSO – Chief Sales Officer"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/",
//         },
//         {
//           name: "X",
//           url: "https://x.com/",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       firstName: "Evan",
//       lastName: "James",
//       positions: ["Directeur des Opérations", "COO – Chief Operating Officer"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/",
//         },

//         {
//           name: "X",
//           url: "https://x.com/",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       firstName: "Pam",
//       lastName: "Taylor",
//       positions: ["Directeur Juridique", "CLO – Chief Legal Officer"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/",
//         },
//         {
//           name: "X",
//           url: "https://x.com/",
//         },
//       ],
//     },
//   ];
//   const socialIcon = (socialName: string) => {
//     switch (socialName) {
//       case "LinkedIn":
//         return <LinkedInIcon />;
//       case "Github":
//         return <GithubIcon />;
//       case "X":
//         return <XIcon />;
//     }
//   };

//   return (
//     <section id="team" className="container  py-24 sm:py-32">
//       <div className="text-center mb-8">
//         {/* <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
//           Team
//         </h2> */}
//         <h2 className="text-3xl md:text-4xl text-primary text-center mb-2 tracking-wider ">
//           OUR TEAM
//         </h2>

//         {/* <h2 className="text-3xl md:text-4xl text-center font-bold">
//           The Company Dream Team
//         </h2> */}

//         <h2 className="text-xl md:text-2xl text-center font-bold">
//           Meet the team that brings your ambitions to life!
//         </h2>
//       </div>

//       {/* Carousel pour petits écrans */}
//       <div className="block md:hidden">
//         <Carousel
//           opts={{
//             align: "start",
//           }}
//           className="relative w-[90%] mx-auto"
//         >
//           <CarouselContent>
//             {teamList.map(
//               (
//                 { imageUrl, firstName, lastName, positions, socialNetworks },
//                 index
//               ) => (
//                 <CarouselItem key={index} className="px-4">
//                   <Card className="bg-muted/50 dark:bg-card">
//                     <CardHeader className="p-4">
//                       <Image
//                         src={imageUrl}
//                         alt={`${firstName} ${lastName}`}
//                         width={150}
//                         height={150}
//                         className="w-32 h-32 mx-auto rounded-full object-cover"
//                       />
//                       <CardTitle className="mt-4 text-center">
//                         {firstName}{" "}
//                         <span className="text-primary">{lastName}</span>
//                       </CardTitle>
//                       <CardDescription className="text-center">
//                         {positions.join(", ")}
//                       </CardDescription>
//                     </CardHeader>
//                     <CardFooter className="flex justify-center space-x-4 mt-4">
//                       {socialNetworks.map(({ name, url }, index) => (
//                         <Link
//                           key={index}
//                           href={url}
//                           target="_blank"
//                           className="hover:opacity-80 transition-all"
//                         >
//                           {socialIcon(name)}
//                         </Link>
//                       ))}
//                     </CardFooter>
//                   </Card>
//                 </CarouselItem>
//               )
//             )}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//       {/* Affichage en grille pour les grands écrans */}
//       <div className="hidden md:grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {teamList.map(
//           (
//             { imageUrl, firstName, lastName, positions, socialNetworks },
//             index
//           ) => (
//             <Card
//               key={index}
//               className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
//             >
//               <CardHeader className="p-0 gap-0">
//                 <div className="h-full overflow-hidden">
//                   <Image
//                     src={imageUrl}
//                     alt=""
//                     width={300}
//                     height={300}
//                     className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
//                   />
//                 </div>
//                 <CardTitle className="py-6 pb-4 px-6">
//                   {firstName}
//                   <span className="text-primary ml-2">{lastName}</span>
//                 </CardTitle>
//               </CardHeader>
//               {positions.map((position, index) => (
//                 <CardContent
//                   key={index}
//                   className={`pb-0 text-muted-foreground ${
//                     index === positions.length - 1 && "pb-6"
//                   }`}
//                 >
//                   {position}
//                   {index < positions.length - 1 && <span>,</span>}
//                 </CardContent>
//               ))}

//               <CardFooter className="space-x-4 mt-auto">
//                 {socialNetworks.map(({ name, url }, index) => (
//                   <Link
//                     key={index}
//                     href={url}
//                     target="_blank"
//                     className="hover:opacity-80 transition-all"
//                   >
//                     {socialIcon(name)}
//                   </Link>
//                 ))}
//               </CardFooter>
//             </Card>
//           )
//         )}
//       </div>
//     </section>
//   );
// };

// BEGIN 27/04/2025 compatible next-intl

"use client";

import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

export const TeamSection = () => {
  const t = useTranslations("Team");

  const teamList: TeamProps[] = [
    {
      imageUrl: "/team/Herve Krist.jpg",
      firstName: "Herve",
      lastName: "Krist",
      positions: [t("positions.ceo"), t("positions.ceoTitle")],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
        },
        {
          name: "X",
          url: "https://x.com/",
        },
      ],
    },
    {
      imageUrl: "/team/jorge.webp",
      firstName: "Jorge",
      lastName: "Da Silva",
      positions: [t("positions.cto"), t("positions.ctoTitle")],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com",
        },
        {
          name: "X",
          url: "https://x.com",
        },
        {
          name: "Github",
          url: "https://github.com/",
        },
      ],
    },
    {
      imageUrl: "/team/Cedrico Elsior.jpg",
      firstName: "Cedrico",
      lastName: "Elsior",
      positions: [t("positions.cfo"), t("positions.cfoTitle")],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
        },
        {
          name: "X",
          url: "https://x.com",
        },
      ],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      firstName: "Sarah",
      lastName: "Robinson",
      positions: [t("positions.cmo"), t("positions.cmoTitle")],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
        },

        {
          name: "X",
          url: "https://x.com/",
        },
      ],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      firstName: "Michael",
      lastName: "Holland",
      positions: [t("positions.chro"), t("positions.chroTitle")],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
        },
        {
          name: "X",
          url: "https://x.com/",
        },
      ],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      firstName: "Zoe",
      lastName: "Garcia",
      positions: [t("positions.cso"), t("positions.csoTitle")],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
        },
        {
          name: "X",
          url: "https://x.com/",
        },
      ],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      firstName: "Evan",
      lastName: "James",
      positions: [t("positions.coo"), t("positions.cooTitle")],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
        },

        {
          name: "X",
          url: "https://x.com/",
        },
      ],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      firstName: "Pam",
      lastName: "Taylor",
      positions: [t("positions.clo"), t("positions.cloTitle")],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
        },
        {
          name: "X",
          url: "https://x.com/",
        },
      ],
    },
  ];

  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl text-primary text-center mb-2 tracking-wider">
          {t("title")}
        </h2>
        <h2 className="text-xl md:text-2xl text-center font-bold">
          {t("subtitle")}
        </h2>
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-[90%] mx-auto"
        >
          <CarouselContent>
            {teamList.map(
              (
                { imageUrl, firstName, lastName, positions, socialNetworks },
                index
              ) => (
                <CarouselItem key={index} className="px-4">
                  <Card className="bg-muted/50 dark:bg-card">
                    <CardHeader className="p-4">
                      <Image
                        src={imageUrl}
                        alt={`${firstName} ${lastName}`}
                        width={150}
                        height={150}
                        className="w-32 h-32 mx-auto rounded-full object-cover"
                      />
                      <CardTitle className="mt-4 text-center">
                        {firstName}{" "}
                        <span className="text-primary">{lastName}</span>
                      </CardTitle>
                      <CardDescription className="text-center">
                        {positions.join(", ")}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-center space-x-4 mt-4">
                      {socialNetworks.map(({ name, url }, index) => (
                        <Link
                          key={index}
                          href={url}
                          target="_blank"
                          className="hover:opacity-80 transition-all"
                        >
                          {socialIcon(name)}
                        </Link>
                      ))}
                    </CardFooter>
                  </Card>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}
              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
