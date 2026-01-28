"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[60] group cursor-pointer"
                    aria-label="Scroll to top"
                >
                    {/* Option 1: Industrial Bracket */}
                    <div className="relative flex h-12 w-12 items-center justify-center bg-[#111111] text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
                        {/* Top Left Bracket */}
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-[2px] border-l-[2px] border-orange-600 transition-all duration-300 group-hover:-top-2 group-hover:-left-2 group-hover:border-white" />

                        {/* Bottom Right Bracket */}
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-[2px] border-r-[2px] border-orange-600 transition-all duration-300 group-hover:-bottom-2 group-hover:-right-2 group-hover:border-white" />

                        <ArrowUp className="h-5 w-5" />
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

/* Previous Option 2 (Terminal Terminal) - Commented Out
const ScrollToTopOption2 = () => {
    return (
        <motion.button
            // ... props
            className="fixed bottom-12 right-6 z-[60] flex flex-col items-center gap-3 transition-all hover:scale-105 active:scale-95 group"
        >
             <div className="hidden md:flex flex-col items-center gap-4">
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-orange-600/50 to-orange-600" />
                <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-orange-600 uppercase [writing-mode:vertical-rl] rotate-180">
                    [ BACK TO TOP ]
                </span>
            </div>
             <div className="flex md:hidden h-12 w-12 items-center justify-center rounded-full border border-orange-600 bg-background text-orange-600 shadow-lg">
                <ArrowUp className="h-5 w-5" />
            </div>
        </motion.button>
    );
}
*/

/* Previous Option 3 (Ghost Overlay) - Commented Out
const ScrollToTopOption3 = () => {
    return (
        <motion.button
            className="fixed bottom-8 right-8 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-orange-600/30 bg-white/10 text-orange-600 backdrop-blur-md"
        >
            <ArrowUp className="h-5 w-5" />
        </motion.button>
    );
}
*/

export default ScrollToTop;
