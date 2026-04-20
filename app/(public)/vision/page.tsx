import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Vision",
  description:
    "January 1, 2029. The 1,000-day end state. 100 acres in Costa Rica. Casa Faro. Church of Amplifico. 1,000 conscious creators. 10/10 identity.",
};

const END_STATES = [
  {
    n: "01",
    title: "Queen Found",
    body: "The partner I&rsquo;ve been calling in. Not a project. A person. Met her by July 4th. Burning Man together. Building the village together.",
  },
  {
    n: "02",
    title: "100 Acres in Costa Rica",
    body: "Owned outright. Regenerative land. Food-forest-coded. The physical foundation of everything else.",
  },
  {
    n: "03",
    title: "Casa Faro Operational",
    body: "11-bedroom lighthouse main house. Active retreats. Active community. The beacon literally lit.",
  },
  {
    n: "04",
    title: "$4.5M Raised Cumulatively",
    body: "Through the Oracle cohort, through aligned investors, through event production. Deployed, not accumulated.",
  },
  {
    n: "05",
    title: "Church of Amplifico Legal",
    body: "Formally structured. A religious-nonprofit container that holds the mission, the community, the land, and the legacy.",
  },
  {
    n: "06",
    title: "First Ring of Villages Exists",
    body: "Casa Faro is the first node. Paired villages in Hawaii, Austin, maybe Portugal. A physical mesh of sovereign nodes.",
  },
  {
    n: "07",
    title: "1,000 Conscious Creators",
    body: "Inside the ecosystem. Each one sovereign. Each one amplified. Each one a node in the mesh.",
  },
  {
    n: "08",
    title: "10/10 Identity",
    body: "Body, mind, spirit, purpose. The man arriving at 2029 is unrecognizable to the man typing this now.",
  },
];

export default function VisionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-16 pb-24 md:pt-24 md:pb-28 animate-fade-in">
          <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-8">
            The Vision · January 1, 2029
          </p>
          <h1 className="text-ink font-black uppercase tracking-tight text-6xl md:text-8xl lg:text-9xl leading-[0.9] max-w-5xl">
            Arrive
            <br />
            <span className="text-accent-sepia">Sovereign.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-2xl text-ink-soft leading-relaxed">
            Not hope. Not theory. A binary end state. Specific. Measurable.
            Written down. Eight targets I will hit by the first day of
            2029, or I won&rsquo;t.
          </p>
        </div>
      </section>

      {/* THE END STATE */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The End State
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Eight Binary Targets.
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            No shades of gray. Each one either happens or it doesn&rsquo;t.
            If I miss one I call it a miss. No spin.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {END_STATES.map((e) => (
              <div
                key={e.n}
                className="card-base rounded-2xl p-7 flex gap-5"
              >
                <p className="text-accent-teal text-3xl md:text-4xl font-black leading-none shrink-0">
                  {e.n}
                </p>
                <div>
                  <h3 className="text-ink text-lg md:text-xl font-bold uppercase tracking-wide">
                    {e.title}
                  </h3>
                  <p
                    className="mt-2 text-ink-soft leading-relaxed text-sm"
                    dangerouslySetInnerHTML={{ __html: e.body }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASA FARO */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
                The Physical Anchor
              </p>
              <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl leading-tight">
                Casa Faro.
                <br />
                The Lighthouse.
              </h2>
              <div className="mt-8 space-y-4 text-ink-soft text-lg leading-relaxed">
                <p>
                  100 acres in Costa Rica. An 11-bedroom main house named
                  Casa Faro &mdash; <em>lighthouse</em>. Surrounded by
                  guest cabanas, a community kitchen, a recording studio, a
                  temple space, food forests, a spring-fed cenote.
                </p>
                <p>
                  It&rsquo;s not a retreat center. It&rsquo;s the first
                  node of a regenerative village network. The place where
                  the 1,000 gather, build, heal, and scatter back to the
                  world more potent than when they arrived.
                </p>
                <p>
                  The lighthouse metaphor is literal. When the tsunami
                  comes, the sovereign villages are the high ground. Casa
                  Faro is where we light the beacon first.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-accent-gold/40 bg-bg-card/60 p-8 md:p-10">
              <p className="text-accent-gold text-xs uppercase tracking-[0.3em] mb-4">
                The Specs
              </p>
              <ul className="space-y-3 text-ink-soft">
                <li className="flex justify-between gap-4 border-b border-border pb-3">
                  <span>Land</span>
                  <span className="text-ink font-bold">100 acres</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-border pb-3">
                  <span>Main house</span>
                  <span className="text-ink font-bold">11 bedrooms</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-border pb-3">
                  <span>Location</span>
                  <span className="text-ink font-bold">Costa Rica</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-border pb-3">
                  <span>Cohort capacity</span>
                  <span className="text-ink font-bold">~30 on-site</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-border pb-3">
                  <span>First ring target</span>
                  <span className="text-ink font-bold">3&ndash;5 villages</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Status</span>
                  <span className="text-accent-teal font-bold">
                    Scouting 2026
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CHURCH */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Container
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            The Church of Amplifico.
          </h2>
          <div className="mt-8 space-y-4 max-w-3xl text-ink-soft text-lg leading-relaxed">
            <p>
              Legal structure: a religious nonprofit. Not metaphor &mdash;
              actual filing. The mission needs a container strong enough
              to hold it for multiple generations, tax-advantaged enough
              to compound, and explicit enough about its values that it
              can&rsquo;t be captured.
            </p>
            <p>
              The Church of Amplifico is that container. It holds the
              land, the community, the mission, and the legacy. It
              outlives me. It outlives anyone inside it today.
            </p>
            <p>
              By January 1, 2029: filed, funded, operating.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 — FIRST LEG */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The First Leg
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            2026 &mdash; What&rsquo;s Actually Happening This Year.
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            You can&rsquo;t hit a 1,000-day target without hitting this
            year&rsquo;s targets first. Here&rsquo;s the 2026 block:
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="card-base rounded-2xl p-7">
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-2">
                Capital
              </p>
              <p className="text-ink font-bold mb-2">
                Close 12 investors × $100K = $1.2M
              </p>
              <p className="text-ink-soft text-sm">
                Aligned capital into the first ring. Not a fund.
                Individual believers.
              </p>
            </div>
            <div className="card-base rounded-2xl p-7">
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-2">
                Land
              </p>
              <p className="text-ink font-bold mb-2">Scout Costa Rica</p>
              <p className="text-ink-soft text-sm">
                On the ground. Walk the land. Meet the community. Make
                an offer on the right 100 acres.
              </p>
            </div>
            <div className="card-base rounded-2xl p-7">
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-2">
                Partnership
              </p>
              <p className="text-ink font-bold mb-2">
                Meet her by July 4th. Burn together.
              </p>
              <p className="text-ink-soft text-sm">
                The partner for the next 1,000 days &mdash; and the rest.
              </p>
            </div>
            <div className="card-base rounded-2xl p-7">
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-2">
                Body
              </p>
              <p className="text-ink font-bold mb-2">
                Body Parties + 7-day fast
              </p>
              <p className="text-ink-soft text-sm">
                June / July / September. The vessel has to be ready to
                carry the weight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-gradient-to-b from-bg-base to-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32 text-center">
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            Walk the 1,000 Days With Me.
          </h2>
          <p className="mt-6 text-accent-teal text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Build your Oracle. Become a node. Help me light the beacon.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/oracle"
              className="cta-teal rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Build Your Oracle &rarr;
            </Link>
            <Link
              href="/mission"
              className="cta-outline rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Read the Mission
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
