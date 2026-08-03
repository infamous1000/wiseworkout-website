import Section, { Eyebrow } from "@/components/ui/Section";
import FadeInUp from "@/components/animations/FadeInUp";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { siteConfig } from "@/content/site-config";

/**
 * Numbering survives here because it is a real sequence. The dashed connector
 * does not, and neither do the icon tiles — the numerals carry the order.
 */
export default function MechanismSection() {
  const { mechanism } = siteConfig;

  return (
    <Section id="how-it-works" surface="linen">
      <FadeInUp className="mx-auto max-w-3xl text-center">
        <Eyebrow>{mechanism.eyebrow}</Eyebrow>
        <h2 className="mt-3 text-heading font-bold text-ink">{mechanism.heading}</h2>
        <p className="mx-auto mt-4 max-w-[58ch] text-lede text-carbon">{mechanism.lede}</p>
      </FadeInUp>

      <StaggerChildren className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {mechanism.steps.map((step) => (
          <StaggerItem key={step.number}>
            <span className="inline-flex rounded-full border border-silver px-3 py-1 text-meta font-semibold text-steel">
              {step.number}
            </span>
            <h3 className="mt-5 text-heading-sm font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-lede text-carbon">{step.body}</p>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
