"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute left-0 right-0 bottom-0 top-[81px] z-0 overflow-hidden">
        <motion.img
          src="/map-bg.png"
          alt="World Map Background"
          className="w-full h-full object-cover opacity-70"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-foreground">
              <span className="block font-sans font-light text-[48px] leading-tight md:text-[96px] md:leading-[87px] tracking-[-0.7px]">Infrastructure for the</span>
              <span className="block font-mono font-medium text-primary text-[48px] leading-tight md:text-[96px] md:leading-[87px] tracking-[-0.7px]">
                Zero-waste enterprise
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl text-[15px] md:text-[16px] font-normal leading-relaxed text-[#666666]"
          >
            We build sovereign governance tools that validate software value before a single line of code is written. We replace speculation with engineered certainty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <div className="relative inline-block group cursor-pointer">
              {/* Top Left Bracket */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-[3px] border-l-[3px] border-primary rounded-tl-xl transition-all duration-300 group-hover:-top-3 group-hover:-left-3" />

              {/* Main Button */}
              <button
                onClick={scrollToPortfolio}
                className="relative z-10 block bg-[#111111] text-white px-10 py-3.5 rounded-lg font-sans text-sm font-bold tracking-wider transition-all duration-300 hover:shadow-lg"
              >
                View Product
              </button>

              {/* Bottom Right Bracket */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-[3px] border-r-[3px] border-primary rounded-br-xl transition-all duration-300 group-hover:-bottom-3 group-hover:-right-3" />
            </div>

            <Link
              href="/manifesto"
              className="inline-flex items-center justify-center bg-white text-primary border border-primary px-10 py-3.5 rounded-lg font-sans text-sm font-bold tracking-wider transition-all duration-300 hover:bg-primary/5 hover:shadow-md"
            >
              Read the thesis &rarr;
            </Link>
          </motion.div>
        </div>
      </div>



    </section>
  );
};

export default Hero;
