"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "Crown",
    name: "World Bank",
  },
  {
    icon: "Vegan",
    name: "FMI",
  },
  {
    icon: "Ghost",
    name: "UE",
  },
  {
    icon: "Puzzle",
    name: "Google ",
  },
  {
    icon: "Squirrel",
    name: "Microsoft ",
  },
  {
    icon: "Cookie",
    name: "IBM ",
  },
  {
    icon: "Drama",
    name: "Coca-Cola Africa Foundation",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className=" mb-6 text-3xl md:text-4xl text-primary text-center  tracking-wider">
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
          {sponsors.map(({ icon, name }) => (
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
          ))}
        </Marquee>
      </div>
    </section>
  );
};