"use client";

import { motion } from "framer-motion";
import { Marquee } from "../ui/marquee";
import { TextReveal } from "../ui/text-reveal";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-background selection:bg-brand-indigo/30 pt-20">
            {/* Dynamic Background Mesh / Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-indigo/10 blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-brand-gold/5 blur-[120px]" />
            </div>

            <div className="container relative mx-auto px-6 mt-16 md:mt-0 flex-grow flex flex-col justify-center h-full">
                <div className="max-w-full z-10 pt-20 md:pt-10">
                    <h1 className="font-display font-black leading-[0.9] tracking-tighter uppercase flex flex-col text-foreground" style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}>
                        <div style={{ overflow: "hidden" }} className="pb-1 md:pb-3">
                            <TextReveal text="CHAPEAU" delay={1.2} />
                        </div>
                        <div style={{ overflow: "hidden" }} className="pb-4 text-foreground/70">
                            <TextReveal text="COLLECTIVE." delay={1.6} />
                        </div>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 max-w-xl text-lg sm:text-xl md:text-2xl text-foreground/70 font-sans leading-relaxed text-balance"
                    >
                        We operate at the apex of Marketing, Sales, and Artificial Intelligence to build unstoppable revenue engines.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-10 group cursor-pointer inline-flex items-center gap-4 mb-24 md:mb-32"
                    >
                        <a href="#contact" className="relative overflow-hidden rounded-full bg-foreground text-background px-8 py-4 font-sans font-semibold text-lg transition-transform duration-300 group-hover:scale-105 inline-block">
                            <span className="relative z-10">Commission Us</span>
                            <div className="absolute inset-0 bg-brand-indigo translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Marquee Ticker placed absolutely at the bottom or relatively below depending on layout */}
            <div className="absolute bottom-0 left-0 w-full rotate-[-1deg] scale-105 origin-bottom-left pb-4 z-10">
                <Marquee
                    text="MARKETING ARCHITECTS // SALES ACCELERATORS // AI INTEGRATORS // MARKETING ARCHITECTS //"
                    speed={25}
                    className="bg-brand-indigo text-white rotate-[2deg] shadow-2xl"
                />
            </div>
        </section>
    );
};
