import { Reveal, SectionHeading } from "./Reveal";

const milestones = [
  { done: true, text: "Founded in 2025 at The Luminosity Lab" },
  { done: true, text: "Working prototype: muscle signals move a virtual hand" },
  { done: true, text: "Early conversations with clinicians" },
  { done: false, text: "Hardware and mixed-reality integration" },
  { done: false, text: "Pilots with clinical partners" },
  { done: false, text: "Clinical validation" },
];

export function Opportunity() {
  return (
    <section id="opportunity" className="py-24 sm:py-32" aria-labelledby="opportunity-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Attune"
          title={<span id="opportunity-heading">Every upper-limb patient goes through the wait. Almost nothing is built for it.</span>}
          lead="Prosthetics innovation has gone into the device and into rehab after fitting. Attune covers the stretch before, and works alongside device makers and clinics instead of competing with them."
        />

        <div className="mt-14 grid gap-12 border-t border-line pt-12 md:grid-cols-2">
          <Reveal>
            <h3 className="font-sans text-lg font-semibold text-ink">Business model</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Clinics adopt Attune for patients waiting to be fitted. Patients train at home. Clinics get
              better-prepared patients and more informed fittings, and patients are more likely to keep using
              their device.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="font-sans text-lg font-semibold text-ink">Where we are</h3>
            <ul className="mt-3 space-y-2">
              {milestones.map(m => (
                <li key={m.text} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className={`mt-2 h-2 w-2 flex-none rounded-full ${m.done ? "bg-signal" : "border border-ink/30"}`}
                  />
                  <span className={m.done ? "text-ink" : "text-ink-mute"}>
                    <span className="sr-only">{m.done ? "Done: " : "Next: "}</span>
                    {m.text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
