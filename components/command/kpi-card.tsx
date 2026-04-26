import { cn } from "@/lib/utils";

interface KpiCardProps {
  label: string;
  value: string | number;
  unit?: string;
  sub?: string;
  tone?: "default" | "teal" | "sepia" | "gold" | "danger" | "success";
}

export function KpiCard({
  label,
  value,
  unit,
  sub,
  tone = "default",
}: KpiCardProps) {
  const toneClasses = {
    default: "border-border text-ink",
    teal: "border-accent-teal/40 text-accent-teal",
    sepia: "border-accent-sepia/40 text-accent-sepia",
    gold: "border-accent-gold/40 text-accent-gold",
    danger: "border-red-500/40 text-red-400",
    success: "border-emerald-500/40 text-emerald-400",
  } as const;

  return (
    <div
      className={cn(
        "rounded-xl border bg-bg-card/60 p-5",
        toneClasses[tone]
      )}
    >
      <p className="text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-2">
        {label}
      </p>
      <p className="flex items-baseline gap-1.5">
        <span className="text-3xl md:text-4xl font-black tracking-tight leading-none">
          {value}
        </span>
        {unit && (
          <span className="text-sm font-bold uppercase opacity-60">
            {unit}
          </span>
        )}
      </p>
      {sub && (
        <p className="mt-2 text-[11px] text-ink-muted leading-snug">{sub}</p>
      )}
    </div>
  );
}
