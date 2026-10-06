import { Check } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const reasons = [
  {
    title: "An overlooked window",
    body: "Nearly every upper-limb pathway includes weeks to months between surgery and fitting. Today that time is largely unstructured, and it is the earliest chance to set people up for success.",
  },
  {
    title: "Complementary by design",
    body: "Attune works alongside device makers, prosthetists, and therapists instead of competing with them. That opens partnership channels rather than displacement battles.",
  },
  {
    title: "Lightweight and accessible",
    body: "Non-invasive, home-friendly, and built around existing clinical workflows, so adoption doesn't depend on new infrastructure.",
  },
  {
    title: "A new layer of insight",
    body: "Pre-fitting engagement and progress are rarely captured today. Attune makes that progress visible to the care team.",
  },
];

const model = [
  { who: "Clinics", what: "Prosthetic and rehabilitation clinics adopt Attune for their pre-fitting patients." },
  { who: "Patients", what: "People train at home, guided by their clinician, through short and encouraging sessions." },
  { who: "Outcomes", what: "Better-prepared patients, more informed fittings, and stronger long-term device use." },
];

const pathway = [
  { stage: "Before fitting", today: "Largely unsupported", attune: true },
  { stage: "Device fitting", today: "Prosthetists & O&P clinics" },
  { stage: "After fitting", today: "Occupational therapy & rehab" },
  { stage: "The device", today: "Prosthetic manufacturers" },
];

const milestones = [
  { done: true, text: "Founded in 2025 at The Luminosity Lab" },
  { done: true, text: "Functional prototype: muscle signals driving a virtual hand" },
  { done: true, text: "Early conversations with clinicians and rehabilitation partners" },
  { done: false, text: "Hardware and mixed-reality integration, then live demonstrations" },
  { done: false, text: "Small-scale pilots with clinical partners" },
  { done: false, text: "Clinical validation and a scalable care-team platform" },
];

export function Opportunity() {
  return (
    <section id="opportunity" className="py-24 sm:py-32" aria-labelledby="opportunity-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The opportunity"
          title={<span id="opportunity-heading">Defining pre-prosthetic readiness as a category.</span>}
          lead="Most innovation in prosthetics goes into the device and what happens after fitting. Attune focuses on what comes before, a stage that has received far less attention."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-line bg-white p-7">
                <h3 className="font-sans text-lg font-semibold text-ink">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{r.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="text-3xl text-ink">Where Attune fits in the care pathway</h3>
            <ul className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
              {pathway.map(p => (
                <li
                  key={p.stage}
                  className={`flex items-center justify-between gap-4 px-5 py-4 ${p.attune ? "bg-signal-soft" : ""}`}
                >
                  <span className="font-semibold text-ink">{p.stage}</span>
                  <span className={`text-right text-sm ${p.attune ? "font-semibold text-signal-deep" : "text-ink-soft"}`}>
                    {p.attune ? "Attune" : p.today}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-ink-mute">Today, the first row is mostly empty. That is the space we're building for.</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="text-3xl text-ink">Business model</h3>
            <p className="mt-3 text-ink-soft">B2B2C: we partner with clinics, and patients benefit directly.</p>
            <ol className="mt-6 space-y-3">
              {model.map((m, i) => (
                <li key={m.who} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{m.who}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{m.what}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <div data-tone="dark" className="rounded-[2rem] bg-ink p-8 text-cream sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="eyebrow text-cream/60">Where we are</p>
                <h3 className="mt-4 text-3xl leading-tight text-cream sm:text-4xl">Early, focused, and building with clinicians from day one.</h3>
                <p className="mt-4 leading-relaxed text-cream/70">
                  We are an early-stage venture looking for clinical pilot partners, advisors, and investors who
                  believe rehabilitation should start sooner.
                </p>
              </div>
              <ol className="relative space-y-5 border-l border-cream/20 pl-7">
                {milestones.map(m => (
                  <li key={m.text} className="relative">
                    <span
                      className={`absolute -left-[2.15rem] top-0.5 flex h-5 w-5 items-center justify-center rounded-full ${
                        m.done ? "bg-cream text-ink" : "border border-cream/40 bg-ink"
                      }`}
                      aria-hidden
                    >
                      {m.done && <Check className="h-3 w-3" strokeWidth={3} />}
                    </span>
                    <p className={m.done ? "text-cream" : "text-cream/65"}>
                      <span className="sr-only">{m.done ? "Completed: " : "Next: "}</span>
                      {m.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
