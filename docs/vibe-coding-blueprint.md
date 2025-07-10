# Vibe Code Coaching – Implementation Blueprint

> A complete, standalone reference for taking Vibe Code Coaching from concept → live offer, assuming **zero prior context**.

---

## 1. Product Vision

Vibe Code Coaching (VCC) teaches **“vibe coding”**—the practice of coding in real-time collaboration with AI tools (Cursor, **Replit Ghostwriter**, Claude Code) while a senior engineer mentors you live.  
• **You + AI = instant co-pilot** – the AI writes boilerplate, refactors, and explains errors as you build.  
• **You + Mentor = human guard-rails** – an agency-level engineer pair-programs with you, reviews architecture, and accelerates learning.  
The outcome: ship MVPs weeks faster, gain modern AI-development skills, and raise sooner.

### Success Metrics
1. 50 paid Strategy Calls in first 90 days.
2. 25 Session Blocks sold within first 6 months (>$60 k revenue).
3. Avg CSAT ≥ 4.8/5.
4. Organic traffic to `/vibe-coding` > 2 k/mo.

---

## 2. Roll-Out Strategy (Crawl → Walk → Run)

| Phase | Timeline | URL strategy | Scope | Key Deliverables |
|-------|----------|--------------|-------|------------------|
| **1. Launch Landing** | 0-3 weeks | `agency42.co/vibe-coding` | Static marketing page + Stripe deposit + Calendly | • Hero + Pricing + FAQ  
• Deposit checkout (Stripe)  
• Email capture → ConvertKit  
• Analytics (Plausible/PostHog) |
| **2. Member Portal** | 3-6 months | `app.vibe.agency42.co` (sub-domain) | Auth, template vault, session replay library | • Supabase auth  
• Paywall/gating  
• Dashboard UI |
| **3. Stand-Alone SaaS / Mobile** | Post-PMF | `vibecoding.com` + optional iOS/Android | Real-time dashboards, push notifications | • Separate branding repo  
• Native wrappers |

---

## 3. Feature Matrix

| Feature | Phase 1 | Phase 2 | Phase 3 |
|---------|:------:|:------:|:------:|
| Responsive marketing site | ✅ | ✅ | ➡️ canonical link |
| Stripe payments | ✅ (one-time) | ✅ (subscriptions) | ✅ |
| Calendly / Cal.com booking | ✅ | ✅ | ✅ |
| Email nurture | ✅ | ✅ | ✅ |
| Auth & user accounts | – | ✅ | ✅ |
| Gated template library | – | ✅ | ✅ |
| Session replay vault | – | ✅ | ✅ |
| Live dashboards / AI snippets | – | – | ✅ |
| Mobile push | – | – | ✅ |

---

## 4. Tech Stack Decisions

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Front-end | Next.js 14 (existing) | Consistency, ISR, SEO |
| Styling | Tailwind + ShadCN UI | Already in repo |
| Payments | Stripe Checkout → Stripe Billing | Fastest to market, upgrade-ready |
| Booking | Calendly embed → Cal.com self-host (later) | Zero-code, then own data |
| AI Tooling (coaching) | Cursor, Replit, Claude Code | Cover IDE, cloud, and prompt-centric flows |
| Auth | Supabase (Phase 2) | Postgres + row-level perms |
| Storage | Supabase Storage | Handles replays, docs |
| Email | ConvertKit API | Automations, broadcasts |
| Analytics | Plausible + PostHog | Privacy-friendly + session replays |

---

## 5. SEO & Content

1. **Keyword targets**: `ai pair programming`, `ai assisted programming`, `vibe coding`, `cursor rules`, `claude code`, `replit ghostwriter`, `vibe coding coach`, `ai coding workshop`.
2. Use `schema.org/Course` markup on landing.
3. Add internal links from `/services/` and relevant blog posts.
4. Leverage existing “Stories” at `/content` – especially **Vibe Code 101 Workshop** and **Vibe Code Community** pages – by linking to the landing page and adding canonical tags.
5. Once sub-domain lives, keep **canonical** back to root marketing pages.

---

## 6. Offer & Copy Cheatsheet (Hormozi-style)

### Headline
```
Ship Your MVP 10× Faster with AI — Guided by Experts in AI-Assisted Programming 
```

### Sub-Headline
> Book a 90-min Strategy Call today – $499 credited to tuition, refund if not a fit.

