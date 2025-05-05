// "use client";
// import { Menu } from "lucide-react";
// import React from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "../ui/sheet";
// import { Separator } from "../ui/separator";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "../ui/navigation-menu";
// import { Button } from "../ui/button";
// import Link from "next/link";
// import Image from "next/image";
// import { ToggleTheme } from "./toogle-theme";
// import { LanguageSwitcher } from "../LanguageSwitcher";

// interface RouteProps {
//   href: string;
//   label: string;
// }

// interface FeatureProps {
//   title: string;
//   description: string;
// }

// const routeList: RouteProps[] = [
//   {
//     href: "#services",
//     label: "Services",
//   },
//   {
//     href: "#testimonials",
//     label: "Témoignages",
//   },
//   {
//     href: "#team",
//     label: "Equipe",
//   },
//   {
//     href: "#faq",
//     label: "FAQ",
//   },

//   {
//     href: "#contact",
//     label: "Contact",
//   },
// ];

// const routeListForDesktop: RouteProps[] = [
//   {
//     href: "#testimonials",
//     label: "Témoignages",
//   },
//   {
//     href: "#team",
//     label: "Equipe",
//   },
//   {
//     href: "#faq",
//     label: "FAQ",
//   },

//   {
//     href: "#contact",
//     label: "Contact",
//   },
// ];

