// All industry and job data — single source of truth
export const INDUSTRIES = [
  {
    id: "healthcare", name: "Healthcare", icon: "🏥", accent: "#00e5a0",
    desc: "From diagnostics to drug discovery, AI is reshaping how care is delivered.",
    jobs: [
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
      { id: "home-health-aide", title: "Home Health Aide", risk: 12, augment: 45,
        verdict: "No — home health aides provide deeply physical, personal care that AI and robotics are decades away from replicating. With the aging population driving explosive demand, this is one of healthcare's safest and fastest-growing careers.",
        summary: "Home health aides provide hands-on personal care — bathing, dressing, mobility assistance, meal prep — that is extremely difficult to automate. AI assists with scheduling, remote monitoring, and care documentation but cannot replace physical presence and compassion.",
        keyInsight: "With an aging population and 4.3 million workers, home health aides are in massive demand — and AI makes the job more effective, not obsolete.",
        aiMastered: [
          { title: "Scheduling and route optimization", desc: "AI optimizes daily visit schedules, travel routes, and client matching — reducing windshield time and maximizing hours spent with patients." },
          { title: "Remote vital sign monitoring", desc: "Wearable devices and smart home sensors track patient vitals around the clock, alerting aides and supervisors to concerning changes between visits." },
          { title: "Care documentation automation", desc: "AI auto-generates visit notes from simple voice or text inputs, reducing the paperwork burden that cuts into patient care time." },
        ],
        aiImproving: [
          { title: "Predictive health alerts", desc: "AI is learning to predict falls, infections, and hospitalizations from patterns in patient data — but still requires human interpretation and clinical context." },
          { title: "Medication tracking and reminders", desc: "Smart dispensers and AI alerts help manage complex medication schedules, though aides still observe for side effects and non-compliance." },
          { title: "Care plan personalization", desc: "AI can suggest care adjustments based on patient data trends, but the nuance of each patient's preferences and home environment needs human understanding." },
        ],
        humanEssential: [
          { title: "Physical personal care", desc: "Bathing, dressing, toileting, feeding, mobility assistance, and wound care require human hands, strength, and real-time adaptation to each patient's body and needs." },
          { title: "Emotional companionship", desc: "For many homebound patients, the aide is their primary human connection. Conversation, comfort, and emotional presence cannot be automated." },
          { title: "Home environment assessment", desc: "Recognizing safety hazards, noticing behavioral changes, reporting signs of neglect or abuse, and adapting care in real time requires on-the-ground human awareness." },
        ],
        blsData: { salary: "$33,530", employment: "4,347,700", growth: "+22%", growthLabel: "Much faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "CarePredict", url: "https://www.carepredict.com", desc: "AI-powered senior care activity monitoring and early warning system" },
          { name: "Axxess", url: "https://www.axxess.com", desc: "AI-enhanced home health scheduling, clinical documentation, and billing" },
          { name: "Honor", url: "https://www.joinhonor.com", desc: "Technology-enabled home care platform with smart care matching and coordination" },
        ],
        skills: [
          { text: "Use remote monitoring devices to track patient vitals and recognize concerning trends", linked: "CarePredict" },
          { text: "Complete digital care documentation efficiently using AI-assisted charting tools", linked: "Axxess" },
          { text: "Navigate care coordination platforms to communicate with supervisors and families", linked: "Honor" },
          { text: "Operate smart home health devices including medication dispensers and fall detection systems" },
        ],
        resources: [
          { title: "National Association for Home Care & Hospice", url: "https://www.nahc.org" },
          { title: "PHI — Direct Care Workforce Resources", url: "https://www.phinational.org" },
        ],
        faqs: [
          { q: "Will robots replace home health aides?", a: "Not in any foreseeable future. Home health work requires constant physical adaptation — lifting, bathing, dressing, cooking — in unpredictable home environments. No robot can handle the combination of physical tasks, emotional connection, and environmental awareness that aides provide daily." },
          { q: "Is home health aide a good career in the AI era?", a: "Yes — it's one of the fastest-growing occupations in the country (+22% projected growth). AI tools make the job easier by handling scheduling, documentation, and monitoring, while the hands-on care that defines the role remains human. The main career challenge is compensation, not automation." },
        ]},
      { id: "nursing-assistant", title: "Nursing Assistant (CNA)", risk: 14, augment: 48,
        verdict: "No — CNAs perform the most hands-on, physical patient care in healthcare. Robots can't reposition a 200-pound patient, comfort someone in pain, or notice subtle behavioral changes. This role is deeply human and in growing demand.",
        summary: "CNAs perform bedside care — bathing, feeding, repositioning, vital signs — that robots can't replicate. AI helps with documentation and patient monitoring, but the physical, human-centered nature of the work keeps it safe from automation.",
        keyInsight: "CNAs are the backbone of long-term care. AI reduces paperwork burden, giving CNAs more time for what they do best: direct patient care.",
        aiMastered: [
          { title: "Vital signs documentation", desc: "Digital charting systems auto-record vital signs from connected devices — eliminating manual data entry and reducing transcription errors." },
          { title: "Fall detection and alerting", desc: "AI-powered camera and sensor systems detect falls in real time and automatically alert staff, reducing response times from minutes to seconds." },
          { title: "Shift handoff summaries", desc: "AI generates end-of-shift patient summaries from charting data, ensuring nothing gets lost in the transition between caregivers." },
        ],
        aiImproving: [
          { title: "Patient behavior pattern recognition", desc: "AI is learning to flag changes in patient behavior — agitation, withdrawal, sleep disruption — that may signal infection or cognitive decline, but still needs human confirmation." },
          { title: "Workload optimization", desc: "AI can help balance patient assignments across staff based on acuity levels, though the real-time chaos of a care floor still requires human judgment." },
          { title: "Predictive skin breakdown alerts", desc: "AI analyzes repositioning schedules and patient risk factors to predict pressure ulcers, but the physical prevention work — turning, cushioning, inspecting — remains human." },
        ],
        humanEssential: [
          { title: "Physical bedside care", desc: "Bathing, feeding, dressing, toileting, repositioning, and ambulation require human strength, dexterity, and constant adaptation to each patient's physical state and comfort." },
          { title: "Emotional support and presence", desc: "CNAs spend more time with patients than any other healthcare worker. The comfort, reassurance, and human presence they provide is irreplaceable for patient wellbeing." },
          { title: "Observation and escalation", desc: "Noticing that a patient 'just doesn't look right' — subtle changes in skin color, breathing, mood, or behavior — and escalating to nurses requires human intuition built from experience." },
        ],
        blsData: { salary: "$36,220", employment: "1,340,000", growth: "+4%", growthLabel: "Average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "PointClickCare", url: "https://www.pointclickcare.com", desc: "AI-enhanced long-term care EHR with predictive insights and care coordination" },
          { name: "Vocera", url: "https://www.vocera.com", desc: "AI-powered clinical communication and hands-free workflow platform" },
          { name: "SafelyYou", url: "https://www.safely-you.com", desc: "AI fall detection and prevention system for care facilities" },
        ],
        skills: [
          { text: "Document vital signs and patient status using AI-enhanced EHR systems efficiently", linked: "PointClickCare" },
          { text: "Use hands-free communication platforms to coordinate care without leaving the bedside", linked: "Vocera" },
          { text: "Monitor and respond to AI fall detection alerts and prevention protocols", linked: "SafelyYou" },
          { text: "Interpret AI-generated patient risk alerts and escalate concerns appropriately to nursing staff" },
        ],
        resources: [
          { title: "National Network of Career Nursing Assistants", url: "https://www.cna-network.org" },
        ],
        faqs: [
          { q: "Will CNAs be replaced by robots?", a: "No. Bedside care requires constant physical adaptation in unpredictable situations — repositioning patients, responding to emergencies, providing comfort during distress. Robotics is decades away from this level of dexterity and judgment. The bigger workforce challenge is burnout and compensation, not automation." },
          { q: "How does AI help CNAs in their daily work?", a: "AI reduces the paperwork burden — auto-documenting vitals, generating shift handoff reports, and flagging at-risk patients. This frees CNAs to spend more time on direct patient care. AI also powers fall detection systems that alert staff instantly, improving patient safety." },
        ]},
      { id: "medical-assistant", title: "Medical Assistant", risk: 35, augment: 72,
        verdict: "Partially — the administrative half of this role (scheduling, billing, data entry) is being heavily automated. But the clinical half (vitals, injections, specimen collection, patient rooming) remains hands-on. MAs who lean clinical will thrive; those who lean admin face disruption.",
        summary: "Medical assistants split time between clinical tasks (vitals, injections, specimen collection) and administrative work (scheduling, billing, records). The admin half is heavily automatable; the clinical half remains hands-on and human.",
        keyInsight: "Medical assistants who lean into clinical skills and AI tool fluency will thrive. Those focused purely on administrative tasks face the most disruption.",
        aiMastered: [
          { title: "Appointment scheduling and reminders", desc: "AI handles appointment booking, rescheduling, no-show prediction, and automated patient reminders — work that used to consume hours of front-desk time daily." },
          { title: "Insurance verification and pre-authorization", desc: "AI automates insurance eligibility checks and prior authorization submissions, reducing a major administrative bottleneck in clinic workflows." },
          { title: "Patient intake and registration", desc: "Digital intake platforms collect patient information, update records, and flag discrepancies before the patient even arrives — replacing clipboard-and-paper workflows." },
        ],
        aiImproving: [
          { title: "Clinical documentation assistance", desc: "AI ambient listening tools can draft visit notes from doctor-patient conversations, but MAs still need to verify accuracy and add clinical context the AI misses." },
          { title: "Pre-visit chart preparation", desc: "AI can pull relevant history, flag overdue screenings, and prepare visit agendas — but complex patients with multiple conditions still need human chart review." },
          { title: "Billing and coding assistance", desc: "AI suggests billing codes from visit documentation, but accurate coding for complex visits still requires human knowledge of payer rules and clinical nuance." },
        ],
        humanEssential: [
          { title: "Clinical procedures", desc: "Drawing blood, giving injections, collecting specimens, performing EKGs, and assisting with minor procedures require trained human hands and patient interaction." },
          { title: "Patient rooming and triage", desc: "Taking vitals, assessing patient condition, and preparing patients for the provider requires hands-on care and the judgment to escalate concerning findings." },
          { title: "Patient communication and comfort", desc: "Explaining procedures, calming anxious patients, translating medical jargon, and providing a compassionate presence during visits remains deeply human." },
        ],
        blsData: { salary: "$38,270", employment: "811,000", growth: "+14%", growthLabel: "Much faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Athenahealth", url: "https://www.athenahealth.com", desc: "AI-powered EHR, billing, and patient engagement platform" },
          { name: "Phreesia", url: "https://www.phreesia.com", desc: "AI-driven patient intake, registration, and pre-visit planning automation" },
          { name: "Nuance DAX", url: "https://www.nuance.com/healthcare/ambient-clinical-intelligence.html", desc: "AI ambient listening that auto-generates clinical notes from patient visits" },
        ],
        skills: [
          { text: "Navigate AI-powered EHR systems for efficient patient documentation and billing workflows", linked: "Athenahealth" },
          { text: "Manage digital patient intake and pre-visit planning using AI-driven platforms", linked: "Phreesia" },
          { text: "Support ambient clinical documentation by verifying and supplementing AI-generated notes", linked: "Nuance DAX" },
          { text: "Perform clinical procedures (phlebotomy, injections, EKGs) that remain beyond AI automation" },
        ],
        resources: [
          { title: "AAMA — American Association of Medical Assistants", url: "https://www.aama-ntl.org" },
        ],
        faqs: [
          { q: "Will medical assistants be replaced by AI?", a: "Not entirely, but the role is splitting in two. Administrative-focused MAs face significant disruption as scheduling, billing, and data entry are automated. Clinically-focused MAs who take vitals, give injections, draw blood, and work directly with patients are well-protected. The career path forward is clinical." },
          { q: "What should medical assistants learn to stay relevant?", a: "Double down on clinical skills — phlebotomy, injections, EKGs, wound care. Then layer on AI fluency: learn your clinic's EHR system deeply, understand how ambient documentation tools work, and become the person who bridges technology and patient care." },
        ]},
      { id: "healthcare-administrator", title: "Healthcare Administrator", risk: 32, augment: 78,
        verdict: "Not the role itself — but the skillset is changing fast. Administrators who master AI-driven analytics, predictive staffing, and automated compliance will run more efficient organizations. Those who manage by spreadsheet and gut feel are increasingly outmatched.",
        summary: "AI transforms hospital operations — optimizing staffing, predicting patient volumes, automating billing, and flagging compliance issues. Administrators who leverage these tools run tighter, more efficient organizations.",
        keyInsight: "Healthcare administrators who master AI analytics make better decisions about staffing, budgets, and patient flow — the job becomes more strategic, not less essential.",
        aiMastered: [
          { title: "Revenue cycle and billing automation", desc: "AI automates claims submission, denial management, and payment posting — reducing billing errors and accelerating revenue collection across the organization." },
          { title: "Patient volume forecasting", desc: "AI predicts daily patient volumes, ER surges, and seasonal patterns with high accuracy — enabling proactive staffing and resource allocation." },
          { title: "Regulatory compliance monitoring", desc: "AI continuously scans operations against regulatory requirements, flagging compliance gaps and audit risks before they become violations." },
        ],
        aiImproving: [
          { title: "Predictive staffing optimization", desc: "AI is getting better at matching staffing levels to predicted patient demand, but still struggles with the unpredictable — flu outbreaks, mass casualty events, and sudden staff callouts." },
          { title: "Quality metric analysis", desc: "AI can surface quality trends and flag outliers in clinical outcomes, but interpreting why metrics are moving and what interventions to deploy requires human leadership." },
          { title: "Supply chain optimization", desc: "AI forecasts supply needs and flags potential shortages, but navigating vendor relationships, contract negotiations, and emergency procurement remains human-driven." },
        ],
        humanEssential: [
          { title: "Strategic leadership and vision", desc: "Setting organizational direction, managing culture change, navigating mergers and partnerships, and making high-stakes investment decisions require human leadership and political savvy." },
          { title: "Stakeholder and community relations", desc: "Managing relationships with physicians, board members, community leaders, regulators, and patients requires empathy, persuasion, and trust that AI cannot provide." },
          { title: "Crisis management", desc: "When a pandemic hits, a system goes down, or a public relations crisis erupts, the real-time judgment, communication, and decisive action required is deeply human." },
        ],
        blsData: { salary: "$110,680", employment: "616,200", growth: "+28%", growthLabel: "Much faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Qventus", url: "https://www.qventus.com", desc: "AI-powered hospital operations and patient flow optimization" },
          { name: "Health Catalyst", url: "https://www.healthcatalyst.com", desc: "AI-driven healthcare analytics and data-informed decision support" },
          { name: "LeanTaaS", url: "https://www.leantaas.com", desc: "AI optimization for OR scheduling, infusion centers, and bed management" },
        ],
        skills: [
          { text: "Use AI-powered operational dashboards to optimize patient flow and reduce bottlenecks", linked: "Qventus" },
          { text: "Leverage healthcare analytics platforms for data-driven quality improvement initiatives", linked: "Health Catalyst" },
          { text: "Implement AI scheduling optimization for OR utilization, infusion centers, and bed management", linked: "LeanTaaS" },
          { text: "Interpret predictive models for staffing, demand forecasting, and financial planning" },
        ],
        resources: [
          { title: "ACHE — American College of Healthcare Executives", url: "https://www.ache.org" },
          { title: "HIMSS — Health Information Technology Resources", url: "https://www.himss.org" },
        ],
        faqs: [
          { q: "Will AI replace healthcare administrators?", a: "No — but it will dramatically change what they do. AI automates the data-gathering and reporting that used to consume weeks of administrator time. The role shifts from operational firefighting to strategic leadership: using AI insights to make better decisions about staffing, investments, and patient experience." },
          { q: "What skills do healthcare administrators need in the AI era?", a: "Data literacy is now non-negotiable. Administrators need to understand AI-driven analytics, interpret predictive models, and make decisions based on real-time operational data. The soft skills — leadership, communication, crisis management — remain just as important as ever." },
        ]},
      { id: "therapist", title: "Therapist / Mental Health Counselor", risk: 10, augment: 62,
        verdict: "No — therapy is built on the therapeutic alliance, a deeply human bond of trust, empathy, and vulnerability that AI cannot replicate. AI chatbots can provide between-session support, but they cannot replace the healing power of a real human relationship.",
        summary: "Therapy is built on human empathy, trust, and the therapeutic alliance — qualities AI cannot replicate. AI assists with screening, progress tracking, and between-session support, but the core work remains deeply human.",
        keyInsight: "With a nationwide mental health crisis and therapist shortage, AI extends a therapist's reach — it doesn't replace their presence in the room.",
        aiMastered: [
          { title: "Screening and intake assessments", desc: "AI-administered PHQ-9, GAD-7, and other validated screening tools collect and score patient data before the first session — giving therapists a head start on understanding the client." },
          { title: "Session note generation", desc: "AI listens to therapy sessions (with consent) and auto-generates SOAP notes, progress summaries, and treatment documentation — saving therapists hours of after-hours paperwork." },
          { title: "Between-session support exercises", desc: "AI chatbots deliver CBT worksheets, mindfulness exercises, and mood tracking between sessions — extending the therapeutic work beyond the 50-minute hour." },
        ],
        aiImproving: [
          { title: "Treatment outcome prediction", desc: "AI is learning to predict which treatment approaches work best for which patient profiles, but the data is still limited and human clinical judgment remains the gold standard." },
          { title: "Session quality analysis", desc: "AI can analyze session transcripts for therapeutic techniques used and client engagement levels, but interpreting what actually matters in a session is still a deeply human skill." },
          { title: "Crisis risk detection", desc: "AI can flag language patterns associated with suicidal ideation or crisis, but determining actual risk level and appropriate response requires trained clinical judgment." },
        ],
        humanEssential: [
          { title: "The therapeutic relationship", desc: "Research consistently shows the therapist-client relationship is the strongest predictor of treatment success — more than any specific technique. This bond of trust, attunement, and safety cannot be automated." },
          { title: "Navigating emotional complexity", desc: "Sitting with a client's pain, reading body language, knowing when to push and when to hold space, and adapting in the moment to what the client needs — this is the art of therapy." },
          { title: "Cultural and contextual sensitivity", desc: "Understanding how a client's identity, culture, family system, and life context shape their experience — and adapting treatment accordingly — requires human empathy and lived understanding." },
        ],
        blsData: { salary: "$53,710", employment: "483,500", growth: "+18%", growthLabel: "Much faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Woebot Health", url: "https://woebothealth.com", desc: "AI-powered mental health chatbot for between-session CBT practice and support" },
          { name: "Eleos Health", url: "https://www.eleoshealth.com", desc: "AI session analysis that auto-generates therapy notes and tracks patient progress" },
          { name: "Blueprint Health", url: "https://www.blueprint-health.com", desc: "AI-powered measurement-based care and clinical outcome tracking" },
        ],
        skills: [
          { text: "Integrate AI-powered between-session tools to extend therapeutic work beyond office visits", linked: "Woebot Health" },
          { text: "Use AI session analysis to track client progress and refine treatment approaches over time", linked: "Eleos Health" },
          { text: "Implement measurement-based care using AI outcome tracking to demonstrate treatment effectiveness", linked: "Blueprint Health" },
          { text: "Deliver effective telehealth therapy while maintaining therapeutic presence through a screen" },
        ],
        resources: [
          { title: "APA — Technology and Mental Health Practice", url: "https://www.apa.org/practice" },
          { title: "SAMHSA — Technology in Behavioral Health", url: "https://www.samhsa.gov" },
        ],
        faqs: [
          { q: "Can AI chatbots replace therapists?", a: "No. AI chatbots like Woebot can deliver structured exercises (CBT worksheets, mood tracking, coping skills) between sessions, but they cannot replicate the therapeutic alliance — the human bond of trust and empathy that research consistently shows is the strongest predictor of treatment success. AI is a supplement, not a substitute." },
          { q: "Is therapy a good career in the AI era?", a: "Absolutely — it's one of the safest and fastest-growing. The U.S. faces a severe therapist shortage, with demand far outpacing supply. AI tools reduce the administrative burden (notes, screening, scheduling) so therapists can focus on clinical work. The core skill — human connection — is AI-proof." },
        ]},
      { id: "pharmacist", title: "Pharmacist", risk: 52, augment: 80,
        verdict: "Partially — the traditional count-and-dispense pharmacist role is being automated rapidly. Robots fill prescriptions faster and more accurately than humans. But clinical pharmacists who counsel patients, manage complex medication regimens, and collaborate with physicians are more valuable than ever.",
        summary: "Automated dispensing systems and AI drug interaction checking are reducing the need for traditional fill-and-verify work. Pharmacists who pivot to clinical consulting, medication therapy management, and patient counseling remain essential.",
        keyInsight: "Pharmacy robots can fill 300 prescriptions per hour with zero errors. Pharmacists who still just count pills are in trouble — those who counsel patients are not.",
        aiMastered: [
          { title: "Prescription dispensing", desc: "Robotic dispensing systems count, label, and package medications with near-perfect accuracy at speeds no human can match — the core 'count and pour' work is fully automated in many pharmacies." },
          { title: "Drug interaction screening", desc: "AI instantly checks every prescription against a patient's full medication list, allergies, and conditions — catching dangerous interactions faster and more comprehensively than manual review." },
          { title: "Inventory management and ordering", desc: "AI predicts demand, tracks expiration dates, and automates reordering — eliminating stockouts and reducing pharmaceutical waste across the supply chain." },
        ],
        aiImproving: [
          { title: "Medication therapy optimization", desc: "AI is learning to suggest medication adjustments based on patient outcomes data, but complex polypharmacy decisions — especially in elderly patients — still require pharmacist expertise." },
          { title: "Prior authorization automation", desc: "AI handles routine prior auth submissions, but navigating denials, appeals, and insurance edge cases still requires human knowledge of payer rules and clinical justification." },
          { title: "Pharmacogenomic recommendations", desc: "AI can flag basic gene-drug interactions from pharmacogenomic data, but translating genetic test results into personalized dosing recommendations is still an emerging and human-driven skill." },
        ],
        humanEssential: [
          { title: "Patient medication counseling", desc: "Explaining how to take medications, managing patient concerns about side effects, motivating adherence, and building trust — especially with chronic disease patients — requires human empathy and communication." },
          { title: "Complex clinical decision-making", desc: "Managing drug regimens for patients on 10+ medications, navigating contraindications, adjusting doses for renal or hepatic impairment, and collaborating with physicians on therapy changes requires deep clinical expertise." },
          { title: "Community health and immunization services", desc: "Pharmacists are increasingly the most accessible healthcare providers in their communities — administering vaccines, conducting health screenings, and providing frontline clinical guidance." },
        ],
        blsData: { salary: "$136,030", employment: "322,200", growth: "-2%", growthLabel: "Declining", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Omnicell", url: "https://www.omnicell.com", desc: "AI-powered automated dispensing and pharmacy inventory management" },
          { name: "DrFirst", url: "https://www.drfirst.com", desc: "AI medication management and e-prescribing with real-time interaction alerts" },
          { name: "DigitalRx", url: "https://www.digitalrx.io", desc: "AI-powered clinical decision support for pharmacist consultations" },
        ],
        skills: [
          { text: "Oversee and troubleshoot automated dispensing systems while focusing on clinical oversight", linked: "Omnicell" },
          { text: "Leverage AI drug interaction alerts to make complex medication therapy management decisions", linked: "DrFirst" },
          { text: "Use AI clinical decision support to enhance patient consultations and counseling sessions", linked: "DigitalRx" },
          { text: "Provide direct patient care services — immunizations, health screenings, medication therapy management — that define the future pharmacist role" },
        ],
        resources: [
          { title: "APhA — American Pharmacists Association", url: "https://www.pharmacist.com" },
          { title: "ASHP — AI and Pharmacy Practice", url: "https://www.ashp.org" },
        ],
        faqs: [
          { q: "Will pharmacy robots replace pharmacists?", a: "They're already replacing the dispensing function — robots fill prescriptions faster and more accurately. But dispensing was never the highest-value part of pharmacy. Pharmacists who pivot to clinical roles — medication therapy management, patient counseling, immunizations, and physician collaboration — are in growing demand. The career is shifting, not disappearing." },
          { q: "Is pharmacy still a good career given AI and automation?", a: "It depends on which type of pharmacy. Retail fill-and-verify roles face the most pressure (-2% job growth). Clinical pharmacy, ambulatory care, hospital pharmacy, and specialty pharmacy are growing. The $136K median salary reflects the clinical expertise that remains valuable — but students should enter with eyes open about the shifting landscape." },
        ]},
      { id: "nurse-practitioner", title: "Nurse Practitioner", risk: 18, augment: 82,
        verdict: "No — NPs are one of the fastest-growing healthcare roles, filling the primary care gap as physician shortages worsen. AI makes NPs more effective and accurate, but the clinical judgment, patient relationships, and independent practice authority at the core of the role are firmly human.",
        summary: "NPs diagnose, prescribe, and manage patients independently in many states. AI enhances diagnostic accuracy and automates documentation, but the clinical judgment and patient relationships at the core of NP practice are firmly human.",
        keyInsight: "NPs are filling the primary care gap as physician shortages grow. AI makes each NP more effective — seeing more patients with better outcomes.",
        aiMastered: [
          { title: "Clinical documentation automation", desc: "AI ambient listening tools capture the entire patient visit and auto-generate structured clinical notes — giving NPs back hours of documentation time every day." },
          { title: "Drug interaction and allergy checking", desc: "AI instantly screens prescriptions against patient medication lists, allergies, and conditions — providing a comprehensive safety net for prescribing decisions." },
          { title: "Preventive care gap identification", desc: "AI scans patient records and flags overdue screenings, vaccinations, and preventive care measures — ensuring nothing falls through the cracks in busy primary care settings." },
        ],
        aiImproving: [
          { title: "Differential diagnosis support", desc: "AI can generate differential diagnoses from patient symptoms and history, but NPs still need to apply clinical reasoning, physical exam findings, and patient context to narrow the list." },
          { title: "Chronic disease management optimization", desc: "AI tracks patient metrics over time and suggests medication adjustments for chronic conditions, but the holistic assessment of a patient's lifestyle, adherence, and goals requires human understanding." },
          { title: "Visual diagnostic assistance", desc: "AI is improving at identifying skin conditions, retinal disease, and other visual findings from images, but complex or atypical presentations still need trained clinical eyes." },
        ],
        humanEssential: [
          { title: "Independent clinical judgment", desc: "NPs make autonomous diagnostic and treatment decisions across the full scope of primary care. The ability to synthesize complex, ambiguous clinical information into a care plan is deeply human." },
          { title: "Patient relationship and trust", desc: "Patients share sensitive information, follow treatment plans, and make lifestyle changes because they trust their NP. This therapeutic relationship drives adherence and outcomes in ways AI cannot replicate." },
          { title: "Holistic and patient-centered care", desc: "NPs are trained to treat the whole person — considering social determinants, mental health, family dynamics, and patient preferences alongside clinical data. This holistic lens is a core human competency." },
        ],
        blsData: { salary: "$126,260", employment: "320,400", growth: "+40%", growthLabel: "Much faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Nuance DAX", url: "https://www.nuance.com/healthcare/ambient-clinical-intelligence.html", desc: "AI ambient clinical documentation that listens to visits and writes notes automatically" },
          { name: "VisualDx", url: "https://www.visualdx.com", desc: "AI-powered clinical decision support with visual diagnosis assistance" },
          { name: "Isabel Healthcare", url: "https://www.isabelhealthcare.com", desc: "AI differential diagnosis generator from patient symptoms and history" },
        ],
        skills: [
          { text: "Use ambient AI documentation to eliminate after-hours charting and reclaim clinical time", linked: "Nuance DAX" },
          { text: "Leverage AI visual diagnosis tools as a second opinion for dermatologic and ophthalmologic findings", linked: "VisualDx" },
          { text: "Validate clinical reasoning against AI differential diagnosis generators for complex cases", linked: "Isabel Healthcare" },
          { text: "Deliver high-quality telehealth visits that maintain diagnostic accuracy and patient rapport across a screen" },
        ],
        resources: [
          { title: "AANP — American Association of Nurse Practitioners", url: "https://www.aanp.org" },
        ],
        faqs: [
          { q: "Will AI replace nurse practitioners?", a: "No — NPs are projected to grow 40%, making it one of the fastest-growing occupations in the entire economy. The physician shortage is increasing demand for NPs, and AI makes each NP more effective by automating documentation, flagging care gaps, and supporting clinical decisions. AI is the NP's best friend, not a threat." },
          { q: "How does AI change the nurse practitioner role?", a: "AI handles the busywork — auto-generating notes, checking drug interactions, flagging overdue screenings. This frees NPs to spend more time on what they were trained for: clinical reasoning, patient education, and building the trusting relationships that drive better health outcomes." },
        ]},
      { id: "physical-therapist", title: "Physical Therapist", risk: 8, augment: 52,
        verdict: "No — physical therapy demands hands-on manipulation, real-time movement assessment, motivational coaching, and constant physical adaptation. AI apps can guide home exercises, but they cannot perform manual therapy, assess tissue quality, or motivate a patient through a painful recovery.",
        summary: "Physical therapy demands hands-on manipulation, real-time movement assessment, and motivational coaching that AI cannot replicate. AI assists with exercise programming and remote monitoring, but the treatment itself stays human.",
        keyInsight: "With only 8% automation risk, physical therapy is one of healthcare's safest careers. The aging population guarantees growing demand for decades.",
        aiMastered: [
          { title: "Home exercise program generation", desc: "AI creates customized home exercise programs with video demonstrations based on diagnosis and recovery stage — saving therapists time on program design and handout creation." },
          { title: "Patient adherence tracking", desc: "AI-powered apps track whether patients complete their home exercises, using motion sensors and self-reports to give therapists real data on between-visit compliance." },
          { title: "Outcome measurement automation", desc: "AI auto-calculates functional outcome scores, tracks progress over time, and generates reports for insurance documentation — reducing administrative burden significantly." },
        ],
        aiImproving: [
          { title: "Movement analysis from video", desc: "AI is learning to analyze patient movement patterns from smartphone video — detecting compensations, asymmetries, and form errors — but still lacks the precision of a trained PT's hands and eyes." },
          { title: "Treatment protocol recommendations", desc: "AI can suggest evidence-based treatment protocols based on diagnosis, but adapting treatment to each patient's pain tolerance, tissue response, and recovery trajectory requires human clinical judgment." },
          { title: "Remote therapy delivery", desc: "Telehealth PT expanded massively post-COVID, with AI assisting in movement coaching. But complex manual therapy techniques and hands-on assessment still require in-person visits." },
        ],
        humanEssential: [
          { title: "Manual therapy and hands-on treatment", desc: "Joint mobilization, soft tissue manipulation, dry needling, and other manual techniques require trained human hands that can feel tissue tension, joint play, and patient response in real time." },
          { title: "Real-time clinical assessment", desc: "Assessing a patient's movement quality, pain response, tissue integrity, and functional capacity during treatment requires the integration of visual, tactile, and clinical reasoning skills that AI cannot replicate." },
          { title: "Motivational coaching and patient rapport", desc: "Recovery from injury is painful and frustrating. The therapist's ability to motivate, encourage, adapt exercises on the fly, and push patients through difficult moments is irreplaceable." },
        ],
        blsData: { salary: "$99,710", employment: "258,900", growth: "+14%", growthLabel: "Much faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Kaia Health", url: "https://www.kaiahealth.com", desc: "AI-powered motion tracking for home exercise programs and adherence monitoring" },
          { name: "Hinge Health", url: "https://www.hingehealth.com", desc: "Digital musculoskeletal therapy platform with AI movement coaching" },
          { name: "MedBridge", url: "https://www.medbridge.com", desc: "AI-enhanced patient education and home exercise program builder" },
        ],
        skills: [
          { text: "Prescribe AI-guided home exercise programs and monitor patient adherence between visits", linked: "Kaia Health" },
          { text: "Integrate digital MSK therapy platforms for hybrid in-person and remote treatment models", linked: "Hinge Health" },
          { text: "Create engaging patient education content using AI-enhanced exercise program builders", linked: "MedBridge" },
          { text: "Combine hands-on clinical expertise with data-driven outcome tracking to demonstrate treatment value" },
        ],
        resources: [
          { title: "APTA — American Physical Therapy Association", url: "https://www.apta.org" },
        ],
        faqs: [
          { q: "Can AI apps replace physical therapists?", a: "No. AI exercise apps like Kaia Health and Hinge Health are valuable supplements, but they cannot perform manual therapy, assess tissue quality through touch, or adapt treatment in real time based on how a patient's body responds. Physical therapy is one of the most hands-on healthcare professions, making it highly AI-resistant." },
          { q: "Is physical therapy a good career in the AI era?", a: "One of the best. At 8% automation risk with 14% job growth and a $99K median salary, PT combines strong AI resistance with excellent compensation and demand. The aging population guarantees decades of growing need for physical therapists." },
        ]},
      { id: "physician-assistant", title: "Physician Assistant", risk: 20, augment: 80,
        verdict: "No — PAs are versatile clinicians who practice across every specialty, and their demand is projected to grow 27%. AI enhances their diagnostic accuracy and eliminates documentation burden, but the clinical reasoning, procedural skills, and patient relationships at the core of PA practice remain human.",
        summary: "PAs practice medicine across every specialty — diagnosing, treating, and prescribing under physician collaboration. AI augments clinical decision-making and automates documentation, but PAs' versatility and patient-facing role keep them essential.",
        keyInsight: "PAs are one of the fastest-growing healthcare roles. AI doesn't threaten them — it makes their expanding scope of practice more manageable.",
        aiMastered: [
          { title: "Clinical documentation", desc: "AI ambient documentation tools capture PA-patient conversations and auto-generate structured visit notes, dramatically reducing the 2+ hours of daily charting that burns PAs out." },
          { title: "Evidence-based reference at point of care", desc: "AI-powered clinical references deliver instant, context-specific treatment recommendations and drug information — replacing the time PAs used to spend looking things up between patients." },
          { title: "Prescription safety checking", desc: "AI screens every prescription against patient medications, allergies, renal function, and conditions — providing a comprehensive safety net for prescribing decisions across specialties." },
        ],
        aiImproving: [
          { title: "Diagnostic decision support", desc: "AI can generate differential diagnoses and suggest workups from patient presentations, but PAs still need to apply physical exam findings, clinical experience, and patient context to make final decisions." },
          { title: "Procedure guidance", desc: "AI can provide real-time guidance during procedures (imaging overlays, measurement tools), but the manual dexterity and judgment required to perform procedures safely remains human." },
          { title: "Patient risk stratification", desc: "AI scores patients by risk level and predicts deterioration, but deciding what actions to take — when to observe, when to intervene, when to refer — requires human clinical judgment." },
        ],
        humanEssential: [
          { title: "Multi-specialty clinical versatility", desc: "PAs' unique value is their ability to work across specialties — ER, surgery, primary care, dermatology — adapting their clinical reasoning to different contexts. This flexibility is deeply human." },
          { title: "Procedures and hands-on care", desc: "PAs perform suturing, joint injections, casting, incision and drainage, and assist in surgery. These hands-on skills require dexterity, spatial awareness, and real-time patient adaptation." },
          { title: "Patient education and shared decision-making", desc: "Explaining treatment options, navigating patient fears and preferences, and collaborating on care decisions requires empathy, communication skills, and trust." },
        ],
        blsData: { salary: "$130,020", employment: "154,900", growth: "+27%", growthLabel: "Much faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "UpToDate", url: "https://www.uptodate.com", desc: "AI-enhanced clinical decision support with evidence-based treatment recommendations" },
          { name: "Nuance DAX", url: "https://www.nuance.com/healthcare/ambient-clinical-intelligence.html", desc: "AI ambient documentation that auto-generates visit notes in real time" },
          { name: "DynamicHealth", url: "https://www.ebsco.com/clinical-decisions/dynamichealth", desc: "AI-powered evidence-based clinical reference for point-of-care decisions" },
        ],
        skills: [
          { text: "Access AI-powered evidence-based recommendations at the point of care for treatment decisions", linked: "UpToDate" },
          { text: "Eliminate documentation burden using ambient AI that listens and generates notes automatically", linked: "Nuance DAX" },
          { text: "Use AI-enhanced clinical references for rapid, evidence-based decision-making across specialties", linked: "DynamicHealth" },
          { text: "Integrate AI risk stratification into clinical workflows while maintaining independent judgment" },
        ],
        resources: [
          { title: "AAPA — American Academy of PAs", url: "https://www.aapa.org" },
        ],
        faqs: [
          { q: "Will AI replace physician assistants?", a: "No. PAs are projected to grow 27%, making them one of the fastest-growing healthcare occupations. Their unique value — versatility across specialties, procedural skills, and patient-facing care — is exactly what AI cannot replicate. AI automates the busywork; PAs provide the clinical expertise." },
          { q: "How does AI change the PA role?", a: "AI eliminates the worst parts of the job: hours of charting, manual reference lookups, and repetitive safety checks. PAs using AI tools can see more patients, spend more time on clinical reasoning, and reduce burnout. The role gets better, not smaller." },
        ]},
      { id: "dentist", title: "Dentist", risk: 15, augment: 65,
        verdict: "No — dentistry requires precise manual dexterity inside a confined, sensitive space that robots are nowhere near mastering. AI dramatically improves diagnostics (reading X-rays, detecting cavities, planning implants), but every clinical procedure still requires human hands, judgment, and chairside manner.",
        summary: "Dentistry requires precise manual dexterity in a confined, sensitive space — making it highly resistant to automation. AI excels at X-ray analysis, treatment planning, and patient record management but can't hold a drill.",
        keyInsight: "AI can read a dental X-ray in seconds, but it can't perform a root canal. Dentists who use AI diagnostics catch problems earlier and treatment-plan faster.",
        aiMastered: [
          { title: "Radiograph analysis and pathology detection", desc: "FDA-cleared AI detects cavities, bone loss, periapical lesions, and other pathology in dental X-rays with accuracy matching or exceeding most dentists — serving as a reliable second set of eyes." },
          { title: "Patient record management", desc: "AI automates chart notes, treatment histories, insurance claims, and appointment reminders — reducing the administrative overhead that eats into clinical time." },
          { title: "Treatment cost estimation", desc: "AI generates accurate treatment cost breakdowns with insurance coverage calculations in seconds — improving case acceptance by giving patients clear financial information upfront." },
        ],
        aiImproving: [
          { title: "Digital treatment planning", desc: "AI can generate treatment plans from diagnostic data, including implant placement and orthodontic movement predictions, but complex multi-phase plans still need human clinical judgment and patient discussion." },
          { title: "CAD/CAM design assistance", desc: "AI accelerates the design of crowns, bridges, and aligners in digital workflows, but the final aesthetic and functional adjustments require human assessment of occlusion, color matching, and patient anatomy." },
          { title: "Oral cancer screening", desc: "AI is improving at flagging suspicious lesions in intraoral images, but distinguishing benign from malignant findings and deciding when to biopsy requires clinical experience and patient context." },
        ],
        humanEssential: [
          { title: "Clinical procedures", desc: "Fillings, crowns, extractions, root canals, implant placement, and periodontal surgery all require extraordinary hand-eye coordination in a tiny, sensitive workspace. No robot can replicate this dexterity." },
          { title: "Patient management and chairside manner", desc: "Dental anxiety affects up to 36% of the population. Calming nervous patients, explaining procedures, managing pain expectations, and building trust is deeply human work." },
          { title: "Complex diagnostic judgment", desc: "When to watch vs. treat, how aggressively to intervene, and how to sequence complex multi-phase treatment plans across years requires clinical wisdom built from experience." },
        ],
        blsData: { salary: "$170,910", employment: "154,500", growth: "+4%", growthLabel: "Average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Overjet", url: "https://www.overjet.com", desc: "FDA-cleared AI for dental X-ray analysis and treatment detection" },
          { name: "Pearl", url: "https://www.hellopearl.com", desc: "AI-powered dental pathology detection in radiographs" },
          { name: "Dentistry.AI", url: "https://www.dentistry.ai", desc: "AI practice analytics, patient engagement, and treatment planning" },
        ],
        skills: [
          { text: "Use FDA-cleared AI to get a second read on every radiograph and catch pathology earlier", linked: "Overjet" },
          { text: "Integrate AI pathology detection into daily diagnostic workflows for consistent quality", linked: "Pearl" },
          { text: "Leverage AI practice analytics to improve case acceptance, scheduling, and patient engagement", linked: "Dentistry.AI" },
          { text: "Master CAD/CAM digital dentistry workflows for same-day crowns, implant planning, and aligner design" },
        ],
        resources: [
          { title: "ADA — American Dental Association Technology Resources", url: "https://www.ada.org" },
        ],
        faqs: [
          { q: "Will AI or robots replace dentists?", a: "No. Dental procedures require extraordinary manual dexterity in a tiny, sensitive space — the inside of a person's mouth. No robot can perform a root canal, place an implant, or manage a difficult extraction. AI enhances diagnostics and planning but cannot replace the hands-on clinical work that defines dentistry." },
          { q: "How is AI changing dentistry?", a: "AI's biggest impact is in diagnostics — reading X-rays faster and more consistently than the human eye, catching early cavities and bone loss that might be missed. It also streamlines practice management, treatment planning, and patient communication. Dentists who adopt AI tools diagnose earlier and practice more efficiently." },
        ]},
      { id: "primary-care-doctor", title: "Primary Care Doctor", risk: 32, augment: 82,
        verdict: "Not yet — but primary care is one of the medical specialties most transformed by AI. Documentation, diagnostics, and routine decision-making are being automated rapidly. The doctor-patient relationship and complex clinical reasoning keep the role human, but PCPs who don't adopt AI will fall behind.",
        summary: "AI is transforming primary care faster than almost any other medical specialty. Ambient documentation, AI diagnostics, and predictive analytics are reshaping daily workflows. But the doctor-patient relationship, undifferentiated symptom evaluation, and the art of longitudinal care remain deeply human.",
        keyInsight: "Primary care doctors spend 2 hours on paperwork for every 1 hour with patients. AI flips that ratio — the biggest quality-of-life improvement in a generation.",
        aiMastered: [
          { title: "Clinical documentation", desc: "AI ambient listening tools capture entire patient visits and auto-generate complete, structured clinical notes — eliminating the #1 cause of physician burnout in primary care." },
          { title: "Preventive care and screening alerts", desc: "AI continuously scans patient records against evidence-based guidelines, flagging overdue cancer screenings, vaccinations, chronic disease checks, and wellness visits." },
          { title: "Prescription safety and interaction checking", desc: "AI instantly cross-references every new prescription against the patient's full medication list, allergies, lab values, and conditions — catching dangerous interactions humans might miss in complex regimens." },
        ],
        aiImproving: [
          { title: "Differential diagnosis generation", desc: "AI generates differential diagnoses from symptoms, history, and vitals — helpful for uncommon conditions — but PCPs still need physical exam findings, clinical intuition, and patient context to narrow the list." },
          { title: "Chronic disease management protocols", desc: "AI tracks A1C trends, blood pressure patterns, and medication adherence, suggesting protocol adjustments — but managing the whole patient (motivation, social barriers, mental health) requires human judgment." },
          { title: "Referral triage and coordination", desc: "AI can suggest specialist referrals based on patient data and flag urgent findings, but navigating the referral network, insurance requirements, and patient preferences is still a human coordination challenge." },
        ],
        humanEssential: [
          { title: "Undifferentiated symptom evaluation", desc: "When a patient says 'I just don't feel right,' the PCP's job is to figure out what's wrong from a universe of possibilities. This requires physical examination, clinical reasoning, and the pattern recognition that comes from knowing a patient for years." },
          { title: "The longitudinal doctor-patient relationship", desc: "Primary care is built on continuity — knowing a patient's story, their family, their fears, their values. This relationship drives better outcomes, treatment adherence, and trust that AI cannot replicate." },
          { title: "Goals-of-care and complex conversations", desc: "Discussing end-of-life wishes, delivering bad news, navigating family dynamics around health decisions, and supporting patients through life transitions requires deep empathy and human wisdom." },
        ],
        blsData: { salary: "$236,000", employment: "120,000", growth: "+3%", growthLabel: "Average", source: "Medscape Physician Compensation Report, 2024" },
        tools: [
          { name: "Nuance DAX", url: "https://www.nuance.com/healthcare/ambient-clinical-intelligence.html", desc: "AI ambient listening that auto-generates clinical notes from patient conversations" },
          { name: "Glass Health", url: "https://glass.health", desc: "AI-powered differential diagnosis and clinical decision support for primary care" },
          { name: "Abridge", url: "https://www.abridge.com", desc: "AI medical conversation summarization that generates structured visit notes" },
          { name: "Epic Cognitive Computing", url: "https://www.epic.com", desc: "AI embedded in the EHR for predictive analytics, risk scores, and clinical alerts" },
        ],
        skills: [
          { text: "Eliminate documentation burden with ambient AI that listens to visits and writes notes automatically", linked: "Nuance DAX" },
          { text: "Validate clinical reasoning against AI differential diagnosis tools for complex presentations", linked: "Glass Health" },
          { text: "Use AI conversation summarization to generate patient-friendly visit summaries and after-visit instructions", linked: "Abridge" },
          { text: "Interpret AI-generated risk scores and predictive alerts to prioritize proactive patient outreach", linked: "Epic Cognitive Computing" },
        ],
        resources: [
          { title: "AMA — AI in Medicine Resources", url: "https://www.ama-assn.org/practice-management/digital" },
          { title: "AAFP — Technology in Family Medicine", url: "https://www.aafp.org" },
        ],
        faqs: [
          { q: "Will AI replace primary care doctors?", a: "Not in the foreseeable future — but AI is automating significant portions of the workflow. Documentation, diagnostic suggestions, and routine screening are already AI-assisted. The core of primary care — evaluating undifferentiated symptoms, managing complex patients longitudinally, and building therapeutic relationships — remains deeply human. PCPs who embrace AI will thrive; those who resist it will struggle." },
          { q: "Why is primary care doctor risk rated 32% and not lower?", a: "Primary care has more automatable tasks than other physician specialties — routine documentation, straightforward prescribing, preventive care protocol adherence, and stable chronic disease management. AI also enables NPs and PAs to handle more of these tasks independently. The complex, relationship-driven aspects remain safe, but the routine portions face real AI pressure." },
        ]},
      { id: "surgeon", title: "Surgeon", risk: 10, augment: 72,
        verdict: "No — surgery demands extraordinary hand-eye coordination, split-second judgment, and physical dexterity under extreme pressure. Robotic surgery enhances the surgeon's precision but requires a skilled human at the controls. Autonomous surgical robots are decades away from reality.",
        summary: "Surgery demands extraordinary hand-eye coordination, split-second decision-making, and physical dexterity in high-stakes conditions. Robotic surgery assists the surgeon's precision but requires a skilled human at the controls. AI helps with pre-operative planning and risk prediction.",
        keyInsight: "Robotic surgery isn't replacing surgeons — it's giving them superhuman precision. The surgeon is still the one making every critical decision in the OR.",
        aiMastered: [
          { title: "Pre-operative 3D planning", desc: "AI generates detailed 3D models from CT and MRI scans, letting surgeons rehearse complex procedures virtually — visualizing anatomy, planning approaches, and anticipating complications before making the first incision." },
          { title: "Surgical risk prediction", desc: "AI models predict post-operative complications, readmission risk, and recovery timelines from patient data — enabling better informed consent conversations and proactive risk mitigation." },
          { title: "Surgical video analysis and documentation", desc: "AI auto-logs surgical steps from video, tracks instrument usage, and generates operative reports — reducing post-op documentation time and creating searchable surgical libraries." },
        ],
        aiImproving: [
          { title: "Intraoperative guidance", desc: "AI can overlay anatomical boundaries and critical structures during surgery, but real-time tissue variation, bleeding, and unexpected findings still require the surgeon's adaptive judgment." },
          { title: "Robotic precision enhancement", desc: "Robotic systems filter hand tremors and enable micro-movements beyond human capability, but the surgeon is always the decision-maker — choosing when, where, and how to cut." },
          { title: "Post-operative monitoring", desc: "AI tracks patient vitals and recovery metrics post-surgery, flagging early signs of complications — but deciding when to re-operate, when to watch, and how to intervene remains human." },
        ],
        humanEssential: [
          { title: "Intraoperative decision-making", desc: "When unexpected bleeding occurs, anatomy doesn't match the scans, or the surgical plan needs to change mid-procedure — the surgeon's ability to adapt in real time under extreme pressure is irreplaceable." },
          { title: "Physical dexterity and spatial awareness", desc: "Operating in tight anatomical spaces with millimeter precision, managing tissue tension, and controlling instruments with both hands requires a level of physical skill that no robot can autonomously replicate." },
          { title: "Patient and family communication", desc: "Explaining surgical risks, managing expectations, delivering unexpected findings, and guiding families through the anxiety of a loved one's surgery requires deep empathy and human connection." },
        ],
        blsData: { salary: "$409,665", employment: "42,300", growth: "+3%", growthLabel: "Average", source: "Medscape Surgeon Compensation Report, 2024" },
        tools: [
          { name: "Intuitive Surgical (da Vinci)", url: "https://www.intuitive.com", desc: "Robotic-assisted surgical platform used in millions of minimally invasive procedures" },
          { name: "Surgical Theater", url: "https://www.surgicaltheater.com", desc: "AI-powered 3D surgical planning and VR pre-operative visualization" },
          { name: "Caresyntax", url: "https://www.caresyntax.com", desc: "AI-driven surgical analytics for real-time decision support and risk assessment" },
        ],
        skills: [
          { text: "Master robotic-assisted surgical techniques for enhanced precision in minimally invasive procedures", linked: "Intuitive Surgical (da Vinci)" },
          { text: "Use AI-powered 3D visualization to plan complex procedures and rehearse approaches virtually", linked: "Surgical Theater" },
          { text: "Leverage AI surgical analytics for real-time decision support and quality improvement", linked: "Caresyntax" },
          { text: "Integrate AI risk prediction models into pre-operative assessment and informed consent discussions" },
        ],
        resources: [
          { title: "ACS — American College of Surgeons Technology Resources", url: "https://www.facs.org" },
        ],
        faqs: [
          { q: "Will robots perform surgery without human surgeons?", a: "Not in any foreseeable future. Current surgical robots (like the da Vinci system) are teleoperated — the surgeon controls every movement. Autonomous surgery faces enormous technical barriers: every body is different, tissue behaves unpredictably, and complications require instant creative problem-solving. The robot is the tool; the surgeon is the intelligence." },
          { q: "How does AI help surgeons today?", a: "AI's biggest impact is before and after surgery: 3D pre-operative planning, surgical risk prediction, and post-operative complication monitoring. During surgery, AI enhances precision through robotic assistance and provides real-time anatomical guidance. But every decision in the OR is still made by the human surgeon." },
        ]},
      { id: "emergency-room-doctor", title: "Emergency Room Doctor", risk: 12, augment: 75,
        verdict: "No — the ER is controlled chaos requiring instant judgment across every medical specialty, simultaneous management of multiple critical patients, and constant physical presence. AI assists with triage and diagnostics, but the unpredictability and stakes of emergency medicine keep it firmly human.",
        summary: "The ER is controlled chaos — no two shifts are alike. AI helps with triage scoring, rapid diagnostic imaging, and clinical decision support, but the unpredictability, time pressure, and human judgment required keep ER doctors irreplaceable.",
        keyInsight: "AI can triage 100 patients in the time it takes a doctor to see one. But when the trauma patient arrives, there is no algorithm for what happens next.",
        aiMastered: [
          { title: "Triage scoring and prioritization", desc: "AI analyzes patient vitals, chief complaints, and risk factors to generate acuity scores — helping ensure the sickest patients are seen first, even in a crowded waiting room." },
          { title: "Critical imaging detection", desc: "AI scans every CT and X-ray for critical findings — stroke, pulmonary embolism, pneumothorax, fractures — and alerts the ER team within minutes, often before the radiologist reads the study." },
          { title: "Sepsis and deterioration early warning", desc: "AI continuously monitors patient vitals and lab trends, predicting sepsis and clinical deterioration hours before they become obvious — giving ER teams precious time to intervene." },
        ],
        aiImproving: [
          { title: "Clinical decision support for disposition", desc: "AI can suggest whether a patient needs admission, observation, or discharge based on clinical data, but the final call — especially for complex or uncertain cases — requires human clinical judgment." },
          { title: "Drug dosing in emergencies", desc: "AI calculates weight-based emergency drug dosing and suggests protocols, but real-time titration during resuscitation — reading the patient's response moment to moment — is a human skill." },
          { title: "Documentation during high-acuity care", desc: "AI is improving at capturing and documenting ER encounters in real time, but the chaotic pace of emergency medicine makes accurate AI documentation harder than in scheduled visit settings." },
        ],
        humanEssential: [
          { title: "Rapid multi-system assessment", desc: "ER doctors evaluate patients across every organ system simultaneously, making life-or-death decisions with incomplete information under extreme time pressure. This cognitive agility is uniquely human." },
          { title: "Procedural emergency skills", desc: "Intubation, chest tubes, central lines, fracture reduction, wound repair, and trauma resuscitation require trained hands working under pressure with real-time adaptation to each patient's anatomy and response." },
          { title: "Managing chaos and human crisis", desc: "Calming a panicking family, managing a combative patient, coordinating a trauma team, and making simultaneous decisions about multiple critical patients requires human leadership, empathy, and composure under fire." },
        ],
        blsData: { salary: "$310,000", employment: "42,000", growth: "+3%", growthLabel: "Average", source: "Medscape Emergency Medicine Compensation Report, 2024" },
        tools: [
          { name: "Viz.ai", url: "https://www.viz.ai", desc: "AI stroke detection and care coordination that alerts teams within minutes of imaging" },
          { name: "Aidoc", url: "https://www.aidoc.com", desc: "AI triage and prioritization for emergency radiology findings" },
          { name: "BioSign (Philips)", url: "https://www.philips.com", desc: "AI early warning system that predicts patient deterioration from continuous vitals monitoring" },
        ],
        skills: [
          { text: "Act on AI stroke detection alerts to mobilize neurovascular teams within the critical treatment window", linked: "Viz.ai" },
          { text: "Integrate AI-prioritized imaging findings into rapid clinical decision-making workflows", linked: "Aidoc" },
          { text: "Monitor and respond to AI early warning deterioration alerts before patients crash", linked: "BioSign (Philips)" },
          { text: "Maintain procedural skills and clinical composure that no AI can replicate in high-stakes resuscitation" },
        ],
        resources: [
          { title: "ACEP — American College of Emergency Physicians", url: "https://www.acep.org" },
        ],
        faqs: [
          { q: "Will AI replace ER doctors?", a: "No — emergency medicine is among the most AI-resistant physician specialties. The ER demands instant decisions across every medical specialty with incomplete information, simultaneous management of multiple critical patients, and hands-on procedural skills in life-threatening situations. AI helps with triage and diagnostics, but the chaos, stakes, and unpredictability of the ER require human judgment." },
          { q: "How is AI used in emergency rooms today?", a: "AI's biggest ER impacts are in triage (prioritizing the sickest patients), imaging (detecting strokes, PEs, and fractures within minutes of scanning), and early warning (predicting sepsis and deterioration before they become obvious). These tools give ER doctors precious extra minutes — and in emergency medicine, minutes save lives." },
        ]},
      { id: "anesthesiologist", title: "Anesthesiologist", risk: 28, augment: 82,
        verdict: "Not likely — but anesthesiology faces more AI pressure than most surgical specialties. AI excels at the continuous monitoring and pattern recognition that define intraoperative care. However, real-time drug titration, crisis management, and the judgment to handle unexpected complications keep anesthesiologists essential.",
        summary: "AI monitors patients during surgery with superhuman vigilance — predicting hypotension, tracking depth of anesthesia, and alerting to complications before they become emergencies. But real-time drug titration and crisis decision-making remain firmly human.",
        keyInsight: "AI doesn't replace the anesthesiologist — it gives them a tireless copilot that never looks away from the monitors.",
        aiMastered: [
          { title: "Continuous hemodynamic monitoring", desc: "AI tracks blood pressure, heart rate, oxygen saturation, and cardiac output continuously, detecting subtle trends and variability patterns that even experienced anesthesiologists might miss during long cases." },
          { title: "Hypotension prediction", desc: "AI predicts dangerous blood pressure drops up to 15 minutes before they occur — giving anesthesiologists time to intervene proactively rather than reactively, improving surgical outcomes." },
          { title: "Anesthesia depth monitoring", desc: "AI brain monitoring systems track consciousness levels in real time, reducing the risk of awareness during surgery and enabling more precise anesthetic dosing." },
        ],
        aiImproving: [
          { title: "Automated drug titration", desc: "Closed-loop systems that automatically adjust anesthetic drug delivery based on patient monitoring are in development, but the variability of human physiology and surgical events means human oversight remains essential." },
          { title: "Surgical blood loss estimation", desc: "AI uses computer vision to estimate blood loss from surgical sponges and suction canisters in real time — more accurate than visual estimation, but still requires anesthesiologist judgment on transfusion decisions." },
          { title: "Post-operative pain prediction", desc: "AI is learning to predict post-operative pain levels and opioid needs from patient and surgical factors, but personalized pain management still requires human assessment and patient communication." },
        ],
        humanEssential: [
          { title: "Crisis management in the OR", desc: "When a patient crashes — anaphylaxis, massive hemorrhage, cardiac arrest, difficult airway — the anesthesiologist must diagnose the problem and execute life-saving interventions in seconds. This crisis performance under pressure is irreplaceable." },
          { title: "Airway management", desc: "Securing a patient's airway — especially a difficult or emergency airway — requires physical skill, spatial awareness, and calm judgment that no AI or robot can perform autonomously." },
          { title: "Pre-operative risk assessment", desc: "Evaluating a complex patient's fitness for surgery, optimizing comorbidities, choosing an anesthetic plan, and having honest risk conversations with patients and families requires holistic clinical judgment." },
        ],
        blsData: { salary: "$302,970", employment: "31,200", growth: "+4%", growthLabel: "Average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Acumen (Edwards Lifesciences)", url: "https://www.edwards.com", desc: "AI system that predicts dangerous blood pressure drops up to 15 minutes before they happen" },
          { name: "Gauss Surgical", url: "https://www.gausssurgical.com", desc: "AI-powered real-time surgical blood loss estimation via computer vision" },
          { name: "Medtronic BIS", url: "https://www.medtronic.com", desc: "AI brain monitoring for anesthesia depth and consciousness level tracking" },
        ],
        skills: [
          { text: "Use AI hypotension prediction to intervene proactively before dangerous blood pressure drops", linked: "Acumen (Edwards Lifesciences)" },
          { text: "Integrate AI blood loss estimation into transfusion decision-making for better surgical outcomes", linked: "Gauss Surgical" },
          { text: "Monitor and interpret AI-powered anesthesia depth tracking to optimize drug dosing", linked: "Medtronic BIS" },
          { text: "Maintain crisis management and airway skills that define the irreplaceable human core of anesthesiology" },
        ],
        resources: [
          { title: "ASA — American Society of Anesthesiologists", url: "https://www.asahq.org" },
        ],
        faqs: [
          { q: "Will AI replace anesthesiologists?", a: "Unlikely in the foreseeable future — but anesthesiology does face more AI pressure than most surgical specialties. AI excels at continuous monitoring and pattern recognition, which are central to anesthesia. However, the role also requires crisis airway management, real-time drug titration in unpredictable situations, and life-or-death decision-making that demands human judgment." },
          { q: "Why is anesthesiology rated at 28% risk — higher than other doctors?", a: "Because the monitoring and vigilance aspects of anesthesia are well-suited to AI — continuous vital sign tracking, pattern detection, and even closed-loop drug delivery are advancing rapidly. The risk score reflects the automatable monitoring portion, not the crisis management and procedural skills that keep the role human. Anesthesiologists who embrace AI monitoring as a copilot will have better outcomes." },
        ]},
      { id: "psychiatrist", title: "Psychiatrist", risk: 22, augment: 68,
        verdict: "No — but the landscape is shifting. AI chatbots and digital therapeutics are handling mild-to-moderate mental health needs at scale, and AI assists with medication management and diagnostic screening. However, complex psychiatric care — treatment-resistant illness, psychopharmacology, involuntary holds, and deep therapeutic work — remains firmly human.",
        summary: "Psychiatry is evolving as AI handles initial screening, between-session support, and routine medication management. But complex diagnostic evaluation, psychopharmacology for treatment-resistant conditions, crisis intervention, and the therapeutic relationship remain irreplaceable human skills.",
        keyInsight: "The mental health crisis has created a massive psychiatrist shortage. AI extends each psychiatrist's reach — but also handles more of the routine work that used to require a psychiatrist's time.",
        aiMastered: [
          { title: "Screening and symptom assessment", desc: "AI-administered questionnaires (PHQ-9, GAD-7, AUDIT, Columbia Scale) collect and score patient symptoms before and between visits — giving psychiatrists objective data to complement clinical observation." },
          { title: "Medication interaction and safety alerts", desc: "AI cross-references psychiatric medications against a patient's full medication list, genetic data, and lab values — catching dangerous interactions and contraindications in complex psychopharmacology regimens." },
          { title: "Patient matching and care coordination", desc: "AI platforms match patients to the right level of care — therapy, psychiatry, intensive outpatient — based on symptom severity, insurance, and availability, improving access in a shortage." },
        ],
        aiImproving: [
          { title: "Digital therapeutics for mild conditions", desc: "AI-powered CBT apps and digital therapeutics are FDA-approved for treating insomnia, substance use, and mild anxiety/depression — handling cases that previously required a psychiatrist's time. This frees psychiatrists for complex cases but reduces demand for routine visits." },
          { title: "Treatment outcome prediction", desc: "AI is learning to predict which medications and therapies will work best for individual patients, but psychiatric treatment is still largely trial-and-error, and human clinical judgment drives titration decisions." },
          { title: "Natural language analysis of sessions", desc: "AI can analyze therapy session transcripts for sentiment, risk markers, and therapeutic technique usage — useful for quality improvement, but interpreting what's actually happening in a session is still a deeply human skill." },
        ],
        humanEssential: [
          { title: "Complex psychopharmacology", desc: "Managing treatment-resistant depression, complex bipolar regimens, clozapine monitoring, and medication management for patients on 5+ psychiatric drugs requires expertise that goes far beyond what AI can recommend." },
          { title: "Crisis intervention and risk assessment", desc: "Evaluating suicidal patients, making involuntary commitment decisions, managing psychiatric emergencies, and conducting threat assessments require real-time human judgment with life-or-death consequences." },
          { title: "The therapeutic relationship", desc: "Psychiatrists who do therapy build deep, trusting relationships with patients navigating psychosis, personality disorders, trauma, and grief. This human connection is the foundation of psychiatric healing." },
        ],
        blsData: { salary: "$269,930", employment: "27,600", growth: "+7%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Spring Health", url: "https://www.springhealth.com", desc: "AI-powered precision mental health matching and treatment outcome prediction" },
          { name: "Quartet Health", url: "https://www.quartethealth.com", desc: "AI-driven behavioral health care coordination and referral management" },
          { name: "Luminello", url: "https://luminello.com", desc: "AI-enhanced psychiatric practice management with integrated outcome tracking" },
        ],
        skills: [
          { text: "Use AI-powered precision matching to ensure patients reach the right level of psychiatric care", linked: "Spring Health" },
          { text: "Leverage AI care coordination to manage referral networks and track patient outcomes across providers", linked: "Quartet Health" },
          { text: "Integrate AI-enhanced practice management with outcome tracking to demonstrate treatment effectiveness", linked: "Luminello" },
          { text: "Maintain expertise in complex psychopharmacology and crisis intervention that defines the psychiatrist's irreplaceable role" },
        ],
        resources: [
          { title: "APA — American Psychiatric Association Technology Resources", url: "https://www.psychiatry.org" },
        ],
        faqs: [
          { q: "Will AI therapy chatbots replace psychiatrists?", a: "For mild-to-moderate conditions, AI chatbots and digital therapeutics are already handling some of the demand. But for complex psychiatric illness — treatment-resistant depression, bipolar disorder, schizophrenia, personality disorders, suicidality — the psychiatrist's expertise in psychopharmacology, crisis management, and deep therapeutic work is irreplaceable. The field is splitting: routine cases may shift to AI and therapy apps, while complex cases concentrate with psychiatrists." },
          { q: "Why is psychiatrist risk rated at 22% — higher than therapist (10%)?", a: "Because psychiatrists uniquely straddle two roles: therapy and medication management. The medication management side — prescribing, monitoring, adjusting doses for stable patients — is more automatable than the purely relational work therapists do. AI can handle psychiatric screening, flag medication interactions, and manage stable medication regimens. The complex psychopharmacology and crisis work remains safe, but the routine prescribing portion faces real AI pressure." },
        ]},
    ]
  },
  {
    id: "legal", name: "Legal", icon: "⚖️", accent: "#ffb800",
    desc: "Contract review, legal research, and document drafting are being transformed overnight.",
    jobs: [
      { id: "paralegal", title: "Paralegal", risk: 52, augment: 88,
        verdict: "Partially — the high-volume, repetitive tasks that once defined paralegal work are being automated at breathtaking speed. But paralegals who become fluent in AI-powered eDiscovery, contract analysis, and research platforms become indispensable force multipliers for attorneys. The role is shifting from doing the work to overseeing AI that does it.",
        summary: "Many traditional paralegal tasks — document review, research, filing — are being automated fast. Paralegals who master AI tools become force multipliers.",
        keyInsight: "A single AI-equipped paralegal can now do the document review work that used to require a team of 10.",
        aiMastered: [
          { title: "Document review and classification", desc: "AI-powered technology-assisted review (TAR) classifies millions of documents for relevance, privilege, and responsiveness in hours — work that once consumed paralegal teams for months on large litigation matters." },
          { title: "Legal citation checking", desc: "AI tools instantly verify case citations, flag overruled or superseded authorities, and check Shepard's or KeyCite status across entire briefs — eliminating one of the most tedious paralegal tasks." },
          { title: "Contract data extraction", desc: "AI reads thousands of contracts and extracts key terms — renewal dates, change-of-control clauses, liability caps, indemnification provisions — populating databases that used to require weeks of manual abstraction." },
        ],
        aiImproving: [
          { title: "Legal research and memo drafting", desc: "AI can surface relevant case law and generate first-draft research memos, but still hallucinates citations and misses nuanced distinctions between jurisdictions — requiring careful human verification." },
          { title: "Deposition and hearing preparation", desc: "AI summarizes transcripts, identifies key testimony, and cross-references exhibits, but organizing a coherent deposition strategy still requires human understanding of case theory." },
          { title: "Regulatory compliance tracking", desc: "AI monitors regulatory changes and flags affected documents, but interpreting how new rules apply to specific client situations requires paralegal judgment and attorney guidance." },
        ],
        humanEssential: [
          { title: "Client communication and intake", desc: "Gathering sensitive information from clients, explaining procedures, maintaining confidentiality, and managing expectations requires the trust and emotional intelligence that only human interaction provides." },
          { title: "Complex filing and court procedures", desc: "Navigating jurisdiction-specific filing requirements, court rules, deadlines, and procedural quirks — especially in state courts with idiosyncratic local rules — requires human expertise and real-time problem-solving." },
          { title: "AI quality control and oversight", desc: "Someone must validate AI document classifications, catch hallucinated citations, verify extracted contract terms, and ensure nothing critical slipped through — and that someone is increasingly the AI-fluent paralegal." },
        ],
        blsData: { salary: "$59,200", employment: "360,400", growth: "+4%", growthLabel: "Average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Relativity", url: "https://www.relativity.com", desc: "The industry-standard eDiscovery platform with AI-powered document review, analytics, and technology-assisted review (TAR) that can classify millions of documents for relevance and privilege." },
          { name: "Luminance", url: "https://www.luminance.com", desc: "AI contract intelligence platform that reads and analyzes contracts in any language, flagging anomalies, extracting key clauses, and accelerating due diligence from weeks to hours." },
          { name: "Everlaw", url: "https://www.everlaw.com", desc: "Cloud-native litigation platform with predictive coding, AI-powered search, and collaborative review workflows designed for modern legal teams." },
          { name: "CoCounsel", url: "https://casetext.com/cocounsel", desc: "AI legal research assistant that searches case law, summarizes findings, and drafts research memos — with growing accuracy on jurisdiction-specific questions." },
        ],
        skills: [
          { text: "Run and refine AI-powered document review workflows, including training classifiers and validating TAR results", linked: "Relativity" },
          { text: "Use AI contract analysis to extract key terms, flag risks, and build clause comparison matrices for due diligence", linked: "Luminance" },
          { text: "Manage cloud-based litigation platforms for collaborative case preparation and predictive coding", linked: "Everlaw" },
          { text: "Conduct AI-assisted legal research and critically verify AI-generated citations and summaries for accuracy", linked: "CoCounsel" },
          { text: "Serve as the quality-control layer between AI output and attorney work product — catching errors AI misses" },
        ],
        resources: [
          { title: "NALA — Technology for Paralegals", url: "https://www.nala.org" },
          { title: "Paralegal Today — AI and Legal Tech Coverage", url: "https://www.paralegaltoday.com" },
        ],
        faqs: [
          { q: "Will AI replace paralegals?", a: "Not entirely — but it will dramatically reshape the role. The paralegals most at risk are those focused solely on document review, cite-checking, and data entry. Those who master AI tools and serve as the quality-control bridge between AI output and attorney work product will be more valuable than ever. Expect fewer paralegals per case, but higher impact per paralegal." },
          { q: "What AI skills should paralegals learn right now?", a: "Start with technology-assisted review (TAR) platforms like Relativity, then learn AI contract analysis tools like Luminance. Get comfortable with AI legal research assistants like CoCounsel, but practice verifying their output — catching AI hallucinations is becoming a core paralegal skill." },
        ]},
      { id: "compliance-officer", title: "Compliance Officer", risk: 42, augment: 82,
        verdict: "Partially — AI is automating regulatory monitoring, transaction screening, and routine compliance checks at scale. But interpreting ambiguous regulations, building compliance culture, managing investigations, and exercising judgment in gray-area situations remain deeply human.",
        summary: "AI is transforming compliance from a reactive, labor-intensive function into a proactive, data-driven discipline. Routine monitoring and screening are being automated, but regulatory interpretation, ethical judgment, and stakeholder management remain human-driven.",
        keyInsight: "The regulatory landscape is growing more complex, not simpler. AI handles the volume — screening thousands of transactions per second — but a compliance officer's judgment on whether something truly violates the spirit of a regulation cannot be automated.",
        aiMastered: [
          { title: "Transaction monitoring and screening", desc: "AI screens millions of transactions in real time against sanctions lists, PEP databases, and suspicious activity patterns — processing volume that would require armies of human analysts to match." },
          { title: "Regulatory change tracking", desc: "AI continuously monitors thousands of regulatory sources across jurisdictions, flagging new rules, amendments, and enforcement actions relevant to your organization." },
          { title: "Policy document comparison", desc: "AI compares internal policies against regulatory requirements and identifies gaps, outdated provisions, and inconsistencies across policy libraries in minutes rather than weeks." },
        ],
        aiImproving: [
          { title: "Risk assessment and scoring", desc: "AI is getting better at scoring compliance risks across business units, geographies, and product lines — but still struggles with novel risks, emerging regulatory trends, and the political context that shapes enforcement priorities." },
          { title: "Investigation triage and case management", desc: "AI can prioritize compliance alerts, reduce false positives, and suggest investigation paths, but determining whether a pattern of behavior constitutes a genuine violation still requires human contextual judgment." },
          { title: "Regulatory reporting automation", desc: "AI can draft routine regulatory filings like SARs and CTRs, but complex disclosures and responses to regulatory inquiries require human nuance to avoid creating unintended legal exposure." },
        ],
        humanEssential: [
          { title: "Regulatory interpretation in gray areas", desc: "Regulations are written by humans in ambiguous language. Deciding whether a novel business activity violates the spirit of a rule requires judgment, experience, and understanding of regulatory intent that AI lacks." },
          { title: "Building compliance culture", desc: "Training employees, convincing skeptical business leaders to follow rules that cost money, and creating an ethical organizational culture requires influence, persuasion, and credibility that no algorithm provides." },
          { title: "Managing regulatory relationships", desc: "Responding to examiner questions, negotiating consent orders, representing the company in regulatory discussions, and building trust with regulators demands human diplomacy and strategic thinking." },
        ],
        blsData: { salary: "$75,670", employment: "357,800", growth: "+5%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Ascent", url: "https://www.ascentregtech.com", desc: "AI-powered regulatory change management platform that maps obligations to your specific products and operations" },
          { name: "Behavox", url: "https://www.behavox.com", desc: "AI surveillance platform that monitors employee communications across channels for compliance violations and conduct risk" },
          { name: "NICE Actimize", url: "https://www.niceactimize.com", desc: "AI-driven financial crime and compliance platform handling anti-money laundering, fraud detection, and trade surveillance" },
        ],
        skills: [
          { text: "Configure and tune AI transaction monitoring rules to reduce false positives while maintaining detection quality", linked: "NICE Actimize" },
          { text: "Use AI regulatory intelligence platforms to map new rules to specific business obligations", linked: "Ascent" },
          { text: "Oversee AI-powered communications surveillance and investigate AI-flagged conduct risks", linked: "Behavox" },
          { text: "Translate complex regulatory requirements into clear, actionable guidance for business teams" },
        ],
        resources: [
          { title: "Society of Corporate Compliance and Ethics (SCCE)", url: "https://www.corporatecompliance.org" },
          { title: "ACAMS — AI and Financial Crime Resources", url: "https://www.acams.org" },
        ],
        faqs: [
          { q: "Will AI replace compliance officers?", a: "No — but it will significantly change what they do daily. AI takes over the monitoring, screening, and reporting volume that used to consume 60-70% of a compliance officer's time. This frees compliance professionals to focus on regulatory interpretation, investigations, culture-building, and strategic advisory work." },
          { q: "What should compliance officers learn about AI?", a: "Start with understanding how your organization's AI monitoring and screening tools work — their logic, false positive rates, and blind spots. Then learn AI-specific regulatory requirements (EU AI Act, NIST AI RMF) because AI compliance is becoming a specialty in its own right." },
        ]},
      { id: "litigation-attorney", title: "Litigation / Trial Attorney", risk: 28, augment: 75,
        verdict: "Not yet — litigation is one of the most human-intensive areas of law. AI excels at research, document review, and brief drafting, but courtroom advocacy, witness examination, jury persuasion, and real-time strategic pivots remain deeply human skills.",
        summary: "AI is transforming litigation preparation — accelerating research, streamlining document review, and generating first-draft briefs. But the courtroom itself remains a profoundly human arena where persuasion, credibility, and strategic judgment determine outcomes.",
        keyInsight: "AI can help you find every relevant case in minutes, but it cannot read a juror's face, sense when a witness is about to break, or adjust closing arguments on the fly. Trial work is performance, not processing.",
        aiMastered: [
          { title: "Legal research and case law analysis", desc: "AI searches millions of cases, statutes, and regulations instantly, surfacing relevant authorities with summaries and relevance scores — compressing weeks of associate research into hours." },
          { title: "Document review for discovery", desc: "AI-powered predictive coding and TAR classify millions of discovery documents for relevance, privilege, and responsiveness with accuracy that matches or exceeds human review teams." },
          { title: "Litigation timeline and fact organization", desc: "AI extracts dates, parties, and events from case files to auto-generate chronologies and fact databases — eliminating hundreds of hours of manual document indexing." },
        ],
        aiImproving: [
          { title: "Brief and motion drafting", desc: "AI can generate first drafts of briefs, motions, and memoranda with proper structure and citations, but the legal reasoning, persuasive framing, and jurisdiction-specific nuance still require heavy human editing." },
          { title: "Deposition preparation and analysis", desc: "AI summarizes transcripts, identifies contradictions across depositions, and suggests lines of questioning — but crafting the examination strategy remains a human art." },
          { title: "Outcome prediction and case valuation", desc: "AI models analyze historical case data, judge tendencies, and jurisdiction patterns to predict likely outcomes — but every case has unique facts that defy purely statistical prediction." },
        ],
        humanEssential: [
          { title: "Courtroom advocacy and oral argument", desc: "Standing before a judge or jury, reading the room, adapting arguments in real time, making credibility judgments, and delivering persuasive narrative — this is performance art, not information processing." },
          { title: "Witness examination", desc: "Cross-examination requires reading body language, exploiting hesitations, adjusting tone, and executing multi-step impeachment strategies on the fly. AI cannot conduct a cross-examination." },
          { title: "Client counseling and case strategy", desc: "Advising clients through the most stressful experiences of their lives — explaining risk, recommending settlement versus trial, and navigating the emotional dimension of litigation — requires empathy and seasoned judgment." },
        ],
        blsData: { salary: "$145,760", employment: "300,000", growth: "+8%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, OES 23-1011, 2024" },
        tools: [
          { name: "CoCounsel", url: "https://casetext.com/cocounsel", desc: "AI legal research assistant that searches case law, analyzes authorities, and generates research memos" },
          { name: "Westlaw Edge", url: "https://legal.thomsonreuters.com/en/products/westlaw", desc: "AI-enhanced legal research with litigation analytics, judge profiling, and predictive outcome data" },
          { name: "Lex Machina", url: "https://lexmachina.com", desc: "Legal analytics platform that mines court data to reveal judge behavior, opposing counsel patterns, and outcome statistics" },
        ],
        skills: [
          { text: "Use AI legal research to rapidly identify controlling authority and distinguish unfavorable cases", linked: "CoCounsel" },
          { text: "Leverage litigation analytics to understand judge tendencies and opposing counsel track records", linked: "Lex Machina" },
          { text: "Use AI outcome prediction data to inform settlement negotiations and case valuation", linked: "Westlaw Edge" },
          { text: "Critically review and refine AI-drafted briefs, catching hallucinated citations and weak legal reasoning" },
        ],
        resources: [
          { title: "American Bar Association — AI and Legal Technology", url: "https://www.americanbar.org/groups/centers_commissions/center-for-innovation/" },
          { title: "National Institute for Trial Advocacy (NITA)", url: "https://www.nita.org" },
        ],
        faqs: [
          { q: "Will AI replace trial lawyers?", a: "No — trial work may be the last area of law that AI disrupts. The courtroom is an intensely human environment where persuasion, credibility, emotional intelligence, and real-time adaptability determine outcomes. AI will make trial lawyers dramatically better prepared, but the attorney who stands before the jury remains irreplaceable." },
          { q: "How are litigation firms using AI today?", a: "Most large litigation firms use AI for document review in discovery (predictive coding and TAR), legal research (AI-powered case law search), and litigation analytics (predicting outcomes, profiling judges). The firms seeing the biggest advantage integrate AI into every stage of case preparation, not just one task." },
        ]},
      { id: "corporate-attorney", title: "Corporate / Transactional Attorney", risk: 48, augment: 88,
        verdict: "Partially — corporate transactional work is one of the legal areas most exposed to AI disruption. Due diligence, contract review, and regulatory analysis are being automated rapidly. But structuring novel deals, navigating complex negotiations, and advising on strategic decisions remain firmly human.",
        summary: "AI is automating the document-heavy backbone of corporate law — due diligence, contract review, regulatory analysis. The strategic, relational, and creative aspects of dealmaking remain human, but the volume of junior attorney work is shrinking.",
        keyInsight: "A due diligence process that once required 20 associates reviewing a data room for six weeks can now be substantially completed by AI in days. The corporate attorneys who thrive will be deal architects, not document reviewers.",
        aiMastered: [
          { title: "Due diligence document review", desc: "AI reads thousands of contracts in a data room, extracts key terms, flags risk provisions, and generates diligence summaries — compressing weeks of junior associate work into days." },
          { title: "Contract comparison and analysis", desc: "AI compares draft agreements against templates, precedent, and market standards, identifying deviations and missing provisions with precision that exceeds manual review." },
          { title: "Regulatory filing preparation", desc: "AI drafts routine corporate filings — articles of incorporation, board resolutions, annual reports — from templates and entity data with minimal human input." },
        ],
        aiImproving: [
          { title: "Contract drafting and negotiation markup", desc: "AI generates first drafts of agreements and suggests redlines based on preferred positions, but complex bespoke provisions and strategic concession decisions still require human drafting." },
          { title: "Deal risk assessment", desc: "AI models analyze deal terms against historical transaction data and market benchmarks, but assessing the true risk of a specific acquisition — management quality, cultural fit, integration complexity — requires human judgment." },
          { title: "Regulatory analysis for novel structures", desc: "AI can map existing regulations to standard transactions, but novel deal structures, cross-border regulatory puzzles, and first-impression regulatory questions still require attorneys who understand regulatory intent." },
        ],
        humanEssential: [
          { title: "Deal structuring and creative problem-solving", desc: "Designing a transaction structure that optimizes tax, regulatory, governance, and commercial objectives simultaneously is a creative act that requires synthesizing constraints no AI can fully model." },
          { title: "Negotiation and relationship management", desc: "Sitting across the table from counterparties, reading dynamics, making strategic concessions, and closing deals under pressure requires emotional intelligence and interpersonal skill." },
          { title: "Board and executive advisory", desc: "Counseling CEOs on M&A strategy, advising boards on fiduciary duties, and guiding companies through transformative transactions requires trust, experience, and business judgment built over a career." },
        ],
        blsData: { salary: "$176,580", employment: "250,000", growth: "+8%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, OES 23-1011, 2024" },
        tools: [
          { name: "Luminance", url: "https://www.luminance.com", desc: "AI contract intelligence platform for M&A due diligence — reads, analyzes, and compares contracts in any language" },
          { name: "Kira Systems", url: "https://www.kirasystems.com", desc: "AI contract analysis and extraction tool used by top law firms for due diligence and lease abstraction" },
          { name: "Ironclad", url: "https://www.ironcladapp.com", desc: "AI-powered contract lifecycle management — creation, negotiation, execution, and analysis" },
        ],
        skills: [
          { text: "Use AI due diligence tools to review data rooms and identify material risks faster than competing bidders", linked: "Luminance" },
          { text: "Deploy AI contract extraction to build clause libraries and benchmark deal terms against market standard", linked: "Kira Systems" },
          { text: "Manage contract portfolios at scale with AI-powered lifecycle tracking and obligation monitoring", linked: "Ironclad" },
          { text: "Structure novel transactions that optimize across tax, regulatory, governance, and commercial dimensions" },
        ],
        resources: [
          { title: "ABA Business Law Section", url: "https://www.americanbar.org/groups/business_law/" },
          { title: "Harvard Law School Forum on Corporate Governance", url: "https://corpgov.law.harvard.edu" },
        ],
        faqs: [
          { q: "Will AI replace corporate lawyers?", a: "It will replace much of what junior corporate lawyers do today — due diligence, contract review, regulatory research, and routine drafting. But it won't replace deal architects, strategic advisors, and skilled negotiators. The most vulnerable roles are junior associates doing document-intensive work; the most secure are partners who structure deals and manage client relationships." },
          { q: "How is AI changing M&A due diligence?", a: "Dramatically. AI tools like Luminance and Kira Systems can review entire data rooms in days instead of weeks, extracting key terms, flagging risk provisions, and generating diligence reports. This compresses timelines, reduces costs, and shifts the associate's role from reading documents to reviewing AI output." },
        ]},
      { id: "criminal-defense-attorney", title: "Criminal Defense Attorney", risk: 18, augment: 65,
        verdict: "No — criminal defense is one of the most human-centered areas of law. Liberty is at stake, and the work demands courtroom advocacy, client trust in crisis situations, constitutional judgment, and the ability to tell a human story to judges and juries.",
        summary: "Criminal defense revolves around protecting individual liberty through courtroom advocacy, client counseling, investigation, and constitutional argument. AI helps with research and case analysis, but the adversarial, high-stakes nature of the work keeps it firmly in human hands.",
        keyInsight: "When someone's freedom is on the line, they need a human advocate who can challenge a witness under oath and tell their story in a way that moves a jury. No AI can do that.",
        aiMastered: [
          { title: "Case law research and precedent analysis", desc: "AI rapidly searches criminal case law databases, surfaces relevant precedents on suppression motions, sentencing challenges, and constitutional issues — compressing hours of research into minutes." },
          { title: "Discovery document organization", desc: "AI processes large volumes of prosecution discovery — police reports, forensic reports, surveillance records — indexing, tagging, and organizing them for efficient defense review." },
          { title: "Sentencing data analysis", desc: "AI analyzes historical sentencing data by judge, jurisdiction, offense type, and defendant demographics to provide statistical baselines for sentencing advocacy and plea negotiation." },
        ],
        aiImproving: [
          { title: "Body camera and video evidence analysis", desc: "AI can process hours of body camera, surveillance, and interview footage — transcribing, timestamping, and flagging key moments — though identifying subtle exculpatory details still requires human review." },
          { title: "Forensic evidence evaluation", desc: "AI tools help analyze digital forensics, DNA statistics, and financial records, but challenging prosecution forensic experts and identifying junk science requires deep human expertise." },
          { title: "Motion and brief drafting", desc: "AI can draft initial motions to suppress, dismiss, or compel, but criminal defense motions require fact-specific constitutional arguments and persuasive narrative that AI produces only at a rough-draft level." },
        ],
        humanEssential: [
          { title: "Courtroom advocacy and trial performance", desc: "Cross-examining a police officer, delivering an opening statement to a skeptical jury, making real-time objections — criminal defense is live performance under the highest possible stakes." },
          { title: "Client trust and crisis counseling", desc: "Criminal defendants are terrified, traumatized, or desperate. Building trust with a client in jail, explaining devastating options, and guiding life-altering decisions requires human empathy no technology can provide." },
          { title: "Constitutional and ethical judgment", desc: "Deciding when to challenge a search, whether to put a client on the stand, and navigating the ethical complexities of defense work requires moral reasoning AI cannot replicate." },
        ],
        blsData: { salary: "$126,930", employment: "150,000", growth: "+8%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, OES 23-1011, 2024" },
        tools: [
          { name: "Westlaw Edge", url: "https://legal.thomsonreuters.com/en/products/westlaw", desc: "AI-enhanced legal research with criminal law databases, sentencing analytics, and judge profiling" },
          { name: "Lexis+ AI", url: "https://www.lexisnexis.com/en-us/products/lexis-plus-ai.page", desc: "AI-powered legal research with strong criminal law coverage and citation validation" },
          { name: "CaseMap", url: "https://www.lexisnexis.com/en-us/products/casemap.page", desc: "Case analysis and fact management tool for organizing complex criminal cases" },
        ],
        skills: [
          { text: "Use AI legal research to rapidly build constitutional arguments for suppression motions", linked: "Westlaw Edge" },
          { text: "Leverage AI-powered citation checking to ensure every case cited in defense briefs is current", linked: "Lexis+ AI" },
          { text: "Organize complex multi-defendant criminal cases with digital fact management tools", linked: "CaseMap" },
          { text: "Master the courtroom skills — cross-examination, objections, jury selection — that AI makes more important, not less" },
        ],
        resources: [
          { title: "National Association of Criminal Defense Lawyers (NACDL)", url: "https://www.nacdl.org" },
          { title: "Gideon's Promise — Public Defender Training", url: "https://www.gideonspromise.org" },
        ],
        faqs: [
          { q: "Will AI replace criminal defense lawyers?", a: "No — criminal defense is among the most AI-resistant legal specialties. The Sixth Amendment guarantees the right to counsel, meaning a human advocate. Criminal defense requires courtroom performance, client trust built through human connection, and constitutional judgment in novel situations. AI will make defense attorneys better prepared, but the core work is irreducibly human." },
          { q: "Can AI help public defenders who are overloaded?", a: "Yes — and this may be one of AI's most positive legal applications. Public defenders carry crushing caseloads that make thorough preparation nearly impossible. AI research tools, document organizers, and motion drafters can help an overwhelmed defender prepare more cases more thoroughly." },
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
  {
    id: "transportation", name: "Transportation & Logistics", icon: "🚛", accent: "#6366f1",
    desc: "Self-driving tech, route optimization, and warehouse robotics are reshaping how goods and people move.",
    jobs: []
  },
  {
    id: "government", name: "Government & Public Service", icon: "🏛️", accent: "#64748b",
    desc: "From policing to policy, AI is transforming how governments serve and protect communities.",
    jobs: []
  },
  {
    id: "hospitality", name: "Hospitality & Food Service", icon: "🍽️", accent: "#ef4444",
    desc: "AI streamlines kitchens, personalizes guest experiences, and automates ordering — but hospitality is still deeply human.",
    jobs: []
  },
  {
    id: "retail", name: "Retail & Customer Service", icon: "🛒", accent: "#ec4899",
    desc: "Chatbots, self-checkout, and demand forecasting are redefining retail — but human salesmanship endures.",
    jobs: []
  },
  {
    id: "manufacturing", name: "Manufacturing & Production", icon: "🏭", accent: "#78716c",
    desc: "Robotics and predictive maintenance are transforming factory floors. Engineers and technicians must adapt.",
    jobs: []
  },
  {
    id: "science", name: "Science & Research", icon: "🔬", accent: "#14b8a6",
    desc: "AI accelerates discovery — from drug development to climate modeling — but human curiosity drives the questions.",
    jobs: []
  },
  {
    id: "hr-admin", name: "Human Resources & Admin", icon: "📋", accent: "#a855f7",
    desc: "AI automates hiring screens, scheduling, and document processing. Strategic people skills become the differentiator.",
    jobs: []
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
