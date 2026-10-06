import { RotateCcw, Target } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { useActivation } from "@/hooks/useActivation";
import { Reveal } from "./Reveal";
import { SignalTrace } from "./SignalTrace";
import { VirtualHand } from "./VirtualHand";

const rounds: { band: [number, number]; name: string; hint: string }[] = [
  { band: [0.2, 0.42], name: "Gentle", hint: "Tap lightly. Small bursts keep the line low." },
  { band: [0.45, 0.67], name: "Steady", hint: "Find a rhythm: hold, release, hold." },
  { band: [0.68, 0.9], name: "Strong", hint: "Hold longer and release only briefly." },
];
const HOLD_SECONDS = 2.5;

type Phase = "ready" | "playing" | "done";

export function PracticeRound() {
  const [phase, setPhase] = useState<Phase>("ready");
  const [round, setRound] = useState(0);
  const [progress, setProgress] = useState(0);
  const [inBand, setInBand] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const state = useRef({ phase: "ready" as Phase, round: 0, held: 0, elapsed: 0 });
  const releaseRef = useRef<() => void>(() => {});

  const onFrame = useCallback((level: number, dt: number) => {
    const s = state.current;
    if (s.phase !== "playing") return;
    const [lo, hi] = rounds[s.round].band;
    const inside = level >= lo && level <= hi;
    s.elapsed += dt;
    s.held = inside ? s.held + dt : Math.max(0, s.held - dt * 0.6);
    setInBand(inside);
    setProgress(Math.min(1, s.held / HOLD_SECONDS));
    setElapsed(s.elapsed);
    if (s.held >= HOLD_SECONDS) {
      if (s.round < rounds.length - 1) {
        s.round += 1;
        s.held = 0;
        setRound(s.round);
      } else {
        s.phase = "done";
        setPhase("done");
        releaseRef.current();
      }
    }
  }, []);

  const { level, levelRef, pressed, bind, release } = useActivation({ rise: 3.2, fall: 2.2, onFrame });
  releaseRef.current = release;

  const start = () => {
    state.current = { phase: "playing", round: 0, held: 0, elapsed: 0 };
    setRound(0);
    setProgress(0);
    setElapsed(0);
    setPhase("playing");
  };

  const current = rounds[round];
  const band = phase === "done" ? null : current.band;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.25fr]">
      <Reveal>
        <p className="eyebrow text-signal">A taste of a session</p>
        <h3 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">Control is about how much effort, not just whether you try.</h3>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Using a myoelectric hand means learning to grade your effort: enough to grip a cup, not so much that
          you crush it. Try keeping the line inside the shaded zone for three short rounds.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink-mute">
          A simplified simulation for this website, controlled by mouse, touch, or the space bar. Real Attune
          sessions use your own muscle signal.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="rounded-[2rem] border border-line bg-white p-5 shadow-[0_30px_80px_-50px_rgba(26,24,25,0.4)] sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-1.5" aria-label="Rounds">
              {rounds.map((r, i) => (
                <span
                  key={r.name}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    phase === "done" || i < round
                      ? "bg-signal text-white"
                      : i === round && phase === "playing"
                        ? "bg-ink text-paper"
                        : "bg-paper-deep text-ink-mute"
                  }`}
                >
                  {r.name}
                </span>
              ))}
            </div>
            <p className="text-xs font-medium tabular-nums text-ink-mute">
              {phase === "playing" ? `${elapsed.toFixed(1)}s` : " "}
            </p>
          </div>

          <div className="mt-5 grid grid-cols-[auto_1fr] items-center gap-4">
            <VirtualHand closure={level} className="h-32 w-auto sm:h-40" />
            <div className="rounded-xl bg-paper-deep/70 p-2">
              <SignalTrace
                levelRef={levelRef}
                mode="envelope"
                band={band}
                className="block h-36 w-full sm:h-44"
                label="Effort level over time, with the target zone shaded"
              />
            </div>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-paper-deep" aria-hidden>
            <div
              className={`h-full rounded-full transition-[width] duration-150 ${inBand ? "bg-signal" : "bg-ink/30"}`}
              style={{ width: `${(phase === "done" ? 1 : progress) * 100}%` }}
            />
          </div>

          <div className="mt-4 min-h-[3rem] text-sm leading-relaxed" aria-live="polite">
            {phase === "ready" && <p className="text-ink-soft">Press start, then hold and release to steer the line.</p>}
            {phase === "playing" && (
              <p className={inBand ? "font-medium text-signal" : "text-ink-soft"}>
                {inBand ? "That's it. Stay right there." : current.hint}
              </p>
            )}
            {phase === "done" && (
              <p className="text-ink">
                <span className="font-semibold">Nicely done, in {elapsed.toFixed(1)} seconds.</span> That feeling of
                finding the right amount of effort is what Attune helps people build, a little every day, before
                fitting.
              </p>
            )}
          </div>

          {phase === "playing" ? (
            <button
              type="button"
              {...bind}
              aria-pressed={pressed}
              className={`flex w-full select-none touch-none items-center justify-center gap-2 rounded-2xl px-5 py-4 text-base font-semibold text-white transition-colors ${
                pressed ? "bg-signal-deep" : "bg-signal hover:bg-signal-deep"
              }`}
            >
              {pressed ? "Contracting…" : "Hold to contract"}
            </button>
          ) : (
            <button
              type="button"
              onClick={start}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-5 py-4 text-base font-semibold text-paper hover:bg-ink/85"
            >
              {phase === "done" ? (
                <>
                  <RotateCcw className="h-4 w-4" aria-hidden /> Try again
                </>
              ) : (
                <>
                  <Target className="h-4 w-4" aria-hidden /> Start practice round
                </>
              )}
            </button>
          )}
        </div>
      </Reveal>
    </div>
  );
}
