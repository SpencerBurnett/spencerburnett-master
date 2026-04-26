import Link from "next/link";
import {
  myOracleBuild,
  projectStubs,
  type ProjectStub,
} from "@/data/projects/my-oracle-build";
import {
  masterChecklistProgress,
  assetProgress,
  activePhase,
  daysUntil,
  phaseProgress,
} from "@/lib/project-utils";
import { StatusPill } from "@/components/command/status-pill";
import { KpiCard } from "@/components/command/kpi-card";
import { cn } from "@/lib/utils";

export default function CommandDashboard() {
  const checklist = masterChecklistProgress(myOracleBuild);
  const assets = assetProgress(myOracleBuild);
  const phase = activePhase(myOracleBuild);
  const phasePct = phaseProgress(phase).pct;
  const daysToTarget = daysUntil(myOracleBuild.dates.target);

  const buildingCount = projectStubs.filter((p) => p.status === "Building").length;
  const stuckCount = projectStubs.filter((p) => p.status === "Stuck").length;
  const shippedCount = projectStubs.filter((p) => p.status === "Shipped").length;

  return (
    <div className="px-6 md:px-10 py-8 md:py-10 max-w-[1400px]">
      {/* HEADER */}
      <header className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent-teal mb-1">
            Mission Control
          </p>
          <h1 className="text-ink text-3xl md:text-4xl font-black uppercase tracking-tight">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-ink-muted">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="flex gap-2">
          <span className="rounded-lg border border-border bg-bg-card/60 px-3 py-1.5 text-xs text-ink-soft">
            {buildingCount} Building
          </span>
          {stuckCount > 0 && (
            <span className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-1.5 text-xs text-red-400">
              {stuckCount} Stuck
            </span>
          )}
          {shippedCount > 0 && (
            <span className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-400">
              {shippedCount} Shipped
            </span>
          )}
        </div>
      </header>

      {/* PRIMARY KPI GRID — focused on MY Oracle Build (the one with full data) */}
      <section className="mb-12">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-ink text-base md:text-lg font-bold uppercase tracking-wider">
            Flagship Project · {myOracleBuild.title}
          </h2>
          <Link
            href={`/command/projects/${myOracleBuild.slug}`}
            className="text-xs text-accent-teal hover:underline uppercase tracking-wider"
          >
            Open detail &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <KpiCard
            label="Status"
            value={myOracleBuild.status}
            sub="Auto-flips to Stuck after 7 days no movement"
            tone={myOracleBuild.status === "Stuck" ? "danger" : "teal"}
          />
          <KpiCard
            label="Master Checklist"
            value={`${checklist.done}/${checklist.total}`}
            unit={`${checklist.pct}%`}
            sub="Boxes ticked across all 12 phases"
          />
          <KpiCard
            label="Asset MoCs"
            value={`${assets.done}/${assets.total}`}
            unit={`${assets.pct}%`}
            sub="Real-world things shipped"
          />
          <KpiCard
            label="Active Phase"
            value={`${phase.num}`}
            unit={`${phasePct}%`}
            sub={phase.title}
            tone="sepia"
          />
          <KpiCard
            label="Days to Target"
            value={daysToTarget}
            unit="days"
            sub={`Target: ${myOracleBuild.dates.target}`}
            tone={daysToTarget < 60 ? "danger" : "default"}
          />
          <KpiCard
            label="Build Cost"
            value="$80–150"
            unit="/mo"
            sub="Personal + Video Vault + Voice"
            tone="gold"
          />
        </div>
      </section>

      {/* ALL PROJECTS GRID */}
      <section>
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-ink text-base md:text-lg font-bold uppercase tracking-wider">
            All Projects
          </h2>
          <Link
            href="/command/projects"
            className="text-xs text-accent-teal hover:underline uppercase tracking-wider"
          >
            View list &rarr;
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projectStubs.map((p) => (
            <ProjectCard key={p.slug} stub={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ stub }: { stub: ProjectStub }) {
  // For MY Oracle Build, we have rich data — pull progress numbers
  const isFlagship = stub.slug === myOracleBuild.slug;
  const progress = isFlagship ? masterChecklistProgress(myOracleBuild) : null;
  const phase = isFlagship ? activePhase(myOracleBuild) : null;

  return (
    <Link
      href={`/command/projects/${stub.slug}`}
      className={cn(
        "block rounded-2xl border bg-bg-card/60 p-5 transition-all hover:-translate-y-0.5",
        isFlagship
          ? "border-accent-teal/40 hover:border-accent-teal hover:shadow-[0_0_40px_rgba(0,206,201,0.15)]"
          : "border-border hover:border-ink-muted"
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-2xl shrink-0">{stub.icon}</span>
          <div className="min-w-0">
            <p className="text-ink font-bold truncate">{stub.title}</p>
          </div>
        </div>
        <StatusPill status={stub.status} />
      </div>
      <p className="text-xs text-ink-muted leading-relaxed line-clamp-2">
        {stub.oneLine}
      </p>
      {progress && phase && (
        <div className="mt-4 pt-4 border-t border-border space-y-3">
          <div>
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-ink-muted mb-1.5">
              <span>Master Checklist</span>
              <span className="text-ink font-bold">
                {progress.done}/{progress.total} · {progress.pct}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-bg-deep overflow-hidden">
              <div
                className="h-full bg-accent-teal"
                style={{ width: `${progress.pct}%` }}
              />
            </div>
          </div>
          <p className="text-[11px] text-accent-sepia">
            Active: Phase {phase.num} &middot; {phase.title}
          </p>
        </div>
      )}
    </Link>
  );
}
