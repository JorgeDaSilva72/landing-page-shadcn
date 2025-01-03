"use client";
import { ChevronsUp, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
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
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#testimonials",
    label: "Témoignages",
  },
  {
    href: "#team",
    label: "Equipe",
  },
  {
    href: "#faq",
    label: "FAQ",
  },

  {
    href: "#contact",
    label: "Contact",
  },
];

const routeListForDesktop: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Témoignages",
  },
  {
    href: "#team",
    label: "Equipe",
  },
  {
    href: "#faq",
    label: "FAQ",
  },

  {
    href: "#contact",
    label: "Contact",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Annonces immobilières ",
    description: " Explorez une variété d'annonces immobilières en AFRIQUE.",
  },
  {
    title: "Cession et acquisition d'entreprises en Afrique",
    description:
      "L'Afrique Vous Attends : Simplifiez l'Acquisition d'Entreprises Locales.",
  },
  {
    title: "Votre carrière, notre mission : l'emploi.",
    description: "Découvrez l’Avenir de l’Emploi en Afrique. ",
  },
  // {
  //   title: "Annuaire professionnel",
  //   description: "Votre réseau, à portée de clic !",
  // },
  {
    title: "Boutique officielle",
    description: "Merci de supporter notre projet.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card ">
      <Link href="/" className="font-bold text-lg flex items-center">
        {/* <ChevronsUp className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}
        <Image
          src="/logo-topaz-enhance-coupe.jpeg"
          alt="Logo"
          width={36} // Largeur de l'image
          height={36} // Hauteur de l'image
          className="rounded-lg"
        />
        <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
          AFRIQUE AVENIR
        </span>
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden z-999">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center  ">
                    {/* <ChevronsUp className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}

                    <Image
                      src="/logo-topaz-enhance-coupe.jpeg"
                      alt="Logo"
                      width={36} // Largeur de l'image
                      height={36} // Hauteur de l'image
                      className="rounded-lg"
                    />

                    <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                      AFRIQUE AVENIR
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="/logo-topaz-enhance-coupe.jpeg"
                  alt="Logo"
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

      <div className="hidden lg:flex">
        <ToggleTheme />
      </div>
    </header>
  );
};
