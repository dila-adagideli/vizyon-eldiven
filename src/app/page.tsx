import { Contact } from "@/components/sections/Contact";
import { DealershipCallout } from "@/components/sections/DealershipCallout";
import { Hero } from "@/components/sections/Hero";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Standards } from "@/components/sections/Standards";
import { UseCases } from "@/components/sections/UseCases";
import { VisionMission } from "@/components/sections/VisionMission";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductIntro />
      <ProductShowcase />
      <UseCases />
      <Standards />
      <VisionMission />
      <DealershipCallout />
      <Contact />
    </>
  );
}
