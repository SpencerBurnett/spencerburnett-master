import type { Metadata } from "next";
import Link from "next/link";
import { ORACLE_CHECKOUT_URL } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "The Five Plays",
  description:
    "Show Up Better. Execute More. Shout Louder. Use Leverage. Deliver More Potently. The five plays every founder I work with runs. In order.",
};

const PLAYS = [
  {
    n: "01",
    title: "Show Up Better",
    hook: "Identity is the operating system.",
    operator:
      "Not habits. Not tactics. <strong>Who you are</strong> when you walk into the room &mdash; everything downstream of that. If you want different results, become a different operator. The body, the voice, the clothing, the energy, the standards you walk in with.",
    fail: "Running 2027 tactics with a 2024 identity. The vision keeps expanding, the operator stays the same size, and the gap feels like failure. It&rsquo;s not failure &mdash; it&rsquo;s misalignment.",
    practice:
      "Write three identity statements for who you need to become. Rate yourself 1&ndash;10 weekly with evidence and opportunities. Let the identity lead. The actions follow automatically.",
  },
  {
    n: "02",
    title: "Execute More",
    hook: "Closed loops. Zero open tabs in your brain.",
    operator:
      "Open loops are anxiety. Every unfinished task, unreturned text, un-made decision is a tab using up RAM. Closing loops isn&rsquo;t about productivity &mdash; it&rsquo;s about cognitive freedom. The Action Planning ritual makes integrity your primary KPI.",
    fail: "Carrying a hundred &ldquo;I should probably&hellip;&rdquo; tabs in your head. You feel busy but can&rsquo;t explain what you did. You check email compulsively looking for relief from the dread of what you&rsquo;re forgetting.",
    practice:
      "Write every open loop down. Do it, delegate it, defer it with a date, or delete it. Protect weekly Action Planning like it&rsquo;s the only meeting that matters. It is.",
  },
  {
    n: "03",
    title: "Shout Louder",
    hook: "Visibility is compounding.",
    operator:
      "If you&rsquo;re not publicly building in the open, the algorithm has nothing to amplify. The takers are loud. The givers are usually quiet &mdash; which is why the discourse sucks. Your silence is costing the people who need you. Get loud.",
    fail: "You&rsquo;re doing the work but nobody knows. No content cadence. No public thinking. You&rsquo;re invisible to the people you&rsquo;d serve best, and three years from now you&rsquo;ll wonder why your network didn&rsquo;t compound.",
    practice:
      "Pick one public channel. Commit to a cadence you can sustain. Ship even when it&rsquo;s not polished. Done > perfect > invisible.",
  },
  {
    n: "04",
    title: "Use Leverage",
    hook: "AI, agents, automations, community.",
    operator:
      "One person with the right leverage beats a 50-person team without it. The Ecosystem is leverage on your operations. The Oracle is leverage on your attention. The community is leverage on your reach. Leverage compounds the other four plays.",
    fail: "Grinding without leverage. Typing everything yourself. Running the same repetitive tasks every week. Refusing to delegate because &ldquo;only you can do it right.&rdquo; Your ceiling is the number of hours you can stay awake.",
    practice:
      "Audit your week. Anything you do more than once should be systematized. Anything an AI can do, give to the AI. Anything the community can do together, don&rsquo;t do alone.",
  },
  {
    n: "05",
    title: "Deliver More Potently",
    hook: "Potency scales. Diluted offers don&rsquo;t.",
    operator:
      "If your delivery doesn&rsquo;t move the needle, nothing else matters. Better to serve 10 people fully than 1,000 partially. Make the medicine stronger. Charge more. Expect more. Deliver transformation, not information.",
    fail: "Priced for volume you&rsquo;re not getting. Serving anyone with a credit card. Watering down the work so more people can &ldquo;access&rdquo; it. The result: burnout, lukewarm reviews, and no case studies worth telling.",
    practice:
      "Raise the price. Narrow the avatar. Pour more attention into each client. Measure by transformation, not by revenue. The right revenue follows the right transformation.",
  },
];

