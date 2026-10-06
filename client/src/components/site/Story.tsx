import { useEffect, useRef, useState } from "react";

const stages = [
  { key: "surgery", label: "Surgery", flex: 1.4 },
  { key: "healing", label: "Healing & waiting", flex: 3.6 },
  { key: "fitting", label: "Fitting", flex: 1.4 },
  { key: "life", label: "Daily life", flex: 1.8 },
];

const chapters = [
  {
    stage: 1,
    title: "After amputation, there's a wait.",
    body: "Healing takes weeks, often months, before a prosthesis can be fitted. For most people, there's nothing structured to practice in that time.",
  },
  {
    stage: 2,
    title: "Then the device arrives.",
    body: "A myoelectric hand is driven by muscle signals from the residual limb. Almost no one has felt that before fitting day. Control is a skill, and most people start learning it from zero.",
  },
  {
    stage: 3,
    title: "Too many people give up.",
    body: "Early sessions are frustrating, and confidence goes fast. Studies report that about a quarter of adults stop using electric upper-limb prostheses, and some put the number much higher.",
    cite: [3, 4],
  },
  {
    stage: -1,
    title: "We start the learning during the wait.",
    body: "Attune turns the months before fitting into practice time, so people arrive already knowing what control feels like.",
  },
];

export function Story() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const current = chapters[active];
  const attuneMode = current.stage === -1;

  return (
    <section id="story" data-tone="dark" className="relative bg-night text-cream" aria-label="Why Attune exists">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Sticky visual */}
        <div className="sticky top-16 z-10 -mx-5 bg-night/95 px-5 pt-8 pb-6 backdrop-blur sm:-mx-8 sm:px-8 lg:top-0 lg:mx-0 lg:flex lg:h-screen lg:items-center lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
          <div className="w-full">
            <p className="eyebrow text-cream/60">{attuneMode ? "With Attune" : "The path to a prosthesis"}</p>
            <div className="mt-5 flex h-14 w-full gap-1.5 sm:h-16" aria-hidden>
              {stages.map((s, i) => {
                const on = attuneMode ? i === 1 : i <= current.stage;
                const isActive = attuneMode ? i === 1 : i === current.stage;
                return (
                  <div
                    key={s.key}
                    className="relative overflow-hidden rounded-lg"
                    style={{ flex: s.flex }}
                  >
                    <div
                      className={`absolute inset-0 transition-colors duration-700 ${
                        attuneMode && i === 1
                          ? "bg-signal"
                          : on
                            ? isActive
                              ? "bg-cream"
                              : "bg-cream/35"
                            : "bg-cream/10"
                      }`}
                    />
                    {attuneMode && i === 1 && (
                      <div className="absolute inset-0 flex items-center justify-center font-display text-lg text-white sm:text-xl">
                        Attune
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-3 flex w-full gap-1.5 text-[0.65rem] font-medium uppercase leading-tight tracking-wide text-cream/60 sm:text-xs sm:tracking-wider">
              {stages.map(s => (
                <span key={s.key} style={{ flex: s.flex }} className="min-w-0 break-words">
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Chapters */}
        <ol className="relative pb-[20vh] lg:py-[30vh]">
          {chapters.map((c, i) => (
            <li
              key={c.title}
              ref={el => {
                refs.current[i] = el;
              }}
              data-index={i}
              className={`flex min-h-[60vh] flex-col justify-center transition-opacity duration-500 ${
                active === i ? "opacity-100" : "opacity-35"
              }`}
            >
              <h3 className=" text-3xl leading-tight text-cream sm:text-4xl">{c.title}</h3>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream/75">
                {c.body}
                {c.cite && (
                  <sup className="ml-0.5 text-xs">
                    {c.cite.map((n, j) => (
                      <a key={n} href="#sources" className="text-cream/60 underline-offset-2 hover:underline">
                        {j > 0 ? "," : ""}
                        {n}
                      </a>
                    ))}
                  </sup>
                )}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
