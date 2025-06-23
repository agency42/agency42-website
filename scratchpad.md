# Git Branch Reconciliation Plan

This document outlines the strategy for integrating new copy and design updates into the `main` branch.

## Objective

To safely combine the major redesign from `feature/clean-design` with new "geo-optimization" copy updates, and then merge the result into the `main` branch to be deployed.

## Key Branches & Files

-   **`main`**: The current live version on Vercel. This is our baseline for what is publicly visible.
-   **`feature/clean-design`**: Contains the major redesign from Rob. This will serve as our primary integration branch.
-   **`docs/copy-redesign-doc.md` & `docs/geo_plan.md`**: Source files for the new "geo-optimization" copy changes.
-   **`cofounder/main`**: Rob's original remote branch. We'll keep it for reference, but no direct action is needed on it.

## Updated Integration Plan

The `feature/clean-design` branch will be our working branch. We need to bring in the copy guidance documents and then apply the copy changes directly to this branch.

1.  **Establish `feature/clean-design` as Base:** ✅ DONE - We are using this branch as the foundation. Major font loading issue has been fixed.

2.  **Merge docs/ folder from `feature/geo-optimization`:** ✅ DONE - The `docs/` folder with copy guidance documents (`docs/copy-redesign-doc.md` and `docs/geo_plan.md`) is already present in the current branch.

3.  **Implement Geo-Optimization Copy:** Manually update the components and pages on the `feature/clean-design` branch with the new copy, using the imported docs as the source of truth.

4.  **Local Testing:** Once the copy updates are complete, we will thoroughly test the site locally from the `feature/clean-design` branch. We need to verify:
    -   The new copy is implemented correctly across all pages.
    -   The new design elements look and function as expected.
    -   All core site features (navigation, forms, etc.) are working.

5.  **Align with `main`:** After testing, we'll check for any commits on `main` that are not yet in our `feature/clean-design` branch. This is to ensure no critical hotfixes or other small changes made directly to `main` are lost.
    -   `git log main --not feature/clean-design`
    -   If there are any, we can cherry-pick them into `feature/clean-design`.

6.  **Final Review and Merge:** Once the `feature/clean-design` branch is stable, tested, and contains all necessary changes, the standard process is to open a Pull Request on GitHub to merge it into `main`.

7.  **Cleanup (Later):** After the new `main` is deployed and confirmed to be working, we can decide to delete the now-merged feature branches to keep the repository tidy. We will not do this until you are ready.

## Issues Found During Review (`feature/clean-design`)

-   **CRITICAL: Font Loading Failure (FIXED):** Massive number of Google Fonts requests for DotGothic16 were timing out with `ETIMEDOUT` errors. **FIXED:** Replaced DotGothic16 with system monospace font in `app/layout.tsx`. This also resolved the "Get Started" link navigation issue.
-   **Broken Contact Link:** A prominent "Contact" button on the home page navigates to a non-existent route, resulting in a 404 error. The expected behavior is to link to `/services#contact`.
-   **Unstyled 404 Page:** When the 404 error occurs, the displayed page is the default, unstyled Next.js error page, not a custom 404 page that matches the site's design.

## Style & Copy Guidelines

- **Tone:** Aim for clarity, depth, and empowerment. Focus on the client's transformation and capability, not just speed or our process.
- **No Emojis:** Avoid using emojis in user-facing copy to maintain a professional and substantive tone.

## Case Study Revamp Notes – 2025-06-23

### Ranking (strongest → weakest)
1. **Cogent World** – Scaling Operations: How AI Automation Identified 1,300+ Hours of Annual Savings
2. **Satoshi AI** – Mining Attention: How an Autonomous AI Agent Generated a $50 M Memecoin
3. **Daybloom** – Creating Immersive AI Social Media Experiences

### Why Cogent World Comes First
- Quantified impact (hours + $$) is upfront – perfect for a "quick-stats" bar.
- Clear Problem → Solution → Outcome headings with bulletised sub-sections.
- Includes ROI / break-even analysis.
- Plenty of graphic hooks (workflow charts, savings timeline).

### Anonymisation Plan (pre-client-approval)
| Original | Replacement |
| -------- | ----------- |
| Cogent World | **Acme Marketing** (generic alias) |
| Specific employee names | Role-based labels (e.g. *Campaign Coordinator*) |
| Exact revenue / headcount | Broad descriptors (e.g. "mid-7-figure revenue", "50+ employees") |
| City / brand mentions | Generic equivalents (e.g. "East-Coast HQ", "global beverage brands") |

### Image / Asset Needs
1. **Hero banner** – abstract, monochrome illustration (≈1600×800).
2. **Workflow diagram** – before/after or process flow.
3. **Savings chart** – hours vs $$ visual.
4. (Optional) Team interview photo (faces blurred OK).
Store at `public/images/case-studies/acme-marketing/`.

### Front-Matter Schema (draft)
```yaml
---
title: Scaling Operations: …
date: 2024-…
hero: /images/case-studies/acme-marketing/hero.png
stats:
  hours_saved: 1300
  annual_value: 52000
  roi_months: 5
---
```

### Implementation Roadmap
1. **Extend markdown utilities** to read new `stats` + `hero` fields.
2. **Build `CaseStudyLayout`**
   - Hero image + quick-stats bar
   - Sticky sidebar TOC (Tailwind + headings anchor links)
   - Typography follows `docs/design-aesthetics.md` rules.
3. **Create `CaseStudyCard`** for `/projects` listing page.
4. **Convert & anonymise Cogent World markdown** using the new schema.
5. **Populate images** once provided.
6. Repeat for Satoshi AI & Daybloom.

### Waiting On (from Ken)
- Approval on alias (*Acme Marketing* OK?).
- Hero + supporting screenshots/charts named per above.

--- 