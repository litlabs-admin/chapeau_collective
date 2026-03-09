"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MarqueeProps {
    text: string;
    className?: string;
    speed?: number;
}

export const Marquee = ({ text, className, speed = 20 }: MarqueeProps) => {
    return (
        <div
            className={cn(
                "flex w-full overflow-hidden bg-foreground text-background py-3 sm:py-4",
                className
            )}
        >
            <motion.div
                className="flex shrink-0 font-display font-bold uppercase tracking-widest text-sm sm:text-base md:text-lg whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {/* We double the text to create a seamless loop */}
                <span className="pr-8">{text}</span>
                <span className="pr-8">{text}</span>
                <span className="pr-8">{text}</span>
                <span className="pr-8">{text}</span>
            </motion.div>
        </div>
    );
};
