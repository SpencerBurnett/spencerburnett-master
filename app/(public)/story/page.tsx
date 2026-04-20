import type { Metadata } from "next";
import Link from "next/link";
import { ORACLE_CHECKOUT_URL } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "My Story",
  description:
    "Spencer M. Burnett. The M is for Merlin. Mentor, shaman, prophet, beacon. BrainJam since 2009. Execute engine. Amplifico destination.",
};

const FIVE_PLAYS = [
  {
    n: "01",
    title: "Show Up Better",
    body: "Identity is the operating system. Not habits. Not tactics. Who you are when you walk into the room &mdash; everything downstream of that.",
  },
  {
    n: "02",
    title: "Execute More",
    body: "Closed loops. Zero open tabs in your brain. The Action Planning ritual makes integrity your primary KPI.",
  },
  {
    n: "03",
    title: "Shout Louder",
    body: "Visibility is compounding. If you&rsquo;re not publicly building in the open, the algorithm has nothing to amplify.",
  },
  {
    n: "04",
    title: "Use Leverage",
    body: "AI, agents, automations, community. One person with the right leverage beats a 50-person team without it.",
  },
  {
    n: "05",
    title: "Deliver More Potently",
    body: "Potency scales. If your delivery doesn&rsquo;t move the needle, nothing else matters. Make the medicine stronger.",
  },
];

