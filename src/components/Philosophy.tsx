"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative min-h-screen w-full flex items-center py-24 lg:py-40 overflow-hidden"
    >
      {/* Background Grid - Covers Full Width */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,rgba(229,229,229,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,229,229,0.2)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 lg:px-12 relative h-full z-10">
        {/* Section Corner Brackets */}
        {/* Top Left */}
        <div className="absolute -top-12 -left-4 h-8 w-8 border-t-[2px] border-l-[2px] border-primary rounded-tl-lg hidden lg:block" />

        {/* Bottom Right */}
        <div className="absolute -bottom-12 -right-4 h-8 w-8 border-b-[2px] border-r-[2px] border-primary rounded-br-lg hidden lg:block" />

        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Column 1: Label (Span 2) */}
          <div className="lg:col-span-2 pt-2">
            <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground/80">
              The Philosophy
            </span>
          </div>

          {/* Column 2: Content (Span 6) */}
          <div className="lg:col-span-6 relative">
            {/* Marker Decoration - Absolute to left? OR Flex? Relative looks good. */}
            {/* The image shows a marker far left of the text? No, it's relative to the text block. */}
            {/* Let's put the marker absolutely to the left of this column or using -left. */}
            <div className="absolute -left-12 top-2 hidden lg:flex flex-col items-center h-full">
              <div className="h-4 w-4 border border-primary/60" /> {/* Square */}
              <div className="w-[1px] flex-1 bg-primary/20 mt-0" /> {/* Line */}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              <h2
                className="w-fit whitespace-nowrap font-mono font-medium text-[32px] leading-tight tracking-[-0.7px] text-foreground md:text-[48px] md:leading-[48px]"
                style={{ textShadow: "0px 1px 69.9px #E5450575" }}
              >
                The zero-waste thesis
              </h2>

              <div className="space-y-6 max-w-md">
                <p className="text-base font-light leading-relaxed text-muted-foreground">
                  Engineering talent is the most expensive resource.
                </p>
                <p className="text-base font-light leading-relaxed text-muted-foreground">
                  building unvalidated features is systemic waste.
                </p>
              </div>

              <div className="pt-4">
                <motion.a
                  href="#manifesto"
                  className="group inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-sans text-xs font-medium text-orange-600 transition-colors hover:border-orange-600/50 hover:bg-orange-50"
                  whileHover={{ x: 5 }}
                >
                  Read the manifesto
                  <ArrowRight className="h-3 w-3" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Diagram (Span 4) */}
          <div className="flex items-center justify-center lg:col-span-4 relative">
            {/* Diagram Container Corner Brackets */}
            {/* Top Right of Diagram */}
            <div className="absolute top-0 right-10 h-4 w-4 border-t border-r border-primary/40" />
            {/* Bottom Left of Diagram */}
            <div className="absolute bottom-0 left-10 h-4 w-4 border-b border-l border-primary/40" />

            <div className="relative h-80 w-80 md:h-[450px] md:w-[450px]">
              {/* Center Circle */}
              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FAFAFA] flex items-center justify-center z-10">
                <span className="text-6xl font-normal text-primary">Ø</span>
              </div>

              {/* Rotated Squares - Fine Lines */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 border-[0.5px] border-primary/40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 border-[0.5px] border-primary/40 rotate-12"
              />
              <motion.div
                animate={{ rotate: 180 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[0.5px] border-primary/30 rotate-45"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
