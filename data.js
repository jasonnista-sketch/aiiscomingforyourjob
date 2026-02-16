export const INDUSTRIES = [
  {
    id: "healthcare", name: "Healthcare", icon: "🏥", accent: "#00e5a0",
    desc: "From diagnostics to drug discovery, AI is reshaping how care is delivered.",
    jobs: [
      { id: "physician", title: "Physician / Doctor", risk: 32, augment: 89,
        summary: "AI is transforming diagnostics, treatment planning, and patient monitoring. Physicians who embrace AI as a second opinion will thrive — those who ignore it risk falling behind.",
        keyInsight: "Radiologists using AI outperform both AI alone and radiologists alone. The pattern will repeat across specialties.",
        tools: [
          { name: "Viz.ai", url: "https://www.viz.ai", desc: "AI-powered stroke detection and clinical coordination" },
          { name: "Glass Health", url: "https://glass.health", desc: "AI-generated differential diagnoses and clinical plans" },
          { name: "Nuance DAX", url: "https://www.nuance.com/healthcare/ambient-clinical-intelligence.html", desc: "Ambient clinical documentation — AI listens and writes your notes" },
          { name: "PathAI", url: "https://www.pathai.com", desc: "AI pathology for more accurate diagnoses" },
        ],
        skills: ["Interpreting AI-assisted imaging", "Prompt engineering for clinical queries", "AI ethics in patient care", "Validating AI treatment suggestions"],
        resources: [
          { title: "WHO — Ethics & Governance of AI for Health", url: "https://www.who.int/publications/i/item/9789240029200" },
          { title: "Stanford HAI — AI in Healthcare", url: "https://hai.stanford.edu/research/ai-health" },
          { title: "AMA — Augmented Intelligence in Medicine", url: "https://www.ama-assn.org/practice-management/digital/augmented-intelligence-medicine" },
        ]},
      { id: "nurse", title: "Registered Nurse", risk: 15, augment: 72,
        summary: "AI assists nurses with patient monitoring, predictive alerts, and documentation — freeing up time for the bedside care that defines nursing.",
        keyInsight: "Nursing is one of the most AI-resistant professions. The human connection at its core cannot be automated.",
        tools: [
          { name: "CarePredict", url: "https://www.carepredict.com", desc: "AI-powered senior care and early warning system" },
          { name: "Eko Health", url: "https://www.ekohealth.com", desc: "AI-enhanced stethoscopes and cardiac monitoring" },
          { name: "MagicSchool (for nurse educators)", url: "https://www.magicschool.ai", desc: "AI toolkit for creating training materials" },
        ],
        skills: ["Working alongside AI monitoring systems", "Understanding AI-flagged patient alerts", "Digital health literacy"],
        resources: [
          { title: "ANA — AI and Nursing Position Statement", url: "https://www.nursingworld.org" },
          { title: "Journal of Nursing Scholarship — AI Special Issue", url: "https://sigmapubs.onlinelibrary.wiley.com/journal/15475069" },
        ]},
      { id: "radiologist", title: "Radiologist", risk: 58, augment: 95,
        summary: "One of the most AI-disrupted medical fields. AI excels at pattern recognition in imaging — but radiologists who use AI will replace those who don't.",
        keyInsight: "\"AI won't replace radiologists, but radiologists who use AI will replace those who don't.\" — Curtis Langlotz, Stanford",
        tools: [
          { name: "Aidoc", url: "https://www.aidoc.com", desc: "AI radiology triage and anomaly detection" },
          { name: "Zebra Medical Vision", url: "https://www.zebra-med.com", desc: "All-in-one AI radiology assistant" },
          { name: "Arterys", url: "https://www.arterys.com", desc: "AI-first medical imaging analysis platform" },
        ],
        skills: ["AI-assisted image interpretation", "Understanding model confidence scores", "Overread and validation workflows", "Staying current with FDA-cleared AI"],
        resources: [
          { title: "ACR Data Science Institute — AI Resources", url: "https://www.acrdsi.org" },
          { title: "Radiology: AI — Official Journal", url: "https://pubs.rsna.org/journal/ai" },
        ]},
    ]
  },
  {
    id: "legal", name: "Legal", icon: "⚖️", accent: "#ffb800",
    desc: "Contract review, legal research, and document drafting are being transformed overnight.",
    jobs: [
      { id: "attorney", title: "Attorney / Lawyer", risk: 35, augment: 85,
        summary: "AI is revolutionizing legal research, contract review, and document drafting. Attorneys who leverage AI gain massive efficiency advantages over those who don't.",
        keyInsight: "Top firms now measure 'AI fluency' in hiring. Junior associates who can't use AI tools are at a serious disadvantage.",
        tools: [
          { name: "Harvey AI", url: "https://www.harvey.ai", desc: "Generative AI built specifically for legal work" },
          { name: "CoCounsel", url: "https://casetext.com/cocounsel", desc: "AI legal assistant by Thomson Reuters for research & analysis" },
          { name: "Spellbook", url: "https://www.spellbook.legal", desc: "AI contract drafting directly in Microsoft Word" },
          { name: "EvenUp", url: "https://www.evenuplaw.com", desc: "AI-generated demand letters for personal injury" },
        ],
        skills: ["AI-assisted legal research", "Prompt engineering for legal queries", "AI contract review workflows", "Ethical use of AI in legal practice"],
        resources: [
          { title: "ABA — AI and the Legal Profession", url: "https://www.americanbar.org/groups/centers_commissions/center-for-innovation/technology/ai/" },
          { title: "Stanford CodeX — Legal AI Center", url: "https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/" },
        ]},
      { id: "paralegal", title: "Paralegal", risk: 52, augment: 88,
        summary: "Many traditional paralegal tasks — document review, research, filing — are being automated fast. Paralegals who master AI tools become force multipliers.",
        keyInsight: "A single AI-equipped paralegal can now do the document review work that used to require a team of 10.",
        tools: [
          { name: "Relativity", url: "https://www.relativity.com", desc: "AI-powered eDiscovery and document review" },
          { name: "Luminance", url: "https://www.luminance.com", desc: "AI for contract intelligence and due diligence" },
          { name: "Everlaw", url: "https://www.everlaw.com", desc: "Cloud-native litigation platform with AI" },
        ],
        skills: ["eDiscovery AI platforms", "AI-assisted document classification", "Technology-assisted review (TAR)", "Legal data management"],
        resources: [
          { title: "NALA — Technology for Paralegals", url: "https://www.nala.org" },
        ]},
    ]
  },
  {
    id: "finance", name: "Finance & Accounting", icon: "📊", accent: "#8b5cf6",
    desc: "From bookkeeping to algorithmic trading, AI is redefining every layer of finance.",
    jobs: [
      { id: "accountant", title: "Accountant / CPA", risk: 45, augment: 85,
        summary: "Bookkeeping and routine accounting are heavily automated. Strategic advisory, complex tax planning, and audit judgment remain human-driven — for now.",
        keyInsight: "The Big Four accounting firms have each invested billions in AI. The message is clear: adapt or be left behind.",
        tools: [
          { name: "Vic.ai", url: "https://www.vic.ai", desc: "Autonomous accounting with AI" },
          { name: "MindBridge", url: "https://www.mindbridge.ai", desc: "AI auditing and financial risk discovery" },
          { name: "Blue Dot", url: "https://www.bluedotcorp.com", desc: "AI-powered tax compliance" },
          { name: "Botkeeper", url: "https://www.botkeeper.com", desc: "AI-powered bookkeeping" },
        ],
        skills: ["AI-augmented audit procedures", "Data analytics for accounting", "Automating reconciliation workflows", "Advisory-focused client relationships"],
        resources: [
          { title: "AICPA — AI Resources for CPAs", url: "https://www.aicpa-cima.com/topic/technology" },
          { title: "Journal of Accountancy — AI Coverage", url: "https://www.journalofaccountancy.com" },
        ]},
      { id: "financial-analyst", title: "Financial Analyst", risk: 40, augment: 92,
        summary: "AI supercharges financial modeling, forecasting, and data analysis. Analysts who combine domain expertise with AI tools deliver exponentially more value.",
        keyInsight: "AI doesn't replace the analyst — it replaces the spreadsheet grind, letting analysts focus on insight and strategy.",
        tools: [
          { name: "AlphaSense", url: "https://www.alpha-sense.com", desc: "AI-powered market intelligence and search" },
          { name: "Kensho (S&P Global)", url: "https://www.kensho.com", desc: "AI analytics for financial institutions" },
          { name: "Domo", url: "https://www.domo.com", desc: "AI-powered business intelligence dashboards" },
        ],
        skills: ["AI-assisted financial modeling", "Natural language querying of financial data", "Machine learning for forecasting", "AI-driven risk assessment"],
        resources: [
          { title: "CFA Institute — AI in Investment Management", url: "https://www.cfainstitute.org" },
        ]},
    ]
  },
  {
    id: "creative", name: "Creative & Marketing", icon: "🎨", accent: "#ff6b6b",
    desc: "AI generates images, writes copy, and edits video. Creatives must evolve from makers to directors.",
    jobs: [
      { id: "graphic-designer", title: "Graphic Designer", risk: 48, augment: 92,
        summary: "AI image generation has disrupted the field. But designers who use AI as a creative accelerant — not a replacement — are producing work faster and more imaginatively than ever.",
        keyInsight: "The role is shifting from 'pixel pusher' to 'creative director of AI.' Taste, judgment, and brand thinking matter more than ever.",
        tools: [
          { name: "Midjourney", url: "https://www.midjourney.com", desc: "AI image generation for concept art and ideation" },
          { name: "Adobe Firefly", url: "https://www.adobe.com/products/firefly.html", desc: "Generative AI baked into Creative Cloud" },
          { name: "Figma AI", url: "https://www.figma.com", desc: "AI-powered design tools and auto-layout" },
          { name: "Canva Magic Studio", url: "https://www.canva.com/magic/", desc: "AI-powered design generation and editing" },
        ],
        skills: ["AI prompt engineering for visuals", "AI-assisted brand system creation", "Combining AI output with manual refinement", "Understanding AI image licensing"],
        resources: [
          { title: "AIGA — AI and Design Ethics", url: "https://www.aiga.org" },
          { title: "Creative Bloq — AI Design Tools Roundup", url: "https://www.creativebloq.com" },
        ]},
      { id: "copywriter", title: "Copywriter / Content Writer", risk: 55, augment: 88,
        summary: "AI can draft content at scale, but strategic thinking, brand voice, and emotional resonance still need human writers. The role is evolving from 'writer' to 'editor-in-chief + strategist.'",
        keyInsight: "Writers who treat AI as a brainstorming partner and first-draft engine are 3-5x more productive.",
        tools: [
          { name: "Jasper", url: "https://www.jasper.ai", desc: "AI content platform for marketing teams" },
          { name: "Writer", url: "https://writer.com", desc: "Enterprise AI writing with brand guardrails" },
          { name: "Copy.ai", url: "https://www.copy.ai", desc: "AI-powered GTM content workflows" },
        ],
        skills: ["AI content editing and refinement", "Prompt engineering for brand voice", "AI-human content workflows", "Content strategy in the AI era"],
        resources: [
          { title: "Content Marketing Institute — AI Resources", url: "https://contentmarketinginstitute.com" },
        ]},
      { id: "video-editor", title: "Video Editor / Producer", risk: 42, augment: 86,
        summary: "AI handles rough cuts, color grading, subtitles, and B-roll generation. Editors are becoming storytelling directors who orchestrate AI tools.",
        keyInsight: "What took a team a week can now be done by one editor with AI in a day. Speed is the new superpower.",
        tools: [
          { name: "Runway", url: "https://runwayml.com", desc: "AI video generation and editing suite" },
          { name: "Descript", url: "https://www.descript.com", desc: "AI-powered video editing through text" },
          { name: "CapCut (AI features)", url: "https://www.capcut.com", desc: "AI auto-captions, effects, and editing" },
        ],
        skills: ["AI-assisted rough cuts", "Text-based video editing", "AI color grading workflows", "Generative B-roll creation"],
        resources: [
          { title: "Frame.io — Future of Post-Production", url: "https://frame.io" },
        ]},
    ]
  },
  {
    id: "tech", name: "Technology", icon: "💻", accent: "#00d2ff",
    desc: "Even the builders aren't safe. AI writes code, manages infrastructure, and designs systems.",
    jobs: [
      { id: "software-engineer", title: "Software Engineer", risk: 28, augment: 96,
        summary: "AI coding assistants are the biggest productivity boost in a generation. Engineers who adopt AI tools write better code faster — but architecture, system design, and problem-solving remain deeply human.",
        keyInsight: "The best engineers use AI to eliminate boilerplate and focus on what matters: architecture, edge cases, and user experience.",
        tools: [
          { name: "GitHub Copilot", url: "https://github.com/features/copilot", desc: "AI pair programmer in your IDE" },
          { name: "Cursor", url: "https://cursor.sh", desc: "AI-first code editor" },
          { name: "Claude Code", url: "https://docs.anthropic.com/en/docs/claude-code", desc: "Agentic coding from the terminal" },
          { name: "Replit AI", url: "https://replit.com", desc: "AI-powered collaborative coding platform" },
        ],
        skills: ["Effective AI pair programming", "Prompt engineering for code generation", "AI-assisted debugging and refactoring", "Code review of AI-generated output"],
        resources: [
          { title: "GitHub Blog — State of AI in Development", url: "https://github.blog/news-insights/" },
          { title: "Stack Overflow — AI Developer Survey", url: "https://survey.stackoverflow.co" },
        ]},
      { id: "data-scientist", title: "Data Scientist", risk: 30, augment: 94,
        summary: "AutoML and AI assistants handle routine analysis, but framing the right questions, understanding business context, and communicating insights remain critical human skills.",
        keyInsight: "The 'full-stack data scientist' — someone who can ask the right question, build the model, AND tell the story — is now the standard.",
        tools: [
          { name: "DataRobot", url: "https://www.datarobot.com", desc: "Enterprise AI and AutoML platform" },
          { name: "H2O.ai", url: "https://h2o.ai", desc: "Open-source AI and ML platform" },
          { name: "Hex", url: "https://hex.tech", desc: "AI-powered collaborative data notebooks" },
        ],
        skills: ["AutoML platform proficiency", "AI model evaluation and selection", "Communicating AI insights to stakeholders", "Responsible AI and bias detection"],
        resources: [
          { title: "Google — Responsible AI Practices", url: "https://ai.google/responsibility/responsible-ai-practices/" },
        ]},
      { id: "product-manager", title: "Product Manager", risk: 22, augment: 80,
        summary: "AI automates user research synthesis, writes PRDs, and generates prototypes. PMs who leverage AI spend less time on docs and more time on strategy and customer insight.",
        keyInsight: "AI doesn't replace product sense. It replaces the busy-work that keeps PMs from doing deep customer discovery.",
        tools: [
          { name: "Dovetail", url: "https://dovetailapp.com", desc: "AI-powered user research analysis" },
          { name: "Notion AI", url: "https://www.notion.so/product/ai", desc: "AI writing and knowledge management for PMs" },
          { name: "Productboard", url: "https://www.productboard.com", desc: "AI-driven product management and prioritization" },
        ],
        skills: ["AI-assisted user research synthesis", "Writing effective AI prompts for PRDs", "Evaluating AI features for your product", "Data-driven prioritization with AI"],
        resources: [
          { title: "Lenny's Newsletter — AI for Product Managers", url: "https://www.lennysnewsletter.com" },
        ]},
    ]
  },
  {
    id: "education", name: "Education", icon: "📚", accent: "#e056a0",
    desc: "AI tutors personalize learning at scale. Teachers evolve from lecturers to mentors and facilitators.",
    jobs: [
      { id: "teacher", title: "K-12 Teacher", risk: 12, augment: 78,
        summary: "AI personalizes learning and automates grading, but teaching is fundamentally about human connection, mentorship, and social-emotional development. One of the safest professions.",
        keyInsight: "Teachers aren't being replaced — they're being freed from paperwork to do what they do best: inspire and connect.",
        tools: [
          { name: "Khanmigo", url: "https://www.khanacademy.org/khan-labs", desc: "AI tutor and teaching assistant by Khan Academy" },
          { name: "Diffit", url: "https://www.diffit.me", desc: "AI-generated differentiated resources by reading level" },
          { name: "MagicSchool", url: "https://www.magicschool.ai", desc: "AI toolkit built specifically for educators" },
          { name: "Gradescope", url: "https://www.gradescope.com", desc: "AI-assisted grading and assessment" },
        ],
        skills: ["Integrating AI tutors into curriculum", "AI-powered differentiated instruction", "Teaching AI literacy to students", "Detecting AI-generated student work"],
        resources: [
          { title: "ISTE — AI in Education", url: "https://www.iste.org/areas-of-focus/AI-in-education" },
          { title: "UNESCO — AI and Education Guidance", url: "https://www.unesco.org/en/digital-education/artificial-intelligence" },
        ]},
    ]
  },
  {
    id: "trades", name: "Construction & Trades", icon: "🏗️", accent: "#f97316",
    desc: "Physical trades are among the most AI-resistant. But smart tools, robotics, and planning AI are changing the game.",
    jobs: [
      { id: "electrician", title: "Electrician", risk: 8, augment: 45,
        summary: "Hands-on electrical work is extremely difficult to automate. AI assists with diagnostics and smart building systems, but the physical craft remains human.",
        keyInsight: "With 8% automation risk, this is one of the safest careers in the AI era. Demand is actually increasing as AI drives more electrification.",
        tools: [
          { name: "Fluke Connect", url: "https://www.fluke.com/en-us/fluke-connect", desc: "AI-enhanced diagnostic and measurement tools" },
          { name: "Bluebeam", url: "https://www.bluebeam.com", desc: "AI-assisted plan review and markup" },
        ],
        skills: ["Smart building system installation", "IoT and connected device wiring", "EV charging infrastructure", "AI diagnostic tool usage"],
        resources: [
          { title: "NECA — Technology & Innovation", url: "https://www.necanet.org" },
        ]},
      { id: "construction-pm", title: "Construction Project Manager", risk: 20, augment: 72,
        summary: "AI optimizes scheduling, cost estimation, and risk management. On-site leadership, problem-solving, and stakeholder management remain fundamentally human.",
        keyInsight: "AI catches scheduling conflicts and cost overruns before they happen. PMs who use these tools deliver projects on time and under budget.",
        tools: [
          { name: "ALICE Technologies", url: "https://www.alicetechnologies.com", desc: "AI construction scheduling optimization" },
          { name: "Buildots", url: "https://www.buildots.com", desc: "AI-powered construction progress tracking via camera" },
          { name: "Procore", url: "https://www.procore.com", desc: "AI-enhanced construction management platform" },
        ],
        skills: ["AI-optimized project scheduling", "Computer vision for site monitoring", "BIM and AI integration", "Predictive risk analytics"],
        resources: [
          { title: "ENR — Technology in Construction", url: "https://www.enr.com" },
        ]},
    ]
  },
  {
    id: "realestate", name: "Real Estate", icon: "🏠", accent: "#10b981",
    desc: "AI automates valuations, lead gen, and marketing. Relationship skills become the true differentiator.",
    jobs: [
      { id: "realtor", title: "Real Estate Agent", risk: 38, augment: 76,
        summary: "AI automates property matching, market analysis, and lead generation — but the relationship-driven, trust-based nature of real estate keeps agents essential.",
        keyInsight: "Agents who use AI for market insights and automated follow-ups close 40% more deals than those who don't.",
        tools: [
          { name: "Rechat", url: "https://rechat.com", desc: "AI-powered real estate CRM and marketing" },
          { name: "HouseCanary", url: "https://www.housecanary.com", desc: "AI property valuation and market analytics" },
          { name: "Restb.ai", url: "https://restb.ai", desc: "AI image tagging and property classification" },
        ],
        skills: ["AI-powered comparative market analysis", "Automated lead nurturing", "AI-generated property descriptions", "Virtual staging tools"],
        resources: [
          { title: "NAR — Technology Resources", url: "https://www.nar.realtor/technology" },
        ]},
    ]
  },
];

export const allJobs = INDUSTRIES.flatMap(ind => ind.jobs.map(j => ({ ...j, industry: ind })));

export function riskLabel(r) {
  if (r <= 15) return { text: "Very Low", color: "#10b981" };
  if (r <= 30) return { text: "Low", color: "#34d399" };
  if (r <= 45) return { text: "Moderate", color: "#fbbf24" };
  if (r <= 60) return { text: "High", color: "#f97316" };
  return { text: "Very High", color: "#ef4444" };
}

export function getIndustry(slug) {
  return INDUSTRIES.find(i => i.id === slug);
}

export function getJob(slug) {
  for (const ind of INDUSTRIES) {
    const job = ind.jobs.find(j => j.id === slug);
    if (job) return { job, industry: ind };
  }
  return null;
}
