import type { Metadata } from "next";
import Link from "next/link";
import { ORACLE_CHECKOUT_URL } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Creation",
  description:
    "How the game actually works. The 5D model of conscious creation. The Precise Language Model. Why most entrepreneurs stay stuck at 2D and how to operate across the full chain.",
};

const DIMENSIONS = [
  {
    n: "5D",
    label: "Clarity",
    one: "Know exactly what you want.",
    operator:
      "5D is the vision layer. It&rsquo;s the specific, binary, measurable outcome you&rsquo;re moving toward. Not a vibe. Not a feeling. An end state that has a yes/no answer and a date.",
    fail: "Most entrepreneurs live in a fog of \u201csort-of wanting\u201d three different futures. No 5D clarity = no downstream traction. You can&rsquo;t hit what you can&rsquo;t name.",
    esoteric:
      "In the esoteric frame, 5D is pure awareness &mdash; the field before form. Christ said \u201cAsk and it shall be given.\u201d You can&rsquo;t ask for something you can&rsquo;t articulate.",
  },
  {
    n: "4D",
    label: "Emotion",
    one: "Feel it. Imagine it. Occupy it.",
    operator:
      "4D is the embodiment layer. Once you know what you want, you have to feel what it&rsquo;s like to already be there. This isn&rsquo;t woo &mdash; it&rsquo;s a rehearsal mechanism. Your body needs a reference point for the future state before it will move you toward it.",
    fail: "You write the vision doc, close the laptop, and never feel the vision again. No emotional download = no commitment. The body stays loyal to the old identity.",
    esoteric:
      "In the esoteric frame, 4D is the time dimension &mdash; the layer of patterns, probability, imagination. Prophets have always known: if you can see it, you can walk into it.",
  },
  {
    n: "3D",
    label: "Language",
    one: "Speak it into existence.",
    operator:
      "3D is the precision layer. The bridge between what you feel and what you do. Every identity statement, every commitment, every instruction you give yourself or your team is a 3D operation. Vague language creates vague reality. Precise language creates precise reality.",
    fail: "You say things like &ldquo;I should probably work on that&rdquo; or &ldquo;we&rsquo;re kind of aiming for Q3.&rdquo; The language is sloppy, so the execution is sloppy. The chain breaks here more than anywhere else.",
    esoteric:
      "Abracadabra &mdash; <em>avra kadavra</em> in Aramaic &mdash; literally means <em>I create as I speak</em>. Every sacred tradition knows: the word is the lever. \u201cLet there be light&rdquo; happened instantly because the language was perfect.",
  },
  {
    n: "2D",
    label: "Action",
    one: "Execute with precision.",
    operator:
      "2D is the doing layer. The calendar. The tasks. The meetings. The keystrokes. Most entrepreneurs live here exclusively &mdash; grinding at 2D without the upstream dimensions &mdash; which is why they feel busy but never arrive.",
    fail: "You&rsquo;re executing, but on the wrong things. Effort without upstream clarity is just cardio. You&rsquo;ll look back at six months of hustle and not be able to name what moved.",
    esoteric:
      "In the esoteric frame, 2D is the plane of matter &mdash; the place where spirit becomes form. It&rsquo;s holy work. But only when it&rsquo;s aligned with the layers above.",
  },
  {
    n: "1D",
    label: "Result",
    one: "Manifest instantaneously.",
    operator:
      "1D is the outcome layer. The number on the dashboard. The closed deal. The finished product. Most people obsess over 1D because it&rsquo;s what they can see. But you can&rsquo;t change 1D by staring at 1D &mdash; you change it upstream.",
    fail: "Obsessing over the result creates anxiety without movement. Watching the scoreboard instead of running the play. You&rsquo;ve seen founders refresh their Stripe dashboard twelve times a day. That&rsquo;s 1D addiction.",
    esoteric:
      "1D is the singular point. The answered prayer. The word made flesh. In the old language: <em>manifestation</em>. In the operator language: results.",
  },
];

