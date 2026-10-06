import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
};

export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const Comp = as === "li" ? motion.li : motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      <p className={`eyebrow ${dark ? "text-cream/70" : "text-signal"}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-4xl leading-[1.1] sm:text-5xl ${dark ? "text-cream" : "text-ink"}`}>{title}</h2>
      {lead && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-cream/75" : "text-ink-soft"}`}>{lead}</p>
      )}
    </Reveal>
  );
}
