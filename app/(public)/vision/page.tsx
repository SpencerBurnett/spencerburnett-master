import type { Metadata } from "next";

export const metadata: Metadata = { title: "The Vision" };

export default function VisionPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-24 md:py-32">
      <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-6">
        The Vision
      </p>
      <h1 className="text-ink font-black uppercase tracking-tight text-4xl md:text-6xl leading-tight max-w-4xl">
        January 1, 2029.
      </h1>
      <p className="mt-8 max-w-2xl text-lg text-ink-soft leading-relaxed">
        100 acres in Costa Rica. Casa Faro operational. First ring of villages.
        $4.5M raised. The Church of Amplifico legally structured. 1,000
        conscious creators inside the ecosystem. A 10/10 identity.
      </p>
      <p className="mt-6 text-sm text-accent-sepia italic">
        Full vision page &mdash; coming soon.
      </p>
    </section>
  );
}
