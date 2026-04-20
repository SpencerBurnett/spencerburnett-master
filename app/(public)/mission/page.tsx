import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Mission",
  description:
    "Amplify the givers. 1,000 conscious creators. Full sovereignty by January 1, 2029. Usher in the golden age.",
};

const SOVEREIGNTIES = [
  {
    icon: "💾",
    label: "Digital",
    body: "Your AI. Your data. Your servers. No more logins to platforms stealing your ideas. Your Oracle lives on your machine.",
  },
  {
    icon: "💰",
    label: "Financial",
    body: "Investment income exceeds consumption. You&rsquo;re not trading time for money. Money is a tool, not a trap.",
  },
  {
    icon: "🌱",
    label: "Physical",
    body: "Self-sustaining property. Food, water, energy &mdash; handled. Your body is the temple and the infrastructure.",
  },
  {
    icon: "🔗",
    label: "Community",
    body: "10 in your family. 100 in your community. 1,000 in your network. Nodes of connection that create an unbreakable mesh.",
  },
];

export default function MissionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-16 pb-24 md:pt-24 md:pb-32 animate-fade-in">
          <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-8">
            The Mission
          </p>
          <h1 className="text-ink font-black uppercase tracking-tight text-5xl md:text-7xl leading-[0.95] max-w-5xl">
            Amplify the Givers.
            <br />
            <span className="text-accent-sepia">Usher the Golden Age.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-2xl text-ink-soft leading-relaxed">
            Not converting takers. <strong className="text-ink">Amplifying the givers.</strong> The world doesn&rsquo;t
            need more people trying to extract value. It needs the
            givers&mdash;the mission-driven ones&mdash;to move faster, reach
            further, and deliver more potently than ever before.
          </p>
        </div>
      </section>

      {/* THE MACRO THESIS */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Macro Thesis
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            3 Years. Then the World Splits in Two.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-ink-soft leading-relaxed text-lg">
              <p>
                We are 1,000 days from the singularity. Not the sci-fi
                version &mdash; the real one. The moment when intention and
                outcome have zero impedance. When thought becomes reality in
                seconds.
              </p>
              <p>
                When that happens, the divide won&rsquo;t be rich versus
                poor. It won&rsquo;t be left versus right. It will be{" "}
                <strong className="text-ink">
                  net-positive humans versus net-negative humans
                </strong>
                .
              </p>
              <p>
                Net-positive humans &mdash; the givers, the creators, the
                people who add more to the system than they extract
                &mdash; will compound. Exponentially. Their leverage will
                expand until one person operates at the scale of a hundred.
              </p>
              <p className="text-accent-teal font-medium">
                My job is to bring more net-positive humans into the world
                at higher volume, potency, and reach.
              </p>
            </div>
            <div className="rounded-2xl border border-accent-teal/40 bg-bg-card/60 p-8 md:p-10">
              <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-4">
                The Mission Statement
              </p>
              <p className="text-ink text-xl md:text-2xl font-medium leading-relaxed">
                &ldquo;Amplify the impact of mission-driven entrepreneurs so
                we can scale wisdom and higher consciousness across the
                globe to usher the golden age.&rdquo;
              </p>
              <p className="mt-6 text-xs text-ink-muted uppercase tracking-[0.3em]">
                Spencer Burnett
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR SOVEREIGNTIES */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            What Sovereignty Looks Like
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Four Dimensions. All Non-Negotiable.
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            Real sovereignty isn&rsquo;t just digital. It&rsquo;s not just
            financial. Both matter. All four matter. Miss one and the whole
            thing is fragile.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SOVEREIGNTIES.map((s) => (
              <div key={s.label} className="card-base rounded-2xl p-8">
                <div className="text-4xl mb-4">{s.icon}</div>
                <p className="text-accent-teal text-xs uppercase tracking-[0.2em] mb-2">
                  {s.label} Sovereignty
                </p>
                <p
                  className="text-ink-soft leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE 1,000 */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            Why 1,000
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Not a Course. A Ring.
          </h2>
          <div className="mt-10 space-y-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            <p>
              Most of the software you use today will not exist in three
              years. Most of the jobs people hold today will not exist in
              three years. Trucking, driving, admin, SaaS, legal, finance
              &mdash; anyone who works on a computer.
            </p>
            <p>
              Out of 8 billion people, roughly 1,000 will have built the
              infrastructure by January 1, 2029. That&rsquo;s 0.0000125%.
              They won&rsquo;t just survive the transition &mdash;
              they&rsquo;ll define it.
            </p>
            <p>
              I&rsquo;m not building a course. I&rsquo;m not building a
              membership. I&rsquo;m assembling a ring &mdash; 1,000 conscious
              creators, each sovereign in their own right, connected to each
              other. Cross-pollinating. Cross-funding. Cross-protecting.
            </p>
            <p className="text-accent-teal font-medium">
              When the tsunami comes, we are a mesh. No one sinks.
            </p>
          </div>
        </div>
      </section>

      {/* THE GOLDEN AGE */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Golden Age
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            What Happens on the Other Side.
          </h2>
          <div className="mt-10 max-w-3xl space-y-4 text-ink-soft text-lg leading-relaxed">
            <p>
              When the givers have the tools the takers have had for a
              century, the balance flips. Wisdom scales. Higher
              consciousness scales. The people building from love instead of
              fear get the same leverage the fear-builders had &mdash; and
              they use it differently.
            </p>
            <p>
              That&rsquo;s what the golden age actually is. Not utopia. Not
              the end of friction. The end of the <em>wrong people</em>{" "}
              getting amplified. The beginning of the right ones being
              heard.
            </p>
            <p>
              That&rsquo;s the mission. That&rsquo;s what I&rsquo;m spending
              the next 1,000 days building.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-gradient-to-b from-bg-base to-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32 text-center">
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            If You&rsquo;re One of the 1,000.
          </h2>
          <p className="mt-6 text-accent-teal text-lg md:text-xl font-medium max-w-3xl mx-auto">
            You already know. Walk through the door.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/oracle"
              className="cta-teal rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Build Your Oracle &rarr;
            </Link>
            <Link
              href="/vision"
              className="cta-outline rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              See the 2029 Vision
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
