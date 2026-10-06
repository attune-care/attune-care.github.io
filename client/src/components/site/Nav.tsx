import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, publicAsset } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const probe = document.elementFromPoint(window.innerWidth / 2, 70);
      setOnDark(Boolean(probe?.closest("[data-tone='dark']")));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = onDark && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open
          ? "border-b border-line bg-paper"
          : scrolled
            ? onDark
              ? "border-b border-cream/10 bg-night/85 backdrop-blur-md"
              : "border-b border-line bg-paper/90 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Attune home">
          <img src={publicAsset("/logo.png?v=4")} alt="" className="h-9 w-9 rounded-lg" />
          <span className={`font-display text-xl font-medium tracking-tight ${dark ? "text-cream" : "text-ink"}`}>attune</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} className={`text-sm font-medium ${dark ? "text-cream/75 hover:text-cream" : "text-ink-soft hover:text-ink"}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold sm:inline-flex ${dark ? "bg-cream text-ink hover:bg-cream/85" : "bg-ink text-paper hover:bg-ink/85"}`}
          >
            Get in touch
          </a>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden ${dark ? "text-cream" : "text-ink"}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper px-5 pb-6 md:hidden">
          <ul className="flex flex-col py-2">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-full justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
