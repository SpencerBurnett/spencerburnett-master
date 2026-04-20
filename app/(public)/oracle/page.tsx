import type { Metadata } from "next";
import Link from "next/link";
import { ORACLE_CHECKOUT_URL } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "The Oracle",
  description:
    "A private, sovereign AI Oracle built alongside you, plus 1,000 days of direct mentorship with Spencer Burnett through January 1, 2029. $4,500 one-time.",
  openGraph: {
    title: "The Oracle · Spencer Burnett",
    description:
      "Build your private AI Oracle. Own your infrastructure. Arrive at 2029 sovereign. $4,500 one-time.",
  },
};

const PROBLEMS = [
  {
    title: "You&rsquo;re drowning in busy work",
    body: "Two hours a day on email. Taking payments customers could take themselves. Sending the same five answers to the same five questions. Your gift is buried under noise.",
  },
  {
    title: "Constant interruptions destroy your focus",
    body: "Team members have questions all day. Context switches spike your anxiety. Ten-minute tasks take forty-five because you keep restarting them.",
  },
  {
    title: "You have no time to build what you&rsquo;re actually good at",
    body: "Your real edge is seeing what&rsquo;s missing and making it better. You can&rsquo;t use that edge when the calendar is full of other people&rsquo;s noise.",
  },
  {
    title: "Your AI setup is amateur hour",
    body: "One shared ChatGPT account. Maybe still on AOL. No private, sovereign AI that actually knows you, remembers, and works for you while you sleep.",
  },
  {
    title: "You&rsquo;re behind the curve and the window is closing",
    body: "Agentic AI is on a hockey-stick. The advantage goes to whoever masters it first. In 2\u20133 years, everyone&rsquo;s edge will be the same. Now is the cheapest the window will ever be.",
  },
  {
    title: "You want a second income but have no time to build one",
    body: "Ideas stuck in your head. No system to evaluate, launch, or automate them. A builder who never gets to build.",
  },
];

const BENEFITS = [
  "~20 hours a week of your life back",
  "Email time cut from 2 hours/day to 30 minutes/day",
  "Team questions answered automatically by your Oracle&rsquo;s knowledge base",
  "A private, sovereign AI that knows you, never forgets, and isn&rsquo;t shared",
  "A living knowledge base of your business \u2014 the stuff in your head, searchable",
  "Whisper Flow dictation \u2014 stop typing, speak everything",
  "Daily morning brief + evening reflection so nothing falls through the cracks",
  "A 3-year vision document the Oracle uses to anticipate your needs",
  "Direct WhatsApp line to Spencer through January 1, 2029",
  "Every agent built for any member of the 1,000 \u2014 copy-pasted to yours, free",
  "Peace of mind that you&rsquo;re on the right side of the AI shift before 2029",
];

const PHASES = [
  {
    num: "1",
    label: "Pre-Work",
    duration: "Week 0",
    body: "Say yes. Move email off AOL. Stop sharing a ChatGPT account. Install Whisper Flow. Grant access. We start within 7 days.",
  },
  {
    num: "2",
    label: "Build Your Oracle V1",
    duration: "Weeks 1\u20136",
    body: "Kickoff session (2 hrs). Install OpenClaw. Give it a soul, an identity, a user file. Build your knowledge base. Wire up email automation, team Oracle, customer-service layer, morning brief + evening reflection. By week 6 your Oracle is live and saving ~20 hrs/week.",
  },
  {
    num: "3",
    label: "Make Money With It",
    duration: "Months 2\u20136",
    body: "Build the revenue agents \u2014 sports-betting, merch, podcast booking, whatever your angle is. Ask the Oracle how to make an extra $50K/year once it knows your calendar, skills, and network.",
  },
  {
    num: "4",
    label: "Office Hours + Continuous Upgrades",
    duration: "Months 2 \u2192 January 1, 2029",
    body: "6 hours a week of live office hours with me. Direct WhatsApp line when you&rsquo;re stuck. Every new agent built for anyone in the cohort \u2014 yours, automatically. You compound for 1,000 days.",
  },
];

