// All industry and job data — single source of truth
export const INDUSTRIES = [
  {
    id: "healthcare", name: "Healthcare", icon: "🏥", accent: "#00e5a0",
    desc: "From diagnostics to drug discovery, AI is reshaping how care is delivered.",
    jobs: [
{ id: "nurse", title: "Registered Nurse", risk: 15, augment: 72,
        verdict: "No — nursing is one of the most AI-proof professions in existence. AI handles charting, monitoring, and alerts, but the hands-on clinical judgment, patient advocacy, and human compassion at the heart of nursing cannot be coded. Nurses who embrace AI tools will spend less time on paperwork and more time at the bedside.",
        summary: "AI assists nurses with patient monitoring, predictive alerts, and documentation — freeing up time for the bedside care that defines nursing. With a massive workforce shortage and growing patient demand, AI is making nurses more effective, not less needed.",
        keyInsight: "Nursing is one of the most AI-resistant professions. The human connection at its core cannot be automated — and the nursing shortage means AI is an ally, not a threat.",
        aiMastered: [
          { title: "Continuous vital sign monitoring", desc: "AI-powered wearables and bedside monitors track heart rate, SpO2, blood pressure, and respiratory rate around the clock — auto-alerting nurses to concerning trends before they become emergencies." },
          { title: "Clinical documentation automation", desc: "AI generates nursing notes from voice input and structured data, dramatically reducing the 2+ hours per shift that nurses typically spend on charting and paperwork." },
          { title: "Medication interaction checking", desc: "AI cross-references every medication order against the patient's full drug list, allergies, labs, and conditions — catching dangerous interactions faster and more reliably than manual review." },
        ],
        aiImproving: [
          { title: "Early deterioration detection", desc: "AI models analyze vital sign patterns to predict patient deterioration 6-12 hours before clinical signs appear — but nurses still need to assess the patient and decide whether the alert warrants escalation." },
          { title: "Smart staffing and assignment", desc: "AI is learning to match patient acuity with nurse workload and specialization, but the real-time chaos of a hospital floor — admissions, discharges, emergencies — still demands human judgment in staffing decisions." },
          { title: "Patient education personalization", desc: "AI can generate customized discharge instructions and health education materials at appropriate reading levels, but nurses must still assess patient understanding and adapt teaching to individual needs." },
        ],
        humanEssential: [
          { title: "Bedside clinical judgment", desc: "Recognizing that a patient 'just doesn't look right,' interpreting subtle changes in skin color, breathing, or mental status, and making split-second triage decisions requires human intuition built from years of clinical experience." },
          { title: "Patient advocacy and communication", desc: "Speaking up for patients who can't advocate for themselves, navigating family dynamics, translating complex medical information into understandable language, and providing comfort during terrifying moments is irreplaceably human." },
          { title: "Hands-on clinical procedures", desc: "IV insertions, wound care, catheterizations, patient repositioning, emergency resuscitation, and physical assessments require trained human hands, real-time adaptation, and the kind of dexterity robots are decades from matching." },
        ],
        blsData: { salary: "$86,070", employment: "3,175,390", growth: "+6%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "CarePredict", url: "https://www.carepredict.com", desc: "AI-powered patient activity monitoring and early warning system that tracks behavioral patterns and flags risks like falls, UTIs, and depression before clinical symptoms appear. Essential for nurses in long-term care and home health settings." },
          { name: "Eko Health", url: "https://www.ekohealth.com", desc: "AI-enhanced digital stethoscopes and cardiac monitoring platform that detects heart murmurs, atrial fibrillation, and other cardiac abnormalities with cardiologist-level accuracy. Learn to interpret AI-flagged findings alongside your own auscultation." },
          { name: "MagicSchool", url: "https://www.magicschool.ai", desc: "AI toolkit for nurse educators that generates case studies, NCLEX-style practice questions, clinical scenarios, and training materials in minutes. Invaluable for preceptors, clinical instructors, and nurses pursuing advanced degrees." },
        ],
        skills: [
          { text: "Interpret AI-generated patient risk scores and early warning alerts, knowing when to act and when to monitor", linked: "CarePredict" },
          { text: "Use AI-enhanced cardiac monitoring to screen for heart conditions and validate findings with clinical assessment", linked: "Eko Health" },
          { text: "Create AI-generated training materials and case studies for student nurses and new hires", linked: "MagicSchool" },
          { text: "Navigate AI-powered EHR systems to document care efficiently and reduce charting time" },
          { text: "Evaluate AI clinical decision support recommendations critically — understanding their evidence basis and limitations" },
        ],
        resources: [
          { title: "ANA — AI and Nursing Position Statement", url: "https://www.nursingworld.org" },
          { title: "Journal of Nursing Scholarship — AI Special Issue", url: "https://sigmapubs.onlinelibrary.wiley.com/journal/15475069" },
        ],
        faqs: [
          { q: "Will AI replace nurses?", a: "No — and it's not even close. Nursing requires physical procedures, real-time clinical judgment, emotional support, and patient advocacy that AI cannot perform. With a projected shortage of over 200,000 nurses by 2030, AI is being deployed to make existing nurses more efficient, not to replace them. The bigger threat to nursing isn't automation — it's burnout and understaffing." },
          { q: "How is AI being used in nursing right now?", a: "AI is primarily used in three areas: continuous patient monitoring (detecting deterioration before it becomes critical), clinical documentation (reducing charting burden through voice-to-text and auto-generated notes), and decision support (flagging drug interactions, suggesting evidence-based interventions, and predicting patient risks). None of these replace the nurse — they give nurses better information faster." },
          { q: "What AI skills should nurses learn?", a: "Focus on understanding how to interpret AI-generated alerts and risk scores, using AI-powered EHR features efficiently, and critically evaluating AI recommendations against your clinical judgment. You don't need to code — you need to be a smart consumer of AI tools and an advocate for their ethical use in patient care." },
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
        verdict: "Partially — routine bookkeeping and compliance work is being automated at speed. But CPAs who evolve into strategic advisors, complex tax planners, and trusted business counselors are more valuable than ever. The Big Four have each invested billions in AI for a reason.",
        summary: "Bookkeeping and routine accounting are heavily automated. Strategic advisory, complex tax planning, and audit judgment remain human-driven — but the bar for 'human-worthy' work is rising fast.",
        keyInsight: "The Big Four accounting firms have each invested billions in AI. The message is clear: adapt or be left behind. The accountants who thrive will be advisors, not number-crunchers.",
        aiMastered: [
          { title: "Transaction categorization and reconciliation", desc: "AI auto-categorizes bank transactions, matches invoices to payments, and reconciles accounts with near-perfect accuracy — work that used to consume hours of every accountant's day." },
          { title: "Financial statement preparation", desc: "AI generates balance sheets, income statements, and cash flow reports from structured data, applying formatting and disclosure requirements automatically." },
          { title: "Routine compliance filings", desc: "AI prepares standard tax forms, sales tax returns, and regulatory filings from client data — handling the repetitive compliance work that used to be entry-level accountant bread and butter." },
        ],
        aiImproving: [
          { title: "Anomaly detection in financial data", desc: "AI flags unusual transactions, potential fraud patterns, and accounting errors with increasing accuracy, but distinguishing true anomalies from legitimate business activity still requires human context." },
          { title: "Tax optimization recommendations", desc: "AI can suggest common tax strategies based on client profiles, but complex multi-entity structures, cross-border planning, and creative tax strategies require human expertise and judgment." },
          { title: "Audit risk assessment", desc: "AI scores audit risk across client portfolios and identifies high-risk areas, but determining the appropriate audit response and exercising professional skepticism remains a human skill." },
        ],
        humanEssential: [
          { title: "Strategic business advisory", desc: "Advising clients on business structure, growth strategy, cash flow management, and financial decision-making requires understanding the full context of a client's business and personal situation." },
          { title: "Complex tax planning", desc: "Multi-entity structures, estate planning, M&A tax implications, and international tax strategy require creative problem-solving and deep expertise that AI cannot replicate." },
          { title: "Professional judgment and ethics", desc: "Determining materiality, exercising professional skepticism, navigating ethical gray areas, and standing behind opinions with personal liability are irreducibly human responsibilities." },
        ],
        blsData: { salary: "$79,880", employment: "1,538,400", growth: "+4%", growthLabel: "As fast as average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Vic.ai", url: "https://www.vic.ai", desc: "Autonomous accounting platform that uses AI to process invoices, categorize transactions, and automate AP workflows. Learn to configure its AI rules and review its confidence scores for maximum efficiency." },
          { name: "MindBridge", url: "https://www.mindbridge.ai", desc: "AI auditing platform that analyzes entire general ledgers to detect anomalies, errors, and fraud risk. Master its risk scoring to prioritize audit attention where it matters most." },
          { name: "Blue Dot", url: "https://www.bluedotcorp.com", desc: "AI-powered tax compliance platform that monitors transactions for tax implications in real time. Use it to automate tax determination and stay ahead of regulatory changes." },
          { name: "Botkeeper", url: "https://www.botkeeper.com", desc: "AI-powered bookkeeping platform that automates transaction categorization, reconciliation, and financial reporting. Learn to oversee its output and focus your time on advisory work." },
        ],
        skills: [
          { text: "Configure and oversee AI-powered bookkeeping systems, reviewing output for accuracy rather than doing manual entry", linked: "Botkeeper" },
          { text: "Use AI anomaly detection to identify audit risks and fraud patterns across entire datasets", linked: "MindBridge" },
          { text: "Leverage AI tax compliance tools to monitor real-time tax implications across jurisdictions", linked: "Blue Dot" },
          { text: "Automate accounts payable workflows and train AI systems on client-specific categorization rules", linked: "Vic.ai" },
          { text: "Develop strategic advisory skills that complement AI automation — the work AI can't do" },
          { text: "Communicate complex financial insights to non-financial stakeholders clearly and persuasively" },
        ],
        resources: [
          { title: "AICPA — AI Resources for CPAs", url: "https://www.aicpa-cima.com/topic/technology" },
          { title: "Journal of Accountancy — AI Coverage", url: "https://www.journalofaccountancy.com" },
        ],
        faqs: [
          { q: "Will AI replace accountants and CPAs?", a: "AI is replacing routine accounting tasks — data entry, transaction categorization, standard tax prep, and basic financial reporting. But CPAs who focus on strategic advisory, complex tax planning, and audit judgment are more in demand than ever. The profession isn't disappearing; it's splitting into automatable commodity work and high-value advisory work." },
          { q: "Is accounting still a good career with AI?", a: "Yes, but the path is changing. Entry-level roles focused on data entry and basic bookkeeping are shrinking. The growing opportunities are in advisory services, complex tax strategy, forensic accounting, and AI-augmented audit. Students should focus on analytical thinking and client relationship skills alongside technical accounting." },
          { q: "What accounting tasks can AI do right now?", a: "AI handles transaction categorization (90%+ accuracy), bank reconciliation, invoice processing, standard tax return preparation, financial statement generation, and compliance filing. It's also increasingly capable at anomaly detection and basic audit procedures. The work left for humans is judgment, strategy, and client relationships." },
        ]},
      { id: "financial-analyst", title: "Financial Analyst", risk: 40, augment: 92,
        verdict: "Not yet — AI supercharges the analytical grunt work, but the analysts who combine domain expertise with AI tools deliver exponentially more value. The spreadsheet jockey is dying; the insight architect is thriving.",
        summary: "AI supercharges financial modeling, forecasting, and data analysis. Analysts who combine domain expertise with AI tools deliver exponentially more value. The role is shifting from building models to interpreting them and telling the story.",
        keyInsight: "AI doesn't replace the analyst — it replaces the spreadsheet grind, letting analysts focus on insight and strategy. The best analysts now spend 80% of their time on analysis, not data preparation.",
        aiMastered: [
          { title: "Data gathering and cleaning", desc: "AI automatically pulls financial data from multiple sources, normalizes formats, handles missing values, and creates analysis-ready datasets — eliminating the 'data janitor' work that consumed 60% of analyst time." },
          { title: "Standard financial modeling", desc: "AI generates DCF models, comparable company analyses, and financial projections from templates and historical data — producing in minutes what used to take analysts hours of Excel work." },
          { title: "Earnings and filing summarization", desc: "AI reads and summarizes 10-K filings, earnings call transcripts, and analyst reports in seconds — extracting key metrics, guidance changes, and risk factors without manual review." },
        ],
        aiImproving: [
          { title: "Scenario analysis and stress testing", desc: "AI can run thousands of scenarios across financial models, but defining which scenarios matter, what assumptions are realistic, and interpreting the implications for business decisions still requires human judgment." },
          { title: "Market sentiment analysis", desc: "AI analyzes news flow, social media, and alternative data to gauge market sentiment, but separating signal from noise in real-time markets requires human pattern recognition and experience." },
          { title: "Investment thesis development", desc: "AI can surface data points and trends, but constructing a compelling, differentiated investment thesis that accounts for competitive dynamics and strategic context remains a human skill." },
        ],
        humanEssential: [
          { title: "Strategic insight and storytelling", desc: "Translating data into actionable recommendations, presenting findings to executives, and building narratives that drive decisions requires the communication and persuasion skills that define top analysts." },
          { title: "Relationship-driven intelligence", desc: "The best analysts build networks of industry contacts, attend conferences, and develop proprietary insights through human relationships that no database can replicate." },
          { title: "Judgment under uncertainty", desc: "When the model says one thing and your gut says another — knowing when to trust the data vs. when to override it — is the experience-built judgment that separates great analysts from good ones." },
        ],
        blsData: { salary: "$99,890", employment: "332,500", growth: "+8%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "AlphaSense", url: "https://www.alpha-sense.com", desc: "AI-powered market intelligence platform that searches earnings calls, SEC filings, broker research, and news in real time. Master its smart search and sentiment features to surface insights competitors miss." },
          { name: "Kensho (S&P Global)", url: "https://www.kensho.com", desc: "AI analytics platform for financial institutions that automates data extraction, document processing, and market analysis. Learn to use its NLP tools to process unstructured financial data at scale." },
          { name: "Domo", url: "https://www.domo.com", desc: "AI-powered business intelligence platform that creates real-time dashboards from multiple data sources. Build automated reporting workflows that update stakeholders without manual intervention." },
        ],
        skills: [
          { text: "Use AI-powered market intelligence to surface insights from earnings calls, filings, and news faster than competitors", linked: "AlphaSense" },
          { text: "Automate data extraction and processing from unstructured financial documents at scale", linked: "Kensho (S&P Global)" },
          { text: "Build real-time BI dashboards that replace static reports with live, interactive analytics", linked: "Domo" },
          { text: "Develop the storytelling and presentation skills that turn AI-generated data into executive decisions" },
          { text: "Apply machine learning techniques to forecasting, risk assessment, and scenario modeling" },
        ],
        resources: [
          { title: "CFA Institute — AI in Investment Management", url: "https://www.cfainstitute.org" },
          { title: "Wall Street Prep — Financial Modeling with AI", url: "https://www.wallstreetprep.com" },
        ],
        faqs: [
          { q: "Will AI replace financial analysts?", a: "AI is replacing the data-gathering and model-building parts of the role, but amplifying the strategic and interpretive parts. Analysts who only build spreadsheets are at risk. Analysts who use AI to do the grunt work and focus on insight, storytelling, and client relationships are more valuable than ever." },
          { q: "What skills do financial analysts need in the AI era?", a: "Data visualization and storytelling, AI tool proficiency (especially market intelligence platforms), Python or SQL for working with AI outputs, and strong communication skills. The technical bar is lower (AI builds the models), but the strategic bar is higher (you need to know what the models mean)." },
          { q: "Is the CFA still worth it with AI?", a: "Yes — arguably more so. The CFA curriculum is evolving to include AI and data science, and the credential signals the analytical rigor and ethical foundation that differentiate human analysts. AI handles the mechanics; the CFA validates the judgment." },
        ]},
      { id: "bookkeeper", title: "Bookkeeper", risk: 82, augment: 50,
        verdict: "Yes — bookkeeping is one of the professions most disrupted by AI. QuickBooks and Xero auto-categorize over 90% of transactions. The manual data-entry bookkeeper role is vanishing fast. Survivors are pivoting to advisory, controller-lite, and AI tool management roles.",
        summary: "AI handles transaction categorization, bank reconciliation, and invoice processing with near-perfect accuracy. Bookkeepers who don't upskill face the highest displacement risk in finance. Those who pivot to advisory and AI oversight roles can still thrive.",
        keyInsight: "QuickBooks and Xero now auto-categorize over 90% of transactions. The manual data-entry bookkeeper role is vanishing fast — but the need for someone to oversee AI accuracy and advise small businesses isn't going away.",
        aiMastered: [
          { title: "Transaction categorization", desc: "AI reads bank feeds and automatically categorizes transactions with 90%+ accuracy — learning from corrections to improve over time. The core daily task of traditional bookkeeping is now automated." },
          { title: "Bank reconciliation", desc: "AI matches bank transactions to accounting records automatically, flagging only exceptions for human review — reducing a multi-hour weekly task to minutes of exception handling." },
          { title: "Invoice processing and AP automation", desc: "AI reads invoices (even handwritten ones), extracts key data, matches to purchase orders, and queues for payment — eliminating the manual data entry that defined entry-level bookkeeping." },
        ],
        aiImproving: [
          { title: "Complex categorization and accruals", desc: "AI handles straightforward transactions well but still struggles with unusual items, split transactions, accrual adjustments, and industry-specific categorization rules that require accounting knowledge." },
          { title: "Client communication and follow-up", desc: "AI can send automated reminders for missing documents, but the relationship management, judgment calls, and trust-building with small business clients remain human skills." },
          { title: "Financial insight generation", desc: "AI dashboards surface trends and anomalies, but explaining what they mean and recommending actions requires understanding the client's business context and goals." },
        ],
        humanEssential: [
          { title: "AI quality control and exception handling", desc: "Someone must review AI categorizations, investigate exceptions, correct errors, and ensure the books are actually accurate. This oversight role is becoming the modern bookkeeper's primary function." },
          { title: "Small business advisory", desc: "Small business owners need someone to explain their numbers, help with cash flow planning, and provide financial guidance. Bookkeepers who become trusted advisors have a durable role." },
          { title: "System setup and customization", desc: "Configuring accounting software, setting up chart of accounts, integrating payment systems, and customizing AI rules for each client's business requires human expertise and client understanding." },
        ],
        blsData: { salary: "$47,440", employment: "1,482,000", growth: "-6%", growthLabel: "Declining", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "QuickBooks AI", url: "https://quickbooks.intuit.com", desc: "AI-powered small business accounting platform with automated bank feeds, smart categorization, and cash flow forecasting. Master its automation rules and AI suggestions to manage more clients with less manual effort." },
          { name: "Xero", url: "https://www.xero.com", desc: "Cloud accounting platform with AI-powered bank reconciliation, invoice matching, and real-time financial dashboards. Learn to configure its automation for different client types and industries." },
          { name: "Dext", url: "https://dext.com", desc: "AI-powered receipt and invoice data capture that extracts financial data from photos, PDFs, and emails. Use it to eliminate manual data entry and create a paperless document workflow." },
          { name: "Hubdoc", url: "https://www.hubdoc.com", desc: "Automated document collection and publishing platform that fetches financial documents from banks, utilities, and suppliers. Set it up to auto-feed source documents into your accounting system." },
        ],
        skills: [
          { text: "Configure AI automation rules in cloud accounting platforms to handle 90%+ of transactions automatically", linked: "QuickBooks AI" },
          { text: "Manage multi-client cloud accounting workflows with AI-powered reconciliation and reporting", linked: "Xero" },
          { text: "Eliminate manual data entry by deploying AI receipt and invoice capture across client workflows", linked: "Dext" },
          { text: "Automate document collection so source documents flow into accounting systems without manual uploads", linked: "Hubdoc" },
          { text: "Develop advisory skills — cash flow coaching, financial planning, business insights — that AI can't provide" },
          { text: "Position yourself as the quality-control layer that ensures AI-processed books are actually accurate" },
        ],
        resources: [
          { title: "Intuit — Future of Bookkeeping", url: "https://quickbooks.intuit.com" },
          { title: "Bookkeepers Alliance — AI Transition Guide", url: "https://www.bookkeepersalliance.co.uk" },
        ],
        faqs: [
          { q: "Is bookkeeping a dying profession because of AI?", a: "Traditional data-entry bookkeeping is declining fast (-6% projected). But the need for financial accuracy, AI oversight, and small business advisory isn't disappearing — it's evolving. Bookkeepers who pivot to 'cloud accounting advisor' or 'controller-lite' roles with AI tool fluency have a viable career path." },
          { q: "What should bookkeepers learn to stay relevant?", a: "Cloud accounting platforms (QuickBooks Online, Xero), AI automation tools (Dext, Hubdoc), and advisory skills. The bookkeeper of the future manages AI systems, handles exceptions, and provides financial guidance to small business owners — not manual data entry." },
          { q: "Can QuickBooks AI do everything a bookkeeper does?", a: "Not yet — but it's close for simple businesses. QuickBooks auto-categorizes 90%+ of transactions, reconciles banks, and generates financial statements. Where it falls short is complex categorizations, industry-specific rules, multi-entity structures, and the advisory relationship that small businesses need." },
        ]},
      { id: "tax-preparer", title: "Tax Preparer", risk: 72, augment: 60,
        verdict: "Mostly — AI tax software handles 80% of individual returns without human intervention. The remaining 20% — complex multi-entity, cross-border, and estate tax scenarios — is where the real value lives. Simple return preparers face severe disruption; complex tax strategists are safe.",
        summary: "AI tax software handles standard returns end-to-end. Complex multi-entity, cross-border, and estate tax planning still demands human expertise and judgment. The profession is splitting into commodity prep (automated) and strategic planning (human).",
        keyInsight: "TurboTax and H&R Block's AI can now handle 80% of individual returns without human intervention. The remaining 20% is where the real value lives — and the real money.",
        aiMastered: [
          { title: "Standard individual return preparation", desc: "AI guides taxpayers through W-2, 1099, and standard deduction returns with interview-style questions, auto-populating forms and checking for errors — handling most individual returns without a preparer." },
          { title: "Tax code lookup and compliance checking", desc: "AI instantly cross-references returns against current tax code, catches common errors, identifies missed deductions, and ensures compliance with federal and state requirements." },
          { title: "Document extraction and data entry", desc: "AI reads W-2s, 1099s, K-1s, and other tax documents from photos or PDFs, extracting data and populating returns automatically — eliminating the manual data entry that defined seasonal tax work." },
        ],
        aiImproving: [
          { title: "Multi-state and multi-entity tax optimization", desc: "AI can handle individual multi-state returns, but optimizing tax positions across multiple entities, states, and filing strategies still requires human knowledge of entity structuring and tax elections." },
          { title: "Audit response and IRS correspondence", desc: "AI can draft initial responses to IRS notices, but navigating an audit, negotiating with revenue agents, and developing a defense strategy requires human judgment and advocacy." },
          { title: "Life-event tax planning", desc: "AI can flag tax implications of marriages, divorces, home sales, and business starts, but proactive planning around these events — timing decisions, structuring transactions — requires human expertise." },
        ],
        humanEssential: [
          { title: "Complex tax scenario planning", desc: "Multi-entity structures, international tax treaties, estate and gift tax planning, and creative tax strategies for high-net-worth clients require expertise, creativity, and judgment AI cannot replicate." },
          { title: "Client advisory and tax strategy", desc: "Understanding a client's full financial picture, recommending tax-efficient strategies throughout the year, and building long-term advisory relationships go far beyond return preparation." },
          { title: "Representation before tax authorities", desc: "Representing clients in audits, appeals, and collections matters requires negotiation skills, procedural knowledge, and the human judgment to know when to fight and when to settle." },
        ],
        blsData: { salary: "$48,250", employment: "85,200", growth: "-5%", growthLabel: "Declining", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "TurboTax AI", url: "https://turbotax.intuit.com", desc: "AI-guided consumer tax preparation that handles interview-based return completion, deduction optimization, and error checking. Understand how it works to advise clients on when DIY is sufficient vs. when they need professional help." },
          { name: "Thomson Reuters ONESOURCE", url: "https://tax.thomsonreuters.com", desc: "Enterprise AI-powered tax platform for corporate compliance, provision, and planning across jurisdictions. Master its workflow automation to handle complex multi-entity tax scenarios efficiently." },
          { name: "Blue Dot", url: "https://www.bluedotcorp.com", desc: "AI tax compliance and reporting platform that monitors transactions for tax implications in real time. Use it to provide proactive tax advisory instead of reactive year-end preparation." },
          { name: "Avalara", url: "https://www.avalara.com", desc: "Automated tax compliance platform handling sales tax, VAT, and excise tax calculations across thousands of jurisdictions. Learn to implement it for business clients to automate indirect tax compliance." },
        ],
        skills: [
          { text: "Know when AI tax software is sufficient and when clients need professional guidance — become the trusted advisor", linked: "TurboTax AI" },
          { text: "Manage complex multi-entity corporate tax compliance using enterprise AI platforms", linked: "Thomson Reuters ONESOURCE" },
          { text: "Provide proactive, year-round tax advisory using real-time AI transaction monitoring", linked: "Blue Dot" },
          { text: "Implement automated indirect tax compliance for business clients across jurisdictions", linked: "Avalara" },
          { text: "Develop expertise in complex tax scenarios — international, estate, M&A — where AI falls short" },
          { text: "Build year-round advisory relationships instead of seasonal transactional ones" },
        ],
        resources: [
          { title: "AICPA — Tax Section AI Resources", url: "https://www.aicpa-cima.com/topic/tax" },
          { title: "Tax Foundation — AI and Tax Policy", url: "https://taxfoundation.org" },
        ],
        faqs: [
          { q: "Will TurboTax replace tax preparers?", a: "For simple returns — it already has. TurboTax handles W-2, standard deduction, and basic investment income returns with minimal errors. But complex situations — rental properties, business income, multi-state filing, stock options, international income — still benefit enormously from professional expertise. The profession is splitting in two." },
          { q: "Is tax preparation a dying career?", a: "Simple return preparation is declining (-5% projected). But complex tax strategy and advisory work is growing. Tax professionals who focus on planning (not just compliance), specialize in complex scenarios, and build advisory relationships have strong career prospects despite AI automation of basic returns." },
          { q: "What tax specialties are most AI-resistant?", a: "International tax, estate and trust tax, M&A tax advisory, and representation before tax authorities. These require deep expertise, creative structuring, and human judgment that AI is far from replicating. Specialists in these areas command premium fees and face minimal AI disruption." },
        ]},
      { id: "auditor", title: "Auditor", risk: 38, augment: 88,
        verdict: "Not yet — AI transforms audit from sampling to full-population analysis, giving auditors superhuman pattern detection. But professional skepticism, judgment calls on materiality, and the irreplaceable credibility of a human signature on an audit opinion keep auditors essential.",
        summary: "AI transforms audit from sampling to full-population analysis. Auditors gain superhuman pattern detection while retaining irreplaceable professional judgment and skepticism. The role is shifting from data-gatherer to judgment-maker.",
        keyInsight: "AI can analyze 100% of transactions instead of samples. Auditors who leverage this deliver dramatically more value than those stuck in traditional methods — and catch fraud that sampling would miss.",
        aiMastered: [
          { title: "Full-population transaction testing", desc: "AI analyzes every single transaction in a general ledger — not just samples — flagging anomalies, duplicates, and patterns that statistical sampling would miss entirely." },
          { title: "Document matching and verification", desc: "AI matches invoices to purchase orders to receiving reports automatically, tests three-way matches at scale, and flags discrepancies for auditor review — eliminating hours of manual vouching." },
          { title: "Workpaper generation and documentation", desc: "AI auto-generates audit workpapers from testing results, populating templates with findings, samples tested, and conclusions — dramatically reducing the documentation burden." },
        ],
        aiImproving: [
          { title: "Fraud detection and forensic analysis", desc: "AI identifies statistical anomalies and patterns consistent with fraud (Benford's Law violations, round-number patterns, timing anomalies), but determining intent and building a fraud case requires human investigation and judgment." },
          { title: "Risk assessment across complex entities", desc: "AI scores risk across business units, accounts, and assertion levels, but understanding the business context that drives risk — management incentives, industry pressures, related party dynamics — requires human insight." },
          { title: "Accounting estimate evaluation", desc: "AI can benchmark estimates against historical data and peer comparisons, but evaluating management's assumptions, methodologies, and potential bias in complex estimates requires professional skepticism." },
        ],
        humanEssential: [
          { title: "Professional skepticism and judgment", desc: "The auditor's core value is the ability to question management representations, assess the reasonableness of estimates, and exercise judgment on materiality — responsibilities that carry personal legal liability." },
          { title: "Audit opinion and attestation", desc: "Signing an audit opinion puts a human's professional reputation and legal exposure on the line. The credibility of financial reporting depends on human attestation that AI cannot provide." },
          { title: "Client relationship and communication", desc: "Discussing sensitive findings with audit committees, negotiating adjustments with management, and communicating complex accounting issues to non-accountants requires diplomacy, credibility, and trust." },
        ],
        blsData: { salary: "$83,910", employment: "1,538,400", growth: "+4%", growthLabel: "As fast as average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "MindBridge", url: "https://www.mindbridge.ai", desc: "AI-powered audit analytics platform that analyzes entire general ledgers for anomalies, fraud risk, and errors using statistical and machine learning models. Learn to interpret its risk scores and integrate AI findings into your audit methodology." },
          { name: "CaseWare IDEA", url: "https://www.caseware.com", desc: "Data analytics platform for audit professionals that enables full-population testing, stratification, and statistical sampling. Master its scripting capabilities to build reusable audit analytics for recurring engagements." },
          { name: "Diligent", url: "https://www.diligent.com", desc: "AI-powered audit management platform connecting risk assessment, workpaper management, and reporting in one workflow. Use it to streamline audit execution and demonstrate comprehensive risk coverage." },
          { name: "AuditBoard", url: "https://www.auditboard.com", desc: "Connected risk management and audit platform that centralizes SOX compliance, internal audit, and risk assessment. Leverage its AI features to automate control testing and focus human attention on high-risk areas." },
        ],
        skills: [
          { text: "Use AI analytics to test full transaction populations and identify anomalies that sampling would miss", linked: "MindBridge" },
          { text: "Build reusable data analytics scripts for recurring audit procedures and full-population testing", linked: "CaseWare IDEA" },
          { text: "Manage audit workflows end-to-end with AI-powered platforms that connect risk to testing to reporting", linked: "Diligent" },
          { text: "Automate control testing and SOX compliance documentation with connected risk platforms", linked: "AuditBoard" },
          { text: "Sharpen professional skepticism — the human judgment that gives an audit opinion its credibility" },
          { text: "Communicate complex audit findings to boards and audit committees with clarity and confidence" },
        ],
        resources: [
          { title: "PCAOB — Technology and Innovation", url: "https://pcaobus.org" },
          { title: "IIA — AI in Internal Audit", url: "https://www.theiia.org" },
        ],
        faqs: [
          { q: "Will AI replace auditors?", a: "No — but it's fundamentally changing what auditors do. AI handles the data-intensive testing work (transaction analysis, document matching, workpaper generation), freeing auditors to focus on judgment, skepticism, and communication. The audit opinion still requires a human signature and carries personal legal liability. AI makes auditors more effective, not obsolete." },
          { q: "How is AI changing the audit profession?", a: "The biggest shift is from sampling to full-population analysis. Instead of testing 25 transactions out of 100,000, AI analyzes all 100,000 and flags the anomalies for human review. This catches more issues, reduces audit risk, and shifts the auditor's role from data-gatherer to judgment-maker." },
          { q: "What should aspiring auditors learn about AI?", a: "Data analytics skills are now essential — learn to work with tools like MindBridge and CaseWare IDEA. Understand how AI risk scoring works and its limitations. But don't neglect the human fundamentals: professional skepticism, communication, and the judgment that defines audit quality." },
        ]},
      { id: "investment-banker", title: "Investment Banker", risk: 30, augment: 90,
        verdict: "Not the senior bankers — but junior roles are being compressed hard. AI accelerates deal sourcing, due diligence, and financial modeling, replacing much of what first-year analysts do. Relationship management, negotiation, and strategic judgment at the top remain deeply human.",
        summary: "AI accelerates deal sourcing, due diligence, and financial modeling. Relationship management, negotiation, and strategic judgment keep humans essential at the senior level — but junior tasks are being automated at speed.",
        keyInsight: "Junior banker tasks (building pitch books, comps, models) are being automated. The survivors will be those who combine AI speed with human deal instincts — and the path from junior to senior is getting steeper.",
        aiMastered: [
          { title: "Financial modeling and comparable analysis", desc: "AI generates DCF models, trading comps, and transaction comps from financial data in minutes — work that used to keep junior analysts at their desks until 2am building spreadsheets." },
          { title: "Pitch book and presentation generation", desc: "AI creates polished pitch book slides from deal data, market statistics, and company information — automating the formatting and data-population work that consumed junior banker nights and weekends." },
          { title: "Market screening and deal sourcing", desc: "AI scans thousands of companies against acquisition criteria, identifies potential targets, and generates preliminary screening reports — compressing weeks of associate-level research into hours." },
        ],
        aiImproving: [
          { title: "Due diligence analysis", desc: "AI can process data rooms, extract key contract terms, and flag risk provisions, but assessing the strategic implications of findings and knowing which risks are deal-breakers requires human judgment." },
          { title: "Valuation narrative construction", desc: "AI generates valuation ranges from models, but constructing the narrative that justifies a specific price — and defending it in negotiations — requires understanding the buyer's strategic motivations and the seller's pressure points." },
          { title: "Market timing and deal structuring", desc: "AI analyzes market conditions and suggests optimal timing, but structuring a deal to satisfy regulatory, tax, governance, and stakeholder requirements simultaneously is a creative human exercise." },
        ],
        humanEssential: [
          { title: "Relationship management and trust", desc: "CEOs hire bankers they trust with their company's most consequential decisions. Building and maintaining these relationships over years requires human presence, empathy, and credibility that AI cannot provide." },
          { title: "Negotiation and deal closing", desc: "Sitting across the table in a high-stakes negotiation, reading the room, making strategic concessions, and closing a billion-dollar deal under time pressure is an irreducibly human performance." },
          { title: "Strategic advisory and judgment", desc: "Advising a board on whether to sell, merge, or stay independent — weighing financial, strategic, cultural, and personal factors — requires the holistic judgment and experience that defines senior bankers." },
        ],
        blsData: { salary: "$178,000", employment: "68,500", growth: "+7%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics / Wall Street Oasis, 2024" },
        tools: [
          { name: "Dealogic", url: "https://www.dealogic.com", desc: "AI-powered investment banking analytics platform that tracks deal flow, league tables, and market activity globally. Master its screening tools to identify deal opportunities and benchmark transactions." },
          { name: "Tegus", url: "https://www.tegus.com", desc: "AI-driven expert network and research platform that provides searchable transcripts of expert interviews across industries. Use it to build industry conviction and due diligence insights faster than traditional research." },
          { name: "Visible Alpha", url: "https://visiblealpha.com", desc: "AI-powered consensus and estimate analytics that reveals what the market expects at a granular line-item level. Leverage it to identify mispriced companies and build more compelling valuation arguments." },
          { name: "Sourcescrub", url: "https://www.sourcescrub.com", desc: "AI deal sourcing platform for private markets that identifies acquisition targets from web data, events, and company signals. Configure its alerts to surface actionable deal opportunities before competitors." },
        ],
        skills: [
          { text: "Use AI deal analytics to identify opportunities, benchmark transactions, and build market context faster", linked: "Dealogic" },
          { text: "Accelerate due diligence with AI-powered expert research and searchable interview transcripts", linked: "Tegus" },
          { text: "Build differentiated valuation arguments using granular AI consensus and estimate data", linked: "Visible Alpha" },
          { text: "Source private market deals proactively with AI-powered target identification before competitors", linked: "Sourcescrub" },
          { text: "Develop the relationship and negotiation skills that define senior bankers — AI handles the analysis, you close the deal" },
        ],
        resources: [
          { title: "Wall Street Oasis — AI in Banking", url: "https://www.wallstreetoasis.com" },
          { title: "McKinsey — AI in Capital Markets", url: "https://www.mckinsey.com/industries/financial-services" },
        ],
        faqs: [
          { q: "Will AI replace investment bankers?", a: "AI is replacing much of what junior bankers do — financial modeling, pitch book creation, market screening, and data room analysis. But senior banking is fundamentally about relationships, negotiation, and strategic advice to CEOs and boards. Those skills remain deeply human. The career path is getting steeper: fewer juniors, same number of senior deal-makers." },
          { q: "Is investment banking still worth pursuing as a career?", a: "Yes, but enter with open eyes. The traditional analyst grind of 100-hour weeks building models is being compressed by AI. The path to success now requires mastering AI tools early while developing the relationship and judgment skills that matter at the senior level. Banks are hiring fewer analysts but paying them more." },
          { q: "How are top banks using AI right now?", a: "Goldman Sachs, JPMorgan, and Morgan Stanley all have major AI initiatives. Common use cases include automated financial modeling, AI-powered deal sourcing, natural language processing of legal documents for due diligence, and AI-generated pitch materials. The banks investing most in AI are gaining competitive advantages in deal execution speed." },
        ]},
      { id: "compliance-officer-finance", title: "Compliance Officer (Finance)", risk: 35, augment: 85,
        verdict: "Not the role itself — but the daily work is transforming fast. AI monitors millions of transactions in real-time and reduces false positives by up to 70%. Compliance officers who master RegTech shift from manual checking to strategic risk management and policy interpretation.",
        summary: "AI monitors transactions for regulatory violations in real-time across millions of data points. Compliance officers shift from manual checking to strategic risk management and policy interpretation. RegTech AI is the most important skill in modern compliance.",
        keyInsight: "RegTech AI reduces false positives by up to 70%, freeing compliance teams to focus on genuine risks instead of drowning in alerts. The compliance officers who thrive are strategists, not checkers.",
        aiMastered: [
          { title: "Transaction monitoring and screening", desc: "AI screens millions of transactions per second against sanctions lists, PEP databases, and suspicious activity patterns — processing volume that would require entire departments of human reviewers to match." },
          { title: "KYC and customer due diligence", desc: "AI automates identity verification, beneficial ownership mapping, and ongoing customer risk scoring — compressing onboarding that used to take days into hours while maintaining regulatory standards." },
          { title: "Regulatory change tracking", desc: "AI continuously monitors thousands of regulatory sources across jurisdictions, mapping new rules to specific business obligations and flagging required policy updates automatically." },
        ],
        aiImproving: [
          { title: "Suspicious activity investigation", desc: "AI triages and prioritizes compliance alerts with improving accuracy, but investigating complex suspicious activity — understanding the business context, determining intent, and deciding whether to file a SAR — requires human judgment." },
          { title: "Cross-border regulatory analysis", desc: "AI can flag potential conflicts between jurisdictions, but navigating the nuances of cross-border compliance — where rules conflict or overlap — requires human expertise in regulatory frameworks." },
          { title: "Model risk and AI governance", desc: "As financial institutions deploy more AI models, monitoring those models for bias, drift, and regulatory compliance is an emerging challenge that requires human oversight and governance frameworks." },
        ],
        humanEssential: [
          { title: "Regulatory interpretation in gray areas", desc: "Regulations are written in ambiguous language. Deciding whether a novel financial product or business practice violates the spirit of a rule requires judgment, experience, and understanding of regulatory intent." },
          { title: "Regulator relationship management", desc: "Responding to examination findings, negotiating consent orders, and building trust with regulators requires diplomacy, credibility, and the ability to represent the institution's position persuasively." },
          { title: "Building compliance culture", desc: "Training employees, convincing business leaders to follow costly rules, and creating an ethical culture across an organization requires influence, leadership, and credibility that no algorithm provides." },
        ],
        blsData: { salary: "$75,670", employment: "357,800", growth: "+5%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "ComplyAdvantage", url: "https://complyadvantage.com", desc: "AI-driven financial crime detection platform that screens transactions, customers, and payments against global sanctions, PEP lists, and adverse media in real time. Learn to tune its risk models to minimize false positives while maintaining detection quality." },
          { name: "Chainalysis", url: "https://www.chainalysis.com", desc: "Blockchain analytics and crypto compliance platform that traces cryptocurrency transactions, identifies illicit activity, and supports regulatory investigations. Essential as digital assets become a larger compliance concern." },
          { name: "Hummingbird", url: "https://hummingbird.co", desc: "AI-powered BSA/AML compliance platform that streamlines case management, SAR filing, and regulatory reporting. Master its workflow automation to handle increasing alert volumes without adding headcount." },
          { name: "Ascent RegTech", url: "https://www.ascentregtech.com", desc: "AI regulatory change management platform that maps new rules to your specific business obligations automatically. Use it to stay ahead of regulatory changes instead of scrambling to react." },
        ],
        skills: [
          { text: "Tune AI transaction monitoring rules to reduce false positives while maintaining detection quality", linked: "ComplyAdvantage" },
          { text: "Investigate cryptocurrency-related compliance risks using blockchain analytics tools", linked: "Chainalysis" },
          { text: "Streamline AML case management and SAR filing workflows with AI-powered compliance platforms", linked: "Hummingbird" },
          { text: "Map regulatory changes to business obligations proactively using AI regulatory intelligence", linked: "Ascent RegTech" },
          { text: "Develop AI governance expertise — monitoring compliance AI models for bias, drift, and regulatory compliance" },
          { text: "Build relationships with regulators and communicate compliance posture with credibility and confidence" },
        ],
        resources: [
          { title: "ACAMS — AI in AML Compliance", url: "https://www.acams.org" },
          { title: "Thomson Reuters — RegTech Report", url: "https://www.thomsonreuters.com/en/reports/fintech-regtech-and-the-role-of-compliance.html" },
        ],
        faqs: [
          { q: "Will AI replace compliance officers?", a: "No — but it's changing the job dramatically. AI handles the volume work (transaction monitoring, screening, KYC), while compliance officers focus on judgment calls, regulatory interpretation, investigations, and culture-building. Demand for compliance professionals is actually growing as regulations become more complex." },
          { q: "What RegTech tools should compliance officers learn?", a: "Start with your institution's transaction monitoring system, then learn AI-powered sanctions screening (ComplyAdvantage), blockchain analytics (Chainalysis for crypto), and regulatory change management (Ascent). The compliance officer who can configure and optimize these tools is far more valuable than one who reviews alerts manually." },
          { q: "Is compliance a good career in the AI era?", a: "Excellent. Regulatory complexity is increasing, not decreasing. Every new AI system needs compliance oversight. The EU AI Act alone is creating an entirely new compliance specialty. Compliance officers who combine regulatory expertise with RegTech fluency are in high demand and well-compensated." },
        ]},
      { id: "financial-planner", title: "Financial Planner / Advisor", risk: 35, augment: 80,
        verdict: "Partially — robo-advisors handle basic portfolio allocation for mass-market clients. But complex life planning, behavioral coaching, and high-net-worth relationship management remain deeply human. The bar is just higher now: clients expect both AI-powered tools and human wisdom.",
        summary: "Robo-advisors handle basic portfolio allocation and rebalancing. Human advisors thrive in complex life planning, behavioral coaching, and high-net-worth relationship management. The profession is bifurcating: automated for simple, human for complex.",
        keyInsight: "Betterment and Wealthfront manage billions with minimal human intervention. But clients with complex needs still overwhelmingly prefer human advisors — the bar is just higher now.",
        aiMastered: [
          { title: "Portfolio allocation and rebalancing", desc: "AI constructs and maintains diversified portfolios based on risk tolerance, time horizon, and goals — automatically rebalancing, tax-loss harvesting, and optimizing asset location across account types." },
          { title: "Account aggregation and net worth tracking", desc: "AI pulls data from every financial account — banks, brokerages, retirement, real estate — creating a real-time net worth dashboard that used to require hours of manual data collection." },
          { title: "Basic financial plan generation", desc: "AI generates retirement projections, savings recommendations, and insurance needs analyses from client data — producing the quantitative foundation that advisors used to build manually." },
        ],
        aiImproving: [
          { title: "Tax-efficient withdrawal strategies", desc: "AI is getting better at optimizing withdrawal sequences across account types (Roth, traditional, taxable), but complex multi-year Roth conversion strategies and tax-bracket management still benefit from human analysis." },
          { title: "Insurance and estate planning integration", desc: "AI can flag insurance gaps and basic estate planning needs, but integrating complex life insurance structures, irrevocable trusts, and multi-generational wealth transfer strategies requires human expertise." },
          { title: "Scenario planning for life events", desc: "AI runs Monte Carlo simulations for retirement, but modeling the financial impact of career changes, divorces, inheritance, and other life complexity requires human understanding of the client's full situation." },
        ],
        humanEssential: [
          { title: "Behavioral coaching and emotional management", desc: "Talking clients off the ledge during market crashes, preventing panic selling, and helping them stick to long-term plans when emotions run high is the most valuable thing an advisor does — and it's 100% human." },
          { title: "Complex life planning and goals alignment", desc: "Understanding a client's deepest values, helping them define what 'enough' means, and aligning financial strategies with life goals requires empathy, wisdom, and the trust built over years of relationship." },
          { title: "Family dynamics and wealth transitions", desc: "Navigating family disagreements about money, facilitating wealth transfer conversations between generations, and managing the emotional complexity of inheritance requires a human advisor who knows the family." },
        ],
        blsData: { salary: "$99,580", employment: "349,500", growth: "+7%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "RightCapital", url: "https://www.rightcapital.com", desc: "AI-powered financial planning software that generates comprehensive plans with tax optimization, Social Security strategies, and estate planning analysis. Master its scenario modeling to show clients the impact of different decisions." },
          { name: "MoneyGuidePro", url: "https://www.moneyguidepro.com", desc: "Goal-based financial planning platform that translates complex projections into clear, visual client presentations. Use its 'Play Zone' feature to run real-time what-if scenarios during client meetings." },
          { name: "Holistiplan", url: "https://holistiplan.com", desc: "AI-driven tax planning tool that reads tax returns and identifies planning opportunities automatically. Scan every client's return to uncover tax savings that differentiate your advisory value." },
          { name: "Orion", url: "https://www.orion.com", desc: "AI portfolio management and analytics platform with automated rebalancing, billing, and client reporting. Leverage its compliance monitoring and tax-loss harvesting to manage more client assets efficiently." },
        ],
        skills: [
          { text: "Build comprehensive financial plans with AI-powered scenario modeling and tax optimization", linked: "RightCapital" },
          { text: "Run real-time what-if scenarios in client meetings to demonstrate the impact of financial decisions", linked: "MoneyGuidePro" },
          { text: "Scan client tax returns with AI to automatically identify tax planning opportunities", linked: "Holistiplan" },
          { text: "Manage portfolio rebalancing, tax-loss harvesting, and client reporting at scale with AI automation", linked: "Orion" },
          { text: "Master behavioral coaching — the art of keeping clients disciplined when markets and emotions are volatile" },
          { text: "Develop deep expertise in complex planning: multi-generational wealth transfer, business succession, charitable giving" },
        ],
        resources: [
          { title: "CFP Board — Technology Resources", url: "https://www.cfp.net" },
          { title: "Kitces.com — FinTech for Advisors", url: "https://www.kitces.com" },
        ],
        faqs: [
          { q: "Will robo-advisors replace financial advisors?", a: "For basic investment management — they already are. Betterment, Wealthfront, and similar platforms manage portfolios at a fraction of human advisor costs. But financial planning is far more than portfolio management. Complex tax strategy, estate planning, behavioral coaching, and life transition guidance require a human advisor. The profession is bifurcating, not disappearing." },
          { q: "Is becoming a financial advisor a good career?", a: "Yes — but the value proposition is shifting. Advisors who only pick funds and rebalance portfolios are losing to robo-advisors. Advisors who provide comprehensive planning, behavioral coaching, and complex tax/estate strategy are thriving. The CFP credential and fiduciary standard are increasingly the baseline, not the differentiator." },
          { q: "How are the best financial advisors using AI?", a: "Top advisors use AI for plan generation, tax return scanning, portfolio management, and client reporting — automating the quantitative work so they can spend more time on what clients actually value: understanding their goals, coaching them through tough decisions, and providing the human judgment that builds trust." },
        ]},
      { id: "loan-officer", title: "Loan Officer / Underwriter", risk: 65, augment: 65,
        verdict: "Mostly — AI credit scoring and automated underwriting handle standard loan decisions in seconds. The traditional loan officer who takes applications and runs them through a process is being displaced. Survivors evolve from processors to advisors who handle complex commercial lending and relationship-based decisions.",
        summary: "AI credit scoring and automated underwriting handle standard loan decisions in seconds. Complex commercial lending and relationship-based decisions still need human judgment. Loan officers must evolve from processors to advisors.",
        keyInsight: "AI underwriting processes mortgage applications 10x faster than humans. Loan officers must evolve from processors to advisors or face displacement — the application-taker role is disappearing.",
        aiMastered: [
          { title: "Automated credit decisioning", desc: "AI evaluates borrower creditworthiness using hundreds of data points beyond traditional FICO — bank transaction patterns, employment stability, income trajectory — making instant approve/deny decisions on standard loans." },
          { title: "Document verification and fraud detection", desc: "AI reads and verifies income documents, bank statements, and tax returns automatically, flagging inconsistencies and potential fraud with accuracy that exceeds manual review." },
          { title: "Loan pricing and rate optimization", desc: "AI calculates optimal pricing based on risk, market conditions, competition, and borrower profile in real time — ensuring competitive offers that maximize both conversion and profitability." },
        ],
        aiImproving: [
          { title: "Complex income analysis", desc: "AI handles W-2 income well but still struggles with self-employed borrowers, variable compensation, multiple income sources, and non-traditional documentation — situations that require human interpretation." },
          { title: "Property valuation and appraisal review", desc: "AI generates automated valuations and reviews appraisal reports, but unusual properties, local market nuances, and contested valuations still require human assessment and negotiation." },
          { title: "Exception handling and credit overrides", desc: "AI can flag loans that fall outside guidelines, but deciding whether to approve an exception — weighing compensating factors against risk — requires the judgment and accountability of a human underwriter." },
        ],
        humanEssential: [
          { title: "Complex commercial lending", desc: "Evaluating business financials, understanding industry dynamics, assessing management quality, and structuring commercial loans requires relationship-based human judgment that automated systems cannot replicate." },
          { title: "Client advisory and financial guidance", desc: "Guiding borrowers through major financial decisions — explaining options, structuring the right loan product, advising on timing — requires empathy, trust, and the ability to translate financial complexity into clear choices." },
          { title: "Regulatory compliance judgment", desc: "Ensuring fair lending compliance, navigating regulatory gray areas, and making judgment calls on Community Reinvestment Act obligations require human understanding of both the law and the community." },
        ],
        blsData: { salary: "$69,990", employment: "297,400", growth: "-3%", growthLabel: "Declining", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Zest AI", url: "https://www.zest.ai", desc: "AI-powered credit underwriting platform that uses machine learning to assess borrower risk more accurately and equitably than traditional scoring models. Learn how its explainable AI features satisfy fair lending requirements." },
          { name: "Upstart", url: "https://www.upstart.com", desc: "AI lending platform that evaluates borrowers using non-traditional data points — education, employment history, income trajectory — to approve loans traditional models would decline. Understand its approach to expand your lending perspective." },
          { name: "Blend", url: "https://blend.com", desc: "AI-powered mortgage and lending platform that digitizes the entire loan process from application to closing. Master its workflow to deliver faster, more transparent borrower experiences." },
          { name: "Ocrolus", url: "https://www.ocrolus.com", desc: "AI document analysis platform that reads and verifies bank statements, tax returns, and pay stubs for lending decisions. Use it to eliminate manual document review and accelerate time-to-decision." },
        ],
        skills: [
          { text: "Understand how AI credit models work, their limitations, and fair lending implications", linked: "Zest AI" },
          { text: "Evaluate non-traditional borrower data and expanded lending criteria enabled by AI platforms", linked: "Upstart" },
          { text: "Deliver frictionless digital lending experiences from application through closing", linked: "Blend" },
          { text: "Automate document verification to focus human attention on complex income and exception cases", linked: "Ocrolus" },
          { text: "Develop commercial lending and advisory skills — the complex work AI can't automate" },
          { text: "Master fair lending compliance in the context of AI-driven credit decisions" },
        ],
        resources: [
          { title: "MBA — AI in Mortgage Lending", url: "https://www.mba.org" },
          { title: "American Banker — AI in Lending", url: "https://www.americanbanker.com" },
        ],
        faqs: [
          { q: "Will AI replace loan officers?", a: "For standard residential loans — largely yes. AI processes mortgage applications 10x faster with lower error rates. The loan officers who survive are those who handle complex situations (commercial lending, self-employed borrowers, non-standard income) and provide advisory value that automated systems can't." },
          { q: "Is mortgage lending a dying career?", a: "The traditional application-processor role is declining (-3% projected). But complex lending advisory, commercial real estate finance, and relationship-based private banking roles are stable. Loan officers who specialize in complexity and build advisory relationships have durable career prospects." },
          { q: "How does AI lending affect borrowers?", a: "Generally positively — AI expands access to credit by evaluating non-traditional data, reduces approval times from weeks to minutes, and can reduce bias in lending decisions (when properly designed). The main concern is algorithmic fairness: ensuring AI models don't perpetuate or amplify existing disparities." },
        ]},
      { id: "trader", title: "Trader / Quantitative Analyst", risk: 55, augment: 88,
        verdict: "Partially — algorithmic and high-frequency trading are fully AI-driven. Human discretionary traders have been displaced from liquid, well-structured markets. But opportunities remain in illiquid markets, complex derivatives, and event-driven situations where human judgment and relationships still matter.",
        summary: "Algorithmic and high-frequency trading are fully AI-driven. Discretionary traders survive by finding edges in illiquid markets, complex derivatives, and human-sentiment-driven events where machines struggle.",
        keyInsight: "Over 70% of US equity trading volume is now algorithmic. Human traders compete by going where machines struggle — complex, relationship-driven, or novel market situations.",
        aiMastered: [
          { title: "High-frequency and algorithmic execution", desc: "AI executes trades in microseconds, exploiting price inefficiencies across markets faster than any human could perceive — let alone act on. HFT and systematic strategies dominate liquid markets completely." },
          { title: "Market data processing and pattern recognition", desc: "AI processes millions of data points per second — price feeds, order books, news, social media — detecting statistical patterns and correlations that drive systematic trading strategies." },
          { title: "Portfolio risk management and hedging", desc: "AI monitors portfolio exposures in real time, calculates value-at-risk across scenarios, and executes hedging trades automatically — maintaining risk limits 24/7 without human fatigue or error." },
        ],
        aiImproving: [
          { title: "Alternative data analysis", desc: "AI analyzes satellite imagery, credit card data, web traffic, and other alternative datasets to predict company performance, but finding genuinely predictive signals in noisy data still requires human creativity." },
          { title: "Natural language processing of news", desc: "AI reads and reacts to news, earnings, and Fed statements faster than humans, but interpreting second-order effects, political context, and market psychology requires human understanding." },
          { title: "Regime change detection", desc: "AI struggles when market regimes shift — from bull to bear, from low to high volatility. Recognizing that 'this time is different' and adapting strategies accordingly is still a human edge." },
        ],
        humanEssential: [
          { title: "Illiquid and relationship-based markets", desc: "Block trading, distressed debt, private credit, and OTC derivatives markets require human relationships, negotiation skills, and the trust built through repeat dealings that algorithms cannot replicate." },
          { title: "Novel event and crisis judgment", desc: "When unprecedented events occur — pandemics, wars, regulatory shocks — historical data becomes unreliable. Human judgment about how markets will react to truly novel situations remains irreplaceable." },
          { title: "Strategy development and research", desc: "Conceiving new trading strategies, identifying unexploited market inefficiencies, and designing the algorithms themselves requires the creativity and market intuition of experienced quant researchers." },
        ],
        blsData: { salary: "$100,740", employment: "488,600", growth: "+7%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "QuantConnect", url: "https://www.quantconnect.com", desc: "Open-source algorithmic trading platform with backtesting, live trading, and a community of 200K+ quants. Learn to develop, test, and deploy systematic strategies across equities, crypto, and derivatives." },
          { name: "Alpaca", url: "https://alpaca.markets", desc: "API-first trading platform that enables commission-free algorithmic trading for stocks and crypto. Build and test automated strategies programmatically without manual order entry." },
          { name: "Refinitiv (LSEG)", url: "https://www.lseg.com/en/data-analytics", desc: "AI-powered market data and analytics platform covering equities, fixed income, FX, and derivatives globally. Master its data feeds and analytics to build comprehensive market intelligence workflows." },
          { name: "Numerai", url: "https://numer.ai", desc: "AI-powered crowdsourced hedge fund where data scientists build machine learning models on obfuscated financial data. Compete to build the best predictive models and earn cryptocurrency for performance." },
        ],
        skills: [
          { text: "Develop and backtest systematic trading strategies using open-source quant platforms", linked: "QuantConnect" },
          { text: "Build automated trading systems using API-first platforms and programmatic execution", linked: "Alpaca" },
          { text: "Integrate real-time market data feeds and analytics into research and trading workflows", linked: "Refinitiv (LSEG)" },
          { text: "Apply machine learning to financial prediction problems and evaluate model performance rigorously", linked: "Numerai" },
          { text: "Develop expertise in illiquid markets and complex instruments where human judgment retains an edge" },
          { text: "Build the programming skills (Python, R, C++) that are now table stakes for quantitative roles" },
        ],
        resources: [
          { title: "QuantStart — Algorithmic Trading Education", url: "https://www.quantstart.com" },
          { title: "Towards Data Science — Quant Finance", url: "https://towardsdatascience.com" },
        ],
        faqs: [
          { q: "Will AI replace all traders?", a: "It already has in liquid, well-structured markets. Over 70% of US equity volume is algorithmic. But human traders remain essential in illiquid markets (distressed debt, private credit, OTC derivatives), event-driven situations (M&A, activism), and relationship-based trading where trust and negotiation matter." },
          { q: "Is quantitative trading a good career?", a: "If you have strong math, programming, and statistical skills — yes. Quant roles at hedge funds and prop trading firms are among the highest-paying in finance. But the bar is extremely high: you're competing against PhDs in math, physics, and computer science. The edge is increasingly in alternative data, machine learning, and finding markets where AI isn't yet dominant." },
          { q: "What programming languages do traders need?", a: "Python is the lingua franca for research and strategy development. C++ matters for low-latency execution systems. R is still used in statistical research. SQL is essential for working with large datasets. Beyond languages, understanding machine learning frameworks (PyTorch, scikit-learn) and cloud computing is increasingly important." },
        ]},
      { id: "bank-teller", title: "Bank Teller", risk: 78, augment: 30,
        summary: "Yes, steadily — ATMs started the decline decades ago, and mobile banking, digital deposits, and AI-powered customer service are accelerating it. Bank teller employment has dropped 20% in a decade. The remaining tellers who survive are evolving into relationship bankers who cross-sell financial products and handle complex transactions machines can't.",
        keyInsight: "There were 600,000 bank tellers in 2012. By 2024, that number dropped to 450,000. Mobile check deposits alone eliminated millions of daily transactions. The tellers who remain aren't counting cash — they're selling mortgages and investment products.",
        aiChanging: "Mobile banking apps handle 80%+ of routine transactions that once required a teller window. AI chatbots answer account questions 24/7. Cash recycler machines handle deposits and withdrawals automatically. The remaining teller role is shifting from transaction processing to financial advisory and relationship building.",
        blsStats: { medianSalary: "$36,920", totalJobs: "450,100", growth: "-12%", growthLabel: "Declining" },
        aiCapability: {
          mastered: [
            { title: "Routine deposits and withdrawals", desc: "ATMs, mobile deposit apps, and cash recycler machines handle the vast majority of deposits and withdrawals without human involvement. Customers haven't needed a teller for basic transactions in years — and increasingly prefer the convenience of self-service." },
            { title: "Balance inquiries and account information", desc: "Mobile banking apps and AI chatbots provide instant account balances, transaction history, and statement access 24/7. No customer needs to visit a branch or speak to a teller for basic account information anymore." },
          ],
          improving: [
            { title: "New account opening", desc: "Online account opening with AI-powered identity verification is handling an increasing share of new accounts. But complex situations — joint accounts, business accounts, trust accounts — still often require human guidance and document review." },
            { title: "Fraud detection at the counter", desc: "AI flags suspicious transactions in real-time, but experienced tellers still catch social engineering schemes, elder abuse, and in-person fraud signals that algorithms miss — the nervous customer being coached on their phone, the unusual withdrawal pattern." },
          ],
          humanOnly: [
            { title: "Complex financial problem-solving", desc: "When a customer walks in with a deceased spouse's accounts, a garnishment order, or a complicated dispute, no chatbot can navigate the emotional and procedural complexity. These situations require empathy, judgment, and the authority to make exceptions." },
            { title: "Relationship-based financial guidance", desc: "The tellers who thrive are the ones who notice a customer's savings pattern and suggest a CD, who recommend a mortgage pre-approval to a first-time homebuyer, or who connect a small business owner with the right commercial banker. This consultative approach can't be automated." },
          ]
        },
        tools: [
          { name: "nCino", url: "https://www.ncino.com", desc: "AI-powered bank operating system for account opening, loan origination, and client management. The platform that's transforming branch banking from paper-based to digital-first." },
          { name: "Kasisto (KAI)", url: "https://kasisto.com", desc: "AI-powered digital assistant for banking that handles customer queries, account inquiries, and routine transactions. Understand what it automates so you can focus on what it can't." },
          { name: "Alloy", url: "https://www.alloy.com", desc: "AI identity verification and fraud prevention platform used by banks for account opening and transaction monitoring. Know how it works to handle the edge cases it escalates to you." },
        ],
        skills: [
          { text: "Use AI-powered banking platforms to streamline account opening and loan applications for customers", tool: "nCino" },
          { text: "Understand AI customer service tools so you can handle the complex cases they escalate", tool: "Kasisto (KAI)" },
          { text: "Recognize fraud patterns and social engineering that AI detection flags for human review", tool: "Alloy" },
          { text: "Develop consultative selling skills to cross-sell financial products — mortgages, CDs, investment accounts — based on customer needs" },
          { text: "Build the relationship-banking skills that transform you from a transaction processor into a trusted financial advisor" },
        ],
        faq: [
          { q: "Will AI replace bank tellers?", a: "It already is — bank teller employment has declined 20% in a decade. ATMs, mobile banking, and AI chatbots handle the vast majority of routine transactions. But banks still need people for complex problem-solving, relationship building, and consultative sales. The surviving tellers are evolving into 'universal bankers' who do far more than process transactions." },
          { q: "Is bank teller a good career in 2025?", a: "As a long-term career, traditional teller work is declining fast. But as an entry point into banking and financial services, it can be valuable — if you treat it as a stepping stone. Learn the products, build client relationships, get licensed for investments and mortgages, and position yourself for roles in personal banking, lending, or financial advisory." },
          { q: "What's replacing bank tellers?", a: "Mobile banking apps handle deposits and transfers. AI chatbots answer account questions. Interactive Teller Machines (ITMs) provide video-call access to remote bankers. Cash recycler machines process deposits and withdrawals. The branch itself is shrinking — from transaction centers to advisory hubs where fewer, more skilled bankers serve customers with complex needs." },
        ],
        resources: [
          { title: "BLS — Bank Tellers", url: "https://www.bls.gov/ooh/office-and-administrative-support/tellers.htm" },
          { title: "ABA — American Bankers Association", url: "https://www.aba.com" },
          { title: "BAI — Banking Strategies", url: "https://www.bai.org" },
          { title: "The Financial Brand — Branch Transformation", url: "https://thefinancialbrand.com" },
        ],
        related: ["cashier", "receptionist", "loan-officer", "financial-planner"]
      },
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
        verdict: "Partially — AI already writes passable first drafts, product descriptions, and SEO filler. But the writers who craft compelling narratives, develop distinctive brand voices, and think strategically about content are more in-demand than ever.",
        summary: "AI content tools have made first drafts nearly instant. The writers thriving today aren't competing on speed — they're competing on taste, strategy, and the ability to make AI output sound genuinely human. The role has shifted from 'blank page to finished piece' to 'AI editor-in-chief.'",
        keyInsight: "Writers who treat AI as a brainstorming partner and first-draft engine are 3-5x more productive. The competitive advantage is no longer writing speed — it's knowing what to say and why.",
        aiMastered: [
          { title: "First-draft generation", desc: "AI produces competent blog posts, product descriptions, and email copy in seconds — work that used to take writers hours of staring at a blank page." },
          { title: "Content repurposing at scale", desc: "AI transforms a single long-form piece into dozens of social posts, email snippets, and ad variations automatically — multiplying output without multiplying effort." },
          { title: "Grammar and style correction", desc: "AI catches grammatical errors, suggests clarity improvements, and enforces style guides with near-perfect accuracy, making basic proofreading obsolete." },
        ],
        aiImproving: [
          { title: "Maintaining brand voice consistency", desc: "AI can approximate a brand's tone with careful prompting, but still drifts across longer pieces and struggles with the subtle nuances that make a voice feel authentically 'on-brand.'" },
          { title: "Persuasive and emotional writing", desc: "AI produces technically correct copy, but often lacks the emotional punch, rhythm, and surprise that makes writing genuinely persuasive and memorable." },
          { title: "Long-form narrative structure", desc: "AI can outline and draft long-form content, but weaving a compelling narrative arc with tension, payoff, and original insight across 3,000+ words still requires human editorial judgment." },
        ],
        humanEssential: [
          { title: "Content strategy and positioning", desc: "Deciding what to write, for whom, and why — then connecting it to business goals and competitive positioning — requires strategic thinking AI simply doesn't have." },
          { title: "Original reporting and interviewing", desc: "Talking to real humans, extracting surprising quotes, and synthesizing first-hand information into original stories is something AI cannot do at all." },
          { title: "Cultural nuance and brand identity", desc: "Understanding how a phrase lands differently across audiences, knowing when humor works vs. backfires, and building a voice that feels genuinely human are irreplaceably human skills." },
        ],
        blsData: { salary: "$73,150", employment: "151,200", growth: "+4%", growthLabel: "As fast as average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Jasper", url: "https://www.jasper.ai", desc: "AI content platform purpose-built for marketing teams that generates blog posts, ad copy, and social content in your brand voice. Master its campaign workflows and brand memory features to produce on-brand content at scale." },
          { name: "Writer", url: "https://writer.com", desc: "Enterprise-grade AI writing platform with built-in brand guardrails, style guides, and terminology enforcement. Learn to configure its rules engine so AI output matches your company's voice without constant manual editing." },
          { name: "Copy.ai", url: "https://www.copy.ai", desc: "AI-powered go-to-market content workflow that automates prospecting emails, social posts, and sales enablement copy. Use its workflow builder to create repeatable content pipelines that run with minimal oversight." },
        ],
        skills: [
          { text: "Write detailed prompts with tone, audience, and intent context that produce publication-ready AI drafts", linked: "Jasper" },
          { text: "Configure brand voice guardrails and style rules that keep AI output consistent across teams", linked: "Writer" },
          { text: "Build automated content workflows that turn one brief into multi-channel assets", linked: "Copy.ai" },
          { text: "Edit AI-generated content to add original insight, emotional resonance, and human specificity" },
          { text: "Develop content strategies that leverage AI for volume while preserving quality and differentiation" },
          { text: "Audit AI content for factual accuracy, plagiarism risk, and brand safety before publication" },
        ],
        resources: [
          { title: "Content Marketing Institute — AI Resources", url: "https://contentmarketinginstitute.com" },
          { title: "The Content Strategist by Contently", url: "https://the-content-strategist.com" },
        ],
        faqs: [
          { q: "Will AI replace copywriters and content writers?", a: "AI is already replacing some commodity writing work — think generic product descriptions, boilerplate emails, and basic SEO content. But writers who bring strategic thinking, original voice, and genuine subject expertise are more valuable than ever because they can now produce 3-5x more high-quality work with AI assistance." },
          { q: "Is copywriting still a good career in 2025?", a: "Yes, but the job description is changing. Pure 'write 10 blog posts a week' roles are shrinking. The growing roles are content strategists, brand voice architects, and AI-augmented editors who can direct AI tools to produce great content at scale while maintaining quality and originality." },
          { q: "What writing skills are hardest for AI to replicate?", a: "Original reporting, interviewing real people, understanding cultural nuance, crafting genuinely persuasive narratives, and developing a distinctive brand voice. AI is great at pattern-matching existing content but struggles to create truly original perspectives or emotional resonance." },
        ]},
      { id: "video-editor", title: "Video Editor / Producer", risk: 42, augment: 86,
        verdict: "Not yet — AI handles the tedious parts of video production brilliantly, but storytelling, pacing, and emotional timing still require a human eye. Editors who embrace AI tools are becoming one-person production studios.",
        summary: "AI handles rough cuts, color grading, subtitles, and B-roll generation. What used to take a team a week can now be done by one editor with AI in a day. The role is evolving from technical executor to storytelling director who orchestrates AI-powered tools.",
        keyInsight: "Speed is the new superpower. Editors who master AI workflows deliver broadcast-quality work in hours, not days — and command premium rates for their storytelling judgment, not their button-clicking speed.",
        aiMastered: [
          { title: "Auto-captioning and subtitles", desc: "AI generates accurate subtitles in dozens of languages in real-time, including speaker identification and timing — eliminating hours of tedious manual transcription work." },
          { title: "Color correction and grading", desc: "AI analyzes footage and applies professional color grades automatically, matching shots across scenes and lighting conditions that used to require an experienced colorist." },
          { title: "Background noise removal", desc: "AI isolates dialogue from noisy environments with stunning accuracy — wind, traffic, crowd noise — work that previously required expensive sound studios and manual audio cleanup." },
        ],
        aiImproving: [
          { title: "Narrative pacing and story structure", desc: "AI can identify key moments and generate rough cuts, but still lacks the intuitive sense of rhythm, tension, and emotional beats that makes an edit feel right." },
          { title: "B-roll generation and selection", desc: "AI generates synthetic B-roll footage from text prompts, but it still looks slightly uncanny for critical shots and can't match the specificity of well-chosen real footage." },
          { title: "Multi-camera editing", desc: "AI can auto-switch between camera angles based on audio cues, but complex multi-cam scenarios with specific narrative intent still need a human editor's judgment." },
        ],
        humanEssential: [
          { title: "Storytelling and emotional arc", desc: "Knowing which take has the real emotion, where to let a moment breathe, and how to structure a narrative that moves people — this is the craft AI can't replicate." },
          { title: "Client collaboration and creative direction", desc: "Interpreting a director's vision, navigating ambiguous feedback like 'make it feel more epic,' and managing creative relationships require human communication skills." },
          { title: "Cultural awareness and sensitivity", desc: "Understanding how editing choices — music selection, pacing, imagery — land across different audiences and cultural contexts requires human judgment and empathy." },
        ],
        blsData: { salary: "$63,520", employment: "118,200", growth: "+7%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Runway", url: "https://runwayml.com", desc: "AI-native video editing suite that generates, extends, and transforms video from text and image prompts. Master its Gen-2 video generation and inpainting tools to create footage and effects that would otherwise require expensive shoots or VFX teams." },
          { name: "Descript", url: "https://www.descript.com", desc: "Revolutionary text-based video editor where you edit video by editing the transcript — delete a word and the video cuts accordingly. Learn its AI filler-word removal, eye contact correction, and overdub features to edit 5x faster than traditional timelines." },
          { name: "CapCut (AI features)", url: "https://www.capcut.com", desc: "AI-powered editor with auto-captions, smart templates, and one-click effects that are particularly strong for social-first video content. Use its AI features to rapidly produce platform-optimized short-form content at scale." },
        ],
        skills: [
          { text: "Generate and composite AI video footage into real projects for B-roll, effects, and scene extensions", linked: "Runway" },
          { text: "Edit video through transcript manipulation to cut editing time by 80% on dialogue-heavy content", linked: "Descript" },
          { text: "Rapidly produce platform-optimized short-form content using AI auto-captions and smart templates", linked: "CapCut (AI features)" },
          { text: "Maintain storytelling craft — pacing, emotional timing, and narrative arc — that AI cannot replicate" },
          { text: "Build hybrid workflows that combine AI-generated elements with real footage seamlessly" },
        ],
        resources: [
          { title: "Frame.io — Future of Post-Production", url: "https://frame.io" },
          { title: "No Film School — AI Filmmaking", url: "https://nofilmschool.com" },
        ],
        faqs: [
          { q: "Will AI replace video editors?", a: "AI is replacing the tedious parts of editing — transcription, color matching, rough cuts — but not the creative judgment. The best editors now use AI to handle mechanical work so they can focus on storytelling, pacing, and emotion. Think of it as going from manual transmission to automatic: you still need to know where to drive." },
          { q: "What video editing skills should I learn in 2025?", a: "Master AI-native tools like Runway and Descript alongside traditional NLEs. Focus on storytelling, narrative structure, and client communication — the skills AI can't automate. Editors who can produce broadcast-quality work solo using AI tools are the most in-demand hires right now." },
          { q: "Can AI edit a full video by itself?", a: "AI can assemble a rough cut from transcripts, add captions, correct color, and remove dead air automatically. But a polished final product — one with emotional pacing, intentional music choices, and a narrative arc — still requires human creative direction. AI is the assistant editor, not the editor." },
        ]},
      { id: "social-media-manager", title: "Social Media Manager", risk: 52, augment: 88,
        verdict: "Partially — AI generates posts, schedules content, and analyzes engagement effortlessly. But brand voice, community building, real-time cultural relevance, and crisis management still need a human at the helm.",
        summary: "AI can post for you. It can't be you. Social media managers who leverage AI for content generation and analytics while focusing their energy on community, authenticity, and cultural awareness are becoming more valuable — not less.",
        keyInsight: "AI can post for you. It can't be you. Authenticity and real-time cultural awareness are the moat. The managers who win treat AI as their content engine while they focus on being the brand's human voice.",
        aiMastered: [
          { title: "Content scheduling and optimization", desc: "AI analyzes historical engagement data and automatically schedules posts at optimal times across platforms — removing the guesswork from publishing calendars entirely." },
          { title: "Performance analytics and reporting", desc: "AI generates comprehensive engagement reports, identifies trending content patterns, and surfaces actionable insights from millions of data points in real-time." },
          { title: "Content repurposing and adaptation", desc: "AI transforms a single piece of content into platform-specific formats — resizing images, adjusting copy length, adding hashtags — for every social channel simultaneously." },
        ],
        aiImproving: [
          { title: "On-brand content generation", desc: "AI can generate social posts that roughly match a brand's tone, but still struggles with the subtle wit, timing, and personality that make accounts feel authentically human and worth following." },
          { title: "Trend identification and newsjacking", desc: "AI detects trending topics quickly, but knowing which trends are worth engaging with — and how to do it in a way that feels natural, not cringe — requires human cultural instinct." },
          { title: "Sentiment analysis in context", desc: "AI categorizes comments as positive, negative, or neutral, but misses sarcasm, insider community humor, and the subtle signals that a minor complaint is about to become a PR crisis." },
        ],
        humanEssential: [
          { title: "Community building and engagement", desc: "Creating genuine connections with followers, fostering community conversations, and making people feel heard requires empathy and authenticity that AI cannot fake." },
          { title: "Crisis management", desc: "When a brand faces backlash, knowing what to say, when to say it, and when to stay silent requires human judgment, emotional intelligence, and an understanding of public sentiment." },
          { title: "Cultural relevance and real-time response", desc: "Jumping on a meme at the right moment, knowing which cultural conversations to join or avoid, and maintaining relevance requires a human who lives and breathes the internet." },
        ],
        blsData: { salary: "$68,230", employment: "408,200", growth: "+6%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Sprout Social", url: "https://sproutsocial.com", desc: "AI-powered social media management platform with smart inbox, automated responses, and advanced analytics across all major platforms. Master its sentiment analysis and competitive benchmarking to turn raw social data into actionable strategy." },
          { name: "Hootsuite", url: "https://www.hootsuite.com", desc: "AI-enhanced scheduling and analytics platform that recommends optimal posting times and auto-generates content suggestions based on trending topics. Use its OwlyWriter AI to draft posts and its analytics to prove ROI to stakeholders." },
          { name: "Lately", url: "https://www.lately.ai", desc: "AI that ingests long-form content — blogs, podcasts, webinars — and automatically generates dozens of on-brand social posts from each piece. Learn to train its AI model on your brand's best-performing content to maximize engagement." },
          { name: "Brandwatch", url: "https://www.brandwatch.com", desc: "AI-powered social listening and consumer intelligence platform that monitors brand mentions, competitor activity, and emerging trends across the entire internet. Use its AI-driven alerts to spot potential crises before they go viral." },
        ],
        skills: [
          { text: "Use AI analytics to identify high-performing content patterns and optimize publishing strategy", linked: "Sprout Social" },
          { text: "Automate content scheduling with AI-recommended timing while maintaining authentic engagement", linked: "Hootsuite" },
          { text: "Build AI-powered content repurposing pipelines that turn one asset into dozens of social posts", linked: "Lately" },
          { text: "Monitor brand sentiment and competitive landscape in real-time to inform strategy", linked: "Brandwatch" },
          { text: "Develop an authentic brand voice that AI can approximate but only you can truly embody" },
          { text: "Build crisis management playbooks that blend AI monitoring with human judgment" },
        ],
        resources: [
          { title: "Social Media Examiner — AI Tools", url: "https://www.socialmediaexaminer.com" },
          { title: "Sprout Social Insights — Social Media Trends", url: "https://sproutsocial.com/insights/" },
        ],
        faqs: [
          { q: "Will AI replace social media managers?", a: "AI will automate the mechanical parts — scheduling, basic analytics, initial content drafts — but social media management is fundamentally about building human relationships at scale. The managers who thrive will use AI to handle volume while they focus on community, voice, and real-time cultural relevance." },
          { q: "What social media skills are most AI-proof?", a: "Community management, crisis communication, cultural awareness, and authentic brand voice development. AI can generate a post, but it can't read a room, sense when a joke will land, or navigate a brand crisis with empathy. These human skills are becoming more valuable as AI handles the rest." },
          { q: "How are social media managers using AI right now?", a: "Most are using AI for content ideation, first-draft generation, auto-scheduling, caption writing, hashtag research, and analytics reporting. The best managers treat AI as a content production engine that frees them to spend more time on strategy, community engagement, and creative campaigns." },
        ]},
      { id: "seo-specialist", title: "SEO Specialist", risk: 58, augment: 90,
        verdict: "Significantly at risk — AI automates technical audits, generates optimized content, and predicts rankings. But Google's AI-powered search results are rewriting the rules entirely, and specialists who understand AI search are indispensable.",
        summary: "AI generates optimized content, automates technical audits, and predicts ranking changes. But the biggest disruption isn't AI tools — it's AI-generated search results like Google's AI Overviews, which are fundamentally changing what SEO even means.",
        keyInsight: "Google's AI-generated search results are changing the game. SEO now means optimizing for AI summaries, not just blue links. The specialists who understand this shift will own the next decade.",
        aiMastered: [
          { title: "Technical SEO audits", desc: "AI crawls entire sites in minutes, identifying broken links, missing meta tags, duplicate content, crawl errors, and page speed issues — work that used to require manual review of thousands of pages." },
          { title: "Keyword research and clustering", desc: "AI analyzes search volumes, intent patterns, and competitive gaps to generate comprehensive keyword strategies in minutes instead of days of spreadsheet work." },
          { title: "Content optimization scoring", desc: "AI compares your content against top-ranking pages and provides specific recommendations for headings, word count, related terms, and readability — making on-page optimization nearly automatic." },
        ],
        aiImproving: [
          { title: "Search intent interpretation", desc: "AI categorizes search intent into informational, transactional, and navigational buckets, but misses the nuanced sub-intents and the shifting user expectations that separate page-one results from page-two." },
          { title: "Content strategy and topic authority", desc: "AI suggests related topics and content clusters, but building genuine topical authority — deciding what to write, in what order, and how to interlink — still requires human strategic thinking." },
          { title: "Link building and digital PR", desc: "AI can identify link prospects and draft outreach emails, but building genuine relationships with publishers and earning high-authority links requires human networking and creative pitching." },
        ],
        humanEssential: [
          { title: "AI search optimization strategy", desc: "Understanding how Google's AI Overviews, Bing Copilot, and other AI search products select and present information — and optimizing to appear in those results — is a new, deeply strategic human skill." },
          { title: "Business alignment and ROI communication", desc: "Translating SEO data into business impact, prioritizing efforts based on revenue potential, and communicating strategy to executives who don't understand search requires human business acumen." },
          { title: "Adapting to algorithm changes", desc: "When Google rolls out a major update and rankings shift overnight, diagnosing the cause, adjusting strategy, and recovering rankings requires experience, intuition, and creative problem-solving." },
        ],
        blsData: { salary: "$78,060", employment: "82,400", growth: "+8%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Surfer SEO", url: "https://surferseo.com", desc: "AI-powered content optimization tool that analyzes top-ranking pages and gives you a real-time content score as you write. Master its content editor and SERP analyzer to produce articles that consistently rank on the first page." },
          { name: "Clearscope", url: "https://www.clearscope.io", desc: "AI content optimization platform that uses natural language processing to identify the exact terms and topics your content needs to compete for any keyword. Learn to use its content grading to hit A++ optimization scores before publishing." },
          { name: "Semrush", url: "https://www.semrush.com", desc: "Comprehensive AI-enhanced SEO platform covering keyword research, competitive analysis, site audits, rank tracking, and content marketing in one suite. Master its AI Writing Assistant and Position Tracking to build and monitor a full SEO strategy." },
          { name: "Frase", url: "https://www.frase.io", desc: "AI-powered content brief generator that researches top-ranking pages and creates comprehensive outlines in minutes. Use its AI writer and optimizer together to go from keyword to optimized article in a fraction of the traditional time." },
        ],
        skills: [
          { text: "Use AI content optimization to consistently produce articles that score A+ and rank on the first page", linked: "Surfer SEO" },
          { text: "Build comprehensive content briefs with AI-powered competitive analysis in minutes instead of hours", linked: "Frase" },
          { text: "Run full-scale technical audits and competitive gap analyses using AI-powered SEO suites", linked: "Semrush" },
          { text: "Optimize content for AI-generated search results (Google AI Overviews, Bing Copilot) — not just traditional blue links" },
          { text: "Build programmatic SEO strategies that combine AI-generated content with human editorial oversight at scale" },
          { text: "Translate SEO metrics into revenue impact and communicate strategy to non-technical stakeholders" },
        ],
        resources: [
          { title: "Search Engine Journal — AI and SEO", url: "https://www.searchenginejournal.com" },
          { title: "Ahrefs Blog — SEO Research and Guides", url: "https://ahrefs.com/blog" },
        ],
        faqs: [
          { q: "Will AI replace SEO specialists?", a: "AI is automating much of the technical and content optimization work that SEO specialists used to do manually. But the rise of AI-powered search results (like Google's AI Overviews) has actually created a new, more strategic form of SEO. Specialists who understand how AI search selects and presents information are more valuable than ever." },
          { q: "Is SEO dead because of AI search results?", a: "Not dead — but fundamentally changed. AI-generated search results mean fewer clicks on traditional blue links for informational queries, but more sophisticated optimization strategies for commercial and transactional content. SEO specialists who adapt to this new landscape will thrive; those who only know traditional keyword stuffing will not." },
          { q: "What SEO skills matter most in 2025?", a: "Understanding AI search behavior, technical SEO automation, content strategy at scale, and the ability to build topical authority. The mechanical skills (keyword research, meta tag optimization) are being automated, so the human skills (strategy, analysis, business alignment) are what differentiate top SEO professionals." },
        ]},
      { id: "photographer", title: "Photographer", risk: 40, augment: 78,
        verdict: "Not entirely — AI generates photorealistic images that are killing stock photography, but capturing real moments, building client trust, and directing live shoots remain fundamentally human. Commercial and event photographers are safer than you'd think.",
        summary: "AI generates photorealistic images and enhances real photos dramatically. Stock photography is being decimated. But capturing authentic moments, directing live shoots, and building client relationships remain human territory that AI literally cannot enter.",
        keyInsight: "Stock photography is being decimated by AI generation. Commercial and editorial photographers survive by offering what AI can't: real moments, real trust, and real presence behind the camera.",
        aiMastered: [
          { title: "Batch photo editing and color grading", desc: "AI learns your editing style from a few examples and applies it to thousands of images automatically — turning days of post-processing into minutes." },
          { title: "Photo culling and selection", desc: "AI scans thousands of event photos and identifies the sharpest, best-composed, most emotionally compelling images — reducing hours of manual review to seconds." },
          { title: "Noise reduction and upscaling", desc: "AI removes noise from high-ISO shots and upscales images with remarkable detail preservation — rescuing photos that would have been unusable with traditional tools." },
        ],
        aiImproving: [
          { title: "Photorealistic image generation", desc: "AI generates stunning synthetic images from text prompts that rival professional photography for commercial use, but still has tells — unnatural hands, inconsistent reflections, and a certain 'AI smoothness' trained eyes can spot." },
          { title: "AI-assisted composition suggestions", desc: "AI can analyze a scene and suggest framing adjustments, but it lacks the intuitive sense of moment and visual storytelling that makes a photograph truly powerful." },
          { title: "Advanced retouching and compositing", desc: "AI handles skin retouching, sky replacement, and object removal impressively, but complex creative compositing with artistic intent still requires a skilled photographer's eye." },
        ],
        humanEssential: [
          { title: "Being physically present at the moment", desc: "AI cannot attend a wedding, stand on a mountain at sunrise, or be in the room when a CEO needs a portrait. Photography's core value is presence — and that's 100% human." },
          { title: "Directing subjects and building rapport", desc: "Getting authentic expressions from nervous subjects, making people comfortable in front of the camera, and directing group shots requires interpersonal skills AI doesn't have." },
          { title: "Artistic vision and personal style", desc: "Developing a signature look, choosing meaningful compositions, and telling visual stories with emotional depth require creative vision that comes from lived human experience." },
        ],
        blsData: { salary: "$40,760", employment: "64,400", growth: "+5%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Adobe Lightroom AI", url: "https://www.adobe.com/products/photoshop-lightroom.html", desc: "Industry-standard photo editing with powerful AI features including adaptive presets, AI masking, noise reduction, and auto-selection tools. Master its AI-powered masking and Denoise features to cut post-processing time in half while maintaining your creative style." },
          { name: "Topaz Photo AI", url: "https://www.topazlabs.com/topaz-photo-ai", desc: "Dedicated AI enhancement tool that removes noise, sharpens details, and upscales resolution using machine learning trained on millions of photos. Learn to use it as the final step in your workflow to rescue challenging shots and deliver print-quality results from difficult shooting conditions." },
          { name: "Imagen AI", url: "https://www.imagen-ai.com", desc: "AI photo editing assistant that learns your personal editing style and applies it consistently across entire shoots. Train it on your best edits so it handles 80% of post-processing automatically, freeing you to focus on the creative adjustments that matter most." },
          { name: "Narrative Select", url: "https://narrative.so", desc: "AI-powered photo culling tool built specifically for event and wedding photographers that identifies the best images from thousands of shots. Use its AI to reduce a 5,000-photo wedding shoot to your selects in minutes instead of hours." },
        ],
        skills: [
          { text: "Build AI-assisted editing workflows that apply your signature style consistently across thousands of images", linked: "Imagen AI" },
          { text: "Use AI culling to reduce selection time by 90% while maintaining your creative eye for the final picks", linked: "Narrative Select" },
          { text: "Master AI noise reduction and upscaling to rescue challenging shots and expand your usable output", linked: "Topaz Photo AI" },
          { text: "Leverage AI masking and adaptive presets for complex edits that used to require Photoshop layering", linked: "Adobe Lightroom AI" },
          { text: "Understand AI image generation well enough to articulate what real photography offers that AI cannot" },
          { text: "Position your brand around authenticity, presence, and human connection — the un-automatable value" },
        ],
        resources: [
          { title: "PetaPixel — AI Photography News", url: "https://petapixel.com" },
          { title: "Fstoppers — Photography Industry Analysis", url: "https://fstoppers.com" },
        ],
        faqs: [
          { q: "Will AI replace photographers?", a: "AI is replacing stock photographers — AI-generated images are cheaper and faster for generic commercial needs. But event, portrait, editorial, and commercial photographers who need to be physically present and build client relationships are very safe. You can't send an AI to photograph a wedding or a product launch." },
          { q: "Is photography still a viable career with AI?", a: "Absolutely, but the business model is shifting. Stock and generic commercial photography income is declining, while demand for authentic, human-captured imagery is holding steady or growing. Photographers who use AI to speed up editing and culling — while emphasizing their irreplaceable presence and creative eye — are thriving." },
          { q: "How are professional photographers using AI?", a: "Most use AI for post-processing: batch editing, culling thousands of images, noise reduction, and style-consistent editing. Lightroom's AI masking and Imagen AI's style learning are the most popular tools. Some also use AI-generated images as mood boards or composite elements, but the core work remains human-captured." },
        ]},
      { id: "musician-audio", title: "Musician / Audio Producer", risk: 45, augment: 82,
        verdict: "Partially — AI composes background music, masters tracks, and floods streaming platforms with functional audio. But artistic vision, emotional depth, live performance, and genuine cultural relevance remain irreplaceably human.",
        summary: "AI composes background music, masters tracks, and generates sound effects. It's flooding streaming platforms with 'functional' content. But the music that moves people, builds fanbases, and defines cultural moments still comes from human artists with something real to say.",
        keyInsight: "AI music is flooding streaming platforms with 'functional' content. Human artists win by creating work with genuine emotional depth, cultural meaning, and live experiences that AI literally cannot provide.",
        aiMastered: [
          { title: "Audio mastering", desc: "AI mastering engines analyze tracks and apply EQ, compression, stereo widening, and loudness optimization that rivals professional mastering engineers — at a fraction of the cost and in seconds." },
          { title: "Stem separation and isolation", desc: "AI separates mixed audio into individual instruments and vocals with remarkable accuracy — enabling remixes, samples, and production techniques that used to require access to original multitrack recordings." },
          { title: "Background and functional music generation", desc: "AI generates royalty-free background music for podcasts, videos, and corporate content from text prompts — making generic production music practically free and instant." },
        ],
        aiImproving: [
          { title: "Original song composition", desc: "AI can generate full songs with lyrics, melody, and arrangement from text prompts, but the output still sounds derivative — it recombines patterns rather than creating genuinely new musical ideas." },
          { title: "Mixing complex arrangements", desc: "AI mixing tools handle basic tracks well, but dense arrangements with many elements, dynamic range, and intentional imperfections still need a human mixer's ear and artistic intent." },
          { title: "Sound design and synthesis", desc: "AI generates interesting sounds and textures, but crafting a signature sonic palette that defines an artist's identity requires creative experimentation that AI approaches differently than humans." },
        ],
        humanEssential: [
          { title: "Artistic vision and emotional expression", desc: "Writing music that captures genuine human emotion — heartbreak, joy, anger, transcendence — and connects with listeners on a deep level requires lived experience and artistic vulnerability AI cannot possess." },
          { title: "Live performance", desc: "Concerts, DJ sets, and live recording sessions are inherently human experiences. The energy exchange between performer and audience, improvisation, and stage presence are impossible to automate." },
          { title: "Cultural identity and scene building", desc: "Music scenes, genres, and cultural movements emerge from human communities, shared experiences, and social context. AI can imitate genres but cannot create or lead cultural movements." },
        ],
        blsData: { salary: "$49,130", employment: "66,200", growth: "+2%", growthLabel: "Slower than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "LANDR", url: "https://www.landr.com", desc: "AI mastering and distribution platform that analyzes your track's genre and characteristics to apply professional-grade mastering in minutes. Use it for fast, affordable masters on demos and releases, and learn to A/B test its results against reference tracks to train your ear." },
          { name: "Udio", url: "https://www.udio.com", desc: "AI music generation platform that creates full songs with vocals, instruments, and production from text descriptions. Learn to use it for rapid ideation, demo creation, and exploring musical directions you wouldn't have considered — then bring the best ideas into your DAW." },
          { name: "iZotope", url: "https://www.izotope.com", desc: "Industry-standard AI-powered audio production suite with intelligent mixing (Neutron), mastering (Ozone), and vocal processing (Nectar) assistants. Master its AI-guided workflows to get professional-sounding mixes faster, then refine with your own artistic judgment." },
          { name: "Splice", url: "https://splice.com", desc: "AI-assisted sample discovery platform with millions of sounds, plus AI tools for beat creation and sound selection. Use its AI-powered search to find exactly the right samples and loops, dramatically speeding up your production workflow." },
        ],
        skills: [
          { text: "Use AI mastering as a starting point and develop the ear to know when it's good enough vs. when you need a human engineer", linked: "LANDR" },
          { text: "Leverage AI music generation for rapid ideation, demos, and creative exploration without losing your artistic identity", linked: "Udio" },
          { text: "Master AI-assisted mixing workflows to achieve professional-quality sound faster while retaining creative control", linked: "iZotope" },
          { text: "Use AI-powered sample search and beat creation to speed up production without homogenizing your sound", linked: "Splice" },
          { text: "Develop your unique artistic voice and sonic identity — the one thing AI cannot replicate" },
          { text: "Understand AI music copyright and licensing to protect your work and navigate the evolving legal landscape" },
        ],
        resources: [
          { title: "Music Business Worldwide — AI Coverage", url: "https://www.musicbusinessworldwide.com" },
          { title: "Sound on Sound — AI Music Production", url: "https://www.soundonsound.com" },
        ],
        faqs: [
          { q: "Will AI replace musicians and music producers?", a: "AI is replacing some functional music work — background tracks, stock music, jingles — where emotional depth doesn't matter. But artists who create genuinely moving music, build real fanbases, and perform live are safe. Music is fundamentally a human-to-human emotional connection, and AI-generated music lacks the lived experience that makes great art resonate." },
          { q: "Should musicians be worried about AI-generated music?", a: "Be aware, not worried. AI music flooding streaming platforms will devalue generic production music, but it also gives independent artists powerful new tools for production, mastering, and experimentation. Musicians who use AI to augment their creativity — not replace it — will produce more and better work than ever before." },
          { q: "How are music producers using AI in 2025?", a: "Most use AI for mastering (LANDR, iZotope Ozone), sample discovery (Splice), stem separation, and vocal processing. Some use AI generation tools for ideation and demos. The key workflow is: AI handles the technical and tedious parts so the producer can focus on creative decisions, arrangement, and the artistic choices that define their sound." },
        ]},
      { id: "marketing-manager", title: "Marketing Manager / CMO", risk: 25, augment: 88,
        verdict: "No — AI is a massive force multiplier for marketing leaders, not a replacement. CMOs who master AI tools can run campaigns that used to require 10-person teams. Strategy, brand building, and cross-functional leadership remain deeply human.",
        summary: "AI automates campaign optimization, audience targeting, performance analytics, and even creative generation. But strategic brand building, market intuition, cross-functional leadership, and the judgment to know when data is wrong remain the domain of experienced marketing leaders.",
        keyInsight: "CMOs who master AI tools can run campaigns that used to require 10-person teams. The strategic layer is the last to be automated — and it's the layer that determines whether a company wins or loses.",
        aiMastered: [
          { title: "Campaign performance optimization", desc: "AI continuously adjusts ad bids, audience targeting, creative rotation, and budget allocation across channels in real-time — optimizing campaigns far faster than any human media buyer." },
          { title: "Predictive analytics and forecasting", desc: "AI analyzes historical data, market signals, and customer behavior to predict campaign performance, churn risk, and revenue forecasts with increasing accuracy." },
          { title: "Marketing reporting and dashboards", desc: "AI automatically aggregates data from dozens of platforms, generates executive-ready reports, identifies anomalies, and surfaces the insights that matter — eliminating hours of manual spreadsheet work." },
        ],
        aiImproving: [
          { title: "Customer journey mapping", desc: "AI tracks touchpoints across channels and identifies common paths to purchase, but understanding the emotions, motivations, and context behind those paths still requires human customer empathy." },
          { title: "Marketing message and creative generation", desc: "AI generates ad copy, email subject lines, and creative variants at scale, but the breakthrough campaign ideas — the ones that go viral and define brands — still come from human creative insight." },
          { title: "Multi-channel attribution", desc: "AI attribution models are getting smarter, but accurately crediting the right touchpoints in complex B2B buyer journeys with long sales cycles remains an imperfect science." },
        ],
        humanEssential: [
          { title: "Brand strategy and positioning", desc: "Defining what a brand stands for, how it's different, and why people should care requires deep market understanding, competitive instinct, and creative vision that AI cannot generate." },
          { title: "Cross-functional leadership", desc: "Aligning sales, product, finance, and creative teams around a unified go-to-market strategy requires political skill, communication, and leadership that is fundamentally human." },
          { title: "Market intuition and risk-taking", desc: "Knowing when to bet big on an unproven channel, when to zig while competitors zag, and when the data is telling the wrong story — this gut instinct comes from experience AI doesn't have." },
        ],
        blsData: { salary: "$156,580", employment: "354,600", growth: "+6%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "HubSpot AI", url: "https://www.hubspot.com", desc: "All-in-one AI-powered marketing automation and CRM platform that handles email campaigns, lead scoring, content creation, and reporting. Master its AI content assistant and predictive lead scoring to run more personalized campaigns with less manual effort." },
          { name: "Albert AI", url: "https://albert.ai", desc: "Autonomous AI marketing platform that plans, executes, and optimizes digital ad campaigns across channels without human intervention on the tactical level. Learn to set strategic guardrails and creative inputs, then let it autonomously optimize spend and targeting." },
          { name: "Persado", url: "https://www.persado.com", desc: "AI-powered marketing language optimization that generates and tests message variations to find the highest-converting copy for emails, ads, and landing pages. Use its emotion-based AI to discover which language patterns drive action for your specific audience." },
          { name: "6sense", url: "https://6sense.com", desc: "AI-powered account-based marketing platform that identifies in-market buyers using intent signals and predictive analytics. Master its intent data and account scoring to focus your team's efforts on the prospects most likely to buy right now." },
        ],
        skills: [
          { text: "Set strategic goals and guardrails for AI-driven campaigns, then interpret results to guide next moves", linked: "Albert AI" },
          { text: "Use AI-powered CRM and automation to run personalized campaigns that scale without scaling headcount", linked: "HubSpot AI" },
          { text: "Leverage AI language optimization to continuously improve conversion rates across all customer touchpoints", linked: "Persado" },
          { text: "Identify high-intent accounts using AI predictive analytics and focus resources where they'll convert", linked: "6sense" },
          { text: "Build marketing strategies that balance AI-driven efficiency with brand-building creativity" },
          { text: "Communicate AI marketing ROI to the C-suite and board in business terms, not marketing jargon" },
        ],
        resources: [
          { title: "MarTech — AI Marketing Coverage", url: "https://martech.org" },
          { title: "Harvard Business Review — Marketing and AI", url: "https://hbr.org" },
        ],
        faqs: [
          { q: "Will AI replace marketing managers?", a: "No — AI replaces marketing tasks, not marketing leaders. Campaign optimization, media buying, and reporting are being automated, but the strategic decisions — brand positioning, market entry, budget allocation, and cross-functional leadership — require human judgment. Marketing managers who master AI tools will lead smaller, more effective teams." },
          { q: "How is AI changing the CMO role?", a: "AI is making CMOs more data-driven and operationally efficient. Instead of managing large teams doing manual work, modern CMOs set strategy and let AI handle execution and optimization. The role is shifting from 'chief of marketing operations' to 'chief of marketing strategy' — and it's more valuable than ever." },
          { q: "What marketing skills are most AI-resistant?", a: "Brand strategy, cross-functional leadership, market intuition, and creative risk-taking. AI excels at optimizing what exists, but it can't envision a new market position, make a bold creative bet, or inspire a team to rally around a vision. These strategic and human skills are becoming the core of marketing leadership." },
        ]},
      { id: "ux-designer", title: "UX/UI Designer", risk: 35, augment: 90,
        verdict: "No — AI generates wireframes and even full interfaces from prompts, but understanding why users struggle, designing for complex human behavior, and navigating organizational politics remain deeply human. UX designers with AI skills are more productive than ever.",
        summary: "AI generates wireframes, prototypes, and even full interfaces from text descriptions. But understanding user needs, conducting meaningful research, and designing for complex human behavior remain human territory. The designers thriving today use AI to skip the pixel work and focus on the thinking.",
        keyInsight: "AI can generate a UI. It can't understand why a user is frustrated. Empathy-driven design thinking is the enduring differentiator — and AI tools actually give designers more time to do it.",
        aiMastered: [
          { title: "Wireframe and mockup generation", desc: "AI generates complete wireframes and high-fidelity mockups from text descriptions in seconds — work that used to take designers days of careful layout and component selection." },
          { title: "Design system component creation", desc: "AI generates UI components, icon sets, and design tokens that follow established patterns and accessibility standards — accelerating design system development dramatically." },
          { title: "Image and asset generation for prototypes", desc: "AI creates placeholder illustrations, icons, and imagery for prototypes instantly — no more waiting on stock photo searches or illustrator availability." },
        ],
        aiImproving: [
          { title: "User flow and interaction design", desc: "AI can suggest common interaction patterns for standard use cases, but designing novel interactions for complex workflows — where user mental models are unclear — still requires deep human understanding." },
          { title: "Usability testing analysis", desc: "AI can transcribe and tag user testing sessions, but interpreting why users struggle, connecting behavior to underlying needs, and prioritizing design changes requires experienced human judgment." },
          { title: "Responsive and adaptive design", desc: "AI generates layouts for different screen sizes, but handling the nuanced tradeoffs of complex responsive design — what to prioritize, what to hide, how to maintain usability — needs a designer's judgment." },
        ],
        humanEssential: [
          { title: "User research and empathy", desc: "Sitting with real users, observing their frustrations, understanding their unstated needs, and translating those observations into design decisions is the core of UX — and it's entirely human." },
          { title: "Design thinking and problem framing", desc: "The most impactful UX work happens before any pixels are created: defining the right problem to solve, exploring the solution space, and aligning stakeholders around a design direction." },
          { title: "Organizational influence and advocacy", desc: "Convincing product managers, engineers, and executives to invest in better user experience — often against business pressure to ship faster — requires persuasion, political skill, and credibility that AI can't provide." },
        ],
        blsData: { salary: "$85,380", employment: "110,700", growth: "+8%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Figma AI", url: "https://www.figma.com", desc: "Industry-standard design platform with integrated AI features including auto-layout suggestions, component generation, and design-to-code capabilities. Master its AI-powered features to produce production-ready designs faster while maintaining your design system's consistency." },
          { name: "Galileo AI", url: "https://www.usegalileo.ai", desc: "AI tool that generates complete, editable UI designs from natural language descriptions in seconds. Use it to rapidly explore design directions and generate first-draft screens, then refine with your UX expertise in Figma." },
          { name: "Uizard", url: "https://uizard.io", desc: "AI wireframe and mockup generator that turns sketches, screenshots, and text descriptions into editable designs. Learn to use it for rapid prototyping in stakeholder meetings — turning conversation into visual concepts in real-time." },
          { name: "Maze", url: "https://maze.co", desc: "AI-powered user testing and research platform that automates test creation, participant recruitment, and results analysis. Master its AI-driven insights to run more user tests, more often, and make data-backed design decisions faster." },
        ],
        skills: [
          { text: "Use AI to generate wireframes and prototypes rapidly, then apply design thinking to refine them based on user needs", linked: "Galileo AI" },
          { text: "Produce production-ready designs faster by leveraging AI auto-layout and component generation features", linked: "Figma AI" },
          { text: "Turn stakeholder conversations into visual prototypes in real-time using AI mockup generation", linked: "Uizard" },
          { text: "Run continuous, lightweight user testing to validate design decisions with real data, not assumptions", linked: "Maze" },
          { text: "Lead user research that uncovers deep insights AI testing tools can identify but not interpret" },
          { text: "Build and maintain design systems that work seamlessly with AI-generated components" },
        ],
        resources: [
          { title: "Nielsen Norman Group — AI and UX", url: "https://www.nngroup.com" },
          { title: "UX Collective — AI Design Practices", url: "https://uxdesign.cc" },
        ],
        faqs: [
          { q: "Will AI replace UX designers?", a: "AI will replace some of the production work — wireframing, mockup creation, basic prototyping — but not the core of UX design: understanding users, defining problems, and designing for complex human behavior. Designers who use AI to accelerate production work while deepening their research and strategy skills are more valuable than ever." },
          { q: "Is UX design still a good career with AI?", a: "Yes — arguably better than before. AI handles the tedious production work (layout, components, prototyping), freeing designers to focus on the high-value work: user research, design strategy, and stakeholder alignment. Companies need UX designers more, not less, as they build AI-powered products that require careful human-centered design." },
          { q: "What UX skills are most AI-proof?", a: "User research, design thinking, stakeholder management, and the ability to synthesize qualitative insights into design decisions. AI can generate screens but can't sit with a frustrated user and understand why they're struggling. The most AI-proof UX designers are researchers and strategists first, pixel-pushers second." },
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
        verdict: "No — but the role is evolving fast. AutoML tools now do in minutes what used to take a data scientist weeks. The survivors aren't the best model builders — they're the ones who ask the right questions, understand the business, and communicate insights that drive decisions.",
        summary: "AutoML platforms and AI coding assistants have automated routine modeling, feature engineering, and exploratory analysis. Data scientists who thrive are those who combine statistical rigor with business acumen and storytelling — the 'full-stack' data scientist who can go from messy question to boardroom presentation.",
        keyInsight: "The 'full-stack data scientist' — someone who can ask the right question, build the model, AND tell the story — is now the standard. Pure model builders are being replaced by AutoML.",
        aiMastered: [
          { title: "Exploratory data analysis", desc: "AI auto-generates summary statistics, distributions, correlation matrices, and data quality reports in seconds — work that used to consume the first week of any project." },
          { title: "Feature engineering and selection", desc: "AutoML platforms automatically discover, create, and rank features from raw datasets — often finding signal that manual feature engineering misses entirely." },
          { title: "Model selection and hyperparameter tuning", desc: "AI tests hundreds of model architectures and hyperparameter combinations in parallel, converging on optimal configurations faster than any human grid search." },
        ],
        aiImproving: [
          { title: "Data cleaning and preparation", desc: "AI handles common data quality issues — missing values, duplicates, format inconsistencies — but still struggles with domain-specific anomalies, ambiguous labels, and datasets where the definition of 'clean' requires business context." },
          { title: "Insight generation from complex datasets", desc: "AI can surface patterns and anomalies in data, but determining which patterns are meaningful, which are spurious, and which are actionable still requires human domain expertise." },
          { title: "Model monitoring and drift detection", desc: "AI flags when model performance degrades or data distributions shift, but diagnosing why drift is happening and deciding whether to retrain, rebuild, or rethink requires human judgment." },
        ],
        humanEssential: [
          { title: "Problem framing and question design", desc: "Translating a vague business problem — 'why are customers churning?' — into a well-defined analytical question with the right data, metrics, and success criteria is the highest-value skill in data science." },
          { title: "Stakeholder communication and storytelling", desc: "Presenting findings to executives who don't speak statistics, building trust in model outputs, and convincing leadership to act on data-driven recommendations requires human persuasion and empathy." },
          { title: "Ethical AI and bias detection", desc: "Identifying when a model encodes harmful biases, understanding the societal implications of deploying predictions at scale, and making judgment calls about fairness require moral reasoning AI doesn't possess." },
        ],
        blsData: { salary: "$108,020", employment: "202,400", growth: "+36%", growthLabel: "Much faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "AutoML Platforms", url: "https://www.datarobot.com", desc: "DataRobot and similar platforms that automate model building, feature engineering, and deployment. Learn to use AutoML for rapid prototyping and understand when to override its choices with manual modeling." },
          { name: "Open-Source ML Frameworks", url: "https://h2o.ai", desc: "H2O.ai provides open-source machine learning and AI tools for building custom models at scale. Master its AutoML capabilities and learn to combine automated pipelines with hand-tuned approaches." },
          { name: "AI-Powered Data Notebooks", url: "https://hex.tech", desc: "Hex and similar collaborative notebooks with built-in AI that auto-generates SQL queries, Python code, and visualizations from natural language. Use them to accelerate analysis and share reproducible insights with your team." },
        ],
        skills: [
          { text: "Use AutoML platforms to rapidly prototype models, then evaluate and refine their output with statistical rigor", linked: "AutoML Platforms" },
          { text: "Build custom models with open-source frameworks when AutoML defaults aren't sufficient for your problem", linked: "Open-Source ML Frameworks" },
          { text: "Accelerate exploratory analysis using AI-powered notebooks that generate code from natural language prompts", linked: "AI-Powered Data Notebooks" },
          { text: "Frame ambiguous business problems as well-defined analytical questions with measurable success criteria" },
          { text: "Communicate model results and uncertainty to non-technical stakeholders in language they can act on" },
          { text: "Audit models for bias, fairness, and ethical implications before deployment" },
        ],
        resources: [
          { title: "Google — Responsible AI Practices", url: "https://ai.google/responsibility/responsible-ai-practices/" },
          { title: "Towards Data Science — AI/ML Best Practices", url: "https://towardsdatascience.com" },
        ],
        faqs: [
          { q: "Will AutoML replace data scientists?", a: "AutoML replaces the model-building tasks that used to define the role, but not the role itself. Data scientists who only build models are at risk. Those who frame problems, clean messy real-world data, interpret results, and communicate insights to stakeholders are more valuable than ever — because now they can build 10x more models in the same time." },
          { q: "What should aspiring data scientists learn in 2025?", a: "Master the fundamentals — statistics, SQL, Python — but also invest heavily in communication, business acumen, and domain expertise. Learn to use AutoML tools as accelerators, not crutches. The highest-paid data scientists are those who can walk into a boardroom and explain why a model's output matters, not just how it works." },
          { q: "Is a data science degree still worth it?", a: "Yes, but complement it with practical skills. A degree gives you statistical foundations and credibility, but employers increasingly value portfolio projects, Kaggle competitions, and demonstrated ability to solve real business problems. Pair your degree with strong communication skills and domain knowledge in a specific industry." },
        ]},
      { id: "product-manager", title: "Product Manager", risk: 22, augment: 80,
        verdict: "No — AI won't replace product managers, but it's eliminating the busywork that used to define the role. PMs who use AI to automate research synthesis, PRD writing, and data analysis can spend dramatically more time on what actually matters: customer insight, strategy, and cross-functional leadership.",
        summary: "AI automates the grind of product management — synthesizing user research, drafting specs, analyzing usage data, and generating prototypes. But product sense, strategic thinking, and the ability to align engineering, design, and business around a shared vision remain deeply human skills.",
        keyInsight: "AI doesn't replace product sense. It replaces the busywork that keeps PMs from doing deep customer discovery and strategic thinking.",
        aiMastered: [
          { title: "User research synthesis", desc: "AI processes hundreds of interview transcripts, survey responses, and support tickets in minutes — surfacing themes, sentiment patterns, and user pain points that would take a PM weeks to compile manually." },
          { title: "PRD and spec drafting", desc: "AI generates first drafts of product requirement documents, user stories, and acceptance criteria from rough notes — cutting documentation time from hours to minutes." },
          { title: "Competitive analysis and market research", desc: "AI scans competitor websites, app store reviews, press releases, and social media to produce comprehensive competitive landscape reports on demand." },
        ],
        aiImproving: [
          { title: "Usage data analysis and insight extraction", desc: "AI can surface trends in product analytics — feature adoption, funnel drop-offs, cohort behavior — but still struggles to connect data patterns to the 'why' behind user behavior without human context." },
          { title: "Roadmap prioritization", desc: "AI can score features using frameworks like RICE or ICE based on available data, but the strategic judgment of what to build next — balancing customer needs, business goals, and technical debt — requires human decision-making." },
          { title: "Prototype generation", desc: "AI tools generate wireframes and clickable prototypes from text descriptions, but the design intuition to know what users actually need versus what they say they want remains a human strength." },
        ],
        humanEssential: [
          { title: "Customer empathy and product vision", desc: "Sitting with customers, understanding their frustrations, and translating unspoken needs into a product vision that inspires the team — this is the soul of product management and it cannot be automated." },
          { title: "Cross-functional leadership", desc: "Aligning engineering, design, sales, marketing, and executive leadership around a shared product direction requires political savvy, persuasion, and trust-building that AI cannot replicate." },
          { title: "Strategic decision-making under uncertainty", desc: "Deciding to kill a feature, pivot a product, or enter a new market when the data is ambiguous — these high-stakes judgment calls define great PMs and require courage AI doesn't have." },
        ],
        blsData: { salary: "$125,960", employment: "453,800", growth: "+8%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024 (Management Analysts / Product Management)" },
        tools: [
          { name: "AI Research Analysis", url: "https://dovetailapp.com", desc: "Dovetail uses AI to analyze user research at scale — automatically tagging interview transcripts, surfacing themes, and generating insight reports. Master its pattern recognition to accelerate your discovery cycles." },
          { name: "AI Writing and Knowledge Management", url: "https://www.notion.so/product/ai", desc: "Notion AI helps PMs draft PRDs, summarize meeting notes, and organize product knowledge bases. Learn to prompt it effectively for first drafts, then layer in your strategic context and customer insight." },
          { name: "AI Product Prioritization", url: "https://www.productboard.com", desc: "Productboard uses AI to aggregate customer feedback, score feature requests, and surface prioritization insights. Use it to ground your roadmap decisions in quantified customer demand rather than gut feel." },
        ],
        skills: [
          { text: "Synthesize large volumes of user research using AI analysis tools, then validate AI-surfaced themes with direct customer conversations", linked: "AI Research Analysis" },
          { text: "Draft product specs and PRDs with AI assistance, then refine with strategic context and edge cases AI misses", linked: "AI Writing and Knowledge Management" },
          { text: "Use AI-powered prioritization tools to quantify customer demand, then apply strategic judgment for final roadmap decisions", linked: "AI Product Prioritization" },
          { text: "Evaluate whether AI features belong in your product — understanding capabilities, limitations, and user trust implications" },
          { text: "Communicate product strategy and data insights to executives, engineers, and designers in language each group understands" },
        ],
        resources: [
          { title: "Lenny's Newsletter — AI for Product Managers", url: "https://www.lennysnewsletter.com" },
          { title: "Mind the Product — AI in Product Management", url: "https://www.mindtheproduct.com" },
        ],
        faqs: [
          { q: "Will AI replace product managers?", a: "No. AI automates the output of product management — documents, research synthesis, data analysis — but not the judgment. Product management is fundamentally about understanding humans, making strategic bets, and leading cross-functional teams through ambiguity. AI makes PMs faster; it doesn't make them unnecessary." },
          { q: "What skills should product managers develop for the AI era?", a: "Double down on the skills AI can't replicate: deep customer empathy, strategic thinking, cross-functional leadership, and the ability to make decisions with incomplete data. Then layer on AI fluency — learn to use AI research tools, prompt AI for first-draft specs, and evaluate AI features for your own product." },
          { q: "Should PMs learn to code to work with AI?", a: "You don't need to be a software engineer, but understanding how AI models work — their capabilities, limitations, and failure modes — is increasingly essential. PMs who can have informed technical conversations about AI features, data requirements, and model tradeoffs will have a major advantage over those who can't." },
        ]},
      { id: "cybersecurity-analyst", title: "Cybersecurity Analyst", risk: 18, augment: 92,
        verdict: "No — and demand is surging. AI is both the best defense tool and the biggest new threat vector. Cybersecurity analysts who master AI-powered detection and understand AI-driven attacks are among the most in-demand professionals in tech. The attacker-defender arms race guarantees humans stay in the loop.",
        summary: "AI detects threats across millions of events in real time, triages alerts, and automates incident response for known attack patterns. But adversaries also use AI — crafting polymorphic malware, deepfake social engineering, and novel exploits that only creative human defenders can anticipate and counter.",
        keyInsight: "AI handles 95% of threat alerts automatically. The 5% that slip through are the ones that matter most — and they need human creativity, adversarial thinking, and contextual judgment to catch.",
        aiMastered: [
          { title: "Threat detection and alert triage", desc: "AI monitors millions of network events per second, identifies known attack signatures, and auto-triages alerts by severity — reducing the overwhelming noise that used to bury security teams in false positives." },
          { title: "Malware analysis and classification", desc: "AI reverse-engineers malware samples, classifies them by family, and identifies indicators of compromise in seconds — work that used to take analysts hours of manual binary analysis." },
          { title: "Vulnerability scanning and patch prioritization", desc: "AI continuously scans infrastructure for vulnerabilities, cross-references threat intelligence feeds, and ranks patches by exploitability and business impact." },
        ],
        aiImproving: [
          { title: "Anomaly detection in user behavior", desc: "AI flags unusual user behavior — strange login times, abnormal data access patterns, impossible travel — but still generates false positives that require human context about legitimate business reasons for anomalous activity." },
          { title: "Automated incident response", desc: "AI can auto-contain known threats — isolating endpoints, blocking IPs, revoking credentials — but novel attacks and multi-stage intrusions still require human-led investigation and response coordination." },
          { title: "Threat intelligence correlation", desc: "AI correlates data from multiple threat feeds and internal telemetry, but connecting disparate signals into a coherent threat narrative — especially for advanced persistent threats — still requires human analytical thinking." },
        ],
        humanEssential: [
          { title: "Adversarial thinking and red teaming", desc: "Thinking like an attacker — anticipating novel attack vectors, probing defenses for weaknesses, and simulating sophisticated threat actors — requires human creativity that AI cannot replicate." },
          { title: "Incident response leadership", desc: "When a breach is in progress, coordinating the response across IT, legal, communications, and executive leadership requires real-time human judgment, clear communication under pressure, and rapid decision-making." },
          { title: "Security architecture and policy design", desc: "Designing zero-trust architectures, setting security policies that balance protection with usability, and navigating compliance frameworks require strategic thinking and organizational understanding AI lacks." },
        ],
        blsData: { salary: "$120,360", employment: "175,350", growth: "+33%", growthLabel: "Much faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "AI Endpoint Detection", url: "https://www.crowdstrike.com", desc: "CrowdStrike Falcon uses AI to detect and respond to threats across endpoints in real time. Learn to interpret its threat scores, tune detection policies, and use its threat hunting interface to investigate AI-flagged anomalies." },
          { name: "Self-Learning Cyber AI", url: "https://darktrace.com", desc: "Darktrace builds a model of your network's normal behavior and flags deviations autonomously. Master its anomaly visualization and learn to distinguish genuine threats from legitimate business activity in its alerts." },
          { name: "Autonomous Threat Response", url: "https://www.sentinelone.com", desc: "SentinelOne provides AI-powered endpoint protection with autonomous response capabilities. Understand its automated containment actions and know when to let AI respond versus when to investigate manually first." },
          { name: "AI-Driven SIEM", url: "https://www.splunk.com", desc: "Splunk aggregates security data from across your environment and uses AI to surface threats, correlate events, and accelerate investigations. Learn its query language and AI-powered investigation workflows." },
        ],
        skills: [
          { text: "Interpret AI threat detection scores and triage alerts efficiently, separating real threats from false positives", linked: "AI Endpoint Detection" },
          { text: "Analyze network anomalies flagged by self-learning AI and determine whether deviations represent genuine threats", linked: "Self-Learning Cyber AI" },
          { text: "Configure and oversee autonomous response policies, knowing when AI should auto-contain and when humans must lead", linked: "Autonomous Threat Response" },
          { text: "Hunt for threats proactively using AI-powered SIEM queries and correlated intelligence feeds", linked: "AI-Driven SIEM" },
          { text: "Think like an attacker — conduct red team exercises and anticipate novel attack vectors that AI defenses haven't seen" },
          { text: "Lead incident response under pressure, coordinating technical, legal, and executive stakeholders during active breaches" },
        ],
        resources: [
          { title: "SANS Institute — AI Security Resources", url: "https://www.sans.org" },
          { title: "NIST — Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
        ],
        faqs: [
          { q: "Is cybersecurity a good career in the AI era?", a: "One of the best. AI makes attackers more sophisticated, which increases demand for skilled defenders. There are over 500,000 unfilled cybersecurity jobs in the U.S. alone, and AI tools make analysts more effective, not obsolete. Security professionals who master AI-powered defense tools are among the most sought-after in tech." },
          { q: "Will AI replace SOC analysts?", a: "AI is replacing Tier 1 SOC work — the manual alert triage, log review, and known-threat response that used to dominate the role. But this frees analysts to focus on threat hunting, incident response, and the complex investigations that AI can't handle. The role is elevating, not disappearing." },
          { q: "What cybersecurity certifications are most valuable alongside AI skills?", a: "CISSP, CEH, and CompTIA Security+ remain foundational. Layer on cloud security certs (AWS Security Specialty, Azure Security Engineer) and AI-specific training from SANS. The most marketable analysts combine traditional security expertise with hands-on experience using AI-powered detection and response platforms." },
        ]},
      { id: "devops-engineer", title: "DevOps / SRE Engineer", risk: 32, augment: 90,
        verdict: "No — but the role is shifting from manual operations to AI-orchestrated infrastructure. AI handles routine deployments, auto-remediates known incidents, and optimizes resource allocation. DevOps engineers who architect resilient systems and handle the novel failures that AI can't predict are more valuable than ever.",
        summary: "AI automates CI/CD pipelines, monitors systems with superhuman breadth, predicts outages before they happen, and auto-remediates known incidents. But designing resilient architectures, handling cascading failures, and making judgment calls during novel incidents remain deeply human.",
        keyInsight: "AI can auto-remediate known issues. Unknown unknowns — the cascading failures that take down systems at 3am — still need humans who understand the full stack and can think creatively under pressure.",
        aiMastered: [
          { title: "Deployment automation and rollback", desc: "AI-driven CI/CD platforms handle canary deployments, automated rollbacks on error rate spikes, and progressive rollouts — eliminating the manual deploy-and-pray process that used to cause outages." },
          { title: "Log analysis and anomaly detection", desc: "AI processes millions of log lines per second, identifies anomalous patterns, correlates events across services, and surfaces the root cause of issues before humans even notice a problem." },
          { title: "Resource scaling and cost optimization", desc: "AI auto-scales infrastructure based on traffic patterns, right-sizes instances, and identifies wasted resources — handling minute-by-minute optimization decisions that no human could make at that speed." },
        ],
        aiImproving: [
          { title: "Incident prediction and prevention", desc: "AI is getting better at predicting outages from early warning signals — disk fill rates, memory leaks, certificate expirations — but still misses novel failure modes and complex dependency chain breakdowns." },
          { title: "Automated incident remediation", desc: "AI auto-remediates known incident types — restarting services, scaling up resources, rerouting traffic — but novel incidents with no playbook still require human investigation, creativity, and judgment." },
          { title: "Infrastructure as code generation", desc: "AI generates Terraform, Kubernetes manifests, and pipeline configs from natural language, but complex multi-cloud architectures with security, compliance, and cost constraints still need human design." },
        ],
        humanEssential: [
          { title: "System architecture and reliability design", desc: "Designing distributed systems for resilience — choosing replication strategies, setting SLOs, planning disaster recovery, and architecting for graceful degradation — requires deep experience and engineering judgment." },
          { title: "Novel incident response", desc: "When a cascading failure takes down production and the runbook doesn't cover it, the creative debugging, cross-team coordination, and real-time decision-making of experienced SREs is irreplaceable." },
          { title: "Platform strategy and toolchain decisions", desc: "Choosing between cloud providers, evaluating build-vs-buy for platform tools, and designing developer experience workflows that make the whole engineering org productive — these strategic decisions shape organizations." },
        ],
        blsData: { salary: "$127,150", employment: "196,300", growth: "+16%", growthLabel: "Much faster than average", source: "U.S. Bureau of Labor Statistics, 2024 (Software Developers / DevOps)" },
        tools: [
          { name: "AI Incident Management", url: "https://www.pagerduty.com", desc: "PagerDuty AIOps correlates alerts across services, suppresses noise, and auto-routes incidents to the right responder with context. Learn to configure its AI alert grouping and automated response workflows." },
          { name: "AI-Powered Observability", url: "https://www.datadoghq.com", desc: "Datadog uses AI to detect anomalies, forecast resource usage, and correlate metrics, traces, and logs across your entire stack. Master its AI-powered root cause analysis to cut incident resolution time." },
          { name: "AI-Driven Continuous Delivery", url: "https://www.harness.io", desc: "Harness uses AI to automate deployment verification, auto-rollback on anomalies, and optimize delivery pipelines. Understand its canary analysis and how to set deployment guardrails that AI monitors." },
          { name: "AI DevOps Assistant", url: "https://www.kubiya.ai", desc: "Kubiya provides an AI assistant for DevOps workflows — automating runbook execution, Kubernetes troubleshooting, and infrastructure provisioning through conversational interfaces. Learn to encode your team's operational knowledge into AI-executable workflows." },
        ],
        skills: [
          { text: "Configure AI-powered alert correlation and noise suppression to reduce alert fatigue without missing real incidents", linked: "AI Incident Management" },
          { text: "Use AI-driven observability to detect anomalies, forecast capacity needs, and perform root cause analysis", linked: "AI-Powered Observability" },
          { text: "Set up AI-verified deployments with automated canary analysis and intelligent rollback policies", linked: "AI-Driven Continuous Delivery" },
          { text: "Encode operational knowledge into AI-executable runbooks and conversational DevOps workflows", linked: "AI DevOps Assistant" },
          { text: "Design distributed systems for resilience — understanding failure modes, blast radius, and graceful degradation" },
          { text: "Lead incident response for novel failures that have no existing runbook or automated remediation" },
        ],
        resources: [
          { title: "DevOps Institute — AI and Automation", url: "https://www.devopsinstitute.com" },
          { title: "Google SRE Books — Free Online", url: "https://sre.google/books/" },
        ],
        faqs: [
          { q: "Will AI replace DevOps engineers?", a: "No, but it's replacing DevOps tasks. Routine operations — deployments, scaling, alert triage, known-incident remediation — are increasingly automated. DevOps engineers who only do manual operations are at risk. Those who architect systems, design for reliability, and handle the novel incidents that break AI's playbooks are more in demand than ever." },
          { q: "What's the difference between DevOps and SRE in the AI era?", a: "The lines are blurring. Both roles increasingly focus on building platforms and automation rather than manual operations. SRE traditionally emphasizes reliability and SLOs; DevOps emphasizes delivery speed and culture. AI tools serve both — the key skill in either role is designing systems that are resilient, observable, and automated by default." },
          { q: "Should DevOps engineers learn AI and machine learning?", a: "You don't need to build ML models, but you should understand how AI-powered observability, AIOps, and automated remediation work under the hood. Knowing how anomaly detection algorithms make decisions helps you tune them, trust them appropriately, and recognize when they're wrong. Focus on being a power user of AI ops tools." },
        ]},
      { id: "qa-engineer", title: "QA / Test Engineer", risk: 48, augment: 88,
        verdict: "Partially — AI is automating test creation, execution, and maintenance at an alarming pace. QA engineers who only write and run manual test cases face real displacement. But those who evolve into test strategists, quality architects, and AI test supervisors are thriving. The role is transforming from test execution to test intelligence.",
        summary: "AI generates test cases from code changes, self-heals broken tests, performs visual regression testing, and finds bugs through pattern recognition. QA is shifting from a hands-on-keyboard testing role to a strategic discipline where engineers design testing frameworks, define quality standards, and supervise AI-driven test suites.",
        keyInsight: "AI can write and run 10x more tests than a human. QA engineers who direct that power — deciding what to test, how to test it, and what quality means — are invaluable. Those who only write tests manually are at risk.",
        aiMastered: [
          { title: "Regression test generation and maintenance", desc: "AI auto-generates regression tests from code changes, UI recordings, and historical bug data — and self-heals test scripts when the UI changes, eliminating the maintenance burden that used to consume half of QA's time." },
          { title: "Visual regression testing", desc: "AI compares screenshots across browsers, devices, and releases pixel-by-pixel, flagging visual differences with near-perfect accuracy — catching layout bugs that manual testing routinely misses." },
          { title: "API and performance test execution", desc: "AI generates and executes comprehensive API test suites, load tests, and performance benchmarks automatically with each deployment — running thousands of scenarios that no human team could execute manually." },
        ],
        aiImproving: [
          { title: "Exploratory testing and edge case discovery", desc: "AI is learning to explore applications like a human tester — clicking through flows, trying unexpected inputs, and discovering edge cases — but still lacks the intuition that experienced QA engineers bring to finding the bugs that matter most." },
          { title: "Test prioritization and risk assessment", desc: "AI can rank test cases by code change impact and historical failure rates, but understanding which failures would be catastrophic for the business versus merely annoying still requires human product knowledge." },
          { title: "Cross-system integration testing", desc: "AI handles single-service testing well, but testing complex integrations across multiple systems, third-party APIs, and real-world data flows still requires human understanding of system architecture." },
        ],
        humanEssential: [
          { title: "Test strategy and quality architecture", desc: "Defining what 'quality' means for a product, designing the test pyramid, choosing testing tools, and setting quality gates for the release process requires strategic thinking that shapes the entire engineering organization." },
          { title: "Understanding user intent and business risk", desc: "Knowing that a checkout bug on mobile is more critical than a tooltip misalignment requires understanding users, business priorities, and real-world usage patterns that AI doesn't grasp." },
          { title: "Accessibility and usability testing", desc: "Evaluating whether an application is truly usable — for people with disabilities, non-technical users, and diverse populations — requires human empathy and real-world perspective that AI testing tools can't replicate." },
        ],
        blsData: { salary: "$99,620", employment: "200,200", growth: "+13%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024 (Software Quality Assurance Analysts)" },
        tools: [
          { name: "AI Test Automation", url: "https://www.testim.io", desc: "Testim uses AI to create, execute, and maintain automated tests that self-heal when the application changes. Learn to build AI-stable test suites and configure its self-healing thresholds for your application." },
          { name: "AI-Native Testing Platform", url: "https://www.mabl.com", desc: "Mabl provides AI-native test automation with auto-healing tests, smart element selection, and built-in test insights. Master its low-code test creation and AI-powered failure analysis to rapidly diagnose issues." },
          { name: "AI Visual Testing", url: "https://applitools.com", desc: "Applitools uses Visual AI to detect UI changes across browsers and devices with human-like accuracy. Configure its AI match levels and learn to integrate visual checkpoints into your CI/CD pipeline." },
          { name: "AI Test Orchestration", url: "https://katalon.com", desc: "Katalon provides AI-augmented test creation, smart test scheduling, and cross-platform execution. Use its AI-generated test suggestions to expand coverage and its analytics to focus on high-risk areas." },
        ],
        skills: [
          { text: "Build and maintain AI-driven test suites that self-heal when application UI changes", linked: "AI Test Automation" },
          { text: "Configure AI-native testing platforms for intelligent test creation, execution, and failure analysis", linked: "AI-Native Testing Platform" },
          { text: "Implement visual regression testing across browsers and devices using Visual AI", linked: "AI Visual Testing" },
          { text: "Orchestrate AI-augmented test suites across platforms, prioritizing tests by risk and code change impact", linked: "AI Test Orchestration" },
          { text: "Design test strategies and quality architectures that leverage AI for execution while humans define what quality means" },
          { text: "Conduct accessibility and usability testing that AI tools cannot fully replicate" },
        ],
        resources: [
          { title: "Ministry of Testing — AI in QA", url: "https://www.ministryoftesting.com" },
          { title: "ISTQB — AI Testing Resources", url: "https://www.istqb.org" },
        ],
        faqs: [
          { q: "Will AI replace QA testers?", a: "AI is replacing manual test execution — writing scripts, running regressions, checking screenshots. QA professionals who only perform these tasks are at real risk. But AI is creating new QA roles: test strategist, quality architect, AI test supervisor. The engineers who tell AI what to test, evaluate its results, and define quality standards are more valuable than ever." },
          { q: "Should QA engineers learn to code?", a: "Yes — but not in the traditional sense. You don't need to be a full-stack developer, but you need to understand code well enough to configure AI testing tools, write custom assertions, read test frameworks, and integrate testing into CI/CD pipelines. The bar has shifted from 'can you write test scripts' to 'can you architect test systems.'" },
          { q: "Is QA engineering still a good career path?", a: "Yes, but the path has changed. Entry-level manual QA roles are shrinking. The career path now runs through test automation, quality engineering, and test strategy. QA engineers who combine deep product understanding with AI tool mastery and strategic thinking are in high demand and command salaries competitive with software engineers." },
        ]},
      { id: "it-support", title: "IT Support / Help Desk", risk: 68, augment: 70,
        verdict: "Yes, partially — this is one of the most disrupted roles in tech. AI chatbots now resolve 60-80% of Tier 1 support tickets without human intervention. Password resets, software installations, VPN troubleshooting — the bread-and-butter of help desk work — are increasingly handled by AI. IT support professionals must move up the complexity ladder or face displacement.",
        summary: "AI chatbots and virtual agents resolve most routine IT issues — password resets, software provisioning, connectivity troubleshooting, and common how-to questions — automatically. The remaining tickets are more complex, requiring deeper technical knowledge, physical hardware skills, and the human judgment to handle frustrated employees.",
        keyInsight: "AI resolves 60-80% of routine IT tickets without human intervention. The remaining complex issues require deeper technical skills than ever — and better people skills too, since every ticket that reaches a human is already something AI couldn't solve.",
        aiMastered: [
          { title: "Password resets and account management", desc: "AI handles password resets, account lockouts, MFA troubleshooting, and access provisioning autonomously — the single largest category of help desk tickets, eliminated almost entirely by self-service AI." },
          { title: "Software installation and configuration", desc: "AI-driven self-service portals let employees install approved software, configure settings, and resolve common application errors through guided workflows — no human ticket needed." },
          { title: "Knowledge base Q&A and troubleshooting", desc: "AI chatbots answer IT questions by searching knowledge bases, generating step-by-step guides, and walking users through solutions conversationally — resolving common issues 24/7 without wait times." },
        ],
        aiImproving: [
          { title: "Network and connectivity troubleshooting", desc: "AI diagnoses many network issues — DNS problems, VPN misconfigurations, Wi-Fi channel conflicts — but complex network topology issues, intermittent failures, and multi-vendor environments still stump automated tools." },
          { title: "Device diagnostics and predictive maintenance", desc: "AI monitors device health, predicts hardware failures from telemetry data, and auto-generates replacement orders — but diagnosing unusual hardware behavior and performing physical repairs remain human tasks." },
          { title: "Security incident triage for end users", desc: "AI flags potential phishing, malware, and compromised accounts, but determining whether a user's unusual activity is malicious versus a legitimate edge case requires human judgment and investigation." },
        ],
        humanEssential: [
          { title: "Complex multi-system troubleshooting", desc: "When the problem spans multiple systems — a misbehaving app interacting with a VPN through a firewall with a newly patched OS — the creative debugging that requires understanding the full environment is irreplaceable." },
          { title: "Physical hardware and on-site support", desc: "Setting up conference rooms, deploying hardware, running cables, troubleshooting printer jams, and handling physical office infrastructure requires hands-on human presence." },
          { title: "Empathetic user communication", desc: "When an executive's laptop dies before a board presentation, the frustrated user doesn't want a chatbot. They need a human who listens, communicates clearly, and solves the problem with urgency and empathy." },
        ],
        blsData: { salary: "$59,660", employment: "914,300", growth: "+6%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024 (Computer User Support Specialists)" },
        tools: [
          { name: "AI Service Management", url: "https://www.freshworks.com/freshservice/", desc: "Freshservice uses AI to auto-categorize, prioritize, and route tickets, plus provides an AI chatbot that resolves common issues instantly. Learn to train its AI on your organization's knowledge base and configure its auto-resolution workflows." },
          { name: "AI-Driven ITSM Platform", url: "https://www.servicenow.com", desc: "ServiceNow's AI capabilities automate ticket routing, suggest solutions to agents, and power virtual agents that handle Tier 1 support. Master its workflow automation and AI-powered knowledge management to handle complex escalations efficiently." },
          { name: "AI Employee Support", url: "https://www.moveworks.com", desc: "Moveworks provides AI that understands employee IT requests in natural language and resolves them autonomously — from software provisioning to access requests. Understand its capabilities so you can focus on the complex issues it escalates to you." },
        ],
        skills: [
          { text: "Train and maintain AI chatbots and virtual agents, continuously improving their resolution rates", linked: "AI Service Management" },
          { text: "Manage AI-powered ITSM platforms, configuring workflows and escalation rules that route complex issues to the right specialists", linked: "AI-Driven ITSM Platform" },
          { text: "Understand AI employee support capabilities and focus your expertise on the complex issues that AI escalates", linked: "AI Employee Support" },
          { text: "Develop advanced troubleshooting skills for complex, multi-system issues that AI cannot resolve" },
          { text: "Build strong communication and de-escalation skills for handling frustrated users whose problems AI couldn't solve" },
        ],
        resources: [
          { title: "HDI — AI in Service Management", url: "https://www.thinkhdi.com" },
          { title: "CompTIA — IT Career Roadmap", url: "https://www.comptia.org/content/it-careers-path-roadmap" },
        ],
        faqs: [
          { q: "Is IT support a dying career?", a: "Tier 1 help desk — password resets, basic troubleshooting, software installs — is being heavily automated. But IT support as a broader discipline isn't dying; it's splitting. The routine half is shrinking; the complex half (multi-system troubleshooting, security, hardware, and user training) is growing. Professionals who move up the complexity ladder have strong career prospects." },
          { q: "What should IT support professionals learn to stay relevant?", a: "Move beyond Tier 1 skills. Learn cloud administration (Azure, AWS), cybersecurity basics (CompTIA Security+), networking (CCNA), and scripting/automation (PowerShell, Python). Become the person who handles the tickets AI can't resolve and who configures the AI tools themselves. Physical hardware and on-site skills also remain human-only." },
          { q: "How do I transition from help desk to a more advanced IT role?", a: "Use your help desk experience as a foundation — you understand user problems better than anyone. Get certified in a specialization: cloud (AWS/Azure), security (Security+/CISSP), networking (CCNA), or DevOps. Many IT professionals move from support into systems administration, cloud engineering, or cybersecurity within 2-3 years." },
        ]},
      { id: "cloud-architect", title: "Cloud Architect", risk: 20, augment: 88,
        verdict: "No — cloud architects are one of tech's safest roles in the AI era. AI optimizes existing infrastructure brilliantly, but designing cloud architectures that balance performance, cost, security, compliance, and organizational needs requires the kind of holistic engineering judgment that AI cannot replicate. Demand is growing as every company moves to the cloud.",
        summary: "AI optimizes cloud costs, auto-scales infrastructure, suggests architecture patterns, and generates infrastructure-as-code from natural language descriptions. But designing for complex requirements — multi-cloud strategies, regulatory compliance, disaster recovery, and organizational scale — demands human architects who understand both technology and business.",
        keyInsight: "AI can optimize what exists. Designing what should exist — balancing cost, performance, security, compliance, and organizational politics — is a deeply human skill that gets more valuable as cloud complexity grows.",
        aiMastered: [
          { title: "Cost optimization and right-sizing", desc: "AI continuously analyzes cloud resource utilization and automatically right-sizes instances, identifies idle resources, and recommends reserved capacity — saving organizations 30-60% on cloud spend without human intervention." },
          { title: "Auto-scaling and load management", desc: "AI predicts traffic patterns and scales infrastructure proactively — spinning up resources before demand spikes and scaling down during quiet periods with precision no manual process can match." },
          { title: "Infrastructure-as-code generation", desc: "AI generates Terraform, CloudFormation, and Pulumi configurations from natural language descriptions — creating deployment-ready infrastructure code that follows best practices in seconds." },
        ],
        aiImproving: [
          { title: "Architecture pattern recommendation", desc: "AI can suggest cloud architecture patterns based on requirements — microservices vs. monolith, serverless vs. containers — but still struggles with the nuanced tradeoffs that depend on team size, existing systems, and organizational culture." },
          { title: "Security posture assessment", desc: "AI scans cloud environments for misconfigurations, exposed services, and compliance violations, but understanding the risk context — which findings are critical versus acceptable — requires human judgment about business priorities." },
          { title: "Multi-cloud optimization", desc: "AI is improving at optimizing workloads across cloud providers, but the strategic decisions about multi-cloud architecture — vendor lock-in risks, data sovereignty, team expertise — remain human territory." },
        ],
        humanEssential: [
          { title: "Enterprise architecture design", desc: "Designing the overall cloud architecture for an organization — landing zones, network topology, identity management, data strategy — requires understanding business goals, regulatory requirements, and organizational constraints AI doesn't grasp." },
          { title: "Migration strategy and execution", desc: "Planning and executing cloud migrations — deciding what to rehost, refactor, or rebuild; managing data migration; coordinating with dozens of teams — is a complex human orchestration challenge." },
          { title: "Compliance architecture and governance", desc: "Designing architectures that meet HIPAA, SOC 2, GDPR, FedRAMP, and other regulatory frameworks while remaining performant and cost-effective requires deep understanding of both regulation and technology." },
        ],
        blsData: { salary: "$145,480", employment: "178,100", growth: "+23%", growthLabel: "Much faster than average", source: "U.S. Bureau of Labor Statistics, 2024 (Computer Network Architects)" },
        tools: [
          { name: "Cloud AI Services", url: "https://aws.amazon.com/ai/", desc: "AWS, Azure, and GCP all offer AI-powered services for cost optimization, architecture recommendations, and automated operations. Master the AI tools native to your primary cloud platform and understand how they integrate into your architecture." },
          { name: "AI Cloud Cost Optimization", url: "https://spot.io", desc: "Spot by NetApp uses AI to optimize cloud infrastructure costs through intelligent workload management, spot instance automation, and continuous right-sizing. Learn to configure its policies and interpret its recommendations for your specific workload patterns." },
          { name: "AI Infrastructure as Code", url: "https://www.pulumi.com", desc: "Pulumi AI generates infrastructure-as-code from natural language, supporting any cloud provider. Use it to rapidly prototype architectures, then refine the generated code with your security, compliance, and organizational requirements." },
          { name: "AI Kubernetes Optimization", url: "https://cast.ai", desc: "Cast AI automatically optimizes Kubernetes cluster costs and performance by right-sizing pods, selecting optimal instance types, and rebalancing workloads. Configure its policies to match your reliability requirements and cost targets." },
        ],
        skills: [
          { text: "Leverage AI-native cloud services for cost optimization, auto-scaling, and operational intelligence", linked: "Cloud AI Services" },
          { text: "Configure AI-driven cost optimization to continuously right-size resources and reduce cloud spend", linked: "AI Cloud Cost Optimization" },
          { text: "Generate infrastructure-as-code with AI assistance, then refine for security, compliance, and organizational needs", linked: "AI Infrastructure as Code" },
          { text: "Optimize Kubernetes cost and performance using AI-powered cluster management tools", linked: "AI Kubernetes Optimization" },
          { text: "Design multi-cloud and hybrid architectures that balance vendor lock-in risk with operational efficiency" },
          { text: "Architect for compliance — HIPAA, SOC 2, GDPR, FedRAMP — while maintaining performance and cost targets" },
        ],
        resources: [
          { title: "A Cloud Guru — AI and Cloud", url: "https://acloudguru.com" },
          { title: "AWS Architecture Center", url: "https://aws.amazon.com/architecture/" },
        ],
        faqs: [
          { q: "Will AI replace cloud architects?", a: "No. AI handles optimization within an existing architecture — cost, scaling, configuration — but cannot design the architecture itself. Cloud architecture requires understanding business strategy, regulatory requirements, team capabilities, and organizational constraints. As cloud complexity grows, the demand for architects who can navigate this complexity grows with it." },
          { q: "What certifications matter most for cloud architects in 2025?", a: "AWS Solutions Architect Professional, Azure Solutions Architect Expert, and Google Cloud Professional Cloud Architect remain the big three. Layer on security-specific certs (AWS Security Specialty, CCSP) and increasingly, AI/ML certs that help you integrate AI services into your architectures. Multi-cloud experience is increasingly valuable." },
          { q: "How is AI changing the cloud architect role?", a: "AI handles the optimization and configuration work — right-sizing, auto-scaling, IaC generation — that used to consume significant architect time. This frees architects to focus on higher-value work: multi-cloud strategy, compliance architecture, migration planning, and the cross-organizational leadership that defines the role. Architects who leverage AI tools are dramatically more productive." },
        ]},
      { id: "database-admin", title: "Database Administrator", risk: 55, augment: 82,
        verdict: "Partially — the traditional DBA role is being heavily disrupted. Cloud-managed databases with AI-powered tuning handle 80% of what DBAs used to do: query optimization, performance tuning, backup management, and routine maintenance. DBAs who evolve into data platform engineers and specialize in complex architectures will survive. Those managing single on-premise databases may not.",
        summary: "AI automates query optimization, index management, performance tuning, backup scheduling, and routine database maintenance. Cloud-managed database services with built-in AI handle most operational DBA tasks automatically. The DBAs who thrive specialize in data platform architecture, complex migrations, and multi-database strategy.",
        keyInsight: "Cloud-managed databases with AI tuning handle 80% of what traditional DBAs did. The survivors specialize in complex architectures, data strategy, and the migrations that move organizations from legacy to modern platforms.",
        aiMastered: [
          { title: "Query optimization and indexing", desc: "AI analyzes query patterns, execution plans, and workload statistics to automatically suggest and implement optimal indexes, rewrite slow queries, and tune database configurations — work that was once the DBA's primary daily task." },
          { title: "Automated backup and recovery", desc: "Cloud-managed databases handle continuous backups, point-in-time recovery, and automated failover with no human intervention — replacing the manual backup scripts and recovery testing that used to define DBA reliability." },
          { title: "Performance monitoring and alerting", desc: "AI continuously monitors database performance, predicts capacity exhaustion, identifies lock contention, and auto-resolves common performance issues before they impact applications." },
        ],
        aiImproving: [
          { title: "Schema design recommendations", desc: "AI can suggest schema optimizations based on query patterns and data access analysis, but designing schemas for complex business domains — with evolving requirements and cross-system dependencies — still requires human understanding of the business." },
          { title: "Data migration planning", desc: "AI assists with schema conversion and data validation during migrations, but planning complex migrations — from legacy systems to modern platforms, across multiple databases, with zero downtime — requires human project management and risk assessment." },
          { title: "Security and access management", desc: "AI flags suspicious database access patterns and suggests security configurations, but designing the overall data security architecture — who sees what data, under what conditions, and for what compliance reasons — requires human judgment." },
        ],
        humanEssential: [
          { title: "Data platform architecture", desc: "Designing an organization's entire data platform — choosing between databases, data warehouses, data lakes, and streaming platforms, and making them work together — requires strategic thinking that looks 3-5 years ahead." },
          { title: "Complex migration and modernization", desc: "Moving petabytes of data from legacy on-premise systems to modern cloud platforms with zero downtime, data integrity guarantees, and application compatibility requires human orchestration and risk management." },
          { title: "Business data strategy", desc: "Connecting data architecture decisions to business outcomes — which data to retain, how to structure it for analytics, and how to balance access with compliance — requires understanding both technology and the business." },
        ],
        blsData: { salary: "$101,510", employment: "168,000", growth: "-1%", growthLabel: "Declining", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "AI Database Tuning", url: "https://ottertune.com", desc: "OtterTune uses AI to continuously optimize database configurations, query performance, and resource allocation. Learn to interpret its recommendations and understand when to accept AI tuning versus when your workload requires manual configuration." },
          { name: "AI Query Optimization", url: "https://www.eversql.com", desc: "EverSQL uses AI to analyze and rewrite SQL queries for optimal performance, suggest indexes, and identify schema improvements. Use it to audit query performance across your databases and learn which optimization patterns apply to your workload." },
          { name: "AI-Enhanced Database Operations", url: "https://www.percona.com", desc: "Percona provides open-source database tools with AI-powered monitoring, alerting, and performance diagnostics for MySQL, PostgreSQL, and MongoDB. Master its monitoring dashboards and learn to use its AI insights for capacity planning and troubleshooting." },
        ],
        skills: [
          { text: "Use AI-powered tuning tools to continuously optimize database performance, then validate changes against your workload requirements", linked: "AI Database Tuning" },
          { text: "Audit and optimize SQL queries using AI analysis, understanding when AI suggestions apply versus when your use case requires manual tuning", linked: "AI Query Optimization" },
          { text: "Monitor database health with AI-enhanced tools, focusing on the complex performance issues that require human investigation", linked: "AI-Enhanced Database Operations" },
          { text: "Design data platform architectures that span multiple database types, cloud providers, and processing paradigms" },
          { text: "Plan and execute zero-downtime database migrations from legacy systems to modern cloud platforms" },
          { text: "Navigate data compliance requirements — GDPR, CCPA, HIPAA — and design access controls that meet both regulatory and business needs" },
        ],
        resources: [
          { title: "DB-Engines — Database Trends", url: "https://db-engines.com" },
          { title: "PostgreSQL Wiki — Performance Optimization", url: "https://wiki.postgresql.org/wiki/Performance_Optimization" },
        ],
        faqs: [
          { q: "Is database administration a dying career?", a: "Traditional DBA roles — maintaining on-premise databases, writing backup scripts, manually tuning queries — are declining as cloud-managed services automate these tasks. But the need for data expertise isn't disappearing; it's evolving. DBAs who reinvent themselves as data platform engineers, specializing in multi-database architecture, cloud migrations, and data strategy, have strong career prospects." },
          { q: "How should DBAs future-proof their careers?", a: "Expand beyond single-database expertise. Learn cloud-managed database services (RDS, Cloud SQL, Cosmos DB), data platform architecture (data lakes, warehouses, streaming), and multiple database paradigms (relational, document, graph, time-series). The modern 'DBA' is really a data platform engineer who designs systems, not just tunes queries." },
          { q: "Will cloud databases eliminate the need for DBAs entirely?", a: "Cloud-managed databases eliminate routine DBA tasks — patching, backups, failover, basic tuning — but create new challenges: multi-cloud data strategy, cost optimization across database services, compliance architecture, and complex migration projects. Organizations still need people who deeply understand data; the work is just at a higher level." },
        ]},
      { id: "web-developer", title: "Web Developer", risk: 58, augment: 92,
        summary: "Partially — and the disruption is accelerating. AI code generators can build entire websites from prompts, and no-code platforms eliminate the need for developers on simple projects. But complex web applications, custom business logic, performance optimization, and full-stack architecture still demand human developers. The bar is rising fast.",
        keyInsight: "AI can generate a working website from a screenshot or a natural language description in minutes. The web developers who survive aren't the ones building landing pages — they're the ones building the complex, scalable applications that AI can scaffold but not ship.",
        aiChanging: "AI code assistants like GitHub Copilot and Cursor generate boilerplate, complete functions, and build entire components from descriptions. No-code platforms handle simple sites. The developer role is shifting from writing code line-by-line to architecting systems, reviewing AI-generated code, and solving the complex problems AI can't.",
        blsStats: { medianSalary: "$80,730", totalJobs: "205,200", growth: "+16%", growthLabel: "Growing" },
        aiCapability: {
          mastered: [
            { title: "Boilerplate and component generation", desc: "AI generates standard UI components, CRUD operations, form handlers, and API integrations from natural language descriptions — work that used to fill hours of a developer's day is now a single prompt away." },
            { title: "CSS and styling from designs", desc: "AI converts design mockups and screenshots into pixel-perfect HTML/CSS, matching colors, spacing, and responsive layouts automatically. The manual process of translating Figma to code is largely automated." },
            { title: "Code completion and refactoring", desc: "AI predicts the next lines of code as you type, suggests refactoring improvements, and auto-completes entire functions based on comments or function signatures — like autocomplete for programming on steroids." },
          ],
          improving: [
            { title: "Full-page and multi-page generation", desc: "AI can generate entire multi-page websites from descriptions or wireframes, but the output often needs significant refinement for production — accessibility, edge cases, responsive behavior, and performance optimization still require human review." },
            { title: "Bug detection and debugging", desc: "AI identifies common bugs, suggests fixes, and explains error messages in plain language. But complex bugs involving race conditions, state management issues, or cross-browser quirks still require human debugging skills." },
          ],
          humanOnly: [
            { title: "System architecture and design decisions", desc: "Choosing the right framework, database, hosting, caching strategy, and API design for a project's specific requirements, scale, and constraints requires experience and judgment that AI can suggest but not own." },
            { title: "Complex business logic implementation", desc: "Translating nuanced business rules — pricing engines, permission systems, workflow orchestration, and domain-specific calculations — into reliable code requires deep understanding of the business domain." },
            { title: "Performance optimization and production debugging", desc: "Diagnosing why a production app is slow, finding memory leaks, optimizing database queries under real load, and solving the hardest bugs requires a mental model of the entire system that AI doesn't have." },
          ]
        },
        tools: [
          { name: "GitHub Copilot", url: "https://github.com/features/copilot", desc: "AI pair programmer that suggests code completions, generates functions from comments, and helps with unfamiliar languages or frameworks. The baseline AI tool every web developer should be using daily." },
          { name: "Cursor", url: "https://cursor.sh", desc: "AI-native code editor that goes beyond completion — it can edit across files, understand your full codebase context, and generate multi-file features from natural language. Increasingly the tool that defines the AI-augmented developer workflow." },
          { name: "v0 by Vercel", url: "https://v0.dev", desc: "AI-powered UI generator that creates React components and full pages from text descriptions or screenshots. Use it to rapidly prototype interfaces and generate starting points for custom development." },
          { name: "Claude Code", url: "https://docs.anthropic.com/en/docs/claude-code", desc: "AI coding agent that understands large codebases, implements multi-file changes, runs tests, and debugs issues from the command line. Learn agentic coding workflows to dramatically accelerate development." },
        ],
        skills: [
          { text: "Use AI pair programming tools to write code 2-5x faster while maintaining quality through careful review of AI-generated output", tool: "GitHub Copilot" },
          { text: "Master AI-native development workflows — multi-file editing, codebase-wide refactoring, and feature generation from natural language", tool: "Cursor" },
          { text: "Rapidly prototype UIs with AI generation, then customize and refine for production-quality experiences", tool: "v0 by Vercel" },
          { text: "Develop system architecture and design skills — the human judgment layer that determines what to build and how to structure it" },
          { text: "Build deep debugging and performance optimization expertise for production systems where AI suggestions fall short" },
        ],
        faq: [
          { q: "Will AI replace web developers?", a: "For simple websites — increasingly yes. AI can generate landing pages, portfolios, and basic business sites from prompts. No-code platforms handle the rest. But complex web applications — SaaS products, e-commerce platforms, custom business tools — still require human developers. The bar is rising: tasks that used to require a developer now don't, so developers need to work at a higher level of complexity and architecture." },
          { q: "Is web development still a good career in 2025?", a: "Yes — but the definition of 'web developer' is changing. Building static websites is no longer a career. Building complex, scalable web applications absolutely is. BLS projects 16% growth. The developers thriving are the ones using AI to be dramatically more productive while focusing their human effort on architecture, business logic, and the problems AI can't solve." },
          { q: "What should web developers learn to stay relevant?", a: "Master AI coding tools like Copilot and Cursor — they're your new IDE. Go deeper on system design, architecture, and performance. Learn to review and debug AI-generated code critically. Specialize in complex areas: real-time systems, scalable infrastructure, security, or domain-specific applications. The generalist who builds simple CRUD apps is most at risk; the specialist who solves hard problems thrives." },
        ],
        resources: [
          { title: "MDN Web Docs — Mozilla Developer Network", url: "https://developer.mozilla.org" },
          { title: "BLS — Web Developers and Digital Designers", url: "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm" },
          { title: "Smashing Magazine — Web Development", url: "https://www.smashingmagazine.com" },
          { title: "The Pragmatic Engineer — Industry Analysis", url: "https://newsletter.pragmaticengineer.com" },
          { title: "Stack Overflow — Developer Survey", url: "https://survey.stackoverflow.co" },
        ],
        related: ["software-engineer", "frontend-developer", "ux-designer", "data-scientist"]
      },
    ]
  },
  {
    id: "education", name: "Education", icon: "📚", accent: "#e056a0",
    desc: "AI tutors personalize learning at scale. Teachers evolve from lecturers to mentors and facilitators.",
    jobs: [
      { id: "teacher", title: "K-12 Teacher", risk: 12, augment: 78,
        verdict: "No — teaching is fundamentally about human connection, and AI makes that connection stronger. AI handles the grading, differentiation, and lesson prep that eat up evenings and weekends, letting teachers focus on what actually matters: inspiring kids, managing classrooms, and building relationships. The teachers who thrive will be the ones who use AI as their tireless assistant.",
        summary: "AI personalizes learning, automates grading, and generates differentiated materials — but teaching is fundamentally about human connection, mentorship, classroom management, and social-emotional development. One of the safest professions in the AI era.",
        keyInsight: "Teachers aren't being replaced — they're being freed from paperwork to do what they do best: inspire, connect, and develop the whole child. AI is the teaching assistant every educator always wanted.",
        aiMastered: [
          { title: "Automated grading and feedback", desc: "AI grades multiple-choice, short-answer, and even essay-style responses with detailed feedback in seconds — work that used to consume 10+ hours of a teacher's week. Students get faster feedback and teachers reclaim their evenings." },
          { title: "Differentiated content generation", desc: "AI instantly creates the same lesson at multiple reading levels, generates modified assignments for IEP students, and produces practice problems at varying difficulty — eliminating hours of manual differentiation work." },
          { title: "Lesson plan and material creation", desc: "AI generates complete lesson plans, worksheets, rubrics, discussion questions, and assessment items aligned to state standards in minutes rather than hours." },
        ],
        aiImproving: [
          { title: "Adaptive learning pathways", desc: "AI tutors are getting better at meeting each student where they are — adjusting difficulty, pacing, and explanations in real time — but they still can't replicate the motivational awareness of a teacher who knows that a student is having a rough week at home." },
          { title: "AI-generated student work detection", desc: "AI detectors can flag likely AI-written student submissions, but the technology is imperfect and raises fairness concerns. Teachers still need to design assessments that demonstrate authentic learning and use professional judgment." },
          { title: "Learning analytics and early intervention", desc: "AI dashboards track student engagement and performance patterns, flagging at-risk students earlier — but interpreting why a student is struggling and deciding on the right intervention requires human insight." },
        ],
        humanEssential: [
          { title: "Classroom management and culture", desc: "Building a safe, inclusive learning environment, managing 25+ unique personalities, resolving conflicts, and creating a culture where students take risks and support each other is an irreplaceable human skill." },
          { title: "Social-emotional development", desc: "Teaching empathy, resilience, collaboration, and self-regulation — the skills that predict long-term success more than academics — requires human modeling, relationship, and the ability to read a room full of kids." },
          { title: "Mentorship and inspiration", desc: "The teacher who changes a student's life trajectory does it through belief, encouragement, and personal connection. No AI will ever be the adult who finally made a struggling kid feel seen and capable." },
        ],
        blsData: { salary: "$63,670", employment: "1,750,600", growth: "+1%", growthLabel: "Slower than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Khanmigo", url: "https://www.khanacademy.org/khan-labs", desc: "Khan Academy's AI tutor and teaching assistant that provides personalized tutoring for students and lesson-planning support for teachers. Learn to assign it as a Socratic tutor that guides students to answers rather than giving them away." },
          { name: "Diffit", url: "https://www.diffit.me", desc: "AI tool that generates differentiated reading passages, vocabulary lists, and comprehension questions at any grade level from a single topic or text. Essential for teachers managing classrooms with wide reading-level ranges." },
          { name: "MagicSchool", url: "https://www.magicschool.ai", desc: "Purpose-built AI toolkit for educators with 60+ tools for lesson planning, rubric creation, IEP drafting, parent email writing, and assessment generation. The Swiss Army knife of AI for teachers." },
          { name: "Gradescope", url: "https://www.gradescope.com", desc: "AI-assisted grading platform that uses machine learning to group similar student responses and apply consistent rubrics across hundreds of submissions. Cuts grading time by 50-70% while improving consistency." },
        ],
        skills: [
          { text: "Deploy AI tutors as personalized learning tools that supplement — not replace — your direct instruction", linked: "Khanmigo" },
          { text: "Generate differentiated materials at multiple reading levels for the same core lesson in minutes", linked: "Diffit" },
          { text: "Use AI to draft lesson plans, rubrics, IEPs, and parent communications, then refine with your professional expertise", linked: "MagicSchool" },
          { text: "Set up AI-assisted grading workflows that give students faster, more detailed feedback", linked: "Gradescope" },
          { text: "Design AI-resistant assessments that demonstrate authentic student learning and critical thinking" },
          { text: "Teach students responsible AI use — when AI is a helpful tool and when it undermines real learning" },
        ],
        resources: [
          { title: "ISTE — AI in Education", url: "https://www.iste.org/areas-of-focus/AI-in-education" },
          { title: "UNESCO — AI and Education Guidance", url: "https://www.unesco.org/en/digital-education/artificial-intelligence" },
        ],
        faqs: [
          { q: "Will AI replace teachers?", a: "No. Teaching is one of the most human-dependent professions. AI cannot manage a classroom, build relationships with students, handle behavioral crises, develop social-emotional skills, or provide the mentorship that changes young lives. AI is an incredibly powerful teaching assistant — but it's an assistant, not a replacement." },
          { q: "How are teachers using AI in the classroom right now?", a: "The biggest use cases are lesson planning (generating plans, worksheets, and assessments in minutes), differentiation (creating materials at multiple reading levels), grading (AI-assisted feedback on student work), and personalized tutoring (AI tutors that give students one-on-one practice). Teachers report saving 5-10 hours per week on administrative tasks." },
          { q: "Should teachers be worried about students using ChatGPT to cheat?", a: "It's a real challenge, but the solution isn't banning AI — it's redesigning assessment. The best teachers are shifting toward in-class demonstrations, oral defenses, process portfolios, and project-based assessments that prove authentic learning. Teaching students when and how to use AI responsibly is becoming a core 21st-century skill." },
        ]},
      { id: "college-professor", title: "College Professor", risk: 22, augment: 80,
        summary: "Not the role — but the model is under pressure. AI handles content delivery better than lectures, creates personalized learning paths, and generates assessments at scale. Professors who evolve from lecturers to research mentors, seminar leaders, and learning architects thrive. Those whose only value is reading slides to a lecture hall face real disruption.",
        keyInsight: "AI can deliver a lecture, but it can't mentor a PhD student through an existential research crisis, lead a Socratic seminar that changes how students think, or push the boundaries of human knowledge through original research. The professor's value is shifting from content delivery to intellectual leadership.",
        aiChanging: "AI tutors provide 24/7 personalized instruction, generate practice problems, and give instant feedback. AI grading handles large courses. AI research tools accelerate literature review and data analysis. Professors who leverage these tools redesign courses around what AI can't do: discussion, mentorship, research, and critical thinking development.",
        blsStats: { medianSalary: "$84,380", totalJobs: "1,330,700", growth: "+1%", growthLabel: "Slower than average" },
        aiCapability: {
          mastered: [
            { title: "Content delivery and lecture materials", desc: "AI generates comprehensive lecture notes, slide decks, study guides, and supplementary materials on virtually any academic topic. Video lectures from top institutions are freely available. The 'sage on the stage' model of lecturing has a free, scalable AI competitor." },
            { title: "Assessment creation and grading", desc: "AI generates quizzes, exams, and rubrics aligned to learning objectives, grades short-answer and essay responses with detailed feedback, and handles the assessment workload that consumes enormous faculty time in large courses." },
          ],
          improving: [
            { title: "Personalized AI tutoring", desc: "AI tutors adapt to individual student knowledge gaps, providing customized explanations and practice at the student's pace. For introductory courses, AI tutoring is approaching the effectiveness of human tutoring — but lacks the motivational and relational dimensions." },
            { title: "Research assistance and literature review", desc: "AI rapidly synthesizes research literature, identifies relevant papers, and even suggests research directions. But evaluating the quality of evidence, spotting methodological flaws, and generating truly novel research questions still requires expert human judgment." },
          ],
          humanOnly: [
            { title: "Research and knowledge creation", desc: "Designing original experiments, asking questions no one has asked, interpreting ambiguous results, and advancing human understanding in a field requires the creative and analytical depth that defines the professor's research role." },
            { title: "Mentorship and intellectual development", desc: "Guiding graduate students through the uncertainty of original research, challenging undergraduates to think more deeply, and developing the next generation of scholars requires human relationship, wisdom, and intellectual modeling." },
            { title: "Socratic teaching and discussion leadership", desc: "Leading a seminar where students wrestle with ideas in real time, pushing back on weak arguments, drawing out quiet students, and creating the intellectual environment where genuine learning happens is irreplaceable human pedagogy." },
          ]
        },
        tools: [
          { name: "Khanmigo", url: "https://www.khanacademy.org/khan-labs", desc: "AI tutoring platform that provides students with personalized, Socratic learning support. Use it to supplement lectures and give students 24/7 tutoring access that frees class time for discussion and active learning." },
          { name: "Turnitin AI", url: "https://www.turnitin.com", desc: "AI writing detection and academic integrity platform. Essential for faculty navigating the challenge of AI-generated student work, though understanding its limitations and false-positive rates is critical." },
          { name: "Elicit", url: "https://elicit.com", desc: "AI research assistant that helps with literature review, paper summarization, and evidence synthesis. Dramatically accelerates the research process while requiring expert judgment to evaluate results." },
          { name: "Gradescope", url: "https://www.gradescope.com", desc: "AI-assisted grading platform that groups similar responses and applies consistent rubrics. Cuts grading time by 50-70% for large courses while maintaining assessment quality." },
        ],
        skills: [
          { text: "Redesign courses around AI — using AI tutors for content delivery and reclaiming class time for discussion, projects, and mentorship", tool: "Khanmigo" },
          { text: "Develop AI-resistant assessment strategies while fairly navigating AI writing detection tools and their limitations", tool: "Turnitin AI" },
          { text: "Accelerate research workflows with AI literature review and synthesis tools while maintaining rigorous evaluation standards", tool: "Elicit" },
          { text: "Design learning experiences that develop critical thinking, argumentation, and creativity — the skills AI can't assess or replicate" },
          { text: "Embrace the shift from content expert to learning architect — the professor who designs transformative experiences, not just delivers information" },
        ],
        faq: [
          { q: "Will AI replace college professors?", a: "For pure content delivery — AI is already a viable alternative. Why attend a mediocre lecture when an AI tutor can teach the same material, personalized to your pace, 24/7? But the professor's role extends far beyond lectures: mentoring students, leading research, facilitating intellectual debate, and creating the social and intellectual environment of higher education. Those roles are safe. The professors at risk are those whose entire value proposition is lecturing." },
          { q: "How is AI changing higher education?", a: "AI is forcing a reckoning with the lecture model. The best professors are flipping classrooms (AI handles content delivery, class time is for discussion and application), redesigning assessments (away from essays AI can write toward demonstrations of authentic thinking), and integrating AI literacy into curricula. Research is also accelerating — AI literature review and data analysis let researchers move faster." },
          { q: "How should professors handle AI-generated student work?", a: "The emerging consensus: redesign assessments rather than try to detect and ban AI use. Process-based portfolios, oral examinations, in-class writing, collaborative projects, and assignments that require personal reflection or local knowledge are more effective than AI detectors. Many faculty are also teaching students how to use AI effectively and ethically as a professional skill." },
        ],
        resources: [
          { title: "AAUP — American Association of University Professors", url: "https://www.aaup.org" },
          { title: "BLS — Postsecondary Teachers", url: "https://www.bls.gov/ooh/education-training-and-library/postsecondary-teachers.htm" },
          { title: "Chronicle of Higher Education", url: "https://www.chronicle.com" },
          { title: "Inside Higher Ed — AI Coverage", url: "https://www.insidehighered.com" },
          { title: "Educause — Higher Ed Technology", url: "https://www.educause.edu" },
        ],
        related: ["teacher", "instructional-designer", "school-administrator", "research-scientist"]
      },
    ]
  },
  {
    id: "trades", name: "Construction & Trades", icon: "🏗️", accent: "#f97316",
    desc: "Physical trades are among the most AI-resistant. But smart tools, robotics, and planning AI are changing the game.",
    jobs: [
      { id: "electrician", title: "Electrician", risk: 8, augment: 45,
        verdict: "No — and AI is actually making this career more valuable, not less. Every data center, EV charger, solar installation, and smart building needs a human electrician. The physical, problem-solving nature of electrical work is nearly impossible to automate, and the AI-driven electrification boom is driving record demand for skilled electricians.",
        summary: "Hands-on electrical work is extremely difficult to automate. AI assists with diagnostics, smart building systems, and blueprint analysis, but the physical craft of wiring, troubleshooting, and code-compliant installation remains firmly human.",
        keyInsight: "With 8% automation risk, electricians are among the safest careers in the AI era. Ironically, AI is creating more demand for electricians — every new data center, EV charger, and smart building needs one.",
        aiMastered: [
          { title: "Diagnostic fault detection", desc: "AI-powered diagnostic tools analyze electrical signatures, thermal patterns, and power quality data to pinpoint faults, shorts, and failing components — often finding issues that would take hours of manual troubleshooting." },
          { title: "Load calculation and panel sizing", desc: "AI instantly calculates electrical loads, panel sizes, wire gauges, and breaker requirements from building specifications — work that used to require manual reference tables and complex math." },
          { title: "Blueprint and plan review", desc: "AI scans electrical blueprints to flag code violations, missing circuits, and design conflicts before a single wire is pulled — catching expensive errors at the planning stage." },
        ],
        aiImproving: [
          { title: "Predictive maintenance scheduling", desc: "AI analyzes equipment performance data to predict when motors, transformers, and panels will fail — but interpreting alerts in the context of a specific building's age, usage, and environment still requires an electrician's experience." },
          { title: "Smart building system integration", desc: "AI platforms are improving at coordinating lighting, HVAC, security, and energy systems — but the physical installation, wiring, and troubleshooting of these interconnected systems remains hands-on human work." },
          { title: "Energy optimization recommendations", desc: "AI can analyze a building's energy usage and recommend efficiency upgrades, but evaluating what's actually feasible given the existing wiring, panel capacity, and budget requires electrician expertise." },
        ],
        humanEssential: [
          { title: "Physical installation and wiring", desc: "Running conduit through walls, pulling wire through tight spaces, making connections in live panels, and working in attics, crawl spaces, and weather conditions requires human dexterity and physical adaptability that no robot can match." },
          { title: "On-site troubleshooting and problem solving", desc: "Every building is different. Diagnosing why a circuit trips, tracing unmarked wires in a 50-year-old building, and improvising solutions for unique structural challenges requires human judgment and creativity." },
          { title: "Code compliance and safety judgment", desc: "Interpreting the National Electrical Code for complex, real-world situations — especially in renovations where existing wiring doesn't match current standards — requires experienced human judgment that protects lives." },
        ],
        blsData: { salary: "$61,590", employment: "762,600", growth: "+6%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Fluke Connect", url: "https://www.fluke.com/en-us/fluke-connect", desc: "AI-enhanced diagnostic platform that connects to Fluke multimeters, thermal imagers, and power quality analyzers — logging measurements, trending data over time, and flagging anomalies automatically. The industry standard for smart diagnostics." },
          { name: "Bluebeam", url: "https://www.bluebeam.com", desc: "AI-assisted plan review and markup software used to analyze electrical blueprints, flag conflicts with other trades, and collaborate on design changes in real time. Essential for commercial and industrial electrical work." },
        ],
        skills: [
          { text: "Use AI-powered diagnostic tools to identify electrical faults, analyze power quality, and predict equipment failures", linked: "Fluke Connect" },
          { text: "Review and mark up electrical blueprints digitally, using AI to catch code violations and design conflicts", linked: "Bluebeam" },
          { text: "Install and configure smart building systems including IoT sensors, automated lighting, and integrated energy management" },
          { text: "Wire EV charging infrastructure — understanding load requirements, panel upgrades, and utility coordination for Level 2 and DC fast charging" },
          { text: "Install and commission solar panel electrical systems, including inverters, battery storage, and grid interconnection" },
        ],
        resources: [
          { title: "NECA — Technology & Innovation", url: "https://www.necanet.org" },
        ],
        faqs: [
          { q: "Will electricians be replaced by AI or robots?", a: "No — electricians have one of the lowest automation risks of any profession. Electrical work requires navigating unique building structures, making judgment calls in unpredictable environments, and performing precise physical tasks in tight spaces. Robotics is decades away from handling even simple residential wiring. Meanwhile, AI and electrification trends are actually increasing demand for electricians." },
          { q: "Is electrician a good career in the AI era?", a: "It's one of the best. Demand is surging due to EV charging infrastructure, solar installations, data center construction, and smart building systems — all driven by AI and electrification. The median salary is over $61,000 with strong growth projected, and the skilled trades shortage means experienced electricians command premium rates. It's a career that's both AI-resistant and AI-boosted." },
          { q: "What new skills should electricians learn?", a: "Focus on three growth areas: EV charging infrastructure (Level 2 and DC fast charging installation), solar and battery storage systems, and smart building technology (IoT, automated lighting, integrated energy management). Also learn to use AI diagnostic tools like Fluke Connect — they make you faster and more accurate on every job." },
        ]},
      { id: "construction-pm", title: "Construction Project Manager", risk: 20, augment: 72,
        verdict: "Not the role — but the toolkit is changing fast. AI catches scheduling conflicts, predicts cost overruns, and tracks progress from camera feeds. Construction PMs who master these tools deliver projects on time and under budget. Those who rely on spreadsheets and gut instinct are falling behind.",
        summary: "AI optimizes scheduling, cost estimation, progress tracking, and risk management for construction projects. But on-site leadership, subcontractor management, problem-solving, and stakeholder communication remain fundamentally human.",
        keyInsight: "AI catches scheduling conflicts and cost overruns before they happen. PMs who use these tools deliver projects on time and under budget — and that's a career-defining advantage.",
        aiMastered: [
          { title: "Schedule optimization and sequencing", desc: "AI analyzes thousands of possible construction sequences to find the optimal schedule — accounting for trade dependencies, weather windows, material deliveries, and resource constraints in ways no human planner can match." },
          { title: "Cost estimation and bid analysis", desc: "AI generates accurate cost estimates from plans and historical project data, compares subcontractor bids against market rates, and flags line items that are significantly over or under typical pricing." },
          { title: "Progress tracking from site cameras", desc: "AI-powered cameras continuously scan job sites, comparing actual construction against the BIM model and schedule — automatically detecting delays, deviations, and safety violations without manual walkthroughs." },
        ],
        aiImproving: [
          { title: "Predictive risk and delay modeling", desc: "AI is getting better at forecasting which tasks are most likely to cause schedule delays based on weather, supply chain signals, and historical patterns — but construction's inherent unpredictability still demands human contingency planning." },
          { title: "Document and RFI management", desc: "AI can auto-route RFIs, flag conflicting specifications, and extract key data from submittals and change orders — but the judgment calls about scope, responsibility, and cost implications remain human decisions." },
          { title: "Safety incident prediction", desc: "AI analyzes near-miss reports, weather conditions, and work patterns to predict safety risks — but enforcing safety culture, conducting toolbox talks, and making go/no-go decisions in dangerous conditions requires on-site human leadership." },
        ],
        humanEssential: [
          { title: "On-site leadership and problem solving", desc: "When a foundation pour goes wrong, a crane can't reach, or two trades are blocking each other, the PM makes real-time decisions on site that require spatial awareness, trade knowledge, and leadership presence no AI can provide." },
          { title: "Subcontractor and stakeholder management", desc: "Managing relationships with 20+ subcontractors, negotiating change orders, keeping owners informed, navigating permit offices, and resolving disputes requires persuasion, trust, and political skill." },
          { title: "Client communication and expectation management", desc: "Explaining delays to anxious owners, presenting options during budget crunches, and maintaining client confidence through inevitable setbacks requires empathy, transparency, and strategic communication." },
        ],
        blsData: { salary: "$104,900", employment: "423,400", growth: "+5%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "ALICE Technologies", url: "https://www.alicetechnologies.com", desc: "AI-powered construction scheduling platform that simulates millions of possible build sequences to find the optimal plan, then re-optimizes in real time as conditions change. Learn to interpret its schedule recommendations and override when field reality demands it." },
          { name: "Buildots", url: "https://www.buildots.com", desc: "AI progress tracking system that uses 360-degree camera captures to automatically compare actual construction against BIM models and schedules. Replaces hours of manual site walks with continuous, objective progress data." },
          { name: "Procore", url: "https://www.procore.com", desc: "Industry-leading construction management platform with AI features for RFI routing, document management, budget tracking, and safety reporting. The central nervous system for most large construction projects." },
        ],
        skills: [
          { text: "Use AI schedule optimization to evaluate construction sequences and identify critical path risks before they cause delays", linked: "ALICE Technologies" },
          { text: "Interpret AI-generated progress reports from site camera data and act on discrepancies between planned and actual work", linked: "Buildots" },
          { text: "Manage project documentation, budgets, and RFIs through AI-enhanced construction management platforms", linked: "Procore" },
          { text: "Read and leverage BIM models integrated with AI tools for clash detection, quantity takeoffs, and 4D scheduling" },
          { text: "Evaluate AI risk predictions and translate them into actionable contingency plans for the field team" },
        ],
        resources: [
          { title: "ENR — Technology in Construction", url: "https://www.enr.com" },
        ],
        faqs: [
          { q: "Will AI replace construction project managers?", a: "No — but it will separate the top performers from the rest. AI handles scheduling optimization, cost estimation, and progress tracking better than spreadsheets ever could. But the core of the PM role — leading teams on site, managing subcontractors, solving problems in real time, and communicating with stakeholders — is deeply human. PMs who use AI deliver better projects; those who don't will struggle to compete." },
          { q: "What AI tools should construction PMs learn?", a: "Start with your project management platform (Procore, Autodesk Build, or similar) and learn its AI features. Then explore scheduling AI (ALICE Technologies), progress tracking (Buildots or OpenSpace), and cost estimation tools. BIM literacy is increasingly essential as AI tools build on top of 3D models. The goal isn't to become a tech expert — it's to use these tools to make better decisions faster." },
          { q: "How is AI changing construction project delivery?", a: "AI is compressing timelines and reducing waste. Schedule optimization finds faster build sequences. Camera-based progress tracking catches delays in real time instead of at monthly meetings. Predictive analytics flag risks before they become problems. The net result: projects that come in closer to budget and schedule, with fewer surprises — which is what every owner wants." },
        ]},
      { id: "plumber", title: "Plumber", risk: 6, augment: 35,
        summary: "No — plumbing is one of the most AI-proof professions in existence. Every job is different: different buildings, different pipe configurations, different problems. AI can help with diagnostics and business management, but the physical work of cutting, fitting, soldering, and troubleshooting pipes in crawl spaces and walls is decades away from automation. The skilled trades shortage makes this career more valuable every year.",
        keyInsight: "There's a critical plumber shortage — the average plumber is 55 years old, and the industry needs 500,000+ new plumbers by 2030. AI isn't threatening this career; it's making it more lucrative as demand outpaces supply.",
        aiChanging: "AI-powered leak detection uses acoustic sensors and thermal imaging to find hidden leaks. Smart water systems monitor usage and detect anomalies. AI business tools help plumbers optimize scheduling, estimating, and invoicing. But none of this changes the fundamental reality: someone still needs to get under the sink and fix the pipe.",
        blsStats: { medianSalary: "$61,550", totalJobs: "480,600", growth: "+6%", growthLabel: "Faster than average" },
        aiCapability: {
          mastered: [
            { title: "Leak detection and monitoring", desc: "AI-powered acoustic sensors, thermal cameras, and smart water meters detect leaks behind walls, under slabs, and in underground pipes — pinpointing problems that used to require destructive exploratory work. Plumbers who use these tools find leaks faster and with less damage." },
            { title: "Business management and scheduling", desc: "AI scheduling, estimating, and invoicing platforms optimize plumber routing, generate accurate job estimates from photos and descriptions, and automate back-office operations — letting independent plumbers run more efficient businesses." },
          ],
          improving: [
            { title: "Diagnostic assistance from images", desc: "AI can analyze photos and videos of plumbing problems to suggest likely causes and repair approaches, but interpreting the full context — pipe age, material, water pressure, code requirements, and what's behind the wall — still requires a plumber's trained eye." },
            { title: "Smart building water management", desc: "AI monitors commercial building water systems for leaks, waste, and efficiency, but installing, maintaining, and repairing these smart systems creates new work for plumbers rather than replacing existing work." },
          ],
          humanOnly: [
            { title: "Physical installation and repair", desc: "Cutting, fitting, soldering, threading, and connecting pipes in walls, ceilings, crawl spaces, and underground trenches requires human dexterity, spatial reasoning, and the ability to work in conditions no robot can navigate." },
            { title: "On-site diagnostic problem-solving", desc: "Every plumbing system is unique. Tracing the source of a leak through layers of drywall, determining why water pressure dropped in one zone, or figuring out why a drain keeps backing up requires detective work that combines experience, intuition, and physical investigation." },
            { title: "Code compliance and system design", desc: "Designing plumbing systems for new construction, ensuring code compliance across jurisdictions, and sizing systems for specific building needs requires human expertise in building science, local codes, and engineering judgment." },
          ]
        },
        tools: [
          { name: "RIDGID (Emerson)", url: "https://www.ridgid.com", desc: "Manufacturer of AI-enhanced diagnostic tools including pipe inspection cameras, locators, and leak detection equipment. Mastering RIDGID's diagnostic technology is a career-defining skill for modern plumbers." },
          { name: "ServiceTitan", url: "https://www.servicetitan.com", desc: "AI-powered field service management platform for scheduling, dispatching, estimating, and invoicing. The dominant business software for plumbing companies — mastering it makes you more valuable to any employer." },
          { name: "Phyn", url: "https://www.phyn.com", desc: "AI-powered smart water monitoring that detects leaks, measures water usage, and can automatically shut off water to prevent damage. Understanding smart water systems opens new service opportunities." },
        ],
        skills: [
          { text: "Use AI-enhanced diagnostic tools — pipe cameras, acoustic leak detectors, thermal imaging — to find problems faster and less destructively", tool: "RIDGID (Emerson)" },
          { text: "Master field service management software for scheduling, estimating, and running an efficient plumbing operation", tool: "ServiceTitan" },
          { text: "Install and service smart water monitoring systems — a growing market that combines plumbing skills with technology", tool: "Phyn" },
          { text: "Develop expertise across residential, commercial, and industrial plumbing to maximize career flexibility and earning potential" },
          { text: "Pursue master plumber licensure — the highest-value credential in the trade, commanding premium rates and enabling independent business ownership" },
        ],
        faq: [
          { q: "Will AI or robots replace plumbers?", a: "No — and this is one of the safest careers from automation. Every plumbing job is different: different buildings, different pipe layouts, different problems, different access constraints. Plumbers work in crawl spaces, behind walls, and in conditions that challenge even the most advanced robots. The skilled trades shortage means demand is only growing, and AI is making plumbers more efficient, not less needed." },
          { q: "Is plumbing a good career in the AI era?", a: "One of the best. The average plumber is 55, a massive wave of retirements is coming, and there aren't enough apprentices to fill the gap. Pay is rising — experienced plumbers earn $70-100K+ and master plumbers who own businesses earn significantly more. The work can't be offshored, can't be automated, and can't be done remotely. AI is creating more work for plumbers through smart building systems, not less." },
          { q: "What should aspiring plumbers focus on?", a: "Get into an apprenticeship program, pursue your journeyman and eventually master plumber license, and develop broad skills across residential, commercial, and service work. Learn to use diagnostic technology (pipe cameras, leak detectors) and business software. The plumber who combines traditional craft skills with modern technology and business acumen is in the strongest possible position." },
        ],
        resources: [
          { title: "UA — United Association of Plumbers and Steamfitters", url: "https://www.ua.org" },
          { title: "BLS — Plumbers, Pipefitters, and Steamfitters", url: "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm" },
          { title: "PHCC — Plumbing-Heating-Cooling Contractors Association", url: "https://www.phccweb.org" },
          { title: "This Old House — Plumbing Resources", url: "https://www.thisoldhouse.com" },
          { title: "Plumbing & Mechanical Magazine", url: "https://www.pmmag.com" },
        ],
        related: ["electrician", "hvac-tech", "carpenter", "construction-pm"]
      },
      { id: "carpenter", title: "Carpenter", risk: 8, augment: 38,
        summary: "No — carpentry is one of the most AI-resistant careers. Every job site is different, every cut is unique, and the physical dexterity required to frame a house, hang cabinets, or finish trim work is decades beyond robotic capability. AI helps with design, estimation, and layout, but the craft itself remains firmly in human hands.",
        keyInsight: "A CNC machine can cut lumber to spec in a factory. But the carpenter who frames a house on uneven ground, scribe-fits cabinets to out-of-square walls, and troubleshoots problems in real time does work that requires the human ability to adapt to imperfect conditions — something robots can't do.",
        aiChanging: "AI-powered estimation tools generate material takeoffs from blueprints. Laser and robotic layout systems speed up marking on job sites. Prefabrication and modular construction — where AI optimizes factory cutting — are growing. But on-site carpentry remains manual, physical, and highly skilled.",
        blsStats: { medianSalary: "$56,350", totalJobs: "1,003,400", growth: "+2%", growthLabel: "Stable" },
        aiCapability: {
          mastered: [
            { title: "Material estimation and takeoffs", desc: "AI reads blueprints and generates accurate material lists — lumber, fasteners, hardware — with quantities and costs calculated automatically. Work that took estimators hours of manual counting now happens in minutes." },
            { title: "CNC and factory prefabrication", desc: "In controlled factory settings, CNC machines cut framing lumber, roof trusses, and cabinet components to precise specs from digital plans. Prefab wall panels and modular components are assembled off-site with AI-optimized cutting patterns." },
          ],
          improving: [
            { title: "Robotic layout on job sites", desc: "Robotic total stations and AI-powered layout tools can mark floor plans, wall locations, and anchor points on concrete slabs — but interpreting the marks, adjusting for real-world conditions, and building from them remains human work." },
            { title: "3D modeling for custom work", desc: "AI-assisted CAD tools help carpenters visualize custom projects — staircases, built-ins, complex trim — before cutting. But translating a 3D model into physical reality in an imperfect building requires craft knowledge AI can't provide." },
          ],
          humanOnly: [
            { title: "On-site framing and structural work", desc: "Framing walls, setting floor joists, cutting rafters, and building the skeleton of a structure on uneven terrain with imperfect materials requires constant human judgment — every board is different, every site is unique, and every cut adapts to real conditions." },
            { title: "Finish carpentry and trim", desc: "Installing crown molding in an out-of-square room, hanging doors that close perfectly, scribing countertops to wavy walls, and achieving the precision that defines quality finish work requires human hands, eyes, and decades of accumulated craft skill." },
            { title: "Problem-solving on imperfect job sites", desc: "When the foundation is out of level, the plans don't match reality, or the previous trade left problems, the carpenter who figures out how to make it work — adapting, shimming, adjusting — does irreplaceable human problem-solving." },
          ]
        },
        tools: [
          { name: "PlanSwift", url: "https://www.planswift.com", desc: "AI-powered takeoff and estimating software that reads digital blueprints and calculates material quantities, costs, and labor hours. Essential for carpenters who bid jobs and run their own businesses." },
          { name: "Dusty Robotics", url: "https://www.dustyrobotics.com", desc: "Robotic layout system that prints floor plans at full scale on concrete slabs with millimeter accuracy. Understanding robotic layout accelerates framing and reduces errors on large projects." },
          { name: "SketchUp", url: "https://www.sketchup.com", desc: "3D modeling software increasingly used by carpenters for custom work — visualizing staircases, built-ins, and complex trim details before cutting materials. The ability to model in 3D is a competitive advantage." },
        ],
        skills: [
          { text: "Use AI-powered estimating software to generate accurate material takeoffs and bids from digital plans", tool: "PlanSwift" },
          { text: "Read and interpret robotic layout marks on job sites, understanding how digital plans translate to physical construction", tool: "Dusty Robotics" },
          { text: "Model custom carpentry projects in 3D before building, reducing waste and communicating designs to clients visually", tool: "SketchUp" },
          { text: "Develop advanced finish carpentry skills — the high-value, AI-resistant specialty that commands premium wages" },
          { text: "Master blueprint reading and building code knowledge to move from laborer to lead carpenter and project supervision" },
        ],
        faq: [
          { q: "Will robots replace carpenters?", a: "No — and carpentry is one of the safest careers from automation. Every job site is different, every building has quirks, and the physical dexterity required to work in crawl spaces, on scaffolding, and in partially built structures is far beyond robotic capability. Factory prefabrication is growing, but on-site carpentry — framing, finishing, custom work — remains firmly human. The bigger issue is a carpenter shortage, not automation." },
          { q: "Is carpentry a good career in the AI era?", a: "Excellent. The trade has a massive labor shortage as experienced carpenters retire, and not enough young people are entering apprenticeships. Pay is rising — experienced carpenters earn $60-80K+ and specialty finish carpenters earn more. The work can't be automated, offshored, or done remotely. AI tools make carpenters more efficient at estimating and planning, not less needed for building." },
          { q: "What type of carpentry is most in demand?", a: "Finish carpentry and custom millwork command the highest wages and are most resistant to prefabrication. Framing carpenters are in massive demand due to the housing shortage. Commercial construction carpenters who can read complex plans and work with other trades are always needed. The common thread: skilled carpenters who solve problems and deliver quality work are the scarcest resource in construction." },
        ],
        resources: [
          { title: "UBC — United Brotherhood of Carpenters", url: "https://www.carpenters.org" },
          { title: "BLS — Carpenters", url: "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm" },
          { title: "Fine Homebuilding", url: "https://www.finehomebuilding.com" },
          { title: "JLC — Journal of Light Construction", url: "https://www.jlconline.com" },
          { title: "This Old House — Carpentry Resources", url: "https://www.thisoldhouse.com" },
        ],
        related: ["electrician", "plumber", "construction-pm", "architect"]
      },
      { id: "architect", title: "Architect", risk: 32, augment: 88,
        summary: "Not the creative vision — but the drafting and documentation work is transforming fast. AI generates floor plans from text prompts, automates code compliance checks, and produces photorealistic renderings in seconds. Architects who leverage these tools design more, faster. But the spatial reasoning, client relationships, and creative judgment that define great architecture remain deeply human.",
        keyInsight: "AI can generate 50 floor plan variations in the time it takes an architect to sketch one. But choosing which plan actually works — for the site, the client, the budget, the neighborhood, the light — that's the judgment that justifies the fee.",
        aiChanging: "AI drafting tools generate plans from text descriptions and sketches. Generative design algorithms explore thousands of structural and spatial options. AI automates code compliance checking, energy modeling, and construction documentation. Rendering that once took overnight now takes minutes. Architects spend less time drawing and more time designing and deciding.",
        blsStats: { medianSalary: "$93,310", totalJobs: "131,700", growth: "+5%", growthLabel: "Growing" },
        aiCapability: {
          mastered: [
            { title: "Photorealistic rendering", desc: "AI rendering tools produce photorealistic images and walkthroughs from 3D models in minutes rather than hours. What once required overnight render farms and post-production now happens in near real-time, making design visualization accessible at every stage." },
            { title: "Code compliance and zoning analysis", desc: "AI tools check designs against building codes, zoning regulations, ADA requirements, and fire safety standards automatically — catching violations that would have required hours of manual code review and potentially costly construction-phase corrections." },
          ],
          improving: [
            { title: "Generative floor plan design", desc: "AI generates multiple floor plan options from program requirements, site constraints, and design preferences. The results are increasingly sophisticated but still require architect judgment for livability, flow, views, proportion, and the intangible qualities that make a space feel right." },
            { title: "Energy and sustainability modeling", desc: "AI simulates building energy performance, daylighting, thermal comfort, and material lifecycle analysis with increasing accuracy. But integrating sustainability goals with aesthetic vision, budget constraints, and client priorities requires human design thinking." },
          ],
          humanOnly: [
            { title: "Creative vision and spatial design", desc: "Understanding how light moves through a space, how a building relates to its neighborhood, how materials create emotional responses, how proportions create beauty — this is the irreducible core of architecture. AI can generate options, but it can't feel what makes a space work." },
            { title: "Client relationships and stakeholder navigation", desc: "Architecture is deeply personal — clients are building their home, their office, their legacy. Navigating competing stakeholder visions, translating emotions into built form, managing expectations, and presenting design intent persuasively are human skills no algorithm replicates." },
            { title: "Site-specific and contextual judgment", desc: "Every building exists in a specific place with specific neighbors, views, sun angles, wind patterns, cultural context, and community character. Reading a site and designing something that belongs there — rather than just something that works structurally — requires experiential knowledge." },
          ]
        },
        tools: [
          { name: "Midjourney / DALL-E", url: "https://www.midjourney.com", desc: "AI image generators that produce architectural concept imagery, material explorations, and design mood boards from text prompts. Accelerates early-stage design exploration and client communication dramatically." },
          { name: "Autodesk Forma", url: "https://www.autodesk.com/products/forma/", desc: "AI-powered early-stage design platform with generative design, environmental analysis, and site planning tools. Helps architects evaluate more options earlier in the design process." },
          { name: "Enscape", url: "https://enscape3d.com", desc: "Real-time rendering plugin for Revit, SketchUp, and Rhino that produces photorealistic walkthroughs from working models. Eliminates the traditional gap between design and visualization." },
          { name: "TestFit", url: "https://testfit.io", desc: "AI-powered building configurator for feasibility studies that instantly generates floor plans, unit mixes, and pro formas for multi-family and commercial projects. Turns weeks of feasibility analysis into minutes." },
        ],
        skills: [
          { text: "Use AI image generation for rapid concept exploration and client presentations during early design phases", tool: "Midjourney / DALL-E" },
          { text: "Leverage generative design tools to evaluate more site and massing options earlier in the process", tool: "Autodesk Forma" },
          { text: "Produce real-time renderings and walkthroughs from working models to accelerate design decisions", tool: "Enscape" },
          { text: "Use AI feasibility tools to quickly test program and financial viability before investing in full design", tool: "TestFit" },
          { text: "Develop the spatial reasoning, material intuition, and design judgment that separate architects from AI-generated floor plans" },
          { text: "Build the client communication and stakeholder management skills that translate visions into built reality" },
        ],
        faq: [
          { q: "Will AI replace architects?", a: "No — but it's transforming the profession dramatically. AI handles drafting, code checking, rendering, and generative layout options. But the creative vision, spatial judgment, client relationships, and contextual sensitivity that define great architecture remain human. Architects who use AI tools produce more design options, better visualizations, and faster documentation — they're more productive, not less necessary." },
          { q: "How is AI changing architecture?", a: "AI generates floor plans from text prompts, produces photorealistic renderings in minutes, checks designs against building codes automatically, and runs energy simulations that once took days. Generative design explores thousands of structural options. The effect: architects spend less time on technical production and more time on design thinking, client relationships, and creative judgment." },
          { q: "What should architecture students learn about AI?", a: "Learn AI image generation tools (Midjourney, DALL-E) for concept work. Get comfortable with generative design and parametric modeling. Understand AI rendering (Enscape, Lumion). But most importantly, develop the skills AI can't replace: spatial reasoning, material knowledge, design intuition, client communication, and the ability to walk a site and feel what it needs." },
        ],
        resources: [
          { title: "AIA — American Institute of Architects", url: "https://www.aia.org" },
          { title: "BLS — Architects", url: "https://www.bls.gov/ooh/architecture-and-engineering/architects.htm" },
          { title: "ArchDaily — Architecture News", url: "https://www.archdaily.com" },
          { title: "Dezeen — Design and Architecture", url: "https://www.dezeen.com" },
          { title: "NCARB — Licensing Resources", url: "https://www.ncarb.org" },
        ],
        related: ["civil-engineer", "construction-pm", "ux-designer", "interior-designer"]
      },
    ]
  },
  {
    id: "realestate", name: "Real Estate", icon: "🏠", accent: "#10b981",
    desc: "AI automates valuations, lead gen, and marketing. Relationship skills become the true differentiator.",
    jobs: [
      { id: "realtor", title: "Real Estate Agent", risk: 38, augment: 76,
        verdict: "Partially — AI is automating the transactional parts of real estate: property matching, market analysis, lead generation, and listing descriptions. But buying a home is the biggest financial decision most people make, and they want a trusted human guide. Agents who use AI to be faster and smarter will thrive. Those who only open doors and fill out forms are in trouble.",
        summary: "AI automates property matching, market analysis, lead generation, and marketing content — but the relationship-driven, trust-based, emotionally complex nature of real estate transactions keeps skilled agents essential for most buyers and sellers.",
        keyInsight: "The agents who survive aren't the ones who know the most listings — AI knows them all. The survivors are the ones who provide judgment, negotiation skill, and emotional guidance that algorithms can't replicate.",
        aiMastered: [
          { title: "Property matching and recommendations", desc: "AI analyzes buyer preferences, search behavior, and lifestyle factors to surface properties with far greater precision than manual MLS searches — including off-market opportunities and predictive matches buyers wouldn't have found on their own." },
          { title: "Automated market analysis", desc: "AI generates comprehensive comparative market analyses in seconds, pulling from transaction data, tax records, neighborhood trends, and economic indicators — work that used to take agents hours of manual research." },
          { title: "Listing content generation", desc: "AI writes property descriptions, creates social media posts, generates email campaigns, and produces virtual staging — handling the marketing content pipeline that used to consume significant agent time." },
        ],
        aiImproving: [
          { title: "Predictive pricing models", desc: "AI is getting better at predicting where prices are heading at the neighborhood level — but real estate markets are influenced by hyperlocal factors (school rezoning, new development, zoning changes) that still require human market knowledge." },
          { title: "Lead scoring and conversion", desc: "AI can score leads by likelihood to transact and automate nurture sequences, but converting a lukewarm lead into a loyal client still requires the human touch — a well-timed phone call, genuine rapport, and local expertise." },
          { title: "Transaction management automation", desc: "AI is streamlining contracts, timelines, and closing coordination, but navigating inspection issues, appraisal gaps, lender problems, and last-minute renegotiations still needs experienced human problem-solving." },
        ],
        humanEssential: [
          { title: "Negotiation and deal strategy", desc: "Crafting winning offers in competitive markets, navigating counteroffers, managing inspection negotiations, and protecting your client's interests in high-stakes financial transactions requires human strategy, empathy, and persuasion." },
          { title: "Emotional guidance and trust", desc: "Buying or selling a home is deeply emotional — anxiety, excitement, fear, frustration. Calming first-time buyers, managing seller expectations, and guiding clients through the most stressful financial decision of their lives requires genuine human connection." },
          { title: "Hyperlocal market knowledge", desc: "Knowing which block has noise issues, which builder cuts corners, why a listing has been sitting despite looking perfect online, and what upcoming development will affect values — this street-level intelligence gives human agents an edge AI hasn't matched." },
        ],
        blsData: { salary: "$54,300", employment: "370,600", growth: "-2%", growthLabel: "Decline", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Rechat", url: "https://rechat.com", desc: "AI-powered real estate CRM that automates marketing, manages transactions, and generates branded listing materials, social content, and client communications. Learn to set up automated drip campaigns and AI-generated market reports for your sphere." },
          { name: "HouseCanary", url: "https://www.housecanary.com", desc: "AI property valuation and market analytics platform that provides automated valuations, rental estimates, and neighborhood forecasts for every residential property in the U.S. Master its valuation models to give clients data-driven pricing confidence." },
          { name: "Restb.ai", url: "https://restb.ai", desc: "AI computer vision platform that automatically tags listing photos with features, conditions, and room types — and generates property descriptions from images. Use it to create consistent, detailed listings at scale." },
        ],
        skills: [
          { text: "Build and manage AI-automated client nurture campaigns that keep your sphere engaged without manual effort", linked: "Rechat" },
          { text: "Use AI-powered valuation models to provide clients with data-driven pricing strategies and market forecasts", linked: "HouseCanary" },
          { text: "Leverage AI image analysis to create detailed, accurate listing descriptions and marketing materials quickly", linked: "Restb.ai" },
          { text: "Master AI-generated comparative market analysis and know when the data supports — or contradicts — your local market intuition" },
          { text: "Use virtual staging and AI-enhanced photography tools to market listings more effectively" },
          { text: "Develop negotiation and relationship skills that differentiate you from AI-powered search platforms" },
        ],
        resources: [
          { title: "NAR — Technology Resources", url: "https://www.nar.realtor/technology" },
        ],
        faqs: [
          { q: "Will AI replace real estate agents?", a: "AI will replace some agents — specifically those who add little value beyond opening doors and processing paperwork. But for most transactions, buyers and sellers want a trusted advisor for the biggest financial decision of their lives. Top agents use AI to be more responsive, more informed, and more efficient. The industry is likely to shrink in headcount but increase in per-agent productivity and value." },
          { q: "How are top real estate agents using AI?", a: "The best agents use AI for instant CMAs and market analysis (HouseCanary), automated marketing and client follow-up (Rechat), AI-generated listing descriptions and social content, virtual staging, and lead scoring. This lets them serve more clients at a higher level. The key insight: AI handles the data and busywork so agents can focus on relationships, negotiation, and local expertise." },
          { q: "Is real estate a good career to enter in 2025?", a: "It depends on what kind of agent you plan to be. If you're entering to do basic property searches and paperwork, AI is eating that value. But if you bring negotiation skills, local expertise, relationship-building ability, and tech fluency, there's a strong career ahead. Fewer agents will handle more transactions each — meaning higher earnings for those who adapt and tougher conditions for those who don't." },
        ]},
      { id: "property-manager", title: "Property Manager", risk: 38, augment: 78,
        summary: "Partially — AI automates rent collection, maintenance scheduling, tenant screening, and lease management. But the human side of property management — resolving tenant disputes, handling emergencies, managing vendor relationships, and making judgment calls about property investments — keeps this role firmly human. The best property managers use AI to manage more units with fewer headaches.",
        keyInsight: "AI-powered property management platforms let a single manager handle 200+ units that used to require a team of three. The managers who adopt these tools aren't losing their jobs — they're managing bigger portfolios and earning more per hour.",
        aiChanging: "AI handles rent collection reminders, maintenance request routing, tenant screening, and lease renewal automation. Smart building sensors predict HVAC failures before they happen. Chatbots answer tenant questions 24/7. Property managers who embrace these tools spend less time on paperwork and more time on high-value decisions.",
        blsStats: { medianSalary: "$62,850", totalJobs: "392,900", growth: "+5%", growthLabel: "Growing" },
        aiCapability: {
          mastered: [
            { title: "Rent collection and payment processing", desc: "Automated payment platforms collect rent, send late notices, calculate fees, and process ACH transfers without human involvement. The days of chasing checks and making collection calls for routine payments are over." },
            { title: "Tenant screening and background checks", desc: "AI-powered screening services instantly pull credit reports, criminal background checks, eviction history, income verification, and rental references — producing a risk score and recommendation in minutes rather than the days manual screening took." },
          ],
          improving: [
            { title: "Predictive maintenance", desc: "Smart building sensors and AI analytics predict when HVAC systems, water heaters, and appliances are likely to fail — enabling proactive repairs before emergency breakdowns. But interpreting sensor data, prioritizing repairs across a portfolio, and managing vendor relationships still requires human judgment." },
            { title: "Dynamic pricing and lease optimization", desc: "AI analyzes market comparables, seasonal trends, vacancy rates, and local demand to suggest optimal rental pricing. But understanding neighborhood dynamics, tenant quality trade-offs, and long-term investment strategy requires experience that algorithms can't replicate." },
          ],
          humanOnly: [
            { title: "Tenant conflict resolution and evictions", desc: "Noise complaints, neighbor disputes, lease violations, and eviction proceedings involve emotional, legal, and ethical dimensions that require human judgment, empathy, and sometimes tough conversations. No AI can knock on a door to resolve a dispute between tenants." },
            { title: "Emergency response and crisis management", desc: "Burst pipes at 2 AM, fire damage, natural disasters, or security incidents require immediate human decision-making — coordinating vendors, communicating with tenants, liaising with insurance, and making judgment calls under pressure." },
            { title: "Owner relationships and investment strategy", desc: "Advising property owners on capital improvements, market positioning, renovation ROI, and long-term investment strategy requires trust, local expertise, and financial judgment that goes far beyond data analysis." },
          ]
        },
        tools: [
          { name: "AppFolio", url: "https://www.appfolio.com", desc: "AI-powered property management platform with automated accounting, maintenance coordination, tenant screening, and vacancy marketing. The all-in-one tool that lets you manage more units with less overhead." },
          { name: "Buildium", url: "https://www.buildium.com", desc: "Property management software with AI-powered tenant screening, online rent collection, maintenance tracking, and owner reporting. Particularly strong for residential portfolio management." },
          { name: "Rently", url: "https://use.rently.com", desc: "AI-powered self-touring and smart access technology that lets prospective tenants tour vacant units on their own schedule. Reduces vacancy time and eliminates hours of showing coordination." },
          { name: "Zillow Rental Manager", url: "https://www.zillow.com/rental-manager/", desc: "AI-driven rental listing platform with market-based pricing suggestions, tenant screening, and application management. Essential for competitive vacancy marketing and pricing intelligence." },
        ],
        skills: [
          { text: "Use AI-powered property management platforms to automate rent collection, accounting, and maintenance workflows", tool: "AppFolio" },
          { text: "Leverage AI tenant screening to make faster, data-driven leasing decisions while ensuring fair housing compliance", tool: "Buildium" },
          { text: "Implement self-touring technology to reduce vacancy times and free up hours spent on showing coordination", tool: "Rently" },
          { text: "Use market analytics and AI pricing tools to optimize rental rates across your portfolio", tool: "Zillow Rental Manager" },
          { text: "Develop the conflict resolution and crisis management skills that handle the situations technology can't touch" },
          { text: "Build owner advisory capabilities — capital planning, renovation ROI analysis, market positioning — that elevate you from caretaker to strategic partner" },
        ],
        faq: [
          { q: "Will AI replace property managers?", a: "No — but it's dramatically changing the role. AI handles rent collection, tenant screening, maintenance routing, and lease management. But the human side — resolving conflicts, handling emergencies, managing vendor relationships, and advising owners on investment strategy — remains essential. AI lets good property managers handle larger portfolios, not fewer managers." },
          { q: "How is AI changing property management?", a: "Smart building sensors predict maintenance issues before they become emergencies. AI chatbots handle tenant inquiries 24/7. Automated screening processes applications in minutes. Dynamic pricing algorithms optimize rent based on market data. The effect: property managers spend less time on paperwork and more time on high-value decisions and relationship management." },
          { q: "What skills do property managers need in the AI era?", a: "Tech fluency is table stakes — you need to master property management platforms, understand smart building technology, and leverage data for pricing decisions. But the highest-value skills remain human: conflict resolution, vendor negotiation, owner advisory, and the judgment to handle the emergencies and edge cases that AI escalates to you." },
        ],
        resources: [
          { title: "IREM — Institute of Real Estate Management", url: "https://www.irem.org" },
          { title: "NAA — National Apartment Association", url: "https://www.naahq.org" },
          { title: "BLS — Property Managers", url: "https://www.bls.gov/ooh/management/property-real-estate-and-community-association-managers.htm" },
          { title: "Buildium — Property Management Resources", url: "https://www.buildium.com/resource-center/" },
          { title: "BiggerPockets — Real Estate Investing", url: "https://www.biggerpockets.com" },
        ],
        related: ["realtor", "hotel-manager", "office-manager", "facilities-manager"]
      },
    ]
  },
  {
    id: "transportation", name: "Transportation & Logistics", icon: "🚛", accent: "#6366f1",
    desc: "Self-driving tech, route optimization, and warehouse robotics are reshaping how goods and people move.",
    jobs: [
      { id: "truck-driver", title: "Truck Driver", risk: 52, augment: 40,
        verdict: "Eventually — but not as soon as the headlines suggest. Autonomous trucks are making real progress on highways, but last-mile delivery, loading docks, and bad weather still need human drivers. The timeline is years, not months, and the driver shortage means demand stays high in the meantime.",
        summary: "Autonomous trucking is progressing faster on long-haul highway routes than anywhere else. But the 'middle mile' is automating first — city driving, loading, and customer interaction remain deeply human. The industry's massive driver shortage means even partial automation helps rather than displaces.",
        keyInsight: "The trucking industry is short 80,000+ drivers. Autonomous tech is filling the gap on long-haul routes, but human drivers who embrace tech (ELD compliance, route optimization, fleet telematics) are more employable than ever.",
        aiMastered: [
          { title: "Highway autopilot and platooning", desc: "AI drives trucks on open highways with minimal human intervention — maintaining lane position, following distance, and speed across hundreds of miles of interstate with superhuman consistency." },
          { title: "Route optimization and fuel efficiency", desc: "AI calculates the most efficient routes accounting for traffic, weather, delivery windows, fuel costs, and hours-of-service regulations — saving fleets 10-15% on fuel costs." },
          { title: "Predictive vehicle maintenance", desc: "AI monitors engine telemetry, tire pressure, brake wear, and hundreds of sensors to predict breakdowns before they happen — reducing roadside failures and unplanned downtime." },
        ],
        aiImproving: [
          { title: "Urban and suburban driving", desc: "Autonomous trucks handle highways well but still struggle in cities — construction zones, pedestrians, cyclists, double-parked cars, and complex intersections remain unsolved challenges." },
          { title: "Loading dock navigation", desc: "AI is improving at backing into loading docks and navigating tight warehouse lots, but the infinite variety of dock configurations, obstacles, and ground conditions still challenges automated systems." },
          { title: "Adverse weather driving", desc: "Rain, snow, ice, and fog significantly degrade sensor performance. AI can handle light weather but human judgment remains essential in severe conditions where sensor data becomes unreliable." },
        ],
        humanEssential: [
          { title: "Last-mile delivery and customer interaction", desc: "Carrying packages to doors, navigating apartment buildings, handling signatures, and dealing with customers who aren't home requires human presence and problem-solving that robots can't match." },
          { title: "Hazmat and specialized cargo", desc: "Transporting hazardous materials, oversized loads, and fragile cargo requires human judgment about road conditions, load shifting, and emergency procedures that carry real safety consequences." },
          { title: "Mechanical troubleshooting on the road", desc: "When something breaks 200 miles from the nearest shop, experienced drivers diagnose and fix problems — or make the call about whether it's safe to keep driving. AI can flag issues but can't turn a wrench." },
        ],
        blsData: { salary: "$54,320", employment: "2,032,400", growth: "+4%", growthLabel: "As fast as average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Samsara", url: "https://www.samsara.com", desc: "AI-powered fleet management platform with GPS tracking, driver safety scoring, dash cams, and ELD compliance. Learn to use its driver coaching features to improve your safety record and efficiency metrics." },
          { name: "Motive (formerly KeepTruckin)", url: "https://gomotive.com", desc: "AI fleet intelligence platform with automated hours-of-service logging, vehicle diagnostics, and route optimization. Master its workflow to stay compliant and maximize your driving hours." },
          { name: "Trimble Transportation", url: "https://www.trimble.com/en/solutions/transportation-and-logistics", desc: "AI-powered routing, dispatch, and fleet management for carriers of all sizes. Use its load matching and route planning features to maximize revenue per mile." },
        ],
        skills: [
          { text: "Use fleet telematics platforms to optimize routes, reduce fuel consumption, and improve your safety score", linked: "Samsara" },
          { text: "Master ELD compliance and AI-powered hours-of-service management to avoid violations", linked: "Motive (formerly KeepTruckin)" },
          { text: "Leverage AI load matching and route optimization to maximize revenue per mile", linked: "Trimble Transportation" },
          { text: "Understand autonomous trucking technology — drivers who can operate and monitor self-driving systems are the transition workforce" },
          { text: "Develop specialized skills (hazmat, oversized loads, tanker) that are hardest to automate and command premium pay" },
        ],
        resources: [
          { title: "ATA — American Trucking Associations", url: "https://www.trucking.org" },
          { title: "FreightWaves — Autonomous Trucking Coverage", url: "https://www.freightwaves.com" },
        ],
        faqs: [
          { q: "Will self-driving trucks replace truck drivers?", a: "On long-haul highway routes — eventually, yes. Companies like Aurora, Kodiak, and TuSimple are running autonomous trucks on specific interstate corridors. But full replacement is years away. Urban driving, last-mile delivery, loading docks, and adverse weather still need humans. The driver shortage (80,000+ unfilled positions) means demand for human drivers remains strong during the transition." },
          { q: "Is truck driving a good career in 2025?", a: "Yes — especially if you specialize. The driver shortage keeps pay rising, and specialized roles (hazmat, tanker, oversized loads) pay significantly more and are harder to automate. Drivers who embrace technology and maintain clean safety records are in the strongest position. The transition to autonomous trucking will take years and will create new roles like remote truck monitors." },
          { q: "How should truck drivers prepare for autonomous trucks?", a: "Learn the technology rather than fearing it. Drivers who understand telematics, autonomous systems, and fleet management software will be the transition workforce — monitoring autonomous trucks, handling edge cases, and managing the handoff between highway autonomy and last-mile driving. Specialize in driving scenarios AI can't handle yet." },
        ]},
      { id: "warehouse-worker", title: "Warehouse Worker", risk: 62, augment: 35,
        summary: "Increasingly — Amazon and other major logistics companies are deploying warehouse robots at massive scale. Robots handle picking, packing, sorting, and transport within fulfillment centers. But the physical variety of warehouse work — irregular items, loading trucks, equipment maintenance — still needs humans. The transition is fast but uneven.",
        keyInsight: "Amazon has deployed over 750,000 robots across its warehouses — and is still hiring human workers. The robots handle the repetitive, back-breaking work while humans handle the exceptions, irregularities, and physical tasks that robotics can't match.",
        aiChanging: "Warehouse robots and automated guided vehicles handle picking, sorting, and transporting goods through fulfillment centers. AI optimizes inventory placement, predicts demand, and schedules shifts. Human workers are shifting from manual carrying and sorting to operating robotic systems, handling exceptions, and managing the automation.",
        blsStats: { medianSalary: "$36,850", totalJobs: "1,808,800", growth: "-2%", growthLabel: "Declining" },
        aiCapability: {
          mastered: [
            { title: "Inventory management and placement", desc: "AI algorithms determine optimal warehouse storage locations, track inventory in real time via barcode and RFID, and predict demand to pre-position goods — eliminating manual inventory counts and dramatically reducing mispicks." },
            { title: "Sorting and conveyor automation", desc: "AI-powered sorting systems route packages to the correct loading dock, truck, or shipping lane at speeds no human team can match — processing thousands of items per hour with near-perfect accuracy." },
          ],
          improving: [
            { title: "Robotic picking and packing", desc: "Robots can pick standardized items from shelves with high accuracy, but the infinite variety of product shapes, sizes, materials, and packaging makes universal robotic picking a hard problem. Fragile items, poly-bagged products, and irregularly shaped goods still challenge gripper technology." },
            { title: "Autonomous mobile robots (AMRs)", desc: "Robots navigate warehouse floors to transport goods between stations, but sharing space with human workers, handling congestion, and adapting to constantly changing floor layouts requires ongoing human oversight and intervention." },
          ],
          humanOnly: [
            { title: "Truck loading and unloading", desc: "Loading trailers efficiently — maximizing space, securing loads, handling mixed freight, and adapting to damaged or irregularly shaped pallets — requires physical judgment and adaptability that robots can't match in unstructured environments." },
            { title: "Exception handling and problem-solving", desc: "Damaged goods, mislabeled items, system errors, jammed conveyors, and the hundred daily surprises in warehouse operations require human workers who can assess situations and improvise solutions on the spot." },
            { title: "Equipment operation and maintenance", desc: "Operating forklifts, pallet jacks, and other heavy equipment in crowded, dynamic warehouse environments — plus basic maintenance and troubleshooting — remains physical human work that robotics can't replace." },
          ]
        },
        tools: [
          { name: "6 River Systems", url: "https://6river.com", desc: "Collaborative warehouse robots that guide workers through optimized pick paths, reducing walking time by 50%. Understanding these systems is essential for warehouse workers in automated facilities." },
          { name: "Manhattan Associates", url: "https://www.manh.com", desc: "AI-powered warehouse management system that optimizes inventory placement, picking routes, and labor scheduling. Learn its interface to work more efficiently alongside automated systems." },
          { name: "Locus Robotics", url: "https://locusrobotics.com", desc: "Autonomous mobile robots that work alongside humans in fulfillment centers, transporting goods between stations so workers can focus on picking and packing rather than walking." },
        ],
        skills: [
          { text: "Operate and troubleshoot collaborative warehouse robots, managing exceptions when automation encounters problems", tool: "6 River Systems" },
          { text: "Use warehouse management systems to track inventory, optimize pick paths, and coordinate with automated systems", tool: "Manhattan Associates" },
          { text: "Work effectively alongside autonomous mobile robots, understanding their capabilities and limitations", tool: "Locus Robotics" },
          { text: "Obtain forklift certification and heavy equipment operation skills — the physical capabilities hardest to automate" },
          { text: "Develop maintenance and troubleshooting skills for warehouse automation equipment to become indispensable during the robotics transition" },
        ],
        faq: [
          { q: "Will robots replace warehouse workers?", a: "For repetitive tasks like sorting and transporting goods — increasingly yes. Amazon has 750,000+ warehouse robots and major logistics companies are following suit. But full automation faces a key barrier: the physical variety of warehouse work. Irregular items, truck loading, equipment maintenance, and daily exceptions that require human judgment keep humans essential. Employment is declining slowly, not collapsing." },
          { q: "How should warehouse workers prepare for automation?", a: "Learn to work WITH robots, not against them. Get forklift certified. Understand warehouse management systems. Develop troubleshooting skills for automated equipment. Workers who can operate, monitor, and maintain robotic systems are the transition workforce — and they earn more than manual laborers. Think of yourself as a robotics operator, not a box mover." },
          { q: "What warehouse jobs are most resistant to automation?", a: "Truck loading and unloading in unstructured environments, forklift operation with complex navigation, maintenance technician roles troubleshooting equipment, and supervisory positions managing both human and robotic workflows. Specializing in any of these areas provides more job security than general warehouse labor." },
        ],
        resources: [
          { title: "MHI — Material Handling Industry", url: "https://www.mhi.org" },
          { title: "BLS — Material Moving Workers", url: "https://www.bls.gov/ooh/transportation-and-material-moving/hand-laborers-and-material-movers.htm" },
          { title: "Supply Chain Dive — Warehouse Automation", url: "https://www.supplychaindive.com" },
          { title: "Robotics Business Review", url: "https://www.roboticsbusinessreview.com" },
          { title: "OSHA — Warehouse Safety", url: "https://www.osha.gov/warehousing" },
        ],
        related: ["forklift-operator", "truck-driver", "delivery-driver", "logistics-manager"]
      },
      { id: "delivery-driver", title: "Delivery Driver", risk: 55, augment: 38,
        summary: "Eventually — autonomous delivery vehicles and drones are making real progress, but the last-mile problem remains unsolved at scale. Navigating apartment buildings, handling fragile packages, dealing with customers, and operating in every weather condition keeps human drivers essential for now. The gig economy adds complexity.",
        keyInsight: "Amazon, Waymo, and Nuro are testing autonomous delivery in limited areas. But the 'last 50 feet' problem — getting a package from a vehicle to a doorstep through gates, stairs, dogs, and locked lobbies — is far harder than the driving itself. Human drivers solve it effortlessly.",
        aiChanging: "AI optimizes delivery routes in real time, adjusting for traffic, delivery windows, and package priority. Route density algorithms group deliveries for efficiency. AI-powered cameras monitor driver safety and package handling. But the physical act of driving through neighborhoods and delivering to doors remains human work — for now.",
        blsStats: { medianSalary: "$38,230", totalJobs: "1,543,800", growth: "+7%", growthLabel: "Faster than average" },
        aiCapability: {
          mastered: [
            { title: "Route optimization and sequencing", desc: "AI calculates the most efficient delivery sequence across dozens of stops, dynamically rerouting for traffic, road closures, and priority changes — saving drivers hours per shift compared to static route planning." },
            { title: "Demand prediction and load planning", desc: "AI predicts delivery volumes by area and time, optimizing van loading sequences so packages come off in delivery order — reducing search time at each stop from minutes to seconds." },
          ],
          improving: [
            { title: "Autonomous last-mile vehicles", desc: "Companies like Nuro, Amazon Scout, and Gatik are testing sidewalk robots and small autonomous vehicles for neighborhood delivery. They work in limited areas with good weather and simple terrain but can't handle stairs, gates, or complex access points." },
            { title: "Drone delivery", desc: "Wing, Amazon Prime Air, and Zipline are delivering small packages by drone in select areas. Effective for light items in suburban settings, but limited by payload weight, weather, airspace regulations, and the inability to ring doorbells." },
          ],
          humanOnly: [
            { title: "Last-50-feet delivery", desc: "Navigating apartment complexes, locked lobbies, gated communities, third-floor walkups, and the infinite variety of delivery points requires human adaptability and problem-solving that autonomous systems can't match." },
            { title: "Customer interaction and problem-solving", desc: "Handling signature-required packages, age-verified deliveries, refused shipments, and the customer who runs out to ask if you've seen their other package requires human communication and judgment." },
            { title: "Adverse condition driving", desc: "Delivering in snowstorms, heavy rain, unpaved roads, construction zones, and the endless variety of driving conditions across America requires human adaptability that autonomous vehicles handle poorly." },
          ]
        },
        tools: [
          { name: "Circuit Route Planner", url: "https://getcircuit.com", desc: "AI-powered delivery route optimization that plans the most efficient stop sequence, provides accurate ETAs, and lets drivers adjust routes on the fly. Essential for independent and gig delivery drivers." },
          { name: "Flex (Amazon)", url: "https://flex.amazon.com", desc: "Amazon's gig delivery platform with AI-optimized routes, delivery windows, and package scanning. Understanding its routing logic helps drivers complete routes faster and earn more per block." },
          { name: "Beans Maps", url: "https://www.beansroute.ai", desc: "AI-powered mapping tool specifically designed for delivery drivers, with apartment complex navigation, gate codes, and delivery-specific directions that Google Maps doesn't provide." },
        ],
        skills: [
          { text: "Use AI route optimization to complete more deliveries per shift with less driving time and fuel", tool: "Circuit Route Planner" },
          { text: "Master delivery-specific navigation tools that solve the apartment complex and access point challenges standard maps miss", tool: "Beans Maps" },
          { text: "Develop efficient package handling and vehicle organization skills that maximize stops per hour" },
          { text: "Build customer service skills for the delivery exceptions — signatures, age verification, damaged packages — that automation can't handle" },
          { text: "Consider specializing in high-value, fragile, or medical delivery where human care and judgment command premium rates" },
        ],
        faq: [
          { q: "Will autonomous vehicles replace delivery drivers?", a: "For some routes and formats — eventually. Autonomous delivery works best on predictable suburban routes with simple drop-off points. But the explosive growth of e-commerce delivery (up 50%+ since 2020) means demand for delivery drivers is growing faster than automation can replace them. The last-50-feet problem — getting packages from vehicles to doors through complex access points — keeps humans essential." },
          { q: "Is delivery driving a good career?", a: "It's accessible and in high demand, but the long-term trajectory is uncertain. Gig delivery (DoorDash, Amazon Flex) offers flexibility but limited benefits and job security. Full-time positions with major carriers (UPS, FedEx, USPS) offer better pay, benefits, and stability. Specializing in medical, pharmaceutical, or white-glove delivery provides more durable career paths." },
          { q: "How should delivery drivers prepare for autonomous vehicles?", a: "Develop skills that extend beyond driving: customer service, specialized cargo handling (medical, hazmat, fragile), fleet management knowledge, and familiarity with autonomous vehicle monitoring. The transition workforce will include remote vehicle monitors and exception handlers — drivers who oversee autonomous fleets and handle the deliveries machines can't complete." },
        ],
        resources: [
          { title: "BLS — Delivery Truck Drivers", url: "https://www.bls.gov/ooh/transportation-and-material-moving/delivery-truck-drivers-and-driver-sales-workers.htm" },
          { title: "FreightWaves — Last-Mile Delivery", url: "https://www.freightwaves.com" },
          { title: "Parcel Industry — Delivery Technology", url: "https://parcelindustry.com" },
          { title: "USPS — Career Opportunities", url: "https://about.usps.com/careers/" },
          { title: "The Verge — Autonomous Delivery Coverage", url: "https://www.theverge.com" },
        ],
        related: ["truck-driver", "warehouse-worker", "rideshare-driver", "postal-worker"]
      },
      { id: "airline-pilot", title: "Airline Pilot", risk: 18, augment: 65,
        summary: "Not anytime soon — autopilot handles cruise flight, but takeoffs, landings, weather decisions, system failures, and passenger safety require human pilots. Public trust, regulation, and the sheer complexity of edge-case scenarios mean two pilots will sit in the cockpit for decades. The real AI impact is in training, flight planning, and predictive maintenance.",
        keyInsight: "Autopilot already flies 90% of a typical flight. But the 10% it can't handle — crosswind landings, engine failures, bird strikes, thunderstorm avoidance — is exactly the 10% where human judgment saves lives. Captain Sully couldn't have been an algorithm.",
        aiChanging: "AI optimizes flight routes for fuel efficiency, predicts turbulence with weather models, and automates pre-flight checklists. Predictive maintenance AI detects component wear before failures occur. Flight simulators use AI to create more realistic training scenarios. Pilots spend less time on routine procedures and more time managing complex decision-making.",
        blsStats: { medianSalary: "$174,910", totalJobs: "160,800", growth: "+6%", growthLabel: "Growing" },
        aiCapability: {
          mastered: [
            { title: "Cruise flight automation", desc: "Modern autopilot systems manage altitude, speed, heading, and navigation during cruise flight with precision that exceeds human capability. Flight management computers optimize fuel burn and timing. Pilots monitor these systems but rarely need to intervene during the enroute phase." },
            { title: "Flight planning and route optimization", desc: "AI-powered dispatch systems calculate optimal routes considering weather, air traffic, fuel costs, wind patterns, and airspace restrictions. What once took pilots hours of manual calculation now happens in seconds with greater accuracy and fuel savings." },
          ],
          improving: [
            { title: "Automated landing systems", desc: "Autoland systems can execute instrument landings in zero-visibility conditions, and the technology is improving for more complex scenarios. But crosswind landings, short runways, contaminated surfaces, and go-around decisions still rely heavily on human skill and judgment." },
            { title: "Real-time weather decision-making", desc: "AI weather models predict turbulence, icing, and thunderstorm cells with increasing accuracy. But interpreting conflicting data, choosing between diversion options, and making the call to delay or reroute — balancing safety, fuel, schedules, and passenger needs — remains a human judgment call." },
          ],
          humanOnly: [
            { title: "Emergency decision-making", desc: "Engine failures, depressurization, electrical fires, hydraulic failures, bird strikes — these low-probability, high-consequence events require instant human judgment under extreme stress. No AI system can match a trained pilot's ability to prioritize, improvise, and manage cascading failures in real time." },
            { title: "Crew resource management and communication", desc: "Managing the human dynamics of a cockpit — coordinating with copilots, cabin crew, ATC, and passengers during normal and emergency operations — requires leadership, communication, and the ability to stay calm under pressure. These are irreducibly human skills." },
            { title: "Passenger trust and safety authority", desc: "Passengers trust a human pilot with their lives. The captain has legal authority to make safety decisions that override all other considerations. Public acceptance of pilotless commercial aviation is decades away, if it ever arrives — and that's a feature, not a bug." },
          ]
        },
        tools: [
          { name: "ForeFlight", url: "https://www.foreflight.com", desc: "AI-enhanced flight planning and navigation app used by pilots for weather analysis, route optimization, fuel planning, and in-flight situational awareness. The standard tool for modern cockpit preparation." },
          { name: "CEFA Aviation", url: "https://www.cefa-aviation.com", desc: "AI-powered flight data analysis platform that replays flights from black box data for training and safety review. Helps pilots learn from every flight, not just the ones that go wrong." },
          { name: "Jeppesen FliteDeck", url: "https://ww2.jeppesen.com", desc: "AI-integrated electronic flight bag with dynamic charts, route planning, and performance calculations. The digital replacement for paper charts used by major airlines worldwide." },
          { name: "WSI Pilotbrief", url: "https://www.dtn.com/aviation/", desc: "AI weather intelligence platform providing turbulence forecasts, icing predictions, and route-specific weather overlays. Gives pilots better weather awareness than traditional meteorological briefings." },
        ],
        skills: [
          { text: "Use AI-enhanced flight planning tools for optimal route selection, fuel planning, and weather avoidance", tool: "ForeFlight" },
          { text: "Leverage flight data analytics to review performance, identify improvement areas, and learn from every flight", tool: "CEFA Aviation" },
          { text: "Master electronic flight bags and digital navigation tools that are replacing paper-based cockpit procedures", tool: "Jeppesen FliteDeck" },
          { text: "Interpret AI weather intelligence for better in-flight decision-making and turbulence avoidance", tool: "WSI Pilotbrief" },
          { text: "Develop the emergency decision-making and crew resource management skills that define the irreplaceable human pilot" },
        ],
        faq: [
          { q: "Will AI replace airline pilots?", a: "Not in any foreseeable future. Autopilot handles cruise flight, but takeoffs, landings, emergencies, and weather decisions require human pilots. Regulation, public trust, and the complexity of edge cases all ensure two pilots remain in the cockpit. Even the military — with no passengers to worry about — still uses human pilots for complex missions. Commercial pilotless flight is decades away, if it ever arrives." },
          { q: "Is becoming a pilot still a good career?", a: "Yes — and possibly better than ever. Airlines face a massive pilot shortage as older pilots retire, and starting salaries at major airlines have increased significantly. Regional airline first officers now earn $80K+, and major airline captains earn $300K+. AI tools make the job easier in some ways, but the barrier to entry (flight hours, training costs) keeps supply constrained." },
          { q: "How much of flying is already automated?", a: "About 90% of a typical flight is automated — from shortly after takeoff through approach. Autopilot manages altitude, speed, navigation, and even some landings. But pilots are essential for taxi, takeoff, crosswind landings, weather decisions, system monitoring, and the emergency scenarios that happen without warning. The automation makes flying safer, not the pilots less necessary." },
        ],
        resources: [
          { title: "BLS — Airline Pilots", url: "https://www.bls.gov/ooh/transportation-and-material-moving/airline-and-commercial-pilots.htm" },
          { title: "ALPA — Air Line Pilots Association", url: "https://www.alpa.org" },
          { title: "FAA — Federal Aviation Administration", url: "https://www.faa.gov" },
          { title: "AOPA — Aircraft Owners and Pilots Association", url: "https://www.aopa.org" },
          { title: "Aviation Week — Pilot Technology", url: "https://aviationweek.com" },
        ],
        related: ["truck-driver", "air-traffic-controller", "logistics-manager", "flight-attendant"]
      },
      { id: "logistics-manager", title: "Supply Chain / Logistics Manager", risk: 35, augment: 90,
        summary: "Not the strategic work — but AI is revolutionizing the operational side of supply chain management. Demand forecasting, route optimization, inventory management, and supplier risk monitoring are increasingly AI-driven. The logistics managers who thrive use AI as a strategic lever — making better decisions faster — while handling the negotiations, crisis management, and relationship building that algorithms can't.",
        keyInsight: "AI predicted COVID supply chain disruptions weeks before human analysts flagged them — companies using AI demand sensing lost 35% less revenue during the pandemic. The logistics managers who already had AI tools weren't caught flat-footed. The ones who didn't are now scrambling to adopt them.",
        aiChanging: "AI demand forecasting predicts inventory needs with 30-50% greater accuracy than traditional methods. Route optimization algorithms reduce shipping costs and delivery times. Digital twins simulate entire supply chains to test disruption scenarios. Logistics managers are shifting from spreadsheet operations to AI-augmented strategic decision-making.",
        blsStats: { medianSalary: "$98,560", totalJobs: "208,600", growth: "+8%", growthLabel: "Growing" },
        aiCapability: {
          mastered: [
            { title: "Demand forecasting", desc: "AI models analyze historical sales, seasonal patterns, economic indicators, weather data, and social media trends to predict demand with 30-50% greater accuracy than traditional methods. Manual spreadsheet forecasting is obsolete for any company operating at scale." },
            { title: "Route and shipment optimization", desc: "AI algorithms calculate optimal shipping routes, carrier selection, load consolidation, and delivery sequencing across thousands of variables in real time — reducing transportation costs by 10-20% while improving delivery speed." },
          ],
          improving: [
            { title: "Supply chain risk prediction", desc: "AI monitors global news, weather patterns, port congestion, geopolitical events, and supplier financial health to flag disruption risks before they materialize. But interpreting ambiguous signals and deciding when to act — pre-ordering, switching suppliers, building safety stock — still requires human judgment." },
            { title: "Autonomous warehouse operations", desc: "AI-powered warehouse management systems optimize pick paths, inventory placement, and labor scheduling. Autonomous mobile robots handle an increasing share of warehouse tasks. But managing the human-robot workflow, handling exceptions, and maintaining quality control remain human responsibilities." },
          ],
          humanOnly: [
            { title: "Supplier negotiations and relationships", desc: "Negotiating contracts, resolving disputes, building trust with suppliers across cultures and time zones, and making the judgment calls about when to push for better terms versus when to protect a relationship — this is strategic work that requires emotional intelligence and business acumen." },
            { title: "Crisis management and improvisation", desc: "When a port closes, a supplier goes bankrupt, or a container ship blocks a canal, the logistics manager who can improvise — finding alternative routes, activating backup suppliers, communicating with customers, and making trade-off decisions under pressure — does work no algorithm can replicate." },
            { title: "Cross-functional leadership", desc: "Aligning supply chain strategy with sales forecasts, manufacturing capacity, financial targets, and sustainability goals requires navigating competing priorities across departments. This strategic, political, and leadership work is irreducibly human." },
          ]
        },
        tools: [
          { name: "Blue Yonder", url: "https://blueyonder.com", desc: "AI-powered supply chain planning platform with demand sensing, inventory optimization, and fulfillment intelligence. The enterprise standard for AI-driven supply chain management." },
          { name: "o9 Solutions", url: "https://o9solutions.com", desc: "AI-native integrated planning platform that combines demand planning, supply planning, and revenue management. Known for its digital brain approach to connected supply chain decision-making." },
          { name: "project44", url: "https://www.project44.com", desc: "AI-powered supply chain visibility platform providing real-time tracking, predictive ETAs, and exception management across ocean, rail, truck, and air shipments." },
          { name: "Flexport", url: "https://www.flexport.com", desc: "AI-enhanced freight forwarding and supply chain platform that combines logistics execution with data analytics and visibility tools. Particularly strong for companies managing international supply chains." },
        ],
        skills: [
          { text: "Use AI demand sensing platforms to replace manual forecasting with data-driven predictions", tool: "Blue Yonder" },
          { text: "Leverage integrated AI planning to connect demand, supply, and financial planning in real time", tool: "o9 Solutions" },
          { text: "Deploy supply chain visibility tools for real-time shipment tracking and proactive exception management", tool: "project44" },
          { text: "Manage international logistics with AI-enhanced freight platforms that optimize routes, carriers, and costs", tool: "Flexport" },
          { text: "Develop the supplier negotiation and relationship management skills that no algorithm can replicate" },
          { text: "Build crisis management capabilities — the ability to improvise under disruption is the most valuable supply chain skill" },
        ],
        faq: [
          { q: "Will AI replace logistics managers?", a: "No — but it's transforming the role from operational to strategic. AI handles demand forecasting, route optimization, inventory management, and shipment tracking better than humans. But supplier negotiations, crisis management, cross-functional leadership, and strategic trade-off decisions remain firmly human. The logistics managers who use AI tools are more productive and more valuable, not less needed." },
          { q: "How is AI changing supply chain management?", a: "AI demand forecasting is 30-50% more accurate than traditional methods. Route optimization reduces shipping costs by 10-20%. Digital twins simulate disruption scenarios. Real-time visibility platforms track every shipment. The effect: supply chains are faster, more resilient, and more efficient — but they need skilled humans to set strategy, manage relationships, and handle the disruptions that AI predicts but can't resolve." },
          { q: "What skills do supply chain professionals need now?", a: "Data literacy and AI tool proficiency are table stakes. But the highest-value skills are strategic: supplier relationship management, cross-functional leadership, risk assessment, and the ability to make fast decisions under uncertainty. The best supply chain managers combine AI fluency with business acumen and the negotiation skills that make suppliers want to prioritize their business." },
        ],
        resources: [
          { title: "BLS — Logisticians", url: "https://www.bls.gov/ooh/business-and-financial/logisticians.htm" },
          { title: "ASCM — Supply Chain Management", url: "https://www.ascm.org" },
          { title: "Supply Chain Dive", url: "https://www.supplychaindive.com" },
          { title: "Gartner — Supply Chain Research", url: "https://www.gartner.com/en/supply-chain" },
          { title: "MIT Center for Transportation & Logistics", url: "https://ctl.mit.edu" },
        ],
        related: ["warehouse-worker", "truck-driver", "operations-manager", "production-manager"]
      },
    ]
  },
  {
    id: "government", name: "Government & Public Service", icon: "🏛️", accent: "#64748b",
    desc: "From policing to policy, AI is transforming how governments serve and protect communities.",
    jobs: [
      { id: "police-officer", title: "Police Officer", risk: 15, augment: 62,
        summary: "No — policing is fundamentally physical, interpersonal, and unpredictable. AI enhances surveillance, predictive analytics, and report writing, but the judgment calls that define law enforcement — de-escalation, use of force, community trust — remain irreducibly human.",
        keyInsight: "AI can predict where crime is likely to happen, but it can't walk a beat, calm a domestic dispute, or earn the trust of a neighborhood. The most effective departments use AI for intelligence, not replacement.",
        aiChanging: "Predictive policing algorithms identify crime hotspots, AI-powered cameras flag stolen vehicles and wanted persons, and NLP tools draft incident reports from body cam audio. Officers who understand these tools make better-informed decisions faster.",
        blsStats: { medianSalary: "$74,910", totalJobs: "665,380", growth: "+3%", growthLabel: "Growing" },
        aiCapability: {
          mastered: [
            { title: "License plate and facial recognition", desc: "AI-powered cameras scan thousands of plates per shift, instantly flagging stolen vehicles, expired registrations, and wanted persons — work that previously required officer memory or manual BOLO checks." },
            { title: "Incident report drafting", desc: "AI transcribes body cam and dash cam audio into structured incident reports, reducing the 2-3 hours per shift officers spend on paperwork to minutes of review and approval." },
          ],
          improving: [
            { title: "Predictive policing and hotspot analysis", desc: "AI identifies areas with elevated crime probability based on historical patterns, weather, events, and socioeconomic data — but determining how to deploy resources ethically remains a human decision." },
            { title: "Real-time threat assessment", desc: "AI analyzes 911 call language, social media chatter, and sensor data to assess threat levels before officers arrive, but contextual judgment about the actual scene still requires human presence." },
          ],
          humanOnly: [
            { title: "De-escalation and crisis intervention", desc: "Talking down an armed person, calming a mental health crisis, or resolving a domestic dispute requires empathy, presence, and split-second judgment that no AI system can replicate or be trusted with." },
            { title: "Community policing and trust-building", desc: "Walking beats, knowing residents by name, mentoring youth, and building the community trust that makes policing effective is deeply human relationship work." },
            { title: "Use-of-force judgment", desc: "The decision to use force — and how much — carries moral, legal, and human consequences that society requires a human being to bear responsibility for. This is the most consequential human-only function in policing." },
          ]
        },
        tools: [
          { name: "Axon (Evidence.com)", url: "https://www.axon.com", desc: "AI-powered body cam management, evidence processing, and report drafting platform used by 17,000+ agencies. Learn its AI report-writing features to cut paperwork time dramatically." },
          { name: "ShotSpotter (SoundThinking)", url: "https://www.soundthinking.com", desc: "AI acoustic gunshot detection that triangulates gunfire location within 25 meters and alerts officers in under 60 seconds. Understand its capabilities and limitations for informed deployment." },
          { name: "Motorola Solutions (CommandCentral)", url: "https://www.motorolasolutions.com", desc: "AI-integrated dispatch, records management, and real-time intelligence platform for law enforcement. Master its analytics to make data-informed patrol and investigation decisions." },
        ],
        skills: [
          { text: "Use AI-powered evidence management to process body cam footage and draft reports efficiently", tool: "Axon (Evidence.com)" },
          { text: "Interpret AI crime analytics and hotspot predictions to inform — not replace — patrol strategy", tool: "Motorola Solutions (CommandCentral)" },
          { text: "Understand the ethical limitations and bias risks of predictive policing and facial recognition technology" },
          { text: "Develop advanced de-escalation and crisis intervention skills — the most AI-resistant and valuable police capability" },
          { text: "Build community relationships that generate human intelligence AI surveillance cannot replicate" },
        ],
        faq: [
          { q: "Will AI replace police officers?", a: "No. AI assists with surveillance, paperwork, and crime prediction, but the core of policing — physical presence, de-escalation, community trust, and use-of-force judgment — requires human officers. No society will delegate arrest authority or force decisions to algorithms. AI makes officers more effective, not obsolete." },
          { q: "How are police departments using AI right now?", a: "Major uses include license plate readers, gunshot detection (ShotSpotter), body cam transcription for reports, predictive hotspot mapping, facial recognition for wanted persons, and social media monitoring. The biggest quality-of-life improvement for officers is AI report writing, which can cut paperwork time by 50-70%." },
          { q: "Is policing a good career in the AI era?", a: "Yes — it's one of the most AI-resistant careers. Physical presence, interpersonal judgment, and legal authority cannot be automated. Officers who embrace AI tools for efficiency while developing strong community policing and de-escalation skills are well-positioned for long, stable careers." },
        ],
        resources: [
          { title: "IACP — AI Policy Resources", url: "https://www.theiacp.org" },
          { title: "Police Executive Research Forum", url: "https://www.policeforum.org" },
          { title: "NIJ — AI in Criminal Justice", url: "https://nij.ojp.gov" },
          { title: "Brennan Center — Policing Technology", url: "https://www.brennancenter.org" },
          { title: "Police1 — Technology Coverage", url: "https://www.police1.com" },
        ],
        related: ["firefighter", "social-worker", "correctional-officer"]
      },
      { id: "firefighter", title: "Firefighter", risk: 8, augment: 52,
        summary: "No — firefighting is one of the most AI-proof professions. It demands physical courage, split-second judgment in chaotic environments, and the ability to save lives under extreme conditions. AI improves dispatch, risk prediction, and building intelligence, but no robot is running into a burning building.",
        keyInsight: "AI can predict where fires will start, optimize dispatch routes, and provide real-time building intelligence. But the firefighter who enters a collapsing structure to carry someone out represents a form of human courage and physical capability that no technology can replicate.",
        aiChanging: "AI-powered dispatch optimizes response routes and resource allocation. Predictive analytics identify high-risk buildings and wildfire zones. Thermal drones and sensors provide real-time intelligence during operations. But every advance makes firefighters more effective — none replaces them.",
        blsStats: { medianSalary: "$57,120", totalJobs: "330,800", growth: "+4%", growthLabel: "As fast as average" },
        aiCapability: {
          mastered: [
            { title: "Dispatch optimization and resource allocation", desc: "AI analyzes call type, location, traffic, and available units to determine the optimal response — dispatching the right apparatus and personnel for each emergency faster than human dispatchers alone." },
            { title: "Wildfire spread prediction", desc: "AI models process weather data, terrain, vegetation moisture, and wind patterns to predict wildfire behavior and spread direction — giving incident commanders critical intelligence for evacuation planning and resource positioning." },
          ],
          improving: [
            { title: "Building intelligence and hazard mapping", desc: "AI integrates building records, hazmat inventories, and construction data to provide responding crews with real-time building intelligence — but interpreting conditions on scene in smoke, heat, and chaos still requires firefighter experience." },
            { title: "Thermal imaging and search assistance", desc: "AI-enhanced thermal cameras and drones help locate victims in smoke-filled buildings and identify structural hotspots, but navigating collapsed structures and making rescue decisions remains a human task." },
          ],
          humanOnly: [
            { title: "Structural firefighting and rescue", desc: "Entering burning buildings, navigating zero-visibility conditions, performing search and rescue, and making life-or-death decisions about structural integrity under extreme time pressure requires human courage, training, and physical capability." },
            { title: "Emergency medical response", desc: "Firefighters are often first on scene for medical emergencies, car accidents, and hazmat incidents. Assessing injuries, performing CPR, stabilizing patients, and providing compassionate care in traumatic situations is irreplaceably human." },
            { title: "Community risk reduction", desc: "Conducting fire inspections, teaching fire safety to schools, building relationships with residents, and serving as trusted community figures requires the human presence and credibility that defines the fire service." },
          ]
        },
        tools: [
          { name: "RapidSOS", url: "https://rapidsos.com", desc: "AI-powered emergency data platform that enriches 911 calls with precise location, medical profiles, and building data before crews arrive. Understanding the data you'll receive en route improves situational awareness." },
          { name: "Pano AI", url: "https://www.pano.ai", desc: "AI-powered wildfire detection system using camera networks and satellite data to spot fires within minutes of ignition. Essential for departments in wildland-urban interface areas." },
          { name: "First Due", url: "https://www.firstdue.com", desc: "AI-enhanced pre-planning and risk intelligence platform that provides responding crews with building layouts, hydrant locations, hazmat data, and tactical recommendations. Master its interface to arrive prepared." },
        ],
        skills: [
          { text: "Interpret AI-enriched dispatch data to improve situational awareness and tactical planning before arriving on scene", tool: "RapidSOS" },
          { text: "Use AI-powered building intelligence to pre-plan responses and identify hazards before entering structures", tool: "First Due" },
          { text: "Leverage AI wildfire prediction models to inform evacuation decisions and resource deployment", tool: "Pano AI" },
          { text: "Maintain peak physical fitness and structural firefighting skills — the irreplaceable human capabilities at the core of the profession" },
          { text: "Develop technical rescue specializations (confined space, swift water, high angle) that are impossible to automate" },
        ],
        faq: [
          { q: "Will AI or robots replace firefighters?", a: "No — and this is one of the safest careers from AI disruption. Firefighting requires physical courage, split-second judgment in chaotic conditions, and the ability to operate in environments (smoke, heat, collapse) where sensors fail and robots can't navigate. AI makes firefighters more effective by improving dispatch, prediction, and intelligence, but every advancement increases capability rather than reducing headcount." },
          { q: "How is AI being used in the fire service?", a: "AI optimizes dispatch routing, predicts wildfire spread, detects fires via camera networks, enriches emergency calls with building and medical data, and analyzes post-incident data to improve response. The most impactful use is pre-incident intelligence — giving crews better information before they arrive, which saves time and lives." },
          { q: "Is firefighting a good career in the AI era?", a: "One of the best. Job security is exceptional, demand is stable, and the physical and human nature of the work makes it nearly impossible to automate. Firefighters who embrace technology for dispatch, building intelligence, and wildfire prediction are better prepared and more effective. The biggest career risk isn't AI — it's the physical toll of the job." },
        ],
        resources: [
          { title: "IAFC — International Association of Fire Chiefs", url: "https://www.iafc.org" },
          { title: "NFPA — National Fire Protection Association", url: "https://www.nfpa.org" },
          { title: "BLS — Firefighters", url: "https://www.bls.gov/ooh/protective-service/firefighters.htm" },
          { title: "Firehouse — Technology Coverage", url: "https://www.firehouse.com" },
          { title: "FEMA — US Fire Administration", url: "https://www.usfa.fema.gov" },
        ],
        related: ["police-officer", "military", "paramedic", "correctional-officer"]
      },
      { id: "social-worker", title: "Social Worker", risk: 15, augment: 58,
        summary: "No — social work is fundamentally about human connection, advocacy, and navigating complex life situations that require empathy, cultural competence, and moral judgment. AI helps with caseload management, risk assessment, and documentation — but the relationships that change lives are irreplaceably human.",
        keyInsight: "AI can flag a child at risk or predict which patients need follow-up care. But the social worker who shows up at someone's door, builds trust over months, and connects a family to the resources that change their trajectory does work no algorithm can perform.",
        aiChanging: "AI streamlines intake assessments, predicts risk factors, automates case documentation, and identifies clients who need urgent intervention. Social workers who use these tools spend less time on paperwork and more time with clients — but the caseloads remain overwhelming and the work remains deeply human.",
        blsStats: { medianSalary: "$58,380", totalJobs: "708,100", growth: "+7%", growthLabel: "Faster than average" },
        aiCapability: {
          mastered: [
            { title: "Risk assessment screening", desc: "AI analyzes demographic, behavioral, and environmental data to flag individuals at elevated risk for child abuse, domestic violence, substance use relapse, or mental health crises — helping social workers prioritize the most urgent cases." },
            { title: "Case documentation automation", desc: "AI generates case notes from voice recordings and structured inputs, reducing the 40-60% of time social workers spend on paperwork so they can spend more time with clients." },
          ],
          improving: [
            { title: "Resource matching and referral", desc: "AI platforms are getting better at matching clients with available community resources — housing, food assistance, mental health services, job training — but navigating eligibility requirements, waitlists, and the reality of limited resources still requires human knowledge and advocacy." },
            { title: "Predictive intervention modeling", desc: "AI can predict which families or individuals are most likely to experience crisis, but deciding how and when to intervene — balancing client autonomy, cultural context, and safety — requires the moral judgment only a human can provide." },
          ],
          humanOnly: [
            { title: "Building trust with vulnerable populations", desc: "Earning the trust of an abused child, a domestic violence survivor, or a person experiencing homelessness takes patience, empathy, consistency, and genuine human connection that no AI can establish." },
            { title: "Crisis intervention and safety planning", desc: "Responding to child welfare emergencies, conducting home visits in dangerous situations, de-escalating violent situations, and making split-second decisions about client and child safety require human presence and judgment." },
            { title: "Advocacy and systems navigation", desc: "Advocating for clients in court, negotiating with landlords, pushing back on insurance denials, and navigating bureaucratic systems on behalf of people who can't navigate them alone is deeply human advocacy work." },
          ]
        },
        tools: [
          { name: "Casebook", url: "https://www.casebook.net", desc: "AI-powered human services platform for case management, intake, and outcome tracking. Reduces documentation burden and helps social workers manage complex caseloads more efficiently." },
          { name: "Unite Us", url: "https://uniteus.com", desc: "AI-powered social care coordination platform that connects social workers with community resources and tracks referral outcomes. Essential for navigating the fragmented social services landscape." },
          { name: "Rhombus", url: "https://www.penlink.com", desc: "AI risk assessment and case analytics platform used in child welfare and behavioral health. Learn to interpret its risk scores while maintaining your own clinical judgment." },
        ],
        skills: [
          { text: "Use AI-powered case management to reduce documentation time and manage large caseloads more effectively", tool: "Casebook" },
          { text: "Navigate AI social care coordination platforms to connect clients with community resources and track outcomes", tool: "Unite Us" },
          { text: "Interpret AI risk assessment scores critically — understanding their limitations, biases, and when to override algorithmic recommendations with professional judgment" },
          { text: "Develop advanced trauma-informed care and crisis intervention skills — the core human capabilities AI cannot replicate" },
          { text: "Build cultural competence and community relationships that enable effective advocacy for diverse populations" },
        ],
        faq: [
          { q: "Will AI replace social workers?", a: "No. Social work is among the most AI-resistant professions because it fundamentally depends on human trust, empathy, moral judgment, and advocacy. AI helps with documentation, risk screening, and resource matching — but the social worker who builds a relationship with a struggling family, advocates in court, or intervenes in a crisis does work that requires human presence and genuine caring." },
          { q: "How is AI being used in social work?", a: "AI assists with risk assessment (flagging high-risk cases for prioritization), case documentation (reducing paperwork from 40-60% of time to much less), resource matching (connecting clients with community services), and predictive analytics (identifying individuals who may need intervention). The biggest impact is reducing administrative burden so social workers can spend more time with clients." },
          { q: "Is social work a good career choice?", a: "If you're driven by purpose, yes. BLS projects 7% growth — faster than average — and the profession is in constant demand. AI is making the work more efficient, not less needed. The challenges are well-documented (high caseloads, emotional toll, modest pay) but the job security is strong and the impact is profound. Social workers who embrace AI tools to manage their caseloads more efficiently will have more sustainable careers." },
        ],
        resources: [
          { title: "NASW — National Association of Social Workers", url: "https://www.socialworkers.org" },
          { title: "BLS — Social Workers", url: "https://www.bls.gov/ooh/community-and-social-service/social-workers.htm" },
          { title: "Social Work Today", url: "https://www.socialworktoday.com" },
          { title: "CSWE — Council on Social Work Education", url: "https://www.cswe.org" },
          { title: "Child Welfare Information Gateway", url: "https://www.childwelfare.gov" },
        ],
        related: ["police-officer", "school-counselor", "therapist", "correctional-officer"]
      },
    ]
  },
  {
    id: "hospitality", name: "Hospitality & Food Service", icon: "🍽️", accent: "#ef4444",
    desc: "AI streamlines kitchens, personalizes guest experiences, and automates ordering — but hospitality is still deeply human.",
    jobs: [
      { id: "hotel-manager", title: "Hotel / Hospitality Manager", risk: 22, augment: 78,
        verdict: "No — AI optimizes pricing, automates check-in, and personalizes guest experiences, but the soul of hospitality is human connection. The best hotel managers use AI to handle the operational grind so they can focus on making guests feel genuinely welcome.",
        summary: "AI handles revenue management, dynamic pricing, automated check-in, and guest preference tracking. But creating memorable experiences, resolving complex guest situations, and leading a hospitality team requires emotional intelligence AI doesn't have.",
        keyInsight: "Hotels that combine AI-powered operations with genuine human warmth outperform on both revenue and guest satisfaction. The manager's role shifts from administrative oversight to experience architect.",
        aiMastered: [
          { title: "Dynamic pricing and revenue management", desc: "AI adjusts room rates in real time based on demand, competitor pricing, events, weather, and booking patterns — optimizing revenue per available room with precision no human revenue manager can match." },
          { title: "Automated check-in and concierge", desc: "AI-powered kiosks, mobile check-in, and chatbots handle routine guest requests — room keys, Wi-Fi passwords, checkout times — reducing front desk volume by 40-60%." },
          { title: "Guest preference tracking and personalization", desc: "AI remembers every guest's preferences across stays — room temperature, pillow type, minibar choices, restaurant preferences — and proactively personalizes each visit without staff having to ask." },
        ],
        aiImproving: [
          { title: "Sentiment analysis and service recovery", desc: "AI monitors reviews, social media, and in-stay surveys to detect unhappy guests in real time, but the nuanced response — knowing whether to offer an upgrade, a personal apology, or just space — remains a human judgment call." },
          { title: "Staff scheduling optimization", desc: "AI predicts occupancy and optimizes staffing levels, but accounting for employee preferences, morale, training needs, and the intangible chemistry between team members requires human management." },
          { title: "Upselling and experience recommendations", desc: "AI suggests relevant upgrades and local experiences based on guest profiles, but reading a guest's mood and timing a recommendation perfectly — that's hospitality instinct AI is still learning." },
        ],
        humanEssential: [
          { title: "Crisis and complaint resolution", desc: "When a VIP's room floods at midnight or a wedding reception goes sideways, the human ability to empathize, improvise, and turn a disaster into a story the guest tells positively is irreplaceable hospitality magic." },
          { title: "Team leadership and culture", desc: "Building a team that genuinely cares about guests — hiring for warmth, training for excellence, and creating a culture where staff take pride in service — is leadership work no algorithm can perform." },
          { title: "Creating memorable experiences", desc: "The surprise birthday cake, the handwritten welcome note, the staff member who remembers your dog's name — these moments of genuine human connection are what separate great hotels from efficient ones." },
        ],
        blsData: { salary: "$61,910", employment: "423,600", growth: "+7%", growthLabel: "Faster than average", source: "U.S. Bureau of Labor Statistics, 2024" },
        tools: [
          { name: "Duetto", url: "https://www.duettocloud.com", desc: "AI-powered revenue management platform that optimizes room pricing, forecasting, and distribution strategy in real time. Master its demand signals to maximize RevPAR without sacrificing occupancy." },
          { name: "ALICE (Actabl)", url: "https://www.actabl.com", desc: "AI hotel operations platform that streamlines guest requests, task management, and housekeeping workflows. Use it to reduce response times and ensure no guest request falls through the cracks." },
          { name: "Revinate", url: "https://www.revinate.com", desc: "AI-powered guest data platform that unifies profiles across stays, analyzes sentiment, and automates personalized marketing. Leverage its guest intelligence to drive direct bookings and repeat visits." },
        ],
        skills: [
          { text: "Use AI revenue management to optimize pricing strategy across channels and seasons", linked: "Duetto" },
          { text: "Streamline hotel operations with AI-powered task management and guest request routing", linked: "ALICE (Actabl)" },
          { text: "Build guest loyalty programs powered by AI personalization and sentiment analysis", linked: "Revinate" },
          { text: "Develop the emotional intelligence and crisis management skills that define great hospitality leaders" },
          { text: "Create staff training programs that combine AI efficiency with genuine warmth and service excellence" },
        ],
        resources: [
          { title: "AHLA — AI in Hospitality", url: "https://www.ahla.com" },
          { title: "Skift — Hotel Technology Coverage", url: "https://skift.com" },
        ],
        faqs: [
          { q: "Will AI replace hotel managers?", a: "No. AI automates the operational and administrative side of hotel management — pricing, check-in, scheduling, inventory. But the core of hospitality management is human: leading teams, resolving crises with empathy, and creating experiences guests remember. Hotels that over-automate and lose the human touch consistently underperform on guest satisfaction." },
          { q: "How is AI changing the hotel industry?", a: "AI handles dynamic pricing (adjusting rates thousands of times daily), self-service check-in, chatbot concierge services, predictive housekeeping scheduling, and guest personalization. The biggest impact is freeing staff from routine tasks so they can focus on genuine hospitality — the moments of human connection that build loyalty." },
          { q: "What skills do hospitality managers need in the AI era?", a: "Revenue management technology, data literacy, guest experience design, and AI tool proficiency are now baseline skills. But the differentiators remain emotional intelligence, creative problem-solving, team leadership, and the ability to create a culture where staff genuinely care about guests. Tech skills get you in the door; people skills get you promoted." },
        ]},
      { id: "fast-food-worker", title: "Fast Food Worker", risk: 65, augment: 30,
        summary: "Significantly — ordering kiosks, mobile apps, and kitchen automation are eliminating the transactional and repetitive tasks that define most fast food work. But full automation of food preparation remains years away, and the workers who remain handle the complex, physical, and customer-facing tasks machines can't.",
        keyInsight: "McDonald's has self-order kiosks in virtually all US locations. Chipotle is testing robotic avocado prep and bowl assembly. The fast food industry is automating aggressively — but the gap between 'partially automated' and 'fully automated' is enormous and expensive to close.",
        aiChanging: "Self-order kiosks and mobile apps handle 60-80% of ordering at major chains, eliminating the traditional counter worker role. AI manages drive-thru order-taking at some locations. Kitchen display systems optimize order sequencing. But food assembly, quality checks, customer service recovery, and restaurant cleanliness still need humans.",
        blsStats: { medianSalary: "$27,640", totalJobs: "3,562,200", growth: "-2%", growthLabel: "Declining" },
        aiCapability: {
          mastered: [
            { title: "Order taking and processing", desc: "Self-order kiosks, mobile apps, and AI-powered drive-thru voice systems handle the majority of order placement at major chains — processing orders faster and with fewer errors than human cashiers, while consistently upselling add-ons." },
            { title: "Inventory and demand forecasting", desc: "AI predicts hourly demand by menu item, optimizes ingredient ordering, and minimizes food waste — automating the supply chain management that restaurant managers used to do manually." },
          ],
          improving: [
            { title: "Automated food preparation", desc: "Robotic systems can flip burgers, fry chicken, assemble bowls, and make pizza with increasing reliability. But handling the variety of menu items, customizations, and quality standards across a full menu remains a challenge — most robots handle only one station." },
            { title: "AI drive-thru communication", desc: "AI voice ordering at drive-thrus is expanding but still struggles with accents, complex modifications, background noise, and the conversational nuance of real customer interactions. Human backup remains essential." },
          ],
          humanOnly: [
            { title: "Quality control and food safety", desc: "Ensuring food looks right, tastes right, and meets safety standards requires human judgment. A machine can cook a burger to temperature, but noticing that the bun is stale, the lettuce is wilted, or the order looks wrong before it reaches the customer is a human skill." },
            { title: "Customer service and problem resolution", desc: "When an order is wrong, a customer is upset, or a child spills a drink, the human response — apologetic, quick, and genuine — is what turns a bad experience into an acceptable one." },
            { title: "Restaurant maintenance and cleanliness", desc: "Cleaning dining areas, restrooms, kitchen equipment, and handling the physical variety of restaurant upkeep — including unexpected messes, equipment jams, and facility issues — requires human adaptability." },
          ]
        },
        tools: [
          { name: "Toast POS", url: "https://pos.toasttab.com", desc: "AI-powered restaurant technology platform with self-order kiosks, kitchen display systems, and analytics. Understanding these systems is increasingly required for fast food roles at all levels." },
          { name: "Miso Robotics (Flippy)", url: "https://misorobotics.com", desc: "AI-powered kitchen robots for frying, grilling, and food assembly. While not yet ubiquitous, understanding robotic kitchen systems prepares workers for the evolving fast food environment." },
          { name: "Wobot AI", url: "https://wobot.ai", desc: "AI-powered camera analytics for food safety compliance, operational efficiency, and hygiene monitoring in restaurants. These systems are becoming standard in chain operations." },
        ],
        skills: [
          { text: "Operate and troubleshoot self-order kiosks, mobile ordering systems, and kitchen display technology", tool: "Toast POS" },
          { text: "Maintain food safety and quality standards using AI-powered monitoring and compliance tools", tool: "Wobot AI" },
          { text: "Develop speed and accuracy in food preparation — the physical skills that automated kitchens haven't fully replicated" },
          { text: "Build customer service recovery skills for handling complaints and problems that kiosks and apps can't resolve" },
          { text: "Learn restaurant management fundamentals to advance beyond entry-level roles that are most vulnerable to automation" },
        ],
        faq: [
          { q: "Will robots replace fast food workers?", a: "Parts of the job are already automated — ordering kiosks handle most transactions at major chains. Kitchen robots are emerging but still handle only individual stations (frying, grilling) rather than full meal assembly. Full automation of a fast food restaurant is technically possible but extremely expensive and still years from widespread deployment. The transition will be gradual, station by station." },
          { q: "Is fast food work a viable long-term career?", a: "Entry-level fast food positions are among the most at-risk jobs in the economy. But the path to restaurant management — where human leadership, problem-solving, and team management are essential — remains strong. Workers who develop management skills, food safety certifications, and operational expertise can build durable careers even as the entry-level roles shrink." },
          { q: "How are major chains using AI right now?", a: "McDonald's has kiosks and AI drive-thru ordering. Chipotle uses robotic food prep (Chippy for chips, Autocado for avocado). Domino's uses AI delivery optimization. Wendy's is testing AI drive-thru voice ordering. The common pattern: automate ordering first, then kitchen stations one at a time, while keeping humans for quality control and customer service." },
        ],
        resources: [
          { title: "NRA — National Restaurant Association", url: "https://restaurant.org" },
          { title: "BLS — Food Preparation and Serving Workers", url: "https://www.bls.gov/ooh/food-preparation-and-serving" },
          { title: "QSR Magazine — Technology Coverage", url: "https://www.qsrmagazine.com" },
          { title: "Restaurant Business — Industry Analysis", url: "https://www.restaurantbusinessonline.com" },
          { title: "ServSafe — Food Safety Certification", url: "https://www.servsafe.com" },
        ],
        related: ["restaurant-cook", "server", "cashier", "restaurant-manager"]
      },
      { id: "server", title: "Server / Waiter", risk: 32, augment: 45,
        summary: "Not yet — and hospitality's human touch is the reason. Tableside ordering tablets and QR code menus reduce some tasks, but the server who reads the table, recommends the perfect wine, and creates a memorable dining experience is what separates a restaurant from a vending machine. Fine dining is safe; fast-casual faces more pressure.",
        keyInsight: "Restaurants that removed servers in favor of tablets saw efficiency gains but customer satisfaction drops. The industry is learning that technology works best as a server's tool, not a replacement — except in the most transactional dining formats.",
        aiChanging: "QR code ordering, tableside tablets, and mobile payment reduce the transactional parts of serving. AI-powered POS systems suggest wine pairings and upsells. Kitchen display systems optimize order timing. But the human art of hospitality — reading a table, pacing a meal, making guests feel special — remains the core of the role.",
        blsStats: { medianSalary: "$33,740", totalJobs: "2,513,100", growth: "+5%", growthLabel: "Faster than average" },
        aiCapability: {
          mastered: [
            { title: "Order placement and payment processing", desc: "QR code menus, tableside tablets, and mobile ordering let guests browse menus, place orders, and pay without server interaction — handling the most transactional parts of the dining experience." },
            { title: "Table and reservation management", desc: "AI optimizes table assignments, wait time estimates, and reservation scheduling to maximize covers and minimize guest wait times — replacing the host stand's guesswork with data-driven seating." },
          ],
          improving: [
            { title: "Menu personalization and upselling", desc: "AI can analyze guest preferences and order history to suggest dishes and drinks, but a great server who notices what you're eyeing on the menu, asks the right questions about your mood, and makes a recommendation you trust remains more persuasive." },
            { title: "Order timing and kitchen coordination", desc: "AI kitchen display systems optimize the sequence and timing of orders, but pacing a meal to the table's rhythm — knowing when they're lingering over wine versus ready for the check — is a human read." },
          ],
          humanOnly: [
            { title: "Reading the table and creating atmosphere", desc: "Knowing whether a couple wants to be left alone or is looking for restaurant recommendations, whether a business dinner needs formal pacing or relaxed conversation, and adapting your energy to each table is the art of serving." },
            { title: "Wine and menu expertise", desc: "Explaining the difference between two wines, suggesting dishes based on a guest's dietary needs and preferences, and building the narrative around a meal that makes dining out feel special requires genuine knowledge and passion." },
            { title: "Service recovery and guest relationships", desc: "When the kitchen makes a mistake, a dish arrives wrong, or a guest has a complaint, the server's ability to recover gracefully — with empathy, speed, and often a touch of humor — determines whether the guest comes back." },
          ]
        },
        tools: [
          { name: "Toast", url: "https://pos.toasttab.com", desc: "Leading restaurant POS platform with tableside ordering, kitchen display systems, and guest analytics. Mastering Toast's tools helps servers manage tables more efficiently and track guest preferences." },
          { name: "OpenTable", url: "https://www.opentable.com", desc: "AI-powered reservation and guest management platform that provides servers with guest history, dining preferences, and special occasion alerts. Use its guest notes to personalize every interaction." },
          { name: "Resy", url: "https://resy.com", desc: "Restaurant reservation platform with AI-powered table management and guest CRM. Increasingly used by upscale restaurants to manage guest relationships and optimize the dining room." },
        ],
        skills: [
          { text: "Use POS and tableside technology to manage orders efficiently while maintaining genuine guest connection", tool: "Toast" },
          { text: "Leverage guest management platforms to personalize service with guest history and preference data", tool: "OpenTable" },
          { text: "Develop deep wine and menu knowledge that makes your recommendations more valuable than any algorithm" },
          { text: "Master the art of reading tables — knowing when to engage, when to disappear, and how to pace a meal perfectly" },
          { text: "Build a personal following of regular guests who return specifically for your service — the most automation-proof skill in the industry" },
        ],
        faq: [
          { q: "Will tablets and QR codes replace servers?", a: "In fast-casual and counter-service restaurants, technology is reducing server roles. But in full-service and fine dining, the human server remains central to the experience. Restaurants that tried full tablet replacement saw customer satisfaction drop. The trend is toward technology that helps servers (guest preferences, order accuracy, payment speed) rather than replacing them." },
          { q: "Is serving a good career in the AI era?", a: "For skilled servers at quality restaurants, yes. BLS projects 5% growth. The earning potential through tips at fine dining and upscale restaurants is significant ($50-80K+ at top establishments). The key is moving up from fast-casual to full-service where hospitality skills command premium income and where automation pressure is lowest." },
          { q: "What separates great servers from ones AI could replace?", a: "If your job is taking orders and delivering food, technology can handle much of that. If your job is creating an experience — recommending the perfect dish, reading the energy of a table, recovering from kitchen mistakes with grace, and making guests feel genuinely cared for — you're doing work AI can't touch. Invest in wine education, food knowledge, and hospitality skills." },
        ],
        resources: [
          { title: "NRA — National Restaurant Association", url: "https://restaurant.org" },
          { title: "BLS — Waiters and Waitresses", url: "https://www.bls.gov/ooh/food-preparation-and-serving/waiters-and-waitresses.htm" },
          { title: "Court of Master Sommeliers", url: "https://www.mastersommeliers.org" },
          { title: "Fine Dining Lovers", url: "https://www.finedininglovers.com" },
          { title: "Eater — Restaurant Industry Coverage", url: "https://www.eater.com" },
        ],
        related: ["bartender", "restaurant-manager", "fast-food-worker", "chef"]
      },
      { id: "chef", title: "Chef / Head Cook", risk: 18, augment: 42,
        summary: "No — and the kitchen may be one of the last places AI fully conquers. Robot arms can flip burgers and fry chicken, but creating dishes that tell a story, managing a chaotic kitchen line, and developing the palate that defines a restaurant's identity are profoundly human acts. Fast food faces automation; fine dining does not.",
        keyInsight: "A robot can replicate a recipe. A chef creates one — tasting, adjusting, improvising based on what the ingredients tell them that day. The difference between automated food production and cooking is the difference between a factory and an art form.",
        aiChanging: "AI assists with recipe development by suggesting ingredient pairings, optimizes kitchen inventory to reduce food waste by 30-40%, and helps with menu engineering and food costing. Robotic kitchen stations handle individual prep tasks in fast food. But in full-service restaurants, the chef's creative vision, palate, and leadership remain the foundation.",
        blsStats: { medianSalary: "$56,520", totalJobs: "163,300", growth: "+6%", growthLabel: "Faster than average" },
        aiCapability: {
          mastered: [
            { title: "Inventory management and waste reduction", desc: "AI tracks ingredient usage, predicts demand by day and menu item, auto-generates purchase orders, and identifies waste patterns — reducing food cost by 5-10% and waste by 30-40% in restaurants that adopt these systems." },
            { title: "Menu engineering and pricing", desc: "AI analyzes dish profitability, customer ordering patterns, and food cost ratios to recommend menu design changes — identifying which dishes to promote, reprice, or remove for maximum profit." },
          ],
          improving: [
            { title: "Robotic food preparation", desc: "Robot arms handle specific stations — frying, grilling, bowl assembly, pizza making — with increasing reliability. But a single robot handles one task; a chef handles an entire kitchen's output, adapting in real time to the pace and chaos of service." },
            { title: "AI recipe development", desc: "AI can suggest novel ingredient combinations and flavor pairings based on molecular gastronomy data, but developing a dish that works on a plate — balancing texture, temperature, visual appeal, and emotional resonance — requires a human palate and creative vision." },
          ],
          humanOnly: [
            { title: "Tasting, seasoning, and quality judgment", desc: "The ability to taste a sauce and know it needs more acid, to adjust seasoning for humidity, to recognize when produce isn't at peak quality — this sensory judgment is built through years of cooking and cannot be replicated by sensors." },
            { title: "Kitchen leadership under pressure", desc: "Running a kitchen during a 300-cover dinner service — calling orders, managing timing across stations, handling equipment failures, motivating a stressed team, and maintaining quality when everything is moving at speed — is extreme human leadership." },
            { title: "Creative vision and culinary identity", desc: "Developing a restaurant's culinary point of view, creating seasonal menus that express a philosophy, and evolving dishes that become signatures requires the kind of creative authorship that defines an artist, not a technician." },
          ]
        },
        tools: [
          { name: "MarketMan", url: "https://www.marketman.com", desc: "AI-powered restaurant inventory management that automates purchasing, tracks food cost in real time, and reduces waste. Mastering inventory technology frees chefs to focus on cooking rather than counting." },
          { name: "Galley Solutions", url: "https://www.galleysolutions.com", desc: "AI recipe management and food costing platform that scales recipes, calculates plate costs, and manages nutritional data across menus. Essential for chefs running multi-unit or high-volume operations." },
          { name: "Tastewise", url: "https://www.tastewise.io", desc: "AI food intelligence platform that analyzes consumer trends, emerging ingredients, and flavor preferences from millions of data points. Use it for data-informed menu development and trend forecasting." },
        ],
        skills: [
          { text: "Use AI inventory management to reduce food waste and control costs without sacrificing ingredient quality", tool: "MarketMan" },
          { text: "Leverage food intelligence data to identify emerging trends and inform menu development decisions", tool: "Tastewise" },
          { text: "Master recipe scaling and food costing tools to manage profitability across complex menus", tool: "Galley Solutions" },
          { text: "Develop the palate, technique, and creative vision that define a chef's irreplaceable value — the sensory skills no AI possesses" },
          { text: "Build kitchen leadership skills for managing teams under extreme pressure — the human capability that keeps service running when everything goes sideways" },
        ],
        faq: [
          { q: "Will robot chefs replace human cooks?", a: "In fast food and high-volume production kitchens — partially. Robots handle individual stations (frying, grilling, assembly) with increasing reliability. But in full-service restaurants, the chef's role — tasting, adjusting, creating, leading a team through chaotic service — is deeply human. The culinary industry is splitting: automated food production for fast food, human artistry for restaurants where the food is the experience." },
          { q: "Is becoming a chef a good career in the AI era?", a: "Yes — especially for chefs who combine culinary skill with business acumen and technology literacy. BLS projects 6% growth. The restaurant industry's biggest challenge isn't automation — it's finding skilled cooks. Chefs who can manage food cost with AI tools, develop menus informed by data, and lead kitchens under pressure are in strong demand and command rising wages." },
          { q: "How are top restaurants using AI?", a: "AI handles the back-of-house operations that drain a chef's time: inventory management (automated ordering, waste tracking), menu engineering (profitability analysis, pricing optimization), and trend intelligence (emerging ingredients, consumer preferences). The best chefs use these tools to make smarter business decisions while spending more time on what matters — the food." },
        ],
        resources: [
          { title: "ACF — American Culinary Federation", url: "https://www.acfchefs.org" },
          { title: "BLS — Chefs and Head Cooks", url: "https://www.bls.gov/ooh/food-preparation-and-serving/chefs-and-head-cooks.htm" },
          { title: "James Beard Foundation", url: "https://www.jamesbeard.org" },
          { title: "Eater — Restaurant Industry Coverage", url: "https://www.eater.com" },
          { title: "CIA — Culinary Institute of America", url: "https://www.ciachef.edu" },
        ],
        related: ["restaurant-cook", "restaurant-manager", "fast-food-worker", "baker"]
      },
      { id: "bartender", title: "Bartender", risk: 22, augment: 42,
        summary: "No — bartending is one of the most AI-resistant jobs in hospitality. Robotic bartenders exist as novelties, but they can't read a room, comfort a regular, make a judgment call on overconsumption, or create the social atmosphere that people actually pay for. AI helps with inventory and recipe management, but the human connection IS the product.",
        keyInsight: "Robot bartenders can mix a drink in 60 seconds. But nobody goes to a bar for speed — they go for the conversation, the atmosphere, and the bartender who remembers their name. The social element of bartending is the product, not a side effect.",
        aiChanging: "AI-powered inventory management systems track pour costs and predict restock needs. Digital ordering systems and self-serve beer walls handle high-volume settings. Recipe databases and cocktail AI apps help with menu development. But the core job — making drinks, reading customers, managing the bar atmosphere — remains a thoroughly human craft.",
        blsStats: { medianSalary: "$33,390", totalJobs: "681,400", growth: "+6%", growthLabel: "Growing" },
        aiCapability: {
          mastered: [
            { title: "Inventory tracking and reorder management", desc: "AI-powered bar management systems track every pour, calculate real-time liquor costs, predict when stock will run out, and auto-generate reorder lists. What used to require hours of manual counting and spreadsheet work now happens automatically with greater accuracy." },
            { title: "Recipe databases and cocktail lookup", desc: "AI cocktail apps instantly surface recipes, suggest ingredient substitutions, and generate new cocktail ideas based on available inventory. Bartenders no longer need to memorize thousands of recipes — they need to know technique and flavor profiles." },
          ],
          improving: [
            { title: "Automated drink preparation", desc: "Robotic bartending systems can measure, mix, and pour standard cocktails with mechanical precision. They work in airports, cruise ships, and high-volume venues. But they can't adjust a recipe based on a customer's taste, improvise with limited stock, or create the theater of a craft cocktail." },
            { title: "Customer preference prediction", desc: "POS systems with AI can track customer order history and suggest personalized recommendations. But reading body language, sensing mood, knowing when someone needs to talk versus be left alone — that intuition remains beyond any algorithm." },
          ],
          humanOnly: [
            { title: "Reading the room and managing atmosphere", desc: "Knowing when to turn up the music, when to cut someone off, when to defuse a tense situation, and when to let a quiet conversation run its course. The bartender sets the tone of the entire establishment — a skill that's more art than science." },
            { title: "Responsible alcohol service", desc: "Making judgment calls about intoxication levels, handling fake IDs, refusing service diplomatically, and recognizing when a customer might be a danger to themselves or others. This is a legal responsibility that requires human observation and judgment." },
            { title: "Human connection and hospitality", desc: "Remembering regulars' names and orders, being the unofficial therapist, celebrating a customer's promotion, consoling after a breakup — the bartender is one of the last truly social professions. People don't come back for the drinks; they come back for the person making them." },
          ]
        },
        tools: [
          { name: "BevSpot", url: "https://www.bevspot.com", desc: "AI-powered bar inventory management platform that tracks usage, calculates pour costs, and generates automated purchase orders. Eliminates hours of manual counting and helps you manage profitability by the bottle." },
          { name: "Partender", url: "https://partender.com", desc: "Visual inventory app that uses photo recognition to estimate bottle levels and calculate sitting inventory value. Takes bar inventory from a 3-hour chore to a 15-minute scan." },
          { name: "Barback AI", url: "https://www.mixel.cc", desc: "AI cocktail recipe app that suggests drinks based on available ingredients, customer preferences, and seasonal trends. Useful for menu development and handling unusual customer requests." },
        ],
        skills: [
          { text: "Use AI-powered inventory systems to track pour costs and optimize profitability", tool: "BevSpot" },
          { text: "Leverage visual inventory tools to reduce waste and streamline ordering", tool: "Partender" },
          { text: "Use cocktail AI for menu innovation and handling unusual ingredient requests", tool: "Barback AI" },
          { text: "Master the craft cocktail techniques and flavor knowledge that separate bartenders from drink dispensers" },
          { text: "Develop the hospitality instincts — reading customers, managing atmosphere, and building loyalty — that make a bar worth returning to" },
        ],
        faq: [
          { q: "Will robots replace bartenders?", a: "Not meaningfully. Robot bartenders exist — you'll find them on some cruise ships and in gimmick bars — but they're novelties, not replacements. Nobody goes to a bar for efficient liquid delivery. They go for the atmosphere, the conversation, and the human connection. The bartender's real job isn't making drinks — it's creating an experience. And that's not something you can automate." },
          { q: "How is technology changing bartending?", a: "Technology is making the business side of bartending easier — AI inventory management, automated pour tracking, POS analytics, and recipe databases. Self-serve beer walls and automated cocktail machines handle high-volume, low-service environments. But for craft cocktail bars, neighborhood pubs, and anywhere the human experience matters, technology is a tool, not a replacement." },
          { q: "Is bartending a good career long-term?", a: "Bartending has strong long-term prospects precisely because it's so AI-resistant. Employment is growing, tips keep earnings well above the median wage, and the social skills transfer to management, sales, and hospitality leadership. The bartenders who learn business skills — cost management, menu development, team leadership — can move into bar management and ownership." },
        ],
        resources: [
          { title: "BLS — Bartenders", url: "https://www.bls.gov/ooh/food-preparation-and-serving/bartenders.htm" },
          { title: "United States Bartenders Guild", url: "https://www.usbg.org" },
          { title: "Tales of the Cocktail Foundation", url: "https://talesofthecocktail.org" },
          { title: "Difford's Guide — Cocktail Database", url: "https://www.diffordsguide.com" },
        ],
        related: ["server", "chef", "restaurant-manager", "fast-food-worker"]
      },
      { id: "restaurant-manager", title: "Restaurant Manager", risk: 25, augment: 72,
        summary: "Not the leadership — but the operational busywork is being automated fast. AI handles inventory ordering, staff scheduling, demand forecasting, and review monitoring. The restaurant managers who thrive use these tools to run tighter operations while spending more time on the floor — coaching staff, delighting guests, and handling the human crises that define the job.",
        keyInsight: "A restaurant manager's real job isn't placing orders or building schedules — it's the 50 micro-decisions per shift that no AI can make. Sending a complimentary dessert to the table that waited too long, reassigning sections when a server calls out, calming a kitchen during a Friday rush. That's management.",
        aiChanging: "AI automates inventory management and food cost tracking in real time. Predictive scheduling algorithms match staffing to demand patterns. Review aggregation tools surface customer sentiment across platforms. AI-powered POS systems provide real-time sales analytics and menu performance data. Managers spend less time in the back office and more time where they belong — on the floor.",
        blsStats: { medianSalary: "$63,060", totalJobs: "414,300", growth: "+3%", growthLabel: "Growing" },
        aiCapability: {
          mastered: [
            { title: "Inventory management and food cost tracking", desc: "AI platforms track ingredient usage, predict spoilage, auto-generate purchase orders based on sales forecasts, and calculate real-time food costs by menu item. Manual inventory counting and spreadsheet food-cost analysis are relics of a pre-AI kitchen." },
            { title: "Review monitoring and sentiment analysis", desc: "AI aggregates reviews from Google, Yelp, TripAdvisor, and social media — analyzing sentiment, flagging urgent complaints, identifying trends, and benchmarking against competitors. No manager needs to manually check five platforms anymore." },
          ],
          improving: [
            { title: "Predictive staff scheduling", desc: "AI analyzes historical sales data, local events, weather forecasts, and seasonal trends to predict demand and suggest optimal staffing levels. But the judgment calls — who works well together, who needs a break, how to handle last-minute callouts — remain human decisions." },
            { title: "Dynamic menu pricing and optimization", desc: "AI analyzes dish profitability, ingredient costs, order frequency, and market trends to suggest menu pricing and item placement. But deciding the restaurant's identity, curating the menu narrative, and balancing creativity with profitability requires a human with taste and vision." },
          ],
          humanOnly: [
            { title: "Floor leadership during service", desc: "Reading the energy of a dining room, knowing when to jump on the line to help a drowning kitchen, smoothing over a guest complaint with a genuine apology and a comp, managing the controlled chaos of a 200-cover Friday night — this is the irreducible core of restaurant management." },
            { title: "Staff development and culture", desc: "Building a team that stays in an industry with 75% annual turnover requires mentorship, motivation, conflict resolution, and creating a workplace culture people actually want to be part of. No algorithm builds loyalty." },
            { title: "Crisis management and improvisation", desc: "The walk-in compressor dies on a holiday weekend. A line cook walks out mid-service. A health inspector shows up during the lunch rush. A VIP has an allergic reaction. Restaurant management is crisis management — and that requires calm, creativity, and decisiveness under fire." },
          ]
        },
        tools: [
          { name: "MarketMan", url: "https://www.marketman.com", desc: "AI-powered restaurant inventory and supply chain platform that automates purchasing, tracks food costs in real time, and reduces waste. Replaces the clipboard-and-spreadsheet approach to inventory management." },
          { name: "7shifts", url: "https://www.7shifts.com", desc: "AI-driven restaurant scheduling platform with demand forecasting, labor cost optimization, and team communication. Builds schedules in minutes instead of hours while reducing labor costs by 1-3%." },
          { name: "Toast POS", url: "https://pos.toasttab.com", desc: "AI-enhanced restaurant POS with real-time analytics, menu performance insights, and integrated ordering. The restaurant-specific POS system with built-in AI for operational intelligence." },
          { name: "Popmenu", url: "https://get.popmenu.com", desc: "AI-powered restaurant marketing and customer engagement platform with automated review responses, personalized marketing, and AI-generated content for menus and social media." },
        ],
        skills: [
          { text: "Use AI inventory platforms to automate purchasing and track food costs in real time", tool: "MarketMan" },
          { text: "Leverage predictive scheduling to optimize staffing levels and reduce labor costs", tool: "7shifts" },
          { text: "Analyze POS data and AI-generated insights to optimize menu performance and pricing", tool: "Toast POS" },
          { text: "Automate review responses and marketing while maintaining the restaurant's authentic voice", tool: "Popmenu" },
          { text: "Develop the floor leadership and crisis management skills that define great restaurant managers" },
          { text: "Build the team culture and mentorship capabilities that reduce turnover in an industry known for it" },
        ],
        faq: [
          { q: "Will AI replace restaurant managers?", a: "No — but it's making good managers much more effective. AI handles inventory, scheduling, review monitoring, and sales analytics. But the human core of the job — floor leadership during service, staff mentorship, crisis management, guest recovery, and culture building — can't be automated. The managers who use AI tools run tighter operations and spend more time on the work that actually matters." },
          { q: "How is AI changing restaurant management?", a: "AI automates the back-office work that used to consume hours: inventory counts, schedule building, food cost tracking, and review monitoring. Predictive analytics help forecast demand and reduce waste. POS intelligence reveals which menu items drive profit. The effect: managers spend less time in the office and more time on the floor, coaching staff and delighting guests." },
          { q: "What makes a great restaurant manager in the AI era?", a: "The same things that always did — leadership under pressure, emotional intelligence, and the ability to create an experience people want to return to. AI handles the operational logistics. But reading a dining room, developing a team, recovering from service disasters, and making the fifty micro-decisions per shift that define hospitality — that's the human art that AI amplifies, not replaces." },
        ],
        resources: [
          { title: "NRA — National Restaurant Association", url: "https://restaurant.org" },
          { title: "BLS — Food Service Managers", url: "https://www.bls.gov/ooh/management/food-service-managers.htm" },
          { title: "Restaurant Business Online", url: "https://www.restaurantbusinessonline.com" },
          { title: "Nation's Restaurant News", url: "https://www.nrn.com" },
          { title: "Restaurant Hospitality", url: "https://www.restaurant-hospitality.com" },
        ],
        related: ["chef", "hotel-manager", "server", "fast-food-worker"]
      },
    ]
  },
  {
    id: "retail", name: "Retail & Customer Service", icon: "🛒", accent: "#ec4899",
    desc: "Chatbots, self-checkout, and demand forecasting are redefining retail — but human salesmanship endures.",
    jobs: [
      { id: "retail-salesperson", title: "Retail Salesperson", risk: 58, augment: 55,
        summary: "Partially — self-checkout, cashierless stores, and AI product recommendations are eliminating transactional retail jobs fast. But salespeople who build relationships, provide expert advice, and create in-store experiences are more valuable than an algorithm suggesting 'you might also like.'",
        keyInsight: "Amazon Go proved cashierless stores work. But Apple proved that the highest-revenue retail stores in the world are staffed by knowledgeable humans. The future of retail sales is expertise, not transactions.",
        aiChanging: "Self-checkout and cashierless technology eliminate transaction-focused roles. AI-powered clienteling tools give salespeople real-time customer history and product recommendations. Inventory management and pricing are increasingly automated.",
        blsStats: { medianSalary: "$33,680", totalJobs: "4,062,400", growth: "-2%", growthLabel: "Declining" },
        aiCapability: {
          mastered: [
            { title: "Checkout and payment processing", desc: "Self-checkout kiosks, mobile pay, and cashierless stores like Amazon Go handle transactions without human intervention — the core task of many retail workers is now automated." },
            { title: "Inventory tracking and restocking alerts", desc: "AI monitors shelf inventory via cameras and RFID, automatically generating restocking orders and alerting staff to out-of-stock items before customers notice." },
          ],
          improving: [
            { title: "Personalized product recommendations", desc: "AI analyzes purchase history, browsing behavior, and demographic data to suggest products, but in-store recommendations that account for what the customer is actually wearing, their mood, and unspoken preferences still need a human eye." },
            { title: "Virtual try-on and fitting", desc: "AI-powered mirrors and AR apps let customers visualize products virtually, but the honest opinion of a skilled salesperson about fit, style, and what actually looks good remains more trusted." },
          ],
          humanOnly: [
            { title: "Relationship-based selling", desc: "High-value retail — luxury, electronics, automotive — depends on salespeople who know their customers, build trust over time, and provide the kind of personalized service that turns shoppers into loyal clients." },
            { title: "Expert product knowledge and consultation", desc: "Explaining the difference between two similar products, recommending the right solution for a customer's specific situation, and standing behind that recommendation with personal credibility requires human expertise." },
            { title: "Creating in-store experiences", desc: "The reason people still go to stores is the experience — trying things on, getting advice, discovering new products, and the social aspect of shopping. Creating that environment is human work." },
          ]
        },
        tools: [
          { name: "Salesfloor", url: "https://www.salesfloor.net", desc: "AI-powered clienteling platform that gives retail associates customer profiles, purchase history, and personalized recommendations in real time. Use it to provide personalized service that online can't match." },
          { name: "Tulip", url: "https://www.tulip.com", desc: "AI retail associate platform with clienteling, mobile POS, and assisted selling features. Master its tools to deliver omnichannel experiences and track customer relationships across touchpoints." },
          { name: "RetailNext", url: "https://retailnext.net", desc: "AI-powered store analytics that tracks foot traffic, conversion rates, and customer behavior patterns. Understand your store's data to optimize your sales approach and floor presence." },
        ],
        skills: [
          { text: "Use AI clienteling tools to access customer history and preferences before they even ask", tool: "Salesfloor" },
          { text: "Deliver omnichannel assisted selling that connects in-store, online, and mobile customer journeys", tool: "Tulip" },
          { text: "Read store analytics to understand traffic patterns and optimize your selling time and floor position", tool: "RetailNext" },
          { text: "Develop deep product expertise that makes your recommendations more valuable than AI suggestions" },
          { text: "Build a personal book of business — loyal customers who come back specifically for you" },
        ],
        faq: [
          { q: "Will AI replace retail workers?", a: "It's already replacing transactional roles — cashiers, basic floor staff, inventory clerks. Self-checkout, cashierless stores, and automated inventory management are real and accelerating. But consultative salespeople, luxury retail associates, and in-store experience creators are growing in value. The split is clear: if your job is scanning barcodes, it's at risk. If your job is building relationships and providing expertise, you're safe." },
          { q: "Is retail a good career in the AI era?", a: "Transactional retail is declining. Consultative and experiential retail is stable or growing. The best career path in retail now leads through specialized product knowledge, clienteling technology, and the ability to create experiences customers can't get online. Luxury, electronics, and specialty retail offer the most durable roles." },
          { q: "How are the best retail stores using AI?", a: "Apple uses AI for inventory and scheduling but invests heavily in human 'Geniuses.' Nordstrom uses AI clienteling to give salespeople customer history. Nike uses AI for personalization but keeps expert staff in stores. The pattern: automate the operations, double down on the humans." },
        ],
        resources: [
          { title: "NRF — National Retail Federation", url: "https://nrf.com" },
          { title: "Retail Dive — Technology Coverage", url: "https://www.retaildive.com" },
          { title: "McKinsey — Future of Retail", url: "https://www.mckinsey.com/industries/retail" },
          { title: "BLS — Retail Sales Workers", url: "https://www.bls.gov/ooh/sales/retail-sales-workers.htm" },
          { title: "Forrester — Retail Technology Research", url: "https://www.forrester.com" },
        ],
        related: ["cashier", "customer-service-rep", "retail-store-manager"]
      },
      { id: "customer-service-rep", title: "Customer Service Representative", risk: 72, augment: 65,
        summary: "Mostly yes — for routine inquiries. AI chatbots now resolve 60-70% of customer contacts without a human. But complex complaints, emotional de-escalation, and high-value account retention still need real people. The role is shifting from answering questions to handling the cases AI can't.",
        keyInsight: "AI chatbots handle 70% of routine customer inquiries at a fraction of the cost. The remaining 30% — angry customers, complex problems, high-value accounts — is where human reps become more valuable than ever.",
        aiChanging: "AI chatbots and virtual assistants handle the majority of routine customer contacts — order status, returns, password resets, billing questions. Human reps are reserved for escalations, complex issues, and emotional situations where empathy matters. Call volumes are dropping but the remaining calls are harder.",
        blsStats: { medianSalary: "$39,680", totalJobs: "2,862,300", growth: "-5%", growthLabel: "Declining" },
        aiCapability: {
          mastered: [
            { title: "Routine inquiry resolution", desc: "AI chatbots handle order tracking, account lookups, password resets, return processing, and FAQ-type questions with near-instant responses — the repetitive work that once filled 60-70% of a rep's day." },
            { title: "Sentiment analysis and call routing", desc: "AI analyzes customer tone, language, and history in real time to score urgency and route calls to the right team — angry VIP customers get priority escalation before they even explain the problem." },
          ],
          improving: [
            { title: "Complex issue resolution", desc: "AI is getting better at troubleshooting multi-step technical problems and processing unusual requests, but when a customer's situation doesn't fit a script, human creativity and judgment still win." },
            { title: "Cross-selling and retention", desc: "AI can suggest upsells based on purchase history and flag at-risk accounts, but the persuasion, empathy, and relationship-building that actually save a customer or close a sale remain human skills." },
          ],
          humanOnly: [
            { title: "Emotional de-escalation", desc: "When a customer is furious, grieving, or panicking, they need a human who can listen, empathize, and make them feel heard. AI attempting to calm angry customers often makes things worse." },
            { title: "Complex problem-solving with judgment", desc: "Situations that span multiple systems, involve policy exceptions, or require creative solutions — like rebooking an entire ruined vacation — need human reps who can think outside the decision tree." },
            { title: "High-value relationship management", desc: "Enterprise clients and VIP accounts expect a named human contact who knows their history, anticipates their needs, and can make commitments on behalf of the company." },
          ]
        },
        tools: [
          { name: "Zendesk AI", url: "https://www.zendesk.com", desc: "AI-powered customer service platform with intelligent triage, automated responses, and agent assist that suggests real-time answers. Learn its AI features to handle higher volumes without sacrificing quality." },
          { name: "Intercom Fin", url: "https://www.intercom.com", desc: "AI customer service agent that resolves up to 50% of support conversations automatically using your knowledge base. Understanding how Fin works helps you handle the complex cases it escalates." },
          { name: "Salesforce Service Cloud", url: "https://www.salesforce.com/service-cloud", desc: "AI-enhanced service platform with Einstein AI for case classification, next-best-action recommendations, and automated workflows. Master its dashboards to manage escalations and track customer satisfaction." },
        ],
        skills: [
          { text: "Use AI agent-assist tools to resolve complex cases faster with real-time suggested responses and knowledge base surfacing", tool: "Zendesk AI" },
          { text: "Manage AI chatbot escalations — understanding what the bot already tried so you don't make the customer repeat themselves", tool: "Intercom Fin" },
          { text: "Leverage CRM intelligence to see full customer history and AI-recommended next-best-actions before each interaction", tool: "Salesforce Service Cloud" },
          { text: "Develop advanced de-escalation skills for the angry, complex, and emotional cases that AI can't handle" },
          { text: "Build expertise in high-value account retention — the human skill that directly drives revenue and is hardest to automate" },
        ],
        faq: [
          { q: "Will AI chatbots replace customer service reps?", a: "For routine inquiries — they already have. AI handles 60-70% of customer contacts at major companies. But the remaining cases — angry customers, complex multi-step problems, high-value accounts, and emotionally sensitive situations — are getting more concentrated among human reps. The role isn't disappearing; it's becoming harder and more valuable per interaction." },
          { q: "Is customer service a good career in the AI era?", a: "The entry-level, script-reading version of this job is shrinking fast. But skilled service professionals who handle escalations, manage enterprise accounts, and specialize in technical or high-value support are in demand. The career path leads toward customer success, account management, or team leadership — roles AI enhances rather than replaces." },
          { q: "What skills should customer service reps develop?", a: "Emotional intelligence and de-escalation are now your most valuable skills. Technical troubleshooting ability, proficiency with AI-powered CRM platforms, and the ability to handle complex multi-system issues will keep you employed. Think of yourself as the specialist who handles what AI cannot." },
        ],
        resources: [
          { title: "ICMI — International Customer Management Institute", url: "https://www.icmi.com" },
          { title: "Harvard Business Review — Customer Service", url: "https://hbr.org/topic/customer-service" },
          { title: "Forrester — Customer Experience Research", url: "https://www.forrester.com" },
          { title: "BLS — Customer Service Representatives", url: "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm" },
          { title: "CX Network — Customer Experience Insights", url: "https://www.cxnetwork.com" },
        ],
        related: ["retail-salesperson", "cashier", "administrative-assistant", "hr-manager"]
      },
      { id: "cashier", title: "Cashier", risk: 78, augment: 25,
        summary: "Yes — and it's already happening. Self-checkout kiosks, scan-and-go apps, and cashierless stores like Amazon Go are eliminating traditional cashier roles at scale. The jobs that remain are evolving toward customer service, loss prevention, and self-checkout supervision.",
        keyInsight: "Self-checkout now handles over 55% of transactions at major retailers. Amazon Go proved fully cashierless stores work at scale. The cashier role isn't evolving — it's being replaced by a self-checkout attendant role that oversees machines instead of operating one.",
        aiChanging: "Self-checkout kiosks, RFID-based cashierless systems, and mobile scan-and-go apps are replacing human-operated registers. Remaining cashier positions increasingly involve supervising self-checkout lanes, assisting customers with technology, and handling exceptions the machines can't process.",
        blsStats: { medianSalary: "$28,920", totalJobs: "3,338,300", growth: "-10%", growthLabel: "Declining" },
        aiCapability: {
          mastered: [
            { title: "Transaction processing", desc: "Self-checkout kiosks handle scanning, payment processing, and receipt generation for straightforward transactions — the core cashier task — at higher speed and lower cost than human-staffed registers." },
            { title: "Inventory tracking at point of sale", desc: "Every scanned item automatically updates inventory databases in real time, triggering restocking alerts and supply chain adjustments without manual counts or human data entry." },
          ],
          improving: [
            { title: "Computer vision checkout", desc: "Amazon's Just Walk Out technology and similar systems use cameras and sensors to detect what shoppers pick up and charge them automatically — no scanning required. Accuracy is improving but still struggles with produce, bulk items, and unusual packaging." },
            { title: "Age-restricted and exception handling", desc: "Self-checkout can prompt for ID verification on alcohol and age-restricted items, but still requires human intervention to verify IDs, handle coupons, process returns, and resolve scanner errors." },
          ],
          humanOnly: [
            { title: "Customer relationship and service", desc: "The friendly cashier who remembers regulars, makes small talk, helps elderly customers, and creates a welcoming store atmosphere provides a human experience that some retailers — especially local businesses — consider a competitive advantage." },
            { title: "Loss prevention and judgment calls", desc: "Identifying shoplifting, handling suspicious behavior, managing self-checkout fraud like scan avoidance and barcode switching, and making judgment calls about when to intervene require human awareness and social judgment." },
            { title: "Complex transaction handling", desc: "WIC payments, split tenders, price disputes, rain checks, and other edge-case transactions still require human flexibility — they're the reason self-checkout lanes still have an attendant button." },
          ]
        },
        tools: [
          { name: "NCR Voyix", url: "https://www.ncrvoyix.com", desc: "Leading self-checkout and point-of-sale technology powering checkout systems at major retailers. Understanding NCR systems helps cashiers transition into self-checkout attendant and retail technology roles." },
          { name: "Grabango", url: "https://www.grabango.com", desc: "Checkout-free technology that retrofits existing stores with computer vision to enable grab-and-go shopping. Familiarity with cashierless technology is essential for understanding where the industry is headed." },
          { name: "Square POS", url: "https://squareup.com", desc: "AI-enhanced point-of-sale system with inventory management, customer analytics, and automated reporting. Small and mid-size businesses still rely on human-operated POS systems with these AI features." },
        ],
        skills: [
          { text: "Supervise and troubleshoot self-checkout systems, resolving errors and assisting customers efficiently", tool: "NCR Voyix" },
          { text: "Operate modern POS systems with AI-powered inventory tracking and customer analytics features", tool: "Square POS" },
          { text: "Develop loss prevention awareness — identifying self-checkout fraud, scan avoidance, and suspicious behavior" },
          { text: "Build customer service skills that differentiate human-staffed registers from self-checkout lanes" },
          { text: "Learn retail technology fundamentals to transition into store technology, inventory management, or retail operations roles" },
        ],
        faq: [
          { q: "Will AI replace cashiers?", a: "It's already happening at scale. Self-checkout handles over 55% of transactions at many retailers, Amazon has deployed cashierless stores, and major chains are piloting checkout-free technology. BLS projects a 10% decline in cashier jobs. The role isn't disappearing overnight — 3.3 million cashiers still work in the US — but the trajectory is clear and accelerating." },
          { q: "What jobs can cashiers transition to?", a: "The most natural transitions are self-checkout attendant, retail customer service specialist, loss prevention associate, inventory management, and store operations roles. Cashiers with strong people skills can move into sales associate roles where human interaction adds value. The key is pivoting from transaction processing to customer experience and store operations." },
          { q: "Are cashier jobs at small businesses safer?", a: "Somewhat. Small businesses adopt self-checkout technology more slowly due to cost and space constraints. Local shops, specialty stores, and businesses where personal service is the brand may keep human cashiers longer. But even small businesses are adopting mobile POS and tap-to-pay systems that reduce cashier complexity." },
        ],
        resources: [
          { title: "NRF — National Retail Federation", url: "https://nrf.com" },
          { title: "BLS — Cashiers", url: "https://www.bls.gov/ooh/sales/cashiers.htm" },
          { title: "Retail Dive — Checkout Technology", url: "https://www.retaildive.com" },
          { title: "Progressive Grocer — Store Technology", url: "https://progressivegrocer.com" },
          { title: "RILA — Retail Industry Leaders Association", url: "https://www.rila.org" },
        ],
        related: ["retail-salesperson", "customer-service-rep", "fast-food-worker", "warehouse-worker"]
      },
      { id: "call-center-agent", title: "Call Center Agent", risk: 78, augment: 55,
        summary: "Yes — for routine calls. AI voice agents now handle millions of customer calls daily, resolving billing questions, account changes, and basic troubleshooting without a human. The agents who remain handle escalations, complex problems, and emotionally charged conversations. Call centers are shrinking fast, but the surviving roles are harder and more skilled.",
        keyInsight: "AI voice agents resolve 40-60% of inbound calls at major companies — and the percentage is rising every quarter. The call center agent of the future isn't someone who reads scripts; it's someone who handles the calls AI couldn't solve.",
        aiChanging: "AI handles first-contact resolution for routine calls — billing inquiries, password resets, appointment scheduling, status checks. Interactive voice response (IVR) systems powered by natural language AI replace touchtone menus. AI agent-assist tools provide real-time coaching during live calls. The result: fewer agents handling harder calls with better tools.",
        blsStats: { medianSalary: "$36,920", totalJobs: "2,834,800", growth: "-6%", growthLabel: "Declining" },
        aiCapability: {
          mastered: [
            { title: "Routine call resolution", desc: "AI voice agents handle billing inquiries, account lookups, appointment scheduling, password resets, and FAQ-type questions with natural-sounding speech — resolving 40-60% of inbound calls without human intervention at major companies." },
            { title: "Call routing and classification", desc: "AI listens to the first seconds of a call, classifies the intent, gauges urgency, and routes to the right queue — replacing the old IVR menus with natural language understanding that gets callers to help faster." },
          ],
          improving: [
            { title: "Complex troubleshooting", desc: "AI is getting better at walking callers through multi-step troubleshooting (tech support, billing disputes, service outages) but still struggles when the problem is unusual, the caller is confused, or the issue spans multiple systems." },
            { title: "Real-time agent coaching", desc: "AI listens to live calls and provides agents with real-time suggestions — relevant knowledge base articles, compliance reminders, upsell prompts, and de-escalation tips. Quality is improving but agents still need judgment about when to follow AI suggestions." },
          ],
          humanOnly: [
            { title: "Emotional de-escalation on the phone", desc: "A caller who's been on hold for 30 minutes, received a surprise bill, or is dealing with a service failure needs to feel heard by a human voice. AI attempting to calm angry callers frequently backfires — empathy requires a real person." },
            { title: "Complex, multi-system problem resolution", desc: "When a caller's issue involves multiple accounts, system errors, policy exceptions, and cross-department coordination, the agent who can navigate all of it while keeping the customer informed does work no decision tree can match." },
            { title: "Sales through rapport", desc: "Converting an inbound service call into a sale, retaining a customer who's threatening to cancel, or navigating a sensitive upsell requires reading tone, timing, and emotional state — human persuasion skills AI voice agents can't replicate." },
          ]
        },
        tools: [
          { name: "Five9", url: "https://www.five9.com", desc: "AI-powered cloud contact center platform with intelligent virtual agents, agent assist, and workforce optimization. The leading enterprise call center platform — understanding its AI features is essential for modern agents." },
          { name: "NICE CXone", url: "https://www.nice.com", desc: "AI-driven contact center suite with conversational AI, real-time interaction guidance, and quality management. Its agent-assist tools provide live coaching during calls to improve resolution and compliance." },
          { name: "Dialpad Ai", url: "https://www.dialpad.com", desc: "AI-powered communications platform with real-time transcription, sentiment analysis, and automated call summaries. Helps agents focus on the conversation rather than note-taking." },
        ],
        skills: [
          { text: "Handle the complex escalations AI voice agents can't resolve — multi-system issues, policy exceptions, and cross-department coordination", tool: "Five9" },
          { text: "Use real-time AI coaching tools during live calls to access knowledge base articles and compliance guidance instantly", tool: "NICE CXone" },
          { text: "Leverage AI transcription and sentiment analysis to focus on the conversation rather than manual documentation", tool: "Dialpad Ai" },
          { text: "Develop advanced phone-based de-escalation skills — the ability to calm angry callers using only your voice is the most valuable and AI-resistant call center skill" },
          { text: "Build retention and save skills — agents who can keep customers from canceling directly drive revenue and are the last to be automated" },
        ],
        faq: [
          { q: "Will AI replace call center agents?", a: "For routine calls — it's already happening at massive scale. AI voice agents handle 40-60% of inbound calls at major companies, and that percentage grows every quarter. BLS projects a 6% decline. But complex calls, angry customers, and high-value retention conversations still need humans. The call center is shrinking, but the remaining roles are more skilled and harder to automate." },
          { q: "How should call center agents prepare?", a: "Specialize in what AI can't do: emotional de-escalation, complex multi-system problem resolution, and sales-through-service. Learn the AI tools (agent assist, CRM intelligence, real-time coaching) to handle calls more efficiently. Consider transitioning into quality assurance, training, or workforce management — roles that oversee AI and human performance in the call center." },
          { q: "What call center jobs are most AI-resistant?", a: "Technical support for complex products, enterprise B2B account management, healthcare and financial services (heavily regulated), and retention/save teams (where human persuasion directly drives revenue). The more emotional, complex, or regulated the calls, the more resistant the role is to AI replacement." },
        ],
        resources: [
          { title: "ICMI — International Customer Management Institute", url: "https://www.icmi.com" },
          { title: "BLS — Customer Service Representatives", url: "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm" },
          { title: "Contact Center Pipeline", url: "https://www.contactcenterpipeline.com" },
          { title: "CX Today — Contact Center Technology", url: "https://www.cxtoday.com" },
          { title: "COPC — Contact Center Standards", url: "https://www.copc.com" },
        ],
        related: ["customer-service-rep", "retail-salesperson", "insurance-agent", "telemarketer"]
      },
      { id: "insurance-agent", title: "Insurance Agent", risk: 52, augment: 78,
        summary: "Partially — AI-driven comparison platforms and direct-to-consumer insurance are eliminating agents who only sell simple policies. But complex commercial insurance, high-net-worth personal lines, and claims advocacy require relationship-building and judgment that algorithms can't replicate. The agents who survive are advisors, not order-takers.",
        keyInsight: "Lemonade processes claims in 3 seconds using AI. GEICO sells auto policies online without an agent. But when a business owner needs a $5M umbrella policy covering three LLCs across four states, they call a human. Complexity is the agent's job security.",
        aiChanging: "AI comparison engines let consumers shop auto and home insurance instantly. Direct-to-consumer platforms bypass agents entirely for simple policies. AI underwriting models price risk in milliseconds. The agents who thrive sell complex commercial, life, and specialty policies where human expertise and relationship trust justify the commission.",
        blsStats: { medianSalary: "$59,080", totalJobs: "553,000", growth: "-2%", growthLabel: "Declining" },
        aiCapability: {
          mastered: [
            { title: "Simple policy quoting and comparison", desc: "AI-powered comparison platforms generate quotes for auto, renters, and basic home insurance in seconds — comparing dozens of carriers on price, coverage, and deductibles. Consumers no longer need an agent to shop for standard personal lines insurance." },
            { title: "Underwriting for standard risks", desc: "AI underwriting models evaluate standard insurance applications using credit data, driving records, property characteristics, and actuarial models — approving and pricing routine policies instantly without human review." },
          ],
          improving: [
            { title: "Claims processing and assessment", desc: "AI handles first notice of loss, damage assessment from photos, and straightforward claims settlement. Lemonade famously settled a claim in 3 seconds. But complex claims — disputed liability, large commercial losses, bad-faith allegations — still require human adjusters and agent advocacy." },
            { title: "Risk assessment for non-standard situations", desc: "AI is improving at evaluating unusual risks — homes in flood zones, businesses in emerging industries, high-value collections — but the nuances of coverage gaps, exclusion interpretation, and creative risk transfer still require experienced human judgment." },
          ],
          humanOnly: [
            { title: "Complex commercial insurance design", desc: "Designing insurance programs for businesses with multiple locations, diverse exposures, fleet vehicles, professional liability, cyber risk, and key-person coverage requires understanding the business deeply and crafting coverage that off-the-shelf AI platforms can't match." },
            { title: "Claims advocacy and negotiation", desc: "When a major claim is denied, underpaid, or disputed, the agent who advocates for their client — challenging the carrier's interpretation, negotiating settlements, and navigating the appeals process — provides value no comparison website can replace." },
            { title: "Life events and relationship advisory", desc: "Marriage, new baby, business launch, retirement, estate planning — these life transitions require a trusted advisor who understands the client's full financial picture and can recommend coverage changes proactively. This consultative relationship is the agent's moat." },
          ]
        },
        tools: [
          { name: "Applied Epic", url: "https://www.appliedsystems.com/en-us/products/applied-epic/", desc: "AI-enhanced insurance agency management platform for policy administration, client management, and carrier connectivity. The industry-standard system that automates back-office work so agents can focus on selling and advising." },
          { name: "HawkSoft", url: "https://www.hawksoft.com", desc: "Agency management system with AI-powered workflow automation, document management, and client communication tools. Particularly popular with independent agencies looking to compete with direct carriers on efficiency." },
          { name: "Zywave", url: "https://www.zywave.com", desc: "AI-powered content and analytics platform for insurance professionals with risk assessment tools, prospect analysis, and client-facing educational content. Positions agents as risk advisors rather than policy sellers." },
          { name: "Lemonade", url: "https://www.lemonade.com", desc: "AI-native insurance carrier that sells and services policies entirely through bots and algorithms. Understanding how Lemonade works helps traditional agents articulate the value they provide that AI-only carriers cannot." },
        ],
        skills: [
          { text: "Use AI-powered agency management platforms to automate policy administration and free time for client advisory", tool: "Applied Epic" },
          { text: "Leverage AI analytics to identify coverage gaps and cross-sell opportunities across your book of business", tool: "Zywave" },
          { text: "Understand AI-native competitors like Lemonade so you can articulate the value human agents provide for complex needs", tool: "Lemonade" },
          { text: "Develop deep commercial insurance expertise — the complexity of business coverage is your strongest defense against AI disintermediation" },
          { text: "Build the trusted advisor relationships where clients call you before making major life or business decisions" },
          { text: "Master claims advocacy skills — fighting for clients during disputed or complex claims is the highest-value agent function" },
        ],
        faq: [
          { q: "Will AI replace insurance agents?", a: "For simple policies — it already is. Consumers buy auto and renters insurance online without an agent. But complex commercial insurance, high-net-worth personal lines, and life insurance still rely heavily on human agents. The agents being displaced sell simple products at commodity prices. The agents thriving sell complexity, provide claims advocacy, and build relationships that justify their commission." },
          { q: "Is insurance agent a good career in 2025?", a: "It depends on what you sell. Agents focused on personal auto and basic home insurance face direct competition from AI-powered platforms. But agents specializing in commercial insurance, employee benefits, life insurance, or high-net-worth personal lines have strong demand, high earnings potential, and roles that AI enhances rather than replaces. The industry has a significant age-related talent gap as experienced agents retire." },
          { q: "How should insurance agents adapt to AI?", a: "Move upmarket. Specialize in commercial lines, complex personal risk, or employee benefits where AI comparison shopping doesn't work. Use AI tools to automate back-office work (quoting, renewals, certificate management) so you can spend more time advising clients. Position yourself as a risk advisor, not a policy seller. And build the claims advocacy skills that prove your value when a client needs you most." },
        ],
        resources: [
          { title: "BLS — Insurance Sales Agents", url: "https://www.bls.gov/ooh/sales/insurance-sales-agents.htm" },
          { title: "IIABA — Independent Insurance Agents", url: "https://www.independentagent.com" },
          { title: "Insurance Journal — Industry News", url: "https://www.insurancejournal.com" },
          { title: "CPCU Society — Professional Development", url: "https://www.cpcusociety.org" },
          { title: "InsurTech Hartford — Insurance Innovation", url: "https://www.insurtechhartford.com" },
        ],
        related: ["financial-planner", "call-center-agent", "b2b-sales-rep", "claims-adjuster"]
      },
    ]
  },
  {
    id: "manufacturing", name: "Manufacturing & Production", icon: "🏭", accent: "#78716c",
    desc: "Robotics and predictive maintenance are transforming factory floors. Engineers and technicians must adapt.",
    jobs: [
      { id: "machinist", title: "Machinist", risk: 35, augment: 60,
        summary: "Not yet — CNC automation handles repetitive production runs, but setup, programming, troubleshooting, and precision work on custom parts still need skilled machinists. The trade is evolving from manual operation to CNC programming and quality oversight.",
        keyInsight: "There's a critical machinist shortage — over 500,000 manufacturing jobs are unfilled. Machinists who can program CNC machines AND understand traditional metalworking command premium wages with near-total job security.",
        aiChanging: "AI-optimized toolpaths reduce cycle times by 15-25%. Machine learning monitors tool wear and predicts breakdowns before they happen. Automated quality inspection catches defects in real time. But setting up a new job, programming the machine, and troubleshooting problems still requires a skilled human.",
        blsStats: { medianSalary: "$47,940", totalJobs: "376,600", growth: "-3%", growthLabel: "Declining" },
        aiCapability: {
          mastered: [
            { title: "Repetitive production runs", desc: "CNC machines run identical parts 24/7 with sub-thousandth-inch precision once programmed — lights-out manufacturing for high-volume production is already standard in many shops." },
            { title: "In-process quality inspection", desc: "AI vision systems and coordinate measuring machines inspect every part during production, catching dimensional errors and surface defects faster and more consistently than manual inspection." },
          ],
          improving: [
            { title: "AI-generated toolpaths and G-code", desc: "CAM software increasingly suggests optimal toolpaths, feeds, and speeds based on material properties and tool geometry, but complex part geometries and unusual materials still require experienced programmer judgment." },
            { title: "Predictive tool wear monitoring", desc: "AI analyzes vibration, sound, and power draw to predict when cutting tools will fail, but interpreting these signals in context — different materials, operations, and machine conditions — still benefits from machinist experience." },
          ],
          humanOnly: [
            { title: "Job setup and first-article runs", desc: "Setting up a CNC machine for a new part — fixturing the workpiece, loading tools, proving out the program, and dialing in tolerances on the first article — is skilled hands-on work that requires spatial reasoning and material knowledge." },
            { title: "Custom and prototype work", desc: "One-off parts, prototype development, and repair machining require the ability to read drawings, select approaches, and make judgment calls that only come with years of experience cutting metal." },
            { title: "Machine troubleshooting and repair", desc: "When a CNC machine throws an alarm, makes a bad part, or starts vibrating — diagnosing the root cause (tooling, programming, mechanical, or material issue) requires the kind of intuition built through thousands of hours of hands-on experience." },
          ]
        },
        tools: [
          { name: "Mastercam", url: "https://www.mastercam.com", desc: "Industry-leading CAM software with AI-assisted toolpath generation for CNC milling, turning, and multi-axis machining. Mastering Mastercam is the single most valuable technical skill for modern machinists." },
          { name: "MachineMetrics", url: "https://www.machinemetrics.com", desc: "AI-powered machine monitoring platform that tracks OEE, predicts maintenance needs, and optimizes production scheduling. Use its analytics to identify bottlenecks and improve your shop's efficiency." },
          { name: "Autodesk Fusion 360", url: "https://www.autodesk.com/products/fusion-360", desc: "Integrated CAD/CAM/CAE platform with AI-powered generative design and machining simulation. Learn it to handle the full design-to-manufacturing workflow in one tool." },
        ],
        skills: [
          { text: "Program CNC machines using AI-assisted CAM software for optimal toolpaths and cycle times", tool: "Mastercam" },
          { text: "Monitor machine performance and predict maintenance needs using AI production analytics", tool: "MachineMetrics" },
          { text: "Use integrated CAD/CAM platforms to read designs and generate manufacturing programs directly", tool: "Autodesk Fusion 360" },
          { text: "Develop expertise in multi-axis CNC machining — the fastest-growing and highest-paid machining specialty" },
          { text: "Maintain hands-on skills in setup, fixturing, and troubleshooting that CNC automation can't replace" },
        ],
        faq: [
          { q: "Will CNC machines and robots replace machinists?", a: "CNC machines have already replaced manual machining for production work. But they created a new role: the CNC machinist/programmer who sets up, programs, and troubleshoots these machines. That role is in massive demand — over 500,000 manufacturing positions are unfilled. Machinists who program and maintain CNC equipment have strong job security." },
          { q: "Is machining a good career in 2025?", a: "Yes — especially with the manufacturing reshoring trend and critical skilled-labor shortage. Starting wages are rising fast, experienced CNC programmers earn $60-80K+, and the demand far exceeds supply. It's one of the few careers where AI is actually increasing demand for the human role by making manufacturing more productive." },
          { q: "What should machinists learn to stay relevant?", a: "CNC programming (G-code and CAM software like Mastercam), multi-axis machining, GD&T (geometric dimensioning and tolerancing), and basic data literacy for machine monitoring systems. The machinist of the future programs machines, interprets AI-generated toolpaths, and troubleshoots problems — not just pushing buttons." },
        ],
        resources: [
          { title: "SME — Society of Manufacturing Engineers", url: "https://www.sme.org" },
          { title: "Modern Machine Shop", url: "https://www.mmsonline.com" },
          { title: "NIMS — National Institute for Metalworking Skills", url: "https://www.nims-skills.org" },
          { title: "BLS — Machinists and Tool Makers", url: "https://www.bls.gov/ooh/production/machinists-and-tool-and-die-makers.htm" },
          { title: "Titans of CNC — Training Resources", url: "https://titansofc.com" },
        ],
        related: ["cnc-machinist", "welder", "industrial-engineer", "mechanical-engineer"]
      },
      { id: "assembly-worker", title: "Assembly Line Worker", risk: 72, augment: 28,
        summary: "Yes — and it's been happening for decades. Industrial robots now perform welding, painting, material handling, and repetitive assembly tasks faster and more consistently than humans. But mixed-model assembly, delicate component handling, and quality judgment calls still need human workers. The remaining roles increasingly involve tending and monitoring robots rather than performing manual assembly.",
        keyInsight: "The automotive industry has automated 80%+ of welding and painting, but final assembly — where hundreds of parts with varying shapes, wires, and flexible components come together — remains 60-70% human. Full automation of complex assembly is possible but enormously expensive.",
        aiChanging: "Industrial robots handle welding, painting, heavy lifting, and repetitive pick-and-place tasks. Collaborative robots (cobots) work alongside humans on mixed assembly lines. AI vision systems inspect quality at every station. The human role is shifting from performing repetitive motions to overseeing robots, handling exceptions, and managing the flexible tasks automation can't match.",
        blsStats: { medianSalary: "$36,390", totalJobs: "1,555,200", growth: "-4%", growthLabel: "Declining" },
        aiCapability: {
          mastered: [
            { title: "Welding, painting, and material handling", desc: "Industrial robots perform spot welding, arc welding, spray painting, and heavy material handling with superhuman speed, precision, and consistency — these tasks are 80-95% automated in modern factories." },
            { title: "Quality inspection", desc: "AI vision systems inspect every part on the line, detecting dimensional defects, surface flaws, missing components, and assembly errors faster and more consistently than human inspectors using calipers and gauges." },
          ],
          improving: [
            { title: "Flexible and mixed-model assembly", desc: "Robots are getting better at handling different product variants on the same line, but switching between models, managing hundreds of part variations, and adapting to engineering changes mid-production still challenges automated systems." },
            { title: "Collaborative robot (cobot) assembly", desc: "Cobots work alongside humans on tasks like component insertion, wire routing, and sub-assembly — sharing the workspace safely. But programming cobots for new tasks and managing the human-robot workflow requires human oversight." },
          ],
          humanOnly: [
            { title: "Delicate and flexible component handling", desc: "Routing wire harnesses, connecting flexible hoses, inserting clips and fasteners in tight spaces, and handling components that deform under gripper pressure require human dexterity and tactile feedback that robots struggle to replicate." },
            { title: "Troubleshooting and line problem-solving", desc: "When a part doesn't fit, a machine jams, or a quality issue appears, the experienced assembler who can diagnose the root cause, adjust the process, and get the line running again is invaluable — and hard to automate." },
            { title: "New product launch and prototype assembly", desc: "Building the first units of a new product — when processes are being developed, tolerances are being tuned, and problems are being discovered — requires the adaptability and problem-solving that only human workers provide." },
          ]
        },
        tools: [
          { name: "Universal Robots", url: "https://www.universal-robots.com", desc: "Leading collaborative robot (cobot) manufacturer. Assembly workers who can program, tend, and troubleshoot cobots are the most valuable workers on modern assembly lines." },
          { name: "Cognex", url: "https://www.cognex.com", desc: "AI-powered machine vision systems for quality inspection, barcode reading, and assembly verification. Understanding how these systems work helps assemblers maintain quality standards alongside automated inspection." },
          { name: "Plex (Rockwell)", url: "https://www.plex.com", desc: "Cloud-based manufacturing execution system (MES) that tracks production, quality, and inventory in real time. Literacy with MES platforms is increasingly required for assembly workers in modern factories." },
        ],
        skills: [
          { text: "Program, tend, and troubleshoot collaborative robots — the skill that separates modern assemblers from those being replaced", tool: "Universal Robots" },
          { text: "Understand AI vision inspection systems and respond appropriately to automated quality alerts", tool: "Cognex" },
          { text: "Use manufacturing execution systems to track production, report issues, and maintain quality documentation", tool: "Plex (Rockwell)" },
          { text: "Develop mechanical aptitude and troubleshooting skills for diagnosing and resolving line problems quickly" },
          { text: "Pursue automation technician or maintenance certifications to transition into higher-paying, more secure roles that support the robots rather than compete with them" },
        ],
        faq: [
          { q: "Will robots replace all assembly line workers?", a: "For repetitive, single-task work — largely yes, and it's already happened in welding, painting, and material handling. But complete automation of complex assembly (like automotive final assembly) remains 60-70% human because of the extraordinary variety of parts, the difficulty of handling flexible components, and the enormous capital cost of full automation. The remaining human roles are more skilled and involve robot tending, quality judgment, and troubleshooting." },
          { q: "Is manufacturing still a viable career?", a: "Yes — but the roles are changing. Entry-level repetitive assembly jobs are declining. But robot technicians, maintenance mechanics, quality technicians, and CNC operators are in massive demand. The manufacturing skills gap (500,000+ unfilled positions) means workers with technical skills have strong job security and rising wages. The key is moving up the skill ladder." },
          { q: "How should assembly workers prepare for more automation?", a: "Get trained on the machines, not just the manual work. Cobot programming, basic PLC knowledge, machine vision system operation, and preventive maintenance skills transform you from someone robots replace to someone who keeps robots running. Many manufacturers offer cross-training programs — take every opportunity to learn automation technology." },
        ],
        resources: [
          { title: "SME — Society of Manufacturing Engineers", url: "https://www.sme.org" },
          { title: "BLS — Assemblers and Fabricators", url: "https://www.bls.gov/ooh/production/assemblers-and-fabricators.htm" },
          { title: "NAM — National Association of Manufacturers", url: "https://www.nam.org" },
          { title: "Robotics Industries Association", url: "https://www.automate.org" },
          { title: "IndustryWeek — Manufacturing Coverage", url: "https://www.industryweek.com" },
        ],
        related: ["machinist", "quality-inspector", "industrial-engineer", "maintenance-tech"]
      },
      { id: "mechanical-engineer", title: "Mechanical Engineer", risk: 22, augment: 88,
        summary: "Not the engineering judgment — but the design iteration cycle is being compressed dramatically. AI generates optimized geometries, runs thousands of simulations overnight, and produces manufacturing-ready designs from performance requirements. Mechanical engineers who use these tools design better products faster. But understanding physics, making trade-off decisions, and solving novel problems remain deeply human.",
        keyInsight: "Generative design AI created a partition wall bracket for Airbus that was 45% lighter than the human-designed version — a shape no human engineer would have conceived. But a human engineer had to define the problem, validate the result, and decide it was safe to fly. AI is the engine; the engineer is the pilot.",
        aiChanging: "AI generative design explores thousands of structural options in hours. Simulation tools run overnight analyses that once took weeks. AI-assisted CAD predicts design intent and automates repetitive modeling tasks. Topology optimization produces organic shapes impossible to design manually. Engineers spend less time on routine analysis and more on innovation, integration, and judgment.",
        blsStats: { medianSalary: "$96,310", totalJobs: "282,200", growth: "+2%", growthLabel: "Stable" },
        aiCapability: {
          mastered: [
            { title: "Structural simulation and FEA", desc: "AI-powered finite element analysis runs thousands of load cases, identifies stress concentrations, and suggests design modifications automatically. Simulations that once took a week of setup and overnight solving now produce results in hours with greater accuracy." },
            { title: "Repetitive CAD operations", desc: "AI-assisted CAD tools predict design intent, auto-complete features, generate standard components, and automate repetitive modeling tasks like hole patterns, fillets, and assembly constraints. The tedious parts of 3D modeling are increasingly handled by intelligent automation." },
          ],
          improving: [
            { title: "Generative and topology-optimized design", desc: "AI generates structurally optimal geometries from performance requirements and constraints — producing organic shapes that minimize weight while meeting strength targets. But evaluating manufacturability, cost implications, and integration with other systems still requires engineering judgment." },
            { title: "Predictive maintenance and failure analysis", desc: "AI models predict component wear, fatigue failure, and maintenance schedules from sensor data and operational history. But diagnosing unexpected failures, understanding root causes, and designing fixes for novel failure modes remains human engineering work." },
          ],
          humanOnly: [
            { title: "System-level integration and trade-offs", desc: "A product isn't a collection of optimized parts — it's an integrated system where every decision affects everything else. Balancing weight vs. cost vs. manufacturability vs. reliability vs. timeline requires human judgment, experience, and the ability to negotiate trade-offs across disciplines." },
            { title: "Novel problem-solving and innovation", desc: "When a mechanism jams in ways the simulation didn't predict, when a new material behaves unexpectedly, when a customer needs something that doesn't exist yet — these are the problems that require creative engineering thinking that draws on experience, intuition, and physical understanding." },
            { title: "Cross-disciplinary collaboration", desc: "Working with electrical engineers, software teams, manufacturing, supply chain, and customers to bring a product from concept to production requires communication, negotiation, and the ability to bridge technical domains — leadership that no AI can provide." },
          ]
        },
        tools: [
          { name: "Autodesk Fusion (AI)", url: "https://www.autodesk.com/products/fusion-360/", desc: "AI-powered CAD/CAM/CAE platform with generative design that creates optimized geometries from performance requirements. The all-in-one tool for AI-assisted mechanical design, simulation, and manufacturing." },
          { name: "Ansys SimAI", url: "https://www.ansys.com/products/simai", desc: "AI-accelerated simulation platform that uses machine learning to predict simulation results in seconds instead of hours. Enables engineers to explore more design variations and make faster decisions." },
          { name: "nTopology", url: "https://www.ntopology.com", desc: "AI-enhanced computational design platform for advanced geometry generation — lattice structures, topology optimization, and functional design that would be impossible to create manually." },
          { name: "PTC Creo (AI)", url: "https://www.ptc.com/en/products/creo", desc: "Enterprise CAD platform with AI-powered generative design, simulation-driven design, and real-time simulation capabilities. The engineering standard enhanced with intelligent design assistance." },
        ],
        skills: [
          { text: "Use AI generative design to explore structural solutions beyond human intuition and traditional design approaches", tool: "Autodesk Fusion (AI)" },
          { text: "Leverage AI-accelerated simulation to evaluate more design options faster and with greater confidence", tool: "Ansys SimAI" },
          { text: "Create advanced geometries — lattice structures, topology-optimized parts — enabled by computational design tools", tool: "nTopology" },
          { text: "Integrate AI design tools into the full product development workflow from concept through manufacturing", tool: "PTC Creo (AI)" },
          { text: "Develop the system-level thinking and trade-off judgment that turns optimized components into working products" },
          { text: "Build cross-disciplinary communication skills to lead product development teams across engineering, manufacturing, and business" },
        ],
        faq: [
          { q: "Will AI replace mechanical engineers?", a: "No — but it's changing what engineers spend their time on. AI handles routine simulation, generates optimized geometries, and automates repetitive CAD tasks. But defining problems, making system-level trade-offs, solving novel challenges, and leading product development teams remain human work. Engineers who use AI tools design better products faster — they're more productive, not less needed." },
          { q: "How is AI changing mechanical engineering?", a: "Generative design creates structural solutions no human would conceive. AI simulation runs thousands of analyses overnight. Topology optimization produces organic shapes that minimize weight and material use. The design iteration cycle is compressing from weeks to days. Engineers spend less time on routine analysis and more on innovation, integration, and the creative problem-solving that defines great engineering." },
          { q: "What AI skills should mechanical engineers develop?", a: "Learn generative design (Fusion 360, nTopology), AI-accelerated simulation (Ansys SimAI), and computational design tools. Understand machine learning fundamentals well enough to evaluate AI-generated results critically. But invest equally in system-level thinking, manufacturing knowledge, and cross-disciplinary collaboration — the human skills that turn AI-generated options into real products." },
        ],
        resources: [
          { title: "ASME — American Society of Mechanical Engineers", url: "https://www.asme.org" },
          { title: "BLS — Mechanical Engineers", url: "https://www.bls.gov/ooh/architecture-and-engineering/mechanical-engineers.htm" },
          { title: "SAE International", url: "https://www.sae.org" },
          { title: "Engineering.com — Design Engineering", url: "https://www.engineering.com" },
          { title: "Machine Design Magazine", url: "https://www.machinedesign.com" },
        ],
        related: ["electrical-engineer", "industrial-engineer", "machinist", "civil-engineer"]
      },
    ]
  },
  {
    id: "science", name: "Science & Research", icon: "🔬", accent: "#14b8a6",
    desc: "AI accelerates discovery — from drug development to climate modeling — but human curiosity drives the questions.",
    jobs: [
      { id: "research-scientist", title: "Research Scientist", risk: 25, augment: 88,
        summary: "Not the role — but the workflow is transforming. AI accelerates literature review, generates hypotheses, analyzes data, and even designs experiments. Scientists who harness these tools produce more discoveries faster. But asking the right questions, designing rigorous studies, and interpreting results with genuine understanding remains irreducibly human.",
        keyInsight: "AlphaFold predicted the structure of 200 million proteins in months — work that would have taken human scientists centuries. AI doesn't replace the scientist; it gives them superpowers. The researchers who thrive are the ones who learn to wield them.",
        aiChanging: "AI literature review tools synthesize thousands of papers in hours. Machine learning models identify patterns in datasets too large for human analysis. AI-designed experiments optimize variables and reduce trial-and-error. The research cycle is compressing — and scientists who use AI tools publish more, faster.",
        blsStats: { medianSalary: "$104,860", totalJobs: "174,700", growth: "+8%", growthLabel: "Growing" },
        aiCapability: {
          mastered: [
            { title: "Literature review and synthesis", desc: "AI tools scan, summarize, and cross-reference thousands of research papers in hours — identifying relevant findings, contradictions, and gaps that would take a human researcher weeks of reading to uncover." },
            { title: "Data analysis and pattern recognition", desc: "Machine learning models find statistically significant patterns in massive datasets — genomic sequences, climate data, particle physics events — that are impossible for humans to detect through manual analysis." },
          ],
          improving: [
            { title: "Hypothesis generation", desc: "AI can suggest novel research hypotheses by identifying unexplored connections across published literature and datasets. But evaluating which hypotheses are worth pursuing — considering feasibility, impact, and scientific significance — still requires human judgment." },
            { title: "Experimental design optimization", desc: "AI optimizes experimental parameters, suggests control conditions, and predicts which experimental designs will yield the most informative results. But designing studies that answer the right questions and account for real-world constraints remains a human skill." },
          ],
          humanOnly: [
            { title: "Asking the right questions", desc: "The most important moment in science is choosing what to study. Identifying questions that matter — questions that could change a field, solve a real problem, or reveal something fundamental — requires human curiosity, intuition, and vision that no AI possesses." },
            { title: "Interpreting results with context", desc: "Understanding what results actually mean — distinguishing correlation from causation, recognizing when results challenge existing theory, and knowing when an anomaly is an error versus a discovery — requires deep domain expertise and scientific judgment." },
            { title: "Research ethics and integrity", desc: "Making ethical decisions about research involving human subjects, ensuring data integrity, navigating conflicts of interest, and maintaining the trust that underpins the scientific enterprise requires human moral reasoning." },
          ]
        },
        tools: [
          { name: "Elicit", url: "https://elicit.com", desc: "AI research assistant that finds relevant papers, extracts key findings, and synthesizes evidence across studies. Dramatically accelerates literature review while requiring expert evaluation of results." },
          { name: "Semantic Scholar", url: "https://www.semanticscholar.org", desc: "AI-powered academic search engine that understands paper content, identifies influential citations, and surfaces related work. Free and essential for any researcher navigating the literature." },
          { name: "Benchling", url: "https://www.benchling.com", desc: "AI-integrated research platform for life sciences with electronic lab notebooks, molecular biology tools, and data management. The standard for modern biotech and pharmaceutical research." },
          { name: "Weights & Biases", url: "https://wandb.ai", desc: "ML experiment tracking and visualization platform for computational research. Essential for scientists running machine learning models to manage experiments, compare results, and ensure reproducibility." },
        ],
        skills: [
          { text: "Use AI literature tools to conduct comprehensive reviews in hours instead of weeks, then critically evaluate the AI-surfaced evidence", tool: "Elicit" },
          { text: "Navigate AI-powered academic search to identify relevant work, key citations, and research gaps efficiently", tool: "Semantic Scholar" },
          { text: "Integrate AI tools into laboratory workflows for data management, experiment tracking, and analysis", tool: "Benchling" },
          { text: "Apply machine learning techniques to your research domain — understanding when AI analysis is appropriate and when it introduces bias" },
          { text: "Develop the question-asking and experimental design skills that remain the irreplaceable core of scientific work" },
        ],
        faq: [
          { q: "Will AI replace research scientists?", a: "No — but it's changing what scientists spend their time on. AI handles literature review, data analysis, and pattern recognition faster than humans. But the core of science — asking important questions, designing rigorous experiments, interpreting results with genuine understanding, and building theories — remains human work. Scientists who use AI tools are more productive, not less needed." },
          { q: "How is AI changing scientific research?", a: "AI is compressing the research cycle dramatically. Literature reviews that took weeks take hours. Data analysis that required months happens in days. AlphaFold solved protein folding, AI is discovering new materials and drug candidates, and machine learning is finding patterns in datasets too large for human analysis. The pace of discovery is accelerating for scientists who embrace these tools." },
          { q: "What AI skills should scientists develop?", a: "Learn to use AI literature tools (Elicit, Semantic Scholar), basic machine learning for your domain, and AI-assisted data analysis. You don't need to become a computer scientist — but you need to be a sophisticated consumer of AI tools and understand their limitations, biases, and appropriate applications in your research area." },
        ],
        resources: [
          { title: "Nature — AI in Science", url: "https://www.nature.com/collections/ai-in-science" },
          { title: "Science — AI and Automation", url: "https://www.science.org" },
          { title: "BLS — Natural Sciences Managers", url: "https://www.bls.gov/ooh/management/natural-sciences-managers.htm" },
          { title: "AAAS — American Association for the Advancement of Science", url: "https://www.aaas.org" },
          { title: "arXiv — AI/ML Preprints", url: "https://arxiv.org/list/cs.AI/recent" },
        ],
        related: ["lab-technician", "data-scientist", "clinical-psychologist", "economist"]
      },
    ]
  },
  {
    id: "hr-admin", name: "Human Resources & Admin", icon: "📋", accent: "#a855f7",
    desc: "AI automates hiring screens, scheduling, and document processing. Strategic people skills become the differentiator.",
    jobs: [
      { id: "hr-manager", title: "HR Manager", risk: 28, augment: 82,
        summary: "Not the strategic work — AI automates resume screening, benefits administration, and compliance tracking, but the judgment calls that define HR leadership — talent strategy, culture building, conflict resolution, and organizational design — remain deeply human.",
        keyInsight: "AI can screen 10,000 resumes in the time it takes to read one. But knowing which candidate will actually thrive in your culture, navigating a sensitive termination, or designing a compensation strategy requires the kind of judgment AI won't replicate.",
        aiChanging: "Resume screening and candidate ranking are largely automated. AI chatbots handle employee FAQs about benefits and policies. Predictive analytics flag flight-risk employees before they resign. HR managers who leverage these tools spend less time on administration and more on strategy and people.",
        blsStats: { medianSalary: "$136,350", totalJobs: "185,000", growth: "+5%", growthLabel: "Growing" },
        aiCapability: {
          mastered: [
            { title: "Resume screening and candidate ranking", desc: "AI scans thousands of resumes against job requirements, scoring candidates on skills match, experience relevance, and qualification fit — reducing initial screening time from days to minutes." },
            { title: "Benefits administration and employee FAQs", desc: "AI chatbots answer routine employee questions about PTO balances, benefits enrollment, and company policies 24/7, handling 60-80% of HR inbox volume without human intervention." },
          ],
          improving: [
            { title: "Employee sentiment and retention prediction", desc: "AI analyzes engagement surveys, communication patterns, and performance data to predict which employees are likely to leave, but understanding WHY someone is unhappy and what would make them stay requires human conversation." },
            { title: "Compensation benchmarking", desc: "AI aggregates market salary data and suggests competitive ranges, but designing compensation strategies that balance internal equity, retention goals, budget constraints, and cultural values requires human judgment." },
          ],
          humanOnly: [
            { title: "Conflict resolution and sensitive conversations", desc: "Mediating disputes between employees, conducting investigations into harassment or misconduct, and navigating the emotional complexity of terminations require empathy, discretion, and human judgment that AI cannot provide." },
            { title: "Culture building and organizational design", desc: "Shaping company culture, designing team structures, managing through mergers and reorgs, and building the intangible 'feel' of a workplace requires leadership, vision, and the ability to read human dynamics." },
            { title: "Strategic talent planning", desc: "Aligning workforce strategy with business goals — which roles to invest in, where to build vs. buy talent, how to develop leaders — requires understanding the business at a level AI cannot reach." },
          ]
        },
        tools: [
          { name: "Workday (AI)", url: "https://www.workday.com", desc: "AI-powered HCM platform with machine learning for talent acquisition, workforce planning, and employee experience optimization. Master its AI features to automate administrative HR and focus on strategic work." },
          { name: "Eightfold AI", url: "https://eightfold.ai", desc: "AI talent intelligence platform that matches candidates to roles using deep-learning analysis of skills, experience, and career trajectories. Use it to reduce bias in hiring and find non-obvious talent matches." },
          { name: "Lattice", url: "https://lattice.com", desc: "AI-powered people management platform for performance reviews, engagement surveys, OKRs, and career development. Leverage its analytics to identify engagement trends and retention risks early." },
          { name: "Leena AI", url: "https://leena.ai", desc: "AI-powered HR service delivery platform that automates employee queries, onboarding workflows, and policy communication. Deploy it to free your team from routine inquiries and focus on strategic initiatives." },
        ],
        skills: [
          { text: "Use AI-powered HCM platforms to automate administrative HR and surface workforce insights", tool: "Workday (AI)" },
          { text: "Reduce hiring bias and improve talent matching with AI-driven candidate intelligence", tool: "Eightfold AI" },
          { text: "Monitor employee engagement trends and predict retention risks using people analytics", tool: "Lattice" },
          { text: "Automate employee service delivery so your team can focus on strategic people work", tool: "Leena AI" },
          { text: "Develop expertise in organizational design and change management — the highest-value HR capability" },
          { text: "Build investigation and conflict resolution skills that handle the situations AI can't touch" },
        ],
        faq: [
          { q: "Will AI replace HR managers?", a: "No — but it's transforming the role dramatically. AI handles resume screening, benefits administration, employee FAQs, and compliance tracking. But the strategic and human sides of HR — conflict resolution, culture building, talent strategy, and sensitive conversations — remain firmly human. HR managers who embrace AI tools and focus on strategic people work are more valuable than ever." },
          { q: "How is AI changing recruiting and hiring?", a: "AI screens resumes, ranks candidates, schedules interviews, and even conducts initial video screening assessments. It reduces time-to-hire by 50-75% for high-volume roles. The risk is algorithmic bias — HR leaders must understand how these systems work, audit them for fairness, and ensure AI augments rather than replaces human judgment in hiring decisions." },
          { q: "What skills do HR professionals need in the AI era?", a: "Data literacy and people analytics, AI tool proficiency (especially HCM platforms), change management, and strategic workforce planning. But the most valuable skills remain deeply human: the ability to navigate sensitive situations, build trust across an organization, and design cultures where people do their best work." },
        ],
        resources: [
          { title: "SHRM — AI in HR Resources", url: "https://www.shrm.org" },
          { title: "Harvard Business Review — HR Technology", url: "https://hbr.org" },
          { title: "People Analytics World", url: "https://www.peopleanalyticsworld.com" },
          { title: "BLS — Human Resources Managers", url: "https://www.bls.gov/ooh/management/human-resources-managers.htm" },
          { title: "Josh Bersin — HR Technology Research", url: "https://joshbersin.com" },
        ],
        related: ["recruiter", "administrative-assistant", "operations-manager", "training-specialist"]
      },
      { id: "administrative-assistant", title: "Administrative Assistant", risk: 68, augment: 72,
        summary: "Significantly — AI handles scheduling, email drafting, document formatting, data entry, and meeting notes automatically. The administrative assistants who survive are evolving into operations coordinators who manage projects, handle sensitive communications, and become the organizational glue AI tools can't replace.",
        keyInsight: "ChatGPT, Copilot, and calendar AI can do in seconds what used to fill an admin's entire morning — scheduling meetings, drafting emails, formatting documents, and summarizing reports. The role is being redefined around judgment, relationships, and operational coordination.",
        aiChanging: "AI scheduling assistants book meetings across time zones without email chains. AI drafts routine correspondence, summarizes meeting notes, formats documents, and manages inboxes. Admins who master these tools handle the work of three while focusing on the high-judgment tasks AI can't touch.",
        blsStats: { medianSalary: "$44,080", totalJobs: "3,510,000", growth: "-8%", growthLabel: "Declining" },
        aiCapability: {
          mastered: [
            { title: "Calendar management and scheduling", desc: "AI scheduling tools manage calendars, find meeting times across multiple participants and time zones, and auto-reschedule conflicts — replacing hours of back-and-forth emails with one-click coordination." },
            { title: "Email drafting and inbox management", desc: "AI writes professional emails from brief prompts, sorts inboxes by priority, drafts replies to routine messages, and summarizes long email threads — handling the communication overhead that consumed 2-3 hours of a typical admin's day." },
            { title: "Document formatting and data entry", desc: "AI formats presentations, creates spreadsheet templates, converts between file formats, and extracts data from forms and invoices into structured databases — tasks that were core administrative work." },
          ],
          improving: [
            { title: "Meeting notes and action item tracking", desc: "AI tools transcribe meetings, generate summaries, and extract action items automatically. Quality is high for clear audio but still struggles with crosstalk, accents, and implicit decisions that require human interpretation." },
            { title: "Travel and expense management", desc: "AI books travel based on preferences and policies, auto-categorizes expenses, and flags policy violations. But complex itineraries, last-minute changes, and VIP travel still benefit from human coordination and judgment." },
          ],
          humanOnly: [
            { title: "Executive relationship management", desc: "Understanding your executive's working style, managing their energy and schedule strategically, shielding them from distractions, and knowing which meetings to accept or decline requires deep human understanding." },
            { title: "Sensitive communications and gatekeeping", desc: "Handling confidential information, navigating office politics, managing difficult personalities, and diplomatically controlling access to leadership requires discretion and social intelligence AI cannot provide." },
            { title: "Cross-functional coordination", desc: "Being the connective tissue that makes an office work — knowing who to call for what, resolving logistical problems on the fly, and managing the unpredictable day-to-day chaos of organizational life." },
          ]
        },
        tools: [
          { name: "Microsoft Copilot", url: "https://www.microsoft.com/en-us/microsoft-365/copilot", desc: "AI assistant embedded in Word, Excel, PowerPoint, Outlook, and Teams that drafts documents, summarizes emails, creates presentations, and analyzes data. The single most important AI tool for administrative professionals to master." },
          { name: "Reclaim AI", url: "https://reclaim.ai", desc: "AI-powered calendar management that automatically finds meeting times, protects focus time, and optimizes scheduling across teams. Use it to manage complex executive calendars without the back-and-forth." },
          { name: "Otter.ai", url: "https://otter.ai", desc: "AI meeting transcription and summary tool that generates notes, action items, and searchable transcripts. Essential for admins who manage meeting follow-ups and accountability tracking." },
        ],
        skills: [
          { text: "Master AI-powered productivity suites to draft documents, analyze data, create presentations, and manage communications at 3x speed", tool: "Microsoft Copilot" },
          { text: "Use AI calendar management to coordinate complex executive schedules across teams and time zones effortlessly", tool: "Reclaim AI" },
          { text: "Deploy AI meeting tools to capture notes, track action items, and ensure follow-through on decisions", tool: "Otter.ai" },
          { text: "Develop project coordination skills — the admin who manages cross-functional initiatives is far harder to replace than the one who books conference rooms" },
          { text: "Build executive partnership skills — anticipating needs, managing up, and becoming the strategic right hand that no AI can be" },
        ],
        faq: [
          { q: "Will AI replace administrative assistants?", a: "For routine tasks — it already is. AI handles scheduling, email drafting, document formatting, data entry, and meeting notes faster and cheaper than humans. BLS projects an 8% decline. But skilled admins who evolve into operations coordinators, executive partners, and project managers are more valuable than ever. The role is bifurcating: routine admin work is disappearing while strategic coordination work is growing." },
          { q: "How should administrative assistants adapt to AI?", a: "Master the AI tools immediately — Copilot, calendar AI, meeting transcription, document automation. Then redefine your role around the things AI can't do: executive relationship management, cross-functional coordination, sensitive communications, and project management. The admin who uses AI to handle routine work and fills freed-up time with higher-value contributions becomes indispensable." },
          { q: "Is administrative assistant still a good career path?", a: "As a stepping stone, yes. As a permanent role doing traditional admin tasks, it's increasingly risky. The smart path is using admin experience to move into office management, project coordination, operations, or executive assistant roles where relationship skills and organizational judgment matter more than typing and scheduling." },
        ],
        resources: [
          { title: "IAAP — International Association of Administrative Professionals", url: "https://www.iaap-hq.org" },
          { title: "BLS — Secretaries and Administrative Assistants", url: "https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm" },
          { title: "Harvard Business Review — Administrative Excellence", url: "https://hbr.org" },
          { title: "Office Dynamics — Admin Training Resources", url: "https://officedynamics.com" },
          { title: "Microsoft 365 Copilot Training", url: "https://learn.microsoft.com/en-us/copilot/microsoft-365/" },
        ],
        related: ["executive-assistant", "receptionist", "office-manager", "hr-manager"]
      },
      { id: "receptionist", title: "Receptionist", risk: 72, augment: 48,
        summary: "Significantly — AI virtual receptionists, automated phone systems, and visitor management kiosks handle the transactional parts of the role. But receptionists who serve as the human face of an organization — managing visitors, solving problems, and creating first impressions — remain valuable in settings where personal touch matters.",
        keyInsight: "An AI phone system can answer calls, route inquiries, and schedule appointments 24/7 at a fraction of the cost. But the receptionist who greets a nervous job candidate with warmth, handles a difficult visitor with diplomacy, and keeps an entire office running smoothly provides value no phone tree can match.",
        aiChanging: "AI phone systems handle call routing, voicemail transcription, and appointment scheduling. Visitor management kiosks check in guests, print badges, and notify hosts. AI chatbots answer routine inquiries. The receptionist role is shrinking in volume but the remaining positions require more judgment, multitasking, and interpersonal skill.",
        blsStats: { medianSalary: "$36,680", totalJobs: "1,003,100", growth: "-5%", growthLabel: "Declining" },
        aiCapability: {
          mastered: [
            { title: "Call answering and routing", desc: "AI phone systems answer calls, understand natural language requests, and route to the right person or department — handling 60-80% of incoming calls without human intervention. After-hours coverage is now fully automated at most organizations." },
            { title: "Appointment scheduling", desc: "AI scheduling assistants book, reschedule, and confirm appointments via phone, email, and text — eliminating one of the receptionist's most time-consuming tasks with 24/7 availability." },
          ],
          improving: [
            { title: "Visitor management and check-in", desc: "Digital kiosks and tablet-based check-in systems handle visitor registration, badge printing, NDA signing, and host notification. But greeting VIPs, managing unexpected visitors, and handling sensitive situations still benefit from a human presence." },
            { title: "AI virtual receptionist services", desc: "Services like Ruby and Smith.ai provide AI-powered virtual receptionists that answer calls, take messages, and handle basic inquiries with increasingly natural conversation. The gap between AI and human voice interaction is narrowing." },
          ],
          humanOnly: [
            { title: "First impression and brand embodiment", desc: "The receptionist is often the first human contact for clients, visitors, and candidates. Creating a warm, professional first impression that reflects the organization's culture and values is a deeply human skill." },
            { title: "Office coordination and problem-solving", desc: "Managing deliveries, coordinating conference rooms, handling building emergencies, resolving office logistics issues, and being the go-to person who knows how everything works requires human adaptability and institutional knowledge." },
            { title: "Sensitive situation management", desc: "Handling an angry walk-in, managing a terminated employee returning for belongings, or greeting a grieving family member requires empathy, discretion, and judgment that AI voice systems cannot provide." },
          ]
        },
        tools: [
          { name: "Envoy", url: "https://envoy.com", desc: "AI-powered visitor management and workplace platform that handles check-in, badge printing, deliveries, and room booking. Understanding Envoy is increasingly standard for receptionists in modern offices." },
          { name: "Ruby", url: "https://www.ruby.com", desc: "AI-enhanced virtual receptionist service that handles calls, chats, and appointment scheduling. Understanding how virtual receptionist services work helps you articulate the value of in-person reception." },
          { name: "Dialpad", url: "https://www.dialpad.com", desc: "AI-powered business phone system with real-time transcription, call routing, and sentiment analysis. Mastering AI phone systems helps receptionists manage higher call volumes and complex routing." },
        ],
        skills: [
          { text: "Manage AI-powered visitor management systems while providing the warm human welcome that technology can't replicate", tool: "Envoy" },
          { text: "Operate AI business phone systems to handle complex call routing, transcription, and multi-line management", tool: "Dialpad" },
          { text: "Develop office coordination expertise — becoming the indispensable operational hub who keeps everything running" },
          { text: "Build skills in event coordination, executive support, and office management to evolve beyond the front desk" },
          { text: "Master the interpersonal skills — de-escalation, discretion, multitasking under pressure — that separate human receptionists from AI alternatives" },
        ],
        faq: [
          { q: "Will AI replace receptionists?", a: "For call answering, appointment scheduling, and basic visitor check-in — AI already handles much of this work. BLS projects a 5% decline. But the full receptionist role — creating first impressions, managing office chaos, handling sensitive visitors, and serving as the organizational hub — remains human in settings where personal touch matters. The role is most at risk in cost-conscious companies and least at risk in client-facing businesses where first impressions drive revenue." },
          { q: "What should receptionists do to stay relevant?", a: "Evolve the role beyond answering phones. Become the office coordinator, event planner, executive assistant, and operational problem-solver. Master the AI tools (visitor management, phone systems, scheduling) so you're more efficient, then fill the freed-up time with higher-value work. The receptionist who becomes the indispensable person who keeps an entire office running is far safer than one who just answers calls." },
          { q: "Which industries still need human receptionists?", a: "Medical offices (patient sensitivity), law firms (confidentiality), luxury hotels and businesses (premium experience), government offices (security and access control), and any organization where first impressions directly affect revenue. Small businesses with simple phone needs are the most likely to switch to AI alternatives." },
        ],
        resources: [
          { title: "IAAP — International Association of Administrative Professionals", url: "https://www.iaap-hq.org" },
          { title: "BLS — Receptionists and Information Clerks", url: "https://www.bls.gov/ooh/office-and-administrative-support/receptionists.htm" },
          { title: "Office Dynamics — Front Desk Training", url: "https://officedynamics.com" },
          { title: "Indeed — Receptionist Career Guide", url: "https://www.indeed.com/career-advice/careers/what-does-a-receptionist-do" },
        ],
        related: ["administrative-assistant", "executive-assistant", "office-manager", "hotel-front-desk"]
      },
      { id: "recruiter", title: "Recruiter", risk: 55, augment: 82,
        summary: "Partially — AI handles resume screening, candidate sourcing, and interview scheduling at massive scale. But the recruiter who builds relationships with passive candidates, sells a company's culture, and matches human chemistry to team dynamics does work algorithms can't replicate. The transactional recruiter is at risk; the strategic talent partner thrives.",
        keyInsight: "AI can source 1,000 candidates in the time a recruiter sources 10. But the candidate who isn't actively looking, who needs to hear the right story about your company, and who will only take a call from someone they trust — that candidate still requires a human recruiter.",
        aiChanging: "AI scans resumes, matches skills to job descriptions, ranks candidates, schedules interviews, and even conducts initial video screenings. Recruiting platforms use AI to source passive candidates from LinkedIn and other databases. The transactional parts of recruiting — posting jobs, screening resumes, coordinating logistics — are largely automated. Human recruiters now focus on relationship-building, candidate assessment, and closing.",
        blsStats: { medianSalary: "$64,240", totalJobs: "348,600", growth: "+6%", growthLabel: "Faster than average" },
        aiCapability: {
          mastered: [
            { title: "Resume screening and candidate ranking", desc: "AI scans thousands of resumes in seconds, matching skills, experience, and qualifications against job requirements and ranking candidates by fit — work that used to take recruiters days of manual review." },
            { title: "Candidate sourcing and outreach", desc: "AI tools scan LinkedIn, job boards, and professional databases to identify potential candidates matching specific criteria, and can even generate personalized outreach messages at scale." },
          ],
          improving: [
            { title: "Candidate assessment and matching", desc: "AI is getting better at predicting candidate-job fit using skills analysis, assessment scores, and success pattern matching. But predicting cultural fit, team chemistry, and whether someone will thrive in a specific environment still requires human judgment." },
            { title: "AI video interviewing", desc: "AI-powered interview platforms analyze candidate responses, communication style, and even body language. But these tools raise significant bias concerns, and most organizations still require human interviewers for final assessment." },
          ],
          humanOnly: [
            { title: "Passive candidate relationship-building", desc: "The best candidates aren't applying to jobs — they need to be courted. Building long-term relationships with passive talent, earning their trust, and knowing when the timing is right to present an opportunity is deeply human networking." },
            { title: "Selling the opportunity", desc: "Convincing a happy, well-paid professional to consider a new role requires understanding their motivations, crafting a compelling narrative about the opportunity, and addressing concerns with authenticity that no AI outreach can match." },
            { title: "Cultural fit and team chemistry assessment", desc: "Evaluating whether a candidate will mesh with a specific team, thrive in the company's culture, and complement existing team dynamics requires human intuition built from hundreds of successful (and failed) placements." },
          ]
        },
        tools: [
          { name: "LinkedIn Recruiter", url: "https://business.linkedin.com/talent-solutions/recruiter", desc: "AI-powered talent sourcing platform with intelligent candidate matching, InMail optimization, and pipeline analytics. The essential tool for modern recruiters — mastering its AI features is a career requirement." },
          { name: "hireEZ", url: "https://hireez.com", desc: "AI-powered outbound recruiting platform that aggregates candidate data from 45+ sources, enriches profiles, and automates personalized outreach sequences. Use it to build diverse candidate pipelines faster." },
          { name: "Greenhouse", url: "https://www.greenhouse.com", desc: "AI-enhanced applicant tracking system with structured hiring workflows, interview scorecards, and DEI analytics. Understanding ATS platforms is fundamental for modern recruiters." },
          { name: "Eightfold AI", url: "https://eightfold.ai", desc: "AI talent intelligence platform that uses deep learning to match candidates to roles, identify internal mobility opportunities, and reduce bias in hiring. Learn its matching logic to source non-obvious talent." },
        ],
        skills: [
          { text: "Use AI-powered sourcing to build larger, more diverse candidate pipelines faster than manual searching", tool: "LinkedIn Recruiter" },
          { text: "Leverage AI talent intelligence to identify non-obvious candidates and reduce hiring bias", tool: "Eightfold AI" },
          { text: "Manage AI-enhanced ATS workflows for structured, data-driven hiring processes", tool: "Greenhouse" },
          { text: "Develop consultative skills — understanding business strategy, team dynamics, and hiring manager needs well enough to be a true talent advisor, not just a resume pusher" },
          { text: "Build and maintain a network of passive candidates through genuine relationship-building that no AI outreach can replicate" },
        ],
        faq: [
          { q: "Will AI replace recruiters?", a: "For transactional recruiting — posting jobs, screening resumes, scheduling interviews — AI is already doing most of this work. But strategic recruiting — building relationships with passive candidates, assessing cultural fit, selling opportunities, and advising hiring managers on talent strategy — remains deeply human. The role is splitting: high-volume, low-touch recruiting is being automated while strategic talent acquisition becomes more valuable." },
          { q: "How should recruiters adapt to AI?", a: "Automate the administrative work immediately — let AI screen resumes, source candidates, and schedule interviews. Then reinvest that time in relationship-building, candidate assessment, and hiring manager consultation. The recruiter who spends 80% of their time on relationships and 20% on administration (instead of the reverse) is the one who thrives. Also develop expertise in your industry vertical — deep market knowledge is AI-resistant." },
          { q: "Is recruiting a good career in 2025?", a: "Yes — with the right approach. Agency and corporate recruiters who focus on strategic roles, executive search, and specialized industries are in strong demand. BLS projects 6% growth. The risk is in high-volume, transactional recruiting where AI replaces the need for human touchpoints. Specialize, build relationships, and become a talent advisor rather than a resume processor." },
        ],
        resources: [
          { title: "SHRM — Talent Acquisition Resources", url: "https://www.shrm.org" },
          { title: "BLS — Human Resources Specialists", url: "https://www.bls.gov/ooh/business-and-financial/human-resources-specialists.htm" },
          { title: "ERE — Recruiting Intelligence", url: "https://www.ere.net" },
          { title: "LinkedIn Talent Blog", url: "https://www.linkedin.com/business/talent/blog" },
          { title: "Hung Lee — Recruiting Brainfood Newsletter", url: "https://www.recruitingbrainfood.com" },
        ],
        related: ["hr-manager", "administrative-assistant", "sales-manager", "management-consultant"]
      },
      { id: "executive-assistant", title: "Executive Assistant", risk: 48, augment: 78,
        summary: "Partially — AI is automating the calendar management, email triage, travel booking, and document preparation that once filled an EA's day. But the strategic EAs who serve as chiefs of staff — managing relationships, gatekeeping access, navigating politics, and anticipating what their executive needs before they ask — are more valuable than ever. The role is splitting: routine admin work is disappearing, and high-level strategic support is growing.",
        keyInsight: "AI can schedule a meeting in seconds. But knowing that your CEO shouldn't meet with that investor until after the board meeting, that the CFO needs 30 minutes of buffer before the earnings call, and that the canceled lunch should be rescheduled as a breakfast — that's executive intelligence no AI possesses.",
        aiChanging: "AI handles calendar scheduling, email prioritization, travel booking, expense reports, and meeting preparation automatically. Voice assistants draft correspondence and summarize documents. EAs who once spent 60% of their time on logistics now spend that time on strategic support — stakeholder management, project coordination, and serving as an information filter for their executive.",
        blsStats: { medianSalary: "$68,230", totalJobs: "593,000", growth: "-7%", growthLabel: "Declining" },
        aiCapability: {
          mastered: [
            { title: "Calendar scheduling and meeting coordination", desc: "AI scheduling assistants handle availability checking, time zone conversion, room booking, and meeting logistics across multiple calendars — the task that once consumed hours of an EA's day now happens in seconds with tools like Reclaim and Clockwise." },
            { title: "Travel booking and expense management", desc: "AI travel platforms search, compare, and book flights, hotels, and ground transportation based on preferences and policies. Expense management apps auto-categorize receipts and generate reports. Manual travel planning and expense spreadsheets are obsolete." },
          ],
          improving: [
            { title: "Email triage and correspondence drafting", desc: "AI tools prioritize emails by urgency and sender importance, draft routine responses, and summarize long threads. But knowing which emails the executive needs to see personally, which require a nuanced reply, and which represent hidden risks requires human judgment about people and politics." },
            { title: "Meeting preparation and briefing documents", desc: "AI generates meeting agendas, pulls relevant documents, and creates briefing summaries from multiple sources. But tailoring the prep to how this executive actually processes information — and flagging the landmines they don't know about — requires someone who knows the executive deeply." },
          ],
          humanOnly: [
            { title: "Gatekeeping and relationship management", desc: "Managing who gets access to the executive's time, how requests are prioritized, and how relationships are maintained is deeply political, contextual work. The EA who knows which board member is upset, which direct report needs attention, and which external request is actually important provides strategic value no AI can match." },
            { title: "Anticipating needs and reading the room", desc: "The best EAs know what their executive needs before they ask — preparing the briefing they'll want, booking the restaurant they'll love, clearing the schedule when they're burning out. This anticipatory intelligence comes from deep human understanding, not data analysis." },
            { title: "Confidential judgment and discretion", desc: "Handling sensitive information — compensation discussions, M&A activity, personnel issues, board dynamics — requires absolute discretion and judgment about what to share, with whom, and when. This trust-based role is irreplaceable by technology." },
          ]
        },
        tools: [
          { name: "Reclaim AI", url: "https://reclaim.ai", desc: "AI-powered calendar management that auto-schedules meetings, protects focus time, and optimizes schedules across multiple calendars. Eliminates the back-and-forth of scheduling while ensuring the executive's time is spent on priorities." },
          { name: "Otter.ai", url: "https://otter.ai", desc: "AI meeting transcription and summarization tool that generates notes, action items, and searchable transcripts automatically. Frees EAs from note-taking to focus on strategic participation in meetings." },
          { name: "Notion AI", url: "https://www.notion.so", desc: "AI-powered workspace for document management, project tracking, and knowledge management. Use its AI features to draft memos, summarize research, and maintain the executive's information system." },
          { name: "Navan (TripActions)", url: "https://navan.com", desc: "AI-powered corporate travel and expense platform that books travel within policy, manages itineraries, and automates expense reporting. The modern replacement for manual travel coordination." },
        ],
        skills: [
          { text: "Use AI calendar tools to optimize the executive's schedule, protect focus time, and eliminate scheduling friction", tool: "Reclaim AI" },
          { text: "Leverage AI transcription to capture meeting outcomes and action items without manual note-taking", tool: "Otter.ai" },
          { text: "Build and maintain AI-powered knowledge management systems for the executive's projects and priorities", tool: "Notion AI" },
          { text: "Automate travel and expense management to free time for strategic support work", tool: "Navan (TripActions)" },
          { text: "Develop the gatekeeping and stakeholder management skills that make you the executive's strategic partner, not just their scheduler" },
          { text: "Build the anticipatory intelligence — knowing what the executive needs before they ask — that defines world-class executive support" },
        ],
        faq: [
          { q: "Will AI replace executive assistants?", a: "It's replacing the administrative parts of the role — scheduling, travel booking, email triage, and document preparation are increasingly automated. BLS projects a 7% decline. But the strategic EA who serves as a chief of staff — managing relationships, gatekeeping access, anticipating needs, and handling confidential matters — is more valuable than ever. The role is bifurcating: routine admin disappears, strategic support grows." },
          { q: "How should executive assistants adapt to AI?", a: "Automate every routine task you can (scheduling, travel, expenses) and reinvest that time in strategic work. Position yourself as a chief of staff, not a secretary. Develop stakeholder management, project coordination, and business acumen. Become the person who makes the executive more effective — not the person who books their flights. The EA who manages AI tools AND provides strategic judgment is irreplaceable." },
          { q: "Is executive assistant a good career path?", a: "For the right person, yes — but the path is changing. Entry-level admin work is shrinking, but senior EAs supporting C-suite executives earn $80-120K+ and serve as strategic partners. The career path leads to chief of staff, operations management, or office leadership roles. The key: treat the role as strategic support, not administrative support, and continuously develop business skills." },
        ],
        resources: [
          { title: "IAAP — International Association of Administrative Professionals", url: "https://www.iaap-hq.org" },
          { title: "BLS — Secretaries and Administrative Assistants", url: "https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm" },
          { title: "The Assistant Room — Professional Community", url: "https://www.theassistantroom.com" },
          { title: "Harvard Business Review — Management", url: "https://hbr.org/topic/managing-people" },
          { title: "Base — EA Community and Resources", url: "https://www.base.is" },
        ],
        related: ["administrative-assistant", "receptionist", "office-manager", "project-manager"]
      },
      { id: "project-manager", title: "Project Manager", risk: 35, augment: 85,
        summary: "Not yet — but the administrative side of project management is being automated fast. AI generates project plans, tracks progress, predicts risks, and writes status reports. The PMs who thrive are the ones managing people, navigating politics, and making judgment calls under uncertainty — not the ones updating Gantt charts.",
        keyInsight: "AI can build a project plan in minutes, predict which tasks will slip, and generate a status report from real-time data. But the PM who gets a demoralized team back on track, navigates a scope change with a difficult stakeholder, or makes the tough call to cut a feature does work no algorithm can touch.",
        aiChanging: "AI auto-generates project timelines from scope descriptions, predicts schedule risks using historical data, flags blocked tasks, and drafts status reports from real-time progress data. PMs who use these tools spend less time on administrative tracking and more time on stakeholder management, team leadership, and strategic decision-making.",
        blsStats: { medianSalary: "$98,580", totalJobs: "942,700", growth: "+6%", growthLabel: "Faster than average" },
        aiCapability: {
          mastered: [
            { title: "Project plan generation and scheduling", desc: "AI creates detailed project plans with task dependencies, resource allocation, and timeline estimates from high-level scope descriptions — work that used to take PMs days of manual planning in spreadsheets and project tools." },
            { title: "Status reporting and progress tracking", desc: "AI aggregates data from project tools, communication channels, and code repositories to generate real-time status reports, dashboards, and executive summaries — eliminating the manual status update ritual." },
          ],
          improving: [
            { title: "Risk prediction and early warning", desc: "AI analyzes historical project data, team velocity, and current progress patterns to predict which tasks are likely to slip and which risks are most likely to materialize. But interpreting these signals in context — knowing which risks are real versus statistical noise — still requires PM experience." },
            { title: "Resource optimization and capacity planning", desc: "AI can model team capacity across multiple projects and suggest optimal resource allocation. But understanding individual strengths, development goals, team dynamics, and the political realities of resource negotiations requires human judgment." },
          ],
          humanOnly: [
            { title: "Stakeholder management and politics", desc: "Navigating competing priorities between executives, managing scope creep with diplomacy, delivering bad news about delays, and maintaining trust when things go wrong requires political skill and emotional intelligence AI doesn't possess." },
            { title: "Team leadership and motivation", desc: "Getting a burned-out team to rally for a deadline, mediating conflicts between engineers, shielding the team from organizational chaos, and creating an environment where people do their best work is irreplaceable human leadership." },
            { title: "Judgment under uncertainty", desc: "Deciding whether to cut scope, extend the timeline, or add resources when a project goes sideways — weighing business impact, team morale, technical debt, and stakeholder expectations — requires the kind of holistic judgment PMs develop over years of experience." },
          ]
        },
        tools: [
          { name: "Asana Intelligence", url: "https://asana.com", desc: "AI-powered project management with smart status updates, workload balancing, and automated workflows. Its AI features draft project plans, summarize progress, and flag risks — the PM's AI copilot for daily operations." },
          { name: "Monday.com AI", url: "https://monday.com", desc: "AI-enhanced work management with automated task creation, predictive timelines, and natural language project setup. Master its AI assistants to automate the administrative overhead of project tracking." },
          { name: "Jira with Atlassian Intelligence", url: "https://www.atlassian.com/software/jira", desc: "AI features for sprint planning, issue summarization, and natural language JQL queries. Essential for PMs in software development — AI automates backlog grooming and progress tracking." },
          { name: "Forecast.app", url: "https://www.forecast.app", desc: "AI-powered project management that auto-generates plans, predicts delivery dates, and optimizes resource allocation using machine learning on historical project data." },
        ],
        skills: [
          { text: "Use AI-powered project tools to auto-generate plans, track progress, and produce status reports — freeing your time for leadership and stakeholder management", tool: "Asana Intelligence" },
          { text: "Leverage AI risk prediction to identify potential delays early and take proactive mitigation action", tool: "Forecast.app" },
          { text: "Automate sprint planning and backlog management with AI, then focus on removing blockers and coaching the team", tool: "Jira with Atlassian Intelligence" },
          { text: "Develop stakeholder management and organizational navigation skills — the human capabilities that define senior PM value" },
          { text: "Build the judgment to make tough calls under uncertainty — scope, timeline, and resource trade-offs that require experience, not data" },
        ],
        faq: [
          { q: "Will AI replace project managers?", a: "The administrative PM — the one who updates Gantt charts, chases status updates, and formats reports — faces real disruption. AI handles all of that now. But strategic project management — navigating stakeholder politics, leading teams through uncertainty, making judgment calls about scope and resources — remains deeply human. BLS projects 6% growth. The role is evolving from administrator to leader." },
          { q: "How is AI changing project management?", a: "AI auto-generates project plans from scope descriptions, predicts risks from historical data, tracks progress in real time from tool integrations, and drafts status reports. The biggest impact: PMs spend 40-60% less time on administrative tasks and more time on the leadership, communication, and decision-making that actually determines project success." },
          { q: "What skills should PMs develop for the AI era?", a: "Master the AI features in your project tools (plan generation, risk prediction, automated reporting). Then invest in the human skills AI can't replace: stakeholder management, negotiation, team motivation, and strategic thinking. PMs who combine AI-powered efficiency with strong leadership and communication skills are the most valuable professionals in any organization." },
        ],
        resources: [
          { title: "PMI — Project Management Institute", url: "https://www.pmi.org" },
          { title: "BLS — Management Analysts", url: "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm" },
          { title: "Harvard Business Review — Project Management", url: "https://hbr.org/topic/project-management" },
          { title: "Atlassian — Agile Resources", url: "https://www.atlassian.com/agile" },
          { title: "The Digital Project Manager", url: "https://thedigitalprojectmanager.com" },
        ],
        related: ["operations-manager", "construction-pm", "product-manager", "management-consultant"]
      },
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
