"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
    {
        name: "Gordon Ross",
        role: "Marketing and Strategy Lead",
        bio: "Gordon is a marketing specialist, with almost 20 years experience  across SaaS, IT, financial services, electric vehicles, management consultancy, insurance and sports sponsorship, proven in learning new markets fast and focusing marketing efforts where they matter most.\n\nAlongside his role as founder of GR23 Marketing where he helps SME businesses achieve the growth their hard work deserves, he’s led marketing teams with global businesses such as Webhelp (now Concentrix) and Ageas, and smaller, agile operations in FreeAgent, Kick ICT and Gofor.\n\nGordon brings practical strategies, clear consistent messaging and much more to the collective, ready to get you the marketing momentum you need to help your business grow.",
        skills: ["Strategic Marketing", "Customer Acquisition", "Brand & Content"],
        image: "/images/gordon.png"
    },
    {
        name: "Will Sinclair",
        role: "Sales and Revenue Lead",
        bio: "Will sits at the core of our sales engine with a skillset that spans leadership, methodology, coaching and execution. With a wide-ranging career delivering sales consultancy, leadership and best practice to businesses of all stages and sizes, Will currently supports businesses across the UK as part of the hugely successful Sales Geek franchise.\n\nWill brings particular, extensive experience in driving  B2B sales performance, aligning high-performance sales process design with coaching discipline to build predictable, repeatable revenue generation systems.",
        skills: ["Sales Leadership", "Executive Coaching", "Change Management"],
        image: "/images/willsinclair.jpeg"
    },
    {
        name: "Vandan Mandloi",
        role: "AI and Digital Operations Lead",
        bio: "Vandan has spent almost a decade delivering digital-led strategies and campaigns for large scale corporate enterprises through his agency LitLabs.\n\nVandan brings an entrepreneurial, scale up mindset to everything he works on, offering front-line expertise in delivering practical AI workflows and agents, operational excellence and multichannel digital advertising, often combining all of these disciplines to deliver the  digital-led solutions from which business can grow.",
        skills: ["Practical AI", "Operational Excellence", "Process Automation"],
        image: "/images/vandan.jpeg"
    }
];

export const Team = () => {
    return (
        <section id="team" className="relative py-12 md:py-16 bg-background border-t border-foreground/10">
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
