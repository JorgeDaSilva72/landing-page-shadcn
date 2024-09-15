import { HeroSection } from "@/components/layout/sections/hero";
import { FooterSection } from "@/components/layout/sections/footer";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { FAQSection } from "@/components/layout/sections/faq";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { ServicesSection } from "@/components/layout/sections/services";
import Contact from "@/components/layout/sections/contact";
import { TeamSection } from "@/components/layout/sections/team";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <FAQSection />
      <Contact />
      <FooterSection />
    </>
  );
}
