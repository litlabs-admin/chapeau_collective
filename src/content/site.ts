export type NavItem = {
  label: string;
  href: string;
  count?: string;
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
  mediaType: "image" | "video";
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
};

export type BlogPreview = {
  title: string;
  href: string;
  image: string;
  readTime: string;
};

export type Faq = {
  question: string;
  answer: string;
};

const asset = (path: string) => `/${path}`;

export const homePageContent = {
  meta: {
    title: "Chapeau Collective",
    description:
      "Chapeau Collective"
  },
  logo: asset("chapeau-collective-logo.svg"),
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
    primaryCta: {
      label: "Let's Talk",
      href: "#book-a-call-section"
    },
    secondaryCta: {
      label: "See Results",
      href: "#results-section"
    },
    backdrop: asset("images/hero/hero-backdrop.jpg")
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
      "We don't just advise. We deliver. Our clients don't just see growth they experience it. Here's a glimpse of what we've built together.",
    logosHeading: "Clients include",
    logos: [
      asset("images/clients/racam_logo.png"),
      asset("images/clients/roswell_logo.png")
    ],
    cards: [
      {
        title: "Sharper positioning turned a scattered marketing function into a focused growth engine.",
        quote:
          "Chapeau helped us get clear on who we were speaking to, what mattered and where our marketing effort should actually go.",
        person: "Priya Shah, Managing Director",
        company: "Northline Advisory",
        avatar: asset("images/testimonials/priya-shah-avatar.png"),
        mediaType: "image",
        mediaSrc: asset("images/testimonials/northline-advisory-media.png")
      },
      {
        title: "A clearer sales process helped the team move opportunities faster and close with more confidence.",
        quote:
          "The team brought structure to our pipeline without overcomplicating it. We finally had a repeatable way to turn interest into revenue.",
        person: "Daniel Carter, Commercial Director",
        company: "SummitBridge Consulting",
        avatar: asset("images/testimonials/daniel-carter-avatar.png"),
        mediaType: "image",
        mediaSrc: asset("images/testimonials/summitbridge-media.png")
      },
      {
        title: "Practical AI workflows reduced manual work and gave the business more room to scale.",
        quote:
          "Chapeau made AI feel useful, not abstract. The workflows they built saved time, improved handoffs and gave our team better visibility.",
        person: "Alex Morgan, Operations Lead",
        company: "Civitas Enterprise Group",
        avatar: asset("images/testimonials/alex-morgan-avatar.png"),
        mediaType: "image",
        mediaSrc: asset("images/testimonials/civitas-enterprise-media.png")
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
        image: asset("images/team/gordon-ross.png"),
        objectPosition: "center"
      },
      {
        name: "Will Sinclair",
        role: "Sales & Revenue Lead",
        bio:
          "Will brings a career-long depth of expertise in B2B sales performance spanning leadership, methodology, coaching and execution. As part of the highly regarded Sales Geek franchise, Will helps businesses build predictable, repeatable revenue generation systems. He aligns high-performance process design with coaching discipline to turn pipeline into profit.",
        image: asset("images/team/will-sinclair.jpeg"),
        objectPosition: "center"
      },
      {
        name: "Vandan Mandloi",
        role: "AI & Digital Operations Lead",
        bio:
          "Vandan has spent almost a decade delivering digital-led strategies and campaigns for large-scale corporate enterprises through his agency LitLabs. He brings a scale-up mindset to everything he works on delivering practical AI workflows, automation agents and multichannel digital advertising that give businesses a genuine operational edge.",
        image: asset("images/team/vandan-mandloi.jpeg"),
        objectPosition: "center"
      }
    ] satisfies TeamMember[]
  },
  blogSection: {
    id: "blog-section",
    eyebrow: "Insights",
    intro:
      "From pipelines to positioning our latest thinking on marketing, sales and AI for growth-focused businesses.",
    viewAllHref: "/blog",
    viewAllLabel: "View all Articles",
    previews: [
      {
        title: "Why Marketing and Sales Alignment Is Your Biggest Untapped Revenue Lever",
        href: "/blog/why-marketing-and-sales-alignment-is-your-biggest-untapped-revenue-lever",
        image: asset("images/blog/marketing.jpg"),
        readTime: "4 mins"
      },
      {
        title: "The AI Tools Actually Worth Implementing in a B2B Business Right Now",
        href: "/blog/the-ai-tools-actually-worth-implementing-in-a-b2b-business-right-now",
        image: asset("images/blog/ai.jpg"),
        readTime: "5 mins"
      },
      {
        title: "How to Build a Sales Process That Doesn't Rely on Heroics",
        href: "/blog/how-to-build-a-sales-process-that-doesnt-rely-on-heroics",
        image: asset("images/blog/sales.jpg"),
        readTime: "3 mins"
      }
    ] satisfies BlogPreview[]
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
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/" },
      { label: "Facebook", href: "https://www.facebook.com/" },
      { label: "YouTube", href: "https://youtube.com/" }
    ],
    copyright: "© 2026 Chapeau Collective. All rights reserved.",
    wordmark: "Chapeau Collective"
  }
};
