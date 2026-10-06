import { ArrowUpRight } from "lucide-react";
import { links, publicAsset, sources } from "@/lib/site";
import { Reveal } from "./Reveal";

const audiences = [
  {
    who: "Clinicians",
    body: "Help shape our first pilots.",
    cta: "Pilot interest form",
    href: links.partnerForm,
    external: true,
  },
  {
    who: "Investors",
    body: "Let's talk about where Attune is going.",
    cta: "Email us",
    href: links.mailto("Investor inquiry"),
  },
  {
    who: "People with limb loss and families",
    body: "Tell us what the wait was like. It shapes what we build.",
    cta: "Share your story",
    href: links.mailto("My experience"),
  },
];

export function Contact() {
  return (
    <section id="contact" data-tone="dark" className="bg-night py-24 text-cream sm:py-32" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <h2 id="contact-heading" className="text-4xl leading-[1.1] text-cream sm:text-5xl">
            Help us start recovery sooner.
          </h2>
        </Reveal>

        <ul className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
          {audiences.map(a => (
            <li key={a.who}>
              <a
                href={a.href}
                {...(a.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <span>
                  <span className="block font-semibold text-cream">{a.who}</span>
                  <span className="text-cream/70">{a.body}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-cream group-hover:underline group-hover:underline-offset-4">
                  {a.cta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-cream/70">
          Or write to{" "}
          <a href={`mailto:${links.email}`} className="font-semibold text-cream underline underline-offset-4">
            {links.email}
          </a>
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer data-tone="dark" className="bg-night text-cream/60">
      <div className="mx-auto max-w-6xl border-t border-cream/10 px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={publicAsset("/logo.png?v=4")} alt="" className="h-9 w-9 rounded-lg" />
              <span className="font-display text-xl text-cream">attune</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Practice before the prosthesis.
            </p>
          </div>
          <div id="sources">
            <p className="eyebrow text-cream/50">Sources</p>
            <ol className="mt-3 space-y-2 text-xs leading-relaxed">
              {sources.map(s => (
                <li key={s.id}>
                  <span className="mr-1.5 text-cream/40">{s.id}.</span>
                  {s.text}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="mt-10 rounded-xl border border-cream/10 p-4 text-xs leading-relaxed text-cream/55">
          <span className="font-semibold text-cream/75">Important: </span>
          Attune is in development. It is not a medical device and has not been cleared or approved by the FDA.
          Nothing on this site is medical advice. The demos on this page are simulations with made-up data.
        </p>

        <div className="mt-8 flex flex-col justify-between gap-3 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Attune. All rights reserved.</p>
          <p>No tracking cookies. No health data collected.</p>
        </div>
      </div>
    </footer>
  );
}
