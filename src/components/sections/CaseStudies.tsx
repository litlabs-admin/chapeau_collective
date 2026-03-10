"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "KINETIC ENERGY",
        category: "Social Campaign",
        year: "2026",
        color: "bg-zinc-800",
        image: "/images/case_lifestyle_ad_1773086299767.png",
    },
    {
        title: "AURA SKINCARE",
        category: "Product Launch",
        year: "2025",
        color: "bg-zinc-800",
        image: "/images/case_product_photo_1773086315896.png",
    },
    {
        title: "NEXUS OUTDOOR",
        category: "OOH Advertising",
        year: "2025",
        color: "bg-zinc-800",
        image: "/images/case_billboard_campaign_1773086333235.png",
    },
];

export const CaseStudies = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax transforms for the background blocks
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section
            ref={containerRef}
            className="bg-background relative py-32 md:py-48 w-full border-t border-foreground/5 z-20 scroll-mt-20"
            id="work"
        >
            <div className="container mx-auto px-6 mb-16 md:mb-32">
                <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
                    Selected <br />
                    <span className="text-foreground/40">Works.</span>
                </h2>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-12 md:gap-32">
                    {projects.map((project, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div
                                key={idx}
                                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center group cursor-pointer`}
                            >
                                {/* Abstract Parallax Image Block */}
                                <div className="w-full md:w-[60%] h-[50vh] md:h-[70vh] relative overflow-hidden rounded-sm">
                                    <motion.div
                                        style={{ y: isEven ? y1 : y2 }}
                                        className={`absolute inset-0 w-full h-[120%] -top-[10%] ${project.color} group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]`}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                        />
                                    </motion.div>
                                </div>

                                {/* Project Meta */}
                                <div className="w-full md:w-[40%] flex flex-col gap-4">
                                    <h3 className="font-display font-medium text-4xl md:text-5xl uppercase tracking-tighter text-foreground">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-4 font-mono text-sm text-foreground/50 tracking-widest uppercase">
                                        <span>{project.category}</span>
                                        <span>//</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <div className="mt-8 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out h-px bg-foreground w-1/3" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
