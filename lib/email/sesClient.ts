import { SESClient } from "@aws-sdk/client-ses";

/**
 * Purpose: Create and cache SES v3 client.
 * Objectives: used by transactional email sender.
 */
let ses: SESClient | null = null;

export function getSesClient(): SESClient {
  if (ses) return ses;
  const region = process.env.SES_REGION || process.env.AWS_REGION || "us-east-1";
  ses = new SESClient({ region });
  return ses;
}

export function getDefaultEmailFrom(): string {
  return (
    process.env.DEFAULT_FROM_EMAIL ||
    '"Agency/42" <updates@agency42.co>'
  );
}


