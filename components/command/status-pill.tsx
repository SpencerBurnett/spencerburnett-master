import type { ProjectStatus } from "@/data/projects/my-oracle-build";
import { statusToClasses } from "@/lib/project-utils";
import { cn } from "@/lib/utils";

export function StatusPill({
  status,
  size = "sm",
}: {
  status: ProjectStatus;
  size?: "sm" | "md";
}) {
  const sizeClasses =
    size === "md" ? "px-3 py-1.5 text-xs" : "px-2 py-1 text-[10px]";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-bold uppercase tracking-wider",
        sizeClasses,
        statusToClasses(status)
      )}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full",
          status === "Building" && "bg-accent-teal animate-pulse",
          status === "Stuck" && "bg-red-500",
          status === "Shipped" && "bg-emerald-500",
          status === "Not Started" && "bg-ink-muted"
        )}
      />
      {status}
    </span>
  );
}
