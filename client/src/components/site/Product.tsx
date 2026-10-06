import { Activity, Gamepad2, House, LineChart } from "lucide-react";
import { publicAsset } from "@/lib/site";
import { PracticeRound } from "./PracticeRound";
import { ReadinessPreview } from "./ReadinessPreview";
import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  {
    icon: Activity,
    title: "Wear",
    body: "Lightweight, non-invasive surface sensors read muscle activity from the residual limb. No surgery and nothing implanted.",
  },
  {
    icon: Gamepad2,
    title: "Practice",
    body: "Those signals move a virtual hand in a mixed-reality space, through short, game-like sessions built on motor-learning principles.",
  },
  {
    icon: House,
    title: "Build",
    body: "People practice at home on their own schedule and build consistency, familiarity, and confidence before the stakes are real.",
  },
  {
    icon: LineChart,
    title: "Share",
    body: "Clinicians see readable progress and engagement insights, so the first fitting starts from a baseline instead of a guess.",
  },
];

export function Product() {
  return (
    <section id="product" className="bg-paper-deep/60 py-24 sm:py-32" aria-labelledby="product-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How Attune works"
          title={<span id="product-heading">A readiness layer between surgery and fitting.</span>}
          lead="Attune is a training and expectation-setting platform. It complements the prosthesis and the clinical team. It doesn't replace either."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <ol className="grid gap-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.05}>
                <div className="flex gap-5 rounded-2xl border border-line bg-white p-6">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-signal-soft text-signal">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-ink">
                      <span className="mr-2 text-ink-mute tabular-nums">0{i + 1}</span>
                      {s.title}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-ink-soft">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <figure>
              <img
                src={publicAsset("/img/armband-concept.jpg")}
                alt="Concept illustration: sensors on the upper arm send muscle signals to a virtual hand on screen"
                className="w-full rounded-3xl border border-line bg-white"
                loading="lazy"
                width={1600}
                height={900}
              />
              <figcaption className="mt-3 text-sm text-ink-mute">Concept illustration. Not the final hardware design.</figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-24">
          <PracticeRound />
        </div>

        <div className="mt-24">
          <ReadinessPreview />
        </div>
      </div>
    </section>
  );
}
