import { useEffect, useState } from "react";
import logoAsset from "@/assets/medica-logo.png.asset.json";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About MEDICA", href: "#about" },
  { label: "Clinical Intelligence", href: "#clinical" },
  { label: "Scientific Platform", href: "#platform" },
  { label: "Eureka Effect", href: "#eureka" },
  { label: "Why MEDICA", href: "#why" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src={logoAsset.url}
              alt="MEDICA Tokyo Laboratories"
              className="h-10 w-auto"
              width={160}
              height={40}
            />
          </a>

          <nav className="hidden xl:flex items-center gap-7">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[12px] uppercase tracking-[0.14em] font-medium transition-colors ${
                  scrolled
                    ? "text-foreground/70 hover:text-primary"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className={`xl:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="xl:hidden pb-6 flex flex-col gap-1 bg-background/95 backdrop-blur-xl -mx-6 px-6 border-t border-border">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.14em] font-medium text-foreground/80 hover:text-primary border-b border-border/50"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
