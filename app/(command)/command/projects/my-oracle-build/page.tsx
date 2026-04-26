import Link from "next/link";
import {
  myOracleBuild,
  type Phase,
  type Asset,
} from "@/data/projects/my-oracle-build";
import {
  masterChecklistProgress,
  assetProgress,
  activePhase,
  phaseProgress,
  daysUntil,
  daysSince,
  assetsByCategory,
  formatDate,
  flattenPhaseItems,
} from "@/lib/project-utils";
import { StatusPill } from "@/components/command/status-pill";
import { KpiCard } from "@/components/command/kpi-card";
import { cn } from "@/lib/utils";

export default function MyOracleBuildPage() {
  const p = myOracleBuild;
  const checklist = masterChecklistProgress(p);
  const assetsP = assetProgress(p);
  const activeP = activePhase(p);
  const activePct = phaseProgress(activeP).pct;
  const daysToTarget = daysUntil(p.dates.target);
  const daysSinceKickoff = daysSince(p.dates.kickoff);
  const totalDays = daysToTarget + daysSinceKickoff;
  const elapsedPct = totalDays > 0
    ? Math.round((daysSinceKickoff / totalDays) * 100)
    : 0;

  const grouped = assetsByCategory(p);
  const categories = Object.keys(grouped);

  return (
    <div className="px-6 md:px-10 py-8 md:py-10 max-w-[1400px]">
      {/* BREADCRUMB */}
      <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6">
        <Link href="/command" className="hover:text-accent-teal">
          Mission Control
        </Link>
        <span>/</span>
        <Link href="/command/projects" className="hover:text-accent-teal">
          Projects
        </Link>
        <span>/</span>
        <span className="text-ink">{p.title}</span>
      </nav>

      {/* HEADER */}
      <header className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="text-5xl">{p.icon}</span>
          <div>
            <h1 className="text-ink text-3xl md:text-4xl font-black uppercase tracking-tight">
              {p.title}
            </h1>
            <p className="mt-1 text-sm text-ink-muted">
              Owner · {p.people.find((x) => x.role === "Owner")?.person} ·
              Builder · {p.people.find((x) => x.role.startsWith("Builder · primary"))?.person}
            </p>
          </div>
        </div>
        <StatusPill status={p.status} size="md" />
      </header>

      {/* MOMENT OF COMPLETION BANNER */}
      <section
        className={cn(
          "mb-10 rounded-2xl border-2 p-6 md:p-8",
          p.moc.achieved
            ? "border-emerald-500/50 bg-emerald-500/5"
            : "border-accent-gold/40 bg-accent-gold/5"
        )}
      >
        <div className="flex items-start gap-5">
          <div className="shrink-0">
            <div
              className={cn(
                "w-10 h-10 rounded-lg border-2 flex items-center justify-center text-lg",
                p.moc.achieved
                  ? "border-emerald-400 bg-emerald-400 text-bg-base"
                  : "border-accent-gold/60 bg-bg-card"
              )}
            >
              {p.moc.achieved ? "✓" : ""}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-accent-gold text-[10px] uppercase tracking-[0.3em] mb-2">
              🎯 Moment of Completion
            </p>
            <p className="text-ink text-base md:text-lg leading-relaxed font-medium">
              {p.moc.description}
            </p>
            <p className="mt-3 text-xs text-ink-muted italic">
              <span className="text-accent-sepia">Snapshot:</span>{" "}
              {p.moc.snapshot}
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-wider text-ink-muted">
              If this checkbox isn&rsquo;t ticked, the project isn&rsquo;t
              done. No exceptions.
            </p>
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="mb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <KpiCard
            label="Master Checklist"
            value={`${checklist.done}/${checklist.total}`}
            unit={`${checklist.pct}%`}
            sub="Boxes ticked"
          />
          <KpiCard
            label="Asset MoCs"
            value={`${assetsP.done}/${assetsP.total}`}
            unit={`${assetsP.pct}%`}
            sub="Real-world things shipped"
          />
          <KpiCard
            label="Active Phase"
            value={activeP.num}
            unit={`${activePct}%`}
            sub={activeP.title}
            tone="sepia"
          />
          <KpiCard
            label="Days In"
            value={daysSinceKickoff}
            unit="days"
            sub={`Since ${formatDate(p.dates.kickoff)}`}
          />
          <KpiCard
            label="Days to Target"
            value={daysToTarget}
            unit="days"
            sub={formatDate(p.dates.target)}
            tone={daysToTarget < 60 ? "danger" : "default"}
          />
          <KpiCard
            label="Timeline"
            value={`${elapsedPct}%`}
            unit="elapsed"
            sub={`${daysSinceKickoff}d in / ${daysToTarget}d left`}
            tone="teal"
          />
        </div>
      </section>

      {/* WIDGET GRID */}
      <section className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* PURPOSE */}
        <Widget title="Purpose" tone="teal">
          <ul className="space-y-2.5 text-sm text-ink-soft leading-relaxed">
            {p.purpose.map((bullet, i) => (
              <li key={i} className="flex gap-2.5">
                <span className="text-accent-teal shrink-0 mt-0.5">▸</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </Widget>

        {/* MONEY */}
        <Widget title="Money" tone="gold">
          <dl className="space-y-2.5 text-sm">
            <Row label="Build cost" value={p.money.buildCostMonthly} />
            <Row label="One-time hardware" value={p.money.oneTimeHardware} />
            <Row label="Revenue Year 1" value={p.money.revenueYear1} />
            <Row label="Target MRR" value={p.money.revenueTargetMRR} />
          </dl>
          <p className="mt-4 pt-3 border-t border-border text-[11px] text-accent-sepia leading-relaxed italic">
            {p.money.strategicValue}
          </p>
        </Widget>

        {/* PEOPLE */}
        <Widget title="People & Roles">
          <ul className="space-y-2.5 text-sm">
            {p.people.map((person, i) => (
              <li key={i} className="flex flex-col gap-0.5">
                <span className="text-[10px] uppercase tracking-wider text-ink-muted">
                  {person.role}
                </span>
                <span className="text-ink-soft">{person.person}</span>
              </li>
            ))}
          </ul>
        </Widget>

        {/* SUB-TIMELINES */}
        <Widget title="Sub-Timelines" tone="sepia">
          <ul className="space-y-3 text-sm">
            {p.dates.subTimelines.map((t, i) => (
              <li key={i}>
                <p className="text-ink font-medium">{t.name}</p>
                <p className="text-[11px] text-ink-muted mt-0.5">{t.range}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 pt-3 border-t border-border text-[11px] text-ink-muted">
            Kickoff &middot; {formatDate(p.dates.kickoff)}
            <br />
            Target &middot; {formatDate(p.dates.target)}
          </p>
        </Widget>

        {/* DRIFT ALARMS */}
        <Widget title="Drift Alarms" tone="danger">
          <ul className="space-y-2.5 text-sm">
            {p.driftAlarms.map((alarm, i) => (
              <li key={i} className="flex gap-2.5 text-ink-soft leading-relaxed">
                <span className="text-red-400 shrink-0">🔴</span>
                <span className="text-[13px]">{alarm}</span>
              </li>
            ))}
          </ul>
        </Widget>

        {/* CROSS-CUTTING */}
        <Widget title="Cross-Cutting">
          <ul className="space-y-3 text-sm">
            {p.crossCutting.map((c, i) => (
              <li key={i}>
                <p className="text-ink font-medium">{c.title}</p>
                <p className="text-[12px] text-ink-muted leading-relaxed mt-0.5">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </Widget>
      </section>

      {/* ASSETS */}
      <section className="mb-10">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-ink text-base md:text-lg font-bold uppercase tracking-wider">
            Assets &middot;{" "}
            <span className="text-accent-teal">{assetsP.done}</span>
            <span className="text-ink-muted"> / {assetsP.total} done</span>
          </h2>
          <p className="text-[11px] text-ink-muted">
            The nouns. Things that exist when this ships.
          </p>
        </div>
        <div className="space-y-6">
          {categories.map((cat) => (
            <div key={cat}>
              <p className="text-accent-sepia text-[10px] uppercase tracking-[0.2em] mb-3">
                {cat} &middot; {grouped[cat].filter((a) => a.done).length}/
                {grouped[cat].length}
              </p>
              <div className="grid gap-2.5 md:grid-cols-2 lg:grid-cols-3">
                {grouped[cat].map((a) => (
                  <AssetTile key={a.name} asset={a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IKEA MANUAL */}
      <section>
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-ink text-base md:text-lg font-bold uppercase tracking-wider">
            Master Checklist &middot;{" "}
            <span className="text-accent-teal">{checklist.done}</span>
            <span className="text-ink-muted"> / {checklist.total}</span>
          </h2>
          <p className="text-[11px] text-ink-muted">
            The IKEA manual. Sequential. Click any phase to expand.
          </p>
        </div>
        <div className="space-y-2">
          {p.phases.map((phase) => (
            <PhaseAccordion
              key={phase.num}
              phase={phase}
              isActive={phase.num === activeP.num}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/* INLINE COMPONENTS — kept in this file so the layout reads top-down. */
/* ─────────────────────────────────────────────────────────────────── */

function Widget({
  title,
  tone = "default",
  children,
}: {
  title: string;
  tone?: "default" | "teal" | "sepia" | "gold" | "danger";
  children: React.ReactNode;
}) {
  const accent = {
    default: "border-border",
    teal: "border-accent-teal/30",
    sepia: "border-accent-sepia/30",
    gold: "border-accent-gold/30",
    danger: "border-red-500/30",
  } as const;
  const headColor = {
    default: "text-ink-muted",
    teal: "text-accent-teal",
    sepia: "text-accent-sepia",
    gold: "text-accent-gold",
    danger: "text-red-400",
  } as const;
  return (
    <div className={cn("rounded-xl border bg-bg-card/60 p-5", accent[tone])}>
      <p
        className={cn(
          "text-[10px] uppercase tracking-[0.2em] mb-4",
          headColor[tone]
        )}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-border pb-2 last:border-0 last:pb-0">
      <dt className="text-ink-muted text-[11px] uppercase tracking-wider">
        {label}
      </dt>
      <dd className="text-ink-soft text-right">{value}</dd>
    </div>
  );
}

function AssetTile({ asset }: { asset: Asset }) {
  return (
    <div
      className={cn(
        "rounded-lg border p-3.5 flex gap-3 items-start transition-colors",
        asset.done
          ? "border-emerald-500/30 bg-emerald-500/5"
          : "border-border bg-bg-card/40"
      )}
    >
      <div
        className={cn(
          "shrink-0 w-5 h-5 rounded border-2 mt-0.5 flex items-center justify-center text-[10px]",
          asset.done
            ? "border-emerald-400 bg-emerald-400 text-bg-base"
            : "border-ink-muted/40"
        )}
      >
        {asset.done ? "✓" : ""}
      </div>
      <div className="min-w-0">
        <p
          className={cn(
            "font-bold text-sm leading-tight",
            asset.done ? "text-emerald-300 line-through" : "text-ink"
          )}
        >
          {asset.name}
        </p>
        <p className="mt-1 text-[11px] text-ink-muted leading-relaxed">
          <span className="text-accent-sepia">MoC:</span> {asset.moc}
        </p>
      </div>
    </div>
  );
}

function PhaseAccordion({
  phase,
  isActive,
}: {
  phase: Phase;
  isActive: boolean;
}) {
  const items = flattenPhaseItems(phase);
  const done = items.filter((i) => i.done).length;
  const pct = items.length === 0 ? 0 : Math.round((done / items.length) * 100);
  return (
    <details
      open={isActive}
      className={cn(
        "group rounded-xl border bg-bg-card/40 overflow-hidden",
        isActive ? "border-accent-teal/40" : "border-border"
      )}
    >
      <summary className="cursor-pointer list-none px-5 py-4 flex items-center gap-4 hover:bg-bg-card/80 transition-colors">
        <div
          className={cn(
            "shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-black text-lg",
            isActive
              ? "bg-accent-teal/15 text-accent-teal border border-accent-teal/40"
              : pct === 100
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                : "bg-bg-deep text-ink-muted border border-border"
          )}
        >
          {phase.num}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-ink font-bold uppercase tracking-wide text-sm md:text-base">
            {phase.title}
          </p>
          <p className="text-[11px] text-ink-muted mt-0.5">
            {phase.weeks} &middot; {done}/{items.length} done
            {isActive && (
              <span className="ml-2 text-accent-teal uppercase tracking-wider">
                · Active
              </span>
            )}
          </p>
        </div>
        <div className="hidden md:block w-32 shrink-0">
          <div className="h-1.5 rounded-full bg-bg-deep overflow-hidden">
            <div
              className={cn(
                "h-full transition-all",
                pct === 100
                  ? "bg-emerald-500"
                  : isActive
                    ? "bg-accent-teal"
                    : "bg-ink-muted/40"
              )}
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-1 text-[10px] text-right text-ink-muted">
            {pct}%
          </p>
        </div>
        <div className="shrink-0 text-ink-muted group-open:rotate-90 transition-transform text-lg">
          ›
        </div>
      </summary>
      <div className="border-t border-border px-5 py-4 space-y-3 bg-bg-deep/40">
        {phase.items && (
          <ChecklistItems items={phase.items} />
        )}
        {phase.subsections &&
          phase.subsections.map((sub) => (
            <div key={sub.name}>
              <p className="text-accent-sepia text-[10px] uppercase tracking-[0.2em] mb-2 mt-2">
                {sub.name}
              </p>
              <ChecklistItems items={sub.items} />
            </div>
          ))}
      </div>
    </details>
  );
}

function ChecklistItems({
  items,
}: {
  items: { text: string; done: boolean }[];
}) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start text-sm">
          <div
            className={cn(
              "shrink-0 w-4 h-4 rounded border-2 mt-0.5 flex items-center justify-center text-[9px]",
              item.done
                ? "border-emerald-400 bg-emerald-400 text-bg-base"
                : "border-ink-muted/40"
            )}
          >
            {item.done ? "✓" : ""}
          </div>
          <span
            className={cn(
              "leading-relaxed",
              item.done ? "text-ink-muted line-through" : "text-ink-soft"
            )}
          >
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
