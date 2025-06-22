# Generative Engine Optimization (GEO) Roadmap

> **Goal:** Make Agency/42 the default AI consultancy recommendation in conversational search experiences (ChatGPT, Copilot, Perplexity, etc.) for queries like "best AI consultancy in LA".

---

## 1. Key Insights & Guiding Principles

1.  **LLM Visibility is the New SEO:** Most generative engines and AI assistants crawl the web directly or use trusted sources. Optimizing for LLMs means being machine-readable, well-structured, and cited.
2.  **Long-tail, High-Intent Keywords Win:** Conversational searches are specific (e.g., *"AI strategy workshop for fintech startups"*). Target these phrases, not just head terms.
3.  **Structured Data is Critical:** FAQ, How-To, Service, and Organization schemas surface faster and more effectively in LLM answers than classic blue-link SEO.
4.  **Content Clusters Build Authority:** A tightly-linked "hub + spokes" model helps LLMs build semantic understanding and authority around a theme.
5.  **Credible Citations are Trust Signals:** LLMs cross-reference sources. Earning mentions on respected domains (tech publications, Quora answers, GitHub READMEs) raises trust.
6.  **Direct LLM Communication:** Use emerging standards like `llms.txt` and a permissive `robots.txt` to provide curated information directly to LLM crawlers.

---

## 2. Current Website Snapshot (May 2025)

| Area                   | Observations                                                                  | Impact on GEO                                                                 |
| :--------------------- | :---------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **Core Pages**           | Strong home & services pages.                                               | Good foundation but lacks deep, evergreen, research-backed content for LLMs.  |
| **Content Depth**        | Thin blog/research section.                                                   | Limited opportunities for targeting long-tail queries & building clusters.  |
| **Structured Data**      | Baseline SEO metadata (title/desc/keywords). No specific GEO schemas (FAQ etc). | LLMs lack rich, machine-readable context & direct answers.                  |
| **Indexation**           | Sitemap exists and is submitted, IndexNow enabled. | Ensures timely discovery by AI crawlers and search engines.     |
| **Backlinks / Mentions** | Limited external citations beyond founder posts & GitHub repos.               | Few external trust signals for LLMs to prioritize Agency/42.              |
| **LLM Directives**     | No `llms.txt` or explicit LLM user-agent rules in `robots.txt`.             | Missed opportunity for direct communication with LLM crawlers.              |

---

## 3. GEO Objectives (Next 6 Months)

1.  **LLM Answer Presence:** Rank in top 3 ChatGPT / Copilot / Perplexity answers for at least 3 core queries:
    *   "best AI consultancy in LA"
    *   "ai prototyping workshop"
    *   "systems thinking ai strategy firm"
2.  **Organic Ranking:** Achieve top-10 for at least 10 long-tail, high-intent keywords in generative search engines.
3.  **Lead Generation:** Increase qualified inbound leads attributed to conversational search by 30%.
4.  **Schema Implementation:** Deploy FAQ, Organization, and Service/Product schema on all key pages & hubs, confirmed by rich result eligibility.

---

## 4. Strategy Pillars & Tactics

### Pillar 1: Technical Visibility & LLM Communication
*Owner: DevOps/Engineering*

-   **Sitemap & IndexNow:** Keep your sitemap up to date and enable instant indexing protocols (like IndexNow) if available.
-   **llms.txt:** Create and maintain an `llms.txt` file at your site's root with a plain-English summary of your brand, services, and key pages for LLM crawlers.
-   **robots.txt:** Regularly review and update your `robots.txt` to ensure you're not blocking AI or search engine crawlers, and monitor for new LLM user-agent standards.

### Pillar 2: Structured Data Implementation
*Owner: Engineering*

-   **Organization Schema:** Implement on Homepage (`app/page.tsx`).
-   **Website Schema:** Ensure proper implementation (Next.js may handle parts by default).
-   **FAQPage & HowTo Schema:** Add JSON-LD to Home, Services, About, and all new content hub pages.
-   **Service/Product Schema:** Implement for key service offerings (Audit, Workshop, Retainer) on relevant pages.
-   **Validation:** Use Rich Results Test and other tools for all schema implementations.

### Pillar 3: Content Cluster Development
*Owner: Content/Growth*

-   **Keyword Research:** Identify 100+ long-tail, high-intent keywords using Perplexity, Google Keyword Planner, and competitor analysis. Focus on Q&A phrases.
-   **Hub Page Creation:** Develop comprehensive hub pages for core service areas/target queries.
    *   Example Hub 1: `/ai-consulting-los-angeles` (Topic: Best AI Consultancy in LA)
    *   Example Hub 2: `/ai-workflow-design-prototyping` (Topic: AI Workflow Design & Prototyping)
