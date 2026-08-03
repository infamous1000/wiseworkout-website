export const siteConfig = {
  name: "WiseWorkout",
  tagline: "Know your next session before you leave the gym",
  description:
    "WiseWorkout reads the session you just finished — load, fatigue, and what you lifted last week — and gives you one decision for the next one. A Final Year Project by FYP26S215 at SIM–University of Wollongong.",

  academic: {
    group: "FYP26S215",
    course: "CSIT321",
    school: "SIM–University of Wollongong",
    year: "2025/26",
  },

  navLinks: [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Team", href: "/team" },
    { label: "Updates", href: "/updates" },
    { label: "About", href: "/about" },
  ],

  /* The single conversion verb. Same word on every button and in the toast. */
  cta: "Join the beta",

  announcement: {
    text: "Beta opens March 2026",
    linkLabel: "Join the list",
    href: "/#join",
  },

  hero: {
    eyebrow: "For lifters six months in who've stopped seeing the numbers move",
    headline: "Know your next session before you leave the gym.",
    subhead:
      "WiseCoach reads the set you just finished — load, fatigue, and what you lifted last week — and gives you one decision. Not a chart. About 90 seconds after your last rep.",
    secondaryCta: "See how it works",
    secondaryHref: "/#how-it-works",
  },

  /* Signature element. Every value here also appears on the phone screen these
     cards orbit, or in `stats` below — the cards and the screen are one account. */
  notifications: [
    {
      title: "Bench volume up 12% this week",
      meta: "Push A · week 6 of your block",
      accent: "blue" as const,
      rotate: -3,
    },
    {
      title: "Recovery is low",
      meta: "Swapped legs for 25 min zone 2",
      accent: "red" as const,
      rotate: 2,
    },
    {
      title: "7-day streak",
      meta: "Squad rank #2 of 6",
      accent: "amber" as const,
      rotate: 3,
    },
    {
      title: "Push A finished in 47 min",
      meta: "Fastest yet — 1,240kg moved",
      accent: "none" as const,
      rotate: -2,
    },
  ],

  problem: {
    heading: "You logged 47 sessions. Name one decision they changed.",
    lede: "Training stalls in three specific places. None of them is a lack of data.",
    items: [
      {
        label: "The plateau",
        title: "Your log grew. Your lifts didn't.",
        body: "Six months of sessions and the bar weight is where it was in March. The app recorded every rep and never once told you to change anything.",
      },
      {
        label: "The scatter",
        title: "Your programme lives in four places.",
        body: "A note for the block, a video for the cue, a spreadsheet for the numbers, a chat thread for the deload argument. Nothing reconciles.",
      },
      {
        label: "The drop-off",
        title: "Week three is where it ends.",
        body: "Not because discipline failed. Because nothing was watching, so skipping a session cost you nothing.",
      },
    ],
  },

  mechanism: {
    name: "the session-to-decision loop",
    eyebrow: "The session-to-decision loop",
    heading: "Three steps. Then it runs on its own.",
    lede: "Set it up once. After that the loop closes itself at the end of every session.",
    steps: [
      {
        number: "01",
        title: "Tell it what you have",
        body: "Goal, injuries, equipment in your gym, and how many days you can actually train. Four screens, under two minutes.",
      },
      {
        number: "02",
        title: "Train and log",
        body: "Tap sets as you go. Rest timer and last week's numbers sit on the same screen, so nothing needs typing between sets.",
      },
      {
        number: "03",
        title: "Read the decision",
        body: "About 90 seconds after your last rep, WiseCoach gives you one instruction for next session — push, hold, or back off — and the sentence explaining why.",
      },
    ],
  },

  featuresIntro: {
    eyebrow: "Features",
    heading: "Four things it does. Each one ends in a decision.",
  },

  features: [
    {
      eyebrow: "WiseCoach",
      title: "One instruction. Not twelve charts.",
      hook: "After every session WiseCoach returns a single line: push, hold, or back off.",
      explanation:
        "It reads the load you just moved against your last four weeks, the fatigue signal from your logged sleep and completion rate, and the days left in your block. The reasoning sits underneath in one sentence, so you can disagree with it.",
      outcome: "You leave the gym knowing Thursday's session. You don't build it Thursday morning.",
      visualType: "coach" as const,
    },
    {
      eyebrow: "Adaptive plans",
      title: "The block rewrites itself when you miss a week.",
      hook: "Miss Wednesday and the plan doesn't shift a day. It redistributes the volume.",
      explanation:
        "Plans are built around your equipment, your available days, and the lifts you're actually trying to move. When work or illness takes a week, the remaining sessions absorb it instead of the block collapsing.",
      outcome: "Nothing to rebuild. The next screen already accounts for the week you lost.",
      visualType: "plans" as const,
    },
    {
      eyebrow: "Squads",
      title: "Five people can see whether you showed up.",
      hook: "A squad is up to six people and one shared board. Sessions logged, streaks live, nothing else.",
      explanation:
        "No feed, no photos, no comment section. The only thing visible is whether you trained. XP and streaks exist because week three is where people quit, and quitting quietly is easier than quitting in front of five people.",
      outcome: "Consistency stops depending on how you feel on a Tuesday.",
      visualType: "social" as const,
    },
    {
      eyebrow: "Progress analytics",
      title: "Numbers that end in a decision.",
      hook: "Volume, pace, heart rate and calories, tracked per lift and per block.",
      explanation:
        "Every chart is wired back into the loop. A downward trend on your main lift isn't a red line you notice in March — it's the reason next week's session changed in January.",
      outcome: "You can point at what the last twelve weeks bought you.",
      visualType: "analytics" as const,
    },
  ],

  comparison: {
    heading: "Hevy logs better. Strong is faster. Here's what none of them do.",
    lede: "The honest version: these are good apps and we use them. The gap has never been recording the session. It's what happens after it.",
    rows: [
      {
        name: "Hevy",
        credit:
          "The deepest exercise database and the cleanest set logger on the market. If all you want is a log, use Hevy.",
        gap: "It records the session and stops. Next week's plan is still yours to write.",
      },
      {
        name: "Strong",
        credit:
          "The fastest set entry we've tested. Plate maths and rest timers are genuinely excellent.",
        gap: "No read on fatigue. A deload is something you decide, not something it tells you.",
      },
      {
        name: "MyFitnessPal",
        credit: "A food database twenty years deep that nothing else comes close to.",
        gap: "Nutrition and training never meet. Calories on one screen, load on another, no line drawn between them.",
      },
      {
        name: "ChatGPT and a spreadsheet",
        credit: "Genuinely good at writing you a programme, once.",
        gap: "It has no memory of your last four weeks unless you retype them, and it never sees the set you just failed.",
      },
    ],
    close:
      "WiseWorkout returns one decision after every session, from data you already logged.",
  },

  stats: {
    heading: "What a tracked block looks like",
    lede: "These four numbers come from one test account over a twelve-week block during internal development. They are a sample of the readout you get — not user traction. WiseWorkout has not launched and has no users yet.",
    items: [
      { value: "47", label: "Sessions tracked" },
      { value: "38.2km", label: "Distance covered" },
      { value: "7", label: "Day streak record" },
      { value: "1,240kg", label: "Volume lifted" },
    ],
  },

  offer: {
    heading: "What you get for joining the beta",
    lede: "WiseWorkout is a Final Year Project, not a company. There's no plan, no card, and no upsell waiting at the end. This is the whole of it.",
    items: [
      {
        title: "The beta build, before public release",
        body: "iOS and Android. You get it when the team gets it, not after a launch queue.",
      },
      {
        title: "A direct line to the five people who built it",
        body: "Not a support form. The names and roles are on the team page, and the replies come from them.",
      },
      {
        title: "Your feedback answered in writing",
        body: "Every beta report gets a written response — what we're changing, or why we're not.",
      },
      {
        title: "Your feedback in the published record",
        body: "Reports that change the build appear in that week's meeting minute on this site, credited by name if you want it.",
      },
    ],
    riskReversal:
      "No card, no ads, and no sale of training data. Leave whenever and export everything you logged as CSV.",
  },

  builtInPublic: {
    heading: "Every meeting we've had is on this website.",
    lede: "Most products show you the finished thing. The full record of this one is public — and it's public because it's graded.",
    items: [
      {
        title: "Weekly meeting minutes",
        body: "Date, attendees, agenda, key decisions and action items. Written for our supervisor, published unedited.",
        href: "/updates",
        linkLabel: "Read the minutes",
      },
      {
        title: "Individual reflective diaries",
        body: "Each of the five of us writes weekly about what shipped, what broke, and what we got wrong.",
        href: "/updates",
        linkLabel: "Read the diaries",
      },
      {
        title: "The team, by name",
        body: "Five students at SIM–University of Wollongong. Roles are written as what each person owns, not as job titles.",
        href: "/team",
        linkLabel: "Meet the team",
      },
    ],
  },

  faq: {
    heading: "The questions we actually get",
    items: [
      {
        question: "Is this just ChatGPT with a logo?",
        answer:
          "No, and the difference is what it can see. A chat window starts empty every time — you'd have to retype four weeks of sets, your bodyweight trend, the equipment your gym has and the days you can train before it could say anything useful, and it would forget all of it by Thursday. WiseCoach reads five things you never type: your full session history, the volume trend on each main lift, the fatigue signal derived from logged sleep and set completion, the equipment you set at onboarding, and how many days are left in your block. There is a language model in the pipeline. It writes the sentence. It doesn't make the decision.",
      },
      {
        question: "I already use Hevy. Why switch?",
        answer:
          "Don't, yet. Hevy's logger is better than ours and its exercise database is deeper. WiseWorkout is worth a look when your problem stops being 'record the session' and starts being 'decide the next one'. You can import your history and run both.",
      },
      {
        question: "I don't want another app nagging me.",
        answer:
          "One notification per session, sent after you finish. It's the decision. Streak and squad alerts are off until you turn them on, and there is no daily reminder to train.",
      },
      {
        question: "It's a student project. Will it exist next year?",
        answer:
          "Honest answer: the project ends in 2026 and we can't promise a company on the other side of it. What we can promise is that everything you log exports as CSV at any time, and that if development stops we'll say so on this page rather than let it go quiet.",
      },
      {
        question: "What does it cost?",
        answer:
          "The beta is free and there is nothing to buy. We haven't priced a paid version because we haven't built one.",
      },
      {
        question: "What data do you collect?",
        answer:
          "Your email, for the waitlist. Inside the app: the workouts you log and the answers you give at onboarding. No location, no contacts, no advertising SDKs, and no sale of training data to anyone.",
      },
    ],
  },

  finalCta: {
    heading: "Know your next session before you leave the gym.",
    lede: "Beta opens March 2026. The list is how you get in.",
    riskReversal: "One email. No card, no ads, leave whenever.",
  },

  waitlist: {
    heading: "Join the beta",
    lede: "Beta opens March 2026. We'll email you once — when it's your turn to get in.",
    inputLabel: "Email",
    placeholder: "you@example.com",
    submit: "Join the beta",
    submitting: "Joining…",
    successTitle: "You're on the list.",
    successBody: "We'll email you when the beta opens in March 2026. Nothing else.",
    duplicate: "That address is already on the list. You're set.",
    error: "Something went wrong. Try again in a moment.",
    riskReversal: "No card. No ads. Unsubscribe in one click.",
  },

  footer: {
    blurb:
      "An AI fitness app that reads the session you just finished and tells you what to do in the next one. Built as a Final Year Project at SIM–University of Wollongong.",
    groups: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/#features" },
          { label: "How it works", href: "/#how-it-works" },
          { label: "Comparison", href: "/#comparison" },
          { label: "FAQ", href: "/#faq" },
        ],
      },
      {
        title: "Project",
        links: [
          { label: "About", href: "/about" },
          { label: "Team", href: "/team" },
          { label: "Updates", href: "/updates" },
        ],
      },
    ],
  },
};
