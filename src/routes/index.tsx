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
      { title: "MEDICA TOKYO LABORATORIES" },
      {
        name: "description",
        content:
          "Advanced Clinical Intelligence Platform for Microbiome & Translational Research",
      },
      { property: "og:title", content: "MEDICA TOKYO LABORATORIES" },
      {
        property: "og:description",
        content:
          "Redefining Clinical Research Through In-live, Real-World Microbiome Science",
      },
    ],
  }),
  component: Index,
});

const modelEnables = [
  "Faster formulation optimization",
  "More clinically relevant innovation",
  "Stronger long-term efficacy validation",
  "Discovery of secondary benefits and “Eureka Effects”",
  "Human-centered product development grounded in real-world biology",
];

const evaluations = [
  "Gut microbiome dynamics",
  "Immune and inflammatory pathways",
  "Cellular communication and metabolic signaling",
  "Stress resilience and recovery capacity",
  "Skin and vascular responses",
  "Aging and longevity-associated biomarkers",
];

const intelligenceTools = [
  "Retinal and microvascular imaging",
  "Inflammatory biomarker tracking",
  "Microbiome functional analysis",
  "Metabolic and mitochondrial indicators",
  "Transcriptomic and RNA expression profiling",
  "Patient-reported longitudinal outcomes",
];

const platformCapabilities = [
  "16S rRNA and shotgun metagenomic sequencing",
  "Metabolomics and lipidomics",
  "RNA sequencing and transcriptomics",
  "Spatial biology and imaging",
  "Organoid and co-culture models",
  "AI-driven multi-omics integration",
];

const systemsBiology = [
  "Microbiome composition and functionality",
  "Host-microbiome interaction",
  "Biological response pathways",
  "Inflammation and systemic adaptation",
  "Mechanisms linked to longevity and resilience",
];

const discoveryExamples = [
  "Improvements in skin condition observed during gut health studies",
  "Better sleep quality or stress resilience during metabolic trials",
  "Immune modulation identified during probiotic research",
  "Unexpected biomarker shifts associated with inflammation, aging, or longevity",
];

const signalInnovation = [
  "New scientific hypotheses",
  "Improved formulations",
  "Expanded therapeutic positioning",
  "Future product innovation opportunities",
];

const whyMedica = [
  "Integrated clinical, laboratory, and translational research capabilities",
  "Longitudinal real-world patient observation",
  "Advanced microbiome and multi-omics technologies",
  "Expertise in inflammation and systemic biological signaling",
  "Functional biomarker and retinal microvascular analysis",
  "AI-driven biological data integration",
  "Precision biomarker discovery and translational medicine",
  "International scientific collaborations",
  "Japan-based research infrastructure with global perspective",
];

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

function NumberedCard({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-xl bg-card border border-border shadow-sm hover:border-primary/40 hover:translate-y-[-2px] transition-all">
      <div className="text-xs font-mono text-primary/60 mb-3">
        / {String(index + 1).padStart(2, "0")}
      </div>
      <p className="text-sm font-medium text-foreground/90 leading-snug">
        {children}
      </p>
    </div>
  );
}

