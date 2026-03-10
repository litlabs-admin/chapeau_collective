"use client";

import { ServiceGrid } from "../ui/service-grid";

export const Services = () => {
    return (
        <section id="services" className="bg-background pt-16 md:pt-24 pb-8 md:pb-12 w-full relative z-20">
            <div className="container mx-auto px-6 mb-10 md:mb-16">
                <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
                    The Three <br />
                    <span className="text-foreground/40">Pillars.</span>
                </h2>
                <div className="mt-8 md:mt-12 max-w-2xl">
                    <p className="text-xl md:text-2xl font-semibold text-foreground mb-6 font-sans">
                        We're about marketing, sales and AI alignment, ready to grow your business.
                    </p>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-sans mb-6">
                        Marketing, sales and AI no longer sit separately. Together, they shape revenue.
                    </p>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-sans">
                        Our done-for-you solution will create demand,  drive revenue and grow your customer base, moving you ahead of the pack.
                    </p>
                </div>
            </div>

            <ServiceGrid />
        </section>
    );
};
