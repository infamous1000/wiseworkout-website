"use client";

import Link from "next/link";
import FadeInUp from "@/components/animations/FadeInUp";
import Section, { Eyebrow } from "@/components/ui/Section";
import { siteConfig } from "@/content/site-config";

/* This is the academic page. Factual register, no marketing voice, no CTA. */

const RESEARCH_FINDINGS = [
  "Users abandon fitness apps because the app records the session but does not interpret it.",
  "Logging is abandoned first when it interrupts the session — entry speed matters more than field completeness.",
  "Adherence drops sharply around week three, when novelty ends and no external accountability exists.",
];

const OBJECTIVES = [
  {
    number: "01",
    title: "Close the gap between logging a session and deciding the next one",
    body: "Produce a single actionable instruction after each completed session, derived from session history, volume trend, fatigue signal, available equipment and remaining block length.",
  },
  {
    number: "02",
    title: "Reduce logging friction to the point of in-session use",
    body: "Set entry must be completable between working sets without typing, with the previous week's figures visible on the same screen.",
  },
  {
    number: "03",
    title: "Sustain adherence beyond the third week",
    body: "Provide lightweight social accountability through small closed groups, streaks and experience points, without a public feed or a comment system.",
  },
  {
    number: "04",
    title: "Deliver an assessable, documented artefact",
    body: "Maintain a public record of meeting minutes and individual reflective diaries throughout the project period, updated weekly.",
  },
];

const SCOPE = {
  included: [
    "Gym and running plan generation",
    "In-session workout logging",
    "Post-session coaching output (WiseCoach)",
    "Progress analytics: volume, pace, heart rate, calories",
    "Experience points, streaks and closed squads",
    "Wearable data import",
    "Public project record: minutes and reflective diaries",
  ],
  excluded: [
    "Full nutrition and macronutrient tracking",
    "Injury diagnosis or physiotherapy guidance",
    "Live human coaching or personal training",
    "Payments, subscriptions and billing",
    "Standalone watchOS or Wear OS applications",
  ],
};

const METHODOLOGY = [
  {
    title: "Weekly iterations",
    body: "Work is planned and reviewed on a weekly cycle aligned to the academic calendar rather than a fixed-length sprint.",
  },
  {
    title: "Documented meetings",
    body: "Each meeting is minuted with date, attendees, agenda, key decisions and action items, then published to the Updates page.",
  },
  {
    title: "Individual reflection",
    body: "Every team member submits a weekly reflective diary recording contribution, obstacles and revised approach.",
  },
  {
    title: "Prototype before build",
    body: "Screens are designed and reviewed in Figma before implementation, so interface decisions are settled outside code.",
  },
  {
    title: "Supervisor checkpoints",
    body: "Progress is reviewed against the project plan at the checkpoints set by the CSIT321 assessment schedule.",
  },
];

const TECH_STACK = [
  { layer: "Mobile application", choice: "Flutter", note: "Single codebase for iOS and Android" },
  { layer: "Application backend", choice: "Firebase, Cloud Firestore", note: "Managed auth, document store and cloud functions" },
  { layer: "Project website", choice: "Next.js (App Router), TypeScript", note: "Server-rendered routes with typed components" },
  { layer: "Website styling", choice: "Tailwind CSS, Framer Motion", note: "Token-driven styling and scroll reveals" },
  { layer: "Website data", choice: "Supabase (PostgreSQL)", note: "Stores minutes, diaries and waitlist records" },
  { layer: "Design", choice: "Figma", note: "Wireframes and high-fidelity prototypes" },
  { layer: "Hosting", choice: "Vercel", note: "Continuous deployment from the project repository" },
];

