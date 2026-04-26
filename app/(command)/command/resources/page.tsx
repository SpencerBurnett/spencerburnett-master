import { PageHeader } from "@/components/command/page-header";
import { KpiCard } from "@/components/command/kpi-card";

const SOPS = [
  { name: "Action Planning Ritual", category: "Operations", lastUsed: "Today" },
  { name: "Oracle Build Onboarding (Phase 0)", category: "Oracle", lastUsed: "9 days ago" },
  { name: "Notion → Obsidian Migration Script", category: "Knowledge", lastUsed: "Pending" },
  { name: "Meeting Summary Template (Read.ai)", category: "Communication", lastUsed: "Yesterday" },
  { name: "Pre-Brief Generator", category: "Calendar", lastUsed: "Today" },
  { name: "Identity Imprinting Worksheet", category: "Identity", lastUsed: "1 week ago" },
  { name: "Two-Year Vision Template", category: "Identity", lastUsed: "3 weeks ago" },
  { name: "Stripe Product → Vault Provisioning", category: "Money", lastUsed: "Today" },
];

const PROMPT_PACKS = [
  { name: "Spencer-voice content rewriter", uses: 412, owner: "Gary" },
  { name: "Meeting summary → action items", uses: 287, owner: "Gary" },
  { name: "Cold outreach (long-form)", uses: 156, owner: "Spencer" },
  { name: "Proposal writer (universal)", uses: 94, owner: "Gary" },
  { name: "Identity reframe (5 frames)", uses: 67, owner: "Spencer" },
  { name: "Project Plan generator", uses: 43, owner: "Gary" },
];

const TEMPLATES = [
  { name: "Project Plan (IKEA Manual)", format: "Notion + .md", usage: "All projects" },
  { name: "Person.md (Rolodex entry)", format: "Markdown + YAML", usage: "Every contact" },
  { name: "Call-Transcript.md", format: "Markdown + YAML", usage: "Every meeting" },
  { name: "Daily-Note.md", format: "Markdown + YAML", usage: "Auto-generated" },
  { name: "Asset Card", format: "Notion block", usage: "Every project" },
];

export default function ResourcesPage() {
  return (
    <div className="px-6 md:px-10 py-8 md:py-10 max-w-[1400px]">
      <PageHeader
        crumbs={[
          { label: "Mission Control", href: "/command" },
          { label: "Resources" },
        ]}
        title="Resources"
        subtitle="SOPs, templates, prompt packs. The reusable IP Gary pulls from when answering questions or executing tasks."
      />

      <section className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard label="SOPs" value={SOPS.length} sub="Standard operating procedures" tone="teal" />
        <KpiCard label="Prompt Packs" value={PROMPT_PACKS.length} sub="Reusable AI prompts" tone="sepia" />
        <KpiCard label="Templates" value={TEMPLATES.length} sub="Document scaffolds" />
        <KpiCard label="Usage (mo)" value="1.1K" sub="Times pulled this month" tone="gold" />
      </section>

      <section className="grid gap-4 lg:grid-cols-2 mb-10">
        <div className="rounded-2xl border border-border bg-bg-card/60 p-6">
          <p className="text-accent-teal text-[10px] uppercase tracking-[0.2em] mb-4">
            Standard Operating Procedures
          </p>
          <ul className="divide-y divide-border">
            {SOPS.map((s) => (
              <li key={s.name} className="py-3 flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-ink text-sm font-medium">{s.name}</p>
                  <p className="text-[11px] text-ink-muted mt-0.5">
                    {s.category}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-ink-muted whitespace-nowrap">
                  {s.lastUsed}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-bg-card/60 p-6">
          <p className="text-accent-sepia text-[10px] uppercase tracking-[0.2em] mb-4">
            Prompt Packs
          </p>
          <ul className="divide-y divide-border">
            {PROMPT_PACKS.map((p) => (
              <li key={p.name} className="py-3 flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-ink text-sm font-medium">{p.name}</p>
                  <p className="text-[11px] text-ink-muted mt-0.5">
                    Owner · {p.owner}
                  </p>
                </div>
                <span className="text-accent-teal font-bold text-sm">
                  {p.uses}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <p className="text-accent-teal text-[10px] uppercase tracking-[0.2em] mb-4">
          Document Templates
        </p>
        <div className="rounded-2xl border border-border bg-bg-card/60 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-bg-deep">
              <tr>
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-wider text-ink-muted font-bold">
                  Template
                </th>
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-wider text-ink-muted font-bold">
                  Format
                </th>
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-wider text-ink-muted font-bold">
                  Usage
                </th>
              </tr>
            </thead>
            <tbody>
              {TEMPLATES.map((t, i) => (
                <tr
                  key={t.name}
                  className={
                    "border-b border-border last:border-0 " +
                    (i % 2 === 0 ? "bg-bg-card/20" : "")
                  }
                >
                  <td className="px-5 py-3 text-ink font-medium">{t.name}</td>
                  <td className="px-5 py-3 text-ink-muted text-xs font-mono">
                    {t.format}
                  </td>
                  <td className="px-5 py-3 text-ink-soft text-xs">
                    {t.usage}
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
