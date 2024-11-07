"use client";

// import { LeafletMap } from "@/components/LeafletMap";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import Link from "next/link";

// export const HeroSection = () => {
//   const { theme } = useTheme();
//   return (
//     <section
//       className="container relative w-full h-screen  bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url('/africa.jpg')` }}
//     >
//       {/* Superposition en dégradé pour améliorer la lisibilité */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
//       <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-16 sm:py-20">
//         <div className="text-center space-y-8">
//           {/* <Badge variant="outline" className="text-sm py-2">
//             <span className="mr-2 text-primary">
//               <Badge>New</Badge>
//             </span>
//             <span> Design is out now! </span>
//           </Badge> */}

//           <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
//             <h1>
//               <span className="">Découvrez</span>
//               <br />
//               <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//                 AFRIQUE AVENIR
//               </span>
//             </h1>
//           </div>

//           <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
//             {`L'avenir de l'Afrique : innovations, opportunités et
//               inspirations pour bâtir un continent prospère.`}
//           </p>

//           <div className="space-y-4 md:space-y-0 md:space-x-4">
//             <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
//               Commençons
//               <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>

//         {/* <div className="relative group mt-14">
//           <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
//           <Image
//             width={1200}
//             height={1200}
//             className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
//             src={
//               theme === "light"
//                 ? "/hero-image-light.jpg"
//                 : "/hero-image-dark.jpg"
//             }
//             alt="dashboard"
//           />

//           <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>

//         </div> */}

//         {/* <div className="max-w-screen-md  h-[600px] md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"> */}
//       </div>
//     </section>
//   );
// };

// import { LeafletMap } from "@/components/LeafletMap";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import Link from "next/link";

// export const HeroSection = () => {
//   const { theme } = useTheme();
//   return (
//     <section
//       className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url('/africa.jpg')` }}
//     >
//       {/* Superposition en dégradé pour améliorer la lisibilité */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

//       {/* Contenu de la section */}
//       <div className="relative z-10 grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-16 sm:py-20">
//         <div className="text-center space-y-8">
//           <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold text-white">
//             <h1>
//               <span className="">Découvrez</span>
//               <br />
//               <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//                 AFRIQUE AVENIR
//               </span>
//             </h1>
//           </div>

//           <p className="max-w-screen-sm mx-auto text-xl text-gray-200">
//             {`L'avenir de l'Afrique : innovations, opportunités et
//               inspirations pour bâtir un continent prospère.`}
//           </p>

//           <div className="space-y-4 md:space-y-0 md:space-x-4">
//             <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
//               Commençons
//               <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import { LeafletMap } from "@/components/LeafletMap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`relative w-full h-screen bg-cover bg-center bg-no-repeat transition-all duration-500 ${
        theme === "dark"
          ? "bg-[url('/africa-dark.jpg')]"
          : "bg-[url('/africa-light.jpg')]"
      }`}
    >
      {/* Superposition en dégradé pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10"></div>

      {/* Contenu de la section */}
      <div className="relative z-10 grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-16 sm:py-20">
        <div className="text-center space-y-8">
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold text-white">
            <h1>
              <span className="">Découvrez</span>
              <br />
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                AFRIQUE AVENIR
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-gray-200">
            {`L'avenir de l'Afrique : innovations, opportunités et
              inspirations pour bâtir un continent prospère.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Commençons
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
