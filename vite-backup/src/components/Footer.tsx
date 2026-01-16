import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      id="footer"
      ref={ref}
      className="relative overflow-hidden border-t border-border bg-background py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="noise absolute inset-0" />

      <div className="container relative z-10 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid gap-16 lg:grid-cols-12 lg:gap-8"
        >
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="mb-8 flex items-center gap-4">
              <div className="relative h-10 w-10 overflow-hidden border border-primary/50 bg-primary/10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-1 border border-primary/30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-sm text-primary">Ø</span>
                </div>
              </div>
              <div>
                <span className="block font-mono text-sm font-medium tracking-[0.2em] text-foreground">
                  ZEROSTATE SYSTEMS
                </span>
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                  EST. 2024
                </span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Infrastructure for the Zero-Waste Enterprise. 
              Building sovereign governance tools that validate software before it is built.
            </p>
            
            {/* Social proof / tagline */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-primary/30" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-primary/60">
                VALIDATE BEFORE YOU BUILD
              </span>
            </div>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3">
            <h4 className="mb-8 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
              LOCATIONS
            </h4>
            <div className="space-y-6 text-sm">
              <div className="group">
                <p className="mb-1 font-mono text-[10px] tracking-wider text-primary/60">
                  REGISTERED
                </p>
                <p className="text-foreground transition-colors group-hover:text-primary">
                  Wilmington, Delaware
                </p>
                <p className="text-muted-foreground">United States</p>
              </div>
              <div className="group">
                <p className="mb-1 font-mono text-[10px] tracking-wider text-primary/60">
                  OPERATIONS
                </p>
                <p className="text-foreground transition-colors group-hover:text-primary">
                  Gujarat
                </p>
                <p className="text-muted-foreground">India</p>
              </div>
            </div>
          </div>

          {/* Investor Relations */}
          <div className="lg:col-span-4">
            <h4 className="mb-8 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
              INVESTOR RELATIONS
            </h4>
            <div className="space-y-6">
              <a
                href="mailto:ir@zerostatesystems.com"
                className="group block"
              >
                <span className="font-mono text-sm text-primary transition-all group-hover:text-glow">
                  ir@zerostatesystems.com
                </span>
                <div className="mt-1 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
              <div className="space-y-3 text-sm">
                {["Annual Reports", "Press Releases", "SEC Filings"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-px w-3 bg-border transition-all group-hover:w-6 group-hover:bg-primary" />
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex flex-col gap-6 border-t border-border pt-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <p className="font-mono text-[10px] tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} ZEROSTATE SYSTEMS, INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap gap-8 font-mono text-[10px] tracking-wider text-muted-foreground">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a
                key={link}
                href="#"
                className="transition-colors hover:text-primary"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