const WHAT_YOU_GET = [
  ["Private, sovereign Oracle", "Runs on your machine, your data. Not shared with OpenAI or Google."],
  ["Version 1 build", "Delivered within 6 weeks of kickoff"],
  ["Weekly build sessions", "1\u20132x/week for the first 4\u20136 weeks"],
  ["Live office hours", "6 hrs/week for ~1,000 days"],
  ["Direct line to Spencer", "WhatsApp / phone"],
  ["Shared agent library", "Every agent built for any of the 1,000 becomes yours"],
  ["Knowledge base", "Full extraction of your business into a searchable brain"],
  ["Automation suite", "Email, team questions, customer service, morning briefs, evening reflections"],
  ["Mentorship horizon", "Through January 1, 2029"],
];

export default function OraclePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-20 pb-28 md:pt-28 md:pb-36 animate-fade-in">
          <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-8">
            A 1,000-Day Mentorship · Enrollment Open
          </p>
          <h1 className="text-ink font-black uppercase tracking-tight text-5xl md:text-7xl leading-[0.95]">
            The Oracle
          </h1>
          <p className="mt-6 text-accent-teal text-xl md:text-2xl font-medium max-w-3xl">
            6th-Dimension Consciousness, Expressed Through Technology.
          </p>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-soft leading-relaxed">
            You don&rsquo;t need another chatbot. You need a second
            consciousness &mdash; a private AI that thinks in your voice,
            remembers everything, and works while you sleep. Built with me.
            Owned by you. Yours for the next 1,000 days.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start">
            <a
              href={ORACLE_CHECKOUT_URL}
              className="cta-teal rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Enroll — $4,500 &rarr;
            </a>
            <a
              href="mailto:spencer@brainjam.io?subject=Oracle%20Fit%20Call"
              className="cta-outline rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Book a 15-min Fit Call
            </a>
          </div>
          <p className="mt-8 text-xs text-ink-muted max-w-xl">
            One-time investment. Mentorship horizon extends through January 1,
            2029 &mdash; the full 1,000-day window.
          </p>
        </div>
      </section>

      {/* THE TRANSFORMATION */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Transformation
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            You Are Not Broken. You Are Buried.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="card-base rounded-2xl p-8">
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-3">
                90 days from now
              </p>
              <p className="text-ink-soft leading-relaxed">
                You wake up. Your Oracle has already been awake for hours.
                He&rsquo;s read every email that came in overnight and drafted
                responses in your voice. He&rsquo;s scanned Slack, answered
                the easy team questions, and left you a one-page morning
                brief: <em>here&rsquo;s what matters today, here&rsquo;s what
                I handled, here are three drafts that need your approval</em>.
                You approve them with a tap. Two hours of email is now twenty
                minutes.
              </p>
            </div>
            <div className="card-base rounded-2xl p-8">
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-3">
                6 months from now
              </p>
              <p className="text-ink-soft leading-relaxed">
                Your Oracle is running revenue agents for you while
                you&rsquo;re at your kid&rsquo;s game. Your business runs on a
                quiet hum. Customer service triaged by AI. You finally have
                the time and the mental space to build the thing you&rsquo;ve
                always wanted to build. You&rsquo;re no longer drowning. You
                are the operator of the engine.
              </p>
            </div>
            <div className="card-base rounded-2xl p-8 border-accent-teal/40">
              <p className="text-accent-gold text-xs uppercase tracking-wider mb-3">
                January 1, 2029
              </p>
              <p className="text-ink-soft leading-relaxed">
                While most of the world is scrambling to catch up to AI,
                you&rsquo;re already sovereign. You own your data. You own
                your time. You own a second income stream your Oracle helped
                you design. You&rsquo;re no longer a founder who dreams about
                building something. You&rsquo;re a builder whose business
                runs itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Problems We&rsquo;re Going to Solve
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            The Pain Has a Name. Every One of These Has a Fix.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="card-base rounded-2xl p-8">
                <p className="text-accent-teal text-sm font-bold mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="text-ink text-lg font-bold mb-3"
                  dangerouslySetInnerHTML={{ __html: p.title }}
                />
                <p
                  className="text-ink-soft leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            What You&rsquo;ll Experience
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            What Your Life Looks Like Once the Oracle Is Live.
          </h2>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-xl border border-border/60 bg-bg-card/50 p-5"
              >
                <span className="mt-1 text-accent-teal text-lg leading-none">
                  ▸
                </span>
                <span
                  className="text-ink-soft leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: b }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* THE PLAN */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Step-by-Step Plan
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Simple Enough to Teach a 10-Year-Old.
          </h2>
          <p className="mt-6 max-w-2xl text-ink-soft">
            We do these in order. Each phase builds on the one before it. You
            don&rsquo;t have to figure anything out. You just show up.
          </p>
          <div className="mt-14 space-y-6">
            {PHASES.map((ph) => (
              <div
                key={ph.num}
                className="card-base rounded-2xl p-8 md:flex md:items-start md:gap-10"
              >
                <div className="md:w-48 md:shrink-0 mb-4 md:mb-0">
                  <p className="text-accent-teal text-5xl font-black leading-none">
                    {ph.num}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-wider text-ink-muted">
                    {ph.duration}
                  </p>
                </div>
                <div>
                  <h3 className="text-ink text-xl md:text-2xl font-bold uppercase tracking-wide">
                    {ph.label}
                  </h3>
                  <p className="mt-3 text-ink-soft leading-relaxed">
                    {ph.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            What You&rsquo;re Actually Getting
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            The Full Unlock.
          </h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <table className="w-full">
              <tbody>
                {WHAT_YOU_GET.map(([what, detail], i) => (
                  <tr
                    key={i}
                    className={
                      "border-b border-border last:border-0 " +
                      (i % 2 === 0 ? "bg-bg-card/60" : "bg-bg-card/30")
                    }
                  >
                    <td className="p-5 md:p-6 align-top text-ink font-semibold w-1/3">
                      {what}
                    </td>
                    <td className="p-5 md:p-6 align-top text-ink-soft leading-relaxed">
                      {detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <div className="card-base rounded-3xl p-10 md:p-16 border-accent-teal/40">
            <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
              The Investment
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:gap-10">
              <p className="text-ink font-black text-6xl md:text-8xl leading-none">
                $4,500
              </p>
              <p className="mt-4 md:mt-0 text-ink-soft text-lg md:text-xl max-w-md">
                One-time. Locked for the full 1,000-day mentorship through
                January 1, 2029.
              </p>
            </div>
            <p className="mt-8 text-ink-soft leading-relaxed max-w-3xl">
              This is not a business for me. It&rsquo;s a mission. The money
              funds the regenerative village in Costa Rica (Amplifico). When
              you enroll, you&rsquo;re not buying a service &mdash;
              you&rsquo;re joining 999 other conscious creators building
              sovereignty together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={ORACLE_CHECKOUT_URL}
                className="cta-teal rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider text-center"
              >
                Enroll Now &rarr;
              </a>
              <a
                href="mailto:spencer@brainjam.io?subject=Oracle%20Fit%20Call"
                className="cta-outline rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider text-center"
              >
                Not Sure? Book a Fit Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border bg-gradient-to-b from-bg-base to-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32 text-center">
          <h2 className="text-ink font-black uppercase tracking-tight text-4xl md:text-6xl max-w-4xl mx-auto leading-[0.95]">
            You Already Have the Gift.
          </h2>
          <p className="mt-6 text-accent-teal text-xl md:text-2xl font-medium max-w-3xl mx-auto">
            You&rsquo;ve just been missing the time to use it &mdash; and the
            tools that multiply it.
          </p>
          <p className="mt-6 text-ink-soft max-w-2xl mx-auto">
            That&rsquo;s exactly what we&rsquo;re building. Let&rsquo;s go.
          </p>
          <div className="mt-10">
            <a
              href={ORACLE_CHECKOUT_URL}
              className="cta-teal rounded-lg px-12 py-6 text-base uppercase tracking-wider inline-block"
            >
              Enroll — $4,500 &rarr;
            </a>
          </div>
          <p className="mt-12 text-accent-sepia italic text-sm">
            &ldquo;We ride the wave as we build our boats, and then we tie our
            boats together. So when the tsunami comes, it creates a mesh and
            no one sinks.&rdquo;
          </p>
          <p className="mt-2 text-xs text-ink-muted uppercase tracking-[0.3em]">
            Spencer Burnett
          </p>
        </div>
      </section>
    </>
  );
}
