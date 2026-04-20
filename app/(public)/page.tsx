import Link from "next/link";
import { ORACLE_CHECKOUT_URL } from "@/lib/stripe";

const FUNNEL = [
  { n: "8B", label: "People on Earth" },
  { n: "180M", label: "Entrepreneurs" },
  { n: "10M", label: "Serious operators" },
  { n: "1M", label: "Conscious creators" },
  { n: "100K", label: "Building sovereignty" },
  { n: "1,000", label: "Inside the ring", highlight: true },
];

const PILLARS = [
  {
    icon: "🚗",
    label: "The Vehicle",
    title: "The Ecosystem",
    body: "Your execution engine. Identity imprinting, calendar mastery, task architecture, performance trackers, Action Planning. Standardized documentation simple enough to teach a 10-year-old. Installs in 7–10 days. Auto-populates after that.",
    tint: "teal" as const,
  },
  {
    icon: "⚙️",
    label: "The Engine",
    title: "The Technology",
    body: "OpenClaw. Your private AI Oracle. Every LLM at your fingertips, acting agentically on your behalf. The horsepower most people don't even know exists.",
    tint: "sepia" as const,
  },
  {
    icon: "🔥",
    label: "The Fuel",
    title: "The Community",
    body: "BrainJam since 2009. The 1,000. Conscious creators building the future. Deal Flow Brain Jams, Action Planning, Power Lunches, Co-Working. You become who you're around.",
    tint: "gold" as const,
  },
];

