"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export const TextReveal = ({ text, className, delay = 0 }: TextRevealProps) => {
    // Split the text into an array of characters
    const characters = text.split("");

    return (
        <span className={`inline-flex flex-nowrap whitespace-nowrap ${className}`}>
            {characters.map((char, index) => (
                <span key={index} className="inline-block overflow-hidden relative">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%", opacity: 0, rotateZ: 5 }}
                        whileInView={{ y: 0, opacity: 1, rotateZ: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1], // Custom bouncy ease out
                            delay: delay + index * 0.02, // Stagger effect
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                </span>
            ))}
        </span>
    );
};
