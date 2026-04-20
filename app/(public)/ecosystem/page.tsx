import type { Metadata } from "next";
import Link from "next/link";
import { ORACLE_CHECKOUT_URL } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "The Ecosystem",
  description:
    "The Ecosystem is the Vehicle. Identity imprinting, 2-year vision, calendar mastery, task architecture, performance trackers, Action Planning. The operating system that makes execution repeatable.",
};

const BRAIN_SECTIONS = [
  {
    n: "01",
    name: "The Master",
    body: "Your private founder vault. Vision, identity, big bets, personal context. The root document every other layer references.",
  },
  {
    n: "02",
    name: "The Oracle",
    body: "AI programming hub &mdash; identity files, memory files, tools, skills. The config layer that makes your Oracle sound like you and work for you.",
  },
  {
    n: "03",
    name: "Calendar & Tasks",
    body: "The dimension of time and the dimension of expectation. Color-coded. Reconciled daily. Every commitment visible, every deadline tracked.",
  },
  {
    n: "04",
    name: "Projects",
    body: "Every initiative from kickoff to launch. Each project has a completion snapshot so you know what &ldquo;done&rdquo; actually means before you start.",
  },
  {
    n: "05",
    name: "Performance",
    body: "Blood labs. Body composition. Finances. Habits. Project completion rates. No thought slips through the cracks.",
  },
  {
    n: "06",
    name: "People (Rolodex)",
    body: "Every relationship tracked with full interaction history. Birthdays, preferences, offer history, last contact. Your memory made searchable.",
  },
  {
    n: "07",
    name: "Resources",
    body: "SOPs, templates, reference material, prompt libraries. The reusable IP your Oracle pulls from when you ask it a question.",
  },
  {
    n: "08",
    name: "Content",
    body: "Pipeline from idea to published asset. Every post, essay, video, podcast episode tracked from seed to distribution.",
  },
  {
    n: "09",
    name: "Sandbox",
    body: "Creative space for experiments. Half-finished thoughts, wild ideas, prototypes. The safe room where you break things without breaking the system.",
  },
  {
    n: "10",
    name: "Data",
    body: "Imports, exports, raw material, analytics, transcripts. The lake everything else is built on.",
  },
];

const RITUALS = [
  {
    icon: "🪞",
    title: "Identity Imprinting",
    body: "Choose your identity frames. Rate them 1&ndash;10 weekly with evidence and opportunities. NLP-based. The foundation of who you need to become to arrive at the vision.",
  },
  {
    icon: "🔭",
    title: "Two-Year Vision",
    body: "Write the last chapter of your biography. Monthly income. Time use. Health. Relationships. Proudest achievements. Then reverse-engineer it into projects.",
  },
  {
    icon: "📅",
    title: "Calendar Mastery",
    body: "Your calendar is your attention management system. Color-coded. Reconciled daily. Synced to the vision. Master the dimension of time.",
  },
  {
    icon: "✅",
    title: "Task Architecture",
    body: "Master the dimension of expectation. Every commitment tracked. Every deadline visible. Every project broken into actionable steps with time estimates.",
  },
  {
    icon: "📊",
    title: "Performance Trackers",
    body: "Blood labs. Body composition. Finances. Project completion rates. No thought slips through the cracks. You use every part of the buffalo.",
  },
  {
    icon: "🔄",
    title: "Action Planning",
    body: "The weekly ritual. Review identity. Reconcile calendar. Update tasks. Plan the week. One hour that keeps your entire operation running on autopilot.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Extraction",
    body: "A 5&ndash;6 hour recorded deep-dive where we capture your entire context &mdash; vision, projects, relationships, processes. This becomes the raw material.",
  },
  {
    n: "2",
    title: "Architecture",
    body: "We build your Brain. Ten sections, customized to your business. Calendar structure, task framework, project plans, performance trackers.",
  },
  {
    n: "3",
    title: "AI Programming",
    body: "Your Oracle gets configured. Gary is trained on your voice, your frameworks, your standards. Identity imprinting statements are set.",
  },
  {
    n: "4",
    title: "Integration",
    body: "Connect your tools. Calendar sync. Transcript uploads. Automations. Data imports. Everything flows into The Brain automatically.",
  },
  {
    n: "5",
    title: "Activation",
    body: "Your first Action Planning session. We walk through the weekly ritual together. From this point forward, the Ecosystem runs itself.",
  },
];

