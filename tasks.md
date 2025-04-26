# Agency 42 v2 Refactor Tasks

## Phase 1: Setup, Foundation & Analysis

*   [ ] **Analyze Existing Code:** Review current `app/`, `public/`, components, styles (`tailwind.config.js`, global CSS if any), and `next.config.js`. Identify reusable elements, dependencies to update/remove, and areas needing complete overhaul based on the PRD. Document findings briefly. *(Completed)*
*   [ ] **Setup Martech (Core):** Provision/configure Plausible, PostHog. Document integration points/keys securely (e.g., env vars). *(Resend/Calendly integration handled in form/flow implementation)*
*   [ ] **Configure Stack:** Verify/update Next.js (to 14 App Router if needed), Tailwind CSS, and set up MDX for content processing. Ensure `tsconfig.json` and `next.config.js` align with goals.
*   [ ] **Define Project Structure:** Establish the directory structure within `app/` for new pages (`content/`, `research/`, `services/`, `company/`, `products/`), components (server/client), layouts, lib/utils, etc. Follow Next.js App Router conventions.
*   [ ] **Implement Base Layout & Navigation:** Create the root layout (`app/layout.tsx`) and the main `Navigation.tsx` component reflecting the final structure (Content, Research [hidden], Services, Company, Products dropdown).
*   [ ] **Visual System Base:** Update `tailwind.config.js` with PRD colors (base, accent gradient), fonts (Satoshi, Founders Grotesk), and define any necessary base styles or Tailwind plugins.

## Phase 2: Core Pages & Conversion Flow

*   [ ] **Build Home Page (`app/page.tsx`):** Implement PRD sections: Hero, Proof bar (logo placeholders), Problem block, Solution trio, Pricing teaser, Bootoshi video, Case snippets (testimonial placeholders). Use semantic HTML and Tailwind.
*   [ ] **Build Services Page (`app/services/page.tsx`):** Consolidate content for Audit, Workshop, Retainer offerings, and Pricing info. Include primary CTA linking to the QualForm.
*   [ ] **Implement Qualification Form:** Create a dedicated component using Resend for the form fields (including qualifying questions). Style consistently.
*   [ ] **Setup Form Submission Handling:** Configure Resend endpoint/logic to receive form data (manual review planned initially before sending Calendly link).
*   [ ] **Integrate Analytics:** Add Plausible tracking script to the root layout.
*   [ ] **Integrate Feature Flags/Events:** Set up PostHog provider and implement event tracking for key actions (e.g., CTA clicks, form submissions) and potentially feature flags for A/B testing copy.

## Phase 3: Content & Supporting Pages

*   [ ] **Build Content Page (`app/content/page.tsx`):** Design layout for aggregating blog posts, videos, newsletter links, etc. Set up MDX processing for blog posts if applicable.
*   [ ] **Build Research Page (`app/research/page.tsx`):** Design layout. Create dynamic routes (`app/research/[slug]/page.tsx`) for individual case studies/reports. Structure for MDX content sourcing. Hide link in main navigation initially.
*   [ ] **Build Company Page (`app/company/page.tsx`):** Implement layout and content for About section. Include `hello@agency42.co` contact email.
*   [ ] **Build Products Structure:** Create `app/products/` layout or components to handle the dropdown linking to Daybloom (external link?) and Vibe-Check (placeholder/coming soon).
*   [ ] **Build Legal Pages:** Create `app/legal/privacy/page.tsx` and `app/legal/terms/page.tsx`. Populate with Termly-generated content (or placeholders).
*   [ ] **Plan Product Subdomain:** Document the technical steps required to set up `product.agency42.co` and migrate/deploy the Daybloom app there.

## Phase 4: Visual Polish & Brand Identity

*   [ ] **Apply Visual Refresh:** Systematically review all pages and components, ensuring alignment with the PRD's visual specifications (colors, fonts, spacing, imagery styles).
*   [ ] **Implement Motion:** Add subtle micro-interactions and the specified hero background animation (e.g., using Framer Motion or CSS). Ensure `prefers-reduced-motion` is respected.
*   [ ] **Add Client Logos & Testimonials:** Integrate approved assets into their placeholder locations.
*   [ ] **Accessibility Audit & Fixes:** Perform checks using browser tools and linters. Ensure WCAG 2.1 AA compliance.

## Phase 5: Testing, Optimization & Launch Prep

*   [ ] **End-to-End Testing:** Manually test all user flows, focusing on the conversion funnel (Landing -> QualForm -> Manual Review -> Calendly) and navigation. Write automated tests if feasible/desired.
*   [ ] **Performance Optimization:** Analyze build outputs, optimize images (Next/Image), use dynamic imports, and target INP < 200ms using Lighthouse/real user monitoring.
*   [ ] **SEO Technical Pass:** Implement necessary schema markup, generate `sitemap.xml` and `robots.txt`.
*   [ ] **Cross-Browser/Device Testing:** Test on major browsers and various screen sizes.
*   [ ] **Code Review & Cleanup:** Final pass for code quality, consistency, removing dead code, and ensuring environment variables are handled correctly.
*   [ ] **Deployment Configuration:** Set up Vercel project settings.
