import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { z } from "zod";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getSiteUrl, getYear, getDiscordWebhook } from "@/lib/config";
import { renderTemplate } from "@/lib/email/template";
import { sendTransactionalEmail } from "@/lib/email/sendEmail";

export const runtime = 'nodejs';

const Schema = z.object({
  email: z.string().email("A valid email is required"),
});

export async function POST(request: Request) {
  try {
    const json = await request.json().catch(() => ({}));
    const parsed = Schema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.issues[0]?.message || "Invalid input" }, { status: 400 });
    }

    const { email } = parsed.data;
    const supabase = getSupabaseServerClient();

    // 1) Check existing subscriber (including unsubscribe/verify state)
    const { data: existing, error: selectError } = await supabase
      .from("agency42_newsletter_subscribers")
      .select("id, unsubscribe_token, unsubscribed_at, verify_token")
      .eq("email", email)
      .maybeSingle();

    if (selectError && (selectError as any).code !== "PGRST116") {
      return NextResponse.json({ success: false, error: "Failed to check subscription." }, { status: 500 });
    }
    if (existing?.id) {
      // If previously unsubscribed, re-enable and send verify email
      if (existing.unsubscribed_at) {
        const newVerifyToken = randomUUID();
        const { data: updated, error: updateError } = await supabase
          .from("agency42_newsletter_subscribers")
          .update({ unsubscribed_at: null, verify_token: newVerifyToken })
          .eq("id", existing.id)
          .select("id, unsubscribe_token, verify_token")
          .single();

        if (updateError || !updated) {
          return NextResponse.json({ success: false, error: "Failed to update subscription." }, { status: 500 });
        }

        const siteUrl = getSiteUrl();
        const year = getYear();
        const verificationUrl = `${siteUrl}/api/newsletter/verify?t=${updated.verify_token}`;
        const unsubscribeUrl = `${siteUrl}/api/newsletter/unsubscribe?t=${updated.unsubscribe_token}`;
        const html = renderTemplate("newsletter-verification", { userEmail: email, verificationUrl, siteUrl, year, unsubscribeUrl });

        try {
          await sendTransactionalEmail({
            to: email,
            subject: "△ You're almost in",
            html,
          });
        } catch {
          return NextResponse.json(
            { success: true, data: { message: "Thanks! (Email delivery pending)" }, details: ["Email send failed"] },
            { status: 207 }
          );
        }

        // Notify Discord (resubscribe)
        try {
          const webhook = getDiscordWebhook();
          if (webhook) {
            await fetch(webhook, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                embeds: [{
                  title: "🔁 Newsletter Re-subscribe",
                  color: 0x00cd00,
                  fields: [{ name: "📧 Email", value: email }],
                  footer: { text: "Agency42 | Newsletter" },
                  timestamp: new Date().toISOString(),
                }]
              }),
            });
          }
        } catch { /* ignore */ }

        return NextResponse.json({ success: true, data: { message: "Thanks! Please confirm your subscription." } });
      }

      // Already an active subscriber
      return NextResponse.json({ success: false, error: "You're already subscribed." }, { status: 409 });
    }

    // 2) Insert
    const newVerifyToken = randomUUID();
    const { data: inserted, error: insertError } = await supabase
      .from("agency42_newsletter_subscribers")
      .insert({ email, verify_token: newVerifyToken })
      .select("id, unsubscribe_token, verify_token")
      .single();

    if (insertError || !inserted) {
      return NextResponse.json({ success: false, error: "Failed to save subscription." }, { status: 500 });
    }

    // 3) SES email (verification/confirmation)
    const siteUrl = getSiteUrl();
    const year = getYear();
    const verificationUrl = `${siteUrl}/api/newsletter/verify?t=${inserted.verify_token}`;
    const unsubscribeUrl = `${siteUrl}/api/newsletter/unsubscribe?t=${inserted.unsubscribe_token}`;
    const html = renderTemplate("newsletter-verification", { userEmail: email, verificationUrl, siteUrl, year, unsubscribeUrl });

    try {
      await sendTransactionalEmail({
        to: email,
        subject: "You're subscribed! △",
        html,
      });
    } catch {
      return NextResponse.json(
        { success: true, data: { message: "You're subscribed. (Email delivery pending)" }, details: ["Email send failed"] },
        { status: 207 }
      );
    }

    // 4) Discord webhook (new subs only)
    try {
      const webhook = getDiscordWebhook();
      if (webhook) {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [{
              title: "📰 New Newsletter Signup",
              color: 0x00cd00,
              fields: [{ name: "📧 Email", value: email }],
              footer: { text: "Agency42 | Signup" },
              timestamp: new Date().toISOString(),
            }]
          }),
        });
      }
    } catch { /* ignore */ }

    return NextResponse.json({ success: true, data: { message: "You're subscribed." } });
  } catch {
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}


