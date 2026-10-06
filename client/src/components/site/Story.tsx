import { useEffect, useRef, useState } from "react";

const stages = [
  { key: "surgery", label: "Surgery", flex: 1.4 },
  { key: "healing", label: "Healing & waiting", flex: 3.6 },
  { key: "fitting", label: "Fitting", flex: 1.4 },
  { key: "life", label: "Daily life", flex: 1.8 },
];

const chapters = [
  {
    stage: 0,
    kicker: "Chapter one",
    title: "Life changes in an afternoon.",
    body: "Upper-limb loss is sudden for some and long anticipated for others. Either way, the person who wakes up is facing a new body and a long road.",
  },
  {
    stage: 1,
    kicker: "Chapter two",
    title: "Then comes the wait.",
    body: "Weeks, often months, of healing before a prosthesis can be fitted. The wound recovers, but the muscles that will one day open and close a hand go quiet. For most people there is no structured way to practice.",
  },
  {
    stage: 2,
    kicker: "Chapter three",
    title: "Fitting day arrives with a lot of hope.",
    body: "A myoelectric prosthesis responds to signals from the residual limb. Many people expect it to feel natural right away. In reality, control is a skill, and it takes time and practice to learn.",
  },
  {
    stage: 3,
    kicker: "Chapter four",
    title: "Too many devices end up in a drawer.",
    body: "When early sessions feel unpredictable, confidence drops. Studies report that roughly one in four adults stop using electric upper-limb prostheses, and some recent estimates run higher.",
    cite: [3, 4],
  },
  {
    stage: -1,
    kicker: "What if",
    title: "What if the learning started during the wait?",
    body: "That is Attune. We turn the pre-fitting window from lost time into preparation, so people meet their prosthesis already knowing how it feels to control one.",
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
            <p className="eyebrow text-cream/60">{attuneMode ? "The care pathway with Attune" : "The care pathway today"}</p>
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
            <p className="mt-8 hidden max-w-md font-display text-2xl leading-snug text-cream/90 lg:block">
              {attuneMode
                ? "Same timeline. A different starting point."
                : "The weeks before fitting are the longest part of this picture, and the least supported."}
            </p>
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
              className={`flex min-h-[70vh] flex-col justify-center transition-opacity duration-500 ${
                active === i ? "opacity-100" : "opacity-35"
              }`}
            >
              <p className={`eyebrow ${c.stage === -1 ? "text-[#9db6f2]" : "text-cream/55"}`}>{c.kicker}</p>
              <h3 className="mt-4 text-3xl leading-tight text-cream sm:text-4xl">{c.title}</h3>
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
