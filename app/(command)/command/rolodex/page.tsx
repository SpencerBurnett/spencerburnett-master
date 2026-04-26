import { contacts, stats } from "@/data/rolodex";
import { PageHeader } from "@/components/command/page-header";
import { KpiCard } from "@/components/command/kpi-card";
import { cn } from "@/lib/utils";

export default function RolodexPage() {
  return (
    <div className="px-6 md:px-10 py-8 md:py-10 max-w-[1400px]">
      <PageHeader
        crumbs={[
          { label: "Mission Control", href: "/command" },
          { label: "Rolodex" },
        ]}
        title="Rolodex"
        subtitle="Top-energy relationships. Every relationship tracked with last contact + next action."
      />

      <section className="mb-10 grid grid-cols-2 md:grid-cols-5 gap-3">
        <KpiCard label="Total" value={stats.total} sub="In Rolodex" />
        <KpiCard label="Tier 1" value={stats.tier1} sub="Highest leverage" tone="gold" />
        <KpiCard label="Active" value={stats.active} sub="In active orbit" tone="success" />
        <KpiCard label="Pipeline" value={stats.pipeline} sub="Onboarding / pipeline" tone="teal" />
        <KpiCard label="Cooling" value={stats.cooling} sub="Need a touch" tone="sepia" />
      </section>

      <section className="rounded-2xl border border-border bg-bg-card/40 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="border-b border-border bg-bg-deep">
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-wider text-ink-muted font-bold">Person</th>
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-wider text-ink-muted font-bold">Tier</th>
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-wider text-ink-muted font-bold">Stage</th>
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-wider text-ink-muted font-bold">Last Contact</th>
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-wider text-ink-muted font-bold">Next Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c, i) => (
                <tr
                  key={c.id}
                  className={cn(
                    "border-b border-border last:border-0 hover:bg-bg-card/40 transition-colors",
                    i % 2 === 0 && "bg-bg-card/20"
                  )}
                >
                  <td className="px-5 py-4">
                    <p className="text-ink font-bold">{c.name}</p>
                    <p className="text-[11px] text-ink-muted leading-tight mt-0.5 line-clamp-2 max-w-md">
                      {c.role}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <TierPill tier={c.tier} />
                  </td>
                  <td className="px-5 py-4">
                    <StagePill stage={c.stage} />
                  </td>
                  <td className="px-5 py-4 text-ink-soft text-xs whitespace-nowrap">
                    {c.lastContact}
                  </td>
                  <td className="px-5 py-4 text-ink-soft text-xs">
                    <p className="line-clamp-2 max-w-xs">{c.nextAction}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function TierPill({ tier }: { tier: string }) {
  const cls = {
    "Tier 1": "bg-accent-gold/10 text-accent-gold border-accent-gold/40",
    "Tier 2": "bg-accent-teal/10 text-accent-teal border-accent-teal/40",
    "Tier 3": "bg-bg-card text-ink-muted border-border",
    Client: "bg-emerald-500/10 text-emerald-400 border-emerald-500/40",
    Partner: "bg-accent-sepia/10 text-accent-sepia border-accent-sepia/40",
  } as Record<string, string>;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
        cls[tier] || cls["Tier 3"]
      )}
    >
      {tier}
    </span>
  );
}

function StagePill({ stage }: { stage: string }) {
  const dotCls: Record<string, string> = {
    Active: "bg-emerald-500",
    Onboarding: "bg-accent-teal",
    Pipeline: "bg-accent-teal",
    "Closed-Won": "bg-emerald-500",
    Warm: "bg-accent-sepia",
    Cooling: "bg-red-400",
  };
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-ink-soft">
      <span className={cn("w-1.5 h-1.5 rounded-full", dotCls[stage] || "bg-ink-muted")} />
      {stage}
    </span>
  );
}
