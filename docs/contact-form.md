# Qualification Form & Contact API Documentation

## Overview

The primary method for potential clients to submit inquiries is via the Qualification Form (`QualForm.tsx`) located on the `/services` page. This form gathers detailed project information.

Submissions are handled by the API route at `app/api/contact/route.ts`, which:

- Validates the required fields (name, email, project description).
- Sends a confirmation email to the client via Resend.
- Sends a notification email to the team via Resend.
- Sends a formatted notification to a Discord webhook (if configured).
- Captures a `qual_form_submitted` event in PostHog.

## Component Integration (`QualForm.tsx`)

The `QualForm` component is designed to be embedded directly onto pages, typically the Services page:

```tsx
import QualForm from '@/app/components/QualForm';

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12">
      {/* ... other services content ... */}
      <section id="contact">
        <h2 className="text-3xl font-bold mb-8">Ready to Start?</h2>
        <QualForm />
      </section>
    </div>
  );
}
```

## Technical Details

### Form Component (`app/components/QualForm.tsx`)

Uses React state to manage detailed form fields and submission status. Provides user feedback.

### API Route (`app/api/contact/route.ts`)

Handles `POST` requests, processes form data, interacts with Resend, Discord, and PostHog.

### Email Templates

- **ClientEmail** (`app/api/contact/emails/ClientEmail.tsx`): Confirmation email.
- **TeamEmail** (`app/api/contact/emails/TeamEmail.tsx`): Internal notification email.

## Setup Requirements

1. Install dependencies: `npm install @react-email/components resend posthog-js`
2. Configure `.env.local`:
   ```
   RESEND_API_KEY=...
   TEAM_EMAIL=...
   DISCORD_WEBHOOK_URL=... # Optional
   NEXT_PUBLIC_POSTHOG_KEY=... 
   NEXT_PUBLIC_POSTHOG_HOST=... # Optional
   ```
3. Ensure directory structure:
   ```
   app/
   ├── api/
   │   └── contact/
   │       ├── route.ts
   │       └── emails/
   │           ├── ClientEmail.tsx
   │           └── TeamEmail.tsx
   ├── components/
   │   └── QualForm.tsx
   ├── providers/
   │   └── PostHogProvider.tsx
   └── services/
       └── page.tsx # Where QualForm is typically used
   ```

## Customization Options

### Form Fields (`QualForm.tsx`)

Modify state, JSX, API route handler, and email templates if fields change.

### Email Design

Edit `ClientEmail.tsx` and `TeamEmail.tsx`.

### Form Styling (`QualForm.tsx`)

Modify Tailwind CSS classes. 