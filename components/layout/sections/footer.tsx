// import { Separator } from "@/components/ui/separator";
// import { ChevronsUpIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export const FooterSection = () => {
//   return (
//     <footer id="footer" className="container py-8 sm:py-16">
//       <div className="p-10 bg-card border border-secondary rounded-2xl">
//         <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
//           <div className="col-span-full xl:col-span-2">
//             <Link href="#" className="flex font-bold items-center">
//               {/* <ChevronsUpIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" /> */}
//               <Image
//                 src="/logo-topaz-enhance-coupe.jpeg"
//                 alt="Icone"
//                 width={36} // Largeur de l'image
//                 height={36} // Hauteur de l'image
//                 className="rounded-lg"
//               />

//               <h2 className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//                 AFRIQUE AVENIR
//               </h2>
//             </Link>
//           </div>

//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">Contact</h3>
//             <div>
//               <Link href="#" className="opacity-60 hover:opacity-100">
//                 LinkedIn
//               </Link>
//             </div>

//             <div>
//               <Link href="#" className="opacity-60 hover:opacity-100">
//                 Twitter
//               </Link>
//             </div>

//             <div>
//               <Link href="#" className="opacity-60 hover:opacity-100">
//                 Discord
//               </Link>
//             </div>
//           </div>

//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">Plateformes</h3>
//             <div>
//               <Link href="#" className="opacity-60 hover:opacity-100">
//                 iOS
//               </Link>
//             </div>

//             <div>
//               <Link href="#" className="opacity-60 hover:opacity-100">
//                 Android
//               </Link>
//             </div>

//             <div>
//               <Link href="#" className="opacity-60 hover:opacity-100">
//                 Web
//               </Link>
//             </div>
//           </div>

//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">Aide</h3>
//             <div>
//               <Link href="#" className="opacity-60 hover:opacity-100">
//                 Nous contacter
//               </Link>
//             </div>

//             <div>
//               <Link href="#" className="opacity-60 hover:opacity-100">
//                 FAQ
//               </Link>
//             </div>

//             <div>
//               <Link href="#" className="opacity-60 hover:opacity-100">
//                 Feedback
//               </Link>
//             </div>
//           </div>

//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">
//               <span className="block lg:hidden">Réseaux</span>
//               <span className="hidden lg:block">Réseaux sociaux</span>
//             </h3>
//             <div>
//               <Link href="#" className="opacity-60 hover:opacity-100">
//                 YouTube
//               </Link>
//             </div>

//             <div>
//               <Link href="#" className="opacity-60 hover:opacity-100">
//                 Instagram
//               </Link>
//             </div>

//             <div>
//               <Link href="#" className="opacity-60 hover:opacity-100">
//                 Facebook
//               </Link>
//             </div>
//           </div>
//         </div>

//         <Separator className="my-6" />
//         <section className="">
//           <h3 className="">
//             &copy; 2024 Conçu et développé par
//             <Link
//               target="_blank"
//               href="https://jds-portfolio.netlify.app/"
//               className="text-primary transition-all border-primary hover:border-b-2 ml-1"
//             >
//               Jorge Da Silva
//             </Link>
//           </h3>
//         </section>
//       </div>
//     </footer>
//   );
// };
import DiscordIcon from "@/components/icons/discord-icon";
import { Separator } from "@/components/ui/separator";
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Twitch,
  SmartphoneIcon,
  GlobeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-8 sm:py-16">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          {/* Logo Section */}
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex items-center space-x-3">
              <Image
                src="/logo-topaz-enhance-coupe.jpeg"
                alt="Icone"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <h2 className="text-transparent text-2xl font-bold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                AFRIQUE AVENIR
              </h2>
            </Link>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Contact</h3>
            <Link
              href="#footer"
              className="flex items-center gap-2 opacity-60 hover:opacity-100"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Link>
            <Link
              href="https://x.com/afriqueavenir9?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-60 hover:opacity-100"
            >
              <Twitter className="w-5 h-5" />
              Twitter
            </Link>
            <Link
              href="https://m.twitch.tv/afriqueavenir/home"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-60 hover:opacity-100"
            >
              <Twitch className="w-5 h-5" />
              Twitch
            </Link>
          </div>

          {/* Plateformes Section */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Plateformes</h3>
            <Link
              href="#footer"
              className="flex items-center gap-2 opacity-60 hover:opacity-100"
            >
              <SmartphoneIcon className="w-5 h-5" />
              iOS
            </Link>
            <Link
              href="#footer"
              className="flex items-center gap-2 opacity-60 hover:opacity-100"
            >
              <SmartphoneIcon className="w-5 h-5" />
              Android
            </Link>
            <Link
              href="#footer"
              className="flex items-center gap-2 opacity-60 hover:opacity-100"
            >
              <GlobeIcon className="w-5 h-5" />
              Web
            </Link>
          </div>

          {/* Aide Section */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Aide</h3>
            <Link href="#contact" className="opacity-60 hover:opacity-100">
              Nous contacter
            </Link>
            <Link href="#faq" className="opacity-60 hover:opacity-100">
              FAQ
            </Link>
            <Link href="#contact" className="opacity-60 hover:opacity-100">
              Feedback
            </Link>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Réseaux sociaux</h3>
            <Link
              href="https://www.youtube.com/@Afriqueavenir-m5g"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-60 hover:opacity-100"
            >
              <Youtube className="w-5 h-5" />
              YouTube
            </Link>
            <Link
              href="https://www.instagram.com/afriqueavenir9/profilecard/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-60 hover:opacity-100"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61568365453332&mibextid=wwXIfr&rdid=T1Uukh3inyp1lt68&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19TQgmn4dJ%2F%3Fmibextid%3DwwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-60 hover:opacity-100"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </Link>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-6" />

        {/* Footer Credits */}
        <section className="text-center">
          <h3 className="text-sm">
            &copy; 2024 Conçu et développé par
            <Link
              target="_blank"
              href="https://jds-portfolio.netlify.app/"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Jorge Da Silva
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
