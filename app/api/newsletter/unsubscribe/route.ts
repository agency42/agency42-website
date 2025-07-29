import { NextRequest, NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

// Validation function for unsubscribe request
function validateUnsubscribeRequest(body: Record<string, unknown>): boolean {
  const { email } = body;
  return Boolean(email && typeof email === "string" && email.includes("@"));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!validateUnsubscribeRequest(body)) {
      console.log("Validation failed for unsubscribe request:", body);
      return NextResponse.json(
        { success: false, error: "Valid email address is required" },
        { status: 400 }
      );
    }

    const { email, reason, feedback } = body;

    // Prepare Discord embed for the unsubscribe request
    const discordEmbeds = [
      {
        title: "📧 Newsletter Unsubscribe Request",
        color: 0xff6b6b, // Red color for unsubscribe
        fields: [
          { name: "✉️ Email", value: email, inline: true },
          {
            name: "📅 Date",
            value: new Date().toLocaleDateString(),
            inline: true,
          },
          {
            name: "🕒 Time",
            value: new Date().toLocaleTimeString(),
            inline: true,
          },
          ...(reason
            ? [
                {
                  name: "❓ Reason",
                  value: getReasonLabel(reason),
                  inline: false,
                },
              ]
            : []),
          ...(feedback
            ? [
                {
                  name: "💭 Feedback",
                  value:
                    feedback.substring(0, 1000) +
                    (feedback.length > 1000 ? "..." : ""),
                  inline: false,
                },
              ]
            : []),
        ],
        footer: { text: "Agency42 Newsletter Unsubscribe" },
        timestamp: new Date().toISOString(),
      },
    ];

    // Send Discord notification
    if (DISCORD_WEBHOOK_URL) {
      try {
        await fetch(DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ embeds: discordEmbeds }),
        });
        console.log(
          "Discord notification sent successfully for unsubscribe request"
        );
      } catch (discordError) {
        console.error("Error sending Discord notification:", discordError);
        // Don't fail the request if Discord notification fails
      }
    } else {
      console.warn("Discord webhook URL not configured");
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Unsubscribe request received successfully. You will be removed from our newsletter within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unsubscribe request error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process unsubscribe request" },
      { status: 500 }
    );
  }
}

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