function IllustrationTile({
  index,
  children,
  dark = false,
}: {
  index: number;
  children: React.ReactNode;
  dark?: boolean;
}) {
  const panelClass = dark
    ? "border-white/10 bg-white/6 text-white hover:border-white/25 hover:bg-white/10"
    : "border-border bg-card text-foreground hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]";
  const illustrationClass = dark
    ? "bg-white/8 border-white/10"
    : "bg-gradient-to-br from-accent/60 to-secondary border-border";
  const textClass = dark ? "text-white/90" : "text-foreground/85";

  return (
    <div className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${panelClass}`}>
      <div className={`relative mb-5 h-24 overflow-hidden rounded-xl border ${illustrationClass}`}>
        <div className="absolute left-5 top-6 h-8 w-8 rounded-full bg-primary/80 shadow-[0_0_30px_oklch(0.42_0.18_255/_0.35)]" />
        <div className="absolute right-6 top-5 h-12 w-12 rounded-full border border-primary/35 bg-primary/10" />
        <div className="absolute bottom-5 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-[oklch(0.72_0.18_220)]/70" />
        <div className="absolute left-12 top-10 h-px w-[62%] rotate-6 bg-primary/40" />
        <div className="absolute bottom-8 left-[46%] h-px w-[30%] -rotate-12 bg-[oklch(0.72_0.18_220)]/50" />
        <span className="absolute bottom-3 right-4 font-mono text-xs text-primary/70">
          / {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className={`text-sm font-medium leading-snug ${textClass}`}>{children}</p>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

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
                HOME
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8">
              MEDICA TOKYO LABORATORIES
            </h1>
            <p className="text-xl md:text-2xl text-white/85 max-w-3xl font-light leading-relaxed mb-4">
              Advanced Clinical Intelligence Platform for Microbiome &amp; Translational Research
            </p>
            <p className="text-base md:text-lg text-[oklch(0.78_0.08_220)] max-w-2xl">
              Redefining Clinical Research Through In-live, Real-World Microbiome Science
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-28 lg:py-40 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <SectionLabel>What is MEDICA?</SectionLabel>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                MEDICA Clinical Intelligence
                <span
                  className="block bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  From Observation to Precision Innovation
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most clinical research validates products after development. MEDICA was built on a different belief:
              </p>
              <p className="mt-5 text-foreground font-medium italic leading-relaxed">
                The most valuable discoveries begin with observing real human responses first.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <p className="text-lg leading-relaxed text-foreground/85">
                MEDICA Clinical Intelligence is a clinic-based innovation model where doctors, pharmacists, and researchers work directly with patients in real-life conditions to continuously evaluate biological responses, formulation efficacy, and unexpected therapeutic outcomes before product finalization.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Rather than relying solely on isolated endpoints or short-term testing, MEDICA integrates longitudinal patient observation, clinical practice, and translational research into the development process itself.
              </p>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/40 to-secondary border border-border">
                <p className="text-base leading-relaxed text-foreground/90">
                  At MEDICA, the clinic is not simply a validation site. It is a living intelligence platform for next-generation innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 grid lg:grid-cols-2 gap-8">
            <div className="p-10 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-semibold mb-4 text-primary-deep">
                Real Clinical Impact
              </h3>
              <p className="text-xl font-medium mb-5">
                Real Clinical Impact. Real Human Biology. Real-World Innovation.
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Traditional clinical trials are often designed to validate predefined claims under controlled conditions after a product has already been developed.
                </p>
                <p>MEDICA follows a different philosophy.</p>
                <p>
                  By combining live clinical observation, longitudinal patient monitoring, inflammation-focused medicine, and advanced multi-omics science, MEDICA develops products based on real human biological response — not simply post-development validation.
                </p>
                <p>
                  Our clinic-based model allows researchers, doctors, and pharmacists to continuously observe how the body adapts over time in real-life conditions, generating deeper biological insight and more clinically relevant innovation.
                </p>
              </div>
            </div>

            <div className="p-10 rounded-2xl text-white" style={{ background: "var(--gradient-brand)" }}>
              <h3 className="text-2xl font-semibold mb-4">
                Why Traditional Research Misses Important Biology
              </h3>
              <p className="text-white/90 leading-relaxed mb-8">
                Rather than analyzing isolated endpoints alone, MEDICA evaluates the interconnected impact of interventions across microbiome function, inflammation pathways, metabolic signaling, stress adaptation, vascular health, and longevity-associated biomarkers.
              </p>
              <p className="text-white/90 leading-relaxed">
                This enables the discovery of meaningful clinical effects that traditional short-term paper-based trials frequently overlook.
              </p>
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            <div className="p-10 rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/30">
              <h3 className="text-2xl font-semibold mb-4 text-primary-deep">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At MEDICA, innovation is not limited to proving what was expected. It is about discovering what was previously unseen, collect new data and establish new dots that we can link together in next trials allowing to see finer details from all observations into intelligence.
              </p>
            </div>
            <div className="p-10 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-semibold mb-4 text-primary-deep">
                Our Objective
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At MEDICA, the objective is not only to prove efficacy on paper.
                </p>
                <p>
                  It is to understand how biology truly responds in real life and how to create a traction and next stage evolution of the medical solutions.
                </p>
                <p>Something like this. So its all connected and meaningful. Not an essay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <SectionLabel>ABOUT MEDICA</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              From Observation to Precision Innovation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Most clinical research validates products after development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MEDICA was built on a different belief:
            </p>
            <p className="text-xl text-foreground font-medium italic mt-4">
              The most valuable discoveries begin with observing real human responses first.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
              <p>
                MEDICA Clinical Intelligence is a clinic-based innovation model where doctors, pharmacists, and researchers work directly with patients in real-life conditions to continuously evaluate biological responses, formulation efficacy, and unexpected therapeutic outcomes before product finalization.
              </p>
              <p>
                Rather than relying solely on isolated endpoints or short-term testing, MEDICA integrates longitudinal patient observation, clinical practice, and translational research into the development process itself.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-5 text-primary-deep">
                What This Model Enables
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {modelEnables.map((item, i) => (
                  <IllustrationTile key={item} index={i}>
                    {item}
                  </IllustrationTile>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clinical" className="py-28 lg:py-40 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionLabel>CLINICAL INTELLIGENCE</SectionLabel>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                Multi-Dimensional
                <span className="block text-primary">Clinical Intelligence</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Most clinical trials measure a limited number of predefined endpoints.
                </p>
                <p>
                  At MEDICA, we believe true biological understanding requires a multi-dimensional view of human response.
                </p>
                <p>
                  Our clinical platform combines real-world patient observation with advanced multi-omics analysis, inflammation monitoring, functional biomarkers, and longitudinal clinical evaluation to understand the total biological impact of an intervention — not just isolated outcomes.
                </p>
                <p>
                  By integrating clinical expertise in inflammation, metabolic signaling, microbiome-host interaction, and systemic biological stress, MEDICA is able to identify interconnected physiological changes that traditional trial models often miss.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 to-primary-glow/20 rounded-3xl blur-2xl" />
              <img
                src={microbiomeImg}
                alt="CLINICAL INTELLIGENCE"
                loading="lazy"
                width={1280}
                height={960}
                className="relative rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="p-10 rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/30">
              <h3 className="text-2xl font-semibold mb-6 text-primary-deep">
                What We Evaluate
              </h3>
              <ul className="space-y-3">
                {evaluations.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/80">
                    <span className="mt-2 h-1 w-4 bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-2xl text-white" style={{ background: "var(--gradient-brand)" }}>
              <h3 className="text-2xl font-semibold mb-6">
                Functional Assessment &amp; Clinical Intelligence Tools
              </h3>
              <ul className="space-y-3">
                {intelligenceTools.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/90">
                    <span className="mt-2 h-1 w-4 bg-white shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="platform"
        className="py-28 lg:py-40 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.14 0.08 265), oklch(0.18 0.1 260))",
        }}
      >
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
                SCIENTIFIC PLATFORM
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              Advanced Scientific Platform
            </h2>
            <p className="text-lg text-white/75 leading-relaxed">
              The MEDICA platform integrates multiple layers of biological analysis to generate clinically meaningful insights.
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <h3 className="text-2xl font-semibold text-white">
              Platform Capabilities
            </h3>
            <p className="max-w-2xl text-sm text-white/65 leading-relaxed">
              Each capability contributes a layer of evidence that helps convert patient response into clinical intelligence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {platformCapabilities.map((item, i) => (
              <IllustrationTile key={item} index={i} dark>
                {item}
              </IllustrationTile>
            ))}
          </div>

          <div className="relative overflow-hidden p-10 lg:p-14 rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[oklch(0.72_0.18_220)]/12 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="relative mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-[oklch(0.72_0.18_220)]" />
                <span className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[oklch(0.85_0.1_220)]">
                  Systems Biology Interpretation
                </span>
              </div>
              <p className="text-xl text-white/85 leading-relaxed">
                This systems biology approach enables a deeper understanding of:
              </p>
            </div>
            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {systemsBiology.map((item, i) => (
                <IllustrationTile key={item} index={i} dark>
                  {item}
                </IllustrationTile>
              ))}
            </div>
            <div className="relative mt-10 rounded-2xl border border-white/10 bg-white/6 px-6 py-5">
              <p className="text-white/82 italic text-center leading-relaxed">
                At MEDICA, clinical research is not viewed through a single endpoint.
              </p>
              <p className="text-white/82 italic text-center leading-relaxed">
                It is interpreted as an interconnected biological ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="eureka" className="py-28 lg:py-40 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <SectionLabel>EUREKA EFFECT</SectionLabel>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02] mb-8">
              The
              <span
                className="bg-clip-text text-transparent mx-3"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                Eureka Effect
              </span>
              Discovery Model
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At MEDICA, a “negative” clinical trial is not considered a failure.
              <span className="block mt-2 text-foreground font-medium">
                It is often the beginning of a new scientific discovery.
              </span>
            </p>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              When a study does not achieve its original primary endpoint, our researchers go beyond conventional trial analysis by examining secondary endpoints, biomarker variations, and unexpected patient responses to uncover hidden clinical opportunities.
            </p>
            <p className="mt-4 text-lg text-foreground font-medium">
              Many meaningful discoveries emerge outside the original hypothesis.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <div className="p-10 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-semibold mb-6 text-primary-deep">
                Discovery Examples
              </h3>
              <ul className="space-y-4 text-foreground/80">
                {discoveryExamples.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <span className="text-primary font-mono text-sm pt-1">/</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-2xl text-white relative overflow-hidden" style={{ background: "var(--gradient-brand)" }}>
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
              <h3 className="text-2xl font-semibold mb-4 relative">
                From Signal to Innovation
              </h3>
              <p className="text-white/90 leading-relaxed mb-6 relative">
                Because patients are followed longitudinally within real clinical environments, MEDICA can detect subtle but meaningful biological changes that traditional short-term trials frequently overlook.
              </p>
              <p className="text-white/90 leading-relaxed mb-6 relative">
                This observational research philosophy transforms unexpected clinical signals into:
              </p>
              <div className="space-y-3 relative">
                {signalInnovation.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/95">
                    <span className="h-px w-6 bg-white/60" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="py-28 lg:py-40" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <SectionLabel>WHY MEDICA</SectionLabel>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                Why MEDICA
              </h2>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {whyMedica.map((item, i) => (
                <NumberedCard key={item} index={i}>
                  {item}
                </NumberedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="py-28 lg:py-40 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <SectionLabel>LEADERSHIP</SectionLabel>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Scientific Leadership
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-10 rounded-2xl border border-border bg-card hover:shadow-[var(--shadow-elegant)] transition-all">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6"
                style={{ background: "var(--gradient-brand)" }}
              >
                TH
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary-deep">
                Dr. Taro Hirata
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Managing Director and founder of the MEDICA Clinical Intelligence model.
              </p>
            </div>
            <div className="group p-10 rounded-2xl border border-border bg-card hover:shadow-[var(--shadow-elegant)] transition-all">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6"
                style={{ background: "var(--gradient-brand)" }}
              >
                YI
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary-deep">
                Dr. Yuki Ikeda
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Lead investigator and Clinical Trial Director
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-28 lg:py-40 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.1 260), oklch(0.12 0.06 265))",
        }}
      >
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${labImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.06_265)] via-transparent to-[oklch(0.18_0.1_260)]/80" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[oklch(0.72_0.18_220)]" />
                <span className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[oklch(0.85_0.1_220)]">
                  CONTACT
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-8">
                Contact MEDICA
              </h2>
              <p className="text-lg text-white/75 leading-relaxed max-w-lg">
                MEDICA TOKYO LABORATORIES
              </p>
            </div>

            <div className="p-10 lg:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <img src={logoUrl} alt="MEDICA TOKYO LABORATORIES" className="h-14 w-auto mb-8 rounded-sm" />

              <div className="space-y-6 text-white">
                <div>
                  <p className="text-white/90 leading-relaxed">
                    MEDICA TOKYO LABORATORIES
                    <br />
                    14-5 Kusunokichō, Nishi-ku,
                    <br />
                    Yokohama-shi, Kanagawa-ken 220-0003
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white font-medium">Managed by Dr Taro Hirata</p>
                  <p className="text-white/80 mt-3">Dr. Taro Hirata</p>
                  <a
                    href="mailto:t.hirata@medicaltokyolaboratories.jp"
                    className="mt-3 inline-block text-white/80 hover:text-[oklch(0.85_0.1_220)] transition-colors"
                  >
                    t.hirata@medicaltokyolaboratories.jp
                  </a>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-[oklch(0.78_0.12_220)] mb-3">
                    Social Media
                  </div>
                  <a
                    href="https://www.linkedin.com/company/ninapharmltd/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-white font-medium hover:text-[oklch(0.85_0.1_220)] transition-colors"
                  >
                    LinkedIn
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
