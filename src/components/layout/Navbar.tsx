"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { title: "Home", href: "#" },
        { title: "Services", href: "#" },
        { title: "Philosophy", href: "#" },
        { title: "Work", href: "#" },
        { title: "Contact", href: "#" },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-[100] px-6 py-6 text-white bg-background/50 backdrop-blur-md border-b border-white/5 transition-all">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="font-display font-bold text-xl tracking-widest uppercase z-[101]">
                        <a href="#">Chapeau Collective</a>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="group flex flex-col gap-1.5 w-8 h-8 justify-center items-end z-[101]"
                    >
                        <motion.div
                            animate={{
                                rotate: isMenuOpen ? 45 : 0,
                                y: isMenuOpen ? 8 : 0,
                                width: "100%",
                            }}
                            className="h-px bg-white origin-center transition-all duration-300"
                        />
                        <motion.div
                            animate={{ width: isMenuOpen ? 0 : "80%" }}
                            className="h-px bg-white"
                        />
                        <motion.div
                            animate={{
                                rotate: isMenuOpen ? -45 : 0,
                                y: isMenuOpen ? -8 : 0,
                                width: "100%",
                            }}
                            className="h-px bg-white origin-center transition-all duration-300"
                        />
                    </button>
                </div>
            </header>

            {/* Full Screen Overlay Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[90] bg-brand-indigo flex flex-col justify-center px-6 md:px-16"
                    >
                        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
                            {/* Links */}
                            <div className="flex flex-col gap-4 md:gap-8">
                                {navLinks.map((link, i) => (
                                    <div key={i} className="overflow-hidden">
                                        <motion.a
                                            href={link.href}
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            exit={{ y: "100%" }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.2 + i * 0.1,
                                                ease: [0.33, 1, 0.68, 1],
                                            }}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="font-display font-black text-6xl md:text-8xl text-white uppercase hover:text-brand-gold transition-colors duration-300 block leading-none"
                                        >
                                            {link.title}
                                        </motion.a>
                                    </div>
                                ))}
                            </div>

                            {/* Menu Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="flex flex-col gap-8 text-white/70 font-sans"
                            >
                                <div>
                                    <h4 className="uppercase tracking-widest text-xs font-semibold mb-2">
                                        Connect
                                    </h4>
                                    <a href="#" className="block hover:text-white transition-colors">
                                        hello@chapeau.com
                                    </a>
                                    <a href="#" className="block hover:text-white transition-colors">
                                        +1 800 555 0199
                                    </a>
                                </div>
                                <div>
                                    <h4 className="uppercase tracking-widest text-xs font-semibold mb-2">
                                        Socials
                                    </h4>
                                    <a href="#" className="block hover:text-white transition-colors">
                                        Instagram
                                    </a>
                                    <a href="#" className="block hover:text-white transition-colors">
                                        Twitter / X
                                    </a>
                                    <a href="#" className="block hover:text-white transition-colors">
                                        LinkedIn
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};
