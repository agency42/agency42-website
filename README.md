# Agency42 Website

This is the official website for Agency42, built with Next.js 13+ and modern web technologies.

## SEO & Social Sharing Setup

### Open Graph & Twitter Cards

All major pages now include proper Open Graph and Twitter Card metadata for optimal social sharing:

- **Home page** (`/`) - Uses hero image: `/content/hero-crop.png`
- **Services** (`/services`) - Uses hero image for consistent branding
- **Projects** (`/projects`) - Uses hero image (note: has `noindex, nofollow` during development)
- **Company** (`/company`) - Uses logo: `/images/logos/agency42.png`
- **Stories** (`/stories`) - Uses hero image for consistent branding
- **Content** (`/content`) - Uses hero image for consistent branding
- **Vibe Coding** (`/learn-vibe-coding`) - Uses specific image: `/images/media/vibe-code-coaching.png`

### Required Environment Variables

For proper Open Graph functionality in production, set:

```
NEXT_PUBLIC_BASE_URL=https://agency42.co
```

This ensures absolute URLs are generated for social media image previews.

### Testing Social Sharing

You can test your social sharing setup using:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

All pages include:

- `og:title` - Page-specific titles
- `og:description` - Page-specific descriptions
- `og:image` - Proper 1200x630 images with alt text
- `twitter:card` - Summary large image format
- `twitter:title` - Matches Open Graph title
- `twitter:description` - Matches Open Graph description
- `twitter:image` - Same as Open Graph image

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Analytics:** [PostHog](https://posthog.com/) for event tracking, [Plausible](httpss://plausible.io/) for site traffic.
- **Transactional Email:** [Resend](https://resend.com/)

## Core Features

- **Homepage:** A clear overview of our value proposition, backed by data-driven headlines and real client results.
- **Services Page:** Detailed explanations of our offerings (AI Opportunity Audits, Fractional Leadership), complete with an integrated qualification form.
- **Psychology-Driven Copy:** Messaging designed to build trust and articulate value by focusing on client problems and our proven solutions.
- **Generative Engine Optimized (GEO):** Content and site structure are optimized for visibility in conversational AI search engines (ChatGPT, Perplexity, etc.).
- **Integrated Contact & Qualification:** A multi-step form that qualifies leads and notifies the team via email and Discord.
- **Our Work / Case Studies:** A showcase of client projects with detailed write-ups, featuring a modern grid layout and filterable categories.

## Local Development

To get started with local development, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/agency42/agency42-website.git
    cd agency42-website
    ```

2.  **Install dependencies:**
    This project uses `npm` for package management.

    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project by copying the example file:

    ```bash
    cp .env.example .env.local
    ```

    You will need to fill in the required API keys and webhook URLs for services like Resend, PostHog, and Discord to function correctly.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000`.
