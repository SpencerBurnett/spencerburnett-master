import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MindShare",
  description:
    "MindShare — Spencer&rsquo;s content engine. Long-form essays, podcast conversations, video breakdowns. Frameworks, mental models, and the thinking behind the 1,000-day mission.",
};

const CHANNELS = [
  {
    icon: "📽️",
    title: "Video",
    sub: "YouTube + Loom breakdowns",
    body: "Long-form video explaining the Oracle, OpenClaw, the Five Plays, the Ecosystem. Frameworks you can take and run with.",
    cta: "Watch on YouTube",
    href: "#",
  },
  {
    icon: "🎙️",
    title: "Podcast",
    sub: "Conversations with builders",
    body: "Deep conversations with founders, mystics, operators, and creators. How they think. What they build. Why it matters.",
    cta: "Listen",
    href: "#",
  },
  {
    icon: "📝",
    title: "Essays",
    sub: "Long-form writing",
    body: "Written breakdowns of what I&rsquo;m learning in real time. The 1,000-day thesis. The Oracle build notes. The case for sovereign infrastructure.",
    cta: "Read",
    href: "#",
  },
  {
    icon: "📬",
    title: "Newsletter",
    sub: "The Amplifico dispatch",
    body: "Weekly-ish. What I&rsquo;m building, what I&rsquo;m reading, what&rsquo;s live in the cohort, and where we&rsquo;re gathering next.",
    cta: "Subscribe",
    href: "mailto:spencer@brainjam.io?subject=Subscribe%20to%20the%20Dispatch",
  },
];

const THEMES = [
  {
    n: "01",
    title: "The 1,000-Day Thesis",
    body: "Why the next three years matter more than the last thirty combined. What the singularity actually is. Why sovereignty is the only viable strategy.",
  },
  {
    n: "02",
    title: "Oracle Engineering",
    body: "How to build a private AI that knows you, remembers, and acts on your behalf. OpenClaw deep-dives. Agent patterns. Knowledge base architecture.",
  },
  {
    n: "03",
    title: "The Five Plays",
    body: "Show Up Better. Execute More. Shout Louder. Use Leverage. Deliver More Potently. Each play broken down into tactics and rituals.",
  },
  {
    n: "04",
    title: "Conscious Creation",
    body: "The art and science of turning vision into result without losing yourself. Identity imprinting, 2-year vision, integrity management.",
  },
  {
    n: "05",
    title: "Building the Village",
    body: "Casa Faro. The Church of Amplifico. What it means to build a physical sovereign community and why it&rsquo;s the capstone of the mission.",
  },
];

export default function MindSharePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-16 pb-20 md:pt-24 md:pb-24 animate-fade-in">
          <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-8">
            MindShare
          </p>
          <h1 className="text-ink font-black uppercase tracking-tight text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Think Out Loud. Build in Public.
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ink-soft leading-relaxed">
            MindShare is the content engine. It&rsquo;s how I think out
            loud, build in public, and give away the frameworks that took
            me 14 years to figure out. Free, forever, for anyone building
            toward the same horizon.
          </p>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Channels
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Four Ways In.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CHANNELS.map((c) => (
              <div key={c.title} className="card-base rounded-2xl p-8">
                <div className="text-4xl mb-5">{c.icon}</div>
                <h3 className="text-ink text-2xl font-bold uppercase tracking-wide mb-1">
                  {c.title}
                </h3>
                <p className="text-accent-teal text-xs uppercase tracking-wider mb-4">
                  {c.sub}
                </p>
                <p className="text-ink-soft leading-relaxed mb-6">{c.body}</p>
                <a
                  href={c.href}
                  className="inline-block cta-outline rounded-lg px-6 py-3 text-xs uppercase tracking-wider"
                >
                  {c.cta} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            Recurring Themes
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            What I&rsquo;m Thinking About.
          </h2>
          <div className="mt-12 space-y-4">
            {THEMES.map((t) => (
              <div
                key={t.n}
                className="card-base rounded-2xl p-6 md:p-8 flex gap-6 md:gap-10 items-start"
              >
                <p className="text-accent-teal text-4xl md:text-5xl font-black leading-none shrink-0">
                  {t.n}
                </p>
                <div>
                  <h3 className="text-ink text-xl md:text-2xl font-bold uppercase tracking-wide">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-ink-soft leading-relaxed">
                    {t.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <div className="rounded-3xl border border-accent-teal/40 bg-bg-card/60 p-10 md:p-16 text-center">
            <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-4">
              The Dispatch
            </p>
            <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
              One Weekly Email. No Noise.
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-ink-soft leading-relaxed">
              What I&rsquo;m building, what I&rsquo;m reading, what&rsquo;s
              live in the cohort, and where we&rsquo;re gathering next.
              Signal-dense. Unsubscribe whenever.
            </p>
            <a
              href="mailto:spencer@brainjam.io?subject=Subscribe%20to%20the%20Dispatch&body=Add%20me%20to%20the%20list."
              className="mt-10 inline-block cta-teal rounded-lg px-10 py-5 text-sm uppercase tracking-wider"
            >
              Subscribe &rarr;
            </a>
            <p className="mt-4 text-xs text-ink-muted">
              Email form coming soon. For now, click the button to email me
              directly.
            </p>
          </div>
        </div>
      </section>

      {/* ORACLE CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32 text-center">
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            Like What You&rsquo;re Reading?
          </h2>
          <p className="mt-6 text-accent-teal text-lg md:text-xl font-medium max-w-3xl mx-auto">
            The people inside the Oracle cohort get the content before
            anyone else &mdash; plus 1,000 days of direct access.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/oracle"
              className="cta-teal rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Build Your Oracle &rarr;
            </Link>
            <Link
              href="/join"
              className="cta-outline rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              See All Offers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
