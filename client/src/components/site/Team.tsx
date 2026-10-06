import { publicAsset, team } from "@/lib/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Team() {
  return (
    <section id="team" className="py-24 sm:py-32" aria-labelledby="team-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Team"
          title={<span id="team-heading">Built at The Luminosity Lab.</span>}
          lead="Seven of us across neuroscience, electrical engineering, software, and human-centered design."
        />

        <Reveal className="mt-12">
          <img
            src={publicAsset("/img/team-photo.jpg")}
            alt="The Attune team standing together outdoors"
            className="aspect-[2/1] w-full rounded-[2rem] object-cover sm:aspect-[21/9]"
            loading="lazy"
          />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 0.03}>
              <a href={m.linkedin} target="_blank" rel="noreferrer" className="group block">
                <img
                  src={m.photo}
                  alt=""
                  className="aspect-square w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <p className="mt-3 font-semibold text-ink group-hover:text-signal">
                  {m.name}
                  <span className="sr-only"> on LinkedIn</span>
                </p>
                <p className="text-sm text-ink-soft">{m.role}</p>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