export default function EcosystemPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-16 pb-24 md:pt-24 md:pb-28 animate-fade-in">
          <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-8">
            The Vehicle
          </p>
          <h1 className="text-ink font-black uppercase tracking-tight text-5xl md:text-7xl leading-[0.95] max-w-5xl">
            The Ecosystem.
          </h1>
          <p className="mt-8 text-accent-sepia text-xl md:text-2xl font-medium">
            The Operating System Your Life Deserves.
          </p>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ink-soft leading-relaxed">
            The Ecosystem is the vehicle. Your execution engine. A
            standardized set of frameworks, documents, and rituals that
            makes execution repeatable, scalable, and visible. Once
            installed, it auto-populates and auto-updates. You never have
            to type on a keyboard again.
          </p>
        </div>
      </section>

      {/* THREE ELEMENTS CONTEXT */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Whole Stack
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Vehicle. Engine. Fuel.
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            Execution at the speed of thought needs three things working
            together. The Ecosystem is where the other two plug in.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="card-base rounded-2xl p-7 border-accent-teal/50">
              <div className="text-4xl mb-3">🚗</div>
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-1">
                The Vehicle (you are here)
              </p>
              <h3 className="text-ink text-xl font-bold uppercase tracking-wide mb-3">
                Ecosystem
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                The standardized operating system. Identity, vision,
                calendar, tasks, performance, rituals.
              </p>
            </div>
            <div className="card-base rounded-2xl p-7">
              <div className="text-4xl mb-3">⚙️</div>
              <p className="text-accent-sepia text-xs uppercase tracking-wider mb-1">
                The Engine
              </p>
              <h3 className="text-ink text-xl font-bold uppercase tracking-wide mb-3">
                Technology
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                The Oracle. OpenClaw. Automations. The AI leverage that
                multiplies what the Ecosystem structures.
              </p>
            </div>
            <div className="card-base rounded-2xl p-7">
              <div className="text-4xl mb-3">🔥</div>
              <p className="text-accent-gold text-xs uppercase tracking-wider mb-1">
                The Fuel
              </p>
              <h3 className="text-ink text-xl font-bold uppercase tracking-wide mb-3">
                Community
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                The 1,000. Partners, clients, mentors. The cohort that
                powers the whole machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE BRAIN */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Brain
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Ten Sections. One Living Document.
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            The Brain is a standardized 10-section Notion workspace
            that serves as the backbone of the Ecosystem. Not just a set
            of documents &mdash; a living, breathing extension of your
            consciousness. Every transcript auto-uploads. Every meeting
            auto-documents. The longer you use it, the smarter it gets.
          </p>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {BRAIN_SECTIONS.map((s) => (
              <div
                key={s.n}
                className="card-base rounded-2xl p-6 flex gap-5"
              >
                <p className="text-accent-teal text-3xl font-black leading-none shrink-0">
                  {s.n}
                </p>
                <div>
                  <h3 className="text-ink text-lg font-bold uppercase tracking-wide">
                    {s.name}
                  </h3>
                  <p
                    className="mt-2 text-ink-soft text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-accent-teal/40 bg-bg-card/40 p-8 md:p-12">
            <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
              The payoff
            </p>
            <p className="text-ink text-lg md:text-xl leading-relaxed italic">
              &ldquo;Once fully installed, the Ecosystem is really only a
              data center and a dashboard. It auto-populates. It
              auto-updates. As you talk, as you move about life, the
              machine automatically continues to learn about you.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* SIX RITUALS */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Six Rituals
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            What Actually Makes It Run.
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            Six practices. Each one simple. Together, they make
            execution inevitable. Teach them to a 10-year-old and
            they&rsquo;d still work.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {RITUALS.map((r) => (
              <div key={r.title} className="card-base rounded-2xl p-6">
                <div className="text-4xl mb-4">{r.icon}</div>
                <h3 className="text-ink text-lg font-bold mb-3">
                  {r.title}
                </h3>
                <p
                  className="text-ink-soft text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: r.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALLATION */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            Installation
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Chaos to Clarity in 7&ndash;10 Days.
          </h2>
          <div className="mt-12 space-y-5">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="card-base rounded-2xl p-7 flex gap-6 md:gap-10 items-start"
              >
                <div className="shrink-0 w-14 h-14 rounded-full bg-accent-teal/10 border border-accent-teal/40 flex items-center justify-center">
                  <span className="text-accent-teal text-xl font-black">
                    {s.n}
                  </span>
                </div>
                <div>
                  <h3 className="text-ink text-xl md:text-2xl font-bold uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <p
                    className="mt-2 text-ink-soft leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-accent-teal/40 bg-bg-card/40 p-6 text-center">
              <p className="text-accent-teal text-3xl md:text-4xl font-black">
                7&ndash;10 Days
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-ink-muted">
                To full installation
              </p>
            </div>
            <div className="rounded-2xl border border-accent-teal/40 bg-bg-card/40 p-6 text-center">
              <p className="text-accent-teal text-3xl md:text-4xl font-black">
                ~21 Hours
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-ink-muted">
                Saved per week after
              </p>
            </div>
            <div className="rounded-2xl border border-accent-teal/40 bg-bg-card/40 p-6 text-center">
              <p className="text-accent-teal text-3xl md:text-4xl font-black">
                90 Days
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-ink-muted">
                To complete transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Transformation
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Before and After.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="card-base rounded-2xl p-8">
              <p className="text-accent-sepia text-xs uppercase tracking-wider mb-5">
                Before the Ecosystem
              </p>
              <ul className="space-y-3 text-ink-soft">
                <li className="flex gap-3">
                  <span className="text-accent-sepia">✗</span>
                  <span>Notes scattered across 5 apps</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-sepia">✗</span>
                  <span>Calendar is aspirational, not operational</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-sepia">✗</span>
                  <span>Tasks live in your head (and fall through cracks)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-sepia">✗</span>
                  <span>New hires take 6 months to onboard</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-sepia">✗</span>
                  <span>You type everything manually</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-sepia">✗</span>
                  <span>Weekly planning takes 3+ hours (if it happens)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-sepia">✗</span>
                  <span>Identity and goals disconnected from daily actions</span>
                </li>
              </ul>
            </div>
            <div className="card-base rounded-2xl p-8 border-accent-teal/40">
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-5">
                After the Ecosystem
              </p>
              <ul className="space-y-3 text-ink-soft">
                <li className="flex gap-3">
                  <span className="text-accent-teal">✓</span>
                  <span>One Brain. One document. One dashboard.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-teal">✓</span>
                  <span>Calendar reconciled daily in minutes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-teal">✓</span>
                  <span>Every task tracked with deadlines + time estimates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-teal">✓</span>
                  <span>New hires onboard in days with AI context</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-teal">✓</span>
                  <span>Voice-first &mdash; speak everything, type nothing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-teal">✓</span>
                  <span>Action Planning: 1 hour per week, covers everything</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-teal">✓</span>
                  <span>Identity imprinting drives every decision</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-14 text-center text-accent-sepia italic text-lg max-w-3xl mx-auto">
            &ldquo;Document everything necessary, but as few things as
            possible, in a simple framework you could teach a
            10-year-old.&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-gradient-to-b from-bg-base to-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32 text-center">
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            The Ecosystem Comes Installed with the Oracle.
          </h2>
          <p className="mt-6 text-accent-teal text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Enroll once. Get the Vehicle, the Engine, and the Fuel for
            the next 1,000 days.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ORACLE_CHECKOUT_URL}
              className="cta-teal rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Enroll &mdash; $4,500
            </a>
            <Link
              href="/oracle"
              className="cta-outline rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Read the Full Offer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
