import { PageHeader } from "@/components/command/page-header";
import { KpiCard } from "@/components/command/kpi-card";
import { cn } from "@/lib/utils";

const TODAY = [
  { time: "07:00", title: "Morning Brief (Gary cron)", type: "ritual" },
  { time: "09:00", title: "Action Planning · Solo block", type: "deep-work" },
  { time: "11:00", title: "Task Tracker (Gary cron)", type: "ritual" },
  { time: "13:00", title: "ECMR · Beau + Kyle weekly", type: "client" },
  { time: "14:30", title: "Jason · Co-CEO sync", type: "tier-1" },
  { time: "16:00", title: "Body movement · Heavy bag + mace", type: "body" },
  { time: "18:30", title: "Power Lunch (carryover)", type: "community" },
  { time: "21:00", title: "WIP Report (Gary cron)", type: "ritual" },
  { time: "22:00", title: "Daily Journal (Gary cron)", type: "ritual" },
  { time: "22:30", title: "Queen reflection", type: "ritual" },
];

const UPCOMING_MAJOR = [
  { date: "Jun 6–9, 2026", title: "Body Party · Summer I", location: "TBD", category: "Body" },
  { date: "Jul 18–21, 2026", title: "Body Party · Summer II", location: "TBD", category: "Body" },
  { date: "Aug 25 – Sep 1, 2026", title: "Burning Man 2026", location: "Black Rock City", category: "Festival" },
  { date: "Sep 12–15, 2026", title: "Body Party · Fall", location: "TBD", category: "Body" },
  { date: "Oct 2026", title: "Costa Rica land scout · Round 1", location: "Costa Rica", category: "Land" },
  { date: "Q4 2026", title: "Vision Party (annual)", location: "Austin", category: "Cohort" },
];

const RHYTHMS = [
  { name: "Action Planning", cadence: "Mondays · 09:00", status: "Live" },
  { name: "Reach Outs", cadence: "Wednesdays · 14:00", status: "Live" },
  { name: "Power Lunch", cadence: "Fridays · 12:30", status: "Live" },
  { name: "Co-Working (Austin + Zoom)", cadence: "Tuesdays + Thursdays · 13:00", status: "Live" },
  { name: "Deal Flow Brain Jam", cadence: "1st Thursday of month · 15:00", status: "Live" },
  { name: "Pitch Party", cadence: "Bi-monthly", status: "Active" },
];

export default function CalendarPage() {
  return (
    <div className="px-6 md:px-10 py-8 md:py-10 max-w-[1400px]">
      <PageHeader
        crumbs={[
          { label: "Mission Control", href: "/command" },
          { label: "Calendar" },
        ]}
        title="Calendar"
        subtitle={new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        right={
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-teal/40 bg-accent-teal/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-accent-teal">
            Google Calendar live
          </span>
        }
      />

      <section className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard label="Today" value={TODAY.length} sub="Blocks scheduled" tone="teal" />
        <KpiCard label="This week" value={32} sub="Across all calendars" />
        <KpiCard label="Major Events" value={UPCOMING_MAJOR.length} sub="2026 flagships" tone="gold" />
        <KpiCard label="Rituals" value={RHYTHMS.length} sub="Recurring weekly cadences" tone="sepia" />
      </section>

      {/* TODAY */}
      <section className="mb-10 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-bg-card/60 p-6">
          <div className="flex items-baseline justify-between mb-5">
            <p className="text-accent-teal text-[10px] uppercase tracking-[0.2em]">
              Today's blocks
            </p>
            <p className="text-[11px] text-ink-muted">
              Auto-pre-briefed 10 min before each meeting
            </p>
          </div>
          <ul className="divide-y divide-border">
            {TODAY.map((t, i) => (
              <li
                key={i}
                className="py-3 flex items-start gap-4 hover:bg-bg-deep/30 -mx-2 px-2 rounded transition-colors"
              >
                <span className="font-mono text-accent-teal text-sm shrink-0 w-14">
                  {t.time}
                </span>
                <span className="text-ink flex-1">{t.title}</span>
                <TypePill type={t.type} />
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-bg-card/60 p-6">
          <p className="text-accent-sepia text-[10px] uppercase tracking-[0.2em] mb-4">
            Weekly Rhythms
          </p>
          <ul className="space-y-3.5">
            {RHYTHMS.map((r) => (
              <li key={r.name} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <p className="text-ink font-medium text-sm">{r.name}</p>
                <p className="text-[11px] text-ink-muted mt-1">{r.cadence}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* UPCOMING MAJOR */}
      <section>
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-ink text-base md:text-lg font-bold uppercase tracking-wider">
            Upcoming · 2026 Flagships
          </h2>
          <p className="text-[11px] text-ink-muted">
            All members-only unless flagged otherwise
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {UPCOMING_MAJOR.map((e) => (
            <div
              key={e.title}
              className="rounded-xl border border-border bg-bg-card/60 p-5 hover:border-accent-teal/40 transition-colors"
            >
              <p className="text-accent-teal text-[10px] uppercase tracking-wider mb-2">
                {e.date}
              </p>
              <p className="text-ink font-bold mb-1">{e.title}</p>
              <p className="text-[11px] text-ink-muted">{e.location}</p>
              <p className="mt-3 text-[10px] uppercase tracking-wider text-accent-sepia">
                {e.category}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function TypePill({ type }: { type: string }) {
  const cls: Record<string, string> = {
    ritual: "text-accent-teal bg-accent-teal/10 border-accent-teal/30",
    "deep-work": "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    client: "text-accent-gold bg-accent-gold/10 border-accent-gold/30",
    "tier-1": "text-accent-gold bg-accent-gold/10 border-accent-gold/30",
    body: "text-accent-sepia bg-accent-sepia/10 border-accent-sepia/30",
    community: "text-ink-soft bg-bg-card border-border",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider border",
        cls[type] || cls.community
      )}
    >
      {type}
    </span>
  );
}
