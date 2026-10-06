import { ArrowUpRight } from "lucide-react";
import { links, publicAsset, sources } from "@/lib/site";
import { Reveal } from "./Reveal";

const audiences = [
  {
    who: "Clinics & therapists",
    body: "Help shape early pilots and tell us what would make pre-fitting care work in your practice.",
    cta: "Become a pilot partner",
    href: links.partnerForm,
    external: true,
  },
  {
    who: "Investors",
    body: "We're an early-stage venture defining a new category in prosthetic care. Let's talk.",
    cta: "Request an intro",
    href: links.mailto("Investor inquiry"),
  },
  {
    who: "People with limb loss & families",
    body: "Your experience matters most. We'd be grateful to hear what the wait was like for you.",
    cta: "Share your story",
    href: links.mailto("Sharing my experience"),
  },
];

export function Contact() {
  return (
    <section id="contact" data-tone="dark" className="bg-night py-24 text-cream sm:py-32" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-cream/60">Build this with us</p>
          <h2 id="contact-heading" className="mt-4 text-4xl leading-[1.1] text-cream sm:text-5xl">
            The future of prosthetic success starts earlier.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.who} delay={i * 0.05}>
              <a
                href={a.href}
                {...(a.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex h-full flex-col rounded-2xl border border-cream/15 bg-white/[0.03] p-7 transition-colors hover:border-cream/40 hover:bg-white/[0.06]"
              >
                <p className="eyebrow text-cream/60">{a.who}</p>
                <p className="mt-3 flex-1 leading-relaxed text-cream/80">{a.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-cream">
                  {a.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-cream/70">
          Or email us directly at{" "}
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
              Pre-fitting readiness for myoelectric prosthetics. Built at The Luminosity Lab.
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
          Attune is an early-stage product in development. It is not a prosthetic controller or a diagnostic
          device, and it has not been cleared or approved by the U.S. FDA or any other regulatory body. Nothing on
          this site is medical advice. Interactive demonstrations and dashboard views on this site are simulations
          with fictional data.
        </p>

        <div className="mt-8 flex flex-col justify-between gap-3 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Attune. All rights reserved.</p>
          <p>This site does not use tracking cookies or collect personal health information.</p>
        </div>
      </div>
    </footer>
  );
}
