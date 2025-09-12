import { SendEmailCommand } from "@aws-sdk/client-ses";
import { getSesClient, getDefaultEmailFrom } from "@/lib/email/sesClient";

type SendParams = {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  cc?: string[];
  bcc?: string[];
};

/**
 * Purpose: Send transactional email via SES v3.
 * Objectives: used by newsletter and inquiries routes.
 */
export async function sendTransactionalEmail({
  to,
  subject,
  html,
  from,
  cc = [],
  bcc = [],
}: SendParams) {
  const ses = getSesClient();
  const command = new SendEmailCommand({
    Source: from || getDefaultEmailFrom(),
    Destination: {
      ToAddresses: Array.isArray(to) ? to : [to],
      CcAddresses: cc.length ? cc : undefined,
      BccAddresses: bcc.length ? bcc : undefined,
    },
    Message: {
      Subject: { Data: subject, Charset: "UTF-8" },
      Body: { Html: { Data: html, Charset: "UTF-8" } },
    },
  });
  const res = await ses.send(command);
  return { messageId: String((res as any).MessageId ?? ""), service: "ses" as const };
}


