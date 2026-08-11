import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import MechanismSection from "@/components/sections/MechanismSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PersonasSection from "@/components/sections/PersonasSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import StatsSection from "@/components/sections/StatsSection";
import OfferSection from "@/components/sections/OfferSection";
import BuiltInPublicSection from "@/components/sections/BuiltInPublicSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      {/* White departure-board surface: what it is, who it's for, what it does */}
      <HeroSection />
      <ProblemSection />
      <MechanismSection />
      <FeaturesSection />
      <PersonasSection />

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
