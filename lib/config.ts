// Purpose: Centralized, env-backed configuration helpers used across API routes and email libs.

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://agency42.co";
}

export function getDiscordWebhook(): string | undefined {
  return process.env.DISCORD_WEBHOOK || process.env.DISCORD_WEBHOOK_URL;
}

export function getYear(): number {
  return new Date().getFullYear();
}