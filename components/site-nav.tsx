import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/oracle", label: "The Oracle" },
  { href: "/mission", label: "The Mission" },
  { href: "/vision", label: "The Vision" },
  { href: "/story", label: "My Story" },
];

export function SiteNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-border bg-bg-base/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-6">
        <Link
          href="/"
          className="font-bold tracking-[0.18em] text-ink uppercase text-sm"
        >
          Spencer Burnett
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft hover:text-accent-teal transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/oracle"
            className="cta-teal rounded-lg px-5 py-2.5 text-sm uppercase tracking-wider"
          >
            Join Now
          </Link>
        </div>
        <Link
          href="/oracle"
          className="cta-teal rounded-lg px-4 py-2 text-xs uppercase tracking-wider md:hidden"
        >
          Join
        </Link>
      </div>
    </nav>
  );
}
