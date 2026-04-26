import { PageHeader } from "@/components/command/page-header";
import { KpiCard } from "@/components/command/kpi-card";

const BRAIN_SECTIONS = [
  { n: "00", name: "The Master", body: "Spencer's private founder vault. Vision, identity, big bets.", count: 47, icon: "🏛️" },
  { n: "01", name: "The Oracle", body: "Identity files, memory files, tools, skills, agent configs.", count: 32, icon: "🧠" },
  { n: "02", name: "Calendar & Tasks", body: "Time + expectation. Color-coded, reconciled daily.", count: 154, icon: "📅" },
  { n: "03", name: "Projects", body: "Every initiative kickoff to launch. 9 active.", count: 9, icon: "🚀" },
  { n: "04", name: "Performance", body: "Blood labs, body comp, finances, project completion.", count: 78, icon: "📊" },
  { n: "05", name: "People (Rolodex)", body: "Every relationship with full interaction history.", count: 312, icon: "📇" },
  { n: "06", name: "Resources", body: "SOPs, templates, prompt libraries, reference material.", count: 89, icon: "📦" },
  { n: "07", name: "Daily Notes", body: "Daily journal entries auto-written by Gary.", count: 64, icon: "📓" },
  { n: "08", name: "Content Pipeline", body: "Idea → published asset. Pipelines for video, essay, post.", count: 41, icon: "🎬" },
  { n: "09", name: "Archive", body: "Memory consolidation. Weekly → monthly summaries.", count: 22, icon: "🗄️" },
  { n: "10", name: "Video Vault", body: "4TB on Cloudflare R2. Every clip transcribed + indexed.", count: 1247, icon: "🎥" },
];

export default function KnowledgeBasePage() {
  const totalNotes = BRAIN_SECTIONS.reduce((s, b) => s + b.count, 0);
  return (
    <div className="px-6 md:px-10 py-8 md:py-10 max-w-[1400px]">
      <PageHeader
        crumbs={[
          { label: "Mission Control", href: "/command" },
          { label: "Knowledge Base" },
        ]}
        title="The Brain"
        subtitle="11 sections. One living document. Spencer + Valeria + Janice editing from local Markdown via Obsidian + GitHub."
        right={
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-sepia/40 bg-accent-sepia/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-accent-sepia">
            Notion → Obsidian (Phase 2)
          </span>
        }
      />

      <section className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard label="Sections" value={BRAIN_SECTIONS.length} sub="Standardized" tone="teal" />
        <KpiCard label="Total Notes" value={totalNotes.toLocaleString()} sub="Across the vault" />
        <KpiCard label="Editors" value={3} sub="Spencer · Valeria · Janice" tone="sepia" />
        <KpiCard label="Sync" value="GitHub" sub="2-way · push from any machine" tone="success" />
      </section>

      <section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {BRAIN_SECTIONS.map((b) => (
            <article
              key={b.n}
              className="rounded-xl border border-border bg-bg-card/60 p-5 hover:border-accent-teal/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{b.icon}</span>
                  <div>
                    <p className="text-accent-teal text-[10px] font-mono">
                      {b.n}-{b.name.replace(/\s+/g, "-")}
                    </p>
                    <p className="text-ink font-bold mt-0.5">{b.name}</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-ink-muted">
                  {b.count.toLocaleString()}
                </span>
              </div>
              <p className="text-ink-muted text-[12px] leading-relaxed">
                {b.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-accent-teal/30 bg-bg-card/40 p-8">
          <p className="text-accent-teal text-[10px] uppercase tracking-[0.2em] mb-3">
            How Gary reads this
          </p>
          <p className="text-ink-soft leading-relaxed max-w-3xl">
            Every note is plain Markdown with YAML frontmatter and{" "}
            <code className="text-accent-teal font-mono">[[wiki links]]</code>.
            Gary parses the link graph + indexes everything in Chroma. Median
            query &lt;500ms with 95%+ relationship accuracy. The graph and
            vector indices update via file-watcher in real time.
          </p>
        </div>
      </section>
    </div>
  );
}
