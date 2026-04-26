import { CommandSidebar } from "@/components/command/sidebar";

// Owner-only chrome. Auth gating comes in Phase 3 — for now this renders
// publicly so Spencer can preview the dashboard locally. Not exposed via
// nav from the public site.
export default function CommandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <CommandSidebar />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
