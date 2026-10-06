import { ArrowDown, Hand } from "lucide-react";
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
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-cream blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-12rem] left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-signal-soft blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3.5 py-1.5 text-xs font-medium text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              Pre-fitting readiness for upper-limb prosthetics
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-[2.75rem] leading-[1.04] text-ink sm:text-6xl lg:text-[4.25rem]">
              Prosthetic success shouldn&rsquo;t begin on <em className="text-signal">delivery day.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              Attune helps people with upper-limb loss practice myoelectric control during the weeks before
              their prosthesis arrives, and gives their care team an earlier view of how ready they are.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-paper hover:bg-ink/85"
              >
                Partner with Attune
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-base font-semibold text-ink hover:border-ink/40"
              >
                Read our story <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <figure className="relative rounded-[2rem] border border-line bg-white/80 p-6 shadow-[0_30px_80px_-40px_rgba(26,24,25,0.35)] backdrop-blur sm:p-8">
            <div className="flex items-center justify-between">
              <p className="eyebrow text-ink-mute">Try the idea</p>
              <p className="text-xs font-medium tabular-nums text-ink-mute" aria-live="off">
                effort {Math.round(level * 100)}%
              </p>
            </div>
            <div className="mt-2 flex items-center justify-center">
              <VirtualHand closure={level} className="h-56 w-auto sm:h-64" />
            </div>
            <div className="mt-2 rounded-xl bg-paper-deep/70 p-2">
              <SignalTrace
                levelRef={levelRef}
                mode="raw"
                className="block h-16 w-full"
                label="Simulated muscle signal that grows while you hold the button"
              />
            </div>
            <button
              type="button"
              {...bind}
              aria-pressed={pressed}
              className={`mt-5 flex w-full select-none touch-none items-center justify-center gap-2 rounded-2xl px-5 py-4 text-base font-semibold transition-colors ${
                pressed ? "bg-signal-deep text-white" : "bg-signal text-white hover:bg-signal-deep"
              }`}
            >
              <Hand className="h-5 w-5" aria-hidden />
              {pressed ? "Holding… now let go" : "Press and hold to close the hand"}
            </button>
            <figcaption className="mt-4 text-center text-sm leading-relaxed text-ink-mute">
              In Attune, a real muscle signal from your residual limb drives a virtual hand like this one.
              Here, your click stands in for it.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