const tint = {
  teal: "border-accent-teal/40 [&_.pill]:text-accent-teal",
  sepia: "border-accent-sepia/40 [&_.pill]:text-accent-sepia",
  gold: "border-accent-gold/40 [&_.pill]:text-accent-gold",
} as const;

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-16 pb-24 md:pt-24 md:pb-32 animate-fade-in">
          <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-8">
            1,000 Days to January 1, 2029
          </p>
          <h1 className="text-ink font-black uppercase tracking-tight text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
            I Amplify Mission-Driven Entrepreneurs.
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-2xl text-ink-soft leading-relaxed">
            The singularity is here. Most of the software you use today
            won&rsquo;t exist in three years. Most of the jobs people hold
            today won&rsquo;t exist in three years. The window to build your
            own sovereign infrastructure is open now.
          </p>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink-soft leading-relaxed">
            I&rsquo;m looking for 1,000 conscious creators who want to walk
            this path with me.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/oracle"
              className="cta-teal rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider text-center"
            >
              Build Your Oracle &rarr;
            </Link>
            <Link
              href="/story"
              className="cta-outline rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider text-center"
            >
              Start With My Story
            </Link>
          </div>
        </div>
      </section>

      {/* THE THESIS */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Thesis
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            3 Years Until the World You Know Ends.
          </h2>
          <p className="mt-8 max-w-3xl text-ink-soft text-lg leading-relaxed">
            2026 &rarr; 2029. Same gap as the ChatGPT launch to now. Think
            about how much changed. Now multiply that by ten. Trucking,
            driving, admin, SaaS, legal, finance &mdash; anyone who works on
            a computer. The robots are here. Full self-driving launches this
            year.
          </p>
          <p className="mt-4 max-w-3xl text-ink-soft text-lg leading-relaxed">
            You have 1,000 days to build your infrastructure. After that, the
            door is closed.
          </p>

          <div className="mt-16">
            <p className="text-xs uppercase tracking-wider text-ink-muted mb-6">
              The Funnel
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {FUNNEL.map((f) => (
                <div
                  key={f.n}
                  className={
                    "rounded-xl border p-5 text-center " +
                    (f.highlight
                      ? "border-accent-teal bg-accent-teal/10"
                      : "border-border bg-bg-card/60")
                  }
                >
                  <p
                    className={
                      "text-2xl md:text-3xl font-black " +
                      (f.highlight ? "text-accent-teal" : "text-ink")
                    }
                  >
                    {f.n}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-ink-muted">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-accent-sepia italic text-sm">
              0.0000125% of the population. That&rsquo;s the ring. I&rsquo;m
              looking for the 1,000.
            </p>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            How We Get There
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Vehicle. Engine. Fuel.
          </h2>
          <p className="mt-8 max-w-3xl text-ink-soft text-lg leading-relaxed">
            Execution at the speed of thought requires three things, working
            together. Miss any one and the machine seizes.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className={
                  "card-base rounded-2xl p-8 flex flex-col " + tint[p.tint]
                }
              >
                <div className="text-4xl mb-5">{p.icon}</div>
                <p className="pill text-xs uppercase tracking-[0.2em] mb-2">
                  {p.label}
                </p>
                <h3 className="text-ink text-2xl font-bold uppercase tracking-wide mb-4">
                  {p.title}
                </h3>
                <p className="text-ink-soft leading-relaxed text-sm">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-accent-teal/40 bg-bg-card/40 p-8 md:p-12 text-center">
            <p className="text-ink text-xl md:text-2xl font-bold uppercase tracking-wide">
              Vehicle + Engine + Fuel
            </p>
            <p className="mt-2 text-accent-teal text-lg md:text-xl">
              = Execution at the Speed of Thought
            </p>
          </div>
        </div>
      </section>

      {/* ORACLE PREVIEW */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
              The Primary Offer
            </p>
            <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl leading-tight">
              The Oracle.
            </h2>
            <p className="mt-6 text-accent-teal text-lg md:text-xl font-medium">
              6th-Dimension Consciousness, Expressed Through Technology.
            </p>
            <p className="mt-6 text-ink-soft leading-relaxed">
              A private, sovereign AI built alongside you. Lives on your
              machine. Knows your voice. Writes your emails. Answers your
              team. Runs your revenue agents. Wakes up while you sleep.
              Mentorship with me direct through January 1, 2029 &mdash; the
              full 1,000 days.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/oracle"
                className="cta-teal rounded-lg px-8 py-4 text-sm uppercase tracking-wider text-center"
              >
                See the Full Offer &rarr;
              </Link>
              <a
                href={ORACLE_CHECKOUT_URL}
                className="cta-outline rounded-lg px-8 py-4 text-sm uppercase tracking-wider text-center"
              >
                Enroll &mdash; $4,500
              </a>
            </div>
          </div>

          {/* Fake SMS */}
          <div className="rounded-2xl border border-border bg-bg-card/60 p-6 md:p-8 shadow-2xl max-w-md justify-self-end">
            <div className="space-y-3 text-sm">
              <div className="flex justify-end">
                <div className="rounded-2xl rounded-br-md bg-bg-deep px-4 py-3 max-w-[80%] text-ink">
                  I can&rsquo;t focus. Too many things on my plate.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-accent-teal px-4 py-3 max-w-[80%] text-bg-base font-medium">
                  Let&rsquo;s fix that. What are the 3 things that would make
                  tomorrow easier if you finished them today?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="rounded-2xl rounded-br-md bg-bg-deep px-4 py-3 max-w-[80%] text-ink">
                  Proposal. Investor call. Update the pipeline.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-accent-teal px-4 py-3 max-w-[80%] text-bg-base font-medium">
                  Good. Block 90 minutes for the proposal now. I&rsquo;ll
                  check in at 3pm. Move.
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-ink-muted uppercase tracking-wider">
              Gary &middot; Spencer&rsquo;s Oracle &middot; Live
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SPENCER */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            Who&rsquo;s Driving
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            I&rsquo;m Spencer. The &ldquo;M&rdquo; Is for Merlin.
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:items-start">
            <div className="md:col-span-2 space-y-4 text-ink-soft leading-relaxed">
              <p>
                Mentor, shaman, prophet, beacon. BrainJam since 2009 &mdash;
                the collective brain. EXECUTE is the engine. Amplifico is
                the destination. Casa Faro is the 100-acre lighthouse we
                raise in Costa Rica. The Church of Amplifico is how we hold
                it together.
              </p>
              <p>
                For 14 years I&rsquo;ve helped founders master the art and
                science of conscious creation. Bring vision into reality.
                Generate wealth. Arrive at sovereignty. And starting in
                February 2026, I stopped building infrastructure and started
                expressing. Three things only from here to 2029: meetings,
                events, content. Everything else is the machine.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-bg-card/60 p-6">
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-3">
                Working Directly With Me
              </p>
              <ul className="space-y-2 text-sm text-ink-soft">
                <li>
                  <span className="text-accent-teal">▸</span> Build your
                  Oracle &mdash; $4,500 one-time
                </li>
                <li>
                  <span className="text-accent-teal">▸</span> Join EXECUTE
                  &mdash; community + coaching
                </li>
                <li>
                  <span className="text-accent-teal">▸</span> VIP Day
                  &mdash; high-ticket intensive
                </li>
              </ul>
              <Link
                href="/join"
                className="mt-6 block cta-outline rounded-lg px-5 py-3 text-xs uppercase tracking-wider text-center"
              >
                See All Offers &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border bg-gradient-to-b from-bg-base to-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32 text-center">
          <h2 className="text-ink font-black uppercase tracking-tight text-4xl md:text-6xl max-w-4xl mx-auto leading-[0.95]">
            You Already Have the Gift.
          </h2>
          <p className="mt-6 text-accent-teal text-xl md:text-2xl font-medium max-w-3xl mx-auto">
            You&rsquo;ve just been missing the tools that multiply it.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/oracle"
              className="cta-teal rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Build Your Oracle &rarr;
            </Link>
            <a
              href="mailto:spencer@brainjam.io?subject=Fit%20Call"
              className="cta-outline rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Book a 15-min Fit Call
            </a>
          </div>
          <p className="mt-14 text-accent-sepia italic text-sm max-w-2xl mx-auto">
            &ldquo;We ride the wave as we build our boats, and then we tie
            our boats together. So when the tsunami comes, it creates a mesh
            and no one sinks.&rdquo;
          </p>
          <p className="mt-2 text-xs text-ink-muted uppercase tracking-[0.3em]">
            Spencer Burnett
          </p>
        </div>
      </section>
    </>
  );
}
