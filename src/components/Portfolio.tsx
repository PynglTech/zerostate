"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative min-h-screen w-full flex items-center py-24 lg:py-40 overflow-hidden bg-white"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,rgba(229,229,229,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,229,229,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 lg:px-12 relative h-full z-10">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Column 1: Label (Span 2) */}
          <div className="lg:col-span-2 pt-2">
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-[#888888] uppercase">
              The Product
            </span>
          </div>

          {/* Column 2: Content (Span 10) */}
          <div className="lg:col-span-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Marker Decoration */}
              <div className="lg:col-span-1 relative hidden lg:block">
                <div className="absolute left-0 top-3 flex flex-col items-center h-full">
                  <div className="h-5 w-5 border border-[#E54505]/40" />
                  <div className="w-[1px] h-96 bg-gradient-to-b from-[#E54505]/40 to-transparent mt-0" />
                </div>
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-11 flex flex-col gap-10">
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                  <h2 className="font-mono text-6xl md:text-7xl font-medium tracking-tight text-foreground">
                    Preta
                  </h2>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E1E1E1] bg-white text-[10px] font-mono font-medium tracking-wider text-[#008A2E] uppercase shadow-sm"
                  >
                    <span className="relative flex h-2 w-2">
                      <motion.span
                        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0.3, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inline-flex h-full w-full rounded-full bg-green-400"
                      ></motion.span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008A2E]"></span>
                    </span>
                    Live & Deployed
                  </motion.div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-[#888888] uppercase">
                    CODENAME
                  </span>
                  <p className="font-mono text-xl text-foreground">
                    <span className="font-bold">/&apos;prɛtə/</span> — The Ghost
                  </p>
                </div>

                {/* Description and Features */}
                <div className="space-y-10 max-w-3xl">
                  <div className="space-y-6">
                    <h3 className="text-xl font-medium text-[#E54505] tracking-tight">
                      The Ghost Validation Engine
                    </h3>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-[#555555]">
                      A sovereign infrastructure layer for &quot;Pre-Code, Live-Site Validation.&quot;
                      Preta allows Enterprise Product Teams to inject high-fidelity native interfaces
                      into production environments to measure behavioural intent without altering the host source code.
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="grid grid-cols-1 md:grid-cols-1 gap-5">
                    {[
                      "Shadow DOM Isolation",
                      "Coordinate-Based Spatial Anchoring",
                      "AI Intent Middleware"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-4 group">
                        <div className="h-2 w-2 rounded-full bg-[#E54505] shadow-[0_0_8px_rgba(229,69,5,0.4)] transition-transform group-hover:scale-125" />
                        <span className="font-mono text-sm md:text-base text-[#666666]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <motion.a
                    href="https://preta-systems.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 rounded-lg border border-[#E5E5E5] bg-white px-8 py-4 font-mono text-xs font-semibold text-[#E54505] transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)] active:scale-95"
                    whileHover={{ y: -2 }}
                  >
                    Visit pretasystems.com
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
