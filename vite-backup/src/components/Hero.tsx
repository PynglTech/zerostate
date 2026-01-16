import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-40" />
        
        {/* Scanline effect */}
        <div className="scanlines absolute inset-0" />
        
        {/* Noise texture */}
        <div className="noise absolute inset-0" />

        {/* Gradient orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-primary blur-[150px]"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-primary blur-[120px]"
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[15%] h-32 w-32 border border-primary/20"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [45, -45, 45] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[10%] h-24 w-24 border border-primary/10"
        />

        {/* Animated scan line */}
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-6 lg:px-12">
        <div className="max-w-5xl">
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 flex items-center gap-4"
          >
            <div className="relative">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              <div className="absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full bg-primary opacity-50" />
            </div>
            <span className="font-mono text-xs tracking-[0.3em] text-primary/80">
              SYSTEMS ONLINE
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-primary/50 to-transparent" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8 text-5xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            <span className="block">Infrastructure for the</span>
            <span className="glitch relative mt-2 block text-glow font-medium text-primary" data-text="Zero-Waste">
              Zero-Waste
            </span>
            <span className="block">Enterprise</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-14 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
          >
            We build sovereign governance tools that validate software before it is built.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button
              onClick={scrollToPortfolio}
              className="corner-accents group relative inline-flex items-center gap-4 border border-border bg-secondary px-10 py-5 font-mono text-sm tracking-[0.2em] text-foreground backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-primary/10"
            >
              <span className="relative z-10">VIEW PORTFOLIO</span>
              <ArrowDown className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
            
            <motion.a
              href="#philosophy"
              className="group flex items-center gap-3 font-mono text-sm tracking-wider text-muted-foreground transition-colors hover:text-primary"
              whileHover={{ x: 5 }}
            >
              <span>READ MANIFESTO</span>
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative side element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="absolute right-12 top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <div className="relative h-80 w-80">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 border border-primary/15"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 border border-primary/10"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-glow font-mono text-7xl font-extralight text-primary/40">
                Ø
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="flex justify-center py-8">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-primary/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
