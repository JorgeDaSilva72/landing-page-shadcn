import { Separator } from "@/components/ui/separator";
import { ChevronsUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-8 sm:py-16">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              {/* <ChevronsUpIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" /> */}
              <Image
                src="/logo-topaz-enhance-coupe.jpeg"
                alt="Icone"
                width={36} // Largeur de l'image
                height={36} // Hauteur de l'image
                className="rounded-lg"
              />

              <h2 className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                AFRIQUE AVENIR
              </h2>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                LinkedIn
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitter
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Plateformes</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                iOS
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Android
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Web
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Aide</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Nous contacter
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">
              <span className="block lg:hidden">Réseaux</span>
              <span className="hidden lg:block">Réseaux sociaux</span>
            </h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                YouTube
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Facebook
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
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
