export const Philosophy = () => {
    return (
        <section id="philosophy" className="bg-foreground text-background py-16 md:py-24 w-full">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-32">
                <div className="md:w-5/12">
                    <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                        We Don{"'"}t <br /> Just Advise.<br />
                        <span className="text-brand-indigo">We Deliver.</span>
                    </h2>
                </div>

                <div className="md:w-7/12 flex flex-col gap-8">
                    <p className="font-sans text-2xl md:text-3xl font-semibold leading-tight text-balance">
                        Chapeau Collective is built for the way businesses grow today.
                    </p>
                    <p className="font-sans text-lg md:text-xl text-background/80 leading-relaxed max-w-2xl">
                        Marketing, sales and AI no longer sit separately. Together they drive your growth.
                    </p>
                    <p className="font-sans text-lg md:text-xl text-background/80 leading-relaxed max-w-2xl">
                        Our done-for-you solution will harness these three crucial commercial levers for the benefit of your business; creating demand, driving growth and helping your customer base realise more value.
                    </p>

                    <div className="pt-8">
                        <button className="relative group inline-flex items-center gap-3 font-display font-bold uppercase tracking-widest text-sm border-b-2 border-background/20 hover:border-background pb-2 transition-colors duration-300">
                            Read the Manifesto
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
