        Below is the opinion-driven, no-ambiguity blueprint for the complete Agency 42 website overhaul and the 90-day execution play-book.

        Everything is written so a separate coder/design squad can ship without ping-pong.

        ⚡ PRD — “Agency 42 v2” (consulting-first site)
        1. Executive Summary
        Rebuild agency42.co into a consulting-led conversion engine that:
        Positions Agency 42 as the authority on human efficiency through AI (promise: “Turn Unknown-Unknowns into 10× Outcomes”).


        Converts cold visitors into qualified discovery calls → paid “AI Opportunity Audit” → retainer clients.


        Uses Bootoshi's creator aura as social proof while future-proofing against single-face risk.


        2. Scope & Context
        Area
        In-scope
        Out-of-scope
        UI / Brand
        Full visual refresh (colour, typography, imagery).
        Logo word-mark (AGENCY / 42) remains.
        Pages
        Home, Consulting, Workshops, Advisory Retainer, Case Studies, Blog, About/Team, Pricing, Legal.
        Product (Daybloom) → moves to sub-domain product.agency42.co
        Stack
        Next.js 14 App Router on Vercel, Tailwind CSS, MDX for content.
        Replatforming off Next.js

        3. Information Architecture & Key Flows

        <!-- NOTE: Navigation updated post-initial PRD -->
        <!-- Final Nav: Home (Logo), Content (Aggregator), Research (Case Studies, hidden initially), Services (Audit, Workshop, Retainer, Pricing info), Company (About + hello@agency42.co email), Products (Dropdown: Daybloom, Vibe-Check [soon]) -->
        <!-- Legal pages (Privacy, Terms) typically in footer -->

        flowchart LR
            Landing(Home) --> Services
            Landing --> Content
            Landing --> Company
            Services --> QualForm[Qualification Form via Resend]
            QualForm -- Manual Review --> Calendly[15-min Discovery]
            Calendly --> AuditInvoice[Paid AI Audit]
            AuditInvoice --> Retainer[Retainer Signup]

        Above-the-fold CTA on relevant pages (Home, Services) → QualForm.
        Contact via `hello@agency42.co` on Company page.


        Workshops page content integrated into Services page; Stripe checkout needed if direct purchase kept.


        4. Content & Copy Framework
        Section
        Copy Hook
        Psychological Lever
        Hero
        “Stop Guessing. Start Operating at AI Speed.”
        Gap-in-knowledge, FOMO
        Proof bar
        ✦ “3 000 + professionals unlocked 10× output” ✦ YouTube 25 k subs ✦ 1.8 M view counter <!-- Placeholder for client logos pending permission -->
        Social proof, Bandwagon
        Problem block
        “You don't know what you don't know. That's fatal in 2025.”
        Loss aversion
        Solution trio
        AI Opportunity Audit → Hands-on Workshop → Fractional AI CTO Retainer
        Clarity, Choice-architecture
        Pricing teaser
        “Audits from $4 k • Retainers from $8 k/mo”
        Price anchoring, Transparency
        Bootoshi video
        90-sec keynote highlight reel
        Parasocial trust
        Case snippets
        Micro-stories (≤50 w) + measurable result placeholder. <!-- Placeholder for testimonials pending permission -->
        Specificity over fluff

        5. Visual & UI System
        Element
        Spec
        Colour
        Base #FFFFFF / #0C0C0C. Accent gradient “Neon Magma” (#FF6B00 → #FF005C) to echo vibe coding energy.
        Typography
        Satoshi for body; Founders Grotesk for display (mirrors tech-luxury vibe).
        Imagery
        Generative renders of “energy flows” + real workshop photos (even phone-quality) for authenticity.
        Motion
        Sub-200 ms micro-interactions; hero background subtle animated flow line (SVG).
        Accessibility
        WCAG 2.1 AA, prefers-reduced-motion respects.

        6. Martech & Analytics Stack (green-field)
        Need
        Tool
        Why
        CRM / email
        HubSpot Starter
        Native Calendly + Stripe sync; free tier scales to 1 000 contacts.
        Booking
        Calendly round-robin
        Auto-qual questions (Industry, Team Size, Budget).
        Analytics
        Plausible
        GDPR-safe, lightweight INP tracking.
        A/B / Feature Flags
        PostHog
        Self-hosted, event funnels, toggles for CTA copy tests.
        Newsletter
        ConvertKit via Zapier → HubSpot
        Simple sequences; can migrate later.
        Lead tracking
        Bitly branded links a42.link
        Per-video attribution just like Morningside.

        (All tools have free or <$50 / mo tiers; total SaaS burn < $200 / mo.)
        7. Legal & Compliance Must-Haves
        Privacy Policy & Terms – generate via Termly; host /legal/.


        Cookie-less analytics removes consent banner complexity.


        DPA & SCC boilerplate in MSA for EU clients (template via Ironclad).


        IP assignment clause in SOWs (work-product → client) – de-risks procurement objections.
        No additional regulated-industry compliance until a specific client demands it.


        8. KPIs & Acceptance Criteria (first 90 days)
        KPI
        Definition
        Pass bar
        Hero CTA CTR
        (QualForm submits / Hero views)
        ≥ 7 %
        Qualified discovery calls
        (Calendly links sent after manual review / QualForm submits) AND (Budget ≥ $5k indicated)
        Metric TBD based on form data
        Audit conversion
        Audits sold / qualified calls
        ≥ 40 %
        Lighthouse INP
        Mobile, real device
        < 200 ms
        Content publish cadence
        (Blog/Video/etc in 'Content' feed)
        2 / mo

        9. Risks & Mitigations
        Risk
        Mitigation
        “10×” claim challenged
        Phrase as “up to 10× efficiency documented in client workflows” and footnote methodology.
        Single-person brand dependency
        Prominently feature Ken & Rob expertise blocks; rotate them in blog authorship.
        No hard case-study numbers at launch
        Start with “prototype projects” metrics (your builds) + collect client baselines early for v2 update.
        Tool sprawl / SaaS fatigue
        Quarterly stack review; keep spend under $200 / mo.

        10. Changelog / Commit Message Template
        feat(web): overhaul A42 site to consulting-first
        - add Hero with CTA + Proof bar
        - implement QualForm (HubSpot form embed)
        - build Pricing, Workshops, Audit pages
        - migrate Daybloom product to subdomain
        - integrate Plausible + PostHog events
        - add legal pages (privacy, terms)


        🚀 90-Day Execution Game-Plan
        Week
        Milestone
        Owner
        Output
        1
        Brand mood-board + colour/typography approval
        Bootoshi + Designer
        Figma board
        2
        Low-fi wireframes (Home, Consulting, Pricing)
        Rob
        FigJam
        3
        Martech provisioning (HubSpot, Calendly, Plausible, PostHog, Bitly domain)
        Ken
        Tool accounts live
        4
        Copy draft v1 (Hero, Solution trio, QualForm Qs)
        Bootoshi
        Google Doc
        5
        Hi-fi comps + motion prototypes
        Designer
        Figma
        6
        Next.js scaffolding + CMS MDX wiring
        Dev squad
        GitHub PR #1
        7
        Implement analytics + PostHog flags
        Ken
        PR #2
        8
        Publish 1st flagship blog “Stop Doing AI Like It's 2023”
        Bootoshi
        /blog/stop-2023-ai
        9
        QualForm → Calendly integration end-to-end test
        QA
        Staging ✅
        10
        SEO technical pass (INP, schema, sitemap)
        Rob
        Lighthouse 95+
        11
        Soft-launch to Discord community (beta)
        Bootoshi
        Feedback doc
        12
        Public launch + cross-platform promo
        All
        Live site
        13-14
        A/B test Hero copy (10× vs 100× metaphor)
        Ken + PostHog
        Winner set
        15-16
        Case-study v1 swap-in, refine pricing page
        Bootoshi
        Update PR

        Hard launch target: Week 12 (≈ 3 months).

        Strong Opinion in One Sentence
        Blend Bootoshi's creator fire-hose with radical pricing transparency and a qualification wall—anything else is friction that costs you five-figure retainers.
        Execute the plan above exactly; the site will generate leads while you sleep, and you'll never waste another hour on “tyre-kicker” calls.

