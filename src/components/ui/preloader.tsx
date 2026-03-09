"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Lock scroll while loading
        document.body.style.overflow = "hidden";

        // Simulate a cinematic loading sequences
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsLoading(false);
                        // Restore scroll
                        document.body.style.overflow = "";
                    }, 800); // Wait a bit at 100%
                    return 100;
                }
                // Random fluid easing
                return prev + Math.floor(Math.random() * 15) + 1;
            });
        }, 120);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[10000] flex flex-col justify-end p-8 md:p-16 bg-background text-foreground"
                >
                    {/* Main Logo/Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter"
                        >
                            Chapeau Collective.
                        </motion.h1>
                    </div>

                    <div className="flex justify-between items-end w-full overflow-hidden pb-4">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="font-mono text-sm uppercase tracking-widest opacity-50"
                        >
                            Loading Experience
                        </motion.span>

                        <motion.span
                            className="font-display font-bold text-6xl md:text-8xl leading-none"
                        >
                            {Math.min(progress, 100)}%
                        </motion.span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1 relative overflow-hidden bg-foreground/10 rounded-full mt-4">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-brand-indigo"
                            animate={{ width: `${Math.min(progress, 100)}%` }}
                            transition={{ type: "tween", ease: "linear", duration: 0.1 }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
