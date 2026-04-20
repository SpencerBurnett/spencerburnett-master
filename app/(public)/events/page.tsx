import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events",
  description:
    "The 2026 event calendar: Body Parties, Deal Flow Brain Jams, Pitch Parties, Action Planning, Co-Working, Casa Faro retreats.",
};

const RECURRING = [
  {
    title: "Action Planning",
    cadence: "Weekly",
    when: "Mondays",
    body: "The weekly ritual that makes integrity the primary KPI. Reconcile the last week. Imprint identity. Plot the next seven days.",
    tier: "EXECUTE",
  },
  {
    title: "Reach Outs",
    cadence: "Weekly",
    when: "Wednesdays",
    body: "Do-the-work co-working sessions focused on generating business. No theory. Send the message. Send the email. Make the call.",
    tier: "EXECUTE",
  },
  {
    title: "Power Lunch",
    cadence: "Weekly",
    when: "Fridays",
    body: "Entrepreneurs eating lunch together. Combats isolation. Creates real connection mid-week. Short, warm, human.",
    tier: "EXECUTE",
  },
  {
    title: "Co-Working",
    cadence: "Weekly",
    when: "Austin + Zoom hybrid",
    body: "Deep-work blocks with the cohort. Focus, together. In-person for the Austin crew; Zoom for everyone else.",
    tier: "EXECUTE",
  },
  {
    title: "Deal Flow Brain Jams",
    cadence: "Monthly",
    when: "First week of each month",
    body: "Sling contacts. Identify constraints. Make deals. Pure commercial leverage across the cohort.",
    tier: "EXECUTE",
  },
  {
    title: "Pitch Parties",
    cadence: "Bi-monthly",
    when: "Rotating",
    body: "Founders pitch to the room. Real capital. Real connections. Real accountability on what happens next.",
    tier: "EXECUTE",
  },
];

const FLAGSHIPS_2026 = [
  {
    title: "Body Party · Summer I",
    date: "June 2026",
    location: "TBD",
    body: "Multi-day physical intensive. Movement, fasting, breathwork, ice, heat. First of three 2026 Body Parties.",
  },
  {
    title: "Body Party · Summer II",
    date: "July 2026",
    location: "TBD",
    body: "Second Body Party of the season. Deepens what the June intensive started.",
  },
  {
    title: "Burning Man 2026",
    date: "Late August 2026",
    location: "Black Rock City, NV",
    body: "Full Burn week with the camp. If you&rsquo;re coming or curious about joining the camp, reach out.",
  },
  {
    title: "Body Party · Fall",
    date: "September 2026",
    location: "TBD",
    body: "The closing Body Party of the year. Integration + recalibration for Q4.",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-16 pb-20 md:pt-24 md:pb-24 animate-fade-in">
          <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-8">
            Events · 2026
          </p>
          <h1 className="text-ink font-black uppercase tracking-tight text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Gather on Purpose.
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ink-soft leading-relaxed">
            The mesh only becomes real in person. Online is the signal; the
            gathering is the substance. Here&rsquo;s what the 2026 calendar
            looks like.
          </p>
        </div>
      </section>

      {/* 2026 FLAGSHIPS */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            2026 Flagship Events
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            The Big Ones.
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            Multi-day, in-person, high-intensity. Book the time now;
            details locked closer to each event.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {FLAGSHIPS_2026.map((f) => (
              <div key={f.title} className="card-base rounded-2xl p-7">
                <p className="text-accent-teal text-xs uppercase tracking-wider mb-2">
                  {f.date} &middot; {f.location}
                </p>
                <h3 className="text-ink text-xl md:text-2xl font-bold mb-3">
                  {f.title}
                </h3>
                <p className="text-ink-soft leading-relaxed text-sm">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECURRING RITUALS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            Recurring Rituals
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            The Weekly Rhythm.
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            These are the repeated gatherings that keep the engine running.
            Members inside EXECUTE and the Oracle cohort get access to all
            of them.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {RECURRING.map((r) => (
              <div key={r.title} className="card-base rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-accent-teal text-xs uppercase tracking-wider">
                    {r.cadence}
                  </p>
                  <p className="text-xs text-ink-muted">{r.tier}</p>
                </div>
                <h3 className="text-ink text-lg font-bold mb-1">
                  {r.title}
                </h3>
                <p className="text-accent-sepia text-xs mb-3">{r.when}</p>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE CALENDAR PLACEHOLDER */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            Live Calendar
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Plug In.
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            The live ICS-backed calendar will plug in here. For now,
            email Spencer if you want to join a specific event on short
            notice.
          </p>
          <div className="mt-12 rounded-2xl border border-dashed border-accent-teal/40 bg-bg-card/40 p-12 text-center">
            <p className="text-accent-teal text-xs uppercase tracking-wider mb-3">
              Coming Soon
            </p>
            <p className="text-ink text-lg md:text-xl font-medium">
              Live Google Calendar embed + RSVP integration
            </p>
            <p className="mt-4 text-ink-muted text-sm max-w-md mx-auto">
              Until this ships, email{" "}
              <a
                href="mailto:spencer@brainjam.io?subject=Event%20Access"
                className="text-accent-teal hover:underline"
              >
                spencer@brainjam.io
              </a>{" "}
              for event access.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32 text-center">
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            Most of These Are Members-Only.
          </h2>
          <p className="mt-6 text-accent-teal text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Enroll in Oracle or EXECUTE to get in the room.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/oracle"
              className="cta-teal rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Build Your Oracle &rarr;
            </Link>
            <Link
              href="/join"
              className="cta-outline rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              See All Offers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
