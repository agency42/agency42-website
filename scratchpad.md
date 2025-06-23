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