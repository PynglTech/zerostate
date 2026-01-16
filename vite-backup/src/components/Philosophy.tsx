import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative overflow-hidden border-t border-border bg-card py-32 lg:py-48"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="noise absolute inset-0" />
      
      {/* Decorative lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute left-0 top-1/3 h-px w-1/3 origin-left bg-gradient-to-r from-primary/30 to-transparent"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute bottom-1/3 right-0 h-px w-1/4 origin-right bg-gradient-to-l from-primary/20 to-transparent"
      />

      <div className="container relative z-10 px-6 lg:px-12">
        <div className="mx-auto max-w-4xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 flex items-center gap-6"
          >
            <span className="font-mono text-xs tracking-[0.3em] text-primary">
              001
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
              THE PHILOSOPHY
            </span>
          </motion.div>

          {/* Manifesto content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-12"
          >
            <h2 className="text-4xl font-light leading-[1.3] text-foreground md:text-5xl lg:text-6xl">
              Engineering talent is the{" "}
              <span className="text-glow text-primary">scarcest resource</span>{" "}
              in technology.
            </h2>

            <div className="grid gap-8 lg:grid-cols-2">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                Every feature built without validation is a systemic waste—of time, 
                capital, and human potential. The conventional development cycle 
                inverts the natural order: <span className="text-foreground">code first, validate later.</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                We propose a reversal. Validate before the first line is written. 
                Measure behavioral intent before committing engineering hours. 
                <span className="text-foreground"> Build only what has proven demand.</span>
              </motion.p>
            </div>

            {/* Quote block */}
            <motion.blockquote
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative my-16 py-8 pl-8"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <div className="absolute left-0 top-0 h-4 w-4 -translate-x-[7px] border border-primary bg-card" />
              <p className="text-2xl font-light leading-relaxed text-foreground md:text-3xl">
                This is the Zero-Waste doctrine: eliminate speculative development 
                through <span className="text-primary">pre-code validation.</span>
              </p>
            </motion.blockquote>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20"
          >
            <button className="group inline-flex items-center gap-4 border-b border-primary/30 pb-2 font-mono text-sm tracking-[0.2em] text-primary transition-all hover:border-primary hover:gap-6">
              READ THE FULL MANIFESTO
              <motion.span
                className="inline-block"
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
