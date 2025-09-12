import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getDiscordWebhook } from "@/lib/config";

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("t");
    if (!token) {
      const redirectHome = new URL('/', request.url);
      return NextResponse.redirect(redirectHome);
    }

    const supabase = getSupabaseServerClient();
    const { data: subscriber, error: selectError } = await supabase
      .from("agency42_newsletter_subscribers")
      .select("id, email")
      .eq("verify_token", token)
      .maybeSingle();

    // If Supabase returns a no-rows error code (PGRST116), treat as invalid token and redirect home.
    if (selectError && (selectError as any).code !== "PGRST116") {
      const redirectHome = new URL('/', request.url);
      return NextResponse.redirect(redirectHome);
    }
    if (!subscriber) {
      const redirectHome = new URL('/', request.url);
      return NextResponse.redirect(redirectHome);
    }

    const { error: updateError } = await supabase
      .from("agency42_newsletter_subscribers")
      .update({ verify_token: null, verified_at: new Date().toISOString(), unsubscribed_at: null })
      .eq("id", subscriber.id);
    if (updateError) {
      return NextResponse.json({ success: false, error: "Failed to verify" }, { status: 500 });
    }

    try {
      const webhook = getDiscordWebhook();
      if (webhook) {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [{
              title: "✅ Newsletter Verified",
              color: 0x32cd32,
              fields: [{ name: "📧 Email", value: subscriber.email }],
              footer: { text: "Agency42 | Newsletter" },
              timestamp: new Date().toISOString(),
            }]
          }),
        });
      }
    } catch { /* ignore */ }

    const redirectUrl = new URL("/newsletter/verify", request.url);
    return NextResponse.redirect(redirectUrl);
  } catch {
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}


