"use client";

import { ServiceGrid } from "../ui/service-grid";

export const Services = () => {
    return (
        <section className="bg-background py-32 md:py-48 w-full relative z-20">
            <div className="container mx-auto px-6 mb-20 md:mb-32">
                <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
                    The Three <br />
                    <span className="text-foreground/40">Pillars.</span>
                </h2>
                <div className="mt-8 md:mt-12 max-w-2xl">
                    <p className="text-xl md:text-2xl font-semibold text-foreground mb-6 font-sans">
                        Chapeau Collective is built for the way businesses grow now.
                    </p>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-sans mb-6">
                        Marketing, sales and AI no longer sit separately. Together, they shape revenue.
                    </p>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-sans">
                        We bring them together through done-for-you commercial support, so the business gets clearer demand, stronger conversion and better follow-through.
                    </p>
                </div>
            </div>

            <ServiceGrid />
        </section>
    );
};
