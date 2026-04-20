import type { Metadata } from "next";

export const metadata: Metadata = { title: "The Mission" };

export default function MissionPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-24 md:py-32">
      <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-6">
        The Mission
      </p>
      <h1 className="text-ink font-black uppercase tracking-tight text-4xl md:text-6xl leading-tight max-w-4xl">
        Amplify the Givers.
      </h1>
      <p className="mt-8 max-w-2xl text-lg text-ink-soft leading-relaxed">
        1,000 conscious creators. Full sovereignty by January 1, 2029. Digital,
        financial, physical, community. A mesh of nodes no one can break.
      </p>
      <p className="mt-6 text-sm text-accent-sepia italic">
        Full mission page &mdash; coming soon.
      </p>
    </section>
  );
}
