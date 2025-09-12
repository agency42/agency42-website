import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getDiscordWebhook } from "@/lib/config";

export const runtime = 'nodejs';

const DISCORD_WEBHOOK = getDiscordWebhook();

// Helper function to convert reason codes to readable labels
function getReasonLabel(reason: string): string {
  const reasonMap: Record<string, string> = {
    "too-frequent": "Too many emails",
    "not-relevant": "Content not relevant",
    "never-signed-up": "Never signed up",
    "changed-interests": "Changed interests",
    other: "Other",
  };
  return reasonMap[reason] || reason;
}

// Primary path: GET with unsubscribe token (opaque)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("t");
    if (!token) {
      return NextResponse.json({ success: false, error: "Missing token" }, { status: 400 });
    }

    const supabase = getSupabaseServerClient();
    const { data: subscriber, error: selectError } = await supabase
      .from("agency42_newsletter_subscribers")
      .select("id, email")
      .eq("unsubscribe_token", token)
      .maybeSingle();

    if (selectError) {
      return NextResponse.json({ success: false, error: "Lookup failed" }, { status: 500 });
    }
    if (!subscriber) {
      return NextResponse.json({ success: false, error: "Invalid token" }, { status: 404 });
    }

    const newToken = (globalThis.crypto?.randomUUID?.() || undefined) as string | undefined;
    const { error: updateError } = await supabase
      .from("agency42_newsletter_subscribers")
      .update({ unsubscribed_at: new Date().toISOString(), ...(newToken ? { unsubscribe_token: newToken } : {}) })
      .eq("id", subscriber.id);

    if (updateError) {
      return NextResponse.json({ success: false, error: "Failed to unsubscribe" }, { status: 500 });
    }

    // Discord notification
    try {
      if (DISCORD_WEBHOOK) {
        await fetch(DISCORD_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [{
              title: "📧 Newsletter Unsubscribed",
              color: 0xff6b6b,
              fields: [
                { name: "✉️ Email", value: subscriber.email, inline: true },
              ],
              footer: { text: "Agency42 Newsletter" },
              timestamp: new Date().toISOString(),
            }]
          })
        });
      }
    } catch { /* ignore */ }

    // Redirect to a confirmation page
    const redirectUrl = new URL("/newsletter/unsubscribe?success=1", request.url);
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

// Fallback path: POST with email (manual processing)
function validateUnsubscribeRequest(body: Record<string, unknown>): boolean {
  const { email } = body;
  return Boolean(email && typeof email === "string" && email.includes("@"));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!validateUnsubscribeRequest(body)) {
      return NextResponse.json(
        { success: false, error: "Valid email address is required" },
        { status: 400 }
      );
    }

    const { email, reason, feedback } = body as { email: string; reason?: string; feedback?: string };

    // Best-effort mark unsubscribed by email (non-token fallback)
    try {
      const supabase = getSupabaseServerClient();
      await supabase
        .from("agency42_newsletter_subscribers")
        .update({ unsubscribed_at: new Date().toISOString() })
        .eq("email", email);
    } catch { /* ignore db errors here */ }

    // Discord notification
    if (DISCORD_WEBHOOK) {
      try {
        await fetch(DISCORD_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [
              {
                title: "📧 Newsletter Unsubscribe Request",
                color: 0xff6b6b,
                fields: [
                  { name: "✉️ Email", value: email, inline: true },
                  ...(reason ? [{ name: "❓ Reason", value: getReasonLabel(reason), inline: false }] : []),
                  ...(feedback ? [{ name: "💭 Feedback", value: (feedback || '').substring(0, 1000) + ((feedback || '').length > 1000 ? '...' : ''), inline: false }] : []),
                ],
                footer: { text: "Agency42 Newsletter" },
                timestamp: new Date().toISOString(),
              },
            ],
          }),
        });
      } catch { /* ignore */ }
    }

    return NextResponse.json(
      { success: true, message: "Unsubscribe request received." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to process unsubscribe request" },
      { status: 500 }
    );
  }
}
