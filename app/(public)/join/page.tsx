import type { Metadata } from "next";
import Link from "next/link";
import { ORACLE_CHECKOUT_URL, EXECUTE_CHECKOUT_URL } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Three ways to work with Spencer: build your Oracle, join EXECUTE, or book a VIP Day. Every path leads to the 1,000-day mission.",
};

export default function JoinPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-16 pb-20 md:pt-24 md:pb-24 animate-fade-in">
          <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-8">
            Three Ways In
          </p>
          <h1 className="text-ink font-black uppercase tracking-tight text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Pick Your Door.
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ink-soft leading-relaxed">
            Every path leads to the same mission. What&rsquo;s different is
            depth of engagement, speed of transformation, and price of
            entry. Start where you are. Keep moving.
          </p>
        </div>
      </section>

      {/* THREE OFFERS */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-3 items-stretch">

            {/* ORACLE (FEATURED) */}
            <div className="card-base rounded-2xl p-8 md:p-10 border-accent-teal/50 relative flex flex-col">
              <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-accent-teal text-bg-base text-xs font-bold uppercase tracking-wider">
                Most Potent
              </div>
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-2">
                1,000-Day Mentorship
              </p>
              <h3 className="text-ink text-3xl font-black uppercase tracking-tight mb-2">
                The Oracle
              </h3>
              <p className="text-accent-sepia text-sm mb-6">
                Build your private sovereign AI
              </p>
              <div className="mb-6">
                <p className="text-ink text-5xl font-black">$4,500</p>
                <p className="text-ink-muted text-xs uppercase tracking-wider mt-1">
                  One-time &middot; Through Jan 1, 2029
                </p>
              </div>
              <ul className="space-y-2 mb-8 text-ink-soft text-sm flex-1">
                <li>
                  <span className="text-accent-teal">▸</span> Private Oracle
                  built alongside you (6-week V1)
                </li>
                <li>
                  <span className="text-accent-teal">▸</span> 6 hrs/week
                  office hours for ~1,000 days
                </li>
                <li>
                  <span className="text-accent-teal">▸</span> Direct
                  WhatsApp line to Spencer
                </li>
                <li>
                  <span className="text-accent-teal">▸</span> Every cohort
                  agent copy-pasted to yours
                </li>
                <li>
                  <span className="text-accent-teal">▸</span> Full EXECUTE
                  ecosystem included
                </li>
              </ul>
              <div className="space-y-3">
                <a
                  href={ORACLE_CHECKOUT_URL}
                  className="block cta-teal rounded-lg px-6 py-4 text-center text-sm uppercase tracking-wider"
                >
                  Enroll &mdash; $4,500
                </a>
                <Link
                  href="/oracle"
                  className="block text-center text-xs text-accent-teal hover:underline"
                >
                  Read the full offer &rarr;
                </Link>
              </div>
            </div>

            {/* EXECUTE */}
            <div className="card-base rounded-2xl p-8 md:p-10 flex flex-col">
              <p className="text-accent-sepia text-xs uppercase tracking-wider mb-2">
                Community + Coaching
              </p>
              <h3 className="text-ink text-3xl font-black uppercase tracking-tight mb-2">
                EXECUTE
              </h3>
              <p className="text-accent-sepia text-sm mb-6">
                The execution engine + the community
              </p>
              <div className="mb-6">
                <p className="text-ink text-5xl font-black">$3,000</p>
                <p className="text-ink-muted text-xs uppercase tracking-wider mt-1">
                  6 months &middot; Founders tier
                </p>
              </div>
              <ul className="space-y-2 mb-8 text-ink-soft text-sm flex-1">
                <li>
                  <span className="text-accent-sepia">▸</span> Execution
                  Engine installed in first 90-min session
                </li>
                <li>
                  <span className="text-accent-sepia">▸</span> Weekly
                  Action Planning + Reach Out sessions
                </li>
                <li>
                  <span className="text-accent-sepia">▸</span> Monthly Deal
                  Flow Brain Jams + Pitch Parties
                </li>
                <li>
                  <span className="text-accent-sepia">▸</span> Office Hours
                  with Spencer
                </li>
                <li>
                  <span className="text-accent-sepia">▸</span> Double Your
                  Investment Guarantee
                </li>
              </ul>
              <div className="space-y-3">
                <a
                  href={EXECUTE_CHECKOUT_URL}
                  className="block cta-outline rounded-lg px-6 py-4 text-center text-sm uppercase tracking-wider"
                >
                  Join EXECUTE &mdash; $3,000
                </a>
                <p className="text-center text-xs text-ink-muted">
                  6-month founders membership
                </p>
              </div>
            </div>

            {/* VIP DAY */}
            <div className="card-base rounded-2xl p-8 md:p-10 border-accent-gold/40 flex flex-col">
              <p className="text-accent-gold text-xs uppercase tracking-wider mb-2">
                High-Ticket Intensive
              </p>
              <h3 className="text-ink text-3xl font-black uppercase tracking-tight mb-2">
                VIP Day
              </h3>
              <p className="text-accent-sepia text-sm mb-6">
                One founder. One day. Full stack.
              </p>
              <div className="mb-6">
                <p className="text-ink text-5xl font-black">By app.</p>
                <p className="text-ink-muted text-xs uppercase tracking-wider mt-1">
                  Custom scope &middot; Serious builders only
                </p>
              </div>
              <ul className="space-y-2 mb-8 text-ink-soft text-sm flex-1">
                <li>
                  <span className="text-accent-gold">▸</span> Full-day 1:1
                  intensive with Spencer
                </li>
                <li>
                  <span className="text-accent-gold">▸</span> Custom Oracle
                  architecture sprint
                </li>
                <li>
                  <span className="text-accent-gold">▸</span> 2-year vision
                  + money plan engineered
                </li>
                <li>
                  <span className="text-accent-gold">▸</span> Complete
                  ecosystem installed
                </li>
                <li>
                  <span className="text-accent-gold">▸</span> 90-day
                  follow-through access
                </li>
              </ul>
              <div className="space-y-3">
                <a
                  href="mailto:spencer@brainjam.io?subject=VIP%20Day%20Inquiry"
                  className="block cta-outline rounded-lg px-6 py-4 text-center text-sm uppercase tracking-wider"
                >
                  Apply &rarr;
                </a>
                <p className="text-center text-xs text-ink-muted">
                  Email Spencer directly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHICH ONE? */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            Not Sure Which?
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Read the Menu.
          </h2>
          <div className="mt-12 space-y-6 max-w-4xl">
            <div className="card-base rounded-2xl p-7">
              <h3 className="text-ink text-xl font-bold mb-2">
                Pick <span className="text-accent-teal">The Oracle</span>{" "}
                if&hellip;
              </h3>
              <p className="text-ink-soft leading-relaxed">
                You want a private, sovereign AI built alongside you. You
                want direct access to Spencer for 1,000 days. You&rsquo;re
                done with generic SaaS and you want the real leverage.
                You&rsquo;re committed to the 2029 arrival date.
              </p>
            </div>
            <div className="card-base rounded-2xl p-7">
              <h3 className="text-ink text-xl font-bold mb-2">
                Pick <span className="text-accent-sepia">EXECUTE</span>{" "}
                if&hellip;
              </h3>
              <p className="text-ink-soft leading-relaxed">
                You need the system and the community before you need the
                AI. You want weekly rituals, accountability, deal flow, and
                coaching. You want 6 months of intensive integration at a
                lower tier than the Oracle.
              </p>
            </div>
            <div className="card-base rounded-2xl p-7">
              <h3 className="text-ink text-xl font-bold mb-2">
                Pick a <span className="text-accent-gold">VIP Day</span>{" "}
                if&hellip;
              </h3>
              <p className="text-ink-soft leading-relaxed">
                You&rsquo;re already operating at 8-figures. You need a
                custom sprint with Spencer directly to architect a specific
                outcome. You value your time more than the price tag, and
                you want the whole stack installed in a single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-gradient-to-b from-bg-base to-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32 text-center">
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            Still Undecided?
          </h2>
          <p className="mt-6 text-accent-teal text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Book a 15-minute fit call. I&rsquo;ll tell you which door is
            yours.
          </p>
          <div className="mt-10">
            <a
              href="mailto:spencer@brainjam.io?subject=Fit%20Call"
              className="cta-outline inline-block rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Book a Fit Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
