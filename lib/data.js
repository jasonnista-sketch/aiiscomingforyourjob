export const INDUSTRIES = [
  {
    id: "healthcare", name: "Healthcare", icon: "🏥", accent: "#00e5a0",
    desc: "From diagnostics to drug discovery, AI is reshaping how care is delivered.",
    jobs: [
      { id: "physician", title: "Physician / Doctor", risk: 32, augment: 89,
        verdict: "No — AI won't replace doctors, but it will fundamentally change how medicine is practiced. Physicians who use AI as a diagnostic partner will dramatically outperform those who don't.",
        summary: "AI is transforming diagnostics, treatment planning, and patient monitoring. Physicians who embrace AI as a second opinion will thrive — those who ignore it risk falling behind.",
        keyInsight: "Radiologists using AI outperform both AI alone and radiologists alone. The pattern will repeat across specialties.",
        aiMastered: [
          { title: "Clinical documentation", desc: "Ambient AI listens to patient encounters and generates structured clinical notes in real time, eliminating hours of daily paperwork." },
          { title: "Drug interaction screening", desc: "AI cross-references thousands of medications, conditions, and allergies instantly — catching dangerous interactions humans miss." },
          { title: "Medical image analysis", desc: "AI detects anomalies in imaging (X-rays, CTs, MRIs) with accuracy matching specialists in narrow, well-defined tasks." },
        ],
        aiImproving: [
          { title: "Differential diagnosis generation", desc: "AI can suggest possible diagnoses from symptoms and history, but still struggles with rare conditions and atypical presentations." },
          { title: "Treatment plan optimization", desc: "AI is learning to suggest evidence-based treatment paths, but can't yet weigh the full context of a patient's life, preferences, and values." },
          { title: "Predictive patient monitoring", desc: "AI-powered early warning systems are getting better at predicting patient deterioration, but still produce false positives that require human judgment." },
        ],
        humanEssential: [
          { title: "Patient trust and empathy", desc: "Delivering a diagnosis, comforting a family, navigating end-of-life conversations — the core of medicine is deeply human." },
          { title: "Physical examination", desc: "Palpation, auscultation, surgical procedures, and hands-on patient care remain entirely beyond AI's reach." },
          { title: "Ethical judgment under uncertainty", desc: "When evidence is ambiguous and stakes are life-or-death, physicians make judgment calls that require wisdom AI doesn't have." },
        ],
        blsData: { salary: "$229,300", employment: "727,000", growth: "+3%", growthLabel: "Average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Ambient Clinical Documentation", url: "https://www.nuance.com/healthcare/ambient-clinical-intelligence.html", desc: "AI that listens to patient visits and auto-generates clinical notes. Learn to review and edit AI-drafted documentation efficiently." },
          { name: "AI Diagnostic Support", url: "https://glass.health", desc: "Tools that generate differential diagnoses from symptoms and history. Practice evaluating AI suggestions against your clinical judgment." },
          { name: "AI-Powered Imaging Analysis", url: "https://www.viz.ai", desc: "AI that flags critical findings in medical images. Understand how to interpret AI confidence scores alongside your own reads." },
          { name: "AI Pathology Platforms", url: "https://www.pathai.com", desc: "AI-assisted pathology for faster, more accurate diagnoses. Learn how AI quantifies tissue samples and where it still needs human oversight." },
        ],
        skills: [
          { text: "Review and edit AI-generated clinical notes for accuracy and completeness", linked: "Ambient Clinical Documentation" },
          { text: "Evaluate AI differential diagnoses — know when to trust them and when to override", linked: "AI Diagnostic Support" },
          { text: "Interpret AI confidence scores on medical imaging and integrate with clinical context", linked: "AI-Powered Imaging Analysis" },
          { text: "Understand FDA approval status and clinical validation of AI tools you use", linked: "AI Pathology Platforms" },
          { text: "Communicate to patients when and how AI is being used in their care" },
          { text: "Stay current on AI ethics guidelines from AMA, WHO, and your specialty board" },
        ],
        resources: [
          { title: "WHO — Ethics & Governance of AI for Health", url: "https://www.who.int/publications/i/item/9789240029200" },
          { title: "Stanford HAI — AI in Healthcare", url: "https://hai.stanford.edu/research/ai-health" },
          { title: "AMA — Augmented Intelligence in Medicine", url: "https://www.ama-assn.org/practice-management/digital/augmented-intelligence-medicine" },
        ],
        faqs: [
          { q: "Will AI replace doctors by 2030?", a: "No. While AI will automate many diagnostic and documentation tasks, the physician role requires empathy, physical examination, ethical judgment, and patient trust that AI cannot replicate. However, doctors who refuse to adopt AI tools may find themselves at a significant disadvantage." },
          { q: "What medical specialties are most affected by AI?", a: "Radiology, pathology, and dermatology — fields heavily reliant on pattern recognition in images — are most impacted. However, AI is also making inroads in cardiology, oncology, and primary care through clinical decision support." },
          { q: "Should medical students learn AI?", a: "Absolutely. Leading medical schools now include AI literacy in their curricula. Understanding how to work with AI diagnostic tools, validate their outputs, and recognize their limitations is becoming as essential as learning to read an X-ray." },
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
        verdict: "Not yet — but radiology is ground zero for AI in medicine. AI already matches radiologists in specific imaging tasks. The radiologists who thrive will be those who use AI as a tireless second reader, not those who compete against it.",
        summary: "One of the most AI-disrupted medical fields. AI excels at pattern recognition in imaging — but radiologists who use AI will replace those who don't.",
        keyInsight: "\"AI won't replace radiologists, but radiologists who use AI will replace those who don't.\" — Curtis Langlotz, Stanford",
        aiMastered: [
          { title: "Imaging triage and prioritization", desc: "AI flags critical findings like stroke, PE, and pneumothorax in real time — bumping urgent cases to the front of your reading queue before you even open them." },
          { title: "Measurement and quantification", desc: "AI precisely measures tumor volumes, organ sizes, nodule growth, and other quantitative findings with perfect consistency across reads." },
          { title: "Screening detection", desc: "In mammography, chest X-ray, and lung CT screening, AI matches or exceeds human sensitivity for common findings like masses and nodules." },
        ],
        aiImproving: [
          { title: "Multi-study correlation", desc: "AI is learning to compare current scans against prior studies and flag changes — but still misses subtle progression that experienced radiologists catch." },
          { title: "Rare pathology recognition", desc: "AI excels at common findings but struggles with unusual presentations, rare diseases, and incidental findings outside its training data." },
          { title: "Structured report generation", desc: "AI can draft radiology reports from imaging findings, but they still require careful human review for clinical accuracy and nuance." },
        ],
        humanEssential: [
          { title: "Clinical correlation", desc: "Connecting imaging findings to the full clinical picture — patient history, symptoms, labs, and treatment context — requires judgment AI doesn't have." },
          { title: "Interventional procedures", desc: "Image-guided biopsies, drains, stent placements, and other interventional radiology procedures demand human dexterity and real-time decision-making." },
          { title: "Communicating findings", desc: "Calling a referring physician about a critical finding, explaining imaging results to anxious patients, and navigating diagnostic uncertainty require empathy and expertise." },
        ],
        blsData: { salary: "$350,000+", employment: "34,000", growth: "+4%", growthLabel: "Average", source: "ACR / Medscape Radiology Compensation Report, 2024" },
        tools: [
          { name: "AI Triage Systems", url: "https://www.aidoc.com", desc: "Tools like Aidoc that scan every incoming study and flag critical findings. Learn how their prioritization works and when to trust urgent alerts." },
          { name: "AI Second-Reader Platforms", url: "https://www.zebra-med.com", desc: "AI that reviews your imaging alongside you, catching findings you might miss on a busy day. Understand confidence scores and known blind spots." },
          { name: "AI-Assisted Reporting", url: "https://www.nuance.com/healthcare/ambient-clinical-intelligence.html", desc: "Tools that auto-generate structured radiology reports from findings. Master the edit-and-sign workflow to save hours daily." },
          { name: "FDA-Cleared AI Registry", url: "https://www.acrdsi.org", desc: "The ACR's database of every FDA-cleared AI tool for radiology. Staying current on approved tools is a career necessity." },
        ],
        skills: [
          { text: "Interpret AI confidence scores and know when a flagged finding is real vs. a false positive", linked: "AI Triage Systems" },
          { text: "Use AI as a second reader — review AI-flagged findings alongside your own reads", linked: "AI Second-Reader Platforms" },
          { text: "Efficiently edit and quality-check AI-generated radiology reports before signing", linked: "AI-Assisted Reporting" },
          { text: "Stay current on FDA-cleared radiology AI tools and their approved clinical uses", linked: "FDA-Cleared AI Registry" },
          { text: "Train residents on AI-augmented reading workflows and AI limitations" },
          { text: "Evaluate new AI tools for your department: accuracy, bias, integration, and ROI" },
        ],
        resources: [
          { title: "ACR Data Science Institute — AI Resources", url: "https://www.acrdsi.org" },
          { title: "Radiology: AI — Official Journal", url: "https://pubs.rsna.org/journal/ai" },
          { title: "RSNA — AI Resources for Radiologists", url: "https://www.rsna.org/ai" },
        ],
        faqs: [
          { q: "Will AI replace radiologists by 2030?", a: "No — but the role will change significantly. AI will handle initial screening and triage, while radiologists focus on complex cases, clinical correlation, interventional procedures, and quality oversight. The volume of imaging is growing so fast that AI is more likely to address a radiologist shortage than eliminate jobs." },
          { q: "How accurate is AI in radiology compared to humans?", a: "In narrow, well-defined tasks (like detecting lung nodules or breast masses), AI matches or exceeds average radiologist performance. But AI struggles with rare findings, complex multi-system cases, and clinical context. The best results come from AI + radiologist working together." },
          { q: "What should radiology residents learn about AI?", a: "Focus on understanding AI confidence scores, recognizing AI failure modes, learning the FDA clearance landscape, and developing a workflow that integrates AI as a second reader rather than a replacement for clinical judgment." },
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
        verdict: "Partially — AI is already replacing commodity design work like social media templates and stock graphics. But designers with strong taste, brand thinking, and AI fluency are more valuable than ever.",
        summary: "AI image generation has disrupted the field. But designers who use AI as a creative accelerant — not a replacement — are producing work faster and more imaginatively than ever.",
        keyInsight: "The role is shifting from 'pixel pusher' to 'creative director of AI.' Taste, judgment, and brand thinking matter more than ever.",
        aiMastered: [
          { title: "Image generation from prompts", desc: "AI creates concept art, illustrations, and mood boards from text descriptions in seconds — work that used to take hours of sketching." },
          { title: "Background removal and editing", desc: "AI perfectly removes backgrounds, extends images, and makes complex edits that used to require painstaking manual masking." },
          { title: "Multi-format resizing", desc: "AI auto-adapts a single design across dozens of formats and dimensions — social, print, web, mobile — in one click." },
        ],
        aiImproving: [
          { title: "Brand-consistent generation", desc: "AI can roughly match a brand style, but still struggles to maintain the subtle consistency that makes a brand system feel cohesive across touchpoints." },
          { title: "Typography and layout", desc: "AI layout suggestions are getting better, but still produce designs that feel generic. Human typographic sense and spatial judgment remain superior." },
          { title: "Design iteration from feedback", desc: "AI can generate variations, but interpreting a client's vague 'make it pop' feedback and translating it into the right design change is still a human skill." },
        ],
        humanEssential: [
          { title: "Brand strategy and identity", desc: "Building a cohesive brand identity with strategic intent — one that tells a story and resonates emotionally — requires human creativity and business understanding." },
          { title: "Creative direction", desc: "Knowing which of 100 AI-generated options is actually right, and why, is the taste and judgment that separates great designers from button-pushers." },
          { title: "Cultural context and sensitivity", desc: "Understanding how design choices land across different cultures, communities, and contexts — and avoiding missteps — is deeply human." },
        ],
        blsData: { salary: "$58,910", employment: "266,500", growth: "+2%", growthLabel: "Slower than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "AI Image Generation", url: "https://www.midjourney.com", desc: "Tools like Midjourney and DALL-E that create images from text prompts. Learn to write precise prompts and refine outputs for production-quality results." },
          { name: "AI in Your Design Suite", url: "https://www.adobe.com/products/firefly.html", desc: "Adobe Firefly, Figma AI, and Canva Magic Studio bring AI directly into your existing workflow. Master generative fill, auto-layout, and AI-assisted editing." },
          { name: "AI Prototyping and Wireframing", url: "https://www.figma.com", desc: "AI tools that generate wireframes and UI layouts from descriptions. Learn to use these for rapid prototyping, then refine with human judgment." },
          { name: "AI Image Upscaling and Editing", url: "https://www.topazlabs.com", desc: "AI that enhances resolution, removes noise, and fixes photos. Essential for production work where source material isn't perfect." },
        ],
        skills: [
          { text: "Write detailed, effective prompts that produce usable design output on the first try", linked: "AI Image Generation" },
          { text: "Integrate AI generation into your Creative Cloud / Figma workflow without disrupting your process", linked: "AI in Your Design Suite" },
          { text: "Use AI prototyping to rapidly test layout concepts before committing to a direction", linked: "AI Prototyping and Wireframing" },
          { text: "Know when AI output is good enough vs. when it needs manual refinement for production", linked: "AI Image Upscaling and Editing" },
          { text: "Understand AI image licensing: what's commercial-safe, what's derivative, and what's risky" },
          { text: "Position yourself as a creative director who orchestrates AI tools, not competes with them" },
        ],
        resources: [
          { title: "AIGA — AI and Design Ethics", url: "https://www.aiga.org" },
          { title: "Creative Bloq — AI Design Tools Roundup", url: "https://www.creativebloq.com" },
        ],
        faqs: [
          { q: "Will AI replace graphic designers by 2030?", a: "AI will replace some graphic design work — particularly commodity tasks like social media templates, stock imagery, and simple layouts. However, designers who evolve into creative directors and brand strategists who leverage AI as a tool will be in higher demand than ever." },
          { q: "Is graphic design still a good career with AI?", a: "Yes, but the role is changing. Pure execution skills (making things pixel-perfect) are less valuable. Strategic thinking, brand development, UX design, and the ability to direct AI tools effectively are now the differentiators." },
          { q: "What design skills are hardest for AI to learn?", a: "Brand strategy, understanding cultural context, empathizing with end users, managing complex design systems, and translating ambiguous client briefs into effective visual solutions. These require human judgment that AI struggles to replicate." },
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
        verdict: "No — AI won't replace software engineers, but it's already transforming the role. Engineers who use AI tools are dramatically more productive. Those who don't will struggle to keep up.",
        summary: "AI coding assistants are the biggest productivity boost in a generation. Engineers who adopt AI tools write better code faster — but architecture, system design, and problem-solving remain deeply human.",
        keyInsight: "The best engineers use AI to eliminate boilerplate and focus on what matters: architecture, edge cases, and user experience.",
        aiMastered: [
          { title: "Boilerplate and scaffolding", desc: "AI generates boilerplate code, project scaffolding, config files, and common patterns instantly — work that used to eat up hours of every sprint." },
          { title: "Code completion and suggestion", desc: "AI predicts what you're about to type and auto-completes functions, imports, and logic with high accuracy inside your IDE." },
          { title: "Code translation", desc: "AI reliably translates code between languages, frameworks, and API versions — migration work that used to take weeks can happen in days." },
        ],
        aiImproving: [
          { title: "Writing meaningful tests", desc: "AI can generate unit tests that cover happy paths, but still struggles to anticipate edge cases, race conditions, and integration failure modes." },
          { title: "Bug detection in code review", desc: "AI catches common bugs and anti-patterns, but misses subtle logic errors, security vulnerabilities in complex flows, and architectural mismatches." },
          { title: "Refactoring at scale", desc: "AI can refactor individual functions well, but large-scale refactors across a codebase — where changes cascade through layers — still need human oversight." },
        ],
        humanEssential: [
          { title: "System architecture", desc: "Designing distributed systems, choosing the right database, planning for scale, and making build-vs-buy decisions require experience and judgment AI can't replicate." },
          { title: "Debugging novel production issues", desc: "When production is down at 2am and the error is something nobody's seen before, the creative problem-solving and system intuition of experienced engineers is irreplaceable." },
          { title: "Understanding the 'why'", desc: "Translating vague business requirements into technical decisions, balancing speed vs. quality, and knowing when to push back — these are deeply human skills." },
        ],
        blsData: { salary: "$132,270", employment: "1,847,900", growth: "+17%", growthLabel: "Much faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "AI Pair Programming", url: "https://github.com/features/copilot", desc: "GitHub Copilot and similar tools that auto-complete code in your IDE. Learn to write clear comments and function signatures that guide AI suggestions." },
          { name: "AI-First Code Editors", url: "https://cursor.sh", desc: "Cursor and similar editors built around AI. Master the chat, inline edit, and codebase-aware features that make you 2-5x faster." },
          { name: "Agentic Coding Tools", url: "https://docs.anthropic.com/en/docs/claude-code", desc: "Claude Code and similar agents that autonomously write, test, and debug code from natural language. Learn to give clear instructions and review AI output." },
          { name: "AI-Powered Platforms", url: "https://replit.com", desc: "Replit, v0, and similar platforms that generate full applications from descriptions. Know when these accelerate your work vs. when to code from scratch." },
        ],
        skills: [
          { text: "Write clear context (comments, types, function signatures) that guide AI suggestions toward correct output", linked: "AI Pair Programming" },
          { text: "Use AI chat and inline editing to rapidly prototype, then critically review before committing", linked: "AI-First Code Editors" },
          { text: "Break complex tasks into clear instructions for agentic coding tools and validate their work", linked: "Agentic Coding Tools" },
          { text: "Know when to use AI code generation vs. when the problem requires manual, careful engineering", linked: "AI-Powered Platforms" },
          { text: "Review AI-generated code for security vulnerabilities, performance issues, and correctness" },
          { text: "Maintain your system design and architecture skills — AI amplifies these, not replaces them" },
        ],
        resources: [
          { title: "GitHub Blog — State of AI in Development", url: "https://github.blog/news-insights/" },
          { title: "Stack Overflow — AI Developer Survey", url: "https://survey.stackoverflow.co" },
        ],
        faqs: [
          { q: "Will AI replace programmers by 2030?", a: "Unlikely. AI dramatically accelerates coding tasks, but software engineering is about much more than writing code — it's about understanding problems, designing systems, and making tradeoffs. AI is a powerful tool, not a replacement for engineering judgment." },
          { q: "What programming skills are most AI-resistant?", a: "System architecture, distributed systems design, performance optimization, and security engineering are the hardest for AI to replicate. Skills involving ambiguous requirements, stakeholder communication, and creative problem-solving also remain strongly human." },
          { q: "Should junior developers worry about AI?", a: "Junior developers should embrace AI tools, not fear them. AI handles the tedious parts — boilerplate, syntax, simple tests — freeing juniors to focus on learning system design, debugging, and the craft of engineering. The developers who learn AI tools early will advance faster." },
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

export function getRelatedJobs(jobId, count = 4) {
  const result = getJob(jobId);
  if (!result) return [];
  const { job, industry } = result;
  // First: other jobs in same industry, then closest risk scores from other industries
  const sameIndustry = industry.jobs
    .filter(j => j.id !== jobId)
    .map(j => ({ ...j, industry }));
  const otherIndustries = allJobs
    .filter(j => j.id !== jobId && j.industry.id !== industry.id)
    .sort((a, b) => Math.abs(a.risk - job.risk) - Math.abs(b.risk - job.risk));
  return [...sameIndustry, ...otherIndustries].slice(0, count);
}
