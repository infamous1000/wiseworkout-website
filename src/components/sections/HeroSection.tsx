"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { useWaitlistModal } from "@/components/waitlist/WaitlistModalProvider";
import { Button, ButtonLink } from "@/components/ui/Button";
import NotificationCard from "@/components/ui/NotificationCard";

/**
 * The phone interior keeps its own indigo palette on purpose — a screen inside
 * a frame is allowed a different palette from the page it sits on. The frame
 * carries the one shadow on the site heavier than 0.04 opacity.
 */
function PhoneMockup() {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const offset = circ * 0.3;

  return (
    <div
      className="relative w-[240px] rounded-[2.4rem] bg-ink p-[3px]"
      style={{
        boxShadow:
          "0 40px 80px -24px rgba(0,0,0,0.28), 0 12px 24px -12px rgba(0,0,0,0.16)",
      }}
    >
      <div className="absolute left-1/2 top-3 z-10 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-ink" />

      <div className="overflow-hidden rounded-[2.2rem] bg-[#F7F8FF]">
        <div className="flex items-center justify-between px-5 pb-1 pt-9">
          <span className="text-[9px] font-semibold text-[#3D3D5C]">9:41</span>
          <div className="flex items-center gap-1">
            <div className="h-[6px] w-[10px] rounded-sm bg-[#3D3D5C] opacity-60" />
            <div className="h-[6px] w-[6px] rounded-sm bg-[#3D3D5C] opacity-60" />
            <div className="h-[6px] w-[14px] rounded-sm border border-[#3D3D5C] opacity-60">
              <div className="h-full w-3/4 rounded-sm bg-[#3D3D5C]" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-2">
          <div>
            <p className="text-[9px] text-[#8A8A9E]">Good morning</p>
            <p className="text-[12px] font-bold text-[#3D3D5C]">Marcus</p>
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6C7EE8]">
            <span className="text-[9px] font-bold text-white">M</span>
          </div>
        </div>

        {/* WiseCoach banner — the decision, matching the card orbiting outside */}
        <div className="mx-3 mb-2 rounded-xl border-l-[3px] border-[#9B84E8] bg-[#F0EEFE] p-2.5">
          <p className="mb-0.5 text-[8px] font-semibold text-[#7B5CB8]">WiseCoach</p>
          <p className="text-[8px] leading-relaxed text-[#5B3F9E]">
            Bench volume up 12% this week. Deload Thursday, not today.
          </p>
        </div>

        <div className="mx-3 mb-2 rounded-xl bg-white p-2.5">
          <p className="mb-1.5 text-[9px] font-semibold text-[#3D3D5C]">
            Today&apos;s energy
          </p>
          <div className="flex items-center gap-3">
            <svg width="58" height="58" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r={r} fill="none" stroke="#E6EAFE" strokeWidth="6" />
              <circle
                cx="30"
                cy="30"
                r={r}
                fill="none"
                stroke="#6C7EE8"
                strokeWidth="6"
                strokeDasharray={circ}
                strokeDashoffset={offset}
                transform="rotate(-90 30 30)"
                strokeLinecap="round"
              />
              <text x="30" y="27" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#3D3D5C">
                420
              </text>
              <text x="30" y="37" textAnchor="middle" fontSize="6" fill="#8A8A9E">
                kcal
              </text>
            </svg>
            <div className="flex flex-col gap-1">
              {[
                { c: "#6C7EE8", t: "Gym 280 kcal" },
                { c: "#4BB8CC", t: "Cardio 140 kcal" },
                { c: "#D8D8E4", t: "Left 180 kcal" },
              ].map((row) => (
                <div key={row.t} className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: row.c }} />
                  <span className="text-[7px] text-[#8A8A9E]">{row.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-3 mb-2 rounded-xl bg-white p-2.5">
          <div className="mb-1.5 flex items-center justify-between">
            <p className="text-[9px] font-semibold text-[#3D3D5C]">Today · Push A</p>
            <span className="text-[8px] text-[#6C7EE8]">›</span>
          </div>
          {[
            { n: "1", name: "Bench Press", sets: "4×8" },
            { n: "2", name: "Overhead Press", sets: "3×10" },
            { n: "3", name: "Tricep Pushdown", sets: "3×12" },
          ].map((ex) => (
            <div
              key={ex.n}
              className="flex items-center gap-2 border-b border-[#F2F2F7] py-1 last:border-0"
            >
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E6EAFE] text-[7px] font-bold text-[#6C7EE8]">
                {ex.n}
              </span>
              <span className="flex-1 text-[8px] text-[#3D3D5C]">{ex.name}</span>
              <span className="text-[7px] text-[#8A8A9E]">{ex.sets}</span>
            </div>
          ))}
          <div className="mt-2 w-full rounded-[10px] bg-[#6C7EE8] py-1.5 text-center text-[8px] font-semibold text-white">
            Start workout
          </div>
        </div>

        <div className="mx-3 mb-4 flex items-center gap-2 rounded-xl bg-white p-2.5">
          <span className="text-[8px] font-semibold text-[#3D3D5C]">7-day streak</span>
          <div className="ml-auto flex gap-0.5">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i < 6 ? "bg-[#4BB8CC]" : "border border-[#C8C8D8] bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Absolute placements for the four cards at lg+, inside an 880px orbit box so
   they stay near the device instead of drifting to the page edges. Below lg
   they stack into a plain grid. */
const placements = [
  "left-0 top-10 w-[236px]",
  "right-0 top-2 w-[240px]",
  "left-6 bottom-12 w-[216px]",
  "right-2 bottom-6 w-[244px]",
];

export default function HeroSection() {
  const { openModal } = useWaitlistModal();
  const reduce = useReducedMotion();
  const { hero, notifications, cta } = siteConfig;

  return (
    <section className="bg-canvas px-6 pb-20 pt-10 md:pb-24 md:pt-14">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-meta text-steel">{hero.eyebrow}</p>

          <h1 className="mx-auto mt-5 max-w-[24ch] text-display font-bold text-ink">
            {hero.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-[58ch] text-lede text-carbon">{hero.subhead}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button variant="amber" onClick={openModal}>
              {cta}
            </Button>
            <ButtonLink variant="ghost" href={hero.secondaryHref}>
              {hero.secondaryCta}
            </ButtonLink>
          </div>
        </div>

        {/* Signature: four cards orbiting the device. Spent here and nowhere else. */}
        <div className="relative mx-auto mt-14 flex max-w-[880px] justify-center lg:mt-16 lg:min-h-[540px] lg:items-center">
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <PhoneMockup />
          </motion.div>

          {notifications.map((note, i) => (
            <motion.div
              key={note.title}
              className={`absolute hidden lg:block ${placements[i]}`}
              style={{ rotate: `${note.rotate}deg` }}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <NotificationCard title={note.title} meta={note.meta} accent={note.accent} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
          {notifications.map((note) => (
            <NotificationCard
              key={note.title}
              title={note.title}
              meta={note.meta}
              accent={note.accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
