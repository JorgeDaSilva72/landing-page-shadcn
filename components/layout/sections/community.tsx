// // import DiscordIcon from "@/components/icons/discord-icon";
// import TwitchIcon from "@/components/icons/twitch";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export const CommunitySection = () => {
//   return (
//     <section id="community" className="py-12 ">
//       <hr className="border-secondary" />
//       <div className="container py-20 sm:py-20">
//         <div className="lg:w-[60%] mx-auto">
//           <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
//             <CardHeader>
//               <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
//                 <TwitchIcon />
//                 <div>
//                   Prêt à rejoindre la
//                   <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//                     communauté ?
//                   </span>
//                 </div>
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
//               Rejoignez notre dynamique communauté Twitch ! Connectez-vous,
//               partagez et grandissez avec des passionnés partageant les mêmes
//               idées.🚀
//             </CardContent>

//             <CardFooter>
//               <Button asChild>
//                 <a href="https://www.twitch.tv/" target="_blank">
//                   Rejoindre Twitch
//                 </a>
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>
//       </div>
//       <hr className="border-secondary" />
//     </section>
//   );
// };

// import DiscordIcon from "@/components/icons/discord-icon";
// import TwitchIcon from "@/components/icons/twitch";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export const CommunitySection = () => {
//   return (
//     <section
//       id="community"
//       className="relative bg-black text-white pt-12 pb-12"
//     >
//       {/* Liseré orange ondulé intégré directement dans le fond */}
//       <div className="absolute inset-x-0 top-0 overflow-hidden leading-none">
//         <svg
//           className="w-full h-[6rem] sm:h-[8rem] md:h-[10rem] lg:h-[12rem]"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//         >
//           <path
//             fill="#e94f00"
//             d="M0,96L48,106.7C96,117,192,139,288,160C384,181,480,203,576,192C672,181,768,139,864,122.7C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
//           ></path>
//         </svg>
//       </div>

//       {/* Contenu de la section */}
//       <div className="container py-20 sm:py-20 relative z-10">
//         <div className="lg:w-[60%] mx-auto">
//           <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
//             <CardHeader>
//               <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
//                 <TwitchIcon />
//                 <div>
//                   Prêt à rejoindre la
//                   <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//                     communauté ?
//                   </span>
//                 </div>
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
//               Rejoignez notre dynamique communauté Twitch ! Connectez-vous,
//               partagez et grandissez avec des passionnés partageant les mêmes
//               idées.🚀
//             </CardContent>
//             <CardFooter>
//               <Button asChild>
//                 <a
//                   href="https://www.twitch.tv/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Rejoindre Twitch
//                 </a>
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// import TwitchIcon from "@/components/icons/twitch";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export const CommunitySection = () => {
//   return (
//     <section
//       id="community"
//       className="relative bg-black text-white pt-12 pb-12"
//     >
//       {/* Liseré ondulé avec gestion du mode sombre */}
//       <div className="absolute inset-x-0 top-0 overflow-hidden leading-none">
//         <svg
//           className="w-full h-[6rem] sm:h-[8rem] md:h-[10rem] lg:h-[12rem] dark:fill-[#FFA500] fill-[#e94f00]"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//         >
//           <path d="M0,96L48,106.7C96,117,192,139,288,160C384,181,480,203,576,192C672,181,768,139,864,122.7C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//         </svg>
//       </div>

//       {/* Contenu de la section */}
//       <div className="container py-20 sm:py-20 relative z-10">
//         <div className="lg:w-[60%] mx-auto">
//           <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
//             <CardHeader>
//               <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
//                 <TwitchIcon />
//                 <div>
//                   Prêt à rejoindre la
//                   <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//                     communauté ?
//                   </span>
//                 </div>
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
//               Rejoignez notre dynamique communauté Twitch ! Connectez-vous,
//               partagez et grandissez avec des passionnés partageant les mêmes
//               idées.🚀
//             </CardContent>
//             <CardFooter>
//               <Button asChild>
//                 <a
//                   href="https://www.twitch.tv/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Rejoindre Twitch
//                 </a>
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// import TwitchIcon from "@/components/icons/twitch";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export const CommunitySection = () => {
//   return (
//     <section id="community" className="relative py-12 bg-black text-white">
//       {/* Liseré ondulé avec gestion du mode sombre */}
//       <div className="absolute inset-x-0 top-0 overflow-hidden leading-none">
//         <svg
//           className="w-full h-[6rem] sm:h-[8rem] md:h-[10rem] lg:h-[12rem] dark:fill-[#FFA500] fill-[#e94f00]"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//         >
//           <path d="M0,96L48,106.7C96,117,192,139,288,160C384,181,480,203,576,192C672,181,768,139,864,122.7C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//         </svg>
//       </div>

//       {/* Contenu de la section */}
//       <div className="container py-20 sm:py-20 relative z-10">
//         <div className="lg:w-[60%] mx-auto">
//           <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
//             <CardHeader>
//               <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
//                 <TwitchIcon />
//                 <div>
//                   Prêt à rejoindre la
//                   <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//                     communauté ?
//                   </span>
//                 </div>
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
//               Rejoignez notre dynamique communauté Twitch ! Connectez-vous,
//               partagez et grandissez avec des passionnés partageant les mêmes
//               idées.🚀
//             </CardContent>

//             <CardFooter>
//               <Button asChild>
//                 <a href="https://www.twitch.tv/" target="_blank">
//                   Rejoindre Twitch
//                 </a>
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>
//       </div>

//       {/* Liseré inférieur avec la même couleur pour l'intégration */}
//       {/* <div className="absolute inset-x-0 bottom-0 overflow-hidden leading-none">
//         <svg
//           className="w-full h-[6rem] sm:h-[8rem] md:h-[10rem] lg:h-[12rem] dark:fill-[#FFA500] fill-[#e94f00]"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//         >
//           <path d="M0,96L48,106.7C96,117,192,139,288,160C384,181,480,203,576,192C672,181,768,139,864,122.7C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//         </svg>
//       </div> */}

//       <hr className="border-secondary" />
//     </section>
//   );
// };

import TwitchIcon from "@/components/icons/twitch";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TopWave from "./topWave";
import BottomWave from "./bottomWave";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 relative bg-background">
      {/* Liseré ondulé en haut de la section */}
      <TopWave />

      {/* <hr className="border-secondary" /> */}
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <TwitchIcon />
                <div>
                  Prêt à rejoindre la
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    communauté ?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Rejoignez notre dynamique communauté Twitch ! Connectez-vous,
              partagez et grandissez avec des passionnés partageant les mêmes
              idées.🚀
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a
                  href="https://m.twitch.tv/afriqueavenir/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rejoindre Twitch
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      {/* Liseré ondulé en bas de la section, inversé */}
      <BottomWave />

      {/* <hr className="border-secondary" /> */}
    </section>
  );
};
