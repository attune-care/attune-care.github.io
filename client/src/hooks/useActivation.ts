import { useCallback, useEffect, useRef, useState } from "react";

type Options = {
  /** How quickly the simulated signal rises while "contracting" (per second). */
  rise?: number;
  /** How quickly it relaxes back to rest (per second). */
  fall?: number;
  /** Called every animation frame with the current level and frame delta. */
  onFrame?: (level: number, dt: number) => void;
};

/**
 * A simple, illustrative stand-in for a muscle signal: press and hold to
 * "contract", release to relax. This is a teaching toy for the website, not
 * Attune's signal pipeline.
 */
export function useActivation({ rise = 4.5, fall = 2.4, onFrame }: Options = {}) {
  const levelRef = useRef(0);
  const pressedRef = useRef(false);
  const onFrameRef = useRef(onFrame);
  onFrameRef.current = onFrame;

  const [level, setLevel] = useState(0);
  const [pressed, setPressedState] = useState(false);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const target = pressedRef.current ? 1 : 0;
      const k = pressedRef.current ? rise : fall;
      const next = levelRef.current + (target - levelRef.current) * (1 - Math.exp(-k * dt));
      levelRef.current = next;
      setLevel(prev => (Math.abs(prev - next) > 0.002 ? next : prev));
      onFrameRef.current?.(next, dt);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [rise, fall]);

  const setPressed = useCallback((value: boolean) => {
    pressedRef.current = value;
    setPressedState(value);
  }, []);

  /** Spread onto a <button> to make it the "muscle". */
  const bind = {
    onPointerDown: (e: React.PointerEvent<HTMLButtonElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      setPressed(true);
    },
    onPointerUp: () => setPressed(false),
    onPointerCancel: () => setPressed(false),
    onLostPointerCapture: () => setPressed(false),
    onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if ((e.key === " " || e.key === "Enter") && !e.repeat) {
        e.preventDefault();
        setPressed(true);
      }
    },
    onKeyUp: (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setPressed(false);
      }
    },
    onBlur: () => setPressed(false),
    onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
  };

  const release = useCallback(() => setPressed(false), [setPressed]);

  return { level, levelRef, pressed, bind, release };
}