export default function PlaysPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-16 pb-24 md:pt-24 md:pb-28 animate-fade-in">
          <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-8">
            The Five Plays
          </p>
          <h1 className="text-ink font-black uppercase tracking-tight text-5xl md:text-7xl leading-[0.95] max-w-5xl">
            Every Founder I Work With
            <br />
            <span className="text-accent-sepia">Runs the Same Five.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ink-soft leading-relaxed">
            The order matters. The iteration matters. The commitment
            matters. These aren&rsquo;t tactics. They&rsquo;re the
            structural moves that determine whether you arrive at the
            vision or drift.
          </p>
        </div>
      </section>

      {/* ORDER MATTERS */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            Why the Order Matters
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Run Them Out of Order and the Machine Stalls.
          </h2>
          <div className="mt-10 max-w-3xl space-y-4 text-ink-soft text-lg leading-relaxed">
            <p>
              Most entrepreneurs try to start at Play 3 (shout louder) or
              Play 4 (use leverage). They skip identity and execution.
              And then they wonder why the leverage amplifies their mess
              and the visibility attracts the wrong people.
            </p>
            <p>
              Play 1 sets the operator. Play 2 closes the loops. Play 3
              broadcasts what&rsquo;s now worth hearing. Play 4
              multiplies what&rsquo;s now worth multiplying. Play 5
              makes sure what reaches the world is worth receiving.
            </p>
            <p className="text-accent-teal font-medium">
              Work them in order. Return to Play 1 whenever anything
              feels off. It usually is.
            </p>
          </div>
        </div>
      </section>

      {/* THE PLAYS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <div className="space-y-10">
            {PLAYS.map((p) => (
              <div
                key={p.n}
                className="card-base rounded-2xl p-8 md:p-12"
              >
                <div className="flex items-start gap-6 md:gap-12 flex-wrap md:flex-nowrap">
                  <div className="md:w-56 md:shrink-0">
                    <p className="text-accent-teal text-5xl md:text-6xl font-black leading-none">
                      {p.n}
                    </p>
                    <p className="mt-4 text-ink text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight">
                      {p.title}
                    </p>
                    <p className="mt-3 text-accent-sepia italic text-sm">
                      {p.hook}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0 space-y-5">
                    <div>
                      <p className="text-accent-teal text-xs uppercase tracking-wider mb-2">
                        The move
                      </p>
                      <p
                        className="text-ink-soft leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: p.operator }}
                      />
                    </div>
                    <div className="rounded-xl border border-border bg-bg-deep/60 p-5">
                      <p className="text-accent-sepia text-xs uppercase tracking-wider mb-2">
                        Where it breaks
                      </p>
                      <p
                        className="text-ink-soft leading-relaxed text-sm"
                        dangerouslySetInnerHTML={{ __html: p.fail }}
                      />
                    </div>
                    <div className="rounded-xl border border-accent-teal/40 bg-bg-card/40 p-5">
                      <p className="text-accent-teal text-xs uppercase tracking-wider mb-2">
                        This week&rsquo;s practice
                      </p>
                      <p
                        className="text-ink-soft leading-relaxed text-sm"
                        dangerouslySetInnerHTML={{ __html: p.practice }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT CONNECTS */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            How It Connects
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            The Plays Run on the Ecosystem.
          </h2>
          <div className="mt-10 max-w-3xl space-y-4 text-ink-soft text-lg leading-relaxed">
            <p>
              Each play has a ritual inside the Ecosystem that keeps it
              live. Identity Imprinting runs Play 1. Action Planning and
              Task Architecture run Play 2. Content + Performance run
              Play 3. The Oracle + automations run Play 4. Pricing +
              delivery systems run Play 5.
            </p>
            <p>
              The plays are the moves. The Ecosystem is where they get
              tracked. The Oracle is how they get amplified to the
              speed the plays actually deserve.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/ecosystem"
              className="cta-outline rounded-lg px-8 py-4 text-sm uppercase tracking-wider text-center"
            >
              Read: The Ecosystem &rarr;
            </Link>
            <Link
              href="/creation"
              className="cta-outline rounded-lg px-8 py-4 text-sm uppercase tracking-wider text-center"
            >
              Read: The 5D Model &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-gradient-to-b from-bg-base to-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32 text-center">
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            Run the Plays With Me for 1,000 Days.
          </h2>
          <p className="mt-6 text-accent-teal text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Inside the Oracle cohort you don&rsquo;t run these alone.
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
