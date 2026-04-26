import {
  oracleConfig,
  identityFiles,
  llmProviders,
  tools,
  heartbeat,
  cronJobs,
  channels,
  subAgents,
} from "@/data/oracle";
import { PageHeader } from "@/components/command/page-header";
import { KpiCard } from "@/components/command/kpi-card";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function OracleDashboard() {
  const liveLLMs = llmProviders.filter((l) => l.status === "Active").length;
  const healthyCrons = cronJobs.filter((c) => c.status === "Healthy").length;
  const liveTools = tools.filter((t) => t.status === "Live").length;
  const liveAgents = subAgents.filter((a) => a.status === "Live").length;

  return (
    <div className="px-6 md:px-10 py-8 md:py-10 max-w-[1400px]">
      <PageHeader
        crumbs={[
          { label: "Mission Control", href: "/command" },
          { label: "Oracle" },
        ]}
        title="The Oracle"
        subtitle={`${oracleConfig.name} · ${oracleConfig.creatureType}`}
        right={
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {oracleConfig.status} · last heartbeat {oracleConfig.lastHeartbeat}
          </span>
        }
      />

      {/* IDENTITY HEADER CARD */}
      <section className="mb-10 rounded-2xl border border-accent-teal/40 bg-bg-card/60 p-6 md:p-8">
        <div className="flex items-start gap-6">
          <span className="text-6xl">{oracleConfig.emoji}</span>
          <div className="flex-1 min-w-0 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-accent-teal text-[10px] uppercase tracking-[0.3em] mb-2">
                Identity
              </p>
              <p className="text-ink text-2xl font-bold">{oracleConfig.name}</p>
              <p className="text-ink-soft text-sm mt-1">{oracleConfig.role}</p>
            </div>
            <div>
              <p className="text-accent-sepia text-[10px] uppercase tracking-[0.3em] mb-2">
                Workspace
              </p>
              <p className="text-ink-soft text-sm font-mono">
                {oracleConfig.workspacePath}
              </p>
              <p className="text-ink-muted text-xs mt-2">
                Creator · {oracleConfig.creator}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KPI STRIP */}
      <section className="mb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <KpiCard label="Identity Files" value={identityFiles.length} sub="All committed" tone="teal" />
        <KpiCard label="LLM Providers" value={liveLLMs} unit={`/${llmProviders.length}`} sub="Active" />
        <KpiCard label="Tools" value={liveTools} unit={`/${tools.length}`} sub="Live in toolbox" />
        <KpiCard
          label="Cron Jobs"
          value={healthyCrons}
          unit={`/${cronJobs.length}`}
          sub="Healthy"
          tone={healthyCrons === cronJobs.length ? "success" : "default"}
        />
        <KpiCard
          label="Heartbeat"
          value={`${heartbeat.intervalMinutes}m`}
          sub={`Window ${heartbeat.activeWindow.start}–${heartbeat.activeWindow.end}`}
          tone="sepia"
        />
        <KpiCard
          label="Sub-Agents"
          value={liveAgents}
          unit={`/${subAgents.length}`}
          sub="Live (rest pending Phase 6)"
          tone={liveAgents < subAgents.length ? "danger" : "success"}
        />
      </section>

      {/* IDENTITY FILES + HEARTBEAT */}
      <section className="mb-10 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-bg-card/60 p-6">
          <p className="text-accent-teal text-[10px] uppercase tracking-[0.2em] mb-4">
            Identity Files (~/.openclaw/workspace)
          </p>
          <ul className="divide-y divide-border">
            {identityFiles.map((f) => (
              <li key={f.name} className="py-3 flex items-start gap-4">
                <span className="font-mono text-ink text-sm shrink-0 w-36">
                  {f.name}
                </span>
                <span className="text-ink-soft text-sm flex-1">
                  {f.purpose}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400">
                  {f.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-bg-card/60 p-6">
          <div className="flex items-baseline justify-between mb-4">
            <p className="text-accent-sepia text-[10px] uppercase tracking-[0.2em]">
              Heartbeat
            </p>
            <p className="text-[10px] text-ink-muted">
              every {heartbeat.intervalMinutes} min ·{" "}
              {heartbeat.activeWindow.start}–{heartbeat.activeWindow.end}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="rounded-lg border border-border p-3">
              <p className="text-[10px] uppercase tracking-wider text-ink-muted">
                Last fired
              </p>
              <p className="text-ink font-bold mt-1 text-sm">
                {heartbeat.lastFired}
              </p>
            </div>
            <div className="rounded-lg border border-border p-3">
              <p className="text-[10px] uppercase tracking-wider text-ink-muted">
                Next firing
              </p>
              <p className="text-ink font-bold mt-1 text-sm">
                {heartbeat.nextFiring}
              </p>
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-wider text-ink-muted mb-2">
            Each heartbeat checks
          </p>
          <ul className="space-y-1.5">
            {heartbeat.checks.map((c, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-sm text-ink-soft leading-relaxed"
              >
                <span className="text-accent-teal shrink-0">▸</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LLM PROVIDERS + CRON JOBS */}
      <section className="mb-10 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-bg-card/60 p-6">
          <p className="text-accent-teal text-[10px] uppercase tracking-[0.2em] mb-4">
            LLM Providers (the brains Gary calls)
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {llmProviders.map((l) => (
                  <tr key={l.name} className="border-b border-border last:border-0">
                    <td className="py-2.5 pr-3 text-ink font-medium">
                      {l.name}
                    </td>
                    <td className="py-2.5 pr-3 text-ink-muted text-xs">
                      {l.provider}
                    </td>
                    <td className="py-2.5 pr-3 text-ink-soft text-xs hidden md:table-cell">
                      {l.role}
                    </td>
                    <td className="py-2.5 text-right">
                      <StatusDot status={l.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-bg-card/60 p-6">
          <p className="text-accent-sepia text-[10px] uppercase tracking-[0.2em] mb-4">
            Cron Jobs (~/.openclaw/cron/jobs.json)
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {cronJobs.map((c) => (
                  <tr key={c.id} className="border-b border-border last:border-0">
                    <td className="py-2.5 pr-3 text-accent-teal font-mono text-xs whitespace-nowrap">
                      {c.time}
                    </td>
                    <td className="py-2.5 pr-3 text-ink font-medium">
                      {c.title}
                    </td>
                    <td className="py-2.5 pr-3 text-ink-muted text-xs hidden md:table-cell">
                      {c.model} · {c.channel}
                    </td>
                    <td className="py-2.5 text-right">
                      <StatusDot status={c.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CHANNELS + TOOLS */}
      <section className="mb-10 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-bg-card/60 p-6">
          <p className="text-accent-teal text-[10px] uppercase tracking-[0.2em] mb-4">
            Communication Channels
          </p>
          <ul className="space-y-2.5">
            {channels.map((c) => (
              <li
                key={c.name}
                className="flex items-center gap-3 text-sm border-b border-border pb-2.5 last:border-0 last:pb-0"
              >
                <span className="text-ink font-medium flex-1">{c.name}</span>
                <span className="text-ink-muted text-xs hidden md:inline">
                  {c.purpose}
                </span>
                <StatusDot status={c.status} />
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-bg-card/60 p-6">
          <p className="text-accent-sepia text-[10px] uppercase tracking-[0.2em] mb-4">
            Toolbox · {liveTools}/{tools.length} live
          </p>
          <div className="grid grid-cols-2 gap-2">
            {tools.map((t) => (
              <div
                key={t.name}
                className="rounded-lg border border-border bg-bg-deep/40 px-3 py-2 flex items-center justify-between text-xs"
              >
                <span
                  className={cn(
                    "font-medium",
                    t.status === "Live" ? "text-ink" : "text-ink-muted"
                  )}
                >
                  {t.name}
                </span>
                <StatusDot status={t.status} compact />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUB-AGENTS PREVIEW */}
      <section>
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-ink text-base md:text-lg font-bold uppercase tracking-wider">
            Sub-Agents
          </h2>
          <Link
            href="/command/agents"
            className="text-xs text-accent-teal hover:underline uppercase tracking-wider"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {subAgents.map((a) => (
            <Link
              key={a.slug}
              href={`/command/agents`}
              className={cn(
                "rounded-xl border bg-bg-card/60 p-4 hover:border-accent-teal/50 transition-colors",
                a.status === "Live"
                  ? "border-emerald-500/30"
                  : "border-border"
              )}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-2xl">{a.icon}</span>
                <StatusDot status={a.status} />
              </div>
              <p className="text-ink font-bold text-sm">{a.name}</p>
              <p className="mt-1 text-[11px] text-ink-muted leading-relaxed line-clamp-2">
                {a.role}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatusDot({ status, compact = false }: { status: string; compact?: boolean }) {
  const map: Record<string, { color: string; label: string }> = {
    Active: { color: "bg-emerald-500", label: "Active" },
    Live: { color: "bg-emerald-500", label: "Live" },
    Healthy: { color: "bg-emerald-500", label: "Healthy" },
    Pending: { color: "bg-accent-sepia", label: "Pending" },
    Standby: { color: "bg-accent-sepia", label: "Standby" },
    Deprecated: { color: "bg-ink-muted", label: "Deprecated" },
  };
  const fallback = { color: "bg-ink-muted", label: status };
  const { color, label } = map[status] || fallback;
  if (compact) {
    return <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", color)} />;
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-ink-muted">
      <span className={cn("w-1.5 h-1.5 rounded-full", color)} />
      {label}
    </span>
  );
}