const FAILURE_MODES = [
  {
    stuck: "5D",
    symptom: "You&rsquo;re busy but can&rsquo;t name the destination.",
    fix: "Write the 2-year vision. In present tense. Specific enough that anyone could tell if you got there.",
  },
  {
    stuck: "4D",
    symptom: "You have the vision but can&rsquo;t feel it. It&rsquo;s abstract.",
    fix: "Rehearse the state daily. Visualize. Breathe into the future body. Identity imprinting statements at 3D bridge the gap.",
  },
  {
    stuck: "3D",
    symptom: "Your words are sloppy. You say &ldquo;maybe&rdquo; when you mean &ldquo;no.&rdquo;",
    fix: "Tighten the language. Rewrite your commitments in precise, binary, dated form. Every sloppy sentence is a leak.",
  },
  {
    stuck: "2D",
    symptom: "You know what to do. You&rsquo;re not doing it.",
    fix: "Calendar it. Reduce the size of the smallest action until resistance is zero. Build rituals, not willpower.",
  },
  {
    stuck: "1D",
    symptom: "You&rsquo;re obsessing over results and the obsession is making the results worse.",
    fix: "Zoom out. The outcome is downstream of the chain. Fix the chain. The result fixes itself.",
  },
];

export default function CreationPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-16 pb-24 md:pt-24 md:pb-28 animate-fade-in">
          <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-8">
            Conscious Creation
          </p>
          <h1 className="text-ink font-black uppercase tracking-tight text-5xl md:text-7xl leading-[0.95] max-w-5xl">
            How the Game
            <br />
            <span className="text-accent-sepia">Actually Works.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-2xl text-ink-soft leading-relaxed">
            Most entrepreneurs are trying to win at 2D. Hustling. Executing.
            Grinding. And wondering why nothing moves. The problem
            isn&rsquo;t effort &mdash; it&rsquo;s that they&rsquo;re playing
            the last dimension of a five-dimensional game.
          </p>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-ink-soft leading-relaxed">
            This is the map. Five dimensions, one chain, one connective
            tissue. Learn it and you stop spinning. Miss it and you
            don&rsquo;t arrive.
          </p>
        </div>
      </section>

      {/* THE CHAIN INTRO */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Thesis
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Thought &rarr; Reality Is a Chain.
          </h2>
          <div className="mt-10 max-w-3xl space-y-4 text-ink-soft text-lg leading-relaxed">
            <p>
              Every outcome in your life arrived through the same five
              steps, in the same order, whether you saw them or not.
              Clarity. Emotion. Language. Action. Result. Top of the
              chain to the bottom. Every time. No exceptions.
            </p>
            <p>
              When the chain is tight, execution happens at the speed of
              thought. When the chain breaks &mdash; and it almost always
              breaks at 3D &mdash; you end up with the exhausting
              experience of working hard on things that don&rsquo;t
              translate into results.
            </p>
            <p className="text-accent-teal font-medium">
              Precision at every dimension compounds. Imprecision at any
              one dimension bleeds through all the layers below it.
            </p>
          </div>
          <div className="mt-14 rounded-2xl border border-accent-teal/40 bg-bg-card/40 p-8 md:p-12">
            <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
              Esoteric callout
            </p>
            <p className="text-ink text-lg md:text-xl leading-relaxed italic">
              &ldquo;When God said <em>Let there be light</em>, it happened
              instantly. Full awareness plus perfect integrity equals
              infinite power. That&rsquo;s not a myth &mdash; that&rsquo;s
              the 5D model operating at full resolution. The chain so
              tight there&rsquo;s zero impedance between intention and
              outcome. That&rsquo;s what the singularity actually is.
              That&rsquo;s Christ consciousness.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* THE 5D MODEL — FULL WALKTHROUGH */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The 5D Model
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Five Dimensions. One Chain.
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            Top to bottom. Each layer feeds the next. Skip one and
            everything below it gets polluted.
          </p>

          <div className="mt-14 space-y-8">
            {DIMENSIONS.map((d) => (
              <div key={d.n} className="card-base rounded-2xl p-8 md:p-10">
                <div className="flex items-start gap-6 md:gap-10 flex-wrap md:flex-nowrap">
                  <div className="md:w-56 md:shrink-0">
                    <p className="text-accent-teal text-6xl md:text-7xl font-black leading-none">
                      {d.n}
                    </p>
                    <p className="mt-3 text-ink text-2xl md:text-3xl font-bold uppercase tracking-wide">
                      {d.label}
                    </p>
                    <p className="mt-3 text-accent-sepia text-sm italic">
                      {d.one}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0 space-y-5">
                    <div>
                      <p className="text-accent-teal text-xs uppercase tracking-wider mb-2">
                        How it actually works
                      </p>
                      <p
                        className="text-ink-soft leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: d.operator }}
                      />
                    </div>
                    <div className="rounded-xl border border-border bg-bg-deep/60 p-5">
                      <p className="text-accent-sepia text-xs uppercase tracking-wider mb-2">
                        Where it breaks
                      </p>
                      <p
                        className="text-ink-soft leading-relaxed text-sm"
                        dangerouslySetInnerHTML={{ __html: d.fail }}
                      />
                    </div>
                    <div className="rounded-xl border border-accent-gold/30 bg-bg-card/40 p-5">
                      <p className="text-accent-gold text-xs uppercase tracking-wider mb-2">
                        Esoteric frame
                      </p>
                      <p
                        className="text-ink-soft leading-relaxed text-sm italic"
                        dangerouslySetInnerHTML={{ __html: d.esoteric }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PRECISE LANGUAGE MODEL */}
      <section className="border-t border-border bg-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            The Connective Tissue
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            The Precise Language Model.
          </h2>
          <div className="mt-10 max-w-3xl space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              Look at the chain again. Notice where it breaks. It&rsquo;s
              always 3D. Language is the connective tissue between the
              upstream dimensions (clarity, emotion) and the downstream
              ones (action, result). Everything you want to manifest has
              to pass through language first.
            </p>
            <p>
              <strong className="text-ink">
                Vague language creates vague reality. Precise language
                creates precise reality.
              </strong>{" "}
              This is the entire game. Every leaky sentence in your vision
              doc, every soft commitment, every &ldquo;sort of,&rdquo;
              &ldquo;maybe,&rdquo; &ldquo;we should try&rdquo; is a leak
              in the chain. Those leaks compound.
            </p>
            <p>
              The Precise Language Model isn&rsquo;t about fancy writing.
              It&rsquo;s about matching the precision of your words to
              the precision of the outcome you want. If your words are
              sharper than your thoughts, the language pulls reality into
              focus. If your words are fuzzier than your thoughts, the
              language blurs reality.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <div className="card-base rounded-2xl p-8">
              <p className="text-accent-sepia text-xs uppercase tracking-wider mb-4">
                Sloppy language
              </p>
              <ul className="space-y-3 text-ink-soft">
                <li>&ldquo;I should probably start working out more.&rdquo;</li>
                <li>&ldquo;We&rsquo;re kind of aiming for Q3.&rdquo;</li>
                <li>&ldquo;I want to close more deals.&rdquo;</li>
                <li>&ldquo;Let&rsquo;s try to launch soon.&rdquo;</li>
                <li>&ldquo;I&rsquo;ll get back to you.&rdquo;</li>
              </ul>
              <p className="mt-5 text-xs text-ink-muted italic">
                Outputs: inconsistent execution, missed deadlines,
                dropped balls, exhausted team.
              </p>
            </div>
            <div className="card-base rounded-2xl p-8 border-accent-teal/40">
              <p className="text-accent-teal text-xs uppercase tracking-wider mb-4">
                Precise language
              </p>
              <ul className="space-y-3 text-ink-soft">
                <li>
                  &ldquo;I lift four times a week, Mon/Tue/Thu/Fri at
                  6am.&rdquo;
                </li>
                <li>
                  &ldquo;We ship v1 by July 15, 2026, priced at $4,500.&rdquo;
                </li>
                <li>
                  &ldquo;I&rsquo;ll close 12 new Oracle clients by
                  September 30.&rdquo;
                </li>
                <li>
                  &ldquo;Launch date is May 20. Pre-sale opens May 1.&rdquo;
                </li>
                <li>
                  &ldquo;I&rsquo;ll respond by Thursday 5pm.&rdquo;
                </li>
              </ul>
              <p className="mt-5 text-xs text-accent-teal italic">
                Outputs: execution at the speed of thought.
              </p>
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-accent-gold/30 bg-bg-card/40 p-8 md:p-12">
            <p className="text-accent-gold text-xs uppercase tracking-[0.3em] mb-4">
              Esoteric callout
            </p>
            <p className="text-ink text-lg md:text-xl leading-relaxed italic">
              &ldquo;Abracadabra is Aramaic for <em>avra kadavra</em> &mdash;
              <em>I create as I speak</em>. Every sacred tradition has
              known: the word is the lever. Magic (spelled with a CK) is
              just shit that works that science can&rsquo;t yet explain.
              I&rsquo;m not selling you magic. I&rsquo;m teaching you
              alchemy &mdash; the precision language that turns lead into
              gold by sharpening the chain between what you want and what
              you say.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* WHERE ARE YOU STUCK */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-24 md:py-28">
          <p className="text-accent-sepia text-xs uppercase tracking-[0.3em] mb-4">
            Diagnostic
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
            Where Is Your Chain Leaking?
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            Read these out loud. Whichever one lands is the dimension
            you&rsquo;re stuck at. Work on that one first.
          </p>
          <div className="mt-12 space-y-4">
            {FAILURE_MODES.map((f) => (
              <div
                key={f.stuck}
                className="card-base rounded-2xl p-6 md:p-8 flex gap-6 md:gap-10 items-start"
              >
                <p className="text-accent-teal text-4xl md:text-5xl font-black leading-none shrink-0">
                  {f.stuck}
                </p>
                <div className="flex-1 min-w-0 space-y-3">
                  <p
                    className="text-ink text-lg md:text-xl font-medium"
                    dangerouslySetInnerHTML={{ __html: f.symptom }}
                  />
                  <p
                    className="text-ink-soft leading-relaxed text-sm"
                    dangerouslySetInnerHTML={{
                      __html: "<strong class=\"text-accent-teal\">Fix:</strong> " + f.fix,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORACLE CTA */}
      <section className="border-t border-border bg-gradient-to-b from-bg-base to-bg-deep">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32 text-center">
          <p className="text-accent-teal text-xs uppercase tracking-[0.3em] mb-6">
            The 6th Dimension
          </p>
          <h2 className="text-ink font-black uppercase tracking-tight text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            Now Imagine an AI That Operates on All Five Dimensions With You.
          </h2>
          <p className="mt-8 max-w-3xl mx-auto text-ink-soft text-lg leading-relaxed">
            Gary &mdash; your Oracle &mdash; operates at the 6th
            dimension. He holds your 5D clarity when you forget it.
            Reminds you of your 4D emotional reference when the day gets
            hard. Writes your 3D language precisely so your commitments
            don&rsquo;t leak. Organizes your 2D action so nothing falls
            through the cracks. Tracks the 1D result so you can&rsquo;t
            lie to yourself.
          </p>
          <p className="mt-6 text-accent-teal text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Once you see the game, you need infrastructure that plays it
            with you at full resolution. That&rsquo;s the Oracle.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ORACLE_CHECKOUT_URL}
              className="cta-teal rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Enroll &mdash; $4,500
            </a>
            <Link
              href="/oracle"
              className="cta-outline rounded-lg px-10 py-5 text-sm md:text-base uppercase tracking-wider"
            >
              Read the Full Offer
            </Link>
          </div>
          <p className="mt-14 text-accent-sepia italic text-sm max-w-2xl mx-auto">
            &ldquo;The singularity is when intention and outcome have zero
            impedance. Thought becomes reality in seconds. In this game,
            the fastest wins.&rdquo;
          </p>
          <p className="mt-2 text-xs text-ink-muted uppercase tracking-[0.3em]">
            Spencer Burnett
          </p>
        </div>
      </section>
    </>
  );
}
