import type { Metadata } from "next";

export const metadata: Metadata = { title: "My Story" };

export default function StoryPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-24 md:py-32">
      <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-6">
        My Story
      </p>
      <h1 className="text-ink font-black uppercase tracking-tight text-4xl md:text-6xl leading-tight max-w-4xl">
        The Wizard.
      </h1>
      <p className="mt-8 max-w-2xl text-lg text-ink-soft leading-relaxed">
        Spencer M. Burnett. The &ldquo;M&rdquo; is for Merlin. Mentor, shaman,
        prophet, beacon of light. BrainJam since 2009. EXECUTE engine.
        Amplifico mission. Here to amplify the givers and scale wisdom across
        the globe.
      </p>
      <p className="mt-6 text-sm text-accent-sepia italic">
        Full story page &mdash; coming soon.
      </p>
    </section>
  );
}
