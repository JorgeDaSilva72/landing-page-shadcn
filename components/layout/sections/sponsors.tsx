"use client";

import AdBanner from "@/components/AdBanner";
import { Icon } from "@/components/ui/icon";
import { ads } from "@/lib/data";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
import TopWave from "./topWave";
import BottomWave from "./bottomWave";
import Image from "next/image";
// interface sponsorsProps {
//   icon: string;
//   name: string;
// }

// const sponsors: sponsorsProps[] = [
//   {
//     icon: "Crown",
//     name: "LWS",
//   },
//   {
//     icon: "Vegan",
//     name: "QONTO",
//   },
//   {
//     icon: "Ghost",
//     name: "REVOLUT",
//   },
//   {
//     icon: "Puzzle",
//     name: "Votre publicité ici ",
//   },
//   {
//     icon: "Squirrel",
//     name: "Goopy ",
//   },
// ];

interface SponsorsProps {
  image: string; // URL de l'image
  name: string;
}

const sponsors: SponsorsProps[] = [
  {
    image: "/lws.png", // Chemin de l'image pour LWS
    name: "LWS",
  },
  {
    image: "/qonto.png", // Chemin de l'image pour QONTO
    name: "QONTO",
  },
  {
    image: "/pub.png", // Placeholder pour une publicité personnalisée
    name: "Votre publicité ici",
  },
  {
    image: "/revolut.png", // Chemin de l'image pour REVOLUT
    name: "REVOLUT",
  },

  {
    image: "/goopy_368x63.jpg", // Exemple d'une autre image
    name: "GOOPY",
  },
  {
    image: "/pub.png", // Placeholder pour une publicité personnalisée
    name: "Votre publicité ici",
  },
];
export const SponsorsSection = () => {
  return (
    <section
      id="sponsors"
      className="relative mt-1 max-w-[75%] mx-auto  py-24 sm:py-28 pb-40"
    >
      <TopWave />
      <h2 className=" mt-2 mb-6 text-3xl md:text-4xl text-primary text-center  tracking-wider ">
        NOS SPONSORS
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem] [--duration:8s]"
          fade={true}
          direction="left"
          reverse={false}
          pauseOnHover={true}
          innerClassName="gap-[3rem]"
        >
          {/* {sponsors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="#D14F0C"
                className="mr-2"
              />
              {name}
            </div>
          ))} */}
          {sponsors.map(({ image, name }) => (
            <div
              key={name}
              className="flex flex-col items-center text-xl md:text-2xl font-medium"
            >
              <div className="w-64 h-64 relative">
                <Image src={image} alt={name} fill className="object-contain" />
              </div>
              {/* <span>{name}</span> */}
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex flex-wrap sm:flex-col md:flex-row gap-4 justify-center">
        {ads.map((ad, index) => (
          <AdBanner
            key={index}
            imageUrl={ad.imageUrl}
            linkUrl={ad.linkUrl}
            altText={ad.altText}
          />
        ))}
      </div>
      <BottomWave />
    </section>
  );
};
