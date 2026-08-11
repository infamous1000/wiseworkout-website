export const siteConfig = {
  name: "WiseWorkout",
  tagline: "Fitness that fits your life",
  description:
    "Track workouts, runs, rides and calories, follow a plan built around your schedule, join challenges and find a coach — all in one app. A Final Year Project by FYP26S215 at SIM–University of Wollongong.",

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

  /* One conversion verb. Same words on every button and in the toast it produces.
     Not "Get Started" — the app is pre-launch, so that would promise access
     that does not exist yet. */
  cta: "Get early access",

  announcement: {
    text: "Beta opens March 2026",
    linkLabel: "Join the list",
    href: "/#join",
  },

  hero: {
    eyebrow: "Gym, running, cycling and food — in one app",
    headline: "Fitness that fits your life.",
    subhead:
      "Track workouts, runs, rides and calories. Follow a plan built around the days and hours you actually have. Join challenges, find a coach, and train alongside people going the same way.",
    secondaryCta: "See how it works",
    secondaryHref: "/#how-it-works",
  },

  /* Signature element: cards orbiting the hero phone. Every value here is real —
     it appears on a screen in /public/app. */
  notifications: [
    {
      title: "Today's plan is ready",
      meta: "Push + Cardio Finisher · 31 min",
      accent: "blue" as const,
      rotate: -3,
    },
    {
      title: "1,320 kcal in · 90g protein",
      meta: "Counted against what you trained",
      accent: "none" as const,
      rotate: 2,
    },
    {
      title: "17-day streak",
      meta: "Your longest yet",
      accent: "amber" as const,
      rotate: 3,
    },
    {
      title: "Challenge joined",
      meta: "100 cal target · 6 people in",
      accent: "none" as const,
      rotate: -2,
    },
  ],

  problem: {
    heading: "Right now, this takes four apps.",
    lede: "One for lifting. One for runs. One for food. And a group chat where you try to stay accountable. None of them know what the others know.",
    items: [
      {
        label: "Scattered",
        title: "Your week never adds up to one picture.",
        body: "The run is in one app, the sets in another, dinner in a third. Nothing tells you how the whole week actually went.",
      },
      {
        label: "One-size plans",
        title: "Most plans assume you have an hour, five days a week.",
        body: "You don't. So you start, miss two sessions, and stop — not because you lack discipline, but because the plan never matched your week.",
      },
      {
        label: "On your own",
        title: "Week three is where most people quit.",
        body: "Nothing is watching, nobody notices, and skipping a session costs you nothing at all.",
      },
    ],
  },

  mechanism: {
    eyebrow: "Getting started",
    heading: "Six questions. Then a plan that fits.",
    lede: "No spreadsheets and no guesswork. WiseWorkout builds around the time, equipment and experience you actually have.",
    steps: [
      {
        number: "01",
        title: "Tell it about your week",
        body: "How many days you can train — 2 to 6 — and how long a session realistically runs: 30, 45, 60 or 75+ minutes. Pick what's true, not what's ideal.",
      },
      {
        number: "02",
        title: "Tell it what you've got",
        body: "Gym, cardio, or both. Home bodyweight, a full gym, or outdoors. It only programmes what you can actually get your hands on.",
      },
      {
        number: "03",
        title: "Get your plan",
        body: "Beginner, intermediate or advanced — calibrated to match. Connect Apple Health and your steps, heart rate, sleep and workouts sync in on their own.",
      },
    ],
  },

  featuresIntro: {
    eyebrow: "Features",
    heading: "Five things it does. All on the same screen.",
  },

  features: [
    {
      eyebrow: "Food",
      title: "Know what you're actually eating.",
      hook: "Calories and macros sitting on the same screen as your training.",
      explanation:
        "Log your meals and WiseWorkout tracks what went in, what you burned, and what's left for the day — with protein, carbs and fat broken out. What you eat and what you train are the same problem, so they live in the same place.",
      outcome: "One glance tells you where the day stands.",
      image: "/app/main.png",
      alt: "WiseWorkout home screen showing a 17-day streak, a calorie ring with intake and macros, and today's plan",
    },
    {
      eyebrow: "Plans",
      title: "A workout that fits the time you have.",
      hook: "Filter by level, goal and sport — then follow it day by day.",
      explanation:
        "Gym splits, cardio blocks, or combined programmes that pair real strength work with a cardio finisher. Take one from the library or build your own custom routine and keep it alongside the rest.",
      outcome: "Twenty minutes or a full hour — there's something for the week you're actually having.",
      image: "/app/plans.png",
      alt: "Explore Plans screen with level, goal and sport filters, featured plans, and separate gym and cardio plan lists",
    },
    {
      eyebrow: "WiseCoach",
      title: "Ask anything, and get an answer that knows your training.",
      hook: "WiseCoach reads your training history, current plan and injury profile before it replies.",
      explanation:
        "Not a blank chat window you have to re-explain yourself to. Ask what to do on leg day, how to swap an exercise around an injury, or why the last month stalled. It's general guidance, not medical advice — and when you want a person instead, Find Professional is on the same screen.",
      outcome: "An answer grounded in what you've actually been doing.",
      image: "/app/ai.png",
      alt: "WiseCoach chat screen showing it uses training history, current plan and injury profile, with a Find Professional button",
    },
    {
      eyebrow: "Club",
      title: "Don't train alone.",
      hook: "Challenges, a leaderboard, and a feed of what everyone actually did.",
      explanation:
        "Join a public challenge or create your own with a target — calories, distance, whatever you're chasing. Follow friends, see their sessions land in the feed, and watch where you sit on the board.",
      outcome: "The weeks you don't feel like training are the weeks this earns its place.",
      image: "/app/chellenges.png",
      alt: "Club screen with Leaderboard, Challenges and Feed tabs, showing public challenges you can join",
    },
    {
      eyebrow: "Progress",
      title: "See whether any of it is working.",
      hook: "Calories burned, gym volume, pace and distance — by week, month or year.",
      explanation:
        "Every session lands in your charts and activity history, tagged gym, cardio, manual or custom. You earn XP for what you finish and level up as the weeks stack, so the boring middle of a training block still shows movement.",
      outcome: "Proof that the last three months went somewhere.",
      image: "/app/progress.png",
      alt: "Progress screen showing weekly calories burned and gym training charts with week, month and year views",
    },
  ],

  personas: {
    eyebrow: "Built for real weeks",
    heading: "Your goals. Your schedule. Your way.",
    lede: "There is no one-size-fits-all plan. WiseWorkout adapts to the person actually using it.",
    items: [
      { label: "Only 20 minutes", body: "Short, focused sessions that still count." },
      { label: "Three days a week", body: "A plan built for the days you really have." },
      { label: "Training for a race", body: "Every run, pace and kilometre tracked." },
      { label: "Out on the bike", body: "Log rides and watch the distance stack up." },
      { label: "Trying to lose weight", body: "Meals, macros and activity in one place." },
      { label: "Starting from zero", body: "Beginner plans, and a coach to ask when you're stuck." },
    ],
  },

  comparison: {
    heading: "Or you could keep using four apps.",
    lede: "Each of these does its own job well. The problem is that none of them knows what the others know.",
    rows: [
      {
        name: "A running app",
        credit: "Excellent GPS, splits and pace history.",
        gap: "It has no idea you lifted yesterday, or that you've only eaten 1,200 calories today.",
      },
      {
        name: "A calorie app",
        credit: "Food databases twenty years deep.",
        gap: "It counts what goes in and guesses what goes out. Your training is somebody else's data.",
      },
      {
        name: "A workout logger",
        credit: "Fast set entry and a deep exercise library.",
        gap: "Runs and rides don't belong in it, and neither does the rest of your week.",
      },
      {
        name: "A group chat",
        credit: "Honestly, the only accountability most people have.",
        gap: "It forgets, it drifts off-topic, and nobody is keeping score.",
      },
    ],
    close:
      "WiseWorkout keeps all of it in one place — and uses the whole picture to shape what it gives you next.",
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
    heading: "What you get for joining early",
    lede: "WiseWorkout is a Final Year Project, not a company. There's no plan to buy and no upsell waiting at the end. This is the whole of it.",
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
        question: "Is this just another workout tracker?",
        answer:
          "It's the four apps you're already using, in one. Workouts, runs and rides, calories and macros, and the people you train with all sit on the same screen — which means the plan it gives you can account for the whole week instead of one slice of it.",
      },
      {
        question: "I don't have an hour a day.",
        answer:
          "That's the point. Setup asks how long your sessions realistically run — 30, 45, 60 or 75+ minutes — and how many days a week you can train, anywhere from 2 to 6. It programmes for that, not for an ideal week you don't have. The app's own words: shorter and focused often beats long and inconsistent.",
      },
      {
        question: "Is this just ChatGPT with a logo?",
        answer:
          "No, and the difference is what it can see. A chat window starts empty every time — you'd have to retype your last month of sets, your current plan and your injury history before it could say anything useful. WiseCoach already has all three and says so at the top of the thread. There is a language model writing the sentence; what makes the answer worth anything is the training data behind it. And when you want a person instead of a model, Find Professional is one tap away.",
      },
      {
        question: "I already use a running app. Do I have to give it up?",
        answer:
          "No. Connect Apple Health and your workouts, steps, heart rate and sleep sync in automatically, so runs you record elsewhere still count toward your week here. Plenty of people run both for a while.",
      },
      {
        question: "I'm a complete beginner.",
        answer:
          "Pick Beginner at setup and the whole plan calibrates down to match. There are beginner plans in the library, WiseCoach answers the questions you'd rather not ask a stranger at the gym, and if you want a real person, you can search for one in the app.",
      },
      {
        question: "What does it cost?",
        answer:
          "The beta is free and there's nothing to buy. WiseCoach comes with 25 free messages a month. We haven't priced a paid version because we haven't built one.",
      },
    ],
  },

  finalCta: {
    heading: "Your fitness. Your way.",
    lede: "Start building a routine that fits the week you're actually having — not the one a plan assumes you have.",
    riskReversal: "One email. No card, no ads, leave whenever.",
  },

  waitlist: {
    heading: "Get early access",
    lede: "Beta opens March 2026. We'll email you once — when it's your turn to get in.",
    inputLabel: "Email",
    placeholder: "you@example.com",
    submit: "Get early access",
    submitting: "Sending…",
    successTitle: "You're on the list.",
    successBody: "We'll email you when the beta opens in March 2026. Nothing else.",
    duplicate: "That address is already on the list. You're set.",
    error: "Something went wrong. Try again in a moment.",
    riskReversal: "No card. No ads. Unsubscribe in one click.",
  },

  footer: {
    blurb:
      "One app for workouts, runs, rides, food and the people you train with — built around your goals and your schedule. A Final Year Project at SIM–University of Wollongong.",
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
