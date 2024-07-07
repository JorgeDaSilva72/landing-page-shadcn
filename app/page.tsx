import { HeroSection } from "@/components/layout/sections/hero";
import { FooterSection } from "@/components/layout/sections/footer";
import { SponsorsSection } from "@/components/layout/sections/sponsors";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <FooterSection />
    </>
  );
}
