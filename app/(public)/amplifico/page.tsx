import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amplifico",
  description:
    "Amplifico. The amplification engine. The Church of Amplifico. Events, community, and the destination brand for the 1,000-day mission.",
};

const PILLARS = [
  {
    title: "The Church",
    sub: "Legal container (in progress)",
    body: "A religious-nonprofit structure being filed to hold the mission, the land, the community, and the legacy beyond any one person. Mission-governed. Values-explicit. Built to outlast all of us.",
  },
  {
    title: "The Events",
    sub: "Where amplification happens",
    body: "Body Parties, Deal Flow Brain Jams, Pitch Parties, Co-Working Retreats, destination gatherings. The rituals that make the mesh real &mdash; in person, in person, in person.",
  },
  {
    title: "The Brand",
    sub: "The destination",
    body: "Amplifico is where it all ends up. BrainJam is the collective. EXECUTE is the engine. Amplifico is the amplification. The name you&rsquo;ll see on the sign when you pull up to the lighthouse.",
  },
];

export default function AmplificoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-16 pb-24 md:pt-24 md:pb-28 animate-fade-in">
          <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-8">
            The Destination
          </p>
          <h1 className="text-ink font-black uppercase tracking-tight text-6xl md:text-8xl lg:text-9xl leading-[0.9]">
            Amplifico.
          </h1>
          <p className="mt-8 text-accent-sepia text-xl md:text-2xl font-medium">
            Where the givers get louder.
          </p>
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-ink-soft leading-relaxed">
            Amplifico is the amplification engine. It&rsquo;s the container
            for the mission, the brand that carries it, the church that
            holds it, and the events that make it real. BrainJam gathers
            you. EXECUTE builds you. <strong className="text-ink">Amplifico is where you become unignorable.</strong>
          </p>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            What It Is
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Three Things, One Name.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="card-base rounded-2xl p-8">
                <h3 className="text-ink text-2xl font-bold uppercase tracking-wide mb-1">
                  {p.title}
                </h3>
                <p className="text-accent-teal text-xs uppercase tracking-wider mb-5">
                  {p.sub}
                </p>
                <p
                  className="text-ink-soft leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE CHURCH DEEP DIVE */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
                The Church of Amplifico
              </p>
              <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl leading-tight">
                A Church, Literally.
              </h2>
              <div className="mt-8 space-y-4 text-ink-soft text-lg leading-relaxed">
                <p>
                  Not a metaphor. A legal religious nonprofit being
                  structured right now, by 2029.
                </p>
                <p>
                  Why a church? Because the mission &mdash; amplify
                  mission-driven givers, scale wisdom and higher
                  consciousness, usher the golden age &mdash; is
                  fundamentally a spiritual one. And because the container
                  needs to be structurally resistant to capture. Churches
                  have a thousand-year track record of holding vision
                  across generations. Corporations don&rsquo;t.
                </p>
                <p>
                  The Church of Amplifico will hold the land (Casa Faro),
                  the community (the 1,000), and the operations (events,
                  Oracle cohort, retreats) under one mission-governed
                  roof.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-accent-gold/40 bg-bg-card/60 p-8">
              <p className="text-accent-gold text-xs uppercase tracking-[0.3em] mb-5">
                Status
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between gap-4 border-b border-border pb-3">
                  <span className="text-ink-soft">Structure chosen</span>
                  <span className="text-accent-teal font-bold">
                    ✓ Religious nonprofit
                  </span>
                </li>
                <li className="flex justify-between gap-4 border-b border-border pb-3">
                  <span className="text-ink-soft">Mission statement</span>
                  <span className="text-accent-teal font-bold">✓ Drafted</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-border pb-3">
                  <span className="text-ink-soft">Filing</span>
                  <span className="text-accent-sepia font-bold">
                    In progress
                  </span>
                </li>
                <li className="flex justify-between gap-4 border-b border-border pb-3">
                  <span className="text-ink-soft">Funding</span>
                  <span className="text-accent-sepia font-bold">
                    2026&mdash;2028
                  </span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-ink-soft">Operating by</span>
                  <span className="text-ink font-bold">Jan 1, 2029</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Events
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            We Gather on Purpose.
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            The mesh only becomes real in person. Online is the signal;
            the gathering is the substance. Here&rsquo;s the 2026 event
            rhythm:
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Body Parties",
                "June / July / September 2026",
                "Multi-day physical intensives. Movement, fasting, breathwork, ice, heat. Reset the vessel.",
              ],
              [
                "Deal Flow Brain Jams",
                "Monthly",
                "Sling contacts, identify constraints, make deals. Pure commercial leverage across the cohort.",
              ],
              [
                "Pitch Parties",
                "Bi-monthly",
                "Founders pitch to the room. Real capital. Real connections. Real accountability.",
              ],
              [
                "Action Planning",
                "Weekly",
                "The ritual that keeps integrity as the primary KPI. Craft identity. Plot the week.",
              ],
              [
                "Co-Working",
                "Weekly — Austin + Zoom",
                "Hybrid deep-work blocks with the cohort. Focus, together.",
              ],
              [
                "Casa Faro Retreats",
                "From 2027",
                "The lighthouse becomes the living room. Quarterly multi-day immersions at the village.",
              ],
            ].map(([title, cadence, body]) => (
              <div key={title} className="card-base rounded-2xl p-6">
                <h3 className="text-ink text-lg font-bold mb-1">{title}</h3>
                <p className="text-accent-teal text-xs uppercase tracking-wider mb-3">
                  {cadence}
                </p>
                <p className="text-ink-soft text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/events"
              className="cta-outline inline-block rounded-lg px-10 py-5 text-sm uppercase tracking-wider"
            >
              See the Calendar &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32 text-center">
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            Amplification Starts With the Oracle.
          </h2>
          <p className="mt-6 text-accent-teal text-lg md:text-xl font-medium max-w-3xl mx-auto">
            You can&rsquo;t get louder until you can hear yourself clearly.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/oracle"
              className="cta-teal rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Build Your Oracle &rarr;
            </Link>
            <Link
              href="/events"
              className="cta-outline rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Come to an Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
