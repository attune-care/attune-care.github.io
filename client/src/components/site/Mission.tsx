import { Reveal } from "./Reveal";

const values = [
  { title: "People first", body: "Built with amputees, caregivers, and clinicians, not just for them." },
  { title: "Psychologically safe", body: "A low-pressure place to practice, where mistakes cost nothing." },
  { title: "Honest expectations", body: "Real readiness comes from understanding what control actually feels like." },
];

export function Mission() {
  return (
    <section className="bg-cream/60 py-24 sm:py-32" aria-labelledby="mission-heading">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow text-ink-mute">Our mission</p>
          <h2 id="mission-heading" className="mt-5 text-4xl leading-[1.15] text-ink sm:text-[3.4rem]">
            No one should meet their new hand for the first time on fitting day.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            We want the weeks after amputation to feel like the start of recovery, not a pause before it. We
            want people to arrive at fitting with confidence and realistic expectations, and with the sense that
            their care team already knows them.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 text-left sm:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl bg-white/70 p-6">
                <p className="font-semibold text-ink">{v.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
