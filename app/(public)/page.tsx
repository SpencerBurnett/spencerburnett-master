import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-content px-6 py-24 md:py-32 animate-fade-in">
      <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-6">
        1,000 Days to January 1, 2029
      </p>
      <h1 className="text-ink font-black uppercase tracking-tight text-5xl md:text-7xl leading-[1.05] max-w-4xl">
        I Amplify the Impact of Mission-Driven Entrepreneurs.
      </h1>
      <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-soft leading-relaxed">
        The singularity is here. Most of the software you use today will not
        exist in three years. Most of the jobs people hold today will not
        exist in three years. The window to build your own sovereign
        infrastructure &mdash; your own AI, your own community, your own life
        &mdash; is open now.
      </p>
      <p className="mt-6 max-w-2xl text-lg text-ink-soft leading-relaxed">
        I&rsquo;m looking for 1,000 conscious creators who want to walk this
        path with me.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/oracle"
          className="cta-teal rounded-lg px-8 py-4 text-sm uppercase tracking-wider text-center"
        >
          Build Your Oracle &rarr;
        </Link>
        <Link
          href="/story"
          className="cta-outline rounded-lg px-8 py-4 text-sm uppercase tracking-wider text-center"
        >
          Read My Story
        </Link>
      </div>
    </section>
  );
}
