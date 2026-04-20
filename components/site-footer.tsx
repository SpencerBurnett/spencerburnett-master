import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-base mt-32">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-bold tracking-[0.18em] text-ink uppercase text-sm">
              Spencer Burnett
            </p>
            <p className="mt-3 text-sm text-ink-muted max-w-xs leading-relaxed">
              Amplify the givers. Build the sovereign infrastructure. Arrive
              at January 1, 2029 ready.
            </p>
            <p className="mt-6 text-xs text-accent-sepia italic">
              &ldquo;Jesus had a Batcave. Miracles need infrastructure.&rdquo;
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-accent-sepia text-xs uppercase tracking-wider mb-3">
              Offerings
            </p>
            <Link href="/oracle" className="block hover:text-accent-teal">
              The Oracle
            </Link>
            <Link href="/join" className="block hover:text-accent-teal">
              Join (All Offers)
            </Link>
            <Link href="/events" className="block hover:text-accent-teal">
              Events
            </Link>
            <Link href="/mindshare" className="block hover:text-accent-teal">
              MindShare
            </Link>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-accent-sepia text-xs uppercase tracking-wider mb-3">
              About
            </p>
            <Link href="/story" className="block hover:text-accent-teal">
              My Story
            </Link>
            <Link href="/mission" className="block hover:text-accent-teal">
              The Mission
            </Link>
            <Link href="/vision" className="block hover:text-accent-teal">
              The Vision
            </Link>
            <Link href="/amplifico" className="block hover:text-accent-teal">
              Amplifico
            </Link>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Spencer Burnett · BrainJam ·
            Amplifico
          </p>
          <a
            href="mailto:spencer@brainjam.io"
            className="text-xs text-ink-muted hover:text-accent-teal"
          >
            spencer@brainjam.io
          </a>
        </div>
      </div>
    </footer>
  );
}
