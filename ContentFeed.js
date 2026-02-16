// Curated external content — replace with CMS/blog posts when ready
const FEED_ITEMS = [
  {
    id: "imf-ai-jobs",
    title: "AI Will Affect Almost 40% of All Jobs, Says IMF Chief",
    source: "IMF Blog",
    url: "https://www.imf.org/en/Blogs/Articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity",
    tag: "Research",
    tagColor: "#8b5cf6",
    date: "2024",
  },
  {
    id: "mckinsey-automation",
    title: "The Economic Potential of Generative AI: The Next Productivity Frontier",
    source: "McKinsey Global Institute",
    url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
    tag: "Report",
    tagColor: "#06b6d4",
    date: "2024",
  },
  {
    id: "wef-future-of-jobs",
    title: "Future of Jobs Report 2025: These Are the Fastest Growing and Declining Roles",
    source: "World Economic Forum",
    url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
    tag: "Report",
    tagColor: "#06b6d4",
    date: "2025",
  },
  {
    id: "goldman-ai-labor",
    title: "The Potentially Large Effects of AI on Economic Growth",
    source: "Goldman Sachs",
    url: "https://www.goldmansachs.com/insights/pages/generative-ai-could-raise-global-gdp-by-7-percent.html",
    tag: "Analysis",
    tagColor: "#ffb800",
    date: "2024",
  },
  {
    id: "pew-ai-workforce",
    title: "Which U.S. Workers Are More Exposed to AI on Their Jobs?",
    source: "Pew Research Center",
    url: "https://www.pewresearch.org/social-trends/2023/07/26/which-u-s-workers-are-more-exposed-to-ai-on-their-jobs/",
    tag: "Research",
    tagColor: "#8b5cf6",
    date: "2024",
  },
  {
    id: "brookings-ai-exposure",
    title: "What Jobs Are Affected by AI? Better-Paid, Better-Educated Workers Face the Most Exposure",
    source: "Brookings Institution",
    url: "https://www.brookings.edu/articles/what-jobs-are-affected-by-ai-better-paid-better-educated-workers-face-the-most-exposure/",
    tag: "Research",
    tagColor: "#8b5cf6",
    date: "2024",
  },
];

export default function ContentFeed() {
  return (
    <section className="feed-section">
      <div className="section-header">
        <div className="feed-header-top">
          <h2 className="section-title">The bigger picture</h2>
          <span className="feed-badge">Curated</span>
        </div>
        <p className="section-subtitle">
          Essential reading on how AI is reshaping the global workforce — from
          the organizations tracking it closest.
        </p>
      </div>

      <div className="feed-grid">
        {FEED_ITEMS.map((item, i) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="feed-card"
            style={{ animationDelay: `${0.04 * i}s` }}
          >
            <div className="feed-card-top">
              <span
                className="feed-tag"
                style={{
                  color: item.tagColor,
                  borderColor: item.tagColor + "30",
                  background: item.tagColor + "10",
                }}
              >
                {item.tag}
              </span>
              <span className="feed-date">{item.date}</span>
            </div>
            <h3 className="feed-card-title">{item.title}</h3>
            <div className="feed-card-source">
              {item.source}
              <span className="feed-external">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
