import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export function PageHeader({
  crumbs,
  title,
  subtitle,
  right,
}: {
  crumbs: Crumb[];
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <header className="mb-10">
      <nav className="flex items-center gap-2 text-xs text-ink-muted mb-5">
        {crumbs.map((c, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {c.href ? (
              <Link href={c.href} className="hover:text-accent-teal">
                {c.label}
              </Link>
            ) : (
              <span className="text-ink">{c.label}</span>
            )}
          </span>
        ))}
      </nav>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-ink text-3xl md:text-4xl font-black uppercase tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>
          )}
        </div>
        {right && <div>{right}</div>}
      </div>
    </header>
  );
}
