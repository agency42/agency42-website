import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import ClientEmail from '@/app/api/contact/emails/ClientEmail';
import TeamEmail from '@/app/api/contact/emails/TeamEmail';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Team email that will receive notifications
const TEAM_EMAIL = process.env.TEAM_EMAIL || 'hello@agency42.com';

// Discord Webhook URL from environment variables
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    console.log("Request body:", body);
    
    const {
      name,
      email,
      companyName,
      companySize,
      budget,
      projectDescription
    } = body;

    // Basic validation
    if (!name || !email || !projectDescription) {
      console.log("Validation failed:", { name, email, projectDescription });
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields' 
        },
        { status: 400 }
      );
    }

    // Send email to client (confirmation receipt)
      await resend.emails.send({
      from: 'Agency42 <contact@agency42.com>',
      to: email,
      subject: 'We received your message',
      react: ClientEmail({ clientName: name }),
    });
    
    // Format message for team notification
    const formattedMessage = `
${projectDescription}

Company Name: ${companyName || 'Not specified'}
Company Size: ${companySize || 'Not specified'}
Budget Range: ${budget || 'Not specified'}
    `.trim();

    // Send email to team (notification of submission)
      await resend.emails.send({
      from: 'Agency42 Contact Form <contact@agency42.com>',
      to: TEAM_EMAIL,
      subject: `New Submission from ${name}`,
      react: TeamEmail({ 
        name, 
        email, 
        message: formattedMessage, 
        company: companyName 
      }),
    });
    
    // -- Discord Webhook Notification --
    if (DISCORD_WEBHOOK_URL) {
      try {
        const discordPayload = {
          embeds: [{
            title: '🚀 New Qual Form Submission',
            color: 0xffa500, // Orange color
            fields: [
              { name: '👤 Name', value: name, inline: true },
              { name: '🏢 Company', value: companyName || 'N/A', inline: true },
              { name: '✉️ Email', value: email, inline: false },
              { name: '👥 Company Size', value: companySize || 'N/A', inline: true },
              { name: '💰 Budget', value: budget || 'N/A', inline: true },
              { name: '📝 Project Description', value: projectDescription.substring(0, 1000) + (projectDescription.length > 1000 ? '...' : ''), inline: false },
            ],
            footer: {
              text: 'Agency42 Website',
            },
            timestamp: new Date().toISOString()
          }]
        };

        const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(discordPayload),
        });

        if (!discordResponse.ok) {
          console.error(`Discord webhook failed with status: ${discordResponse.status}`);
          // Log the response body if possible for more details
          try {
            const errorBody = await discordResponse.text();
            console.error("Discord error body:", errorBody);
          } catch {}
        } else {
          console.log("Discord notification sent successfully.");
      }
      } catch (discordError) {
        console.error("Error sending Discord notification:", discordError);
    }
    } else {
      console.log("DISCORD_WEBHOOK_URL not set, skipping notification.");
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Form submitted successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process form submission' 
      },
      { status: 500 }
    );
  }
} 