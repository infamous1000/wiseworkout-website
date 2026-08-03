"use client";

import Section from "@/components/ui/Section";
import FadeInUp from "@/components/animations/FadeInUp";
import { Button } from "@/components/ui/Button";
import { useWaitlistModal } from "@/components/waitlist/WaitlistModalProvider";
import { siteConfig } from "@/content/site-config";

export default function FinalCtaSection() {
  const { openModal } = useWaitlistModal();
  const { finalCta, cta } = siteConfig;

  return (
    <Section surface="dark" className="py-24 md:py-32">
      <FadeInUp className="mx-auto max-w-2xl text-center">
        <h2 className="text-display font-bold text-white">{finalCta.heading}</h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-lede text-silver">{finalCta.lede}</p>

        <div className="mt-8 flex justify-center">
          <Button variant="amber" onClick={openModal}>
            {cta}
          </Button>
        </div>

        <p className="mt-4 text-meta text-fog">{finalCta.riskReversal}</p>
      </FadeInUp>
    </Section>
  );
}
