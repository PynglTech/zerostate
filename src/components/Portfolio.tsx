"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative min-h-screen w-full flex items-center py-24 lg:py-40 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,rgba(229,229,229,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,229,229,0.2)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 lg:px-12 relative h-full z-10">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Column 1: Label (Span 2) */}
          <div className="lg:col-span-2 pt-2">
            <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground/80">
              The Portfolio
            </span>
          </div>

          {/* Column 2: Content (Span 8) */}
          <div className="lg:col-span-8 relative pl-8 lg:pl-12">
            {/* Marker Decoration */}
            <div className="absolute left-0 top-3 hidden lg:flex flex-col items-center h-[90%]">
              <div className="h-4 w-4 border border-primary/60" /> {/* Square */}
              <div className="w-[1px] flex-1 bg-primary/20 mt-0" /> {/* Line */}
            </div>

            <div className="flex flex-col gap-8">
              {/* Project Header */}
              <div className="space-y-4">
                <h2 className="font-mono text-5xl font-medium tracking-tight text-foreground md:text-6xl">
                  Preta
                </h2>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                    CODENAME
                  </span>
                  <p className="font-mono text-xl text-foreground">
                    <span className="font-bold">/&apos;prɛtə/</span> - The Ghost
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 max-w-2xl">
                <h3 className="text-xl font-medium text-orange-600">
                  The Ghost Validation Engine
                </h3>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  A tool for &quot;Pre-Code, Live-Site Validation&quot; that allows teams to measure
                  behavioural intent before committing engineering hours.
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-orange-600" />
                <span className="font-mono text-xs font-medium text-muted-foreground">
                  Enterprise Beta
                </span>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href="https://preta.systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-sans text-sm font-medium text-orange-600 transition-colors hover:border-orange-600/50 hover:bg-orange-50"
                >
                  Visit preta.com
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
