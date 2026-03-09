"use client";

import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer className="bg-background w-full relative overflow-hidden border-t border-foreground/10">
            <div className="container mx-auto px-6 py-24 md:py-32">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16">

                    <div className="w-full md:w-1/2 flex flex-col items-start">
                        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-foreground mb-8 text-balance">
                            Let{"'"}s Build <br />
                            <span className="text-foreground/40">Something</span> <br />
                            Unstoppable.
                        </h2>

                        <button className="group relative pr-12 pb-4 border-b-2 border-foreground hover:border-brand-indigo transition-colors duration-300">
                            <span className="font-sans font-bold text-xl md:text-2xl uppercase tracking-widest text-foreground group-hover:text-brand-indigo transition-colors duration-300">
                                Start a Conversation
                            </span>
                            <div className="absolute right-0 bottom-4 w-8 h-8 rounded-full bg-foreground flex items-center justify-center group-hover:bg-brand-indigo group-hover:translate-x-4 transition-all duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-background"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </div>
                        </button>
                    </div>

                    <div className="w-full md:w-1/3 grid grid-cols-2 gap-8 md:gap-16">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-sans font-semibold text-foreground tracking-widest uppercase text-sm opacity-50 mb-2">
                                Offices
                            </h4>
                            <p className="font-sans text-foreground/80">New York</p>
                            <p className="font-sans text-foreground/80">London</p>
                            <p className="font-sans text-foreground/80">Remote Global</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-sans font-semibold text-foreground tracking-widest uppercase text-sm opacity-50 mb-2">
                                Connect
                            </h4>
                            <a href="#" className="font-sans text-foreground/80 hover:text-brand-indigo transition-colors">LinkedIn</a>
                            <a href="#" className="font-sans text-foreground/80 hover:text-brand-indigo transition-colors">Twitter (X)</a>
                            <a href="#" className="font-sans text-foreground/80 hover:text-brand-indigo transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-8 flex flex-col md:flex-row items-center justify-between border-t border-foreground/10 text-foreground/40 font-mono text-sm">
                    <p>© {new Date().getFullYear()} Chapeau Collective. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Massive subtle background text to anchor the page */}
            <h1 className="absolute -bottom-8 md:-bottom-16 left-1/2 -translate-x-1/2 font-display font-black text-[12vw] leading-none text-foreground/[0.03] whitespace-nowrap pointer-events-none select-none uppercase">
                Chapeau Collective
            </h1>
        </footer>
    );
};
