import { useActivation } from "@/hooks/useActivation";
import { Reveal } from "./Reveal";
import { SignalTrace } from "./SignalTrace";
import { VirtualHand } from "./VirtualHand";

export function Hero() {
  const { level, levelRef, pressed, bind } = useActivation();

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-cream/70 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal>
            <h1 className="text-[2.75rem] leading-[1.04] text-ink sm:text-6xl lg:text-[4.25rem]">
              Prosthetic success shouldn&rsquo;t begin on <em className="text-signal">delivery day.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              Attune lets people with upper-limb loss practice controlling a myoelectric hand in the months
              before their prosthesis arrives.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-paper hover:bg-ink/85"
              >
                Get in touch
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-full border border-ink/15 px-7 py-3.5 text-base font-semibold text-ink hover:border-ink/40"
              >
                Our story
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <figure className="rounded-[2rem] border border-line bg-white p-6 sm:p-8">
            <div className="flex items-center justify-center">
              <VirtualHand closure={level} className="h-56 w-auto sm:h-64" />
            </div>
            <div className="mt-2 rounded-xl bg-paper-deep/70 p-2">
              <SignalTrace
                levelRef={levelRef}
                mode="raw"
                className="block h-14 w-full"
                label="Simulated muscle signal that grows while you hold the button"
              />
            </div>
            <button
              type="button"
              {...bind}
              aria-pressed={pressed}
              className={`mt-5 w-full select-none touch-none rounded-2xl px-5 py-4 text-base font-semibold text-white transition-colors ${
                pressed ? "bg-signal-deep" : "bg-signal hover:bg-signal-deep"
              }`}
            >
              {pressed ? "Now let go" : "Press and hold"}
            </button>
            <figcaption className="mt-4 text-center text-sm leading-relaxed text-ink-mute">
              In Attune, a muscle signal from the residual limb moves the hand. Here, your click stands in for it.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
