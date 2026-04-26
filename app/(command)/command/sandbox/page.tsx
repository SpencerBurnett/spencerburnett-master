import { PageHeader } from "@/components/command/page-header";
import { KpiCard } from "@/components/command/kpi-card";

const EXPERIMENTS = [
  {
    title: "Voice-cloned cold-call agent",
    status: "Prototyping",
    note: "Gary calls warm leads with Spencer's cloned voice. Held back until pilot guarantee structure clarified.",
  },
  {
    title: "Doom-scroll → publish agent",
    status: "Idea",
    note: "Watches Spencer's social consumption, flags reusable hooks, drafts content in his voice.",
  },
  {
    title: "Confirmation-call agent",
    status: "Idea",
    note: "Auto-confirms appointments 24h out across all clients (Plumbing, Roofing, Coaching).",
  },
  {
    title: "Tegrity Bets v2 (paused)",
    status: "Paused",
    note: "College football betting agent. Resumes Q3 per Spencer's note in MEMORY.md.",
  },
  {
    title: "Identity Frame self-rater",
    status: "Prototyping",
    note: "Daily 1–10 rating with auto-suggested evidence + opportunities pulled from journal entries.",
  },
];

const WISHLIST = [
  "Uber Eats agent (orders the right thing for current macro target)",
  "Relationship-tracking agent (separate from Rolodex)",
  "Investment thesis writer (pulls from market data + Spencer's filters)",
  "Music drop notifier (when artists Spencer follows release)",
  "Travel agent that books and pre-briefs everything",
];

export default function SandboxPage() {
  return (
    <div className="px-6 md:px-10 py-8 md:py-10 max-w-[1400px]">
      <PageHeader
        crumbs={[
          { label: "Mission Control", href: "/command" },
          { label: "Sandbox" },
        ]}
        title="Sandbox"
        subtitle="The safe room for experiments. Half-finished thoughts, prototypes, things that aren't ready to be Projects yet."
        right={
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-sepia/40 bg-accent-sepia/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-accent-sepia">
            ~/.openclaw/sandboxes/
          </span>
        }
      />

      <section className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard label="Experiments" value={EXPERIMENTS.length} sub="In motion" tone="teal" />
        <KpiCard label="Prototyping" value={EXPERIMENTS.filter(e => e.status === "Prototyping").length} sub="Active dev" tone="success" />
        <KpiCard label="Ideas" value={EXPERIMENTS.filter(e => e.status === "Idea").length + WISHLIST.length} sub="Wishlist + active idea cards" tone="sepia" />
        <KpiCard label="Paused" value={EXPERIMENTS.filter(e => e.status === "Paused").length} sub="Held until trigger fires" />
      </section>

      <section className="mb-10">
        <h2 className="text-ink text-base md:text-lg font-bold uppercase tracking-wider mb-5">
          Active Experiments
        </h2>
        <div className="space-y-3">
          {EXPERIMENTS.map((e) => (
            <article
              key={e.title}
              className="rounded-xl border border-border bg-bg-card/60 p-5 flex flex-wrap md:flex-nowrap gap-4 items-start"
            >
              <div className="flex-1 min-w-0">
                <p className="text-ink font-bold mb-1">{e.title}</p>
                <p className="text-[12px] text-ink-muted leading-relaxed">
                  {e.note}
                </p>
              </div>
              <ExperimentStatus status={e.status} />
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-ink text-base md:text-lg font-bold uppercase tracking-wider mb-5">
          Wishlist (idea inbox)
        </h2>
        <div className="rounded-2xl border border-dashed border-accent-sepia/40 bg-bg-card/40 p-6">
          <ul className="space-y-2.5">
            {WISHLIST.map((w, i) => (
              <li key={i} className="flex gap-3 text-sm text-ink-soft">
                <span className="text-accent-sepia shrink-0">▸</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 pt-4 border-t border-border text-[11px] text-ink-muted italic">
            Every new idea → add here as a stub. Promote to a Project when
            it has a Moment of Completion that can be written down.
          </p>
        </div>
      </section>
    </div>
  );
}

function ExperimentStatus({ status }: { status: string }) {
  const cls: Record<string, string> = {
    Prototyping: "bg-accent-teal/10 text-accent-teal border-accent-teal/40",
    Idea: "bg-bg-card text-ink-muted border-border",
    Paused: "bg-red-500/10 text-red-400 border-red-500/40",
  };
  return (
    <span
      className={
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider " +
        (cls[status] || cls.Idea)
      }
    >
      {status}
    </span>
  );
}