// const featureList: FeatureProps[] = [
//   {
//     title: "Annonces immobilières ",
//     description: " Explorez une variété d'annonces immobilières en AFRIQUE.",
//   },
//   {
//     title: "Cession et acquisition d'entreprises en Afrique",
//     description:
//       "L'Afrique Vous Attends : Simplifiez l'Acquisition d'Entreprises Locales.",
//   },
//   {
//     title: "Votre carrière, notre mission : l'emploi.",
//     description: "Découvrez l’Avenir de l’Emploi en Afrique. ",
//   },
//   // {
//   //   title: "Annuaire professionnel",
//   //   description: "Votre réseau, à portée de clic !",
//   // },
//   {
//     title: "Boutique officielle",
//     description: "Merci de supporter notre projet.",
//   },
// ];

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   return (
//     <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card ">
//       <Link href="/" className="font-bold text-lg flex items-center">
//         <Image
//           src="/logo-topaz-enhance-coupe.jpeg"
//           alt="Logo"
//           width={36}
//           height={36}
//           className="rounded-lg"
//         />
//         <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//           AFRIQUE AVENIR
//         </span>
//       </Link>
//       {/* <!-- Mobile --> */}
//       <div className="flex items-center lg:hidden z-999">
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild>
//             <Menu
//               onClick={() => setIsOpen(!isOpen)}
//               className="cursor-pointer lg:hidden"
//             />
//           </SheetTrigger>

//           <SheetContent
//             side="left"
//             className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
//           >
//             <div>
//               <SheetHeader className="mb-4 ml-4">
//                 <SheetTitle className="flex items-center">
//                   <Link href="/" className="flex items-center  ">
//                     {/* <ChevronsUp className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}

//                     <Image
//                       src="/logo-topaz-enhance-coupe.jpeg"
//                       alt="Logo"
//                       width={36} // Largeur de l'image
//                       height={36} // Hauteur de l'image
//                       className="rounded-lg"
//                     />

//                     <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//                       AFRIQUE AVENIR
//                     </span>
//                   </Link>
//                 </SheetTitle>
//               </SheetHeader>

//               <div className="flex flex-col gap-2">
//                 {routeList.map(({ href, label }) => (
//                   <Button
//                     key={href}
//                     onClick={() => setIsOpen(false)}
//                     asChild
//                     variant="ghost"
//                     className="justify-start text-base"
//                   >
//                     <Link href={href}>{label}</Link>
//                   </Button>
//                 ))}
//               </div>
//             </div>

//             <SheetFooter className="flex-col sm:flex-col justify-start items-start">
//               <Separator className="mb-2" />

//               <ToggleTheme />
//             </SheetFooter>
//           </SheetContent>
//         </Sheet>
//       </div>

//       {/* <!-- Desktop --> */}
//       <NavigationMenu className="hidden lg:block mx-auto">
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="bg-card text-base">
//               Services
//             </NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
//                 <Image
//                   src="/logo-topaz-enhance-coupe.jpeg"
//                   alt="Logo"
//                   className="h-full w-full rounded-md object-contain"
//                   width={600}
//                   height={600}
//                 />
//                 <ul className="flex flex-col gap-2">
//                   {featureList.map(({ title, description }) => (
//                     <li
//                       key={title}
//                       className="rounded-md p-3 text-sm hover:bg-muted"
//                     >
//                       <Link href="#services">
//                         <p className="mb-1 font-semibold leading-none text-foreground">
//                           {title}
//                         </p>
//                         <p className="line-clamp-2 text-muted-foreground">
//                           {description}
//                         </p>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </NavigationMenuContent>
//           </NavigationMenuItem>

//           <NavigationMenuItem>
//             {routeListForDesktop.map(({ href, label }) => (
//               <NavigationMenuLink key={href} asChild>
//                 <Link href={href} className="text-base px-2">
//                   {label}
//                 </Link>
//               </NavigationMenuLink>
//             ))}
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>

//       <div className="hidden lg:flex">
//         <ToggleTheme />
//         <LanguageSwitcher />
//       </div>
//     </header>
//   );
// };

// BEGIN 01/05/2025 compatible next-intl
// "use client";
// import { Menu } from "lucide-react";
// import React from "react";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "../ui/sheet";
// import { Separator } from "../ui/separator";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "../ui/navigation-menu";
// import { Button } from "../ui/button";
// import Link from "next/link";
// import Image from "next/image";
// import { LanguageSwitcher } from "../LanguageSwitcher";
// import { useTranslations } from "next-intl";
// import { ThemeToggle } from "./ThemeToggle";

// export const Navbar = () => {
//   const t = useTranslations("Navbar");
//   const [isOpen, setIsOpen] = React.useState(false);

//   const routeList = [
//     { href: "#services", label: t("routes.services") },
//     { href: "#testimonials", label: t("routes.testimonials") },
//     { href: "#team", label: t("routes.team") },
//     { href: "#faq", label: t("routes.faq") },
//     { href: "#contact", label: t("routes.contact") },
//   ];

//   const routeListForDesktop = [
//     { href: "#testimonials", label: t("routes.testimonials") },
//     { href: "#team", label: t("routes.team") },
//     { href: "#faq", label: t("routes.faq") },
//     { href: "#contact", label: t("routes.contact") },
//   ];

//   const featureList = [
//     {
//       title: t("features.realEstate.title"),
//       description: t("features.realEstate.description"),
//     },
//     {
//       title: t("features.businessTransfer.title"),
//       description: t("features.businessTransfer.description"),
//     },
//     {
//       title: t("features.jobs.title"),
//       description: t("features.jobs.description"),
//     },
//     {
//       title: t("features.store.title"),
//       description: t("features.store.description"),
//     },
//   ];

//   return (
//     <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
//       <Link href="/" className="font-bold text-lg flex items-center">
//         <Image
//           src="/logo-topaz-enhance-coupe.jpeg"
//           alt={t("logoAlt")}
//           width={36}
//           height={36}
//           className="rounded-lg"
//         />
//         <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//           {t("brandName")}
//         </span>
//       </Link>

//       {/* Mobile Menu */}
//       <div className="flex items-center lg:hidden z-999">
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild>
//             <Menu
//               onClick={() => setIsOpen(!isOpen)}
//               className="cursor-pointer lg:hidden"
//             />
//           </SheetTrigger>

//           <SheetContent
//             side="left"
//             className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
//           >
//             <div className="flex justify-end p-2">
//               <SheetClose asChild>
//                 <Button size="icon" variant="ghost">
//                   ✕
//                 </Button>
//               </SheetClose>
//             </div>
//             <div>
//               <SheetHeader className="mb-4 ml-4">
//                 <SheetTitle className="flex items-center">
//                   <Link href="/" className="flex items-center">
//                     <Image
//                       src="/logo-topaz-enhance-coupe.jpeg"
//                       alt={t("logoAlt")}
//                       width={36}
//                       height={36}
//                       className="rounded-lg"
//                     />
//                     <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//                       {t("brandName")}
//                     </span>
//                   </Link>
//                 </SheetTitle>
//               </SheetHeader>

//               <div className="flex flex-col gap-2">
//                 {routeList.map(({ href, label }) => (
//                   <Button
//                     key={href}
//                     onClick={() => setIsOpen(false)}
//                     asChild
//                     variant="ghost"
//                     className="justify-start text-base"
//                   >
//                     <Link href={href}>{label}</Link>
//                   </Button>
//                 ))}
//               </div>
//             </div>

//             <SheetFooter className="flex-col sm:flex-col justify-start items-start">
//               <Separator className="mb-2" />
//               {/* <ToggleTheme /> */}
//               <ThemeToggle />
//               <Separator className="mb-2" />
//               <LanguageSwitcher />
//             </SheetFooter>
//           </SheetContent>
//         </Sheet>
//       </div>

//       {/* Desktop Menu */}
//       <NavigationMenu className="hidden lg:block mx-auto">
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="bg-card text-base">
//               {t("servicesMenu")}
//             </NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
//                 <Image
//                   src="/logo-topaz-enhance-coupe.jpeg"
//                   alt={t("logoAlt")}
//                   className="h-full w-full rounded-md object-contain"
//                   width={600}
//                   height={600}
//                 />
//                 <ul className="flex flex-col gap-2">
//                   {featureList.map(({ title, description }) => (
//                     <li
//                       key={title}
//                       className="rounded-md p-3 text-sm hover:bg-muted"
//                     >
//                       <Link href="#services">
//                         <p className="mb-1 font-semibold leading-none text-foreground">
//                           {title}
//                         </p>
//                         <p className="line-clamp-2 text-muted-foreground">
//                           {description}
//                         </p>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </NavigationMenuContent>
//           </NavigationMenuItem>

//           <NavigationMenuItem>
//             {routeListForDesktop.map(({ href, label }) => (
//               <NavigationMenuLink key={href} asChild>
//                 <Link href={href} className="text-base px-2">
//                   {label}
//                 </Link>
//               </NavigationMenuLink>
//             ))}
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>

//       <div className="hidden lg:flex">
//         {/* <ToggleTheme /> */}
//         <ThemeToggle />
//         <LanguageSwitcher />
//       </div>
//     </header>
//   );
// };

// "use client";
// import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
// import React, { useState, useEffect } from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
//   SheetClose,
// } from "../ui/sheet";
// import { Separator } from "../ui/separator";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "../ui/navigation-menu";
// import { Button } from "../ui/button";
// import Link from "next/link";
// import Image from "next/image";
// import { LanguageSwitcher } from "../LanguageSwitcher";
// import { useTranslations } from "next-intl";
// import { ThemeToggle } from "./ThemeToggle";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "../ui/collapsible";

// export const Navbar = () => {
//   const t = useTranslations("Navbar");
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Effet pour détecter le scroll et ajuster l'apparence de la navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const routeList = [
//     { href: "#services", label: t("routes.services") },
//     { href: "#testimonials", label: t("routes.testimonials") },
//     { href: "#team", label: t("routes.team") },
//     { href: "#faq", label: t("routes.faq") },
//     { href: "#contact", label: t("routes.contact") },
//   ];

//   const routeListForDesktop = [
//     { href: "#testimonials", label: t("routes.testimonials") },
//     { href: "#team", label: t("routes.team") },
//     { href: "#faq", label: t("routes.faq") },
//     { href: "#contact", label: t("routes.contact") },
//   ];

//   const featureList = [
//     {
//       title: t("features.realEstate.title"),
//       description: t("features.realEstate.description"),
//     },
//     {
//       title: t("features.businessTransfer.title"),
//       description: t("features.businessTransfer.description"),
//     },
//     {
//       title: t("features.jobs.title"),
//       description: t("features.jobs.description"),
//     },
//     {
//       title: t("features.store.title"),
//       description: t("features.store.description"),
//     },
//   ];

//   // Fonction pour fermer le menu après avoir cliqué sur un lien
//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <header
//       className={`shadow-md w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card transition-all duration-300 ${
//         scrolled ? "bg-opacity-95 backdrop-blur-sm" : "bg-opacity-15"
//       }`}
//     >
//       <Link href="/" className="font-bold text-lg flex items-center">
//         <Image
//           src="/logo-topaz-enhance-coupe.jpeg"
//           alt={t("logoAlt")}
//           width={36}
//           height={36}
//           className="rounded-lg"
//         />
//         <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//           {t("brandName")}
//         </span>
//       </Link>

//       {/* Mobile Menu */}
//       <div className="flex items-center lg:hidden z-50">
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild>
//             {/* <Button variant="ghost" size="icon" aria-label="Menu">
//               <Menu className="h-5 w-5" />
//             </Button> */}
//             <Menu
//               onClick={() => setIsOpen(!isOpen)}
//               className="cursor-pointer lg:hidden"
//             />
//           </SheetTrigger>

//           <SheetContent
//             side="right"
//             className="flex flex-col justify-between rounded-tl-2xl rounded-bl-2xl bg-card border-secondary w-[80%] max-w-xs"
//           >
//             <div>
//               <SheetHeader className="flex flex-row justify-between items-center mb-4 p-2">
//                 <SheetTitle className="flex items-center">
//                   <Link
//                     href="/"
//                     className="flex items-center"
//                     onClick={handleLinkClick}
//                   >
//                     <Image
//                       src="/logo-topaz-enhance-coupe.jpeg"
//                       alt={t("logoAlt")}
//                       width={30}
//                       height={30}
//                       className="rounded-lg"
//                     />
//                     <span className="text-transparent px-2 text-sm bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//                       {t("brandName")}
//                     </span>
//                   </Link>
//                 </SheetTitle>
//                 <SheetClose asChild>
//                   {/* <Button size="icon" variant="outline" aria-label="Close">
//                     <X className="h-4 w-4 " />
//                   </Button> */}
//                   {/* <Button
//                     size="sm"
//                     variant="destructive"
//                     className="border-2 p-1 h-8 w-8"
//                     aria-label="Close"
//                   >
//                     <X className="h-5 w-5" />
//                   </Button> */}
//                   <Button
//                     size="sm"
//                     variant="destructive"
//                     className="border-2 h-8 w-8  flex items-center text-orange-500 justify-center"
//                     aria-label="Close menu"
//                   >
//                     X
//                   </Button>
//                 </SheetClose>
//               </SheetHeader>

//               <Separator className="mb-4" />

//               <div className="flex flex-col gap-1 px-1">
//                 {/* Menu Services avec accordéon */}
//                 <Collapsible
//                   open={servicesOpen}
//                   onOpenChange={setServicesOpen}
//                   className="w-full"
//                 >
//                   <CollapsibleTrigger asChild>
//                     <Button
//                       variant="ghost"
//                       className="justify-between w-full px-3 py-2 text-base font-medium"
//                     >
//                       {t("servicesMenu")}
//                       {servicesOpen ? (
//                         <ChevronUp className="h-4 w-4 ml-2" />
//                       ) : (
//                         <ChevronDown className="h-4 w-4 ml-2" />
//                       )}
//                     </Button>
//                   </CollapsibleTrigger>
//                   <CollapsibleContent className="pl-4">
//                     {featureList.map(({ title, description }) => (
//                       <Link
//                         key={title}
//                         href="#services"
//                         onClick={handleLinkClick}
//                         className="block py-2"
//                       >
//                         <p className="font-medium text-sm text-foreground">
//                           {title}
//                         </p>
//                         <p className="text-xs text-muted-foreground line-clamp-2">
//                           {description}
//                         </p>
//                       </Link>
//                     ))}
//                   </CollapsibleContent>
//                 </Collapsible>

//                 {/* Autres liens du menu */}
//                 {routeList
//                   .filter((route) => route.href !== "#services")
//                   .map(({ href, label }) => (
//                     <Button
//                       key={href}
//                       onClick={handleLinkClick}
//                       asChild
//                       variant="ghost"
//                       className="justify-start text-base py-2"
//                     >
//                       <Link href={href}>{label}</Link>
//                     </Button>
//                   ))}
//               </div>
//             </div>

//             <SheetFooter className="flex-col sm:flex-col justify-start items-start mt-8">
//               <Separator className="mb-4" />
//               <div className="flex items-center justify-between w-full px-2">
//                 <ThemeToggle />
//                 <LanguageSwitcher />
//               </div>
//             </SheetFooter>
//           </SheetContent>
//         </Sheet>
//       </div>

//       {/* Desktop Menu */}
//       <NavigationMenu className="hidden lg:block mx-auto">
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="bg-card text-base">
//               {t("servicesMenu")}
//             </NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
//                 <Image
//                   src="/logo-topaz-enhance-coupe.jpeg"
//                   alt={t("logoAlt")}
//                   className="h-full w-full rounded-md object-contain"
//                   width={600}
//                   height={600}
//                 />
//                 <ul className="flex flex-col gap-2">
//                   {featureList.map(({ title, description }) => (
//                     <li
//                       key={title}
//                       className="rounded-md p-3 text-sm hover:bg-muted"
//                     >
//                       <Link href="#services">
//                         <p className="mb-1 font-semibold leading-none text-foreground">
//                           {title}
//                         </p>
//                         <p className="line-clamp-2 text-muted-foreground">
//                           {description}
//                         </p>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </NavigationMenuContent>
//           </NavigationMenuItem>

//           <NavigationMenuItem>
//             {routeListForDesktop.map(({ href, label }) => (
//               <NavigationMenuLink key={href} asChild>
//                 <Link href={href} className="text-base px-2">
//                   {label}
//                 </Link>
//               </NavigationMenuLink>
//             ))}
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>

//       <div className="hidden lg:flex items-center space-x-2">
//         <ThemeToggle />
//         <LanguageSwitcher />
//       </div>
//     </header>
//   );
// };

"use client";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet pour détecter le scroll et ajuster l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const routeList = [
    { href: "#services", label: t("routes.services") },
    { href: "#testimonials", label: t("routes.testimonials") },
    { href: "#team", label: t("routes.team") },
    { href: "#faq", label: t("routes.faq") },
    { href: "#contact", label: t("routes.contact") },
  ];

  const routeListForDesktop = [
    { href: "#testimonials", label: t("routes.testimonials") },
    { href: "#team", label: t("routes.team") },
    { href: "#faq", label: t("routes.faq") },
    { href: "#contact", label: t("routes.contact") },
  ];

  const featureList = [
    {
      title: t("features.realEstate.title"),
      description: t("features.realEstate.description"),
    },
    {
      title: t("features.businessTransfer.title"),
      description: t("features.businessTransfer.description"),
    },
    {
      title: t("features.jobs.title"),
      description: t("features.jobs.description"),
    },
    {
      title: t("features.store.title"),
      description: t("features.store.description"),
    },
  ];

  // Fonction pour fermer le menu après avoir cliqué sur un lien
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`shadow-md w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card transition-all duration-300 ${
        scrolled ? "bg-opacity-95 backdrop-blur-sm" : "bg-opacity-15"
      }`}
    >
      <Link href="/" className="font-bold text-lg flex items-center">
        <Image
          src="/logo-topaz-enhance-coupe.jpeg"
          alt={t("logoAlt")}
          width={36}
          height={36}
          className="rounded-lg"
        />
        <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
          {t("brandName")}
        </span>
      </Link>

      {/* Mobile Menu */}
      <div className="flex items-center lg:hidden z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            {/* <Button variant="ghost" size="icon" aria-label="Menu">
               <Menu className="h-5 w-5" />
             </Button> */}
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="flex flex-col justify-between rounded-tl-2xl rounded-bl-2xl bg-card border-secondary w-[80%] max-w-xs overflow-y-auto"
          >
            <div className="flex-grow overflow-y-auto">
              <div className="flex flex-row justify-between items-center mb-4 p-2">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={handleLinkClick}
                >
                  <Image
                    src="/logo-topaz-enhance-coupe.jpeg"
                    alt={t("logoAlt")}
                    width={30}
                    height={30}
                    className="rounded-lg"
                  />
                  <span className="text-transparent px-2 text-sm bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    {t("brandName")}
                  </span>
                </Link>

                <SheetClose asChild>
                  <Button
                    size="lg"
                    variant="destructive"
                    className="h-10 w-10 text-orange-500  flex items-center justify-center"
                    aria-label="Close menu"
                  >
                    X
                  </Button>
                </SheetClose>
              </div>

              <Separator className="mb-4" />
              <SheetHeader className="px-2 mb-2">
                <SheetTitle>{t("servicesMenu")}</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-1 px-1 pb-4">
                {/* Menu Services avec accordéon */}
                <Collapsible
                  open={servicesOpen}
                  onOpenChange={setServicesOpen}
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="justify-between w-full px-3 py-2 text-base font-medium"
                    >
                      {t("servicesMenu")}
                      {servicesOpen ? (
                        <ChevronUp className="h-4 w-4 ml-2" />
                      ) : (
                        <ChevronDown className="h-4 w-4 ml-2" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4">
                    {featureList.map(({ title, description }) => (
                      <Link
                        key={title}
                        href="#services"
                        onClick={handleLinkClick}
                        className="block py-2"
                      >
                        <p className="font-medium text-sm text-foreground">
                          {title}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {description}
                        </p>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Autres liens du menu */}
                {routeList
                  .filter((route) => route.href !== "#services")
                  .map(({ href, label }) => (
                    <Button
                      key={href}
                      onClick={handleLinkClick}
                      asChild
                      variant="ghost"
                      className="justify-start text-base py-2"
                    >
                      <Link href={href}>{label}</Link>
                    </Button>
                  ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start mt-4 pb-6">
              <Separator className="mb-4" />
              <div className="flex items-center justify-between w-full px-2">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              {t("servicesMenu")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="/logo-topaz-enhance-coupe.jpeg"
                  alt={t("logoAlt")}
                  className="h-full w-full rounded-md object-contain"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <Link href="#services">
                        <p className="mb-1 font-semibold leading-none text-foreground">
                          {title}
                        </p>
                        <p className="line-clamp-2 text-muted-foreground">
                          {description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeListForDesktop.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center space-x-2">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
