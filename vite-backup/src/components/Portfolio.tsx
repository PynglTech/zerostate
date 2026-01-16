import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative overflow-hidden border-t border-border bg-background py-32 lg:py-48"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="noise absolute inset-0" />
      
      {/* Ambient glow */}
      <motion.div
        animate={{ 
          opacity: [0.03, 0.06, 0.03],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-primary blur-[150px]"
      />

      <div className="container relative z-10 px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 flex items-center gap-6"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-primary">
            002
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
            THE PORTFOLIO
          </span>
        </motion.div>

        {/* Asset Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="corner-accents group relative border border-border bg-card backdrop-blur-sm transition-all duration-700 border-glow-hover"
        >
          {/* Status bar */}
          <div className="flex items-center justify-between border-b border-border px-8 py-5 lg:px-12">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <div className="absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full bg-primary opacity-50" />
              </div>
              <span className="font-mono text-xs tracking-[0.2em] text-primary">
                LIVE / ENTERPRISE BETA
              </span>
            </div>
            <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
              ASSET #01
            </span>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
              {/* Left: Info */}
              <div className="space-y-10 lg:col-span-3">
                <div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                    className="mb-3 block font-mono text-[10px] tracking-[0.3em] text-muted-foreground"
                  >
                    CODENAME
                  </motion.span>
                  <h2 className="glitch text-5xl font-light tracking-tight text-foreground lg:text-6xl" data-text="Preta">
                    Preta
                  </h2>
                  <p className="mt-3 font-mono text-sm text-muted-foreground">
                    /ˈprɛtə/ — <span className="text-primary/70">The Ghost</span>
                  </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-3 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                      CLASSIFICATION
                    </h3>
                    <p className="text-xl font-light text-foreground">
                      The Ghost Validation Engine
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                      STAGE
                    </h3>
                    <p className="text-xl font-light text-foreground">
                      Enterprise Ready
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    CAPABILITY
                  </h3>
                  <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                    Pre-Code, Live-Site Validation. Measure behavioral intent with 
                    production-grade fidelity before committing a single engineering hour. 
                    <span className="text-foreground"> Deploy ghost features, capture interaction data, validate demand.</span>
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
                  {[
                    { label: "Validation Time", value: "<24h" },
                    { label: "Engineering Saved", value: "87%" },
                    { label: "Decision Accuracy", value: "94%" },
                  ].map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <p className="text-2xl font-light text-primary lg:text-3xl">{metric.value}</p>
                      <p className="mt-1 font-mono text-[10px] tracking-wider text-muted-foreground">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative flex items-center justify-center lg:col-span-2">
                <div className="relative aspect-square w-full max-w-sm">
                  {/* Rotating frames */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-border"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-6 border border-primary/30"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-12 border border-primary/20"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[72px] border border-primary/10"
                  />
                  
                  {/* Center element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute h-32 w-32 rounded-full bg-primary/20 blur-2xl"
                    />
                    <span className="text-glow relative font-mono text-8xl font-extralight text-primary">
                      Ø
                    </span>
                  </div>

                  {/* Corner markers */}
                  <div className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-primary/50" />
                  <div className="absolute -right-2 -top-2 h-4 w-4 border-r border-t border-primary/50" />
                  <div className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-primary/50" />
                  <div className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-primary/50" />
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-12 border-t border-border pt-8"
            >
              <a
                href="https://preta.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-4 border border-primary bg-primary/10 px-10 py-5 font-mono text-sm tracking-[0.2em] text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
              >
                <span>VISIT PRETA.COM</span>
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