export default function AboutPageClient() {
  const { academic } = siteConfig;

  return (
    <>
      <Section surface="light" className="pt-14">
        <FadeInUp className="max-w-3xl">
          <p className="text-meta text-steel">
            {academic.group} · {academic.course} · {academic.school} · {academic.year}
          </p>
          <h1 className="mt-4 text-display font-bold text-ink">About the project</h1>
          <p className="mt-5 max-w-[62ch] text-lede text-carbon">
            WiseWorkout is a Final Year Project undertaken for CSIT321 at SIM–University
            of Wollongong. This page records the problem the project addresses, its
            objectives and scope, the development methodology, and the technologies used.
          </p>
        </FadeInUp>
      </Section>

      <Section surface="linen">
        <FadeInUp className="max-w-3xl">
          <Eyebrow>Problem statement</Eyebrow>
          <h2 className="mt-3 text-heading font-bold text-ink">
            Fitness applications record training well and interpret it poorly.
          </h2>
          <p className="mt-5 max-w-[68ch] text-body text-carbon">
            Existing applications capture session data accurately, but leave the
            interpretation of that data to the user. The user is presented with charts
            and totals and must independently decide what the next session should
            contain. In practice this decision is outsourced to video platforms,
            written programmes, general-purpose chat assistants, or nothing at all —
            while the logging application continues to store figures it does not act on.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.08}>
          <div className="mt-10 border-t border-silver">
            {RESEARCH_FINDINGS.map((finding, i) => (
              <div
                key={finding}
                className="grid gap-2 border-b border-silver py-5 md:grid-cols-[120px_1fr] md:gap-8"
              >
                <p className="text-meta text-steel">Finding {i + 1}</p>
                <p className="max-w-[68ch] text-body text-carbon">{finding}</p>
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      <Section surface="light">
        <FadeInUp className="max-w-3xl">
          <Eyebrow>Objectives</Eyebrow>
          <h2 className="mt-3 text-heading font-bold text-ink">Project objectives</h2>
        </FadeInUp>

        <div className="mt-10 border-t border-silver">
          {OBJECTIVES.map((objective, i) => (
            <FadeInUp key={objective.number} delay={i * 0.05}>
              <div className="grid gap-2 border-b border-silver py-7 md:grid-cols-[80px_1fr] md:gap-8">
                <p className="text-meta text-steel">{objective.number}</p>
                <div>
                  <h3 className="text-heading-sm font-semibold text-ink">
                    {objective.title}
                  </h3>
                  <p className="mt-2 max-w-[68ch] text-body text-carbon">
                    {objective.body}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </Section>

      <Section surface="linen">
        <FadeInUp className="max-w-3xl">
          <Eyebrow>Scope</Eyebrow>
          <h2 className="mt-3 text-heading font-bold text-ink">
            What the project covers, and what it does not
          </h2>
        </FadeInUp>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
          <FadeInUp>
            <h3 className="border-b border-silver pb-3 text-heading-sm font-semibold text-ink">
              In scope
            </h3>
            <ul className="mt-1">
              {SCOPE.included.map((item) => (
                <li
                  key={item}
                  className="border-b border-silver py-3 text-body text-carbon"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeInUp>

          <FadeInUp delay={0.06}>
            <h3 className="border-b border-silver pb-3 text-heading-sm font-semibold text-ink">
              Out of scope
            </h3>
            <ul className="mt-1">
              {SCOPE.excluded.map((item) => (
                <li key={item} className="border-b border-silver py-3 text-body text-steel">
                  {item}
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </Section>

      <Section surface="light">
        <FadeInUp className="max-w-3xl">
          <Eyebrow>Methodology</Eyebrow>
          <h2 className="mt-3 text-heading font-bold text-ink">
            Agile development, on an academic cadence
          </h2>
          <p className="mt-5 max-w-[68ch] text-body text-carbon">
            The project follows an iterative Agile approach adapted to the constraints
            of a two-semester Final Year Project: short planning cycles, working
            software at each checkpoint, and written records produced as the work
            happens rather than reconstructed afterwards.
          </p>
        </FadeInUp>

        <div className="mt-10 border-t border-silver">
          {METHODOLOGY.map((item, i) => (
            <FadeInUp key={item.title} delay={i * 0.04}>
              <div className="grid gap-2 border-b border-silver py-6 md:grid-cols-[240px_1fr] md:gap-8">
                <h3 className="text-heading-sm font-semibold text-ink">{item.title}</h3>
                <p className="max-w-[68ch] text-body text-carbon">{item.body}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </Section>

      <Section surface="dark">
        <FadeInUp className="max-w-3xl">
          <Eyebrow tone="dark">Technology</Eyebrow>
          <h2 className="mt-3 text-heading font-bold text-white">Tech stack</h2>
          <p className="mt-5 max-w-[68ch] text-body text-silver">
            The mobile application and this project website are separate systems with
            separate stacks. Both are listed below.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.06}>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 pr-6 text-meta font-normal text-fog">Layer</th>
                  <th className="pb-3 pr-6 text-meta font-normal text-fog">Technology</th>
                  <th className="pb-3 text-meta font-normal text-fog">Role in the project</th>
                </tr>
              </thead>
              <tbody>
                {TECH_STACK.map((row) => (
                  <tr key={row.layer} className="border-b border-white/10">
                    <td className="py-4 pr-6 align-top text-body text-silver">
                      {row.layer}
                    </td>
                    <td className="py-4 pr-6 align-top text-body font-medium text-white">
                      {row.choice}
                    </td>
                    <td className="py-4 align-top text-body text-silver">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInUp>
      </Section>

      <Section surface="dark" className="pt-0">
        <FadeInUp className="max-w-3xl">
          <h2 className="text-heading font-bold text-white">Project record</h2>
          <p className="mt-4 max-w-[68ch] text-body text-silver">
            Meeting minutes and reflective diaries are published weekly. Team members
            and their responsibilities are listed separately.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/updates"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-ui font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.06]"
            >
              Meeting minutes and diaries →
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-ui font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.06]"
            >
              Team and responsibilities →
            </Link>
          </div>
        </FadeInUp>
      </Section>
    </>
  );
}
