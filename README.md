# Agency42 Website

This repository contains the official website for Agency42, a consultancy focused on discovering and capturing hidden operational value for businesses through applied AI.

Our strategic vision, messaging, and technical marketing plans are detailed in our primary strategy document: `docs/growth-strategy.md`.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Deployment:** [Vercel](https://vercel.com/)
*   **Analytics:** [PostHog](https://posthog.com/) for event tracking, [Plausible](httpss://plausible.io/) for site traffic.
*   **Transactional Email:** [Resend](https://resend.com/)

## Core Features

-   **Homepage:** A clear overview of our value proposition, backed by data-driven headlines and real client results.
-   **Services Page:** Detailed explanations of our offerings (AI Opportunity Audits, Fractional Leadership), complete with an integrated qualification form.
-   **Psychology-Driven Copy:** Messaging designed to build trust and articulate value by focusing on client problems and our proven solutions.
-   **Generative Engine Optimized (GEO):** Content and site structure are optimized for visibility in conversational AI search engines (ChatGPT, Perplexity, etc.).
-   **Integrated Contact & Qualification:** A multi-step form that qualifies leads and notifies the team via email and Discord.

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