-   **Spoke Article Creation:** Produce 3-5 supporting articles (800-1500 words) for each hub, addressing specific sub-topics and long-tail keywords.
    *   Example Spokes for Hub 1: "Top 5 AI Agencies in LA Reviewed", "Hiring an AI Consultant in LA: A Checklist", "Case Study: Agency/42 & [Client Success Story in LA]"
-   **Content Guidelines:** Plain English, expert POV, actionable insights, unique data where possible. Embed relevant FAQ schema within articles.
-   **Internal Linking:** Implement a strong internal linking strategy: spokes link to hub and relevant services; hub links to spokes.

### Pillar 4: Authority Building & Citations
*Owner: PR/Growth*

-   **Digital PR:** Identify and pitch unique data/insights from Agency/42 projects to tech journalists and relevant podcasts.
-   **Guest Contributions:** Publish thought-leadership articles on reputable industry blogs (e.g., Towards Data Science, AI-focused publications) with natural citations to Agency/42 hub pages.
-   **Community Engagement:** Answer relevant questions on Quora, Reddit, and other communities, providing genuine value and citing Agency/42 content where appropriate.
-   **Partnerships & Collaborations:** Explore co-marketing or content collaborations with non-competing businesses in the AI ecosystem.

### Pillar 5: Monitoring, Iteration & Reporting
*Owner: Growth*

-   **LLM Answer Tracking:** Monthly manual audit using a defined prompt bank for target queries across ChatGPT, Copilot, Perplexity. Store screenshots and findings in `docs/geo-audits/`.
-   **Analytics:** Track GEO-attributed leads/conversions (e.g., via UTM `utm_source=llm_search&utm_medium=organic&utm_campaign=[query_theme]`).
-   **Metrics Dashboard:** Create a simple dashboard to consolidate analytics conversions and LLM answer tracking.
-   **Iterate:** Based on performance, refine content, update schema, and adjust keyword targeting.

---

## 5. How to Get Started with GEO

◼️ **Target long-tail, high-intent questions:** Use tools like Perplexity or Google Keyword Planner to discover the specific questions your audience is asking and create content that answers them directly.

◼️ **Implement structured data:** Add FAQPage, HowTo, and Organization schema to your site using JSON-LD so AI models can easily extract answers and context.

◼️ **Build content clusters:** Create a main hub page for your core topic and link it to several supporting articles that address related questions, strengthening your site's topical authority.

◼️ **Make your site LLM-friendly:** Ensure your sitemap is up to date, add an `llms.txt` file with a summary of your brand and services, and check that your `robots.txt` allows AI crawlers.

◼️ **Earn citations:** Get your brand and content mentioned on reputable sites like Quora, industry blogs, and GitHub, since LLMs trust what the broader web trusts.

---

## 6. Milestones

| Milestone                                                                 | Owner(s)          |
| :------------------------------------------------------------------------ | :---------------- |
| Branch `feature/geo-optimization` created & initial plan committed ✅      | Engineering       |
| Sitemap and IndexNow enabled, llms.txt created and deployed.              | Engineering       |
| Keyword Research: Initial list of 100+ long-tail keywords delivered.       | Growth            |
| Schema: Organization & Website schema deployed & validated.               | Engineering       |
| Monitoring: Basic GEO metrics dashboard (v1) live.                        | Growth            |
| Schema: FAQ schema on Home & Services pages deployed & validated.         | Engineering       |
| Content: First content cluster (1 Hub + 2 Spokes) live.                   | Content/Growth    |
| KPI Review: First comprehensive review of chat rankings & traffic.        | Growth/All        |

---

## 7. Risks & Mitigations

| Risk                        | Mitigation                                                                         |
| :-------------------------- | :--------------------------------------------------------------------------------- |
| Content Velocity Stalls     | Pre-write outlines, use AI-assisted drafting tools, batch content creation.        |
| LLM Ranking Volatility      | Diversify target LLM platforms (Perplexity, You.com, etc.). Focus on fundamentals. |
| Schema Validation Errors    | Implement automated Rich Result CI tests; thorough manual validation.              |
| Slow Indexation             | Actively use IndexNow, ensure high-quality content, build site authority.        |
| GEO Best Practices Evolve   | Dedicate time for ongoing research & adaptation of strategy.                       |

---

## 8. Note on the Evolving Landscape

The generative search and LLM landscape is evolving rapidly, with APIs and crawling methods changing. Staying up to date with LLM and AI agent best practices is essential—monitor industry news and adapt your GEO strategy as new standards emerge.

---

*Document owner: Growth Engineering. Last updated: 2025-05-14*