export default function StoryPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-16 pb-24 md:pt-24 md:pb-28 animate-fade-in">
          <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-8">
            My Story
          </p>
          <h1 className="text-ink font-black uppercase tracking-tight text-5xl md:text-7xl leading-[0.95] max-w-5xl">
            I&rsquo;m Spencer.
            <br />
            <span className="text-accent-sepia">The &ldquo;M&rdquo; Is for Merlin.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-2xl text-ink-soft leading-relaxed">
            Mentor. Shaman. Prophet. Beacon. I help mission-driven
            entrepreneurs amplify their impact &mdash; so we can scale wisdom
            and higher consciousness across the globe and usher in the golden
            age.
          </p>
        </div>
      </section>

      {/* ORIGIN */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            Origin
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            14 Years. One Question.
          </h2>
          <p className="mt-8 max-w-3xl text-ink-soft text-lg leading-relaxed">
            In 2009 I founded BrainJam &mdash; the collective brain. A space
            for founders to master the art and the science of conscious
            creation: in business, in relationships, in building the
            lifestyle that actually matches the vision.
          </p>
          <p className="mt-4 max-w-3xl text-ink-soft text-lg leading-relaxed">
            Over the last six years, my focus narrowed: helping founders scale
            from seven figures to eight. And through that work, I built
            something I didn&rsquo;t realize I was building &mdash; a complete
            ecosystem. An integrity management system. A mindfulness system.
            A way to hold the tension between vision and execution without
            breaking.
          </p>
          <p className="mt-4 max-w-3xl text-ink-soft text-lg leading-relaxed">
            One question ran under all of it: <em>how do you bring the thing
            in your head into the world without losing yourself in the
            process?</em>
          </p>
        </div>
      </section>

      {/* THE TURN */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Turn
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            February 2026. EDC Mexico. Something Broke Open.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="card-base rounded-2xl p-8">
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-3">
                Before
              </p>
              <p className="text-ink-soft leading-relaxed">
                Building infrastructure. Always building. Another tool,
                another system, another framework, another app. Head down.
                Optimizing. Hiding in the ops layer.
              </p>
            </div>
            <div className="card-base rounded-2xl p-8 border-accent-teal/40">
              <p className="text-accent-gold text-xs uppercase tracking-wider mb-3">
                After
              </p>
              <p className="text-ink-soft leading-relaxed">
                Stop building. Start creating. Start expressing. Three
                focuses from here to 2029: <strong className="text-ink">meetings, events, content</strong>. Everything else is
                delegation. Everything else is the machine I already built.
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-3xl text-ink-soft text-lg leading-relaxed italic">
            &ldquo;The world gets 3 more years before the singularity splits
            us in two. The divide is not rich versus poor. It&rsquo;s
            net-positive humans versus net-negative humans. My job is to
            bring more of the net-positive ones into the world at higher
            volume, potency, and reach.&rdquo;
          </p>
        </div>
      </section>

      {/* WHAT I'M BUILDING */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            What I&rsquo;m Building
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Four Names. One Mission.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="card-base rounded-2xl p-8">
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-3">
                BrainJam · 2009
              </p>
              <h3 className="text-ink text-2xl font-bold mb-4">
                The Collective Brain
              </h3>
              <p className="text-ink-soft leading-relaxed">
                The origin. A community of conscious founders learning
                together. Still the engine room where the 1,000 gather.
              </p>
            </div>
            <div className="card-base rounded-2xl p-8">
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-3">
                EXECUTE
              </p>
              <h3 className="text-ink text-2xl font-bold mb-4">
                The Execution Engine
              </h3>
              <p className="text-ink-soft leading-relaxed">
                Systems. Ecosystem. Action Planning. Deal Flow Brain Jams.
                The rituals that turn vision into result.
              </p>
            </div>
            <div className="card-base rounded-2xl p-8">
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-3">
                Amplifico
              </p>
              <h3 className="text-ink text-2xl font-bold mb-4">
                The Destination Brand
              </h3>
              <p className="text-ink-soft leading-relaxed">
                The amplification engine. Event production. The Church of
                Amplifico &mdash; legally structured &mdash; as the
                container for the mission.
              </p>
            </div>
            <div className="card-base rounded-2xl p-8 border-accent-gold/40">
              <p className="text-accent-gold text-xs uppercase tracking-wider mb-3">
                Casa Faro · Costa Rica
              </p>
              <h3 className="text-ink text-2xl font-bold mb-4">
                The 100-Acre Village
              </h3>
              <p className="text-ink-soft leading-relaxed">
                The lighthouse. 11-bedroom main house. A sovereign village.
                The first ring in a mesh of connected villages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE FIVE PLAYS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            How I Teach It
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            The Five Plays.
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            Every founder I work with runs the same five plays. The order
            matters. The iteration matters. The commitment matters.
          </p>
          <div className="mt-12 space-y-4">
            {FIVE_PLAYS.map((p) => (
              <div
                key={p.n}
                className="card-base rounded-2xl p-6 md:p-8 flex gap-6 md:gap-10 items-start"
              >
                <p className="text-accent-teal text-4xl md:text-5xl font-black leading-none shrink-0">
                  {p.n}
                </p>
                <div>
                  <h3 className="text-ink text-xl md:text-2xl font-bold uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p
                    className="mt-2 text-ink-soft leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/plays"
              className="cta-outline inline-block rounded-lg px-8 py-4 text-sm uppercase tracking-wider"
            >
              Read the Full Breakdown &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* VISION TEASER */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28 text-center">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            Where It&rsquo;s All Going
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            January 1, 2029. Full Sovereignty.
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-ink-soft text-lg leading-relaxed">
            A 1,000-day vision with a binary end state. 100 acres. Casa Faro
            operational. $4.5M raised. The Church of Amplifico legally
            structured. 1,000 conscious creators inside the ecosystem. Queen
            found.
          </p>
          <Link
            href="/vision"
            className="mt-10 inline-block cta-outline rounded-lg px-10 py-5 text-sm uppercase tracking-wider"
          >
            See the Full Vision &rarr;
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32 text-center">
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            Want to Walk the 1,000 Days With Me?
          </h2>
          <p className="mt-6 text-accent-teal text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Build your Oracle. Join the ring.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/oracle"
              className="cta-teal rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Build Your Oracle &rarr;
            </Link>
            <a
              href={ORACLE_CHECKOUT_URL}
              className="cta-outline rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Enroll &mdash; $4,500
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
