import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend directly. This will throw an error during development if the key is missing.
const resend = new Resend(process.env.RESEND_API_KEY);

const TEAM_EMAIL = process.env.TEAM_EMAIL || 'hello@agency42.co';
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

// Validation functions remain the same
function validateWorkshopQuote(body: any) {
  const { name, email, companyName, attendees, proficiency } = body;
  return name && email && companyName && attendees && proficiency;
}

function validateQualForm(body: any) {
  const { name, email, projectDescription } = body;
  return name && email && projectDescription;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    const { type = 'qual_form' } = body;

    let isValid = false;
    if (type === 'workshop_quote') {
      isValid = validateWorkshopQuote(body);
    } else {
      isValid = validateQualForm(body);
    }

    if (!isValid) {
      console.log("Validation failed for type:", type, "with body:", body);
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { name, email } = body;

    // Prepare notifications based on submission type
    let teamSubject: string;
    let teamHtml: string;
    let clientSubject: string;
    let clientHtml: string;
    let discordEmbeds: any[];

    if (type === 'workshop_quote') {
      const { companyName, attendees, proficiency } = body;
      teamSubject = `New Workshop Quote Request from ${name}`;
      clientSubject = `Your Workshop Quote Request - Agency 42`;
      teamHtml = `
        <h1>New Workshop Quote Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Attendees:</strong> ${attendees}</p>
        <p><strong>Proficiency:</strong> ${proficiency}</p>
      `;
      clientHtml = `
        <h1>Thank you for your request!</h1>
        <p>We've received your workshop quote request and will get back to you shortly.</p>
        <p>Here's a summary of your submission:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Company:</strong> ${companyName}</li>
          <li><strong>Attendees:</strong> ${attendees}</li>
          <li><strong>Proficiency:</strong> ${proficiency}</li>
        </ul>
      `;
      discordEmbeds = [{
        title: '📝 New Workshop Quote Request',
        color: 0x00bfff,
        fields: [
          { name: '👤 Name', value: name, inline: true },
          { name: '🏢 Company', value: companyName, inline: true },
          { name: '✉️ Email', value: email, inline: false },
          { name: '👥 Attendees', value: attendees, inline: true },
          { name: '🛠️ Proficiency', value: proficiency, inline: true },
        ],
        footer: { text: 'Agency42 Website' },
        timestamp: new Date().toISOString()
      }];
    } else {
      const { companyName, companySize, budget, projectDescription } = body;
      teamSubject = `New Submission from ${name}`;
      clientSubject = `We received your message - Agency 42`;
      teamHtml = `
        <h1>New Qual Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
        <p><strong>Company Size:</strong> ${companySize || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <hr />
        <p><strong>Description:</strong></p>
        <p>${projectDescription}</p>
      `;
      clientHtml = `
        <h1>Thank you for reaching out!</h1>
        <p>We've received your message and will get back to you as soon as possible.</p>
      `;
      discordEmbeds = [{
        title: '🚀 New Qual Form Submission',
        color: 0xffa500,
        fields: [
          { name: '👤 Name', value: name, inline: true },
          { name: '🏢 Company', value: companyName || 'N/A', inline: true },
          { name: '✉️ Email', value: email, inline: false },
          { name: '👥 Company Size', value: companySize || 'N/A', inline: true },
          { name: '💰 Budget', value: budget || 'N/A', inline: true },
          { name: '📝 Project Description', value: projectDescription.substring(0, 1000) + (projectDescription.length > 1000 ? '...' : ''), inline: false },
        ],
        footer: { text: 'Agency42 Website' },
        timestamp: new Date().toISOString()
      }];
    }
    
    // Using a verified sending domain is best practice
    const fromAddress = 'Agency42 <hello@agency42.co>';

    // Send notification email to the team
    await resend.emails.send({
      from: fromAddress,
      to: [TEAM_EMAIL],
      subject: teamSubject,
      html: teamHtml,
    });

    // Send confirmation email to the client
    await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject: clientSubject,
      html: clientHtml,
    });

    // Send Discord notification
    if (DISCORD_WEBHOOK_URL) {
      try {
        await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ embeds: discordEmbeds }),
        });
      } catch (discordError) {
        console.error("Error sending Discord notification:", discordError);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 