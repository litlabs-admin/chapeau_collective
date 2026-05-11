export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: number;
  suffix: string;
  label: string;
  detail: string;
};

export type Service = {
  tag: string;
  heading: string;
  title: string;
  body: string;
  art: "ads" | "creative" | "conversion";
};

export type MediaCard = {
  title: string;
  quote: string;
  person: string;
  company: string;
  avatar: string;
  mediaSrc: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  detail: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  objectPosition?: string;
  linkedin?: string;
};

export type Faq = {
  question: string;
  answer: string;
};

const asset = (path: string) => `/${path}`;

export const homePageContent = {
  meta: {
    title: "Chapeau Collective",
    description: "Chapeau Collective"
  },
  logo: asset("chapeau-collective-logo.svg"),
  headerLogo: asset("chapeau-collective-header-logo.svg"),
  nav: [
    { label: "Services", href: "#services-section" },
    { label: "Results", href: "#results-section" },
    { label: "Process", href: "#process-section" },
    { label: "Insights", href: "#blog-section" }
  ] satisfies NavItem[],
  hero: {
    sectionId: "hero-section",
    title: "Where strategy and revenue align.",
    copy:
      "From demand creation to closed deals, every move is engineered for growth. We operate at the intersection of marketing, sales and AI to build revenue engines that compound over time.",
    secondaryCta: {
      label: "See Results",
      href: "#results-section"
    },
    backdropVideo: asset("images/hero/hero-backdrop-video.mov")
  },
  metricsSectionId: "metrics-section",
  metrics: [
    {
      value: 3,
      suffix: "X",
      label: "Revenue Multiplier",
      detail: "Average revenue uplift across active clients in the first 12 months."
    },
    {
      value: 60,
      suffix: "%",
      label: "Faster Pipeline Velocity",
      detail: "Deals closing sooner through aligned sales process and sharper messaging."
    },
    {
      value: 100,
      suffix: "%",
      label: "Done For You",
      detail: "Strategy, execution and optimisation handled end to end by the Collective."
    }
  ] satisfies Metric[],
  servicesSection: {
    id: "services-section",
    eyebrow: "What we do",
    intro:
      "A done-for-you growth engine built on marketing, sales and AI. Minimal friction. Maximum revenue.",
    items: [
      {
        tag: "service (01)",
        heading: "Marketing strategy and demand generation that makes your buyers find you first.",
        title: "Strategic Marketing",
        body:
          "Your buyers are making decisions before they speak to anyone. We ensure your brand is shaping that decision. Through positioning, content, campaigns and channel strategy, we create demand that feeds a healthy, self-sustaining pipeline. No guesswork just marketing that earns its place in the revenue story.",
        art: "ads"
      },
      {
        tag: "service (02)",
        heading: "Sales leadership, process design and coaching that turns interest into revenue.",
        title: "Sales Acceleration",
        body:
          "Pipeline stalling is a process problem, not a people problem. We bring the methodology, leadership and coaching discipline to build predictable, repeatable revenue systems. From discovery to close, we tighten every stage so your team converts more, faster and with consistency.",
        art: "creative"
      },
      {
        tag: "service (03)",
        heading: "Practical AI workflows, automation and digital strategy that make your operation scale.",
        title: "AI & Digital Operations",
        body:
          "AI without a commercial context is just noise. We design and deploy automation and AI agents that support real business outcomes from lead nurturing to operational efficiency. The result is a leaner, smarter business that grows without adding proportional headcount.",
        art: "conversion"
      }
    ] satisfies Service[]
  },
  resultsSection: {
    id: "results-section",
    eyebrow: "Results",
    intro:
      "We don't just talk performance . We deliver it. Our clients don't just see growth, they experience transformation. Here's a glimpse of what we've done.",
    logosHeading: "Clients include",
    logos: [
      asset("images/clients/racam_logo.webp"),
      asset("images/clients/roswell_logo.webp"),
      asset("images/clients/kinitic.svg"),
      asset("images/clients/aura.svg"),
      asset("images/clients/nexus.svg")
    ],
    cards: [
      {
        title:
          "From start-up to credible scale-up record Q1 sales for an EV charger manufacturer, Q2 set to surpass.",
        quote:
          "Gordon repositioned us as a credible, integration-ready partner in fleet and energy EV conversations a crucial step on our scale-up journey.",
        person: "Fraser Koefman, Commercial Director",
        company: "VCHRGD",
        avatar: asset("images/testimonials/fraser-koefman-avatar.webp"),
        mediaSrc: asset("images/testimonials/vchrgd-media.webp")
      },
      {
        title:
          "Built a targeted B2B marketing engine for an independent pension platform meetings booked with key influencers.",
        quote:
          "Phenomenal response from the engine Gordon built. Our most recent article alone produced 16 follow-ups from 102 readers many of them people we'd been trying to reach for months.",
        person: "Philip Hodges, Director",
        company: "Guiide",
        avatar: asset("images/testimonials/philip-hodges-avatar.webp"),
        mediaSrc: asset("images/testimonials/guiide-media.webp")
      },
      {
        title:
          "Pivoted a global BPO from generic marketing to a sector-led growth strategy across four verticals.",
        quote:
          "Gordon was instrumental in delivering our first-ever sector-based marketing strategy and a collaborative, supportive leader for the team.",
        person: "Polly Ashdown, Director of Communications",
        company: "Concentrix (formerly Webhelp)",
        avatar: asset("images/testimonials/polly-ashdown-avatar.webp"),
        mediaSrc: asset("images/testimonials/concentrix-media.webp")
      },
      {
        title:
          "Combined strategy, creative execution and brand positioning to accelerate a PR firm's visibility and authority.",
        quote:
          "They became a real strategic partner in growth fast-moving, long-term thinking, and consistently bringing ideas that drove results.",
        person: "Ben Roc, Founder",
        company: "VenturePR",
        avatar: asset("images/testimonials/ben-roc-avatar.webp"),
        mediaSrc: asset("images/testimonials/venturepr-media.webp")
      }
    ] satisfies MediaCard[]
  },
  processSection: {
    id: "process-section",
    eyebrow: "Process",
    intro:
      "We don't just 'consult.' We plug into your business like an in-house growth team combining strategy, execution and optimisation into one commercial system.",
    steps: [
      {
        step: "1",
        title: "Discovery & Audit",
        detail: "We learn your business, your buyers and your current commercial gaps. No assumptions just honest diagnosis."
      },
      {
        step: "2",
        title: "Strategy & Roadmap",
        detail: "We build a custom plan across marketing, sales and AI. Clear priorities, clear owners, clear outcomes."
      },
      {
        step: "3",
        title: "Execute & Optimise",
        detail: "The work goes live. We monitor, test and iterate weekly scaling what works and fixing what doesn't."
      },
      {
        step: "4",
        title: "Report & Grow",
        detail: "Transparent performance reporting with forward-looking recommendations. You always know what's working and what's next."
      }
    ] satisfies ProcessStep[]
  },
  teamSection: {
    id: "team-section",
    eyebrow: "Team",
    intro:
      "We're not a bloated agency. We're a tight-knit collective of specialists each an expert in their field, all speaking the same commercial language.",
    arrows: {
      prev: asset("images/icons/carousel-arrow-prev.svg"),
      next: asset("images/icons/carousel-arrow-next.svg")
    },
    members: [
      {
        name: "Gordon Ross",
        role: "Marketing & Strategy Lead",
        bio:
          "Gordon is a marketing specialist with nearly 20 years of experience across SaaS, financial services, management consultancy and more. He learns new markets fast and focuses energy where it counts. As founder of GR23 Marketing and a veteran of organisations like Concentrix and Ageas, Gordon brings practical strategy, clear messaging and genuine commercial momentum to the Collective.",
        image: asset("images/team/gordon-ross.webp"),
        objectPosition: "center",
        linkedin: "https://www.linkedin.com/in/gordonross1/"
      },
      {
        name: "Will Sinclair",
        role: "Sales & Revenue Lead",
        bio:
          "Will brings a career-long depth of expertise in B2B sales performance spanning leadership, methodology, coaching and execution. As part of the highly regarded Sales Geek franchise, Will helps businesses build predictable, repeatable revenue generation systems. He aligns high-performance process design with coaching discipline to turn pipeline into profit.",
        image: asset("images/team/will-sinclair.webp"),
        objectPosition: "center",
        linkedin: "https://www.linkedin.com/in/willsinclairsalesgeek/"
      },
      {
        name: "Vandan Mandloi",
        role: "AI & Digital Operations Lead",
        bio:
          "Vandan has spent almost a decade delivering digital-led strategies and campaigns for large-scale corporate enterprises through his agency LitLabs. He brings a scale-up mindset to everything he works on delivering practical AI workflows, automation agents and multichannel digital advertising that give businesses a genuine operational edge.",
        image: asset("images/team/vandan-mandloi.webp"),
        linkedin: "https://www.linkedin.com/in/vandan-mandloi/",
        objectPosition: "center"
      }
    ] satisfies TeamMember[]
  },
  blogSection: {
    id: "blog-section",
    eyebrow: "Insights",
    intro:
      "Working notes from the Collective. Practical thinking on marketing, sales and AI for businesses building predictable revenue.",
    viewAllHref: "/blog",
    viewAllLabel: "View all Articles"
  },
  faqSection: {
    id: "faq-section",
    eyebrow: "FAQ",
    intro:
      "Got questions? We've got answers. Here's what businesses like yours usually ask before we get started.",
    items: [
      {
        question: "What kind of businesses do you work with?",
        answer:
          "We work primarily with B2B businesses looking to scale typically at a stage where word of mouth and referrals have carried them so far, but they now need a more structured, proactive approach to growth. If you're ambitious, open to change and ready to invest in the process, we'll likely be a strong fit."
      },
      {
        question: "Do you only do one area marketing, sales or AI?",
        answer:
          "No. The Collective works across all three and that's the point. Siloed thinking is one of the biggest blockers to sustainable growth. We bring marketing, sales and AI together under one commercial view, so each discipline reinforces the other."
      },
      {
        question: "How quickly can we get started?",
        answer:
          "After an initial discovery conversation, we typically move to a proposal and onboarding within two to three weeks. We don't believe in dragging out the pre-engagement phase if it's a good fit, we move."
      },
      {
        question: "Is there a long-term contract?",
        answer:
          "We work on retained engagements, typically agreed in three-to-six month blocks. This gives us enough runway to deliver meaningful results while keeping the relationship commercially sensible for both sides."
      },
      {
        question: "What does 'done-for-you' actually mean?",
        answer:
          "It means we do the work not just the advice. Strategy, execution, optimisation, reporting. You get a hands-on commercial team without the overhead of building one internally."
      }
    ] satisfies Faq[]
  },
  quoteSection: {
    id: "book-a-call-section",
    eyebrow: "Get a Quote",
    title:
      "We specialise in helping ambitious businesses grow through aligned marketing, sharper sales and practical AI. If you're ready to move past guesswork and build real commercial momentum, start a conversation.",
    helper: "We'll be in touch shortly. In the meantime, feel free to explore our insights.",
    submitLabel: "Start the Conversation",
    fields: {
      namePlaceholder: "Jane Smith",
      emailPlaceholder: "jane@example.com",
      companyPlaceholder: "your company",
      briefLabel: "Tell us about your business & goals",
      briefPlaceholder: "A short brief",
      revenueLabel: "Current Revenue Range",
      revenueOptions: [
        "Pre-revenue / Early stage",
        "Under £250k",
        "£250k – £1M",
        "£1M – £5M",
        "£5M+"
      ]
    }
  },
  footer: {
    headline: "Brand Growth is Hard But we make it Simple.",
    newsletterTitle: "Subscribe to The Collective Digest",
    newsletterPlaceholder: "someone@gmail.com",
    newsletterSubmitLabel: "Submit",
    sections: [
      { label: "Hero", href: "#hero-section" },
      { label: "Metrics", href: "#metrics-section" },
      { label: "Services", href: "#services-section" },
      { label: "Results", href: "#results-section" },
      { label: "Process", href: "#process-section" },
      { label: "Meet the Collective", href: "#team-section" },
      { label: "Insights", href: "#blog-section" },
      { label: "FAQ", href: "#faq-section" },
      { label: "Let's Talk", href: "#book-a-call-section" }
    ],
    pages: [
      { label: "Home", href: "/" },
      { label: "Insights / Blog", href: "/blog" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" }
    ],
    copyright: "© 2026 Chapeau Collective. All rights reserved."
  }
};
