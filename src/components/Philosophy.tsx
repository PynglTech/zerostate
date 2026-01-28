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
      className="relative min-h-screen w-full flex items-center py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Grid - Covers Full Width */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,rgba(229,229,229,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,229,229,0.08)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 lg:px-12 relative h-full z-10">
        {/* Section Corner Brackets */}
        {/* Top Left */}
        <div className="absolute -top-8 md:-top-12 -left-2 md:-left-4 h-8 md:h-10 w-8 md:w-10 border-t-[1.5px] border-l-[1.5px] border-[#E54505]/40 rounded-tl-lg md:rounded-tl-xl hidden sm:block" />

        {/* Bottom Right */}
        <div className="absolute -bottom-8 md:-bottom-12 -right-2 md:-right-4 h-8 md:h-10 w-8 md:w-10 border-b-[1.5px] border-r-[1.5px] border-[#E54505]/40 rounded-br-lg md:rounded-br-xl hidden sm:block" />

        <div className="grid w-full grid-cols-1 gap-12 md:gap-16 lg:gap-20 lg:grid-cols-12 items-start lg:items-center">
          {/* Column 1: Label (Span 2) */}
          <div className="lg:col-span-2 pt-2 self-start hidden lg:block">
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-[#888888] uppercase">
              The Philosophy
            </span>
          </div>

          {/* Mobile Label */}
          <div className="block lg:hidden mb-2">
            <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-[#E54505] uppercase px-3 py-1 bg-[#E54505]/5 rounded-full border border-[#E54505]/10">
              The Philosophy
            </span>
          </div>

          {/* Column 2: Content (Span 6) */}
          <div className="lg:col-span-10 xl:col-span-6 relative">
            {/* Marker Decoration */}
            <div className="absolute -left-8 md:-left-12 top-2 hidden sm:flex flex-col items-center">
              <div className="h-4 md:h-5 w-4 md:w-5 border border-[#E54505]/30" />
              <div className="w-[1px] h-16 md:h-32 bg-gradient-to-b from-[#E54505]/30 to-transparent mt-0" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8 md:gap-10"
            >
              <h2
                className="w-fit font-mono font-medium text-[28px] sm:text-[36px] md:text-[48px] leading-tight md:leading-[48px] tracking-[-0.02em] md:tracking-[-0.7px] text-foreground sm:whitespace-nowrap"
                style={{ textShadow: "0px 1px 69.9px #E5450575" }}
              >
                The zero-waste thesis
              </h2>

              <div className="space-y-6 md:space-y-8 max-w-2xl">
                <p className="text-lg md:text-xl font-normal leading-relaxed text-[#444444]">
                  Engineering is the world's most expensive resource. wasting it is a systemic failure.
                </p>
                <p className="text-base md:text-lg font-light leading-relaxed text-[#666666]">
                  The modern software supply chain is broken. It operates on a "Build, then Test" model that forces companies to incur 100% of the engineering cost just to validate a hypothesis. This creates a graveyard of features that nobody wants.
                </p>
                <p className="text-base md:text-lg font-light leading-relaxed text-[#666666]">
                  ZeroState exists to invert this model. We believe in "Pre-Code Validation" the absolute requirement to prove demand in the live environment before committing infrastructure. We do not build products; we build the governance layer that stops waste from entering the production line.
                </p>
              </div>

              <div className="pt-4 md:pt-6">
                <motion.a
                  href="/manifesto"
                  className="group inline-flex items-center gap-3 md:gap-4 rounded-lg border border-[#E5E5E5] px-6 md:px-8 py-3 md:py-4 font-mono text-[11px] md:text-xs font-semibold text-[#E54505] transition-all hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] active:scale-95"
                  whileHover={{ y: -2 }}
                >
                  Read the zero - waste manifesto
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Diagram (Span 4) */}
          <div className="lg:flex items-center justify-center lg:col-span-4 relative mt-12 lg:mt-0 hidden sm:flex">
            {/* Diagram Container Brackets */}
            <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-[#E54505]/20" />
            <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-[#E54505]/20" />
            <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[#E54505]/20" />
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[#E54505]/20" />

            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] flex items-center justify-center scale-90 md:scale-100">
              {/* Layers of rotated squares */}
              {[0, 15, 30, 45, 60].map((rotation, i) => (
                <motion.div
                  key={i}
                  initial={{ rotate: rotation, opacity: 0 }}
                  animate={isInView ? {
                    opacity: 1,
                    rotate: i % 2 === 0 ? [rotation, rotation + 360] : [rotation, rotation - 360]
                  } : {}}
                  transition={{
                    rotate: {
                      duration: 25 + i * 12,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    opacity: {
                      duration: 1,
                      delay: i * 0.1
                    }
                  }}
                  className="absolute border-[0.5px] border-[#E54505]/15"
                  style={{
                    width: `calc(100% - ${i * 15}%)`,
                    height: `calc(100% - ${i * 15}%)`
                  }}
                />
              ))}

              {/* Center Element */}
              <div className="relative z-10 h-24 w-24 md:h-32 md:w-32 rounded-full bg-white/60 backdrop-blur-[2px] flex items-center justify-center shadow-[0_0_50px_rgba(229,69,5,0.1)] border border-white/40">
                <span className="text-5xl md:text-7xl font-normal text-[#E54505] select-none leading-none flex items-center justify-center">Ø</span>
              </div>

              {/* Outer decorative lines */}
              <div className="absolute h-[110%] w-[110%] border-[0.5px] border-[#E54505]/5 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
