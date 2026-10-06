import { publicAsset } from "@/lib/site";
import { ReadinessPreview } from "./ReadinessPreview";
import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  {
    title: "Practice",
    body: "Light surface sensors read muscle activity from the residual limb and move a virtual hand in mixed reality, through short, game-like sessions at home.",
  },
  {
    title: "Build",
    body: "People build control and confidence at their own pace, without the pressure of a real device.",
  },
  {
    title: "Share",
    body: "Clinicians see engagement and progress, so the first fitting starts from a baseline instead of a guess.",
  },
];

export function Product() {
  return (
    <section id="product" className="bg-paper-deep/60 py-24 sm:py-32" aria-labelledby="product-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="How it works" title={<span id="product-heading">Practice before the prosthesis.</span>} />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <ol className="space-y-8">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.05}>
                <div className="flex gap-5">
                  <span className="font-display text-2xl text-signal tabular-nums">{i + 1}</span>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1 leading-relaxed text-ink-soft">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal as="li">
              <p className="border-l-2 border-ink/15 pl-5 text-sm leading-relaxed text-ink-mute">
                Attune is a training tool. It isn&rsquo;t a prosthetic controller or a diagnostic device, and it
                works alongside the care team.
              </p>
            </Reveal>
          </ol>
          <Reveal>
            <figure>
              <img
                src={publicAsset("/img/armband-concept.jpg")}
                alt="Concept illustration: sensors on the upper arm send muscle signals to a virtual hand on screen"
                className="w-full rounded-3xl"
                loading="lazy"
                width={1600}
                height={900}
              />
              <figcaption className="mt-3 text-sm text-ink-mute">Concept illustration</figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-28">
          <ReadinessPreview />
        </div>
      </div>
    </section>
  );
}
