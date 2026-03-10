"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
    {
        name: "Gordon Ross",
        role: "Head of Marketing & Strategy",
        bio: "Gordon is a strategic marketing executive with over a decade of expertise scaling businesses from start-up to enterprise level. As the Founder of GR23 Marketing and former Head of Marketing for major brands like Webhelp, Gofor, and FreeAgent, he specializes in brand development and multi-channel acquisition. Gordon is the creator of the 'Chapeau' initiative—a weekly tradition (French for 'a tip of the hat') to honor exceptional people, products, and companies. Through this ethos, he fosters collaborative growth and executes targeted strategies for cutting-edge clients like Guiide and TIBG.",
        skills: ["Strategic Marketing", "Customer Acquisition", "Brand & Content"],
        image: "/images/gordon.png"
    },
    {
        name: "Will Sinclair",
        role: "Fractional Sales Director",
        bio: "Will sits at the core of our sales and leadership development engine. Operating as 'Sales Geek Scotland', he is a Fractional Sales Director and licensed Insights Practitioner who transforms behavioral sales infrastructure. With an extensive background in B2B performance coaching across teams and sectors, he connects personality, process, and performance. Will aligns high-performance sales process design with manager coaching discipline to build predictable, repeatable revenue generation systems.",
        skills: ["Sales Leadership", "Executive Coaching", "Change Management"],
        image: "/images/willsinclair.jpeg"
    },
    {
        name: "Vandan Mandloi",
        role: "E-Commerce & Operations Executive",
        bio: "Vandan has spent almost a decade delivering  digital-led strategies and campaigns for large scale corporate enterprises through his agency LitLabs.\n\nVandan brings an entrepeneurial, scale up mindset to everything he works on, offering front-line expertise in delivering practical AI solutions, operational excellence, process automations and multichannel digital advertising, often combining all of these disciplines to deliver the in digital-led solutions from which business can grow.",
        skills: ["Practical AI", "Operational Excellence", "Process Automation"],
        image: "/images/vandan.jpeg"
    }
];

export const Team = () => {
    return (
        <section id="team" className="relative py-24 md:py-32 bg-background border-t border-foreground/10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16 md:mb-24">
                    <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground">
                        The Core <span className="text-foreground/40">Collective.</span>
                    </h2>
                    <p className="mt-6 max-w-2xl text-xl font-semibold text-foreground font-sans">
                        If you want better ROI, the whole process needs to be looked at by people who understand each part of it who speak a common language.
                    </p>
                    <p className="mt-4 max-w-2xl text-lg text-foreground/70 font-sans">
                        That is why we work as a collective.
                    </p>
                    <p className="mt-4 max-w-2xl text-lg text-foreground/70 font-sans">
                        Different expertise, one commercial view, helping businesses improve the full path from attention to revenue.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="flex flex-col gap-6 group"
                        >
                            <div className="w-full aspect-square bg-foreground/5 rounded-sm relative overflow-hidden flex items-center justify-center">
                                {/* Placeholder for Headshots */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/20 to-transparent opacity-50 z-10 transition-opacity group-hover:opacity-100" />
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity duration-700 z-0"
                                    />
                                ) : (
                                    <span className="font-display text-8xl text-foreground/10 font-bold uppercase z-0">{member.name.charAt(0)}</span>
                                )}
                            </div>

                            <div>
                                <h3 className="font-display text-3xl font-bold uppercase tracking-tight">{member.name}</h3>
                                <p className="text-brand-indigo font-mono text-sm uppercase tracking-widest mt-2">{member.role}</p>
                            </div>

                            <div className="text-foreground/70 font-sans leading-relaxed text-balance flex flex-col gap-4">
                                {member.bio.split('\n\n').map((paragraph, pIdx) => (
                                    <p key={pIdx}>{paragraph}</p>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4">
                                {member.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="px-3 py-1 bg-foreground/5 text-foreground/70 text-xs font-mono uppercase tracking-wider rounded-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
