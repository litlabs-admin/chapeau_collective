"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    color: string;
}

const services: ServiceItem[] = [
    {
        id: "marketing",
        title: "Marketing",
        subtitle: "Get the message right.",
        description:
            "So the right buyers get it faster.",
        color: "bg-brand-indigo",
    },
    {
        id: "sales",
        title: "Sales",
        subtitle: "Turn interest into revenue.",
        description:
            "With better conversations, tighter process and stronger follow-through.",
        color: "bg-brand-gold",
    },
    {
        id: "ai",
        title: "AI Services",
        subtitle: "Make the systems useful.",
        description:
            "With practical AI and automation that help revenue move.",
        color: "bg-white",
    },
];

export const ServiceGrid = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <div className="w-full relative group/grid">
            {/* Background Shift based on hover */}
            <AnimatePresence>
                {hoveredId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.05 }}
                        exit={{ opacity: 0 }}
                        className={cn(
                            "absolute inset-0 pointer-events-none transition-colors duration-500 ease-in-out blur-[120px]",
                            services.find((s) => s.id === hoveredId)?.color
                        )}
                    />
                )}
            </AnimatePresence>

            <div className="flex flex-col border-t border-foreground/10 relative z-10">
                {services.map((service, idx) => (
                    <div
                        key={service.id}
                        onMouseEnter={() => setHoveredId(service.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 px-6 md:px-12 border-b border-foreground/10 overflow-hidden cursor-crosshair transition-colors duration-500 hover:bg-foreground/[0.02]"
                    >
                        {/* Index & Title */}
                        <div className="flex items-start md:items-center gap-6 md:gap-12 md:w-1/3">
                            <span className="font-mono text-sm text-foreground/40 font-semibold tracking-widest mt-2 md:mt-0 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                                0{idx + 1}
                            </span>
                            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
                                {service.title}
                            </h3>
                        </div>

                        {/* Description & Subtitle */}
                        <div className="mt-6 md:mt-0 md:w-1/2 flex flex-col gap-2">
                            <h4 className="text-xl sm:text-2xl font-sans font-medium text-foreground">
                                {service.subtitle}
                            </h4>
                            <p className="text-base sm:text-lg text-foreground/60 leading-relaxed font-sans max-w-lg">
                                {service.description}
                            </p>
                        </div>

                        {/* Animated Arrow/Icon */}
                        <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full border border-foreground/20 group-hover:border-foreground/50 transition-colors duration-300">
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-foreground transition-transform duration-300 group-hover:rotate-45"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </motion.svg>
                        </div>

                        {/* Hover Reveal Highlight Line */}
                        <div
                            className={cn(
                                "absolute bottom-0 left-0 h-[2px] w-0 bg-transparent transition-all duration-500 ease-out group-hover:w-full",
                                service.id === "marketing" ? "group-hover:bg-brand-indigo" :
                                    service.id === "sales" ? "group-hover:bg-brand-gold" : "group-hover:bg-white"
                            )}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
