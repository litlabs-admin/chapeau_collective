"use client";

import { ServiceGrid } from "../ui/service-grid";

export const Services = () => {
    return (
        <section className="bg-background pt-32 pb-48 w-full relative z-20">
            <div className="container mx-auto px-6 mb-20 md:mb-32">
                <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
                    The Three <br />
                    <span className="text-foreground/40">Pillars.</span>
                </h2>
                <p className="mt-6 text-xl text-foreground/60 max-w-2xl font-sans text-balance">
                    We strip away the noise and focus on what actually drives enterprise value. Our methodology unites creative storytelling with revenue science.
                </p>
            </div>

            <ServiceGrid />
        </section>
    );
};
