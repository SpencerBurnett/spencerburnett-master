import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { projectStubs, myOracleBuild } from "@/data/projects/my-oracle-build";
import { PageHeader } from "@/components/command/page-header";
import { StatusPill } from "@/components/command/status-pill";

export function generateStaticParams() {
  return projectStubs.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectStubPage({ params }: PageProps) {
  const { slug } = await params;

  // The flagship project has its own static route — redirect there if it
  // somehow lands here.
  if (slug === myOracleBuild.slug) redirect(`/command/projects/${slug}`);

  const stub = projectStubs.find((p) => p.slug === slug);
  if (!stub) notFound();

  return (
    <div className="px-6 md:px-10 py-8 md:py-10 max-w-[1400px]">
      <PageHeader
        crumbs={[
          { label: "Mission Control", href: "/command" },
          { label: "Projects", href: "/command/projects" },
          { label: stub.title },
        ]}
        title={`${stub.icon} ${stub.title}`}
        subtitle={stub.oneLine}
        right={<StatusPill status={stub.status} size="md" />}
      />

      {/* Placeholder MoC */}
      <section className="mb-10 rounded-2xl border-2 border-accent-sepia/30 bg-accent-sepia/5 p-6 md:p-8">
        <p className="text-accent-sepia text-[10px] uppercase tracking-[0.3em] mb-3">
          🎯 Moment of Completion
        </p>
        <p className="text-ink text-base md:text-lg leading-relaxed">
          Not yet defined. This project needs its{" "}
          <strong className="text-ink">binary, verifiable, real-world</strong>{" "}
          completion event written down before it can move to Building.
        </p>
        <p className="mt-3 text-xs text-ink-muted italic">
          A project doesn&rsquo;t earn the right to take attention until its
          Moment of Completion is named. (Per the Project Operating Manual.)
        </p>
      </section>

      {/* PLACEHOLDER GRID */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-10">
        <div className="rounded-xl border border-dashed border-border bg-bg-card/40 p-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-3">
            Purpose
          </p>
          <p className="text-ink-muted text-sm italic">
            To be filled at kickoff.
          </p>
        </div>
        <div className="rounded-xl border border-dashed border-border bg-bg-card/40 p-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-3">
            Money
          </p>
          <p className="text-ink-muted text-sm italic">
            Expected $: TBD &middot; Actual $: TBD
          </p>
        </div>
        <div className="rounded-xl border border-dashed border-border bg-bg-card/40 p-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-3">
            People & Roles
          </p>
          <p className="text-ink-muted text-sm italic">
            Owner: TBD &middot; Builder(s): TBD &middot; Reviewer: TBD
          </p>
        </div>
        <div className="rounded-xl border border-dashed border-border bg-bg-card/40 p-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-3">
            Dates
          </p>
          <p className="text-ink-muted text-sm italic">
            Kickoff: TBD &middot; Target: TBD
          </p>
        </div>
        <div className="rounded-xl border border-dashed border-border bg-bg-card/40 p-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-3">
            Assets
          </p>
          <p className="text-ink-muted text-sm italic">
            No assets defined yet.
          </p>
        </div>
        <div className="rounded-xl border border-dashed border-border bg-bg-card/40 p-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-3">
            Master Checklist
          </p>
          <p className="text-ink-muted text-sm italic">
            Empty. Add the IKEA manual when this kicks off.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-accent-teal/30 bg-bg-card/40 p-8 text-center">
        <p className="text-accent-teal text-[10px] uppercase tracking-[0.2em] mb-3">
          Stub project
        </p>
        <p className="text-ink-soft max-w-2xl mx-auto leading-relaxed">
          {stub.title} is registered in Mission Control but hasn&rsquo;t had
          its full Project Plan filled in. To bring this online, write the
          Purpose, Moment of Completion, Money, People, Dates, Assets, and
          IKEA Manual &mdash; same template as{" "}
          <Link
            href={`/command/projects/${myOracleBuild.slug}`}
            className="text-accent-teal hover:underline"
          >
            MY Oracle Build
          </Link>
          .
        </p>
        <Link
          href="/command/projects"
          className="mt-6 inline-block cta-outline rounded-lg px-6 py-3 text-xs uppercase tracking-wider"
        >
          ← Back to all projects
        </Link>
      </section>
    </div>
  );
}
