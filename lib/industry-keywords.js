/**
 * Industry slug → keywords for RSS matching.
 * An article matches if it contains BOTH an AI term and one of these keywords.
 */
export const INDUSTRY_KEYWORDS = {
  "healthcare": ["healthcare", "health care", "medical", "clinical", "hospital", "patient care", "diagnostics", "drug discovery", "pharma"],
  "legal": ["legal", "law firm", "lawyer", "attorney", "contract", "litigation", "compliance", "regulation"],
  "finance": ["finance", "financial", "banking", "accounting", "bookkeeping", "investment", "fintech", "trading", "audit"],
  "creative": ["creative", "marketing", "advertising", "design", "content", "copywriting", "branding", "media", "video production"],
  "tech": ["technology", "software", "engineering", "developer", "programming", "IT", "cybersecurity", "cloud", "data science"],
  "education": ["education", "teaching", "university", "school", "learning", "academic", "classroom", "tutor", "edtech"],
  "trades": ["construction", "trades", "building", "electrician", "plumber", "HVAC", "carpentry", "jobsite", "skilled labor"],
  "realestate": ["real estate", "property", "housing", "mortgage", "realtor", "commercial property", "appraisal"],
  "transportation": ["transportation", "logistics", "trucking", "freight", "shipping", "warehouse", "supply chain", "self-driving", "autonomous vehicle"],
  "government": ["government", "public sector", "policy", "municipal", "federal", "public service", "civic", "policing"],
  "hospitality": ["hospitality", "restaurant", "hotel", "food service", "culinary", "tourism", "guest experience"],
  "retail": ["retail", "customer service", "e-commerce", "sales", "call center", "checkout", "consumer"],
  "manufacturing": ["manufacturing", "factory", "production", "assembly", "industrial", "robotics", "quality control"],
  "science": ["science", "research", "laboratory", "scientific", "biotech", "climate", "pharmaceutical"],
  "hr-admin": ["human resources", "HR", "hiring", "recruiting", "administration", "office management", "payroll"],
};
