import { Linkedin } from "lucide-react";
import { links, publicAsset, team } from "@/lib/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Team() {
  const [lead, ...rest] = team;

  return (
    <section id="team" className="py-24 sm:py-32" aria-labelledby="team-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The team"
          title={<span id="team-heading">Engineers, scientists, and designers who wanted the wait to mean something.</span>}
          lead="Attune brings together neurophysiology, hardware, software, and human-centered design. We were built at The Luminosity Lab, and we're guided by conversations with the people who live this pathway every day."
        />

        <Reveal className="mt-12">
          <figure className="overflow-hidden rounded-[2rem] border border-line">
            <img
              src={publicAsset("/img/team-photo.jpg")}
              alt="The Attune team standing together outdoors"
              className="aspect-[2/1] w-full object-cover sm:aspect-[21/9]"
              loading="lazy"
            />
          </figure>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
              <img
                src={lead.photo}
                alt={`Portrait of ${lead.name}`}
                className="aspect-square w-full max-w-[16rem] rounded-2xl object-cover"
                loading="lazy"
              />
              <p className="eyebrow mt-6 text-signal">{lead.role}</p>
              <h3 className="mt-2 text-3xl text-ink">{lead.name}</h3>
              <p className="mt-1 text-sm text-ink-mute">{lead.discipline}</p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {/* TODO(founder): replace with a short first-person note on why you started Attune. */}
                Founded Attune in 2025 and leads product, connecting the team's work across hardware, software,
                and human-centered research around the people we serve.
              </p>
              <a
                href={lead.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ink hover:text-signal"
              >
                <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn<span className="sr-only">: {lead.name}</span>
              </a>
            </article>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {rest.map((m, i) => (
              <Reveal as="li" key={m.name} delay={i * 0.04}>
                <article className="flex h-full items-center gap-5 rounded-2xl border border-line bg-white p-5">
                  <img
                    src={m.photo}
                    alt={`Portrait of ${m.name}`}
                    className="h-20 w-20 flex-none rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <h3 className="font-sans text-base font-semibold text-ink">{m.name}</h3>
                    <p className="text-sm text-ink-soft">{m.role}</p>
                    <p className="mt-0.5 text-xs text-ink-mute">{m.discipline}</p>
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft hover:text-signal"
                    >
                      <Linkedin className="h-3.5 w-3.5" aria-hidden /> LinkedIn<span className="sr-only">: {m.name}</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="mt-8">
          <p className="rounded-2xl border border-dashed border-ink/20 p-6 text-ink-soft">
            <span className="font-semibold text-ink">Growing our clinical advisory circle.</span> If you're a
            prosthetist, occupational therapist, physiatrist, or researcher in upper-limb rehabilitation, we'd love
            to learn from you.{" "}
            <a href={links.mailto("Advisory interest")} className="font-semibold text-signal underline-offset-4 hover:underline">
              Reach out
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
