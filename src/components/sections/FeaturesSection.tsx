import type { ReactNode } from "react";
import Section, { Eyebrow } from "@/components/ui/Section";
import FadeInUp from "@/components/animations/FadeInUp";
import { siteConfig } from "@/content/site-config";

type VisualType = "coach" | "plans" | "social" | "analytics";

/* App-interior palette. These panels are screens, so they keep the app's own
   indigo — the same licence the phone mockup gets. */
const ink = "#3D3D5C";
const muted = "#8A8A9E";
const accent = "#6C7EE8";
const tint = "#E6EAFE";

function ScreenFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-[400px] rounded-card border border-silver bg-[#F7F8FF] p-4 shadow-whisper">
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
      <span className="text-caption" style={{ color: muted }}>
        {label}
      </span>
      <span className="text-caption font-semibold" style={{ color: ink }}>
        {value}
      </span>
    </div>
  );
}

function CoachVisual() {
  return (
    <ScreenFrame>
      <div className="rounded-xl border-l-[3px] border-[#9B84E8] bg-[#F0EEFE] p-3">
        <p className="text-caption font-semibold text-[#7B5CB8]">WiseCoach</p>
        <p className="mt-1 text-ui font-semibold" style={{ color: ink }}>
          Push. Add 2.5kg to bench on Thursday.
        </p>
      </div>
      <p className="mt-4 text-caption" style={{ color: muted }}>
        Read from
      </p>
      <div className="mt-2 flex flex-col gap-1.5">
        <Row label="Bench volume, 4 weeks" value="+12%" />
        <Row label="Sleep logged, 7-day avg" value="7h 10m" />
        <Row label="Sets completed as prescribed" value="94%" />
        <Row label="Days left in block" value="9" />
      </div>
    </ScreenFrame>
  );
}

function PlansVisual() {
  const days = [
    { d: "Mon", s: "Push A", state: "Done" },
    { d: "Tue", s: "Zone 2 · 25 min", state: "Done" },
    { d: "Wed", s: "Pull A", state: "Missed" },
    { d: "Thu", s: "Pull A · +2 sets", state: "Moved here" },
    { d: "Sat", s: "Legs B", state: "Planned" },
  ];

  return (
    <ScreenFrame>
      <div className="flex items-center justify-between gap-2">
        <p className="text-ui font-semibold" style={{ color: ink }}>
          Week 6
        </p>
        <span
          className="rounded-full px-2.5 py-1 text-caption font-semibold"
          style={{ backgroundColor: tint, color: accent }}
        >
          Volume rebalanced
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        {days.map((day) => (
          <div key={day.d} className="flex items-center gap-3 rounded-lg bg-white px-3 py-2">
            <span className="w-8 text-caption font-semibold" style={{ color: muted }}>
              {day.d}
            </span>
            <span
              className="flex-1 text-caption"
              style={{
                color: day.state === "Missed" ? muted : ink,
                textDecoration: day.state === "Missed" ? "line-through" : "none",
              }}
            >
              {day.s}
            </span>
            <span className="shrink-0 text-caption font-medium" style={{ color: muted }}>
              {day.state}
            </span>
          </div>
        ))}
      </div>
    </ScreenFrame>
  );
}

function SocialVisual() {
  const squad = [
    { rank: "1", name: "Priya", sessions: 5, streak: 7 },
    { rank: "2", name: "You", sessions: 4, streak: 7 },
    { rank: "3", name: "Marcus", sessions: 4, streak: 4 },
    { rank: "4", name: "Dan", sessions: 3, streak: 2 },
  ];

  return (
    <ScreenFrame>
      <div className="flex items-center justify-between gap-2">
        <p className="text-ui font-semibold" style={{ color: ink }}>
          Squad · Ironworks
        </p>
        <span className="text-caption" style={{ color: muted }}>
          6 members · week 6
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        {squad.map((m) => (
          <div key={m.name} className="flex items-center gap-3 rounded-lg bg-white px-3 py-2">
            <span className="w-3 text-caption font-semibold" style={{ color: muted }}>
              {m.rank}
            </span>
            <span
              className="flex-1 text-caption"
              style={{ color: ink, fontWeight: m.name === "You" ? 700 : 400 }}
            >
              {m.name}
            </span>
            <span className="text-caption" style={{ color: muted }}>
              {m.sessions}
            </span>
            <span className="flex gap-0.5">
              {Array.from({ length: 7 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: i < m.streak ? accent : "#DDDDE8" }}
                />
              ))}
            </span>
          </div>
        ))}
      </div>
    </ScreenFrame>
  );
}

function AnalyticsVisual() {
  const weeks = [42, 55, 48, 62, 58, 71, 66, 80, 74, 88, 82, 100];

  return (
    <ScreenFrame>
      <div className="flex items-center justify-between gap-2">
        <p className="text-ui font-semibold" style={{ color: ink }}>
          Volume per week
        </p>
        <span className="text-caption" style={{ color: muted }}>
          12-week block
        </span>
      </div>
      <div className="mt-4 flex h-24 items-end gap-1.5">
        {weeks.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md"
            style={{
              height: `${h}%`,
              backgroundColor: i === weeks.length - 1 ? accent : tint,
            }}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-1.5">
        <Row label="Best session" value="1,240kg" />
        <Row label="Sessions tracked" value="47" />
      </div>
    </ScreenFrame>
  );
}

function FeatureVisual({ type }: { type: VisualType }) {
  switch (type) {
    case "coach":
      return <CoachVisual />;
    case "plans":
      return <PlansVisual />;
    case "social":
      return <SocialVisual />;
    case "analytics":
      return <AnalyticsVisual />;
  }
}

export default function FeaturesSection() {
  const { features, featuresIntro } = siteConfig;

  return (
    <Section id="features" surface="light">
      <FadeInUp className="mx-auto max-w-3xl text-center">
        <Eyebrow>{featuresIntro.eyebrow}</Eyebrow>
        <h2 className="mt-3 text-heading font-bold text-ink">{featuresIntro.heading}</h2>
      </FadeInUp>

      <div className="mt-16 flex flex-col gap-16 md:gap-20">
        {features.map((feature, i) => (
          <FadeInUp key={feature.eyebrow}>
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <Eyebrow>{feature.eyebrow}</Eyebrow>
                <h3 className="mt-3 text-heading-sm font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lede font-medium text-ink">{feature.hook}</p>
                <p className="mt-3 max-w-[56ch] text-lede text-carbon">
                  {feature.explanation}
                </p>
                <p className="mt-5 border-t border-silver pt-4 text-lede font-medium text-ink">
                  {feature.outcome}
                </p>
              </div>

              <div
                className={`flex justify-center ${
                  i % 2 === 1 ? "md:order-1 md:justify-start" : "md:justify-end"
                }`}
              >
                <FeatureVisual type={feature.visualType} />
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>
    </Section>
  );
}
