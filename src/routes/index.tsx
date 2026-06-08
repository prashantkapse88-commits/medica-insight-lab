import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import logoUrl from "@/assets/medica-logo.jpeg";
import heroBg from "@/assets/hero-bg.jpg";
import microbiomeImg from "@/assets/microbiome.jpg";
import platformImg from "@/assets/platform.jpg";
import labImg from "@/assets/lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MEDICA Tokyo Laboratories — Clinical Intelligence Platform" },
      { name: "description", content: "Advanced clinical intelligence platform for microbiome and translational research. Real-world clinical science, multi-omics, and Eureka discovery." },
      { property: "og:title", content: "MEDICA Tokyo Laboratories" },
      { property: "og:description", content: "Redefining clinical research through in-live, real-world microbiome science." },
    ],
  }),
  component: Index,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      <span className="h-px w-10 bg-primary" />
      <span className="text-[11px] tracking-[0.28em] uppercase font-semibold text-primary">
        {children}
      </span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.08_265)] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-32 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-[oklch(0.72_0.18_220)]" />
              <span className="text-[11px] tracking-[0.32em] uppercase font-semibold text-[oklch(0.85_0.1_220)]">
                Tokyo · Yokohama · Japan
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8">
              MEDICA
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-[oklch(0.85_0.08_220)] mt-4 tracking-wide">
                Tokyo Laboratories
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/85 max-w-3xl font-light leading-relaxed mb-4">
              Advanced Clinical Intelligence Platform for Microbiome &amp; Translational Research.
            </p>
            <p className="text-base md:text-lg text-[oklch(0.78_0.08_220)] max-w-2xl mb-12">
              Redefining clinical research through in-live, real-world microbiome science.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-deep font-semibold rounded-full hover:bg-[oklch(0.95_0.04_230)] transition-all shadow-2xl hover:scale-[1.02]"
              >
                Discover MEDICA
                <span aria-hidden>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-medium rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.3em] uppercase animate-pulse">
          Scroll
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 lg:py-40 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <SectionLabel>About MEDICA</SectionLabel>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                From Observation
                <span className="block bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
                  to Precision Innovation
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most clinical research validates products after development. MEDICA was built on a different belief:
                <span className="block mt-4 text-foreground font-medium italic">
                  "The most valuable discoveries begin with observing real human responses first."
                </span>
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <p className="text-lg leading-relaxed text-foreground/85">
                <strong className="text-primary-deep">MEDICA Clinical Intelligence</strong> is a clinic-based innovation model where doctors, pharmacists, and researchers work directly with patients in real-life conditions to continuously evaluate biological responses, formulation efficacy, and unexpected therapeutic outcomes — before product finalization.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Rather than relying solely on isolated endpoints or short-term testing, MEDICA integrates longitudinal patient observation, clinical practice, and translational research into the development process itself.
              </p>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/40 to-secondary border border-border">
                <p className="text-base leading-relaxed text-foreground/90">
                  At MEDICA, the clinic is not simply a validation site. It is a{" "}
                  <strong className="text-primary">living intelligence platform</strong> for next-generation innovation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-5 text-primary-deep">What This Model Enables</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Faster formulation optimization",
                    "More clinically relevant innovation",
                    "Stronger long-term efficacy validation",
                    "Discovery of secondary benefits & Eureka effects",
                    "Human-centered product development grounded in real-world biology",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border shadow-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--gradient-brand)" }} />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY PILLARS */}
      <section className="py-24 lg:py-32" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Real clinical impact. Real human biology. Real-world innovation.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "01",
                title: "Clinical Intelligence",
                body: "A clinic-based innovation model evaluating biological responses, formulation efficacy, and therapeutic outcomes in real-life conditions.",
              },
              {
                n: "02",
                title: "Real Clinical Impact",
                body: "Combining live observation, longitudinal monitoring, inflammation-focused medicine, and multi-omics to develop from real human biology.",
              },
              {
                n: "03",
                title: "Beyond Endpoints",
                body: "We evaluate interconnected impact across microbiome, inflammation, metabolic signaling, vascular health, and longevity biomarkers.",
              },
              {
                n: "04",
                title: "Vision & Objective",
                body: "Discover what was previously unseen. Connect new dots into intelligence — understanding how biology truly responds in real life.",
              },
            ].map((p) => (
              <div
                key={p.n}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-[var(--shadow-elegant)] transition-all"
              >
                <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
                  {p.n}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-primary-deep">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL INTELLIGENCE */}
      <section id="clinical" className="py-28 lg:py-40 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionLabel>Clinical Intelligence</SectionLabel>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                Multi-Dimensional
                <span className="block text-primary">Clinical Intelligence</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Most clinical trials measure a limited number of predefined endpoints. At MEDICA, we believe true biological understanding requires a multi-dimensional view of human response.
              </p>
              <p className="text-base text-foreground/75 leading-relaxed">
                Our clinical platform combines real-world patient observation with advanced multi-omics analysis, inflammation monitoring, functional biomarkers, and longitudinal clinical evaluation to understand the <strong className="text-primary-deep">total biological impact</strong> of an intervention.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 to-primary-glow/20 rounded-3xl blur-2xl" />
              <img
                src={microbiomeImg}
                alt="Microbiome research"
                loading="lazy"
                width={1280}
                height={960}
                className="relative rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="p-10 rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/30">
              <h3 className="text-2xl font-semibold mb-6 text-primary-deep">What We Evaluate</h3>
              <ul className="space-y-3">
                {[
                  "Gut microbiome dynamics",
                  "Immune and inflammatory pathways",
                  "Cellular communication and metabolic signaling",
                  "Stress resilience and recovery capacity",
                  "Skin and vascular responses",
                  "Aging and longevity-associated biomarkers",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80">
                    <span className="mt-2 h-1 w-4 bg-primary shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-2xl text-white" style={{ background: "var(--gradient-brand)" }}>
              <h3 className="text-2xl font-semibold mb-6">Clinical Intelligence Tools</h3>
              <ul className="space-y-3">
                {[
                  "Retinal and microvascular imaging",
                  "Inflammatory biomarker tracking",
                  "Microbiome functional analysis",
                  "Metabolic and mitochondrial indicators",
                  "Transcriptomic and RNA expression profiling",
                  "Patient-reported longitudinal outcomes",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90">
                    <span className="mt-2 h-1 w-4 bg-white shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SCIENTIFIC PLATFORM */}
      <section id="platform" className="py-28 lg:py-40 relative overflow-hidden" style={{ background: "linear-gradient(180deg, oklch(0.14 0.08 265), oklch(0.18 0.1 260))" }}>
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${platformImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.08_265)] via-[oklch(0.14_0.08_265)]/80 to-[oklch(0.14_0.08_265)]/60" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[oklch(0.72_0.18_220)]" />
              <span className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[oklch(0.85_0.1_220)]">
                Scientific Platform
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              Advanced Scientific Platform
            </h2>
            <p className="text-lg text-white/75 leading-relaxed">
              The MEDICA platform integrates multiple layers of biological analysis to generate clinically meaningful insights — a systems biology approach to research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {[
              "16S rRNA & shotgun metagenomic sequencing",
              "Metabolomics and lipidomics",
              "RNA sequencing and transcriptomics",
              "Spatial biology and imaging",
              "Organoid and co-culture models",
              "AI-driven multi-omics integration",
            ].map((cap, i) => (
              <div
                key={cap}
                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="text-[oklch(0.78_0.16_220)] font-mono text-xs mb-3">
                  / {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-white/90 font-medium">{cap}</p>
              </div>
            ))}
          </div>

          <div className="p-10 lg:p-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-semibold text-white mb-8">Systems Biology Interpretation</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                "Microbiome composition & function",
                "Host-microbiome interaction",
                "Biological response pathways",
                "Inflammation & systemic adaptation",
                "Mechanisms of longevity & resilience",
              ].map((item) => (
                <div key={item} className="text-center">
                  <div className="text-sm text-white/80 leading-snug">{item}</div>
                </div>
              ))}
            </div>
            <p className="mt-10 pt-8 border-t border-white/10 text-white/70 italic text-center">
              "At MEDICA, clinical research is not viewed through a single endpoint. It is interpreted as an interconnected biological ecosystem."
            </p>
          </div>
        </div>
      </section>

      {/* EUREKA EFFECT */}
      <section id="eureka" className="py-28 lg:py-40 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <SectionLabel>Eureka Effect</SectionLabel>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02] mb-8">
              The
              <span className="bg-clip-text text-transparent mx-3" style={{ backgroundImage: "var(--gradient-brand)" }}>
                Eureka Effect
              </span>
              Discovery Model
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At MEDICA, a "negative" clinical trial is not considered a failure.
              <span className="block mt-2 text-foreground font-medium">It is often the beginning of a new scientific discovery.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <div className="p-10 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
              <div className="text-6xl mb-6">💡</div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-deep">Discovery Examples</h3>
              <ul className="space-y-4 text-foreground/80">
                {[
                  "Improvements in skin condition observed during gut health studies",
                  "Better sleep quality or stress resilience during metabolic trials",
                  "Immune modulation identified during probiotic research",
                  "Unexpected biomarker shifts linked to inflammation, aging, longevity",
                ].map((d) => (
                  <li key={d} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                    <span className="text-primary font-mono text-sm pt-1">▸</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-2xl text-white relative overflow-hidden" style={{ background: "var(--gradient-brand)" }}>
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
              <h3 className="text-2xl font-semibold mb-4 relative">From Signal to Innovation</h3>
              <p className="text-white/90 leading-relaxed mb-6 relative">
                Because patients are followed longitudinally within real clinical environments, MEDICA detects subtle but meaningful biological changes that traditional short-term trials overlook.
              </p>
              <div className="space-y-3 relative">
                {[
                  "New scientific hypotheses",
                  "Improved formulations",
                  "Expanded therapeutic positioning",
                  "Future product innovation opportunities",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-3 text-white/95">
                    <span className="h-px w-6 bg-white/60" />
                    <span className="font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MEDICA */}
      <section id="why" className="py-28 lg:py-40" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <SectionLabel>Why MEDICA</SectionLabel>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                Where rigor meets
                <span className="block text-primary">discovery.</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                A Japan-based research infrastructure with global scientific perspective.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {[
                "Integrated clinical, laboratory & translational capabilities",
                "Longitudinal real-world patient observation",
                "Advanced microbiome & multi-omics technologies",
                "Expertise in inflammation & systemic signaling",
                "Functional biomarker & retinal microvascular analysis",
                "AI-driven biological data integration",
                "Precision biomarker discovery & translational medicine",
                "International scientific collaborations",
                "Japan-based research infrastructure — global perspective",
              ].map((item, i) => (
                <div
                  key={item}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:translate-y-[-2px] transition-all group"
                >
                  <div className="text-xs font-mono text-primary/60 mb-2">/ {String(i + 1).padStart(2, "0")}</div>
                  <p className="text-sm font-medium text-foreground/90 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="py-28 lg:py-40 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Scientific Leadership
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dr. Taro Hirata",
                role: "Managing Director & Founder",
                bio: "Founder of the MEDICA Clinical Intelligence model. Pioneering clinic-based translational research that bridges real-world patient observation with multi-omics innovation.",
                initials: "TH",
              },
              {
                name: "Dr. Yuki Ikeda",
                role: "Lead Investigator & Clinical Trial Director",
                bio: "Directs MEDICA's longitudinal clinical programs, leading investigations into inflammation, microbiome-host interactions, and biomarker discovery.",
                initials: "YI",
              },
            ].map((p) => (
              <div key={p.name} className="group p-10 rounded-2xl border border-border bg-card hover:shadow-[var(--shadow-elegant)] transition-all">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {p.initials}
                </div>
                <h3 className="text-2xl font-bold mb-1 text-primary-deep">{p.name}</h3>
                <div className="text-sm uppercase tracking-[0.18em] text-primary font-semibold mb-5">{p.role}</div>
                <p className="text-muted-foreground leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 lg:py-40 relative overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.18 0.1 260), oklch(0.12 0.06 265))" }}>
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${labImg})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.06_265)] via-transparent to-[oklch(0.18_0.1_260)]/80" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[oklch(0.72_0.18_220)]" />
                <span className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[oklch(0.85_0.1_220)]">
                  Contact
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-8">
                Contact MEDICA
              </h2>
              <p className="text-lg text-white/75 leading-relaxed max-w-lg">
                For scientific collaboration, clinical research partnerships, and inquiries about the MEDICA platform.
              </p>
            </div>

            <div className="p-10 lg:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <img src={logoUrl} alt="MEDICA" className="h-14 w-auto mb-8 rounded-sm" />

              <div className="space-y-6 text-white">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[oklch(0.78_0.12_220)] mb-2">Address</div>
                  <p className="text-white/90 leading-relaxed">
                    MEDICA Tokyo Laboratories<br />
                    14-5 Kusunokichō, Nishi-ku,<br />
                    Yokohama-shi, Kanagawa-ken 220-0003<br />
                    Japan
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-[oklch(0.78_0.12_220)] mb-2">Managed by</div>
                  <p className="text-white font-medium">Dr. Taro Hirata</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[oklch(0.1_0.05_265)] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 tracking-wide">
            © {new Date().getFullYear()} MEDICA Tokyo Laboratories. All rights reserved.
          </p>
          <p className="text-xs text-white/40 uppercase tracking-[0.2em]">
            Clinical Intelligence · Microbiome · Translational Research
          </p>
        </div>
      </footer>
    </div>
  );
}
