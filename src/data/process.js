import { Lightbulb, Compass, MapPinned, PenTool, Cpu, FlaskConical, Rocket, TrendingUp } from "lucide-react";

/** Compact horizontal sequence for the "Idea Portal" section. */
export const ideaJourneyStages = [
  { icon: Lightbulb, label: "Idea", desc: "A problem worth solving, however early or rough." },
  { icon: Compass, label: "Strategy", desc: "Scope and priorities grounded in your goals." },
  { icon: PenTool, label: "Design", desc: "Interfaces shaped around real user tasks." },
  { icon: Cpu, label: "Engineering", desc: "Working software, built in visible milestones." },
  { icon: FlaskConical, label: "Testing", desc: "Real scenarios checked before launch." },
  { icon: Rocket, label: "Launch", desc: "A monitored, careful release to production." },
  { icon: TrendingUp, label: "Growth", desc: "Iteration and support as your product evolves." },
];

export const processSteps = [
  {
    n: "01",
    icon: Compass,
    title: "Discovery Chamber",
    desc: "We learn your business, your users and the problem you're actually trying to solve — before talking technology.",
  },
  {
    n: "02",
    icon: MapPinned,
    title: "Strategy Room",
    desc: "We define scope, priorities and a realistic technical approach, so budget goes toward what matters first.",
  },
  {
    n: "03",
    icon: PenTool,
    title: "Design Studio",
    desc: "Wireframes and interface design focused on how your users will actually complete their tasks.",
  },
  {
    n: "04",
    icon: Cpu,
    title: "Engineering Lab",
    desc: "We build in reviewable milestones on a shared staging environment, so you see progress as it happens.",
  },
  {
    n: "05",
    icon: FlaskConical,
    title: "Quality Testing Zone",
    desc: "Core user flows are tested against real scenarios before anything reaches production.",
  },
  {
    n: "06",
    icon: Rocket,
    title: "Launch Portal",
    desc: "Careful, monitored deployment to production with a rollback plan in place.",
  },
  {
    n: "07",
    icon: TrendingUp,
    title: "Growth Command Centre",
    desc: "Post-launch monitoring, fixes and iteration as your product and user base grow.",
  },
];