### Pricing Table (Phase 1)
| Tier | Price | Blurb |
|------|-------|-------|
| Strategy Call | $499 (credit) | Audit skills & idea → roadmap + block estimate |
| Starter Kit | $1 499 | Call + custom Cursor/Claude setup |
| Session Block | $2 750 (save 8%) | Starter Kit + 2 extra 90-min sessions |
| Workshops | Quote | Teams ≥5, half-day/full-day |

### Guarantees
*Full refund after Strategy Call if not delighted.  
Dislike your first paid session? That session is on us.*

### Bonuses (scarcity)
* Claude prompt pack ($197) free if booked before **Friday 11:59 PM PT**.
* Limited to **5 Session Blocks/mo**.

#### Dynamic Scarcity Logic (Phase 1.5)
We’ll automate scarcity so copy updates itself—no manual edits.

1. **Seat counter** – Display “\<X\> of 5 Session Blocks remaining this month”.  
   • Source: Stripe `price` metadata `monthly_cap` + Supabase table `purchases` with a `created_at` timestamp.  
   • Front-end fetches `/api/vcc-seats` (Next.js route) → returns remaining count.  
   • If count ≤ 0, swap CTA button to “Join Wait-list”.
2. **Time-bound bonus** – Show live countdown to **Friday 23:59 PT**.  
   • Front-end React hook computes diff from `Date.UTC(year, month, day, 6+8)` (convert to PT).  
   • When timer ≤ 0, hide bonus badge automatically.

_Both can be toggled via Supabase `settings` table for emergency overrides (e.g. `force_waitlist=true`)._

---

## 7. Funnel Flow
```
Ad / Social → VSL Landing → Stripe $499 → Calendly booking → Email Nurture → Up-sell on call
```

Automations:  
1. Stripe `payment_intent.succeeded` → ConvertKit tag `VCC-Deposit`.  
2. ConvertKit sequence delivers templates + reminder.  
3. After call, mentor toggles outcome (won/lost) in Airtable → Zapier creates invoice / refund.

---

## 8. Task Breakdown (git issues)

| ID | Task | Phase | Owner |
|----|------|-------|-------|
| VC-001 | Build `/vibe-coding` page (reuse dark-theme code, convert to light) | 1 | FE Dev |
| VC-002 | Add Stripe product + price IDs | 1 | Ops |
| VC-003 | Embed Calendly widget | 1 | FE Dev |
| VC-004 | ConvertKit webhook integration | 1 | BE Dev |
| VC-005 | Write 4 SEO articles | 1 | Content |
| VC-006 | Supabase project setup | 2 | BE Dev |
| VC-007 | Auth + dashboard scaffold `app.vibe.agency42.co` | 2 | FE Dev |
| VC-008 | Template library uploader | 2 | FE Dev |
| VC-009 | Session replay storage & player | 2 | FE Dev |
| VC-010 | Push-notification POC (Expo) | 3 | Mobile Dev |
| VC-011 | Build `/api/vcc-seats` endpoint + Supabase tables | 1.5 | BE Dev |
| VC-012 | Countdown & seat-remaining components on landing page | 1.5 | FE Dev |

*(Add these as GitHub issues; link back to this doc.)*

---

## 9. Branch & PR Conventions

* `vcc/feature-short-desc` for code.  
* `docs/vcc-…` for documentation.
* PR template must reference task ID (e.g., `Closes VC-001`).

---

## 10. Resources & References

* Seifert blog – website vs app pros/cons (<https://www.seifert.com/website-or-mobile-app-what-are-the-pros-and-cons>)
* MindSea – landing page blueprint (<https://mindsea.com/one-thing-every-app-going-live-app-store/>)
* Alex Hormozi – $100M Offers framework (book).
* Vibe Code 101 Workshop story (internal): `/content/stories/vibe-code-101`
* Vibe Code Community hub: `/stories/page#vibe-code-community`
* Bootoshi talk – “Vibe Coding in Practice” YouTube video (<https://www.youtube.com/watch?v=uotKsn4d5e4>)
* Replit AI demo clip (<https://www.youtube.com/watch?v=6poldoGRsjY>)
* Upcoming resource repo – **VibeCode Cookbook** (<https://github.com/agency42/vibecode-cookbook>) – hosts Obsidian Claude Code starter templates and workflow docs.

---

*Last updated:* <!-- Keep this line updated manually --> 2025-07-10 