export type ScheduleItem = {
  date: string;
  title: string;
  description: string;
  type: "arrival" | "practice" | "special" | "closing";
};

export type Inclusion = string;

export const eventInfo = {
  title: "3rd International Ngyungne Retreat",
  subtitle: "& 2nd Potala World Peace Prayers 2026",
  dates: "08 – 24 December, 2026",
  location: "Jorpati, Kathmandu, Nepal",
  countdownTarget: "2026-12-08T00:00:00+05:45",
  stats: [
    { value: "17", label: "Days" },
    { value: "500+", label: "Expected" },
    { value: "20+", label: "Countries" },
  ],
};

export const schedule: ScheduleItem[] = [
  {
    date: "Dec 7",
    title: "Arrival & Opening Ceremony",
    description: "Welcome registration, orientation, and sacred opening rituals to invoke blessings for the retreat.",
    type: "arrival",
  },
  {
    date: "Dec 8–9",
    title: "1st Ngyungne Cycle",
    description: "Day 1: Taking of Eight Mahayana Precepts, recitation of the Chenrezig sadhana, partial fasting. Day 2: Complete fast, noble silence, and intensive mantra recitation.",
    type: "practice",
  },
  {
    date: "Dec 10–11",
    title: "2nd Ngyungne Cycle",
    description: "Deepening purification through renewed vow-taking, prostrations, and uninterrupted prayer sessions before the 1000-arm Avalokiteshvara.",
    type: "practice",
  },
  {
    date: "Dec 12–13",
    title: "3rd Ngyungne Cycle",
    description: "Continued practice with increased dedication. Guided sessions on the six-syllable mantra, Om Mani Padme Hum, and the benefits of compassion.",
    type: "practice",
  },
  {
    date: "Dec 14–15",
    title: "4th Ngyungne Cycle",
    description: "Practitioners deepen samadhi through sustained fasting practice, group recitations, and Dharma teachings on bodhicitta.",
    type: "practice",
  },
  {
    date: "Dec 16–17",
    title: "5th Ngyungne Cycle",
    description: "Halfway milestone. Special mid-retreat empowerment and teachings on the nature of mind, followed by dedicated group practice.",
    type: "practice",
  },
  {
    date: "Dec 18–19",
    title: "6th Ngyungne Cycle",
    description: "Renewing motivation for all sentient beings. Extended silent practice sessions and individual offering ceremonies.",
    type: "practice",
  },
  {
    date: "Dec 20–21",
    title: "7th Ngyungne Cycle",
    description: "Approaching completion with heightened focus. Group recitation marathons, aspirational prayers, and merit dedications.",
    type: "practice",
  },
  {
    date: "Dec 22",
    title: "8th Ngyungne Cycle & Rest Day",
    description: "Final purification cycle followed by an afternoon of Dharma teachings, rest, and preparation for the grand closing ceremonies.",
    type: "practice",
  },
  {
    date: "Dec 23",
    title: "2nd Potala World Peace Prayers",
    description: "A historic large-scale gathering for global peace — thousands of practitioners unite in prayer for the harmony of all nations, the environment, and sentient beings.",
    type: "special",
  },
  {
    date: "Dec 24",
    title: "Long Life Empowerment & Closing Ceremony",
    description: "Amitayus Long Life Empowerment conferred by the presiding masters, followed by dedication of merit, blessings, group photos, and departure.",
    type: "closing",
  },
];

export const inclusions: Inclusion[] = [
  "All teachings and empowerments",
  "Practice materials and sadhanas",
  "Accommodation (shared/private options)",
  "Vegetarian meals on non-fasting days",
  "Airport transfers (Kathmandu)",
  "Translation services (multiple languages)",
  "Guided meditation sessions",
  "Certificate of completion",
];

export const scheduleTypeColors: Record<ScheduleItem["type"], string> = {
  arrival: "bg-secondary text-secondary-foreground",
  practice: "bg-primary text-primary-foreground",
  special: "bg-violet-700 text-white",
  closing: "bg-emerald-700 text-white",
};