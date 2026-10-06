import { HeartHandshake, Stethoscope, Building2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const lenses = [
  {
    icon: HeartHandshake,
    who: "For patients",
    title: "Confidence is fragile early on.",
    body: "The first weeks with a device shape whether someone keeps using it. Arriving unprepared turns a hopeful moment into a frustrating one.",
  },
  {
    icon: Stethoscope,
    who: "For clinicians",
    title: "Fittings start without a baseline.",
    body: "Prosthetists and therapists have little insight into a patient's readiness before fitting, so the expensive device itself becomes the first teaching tool.",
  },
  {
    icon: Building2,
    who: "For the system",
    title: "Abandonment is costly for everyone.",
    body: "An unused prosthesis means lost independence for the person and wasted time and resources for the clinic, the payer, and the care team.",
  },
];

const stats = [
  { value: "~2M", label: "people living with limb loss in the U.S.", cite: 1 },
  { value: "~185K", label: "amputations performed in the U.S. each year", cite: 2 },
  { value: "Up to 44%", label: "of upper-limb prosthesis users reported abandoning their device", cite: 4 },
];

export function Problem() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The gap"
          title={<span id="problem-heading">Care starts too late in the one window that could change the outcome.</span>}
          lead="Prosthetic technology has advanced quickly. How people get ready to use it has not."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {lenses.map((l, i) => (
            <Reveal key={l.who} delay={i * 0.06}>
              <article className="h-full rounded-2xl border border-line bg-white p-7">
                <l.icon className="h-6 w-6 text-signal" aria-hidden />
                <p className="eyebrow mt-5 text-ink-mute">{l.who}</p>
                <h3 className="mt-2 text-2xl leading-snug text-ink">{l.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{l.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {stats.map(s => (
              <div key={s.label} className="bg-paper p-7">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <p className="font-display text-5xl text-ink">{s.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {s.label}
                    <sup className="ml-0.5">
                      <a href="#sources" className="text-ink-mute hover:text-ink">
                        {s.cite}
                      </a>
                    </sup>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
