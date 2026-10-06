import { Info } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

type Snapshot = {
  label: string;
  sessions: number;
  consistency: number;
  confidence: number;
  trend: number[];
  note: string;
  status: { text: string; tone: "early" | "building" | "ready" };
};

// Illustrative values only, not patient data or study results.
const snapshots: Snapshot[] = [
  {
    label: "Week 1",
    sessions: 3,
    consistency: 34,
    confidence: 2.1,
    trend: [18, 26, 22, 31, 34],
    note: "Getting familiar with the sensation. Short, frequent sessions recommended.",
    status: { text: "Getting started", tone: "early" },
  },
  {
    label: "Week 3",
    sessions: 11,
    consistency: 58,
    confidence: 3.3,
    trend: [34, 40, 47, 45, 52, 58],
    note: "Open and close are becoming repeatable. Fatigue shows late in sessions.",
    status: { text: "Building control", tone: "building" },
  },
  {
    label: "Week 6",
    sessions: 24,
    consistency: 81,
    confidence: 4.4,
    trend: [58, 63, 70, 68, 76, 79, 81],
    note: "Steady, graded control. Patient reports feeling prepared for fitting.",
    status: { text: "Ready to discuss fitting", tone: "ready" },
  },
];

const toneClass = {
  early: "bg-paper-deep text-ink-soft",
  building: "bg-cream text-ink",
  ready: "bg-signal-soft text-signal-deep",
};

function Sparkline({ values }: { values: number[] }) {
  const w = 240;
  const h = 64;
  const max = 100;
  const pts = values.map((v, i) => [(i / (values.length - 1)) * w, h - (v / max) * h] as const);
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 -6 ${w} ${h + 12}`} preserveAspectRatio="none" className="h-16 w-full" aria-hidden>
      <line x1="0" x2={w} y1={h} y2={h} stroke="#e6ddd2" vectorEffect="non-scaling-stroke" />
      <path d={`${d} L${w},${h} L0,${h} Z`} fill="#e7edfb" />
      <path d={d} fill="none" stroke="#2f5fd0" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function ReadinessPreview() {
  const [idx, setIdx] = useState(0);
  const s = snapshots[idx];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
      <Reveal className="order-2 lg:order-1">
        <div className="rounded-[2rem] border border-line bg-white p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-ink-mute">Patient A · Pre-fitting</p>
              <p className="font-sans text-lg font-semibold text-ink">Readiness overview</p>
            </div>
            <div role="tablist" aria-label="Training week" className="flex rounded-full bg-paper-deep p-1">
              {snapshots.map((snap, i) => (
                <button
                  key={snap.label}
                  role="tab"
                  type="button"
                  aria-selected={i === idx}
                  onClick={() => setIdx(i)}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                    i === idx ? "bg-white text-ink shadow-sm" : "text-ink-mute hover:text-ink"
                  }`}
                >
                  {snap.label}
                </button>
              ))}
            </div>
          </div>

          <div role="tabpanel" aria-live="polite" className="mt-6">
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${toneClass[s.status.tone]}`}>
              {s.status.text}
            </span>

            <dl className="mt-5 grid grid-cols-3 gap-3">
              {[
                { k: "Practice sessions", v: String(s.sessions) },
                { k: "Activation consistency", v: `${s.consistency}%` },
                { k: "Self-reported confidence", v: `${s.confidence.toFixed(1)} / 5` },
              ].map(m => (
                <div key={m.k} className="rounded-xl bg-paper p-3.5">
                  <dt className="text-xs leading-snug text-ink-mute">{m.k}</dt>
                  <dd className="mt-1 font-display text-2xl tabular-nums text-ink sm:text-3xl">{m.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 rounded-xl border border-line p-4">
              <p className="text-xs font-medium text-ink-mute">Consistency trend</p>
              <Sparkline values={s.trend} />
            </div>

            <p className="mt-5 rounded-xl bg-paper p-4 text-sm leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">Clinician note: </span>
              {s.note}
            </p>
          </div>

          <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-ink-mute">
            <Info className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden />
            Illustrative mock-up with fictional values. Not real patient data or study results.
          </p>
        </div>
      </Reveal>

      <Reveal className="order-1 lg:order-2">
        <p className="eyebrow text-signal">For the care team</p>
        <h3 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">Walk into the first fitting already knowing your patient.</h3>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Attune turns weeks of home practice into a simple picture of engagement, progress, and confidence. It
          gives clinicians context, not another system to manage.
        </p>
        <p className="mt-4 text-ink-soft">Switch between weeks to see how a readiness picture might take shape.</p>
      </Reveal>
    </div>
  );
}
