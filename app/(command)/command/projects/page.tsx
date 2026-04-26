import Link from "next/link";
import {
  myOracleBuild,
  projectStubs,
} from "@/data/projects/my-oracle-build";
import { masterChecklistProgress } from "@/lib/project-utils";
import { StatusPill } from "@/components/command/status-pill";

export default function ProjectsIndex() {
  return (
    <div className="px-6 md:px-10 py-8 md:py-10 max-w-[1400px]">
      <header className="mb-10">
        <p className="text-[10px] uppercase tracking-[0.3em] text-accent-teal mb-1">
          Mission Control / Projects
        </p>
        <h1 className="text-ink text-3xl md:text-4xl font-black uppercase tracking-tight">
          All Projects
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          {projectStubs.length} active &middot; one IKEA manual per project,
          one Moment of Completion
        </p>
      </header>

      <div className="rounded-2xl border border-border bg-bg-card/40 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-bg-deep">
              <th className="text-left px-5 py-3 text-[10px] uppercase tracking-wider text-ink-muted font-bold">
                Project
              </th>
              <th className="text-left px-5 py-3 text-[10px] uppercase tracking-wider text-ink-muted font-bold">
                Status
              </th>
              <th className="text-left px-5 py-3 text-[10px] uppercase tracking-wider text-ink-muted font-bold hidden md:table-cell">
                One Line
              </th>
              <th className="text-right px-5 py-3 text-[10px] uppercase tracking-wider text-ink-muted font-bold hidden lg:table-cell">
                Master Checklist
              </th>
            </tr>
          </thead>
          <tbody>
            {projectStubs.map((p, i) => {
              const isFlagship = p.slug === myOracleBuild.slug;
              const progress = isFlagship
                ? masterChecklistProgress(myOracleBuild)
                : null;
              return (
                <tr
                  key={p.slug}
                  className={
                    "border-b border-border last:border-0 hover:bg-bg-card/40 transition-colors " +
                    (i % 2 === 0 ? "bg-bg-card/20" : "")
                  }
                >
                  <td className="px-5 py-4">
                    <Link
                      href={`/command/projects/${p.slug}`}
                      className="flex items-center gap-3"
                    >
                      <span className="text-xl">{p.icon}</span>
                      <span className="text-ink font-bold hover:text-accent-teal transition-colors">
                        {p.title}
                      </span>
                    </Link>
                  </td>
                  <td className="px-5 py-4">
                    <StatusPill status={p.status} />
                  </td>
                  <td className="px-5 py-4 text-ink-soft text-xs hidden md:table-cell max-w-md">
                    <span className="line-clamp-2">{p.oneLine}</span>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    {progress ? (
                      <div className="flex items-center justify-end gap-3">
                        <div className="w-24 h-1.5 rounded-full bg-bg-deep overflow-hidden">
                          <div
                            className="h-full bg-accent-teal"
                            style={{ width: `${progress.pct}%` }}
                          />
                        </div>
                        <span className="text-ink font-bold text-xs w-14 text-right">
                          {progress.done}/{progress.total}
                        </span>
                      </div>
                    ) : (
                      <span className="text-ink-muted text-xs flex justify-end">
                        &mdash;
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
