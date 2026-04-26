import Link from "next/link";

const NAV = [
  { href: "/command", label: "Dashboard", icon: "🎛️" },
  { href: "/command/projects", label: "Projects", icon: "🚀" },
  { href: "/command/oracle", label: "Oracle", icon: "🧞" },
  { href: "/command/rolodex", label: "Rolodex", icon: "📇" },
  { href: "/command/calendar", label: "Calendar", icon: "📅" },
  { href: "/command/knowledge-base", label: "Knowledge Base", icon: "📚" },
  { href: "/command/agents", label: "Agents", icon: "🤖" },
  { href: "/command/resources", label: "Resources", icon: "📦" },
  { href: "/command/sandbox", label: "Sandbox", icon: "🏗️" },
];

export function CommandSidebar() {
  return (
    <aside className="hidden md:flex md:w-60 lg:w-64 shrink-0 flex-col border-r border-border bg-bg-deep h-screen sticky top-0">
      <div className="px-6 py-6 border-b border-border">
        <Link href="/command" className="block">
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent-teal">
            Mission Control
          </p>
          <p className="mt-1 text-ink font-bold uppercase tracking-[0.18em] text-sm">
            Spencer Burnett
          </p>
        </Link>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {NAV.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:text-ink hover:bg-bg-card transition-colors"
          >
            <span className="text-base leading-none w-5 text-center">
              {n.icon}
            </span>
            <span>{n.label}</span>
          </Link>
        ))}
      </nav>
      <div className="px-6 py-4 border-t border-border">
        <p className="text-[10px] uppercase tracking-wider text-ink-muted">
          Owner
        </p>
        <p className="mt-1 text-sm text-ink">spencer@brainjam.io</p>
      </div>
    </aside>
  );
}
