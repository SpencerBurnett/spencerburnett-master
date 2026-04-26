import type { Phase, Project, ProjectStatus } from "@/data/projects/my-oracle-build";

export function flattenPhaseItems(phase: Phase) {
  if (phase.items) return phase.items;
  if (phase.subsections)
    return phase.subsections.flatMap((s) => s.items);
  return [];
}

export function phaseProgress(phase: Phase) {
  const items = flattenPhaseItems(phase);
  const done = items.filter((i) => i.done).length;
  const total = items.length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, pct };
}

export function masterChecklistProgress(project: Project) {
  const all = project.phases.flatMap((p) => flattenPhaseItems(p));
  const done = all.filter((i) => i.done).length;
  const total = all.length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, pct };
}

export function assetProgress(project: Project) {
  const done = project.assets.filter((a) => a.done).length;
  const total = project.assets.length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, pct };
}

export function activePhase(project: Project) {
  // Earliest phase with at least one unfinished item
  for (const p of project.phases) {
    const { done, total } = phaseProgress(p);
    if (done < total) return p;
  }
  return project.phases[project.phases.length - 1];
}

export function daysUntil(dateStr: string, today = new Date()) {
  const target = new Date(dateStr + "T00:00:00");
  const diffMs = target.getTime() - today.getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

export function daysSince(dateStr: string, today = new Date()) {
  return -daysUntil(dateStr, today);
}

export function statusToClasses(status: ProjectStatus) {
  switch (status) {
    case "Building":
      return "bg-accent-teal/10 text-accent-teal border-accent-teal/40";
    case "Stuck":
      return "bg-red-500/10 text-red-400 border-red-500/40";
    case "Shipped":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/40";
    case "Not Started":
    default:
      return "bg-bg-card text-ink-muted border-border";
  }
}

export function assetsByCategory(project: Project) {
  const buckets: Record<string, typeof project.assets> = {};
  for (const a of project.assets) {
    if (!buckets[a.category]) buckets[a.category] = [];
    buckets[a.category].push(a);
  }
  return buckets;
}

export function formatDate(iso: string) {
  // YYYY-MM-DD → "Apr 26, 2026"
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
