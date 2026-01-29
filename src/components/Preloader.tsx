"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [text, setText] = useState("");
    const fullText = "ZEROSTATE";

    useEffect(() => {
        // 1. scramble text effect
        let step = 0;
        const scrambleInterval = setInterval(() => {
            const scrambled = fullText.split("").map((char, index) => {
                if (index < step) return char;
                return String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }).join("");

            setText(scrambled);

            // Slightly random progress
            if (Math.random() > 0.5) step++;

            if (step > fullText.length) {
                clearInterval(scrambleInterval);
                // 2. Wait a moment then finish
                setTimeout(() => setIsLoading(false), 800);
            }
        }, 100);

        return () => clearInterval(scrambleInterval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                    exit={{ opacity: 0 }} // Fade out entire overlay
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative flex items-center justify-center">

                        {/* Left Bracket */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-4xl md:text-7xl font-mono font-light text-primary mr-4 md:mr-6"
                        >
                            &lt;
                        </motion.div>

                        {/* Central Glitch Text */}
                        <motion.div
                            className="w-[200px] md:w-[360px] text-center"
                        >
                            <div className="text-4xl md:text-7xl font-bold tracking-tighter text-white font-sans relative">
                                <span className="relative z-10">{text}</span>
                                {/* Ghost Glitch Layer 1 */}
                                <span className="absolute top-0 left-0 -ml-0.5 text-primary opacity-50 animate-pulse">{text}</span>
                                {/* Ghost Glitch Layer 2 */}
                                <span className="absolute top-0 left-0 ml-0.5 text-cyan-500 opacity-50 animate-pulse delay-75">{text}</span>
                            </div>

                            {/* Decorative Loading Bar */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="h-1 bg-primary mt-4 mx-auto rounded-full"
                            />
                        </motion.div>

                        {/* Right Bracket */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-4xl md:text-7xl font-mono font-light text-primary ml-4 md:ml-6"
                        >
                            &gt;
                        </motion.div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
