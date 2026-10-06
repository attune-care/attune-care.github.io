import { Reveal } from "./Reveal";

export function Mission() {
  return (
    <section className="bg-cream/60 py-24 sm:py-32" aria-labelledby="mission-heading">
      <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="eyebrow text-ink-mute">Our mission</p>
        <h2 id="mission-heading" className="mt-5 text-4xl leading-[1.15] text-ink sm:text-[3.25rem]">
          No one should meet their new hand for the first time on fitting day.
        </h2>
      </Reveal>
    </section>
  );
}
