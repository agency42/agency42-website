## Newsletter system (subscribe / verify / unsubscribe)

This document describes how our newsletter features work end-to-end: the data model, API endpoints, email templates, configuration, and how to test locally and in production.

### Goals
- Double opt-in: subscribers must confirm via email before being considered verified
- One-click unsubscribe via opaque token
- Minimal friction and consistent branding in emails
- Discord notifications for operational visibility

## Data model

Table: `public.agency42_newsletter_subscribers`

- `id` serial primary key
- `email` varchar(255) unique not null
- `unsubscribe_token` uuid not null default `gen_random_uuid()`
- `unsubscribed_at` timestamp null
- `created_at` timestamp default `CURRENT_TIMESTAMP`
- `verify_token` uuid null
- `verified_at` timestamp null

Indexes:
- Unique index on `email`
- Unique partial index on `verify_token` where not null
- Unique index on `unsubscribe_token`

State semantics:
- Pending: `verified_at = null`, `verify_token = <uuid>`
- Verified: `verified_at != null`, `verify_token = null`
- Unsubscribed: `unsubscribed_at != null` (verification state is independent)

## Endpoints

### POST `/api/newsletter`
Creates a new subscriber or re-subscribes an unsubscribed one, then emails a verification link.

Request body:
```json
{ "email": "user@example.com" }
```

Behavior:
- If no existing record: insert `{ email, verify_token: uuid }` and send verification email
- If existing with `unsubscribed_at != null`: clear `unsubscribed_at`, set new `verify_token`, send verification email
- If existing and active (not unsubscribed): return 409 "You're already subscribed."

Responses:
- 200 `{ success: true, data: { message } }` on success
- 207 when email send fails but DB save succeeded
- 400 for invalid email; 409 if already subscribed; 500 on server errors

Discord:
- New signup: "📰 New Newsletter Signup"
- Resubscribe: "🔁 Newsletter Re-subscribe"

### GET `/api/newsletter/verify?t=<verify_token>`
Verifies the subscriber and redirects to the success page.

Behavior:
- Missing/invalid token: redirect to `/` (never a broken link)
- Valid token: set `verified_at = now()`, clear `verify_token`, ensure `unsubscribed_at = null`, send Discord "✅ Newsletter Verified", then redirect to `/newsletter/verify`

### GET `/api/newsletter/unsubscribe?t=<unsubscribe_token>`
Marks the subscriber as unsubscribed and rotates the token, then redirects to the unsubscribe confirmation page.

Behavior:
- Missing/invalid token: JSON error (frontend has a POST fallback)
- Valid token: set `unsubscribed_at = now()`, rotate `unsubscribe_token`, Discord "📧 Newsletter Unsubscribed", redirect to `/newsletter/unsubscribe?success=1`

### POST `/api/newsletter/unsubscribe`
Fallback endpoint for manual unsubscribe by email from the public form (no token).

Request body:
```json
{ "email": "user@example.com", "reason": "too-frequent", "feedback": "..." }
```

Behavior:
- Best-effort `unsubscribed_at = now()` by email
- Posts a detailed Discord notification (reason/feedback when present)

## Email templates

- `templates/newsletter-verification.html`
  - Tokens: `{{verificationUrl}}`, `{{unsubscribeUrl}}`, `{{siteUrl}}`, `{{year}}`
  - Branding hardcoded to "Agency/42"
  - CTA links to `/api/newsletter/verify?t=...`
  - Footer includes social links, Los Angeles, © {{year}}, and unsubscribe link

Rendering:
- `renderTemplate(name, variables)` performs `{{variable}}` replacement from disk-based templates

## Frontend pages

- `app/newsletter/subscribe/page.tsx` → UI + `SubscribeForm`
- `app/newsletter/verify/page.tsx` → landing after successful verify
- `app/newsletter/unsubscribe/page.tsx` → UI + `UnsubscribeForm`
  - `UnsubscribeForm` also detects `?success=1` to show confirmation when redirected from token-based GET

## Configuration

- Site URL: `NEXT_PUBLIC_SITE_URL` (use `http://localhost:3000` locally; set to production origin on Vercel)
- Discord: `DISCORD_WEBHOOK` (or `DISCORD_WEBHOOK_URL`)
- SES: `AWS_REGION`/`SES_REGION`, optional `DEFAULT_FROM_EMAIL` (defaults to `"Agency/42" <updates@agency42.co>`) 
- Supabase (server): `SUPABASE_URL`, `SUPABASE_ANON_KEY` (server-side envs preferred)

Helpers:
- `lib/config.ts`: `getSiteUrl()`, `getDiscordWebhook()`, `getYear()`
- `lib/email/sesClient.ts`: SES client + default sender
- `lib/email/sendEmail.ts`: transactional email sender
- `lib/email/template.ts`: template renderer

## Business logic notes

- Verify is one-time: on success we clear `verify_token` and set `verified_at`
- Resubscribe currently preserves prior `verified_at` (stricter policy would reset it and require re-verify)
- Unsubscribe rotates `unsubscribe_token` to prevent replay of old links
- Invalid or missing verify token redirects to `/` (good UX, no broken links)

## Security considerations

- Tokens are opaque UUIDs, stored server-side; verify is single-use
- Unsubscribe token is rotated on use
- Templates currently do raw substitution; consider HTML-escaping user-provided variables in `renderTemplate()`
- Environment variables are read only on the server in API routes (avoid exposing secrets in client bundles)

## Testing checklist (local)

1) Set `NEXT_PUBLIC_SITE_URL=http://localhost:3000` in `.env.local`, restart dev server
2) Subscribe via `/newsletter/subscribe` with your email
   - Expect 200 and a verification email (no auto-send from this doc)
3) Click the verify link (or copy/paste `verify_token`):
   - `http://localhost:3000/api/newsletter/verify?t=<token>` → redirect to `/newsletter/verify`
   - DB: `verified_at` set, `verify_token` cleared
4) Unsubscribe using the link in the email footer:
   - `http://localhost:3000/api/newsletter/unsubscribe?t=<token>` → redirect to `/newsletter/unsubscribe?success=1`
   - DB: `unsubscribed_at` set, token rotated
5) Re-subscribe with same email:
   - Expect verification email; DB: `unsubscribed_at` cleared, new `verify_token`
6) Invalid verify token:
   - `http://localhost:3000/api/newsletter/verify?t=invalid` → redirects to `/`

## Operational notes

- Discord notifications serve as lightweight logs for signups, verifies, and unsubscribes
- No token expiry or rate-limiting implemented by design (simple operational model)

## Future improvements (optional)

- Escape HTML in `renderTemplate()` for user-supplied fields
- Consider resetting `verified_at` on resubscribe if stricter consent model is desired
- Add basic metrics around verification rates (e.g., via Discord embed fields or a small analytics table)


