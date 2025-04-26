# Agency42 Website

## Core Features

- **Home Page:** Overview of services and value proposition.
- **Services Page:** Details Audit, Workshop, Retainer offerings with integrated Qualification Form (`QualForm.tsx`).
- **Qualification Form:** Collects detailed project inquiries, sends email notifications (client + team) via Resend, and notifies Discord.
- **Content/Research Pages:** (Planned) Aggregates blog posts, case studies, etc.
- **Company Page:** (Planned) Information about the team and mission.
- **Analytics:** Plausible for general site traffic, PostHog for specific event tracking (e.g., form submissions).

## Setup Instructions

1. Install required dependencies:

```bash
npm install @react-email/components posthog-js
```