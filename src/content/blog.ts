export type BlogContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "pro_tip";
      text: string;
    };

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  date: string;
  content: BlogContentBlock[];
};

const asset = (path: string) => `/${path}`;

export const blogArticles = [
  {
    slug: "why-marketing-and-sales-alignment-is-your-biggest-untapped-revenue-lever",
    title: "Why Marketing and Sales Alignment Is Your Biggest Untapped Revenue Lever",
    description:
      "Most growth problems are not caused by weak marketing or lazy sales. They happen when both teams are solving different problems with different definitions of success.",
    image: asset("images/blog/marketing.jpg"),
    readTime: "5 mins",
    author: "Gordon Ross",
    authorRole: "Marketing & Strategy Lead",
    authorAvatar: asset("images/team/gordon-ross.png"),
    date: "22/03/2025",
    content: [
      {
        type: "paragraph",
        text:
          "Last year, a $14M B2B services company came to us frustrated. Marketing was hitting every lead target on the dashboard. Sales was missing quota for the third quarter in a row. Both teams blamed each other on the all-hands. The CEO was tired of mediating the same fight every Monday."
      },
      {
        type: "paragraph",
        text:
          "When we sat down with the data, the diagnosis was simple. Marketing was generating volume against the wrong definition of a lead. Sales was working those leads with the wrong expectations. Nothing was broken individually. The system between them was."
      },
      {
        type: "heading",
        text: "The Beginning: Two Teams, Two Scoreboards"
      },
      {
        type: "paragraph",
        text:
          "Marketing and sales misalignment is rarely a personality problem. It is a measurement problem. When marketing is paid on lead volume and sales is paid on closed revenue, the two functions optimize for different things and the customer experiences the gap. The fix is not better tools. It is a shared scoreboard."
      },
      {
        type: "heading",
        text: "Agree on What a Qualified Lead Actually Means"
      },
      {
        type: "paragraph",
        text:
          "Most alignment work fails because both teams think they already agree. They do not. Until you write down the criteria together and look at three months of pipeline data side by side, you are guessing. Run a working session where marketing and sales score the same 50 closed-won deals against your current ICP and see how often they disagree."
      },
      {
        type: "list",
        items: [
          "Define fit by revenue band, industry and company size, not job title alone.",
          "Add intent signals like demo requests, pricing visits and competitor research.",
          "Distinguish between a lead, a marketing qualified lead and a sales accepted lead.",
          "Document the criteria where both teams can see and challenge it weekly."
        ]
      },
      {
        type: "heading",
        text: "Build One Funnel View Both Teams Own"
      },
      {
        type: "paragraph",
        text:
          "If marketing has a Hubspot dashboard and sales has a Salesforce dashboard and the numbers do not match, alignment is impossible. You need one funnel view from first touch to closed revenue. The leadership team should look at the same picture every week. Disagreement on direction is fine. Disagreement on the numbers is fatal."
      },
      {
        type: "heading",
        text: "Make Messaging Consistent From Ad to Proposal"
      },
      {
        type: "paragraph",
        text:
          "A common failure point is the message changing once a prospect moves from marketing into sales. The ad promises one thing, the landing page frames another, and the discovery call starts somewhere else entirely. Each small disconnect reduces trust and lengthens the cycle. The strongest revenue teams use the same commercial narrative end to end."
      },
      {
        type: "list",
        items: [
          "Audit your top three campaigns against the first three minutes of a sales call.",
          "Make sure the customer pains, language and proof points match.",
          "Give sales the campaign context for every inbound lead they touch.",
          "Have marketing sit in on five sales calls per quarter, minimum."
        ]
      },
      {
        type: "pro_tip",
        text:
          "Run a fifteen-minute weekly pipeline review where marketing and sales look at the same five deals together. Not to assign blame. To find what evidence is missing and which leads need air cover. This single ritual fixes more alignment problems than any tooling project."
      },
      {
        type: "heading",
        text: "Tie Compensation to Shared Outcomes"
      },
      {
        type: "paragraph",
        text:
          "Behaviour follows incentives. If marketing's bonus is tied to MQL volume and sales' bonus is tied to closed revenue, the system will produce volume that does not close. Move at least part of marketing's variable compensation to pipeline created and revenue closed. The conversation changes overnight."
      },
      {
        type: "heading",
        text: "Coach the Whole Funnel, Not Just the Closing Stage"
      },
      {
        type: "paragraph",
        text:
          "Most coaching focuses on the late funnel because that is where revenue lives. But the easiest leverage is at the top. A small lift in lead quality compounds through the whole funnel. Make discovery quality, qualification rigor and follow-up discipline visible early so coaching arrives in time to change the outcome."
      },
      {
        type: "heading",
        text: "Final Thoughts"
      },
      {
        type: "paragraph",
        text:
          "Marketing and sales alignment is not a workshop. It is an operating rhythm. The companies that get it right do not have smarter people. They have shared definitions, one funnel view, consistent messaging and weekly rituals that make the work visible to both teams. Start with one of those this quarter. The rest gets easier from there."
      }
    ]
  },
  {
    slug: "the-ai-tools-actually-worth-implementing-in-a-b2b-business-right-now",
    title: "The AI Tools Actually Worth Implementing in a B2B Business Right Now",
    description:
      "AI is only useful when it removes friction from real business workflows. These are the practical places B2B companies should start before chasing novelty.",
    image: asset("images/blog/ai.jpg"),
    readTime: "6 mins",
    author: "Vandan Mandloi",
    authorRole: "AI & Digital Operations Lead",
    authorAvatar: asset("images/team/vandan-mandloi.jpeg"),
    date: "22/03/2025",
    content: [
      {
        type: "paragraph",
        text:
          "A few months ago, I audited the AI stack at a fast-growing B2B SaaS company. They had paid for twelve different AI tools across marketing, sales and operations. They were actively using two. The other ten were quietly burning roughly $9,000 a month and producing nothing. The team felt busy. The business was not faster."
      },
      {
        type: "paragraph",
        text:
          "This is the most common AI story in B2B right now. Adoption looks like procurement. Real change looks like fewer hours on repetitive work and faster decisions. The two are not the same."
      },
      {
        type: "heading",
        text: "The Beginning: Tool Sprawl Without a Workflow"
      },
      {
        type: "paragraph",
        text:
          "The problem with AI in B2B is rarely a lack of tools. It is a lack of judgment about where AI actually pays back. Most teams are surrounded by demos, automations and promises, but very few have mapped the workflows where AI removes real friction. Without that map, you end up paying for a stack that nobody integrates into how the work actually gets done."
      },
      {
        type: "heading",
        text: "Start With Research and Synthesis"
      },
      {
        type: "paragraph",
        text:
          "B2B teams spend a surprising amount of time collecting, reading and summarizing information. Call notes, customer feedback, market research, competitor data and industry reports pile up faster than anyone can process them. This is the lowest-risk, highest-leverage place to start. AI does not replace judgment here. It gets you to the useful judgment faster."
      },
      {
        type: "list",
        items: [
          "Summarize last quarter's customer interviews into recurring themes.",
          "Turn five-page analyst reports into a one-page board summary.",
          "Compare your last ten lost deals against your last ten won deals.",
          "Generate weekly trend digests from a list of competitor sites and feeds."
        ]
      },
      {
        type: "heading",
        text: "Use AI to Improve Sales Preparation"
      },
      {
        type: "paragraph",
        text:
          "Most sellers walk into discovery calls with too little context, then write follow-ups that nobody reads. AI is excellent at the boring parts of selling. It is far less useful at the human parts. Use it for the prep, the summary and the follow-up. Do not use it to replace the conversation itself."
      },
      {
        type: "list",
        items: [
          "Generate account briefs from CRM history, news and LinkedIn before every call.",
          "Convert raw call transcripts into next-step recommendations and action items.",
          "Draft personalized follow-up emails grounded in what the prospect actually said.",
          "Flag recurring objection patterns across lost deals so reps can address them earlier."
        ]
      },
      {
        type: "pro_tip",
        text:
          "Pick one workflow your team repeats every week. Time how long it takes today. Pilot one AI tool for thirty days against that single workflow. Measure the saved hours and the quality difference. Only then expand. Compounding small wins beats chasing every new release on Twitter."
      },
      {
        type: "heading",
        text: "Automate Internal Handoffs"
      },
      {
        type: "paragraph",
        text:
          "A lot of operational waste hides between teams. Marketing hands leads to sales. Sales hands context to delivery. Delivery sends customer signals back to leadership. Most of that context lives in someone's memory or a half-finished CRM note. AI can standardize those handoffs so the next person does not start from zero."
      },
      {
        type: "heading",
        text: "Speed Up Customer Support Without Losing the Voice"
      },
      {
        type: "paragraph",
        text:
          "Support is one of the highest-volume text workflows in any B2B business. AI assistants can draft first responses, surface similar past tickets and route issues to the right specialist. The mistake to avoid is letting the assistant respond on its own. Use it as a co-pilot for your support team, not a replacement for them."
      },
      {
        type: "heading",
        text: "Generate First Drafts, Never Final Ones"
      },
      {
        type: "paragraph",
        text:
          "AI is brilliant at the blank page and mediocre at the final one. Use it to generate proposal drafts, content outlines, email sequences and internal documents. Then have a human edit for accuracy, voice and judgment. The teams that ship the worst AI output are the ones that publish what the model gave them on the first try."
      },
      {
        type: "heading",
        text: "Final Thoughts"
      },
      {
        type: "paragraph",
        text:
          "AI should make your best people more focused, not make your business sound generic. Use it for speed, structure and consistency. Keep human taste, commercial judgment and relationship-building at the centre. The companies winning with AI right now are not running the most tools. They are running the right ones, against workflows that matter, with humans still in charge of the decisions that move revenue."
      }
    ]
  },
  {
    slug: "how-to-build-a-sales-process-that-doesnt-rely-on-heroics",
    title: "How to Build a Sales Process That Doesn't Rely on Heroics",
    description:
      "A strong sales process should make good performance repeatable. If every deal depends on individual heroics, the system is carrying too much risk.",
    image: asset("images/blog/sales.jpg"),
    readTime: "5 mins",
    author: "Will Sinclair",
    authorRole: "Sales & Revenue Lead",
    authorAvatar: asset("images/team/will-sinclair.jpeg"),
    date: "22/03/2025",
    content: [
      {
        type: "paragraph",
        text:
          "I once worked with a founder-led sales team that crushed every quarter for two years. One rep, Daniel, was responsible for sixty percent of revenue. He out-worked everyone, knew every account by heart and pulled deals over the line on the last day of the month. Then Daniel left for a competitor. The next quarter, revenue dropped forty-three percent."
      },
      {
        type: "paragraph",
        text:
          "The team did not have a sales problem. They had a heroics problem. When growth depends on one person's instinct and effort, the company is one resignation away from a crisis. A real sales process makes good performance repeatable, predictable and coachable, even when the rockstar leaves."
      },
      {
        type: "heading",
        text: "The Beginning: Talent Is Not a Process"
      },
      {
        type: "paragraph",
        text:
          "Many growing businesses mistake sales talent for sales process. A brilliant salesperson can carry the number for a while, but if every deal relies on memory, instinct and last-minute effort, growth becomes fragile. A good process does not remove personality from selling. It gives skilled people a clearer path to follow and a shared language for moving deals forward."
      },
      {
        type: "heading",
        text: "Define Stages by Buyer Progress, Not Seller Hope"
      },
      {
        type: "paragraph",
        text:
          "Pipeline stages should represent what the buyer has done, not what the seller hopes will happen. A proposal sent is not the same as a problem validated. A meeting booked is not the same as real urgency. Anchor every stage to a verifiable buyer action, not internal optimism."
      },
      {
        type: "list",
        items: [
          "Use exit criteria the buyer must demonstrate, not internal milestones.",
          "Tie every stage advance to documented evidence in the CRM.",
          "Track next steps that the buyer has agreed to, not next steps you assumed.",
          "Audit stalled deals against missing evidence, not gut feel about the rep."
        ]
      },
      {
        type: "heading",
        text: "Make Qualification Visible and Consistent"
      },
      {
        type: "paragraph",
        text:
          "Most teams say they qualify deals. Few do it consistently. Pick one framework, MEDDIC, BANT or your own variant, and have every rep score every deal at every stage. The framework matters less than the consistency. When everyone scores the same way, deal reviews become diagnostic instead of subjective."
      },
      {
        type: "pro_tip",
        text:
          "Run a weekly thirty-minute deal desk where reps walk through their top three opportunities against the qualification framework. Do not let it become a status update. The only question that matters is what evidence is missing to advance the deal this week."
      },
      {
        type: "heading",
        text: "Coach the Process, Not Just the Outcome"
      },
      {
        type: "paragraph",
        text:
          "If sales reviews only focus on whether deals closed, coaching arrives too late. Managers need to inspect discovery quality, stakeholder mapping, objection handling and follow-up discipline while there is still time to improve the deal. Outcomes are lagging indicators. Behaviours are leading ones."
      },
      {
        type: "list",
        items: [
          "Listen to one full call per rep per week.",
          "Coach on the discovery questions asked, not just the close attempted.",
          "Score follow-up emails against a clear quality bar.",
          "Pair rookies with senior reps on real deals, not in role-plays."
        ]
      },
      {
        type: "heading",
        text: "Build a Forecast You Can Defend"
      },
      {
        type: "paragraph",
        text:
          "A forecast is only as good as the evidence behind it. Most forecasts are gut feel dressed up as percentages. Move to commit, best case and pipeline categories with clear rules for each. A deal cannot be commit unless specific buyer actions have happened. The board calls become shorter. The misses become smaller."
      },
      {
        type: "heading",
        text: "Build Consistency Before Scale"
      },
      {
        type: "paragraph",
        text:
          "A repeatable process makes hiring easier, forecasting cleaner and performance less dependent on a few heroic individuals. Onboarding goes from six months to six weeks. Underperformers become visible faster. Top performers spend more time selling and less time scrambling. The goal is not bureaucracy. The goal is to make the right sales behaviours easier to repeat."
      },
      {
        type: "heading",
        text: "Final Thoughts"
      },
      {
        type: "paragraph",
        text:
          "Heroics feel impressive in the moment and dangerous in the rear-view mirror. The teams that build durable revenue do not rely on the last-day-of-the-quarter miracle. They build systems where good performance is the default, not the exception. Pick one part of the process this month. Make it visible, repeatable and coachable. The rest follows."
      }
    ]
  }
] satisfies BlogArticle[];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3) {
  return blogArticles.filter((article) => article.slug !== slug).slice(0, limit);
}
