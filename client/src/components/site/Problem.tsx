import { Reveal } from "./Reveal";

const stats = [
  { value: "~2M", label: "people in the U.S. live with limb loss", cite: 1 },
  { value: "~185K", label: "amputations happen in the U.S. each year", cite: 2 },
  { value: "Up to 44%", label: "of upper-limb prosthesis users stop using their device", cite: 4 },
];

export function Problem() {
  return (
    <section className="py-20 sm:py-24" aria-label="The scale of the problem">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <dl className="grid gap-10 sm:grid-cols-3">
            {stats.map(s => (
              <div key={s.label} className="border-t border-ink/15 pt-6">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <p className="font-display text-5xl text-ink">{s.value}</p>
                  <p className="mt-2 leading-relaxed text-ink-soft">
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
