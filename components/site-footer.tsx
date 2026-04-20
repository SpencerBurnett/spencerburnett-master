import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-base mt-32">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-bold tracking-[0.18em] text-ink uppercase text-sm">
              Spencer Burnett
            </p>
            <p className="mt-3 text-sm text-ink-muted max-w-xs">
              Amplify the givers. Build the sovereign infrastructure. Arrive at
              January 1, 2029 ready.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-accent-sepia text-xs uppercase tracking-wider mb-3">
              Explore
            </p>
            <Link href="/oracle" className="block hover:text-accent-teal">
              The Oracle
            </Link>
            <Link href="/mission" className="block hover:text-accent-teal">
              The Mission
            </Link>
            <Link href="/vision" className="block hover:text-accent-teal">
              The Vision
            </Link>
            <Link href="/story" className="block hover:text-accent-teal">
              My Story
            </Link>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-accent-sepia text-xs uppercase tracking-wider mb-3">
              Contact
            </p>
            <a
              href="mailto:spencer@brainjam.io"
              className="block hover:text-accent-teal"
            >
              spencer@brainjam.io
            </a>
          </div>
        </div>
        <p className="mt-14 text-center text-accent-sepia italic text-sm">
          &ldquo;Jesus had a Batcave. Miracles need infrastructure.&rdquo;
        </p>
        <p className="mt-4 text-center text-xs text-ink-muted">
          © {new Date().getFullYear()} Spencer Burnett · BrainJam · Amplifico
        </p>
      </div>
    </footer>
  );
}
