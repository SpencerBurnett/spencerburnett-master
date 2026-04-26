import { subAgents } from "@/data/oracle";
import { PageHeader } from "@/components/command/page-header";
import { KpiCard } from "@/components/command/kpi-card";
import { cn } from "@/lib/utils";

export default function AgentsPage() {
  const liveCount = subAgents.filter((a) => a.status === "Live").length;
  const pendingCount = subAgents.filter((a) => a.status === "Pending").length;

  return (
    <div className="px-6 md:px-10 py-8 md:py-10 max-w-[1400px]">
      <PageHeader
        crumbs={[
          { label: "Mission Control", href: "/command" },
          { label: "Agents" },
        ]}
        title="Sub-Agents"
        subtitle="Specialized intelligences that report to Gary. Each has its own SOUL, IDENTITY, and skill stack."
      />

      <section className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard label="Total" value={subAgents.length} sub="Sub-agents in plan" />
        <KpiCard label="Live" value={liveCount} sub="Operational" tone="success" />
        <KpiCard label="Pending" value={pendingCount} sub="Phase 6 builds" tone="sepia" />
        <KpiCard label="Failed" value={0} sub="Nothing in alarm" tone="teal" />
      </section>

      <section className="space-y-3">
        {subAgents.map((a) => (
          <article
            key={a.slug}
            className={cn(
              "rounded-xl border bg-bg-card/60 p-6 flex flex-wrap md:flex-nowrap gap-5 items-start",
              a.status === "Live"
                ? "border-emerald-500/30"
                : "border-border"
            )}
          >
            <div className="text-4xl shrink-0">{a.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-ink text-xl font-bold">{a.name}</h3>
                <span
                  className={cn(
                    "text-[10px] uppercase tracking-wider rounded-full px-2.5 py-0.5 border",
                    a.status === "Live"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/40"
                      : "bg-accent-sepia/10 text-accent-sepia border-accent-sepia/30"
                  )}
                >
                  {a.status}
                </span>
              </div>
              <p className="mt-2 text-ink-soft leading-relaxed">{a.role}</p>
              <p className="mt-3 text-[11px] text-ink-muted font-mono">
                ~/.openclaw/workspace/agents/{a.slug}/
              </p>
            </div>
            <div className="md:w-44 shrink-0 flex md:flex-col gap-3 md:gap-1.5 text-xs">
              <p className="text-[10px] uppercase tracking-wider text-ink-muted">
                Inherits from
              </p>
              <p className="text-ink-soft font-mono">SOUL.md · IDENTITY.md</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
