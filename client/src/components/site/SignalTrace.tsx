import { useEffect, useRef } from "react";

type Props = {
  levelRef: React.MutableRefObject<number>;
  /** "raw" draws a noisy EMG-like trace, "envelope" draws the smoothed effort line. */
  mode?: "raw" | "envelope";
  /** Optional target zone [low, high] in 0..1, drawn behind the trace. */
  band?: [number, number] | null;
  className?: string;
  label: string;
};

function gaussian() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

/** Canvas trace that scrolls right-to-left. Illustrative only. */
export function SignalTrace({ levelRef, mode = "raw", band = null, className, label }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bandRef = useRef(band);
  bandRef.current = band;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let samples: number[] = [];
    let visible = true;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.ceil(width / 2);
      samples = Array.from({ length: count }, (_, i) => samples[samples.length - count + i] ?? 0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      const level = levelRef.current;

      const push = mode === "raw" ? 3 : 1;
      for (let i = 0; i < push; i++) {
        samples.push(
          mode === "raw"
            ? gaussian() * (0.035 + 0.4 * level)
            : level + gaussian() * 0.008,
        );
        samples.shift();
      }

      ctx.clearRect(0, 0, width, height);
      const pad = 8;
      const toY = (v: number) => height - pad - v * (height - pad * 2);

      const b = bandRef.current;
      if (b) {
        ctx.fillStyle = "rgba(47, 95, 208, 0.12)";
        ctx.fillRect(0, toY(b[1]), width, toY(b[0]) - toY(b[1]));
        ctx.strokeStyle = "rgba(47, 95, 208, 0.45)";
        ctx.setLineDash([4, 4]);
        ctx.lineWidth = 1;
        [b[0], b[1]].forEach(v => {
          ctx.beginPath();
          ctx.moveTo(0, toY(v));
          ctx.lineTo(width, toY(v));
          ctx.stroke();
        });
        ctx.setLineDash([]);
      }

      ctx.beginPath();
      const step = width / (samples.length - 1);
      samples.forEach((s, i) => {
        const x = i * step;
        const y = mode === "raw" ? height / 2 - s * (height / 2 - pad) : toY(Math.max(0, Math.min(1, s)));
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.strokeStyle = mode === "raw" ? "#2f5fd0" : "#1a1819";
      ctx.lineWidth = mode === "raw" ? 1.25 : 2.5;
      ctx.lineJoin = "round";
      ctx.stroke();

      if (mode === "envelope") {
        const last = samples[samples.length - 1] ?? 0;
        ctx.beginPath();
        ctx.arc(width - 4, toY(Math.max(0, Math.min(1, last))), 5, 0, Math.PI * 2);
        ctx.fillStyle = "#1a1819";
        ctx.fill();
      }
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [levelRef, mode]);

  return <canvas ref={canvasRef} className={className} role="img" aria-label={label} />;
}
