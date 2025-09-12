import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getYear, getDiscordWebhook, getSiteUrl } from "@/lib/config";
import { renderTemplate } from "@/lib/email/template";
import { sendTransactionalEmail } from "@/lib/email/sendEmail";

export const runtime = 'nodejs';

const Schema = z.object({
  email: z.string().email("A valid email is required"),
  name: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().optional(),
  form_type: z.string().optional(),
  company: z.string().optional(),
  company_size: z.string().optional(),
  budget: z.string().optional(),
  meta: z.any().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json().catch(() => ({}));
    const parsed = Schema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.issues[0]?.message || "Invalid input" }, { status: 400 });
    }

    const { email, name, subject, message, form_type, company, company_size, budget, meta } = parsed.data;
    const supabase = getSupabaseServerClient();

    // 1) Insert (duplicates allowed)
    const { error: insertError } = await supabase
      .from("agency42_inquiries")
      .insert({ email, name, subject, message, form_type, company, company_size, budget, meta });

    if (insertError) {
      return NextResponse.json({ success: false, error: "Failed to save your inquiry." }, { status: 500 });
    }

    // 2) SES email (acknowledgement to user with summary)
    const year = getYear();
    const siteUrl = getSiteUrl();
    const html = renderTemplate("inquiry-received", {
      name: name || "there",
      email,
      company: company || "",
      company_size: company_size || "",
      budget: budget || "",
      subject: subject || (form_type === 'services_inquiry' ? 'Services Inquiry' : form_type === 'vibe_code_inquiry' ? 'Vibe Code Inquiry' : 'Inquiry'),
      message: message || "",
      year: String(year),
      siteUrl,
      unsubscribeUrl: `${siteUrl}/newsletter/unsubscribe`,
    });

    try {
      await sendTransactionalEmail({
        to: email,
        subject: "We received your inquiry △",
        html,
        cc: ["hello@agency42.co"],
      });
    } catch {
      return NextResponse.json(
        { success: true, data: { message: "Thanks! (Email delivery pending)" }, details: ["Email send failed"] },
        { status: 207 }
      );
    }

    // 3) Discord webhook (every inquiry) - format based on form_type
    try {
      const webhook = getDiscordWebhook();
      if (webhook) {
        let discordEmbed;

        if (form_type === 'services_inquiry') {
          discordEmbed = {
            title: '🛠️ New Services Inquiry',
            color: 0xffa500,
            fields: [
              { name: '👤 Name', value: name || 'N/A', inline: true },
              { name: '🏢 Company', value: company || 'N/A', inline: true },
              { name: '✉️ Email', value: email, inline: false },
              { name: '👥 Company Size', value: company_size || 'N/A', inline: true },
              { name: '💰 Budget', value: budget || 'N/A', inline: true },
              { name: '📝 Description', value: (message || '').substring(0, 1000) + ((message || '').length > 1000 ? '...' : ''), inline: false },
            ],
            footer: { text: 'Agency42 Website' },
            timestamp: new Date().toISOString(),
          };
        } else if (form_type === 'vibe_code_inquiry') {
          discordEmbed = {
            title: '💫 New Vibe Code Inquiry',
            color: 0x6a0dad,
            fields: [
              { name: '👤 Name', value: name || 'N/A', inline: true },
              { name: '✉️ Email', value: email, inline: true },
              { name: '🏢 Company', value: company || 'N/A', inline: false },
              { name: '📝 Message', value: (message || '').substring(0, 1000) + ((message || '').length > 1000 ? '...' : ''), inline: false },
            ],
            footer: { text: 'Agency42 Website' },
            timestamp: new Date().toISOString(),
          };
        } else {
          // Generic inquiry format
          discordEmbed = {
            title: "✨ New Inquiry",
            color: 0xFFAD5E,
            fields: [
              { name: "📧 Email", value: email, inline: false },
              name ? { name: "👤 Name", value: name, inline: false } : undefined,
              subject ? { name: "📝 Subject", value: subject, inline: false } : undefined,
            ].filter(Boolean),
            footer: { text: "Agency42 | Inquiry" },
            timestamp: new Date().toISOString(),
          };
        }

        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ embeds: [discordEmbed] }),
        });
      }
    } catch { /* ignore */ }

    return NextResponse.json({ success: true, data: { message: "Thanks! We'll be in touch shortly." } });
  } catch {
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}


