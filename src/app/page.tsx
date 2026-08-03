import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import MechanismSection from "@/components/sections/MechanismSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import StatsSection from "@/components/sections/StatsSection";
import OfferSection from "@/components/sections/OfferSection";
import BuiltInPublicSection from "@/components/sections/BuiltInPublicSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      {/* White departure-board surface */}
      <HeroSection />
      <ProblemSection />
      <MechanismSection />
      <FeaturesSection />

      {/* Drops to the dark control room and stays there through the footer */}
      <ComparisonSection />
      <StatsSection />
      <OfferSection />
      <BuiltInPublicSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
