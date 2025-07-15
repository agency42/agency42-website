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
  const { name, email, projectDescription, message } = body;
  return name && email && (projectDescription || message);
}

function validateWorkWithUs(body: any) {
  const { email, task } = body;
  return email && task;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    const { type = 'qual_form' } = body;

    let isValid = false;
    if (type === 'workshop_quote') {
      isValid = validateWorkshopQuote(body);
    } else if (type === 'work_with_us') {
      isValid = validateWorkWithUs(body);
    } else {
      // Covers 'qual_form' and 'vibe_code_inquiry'
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
    } else if (type === 'work_with_us') {
      const { email: workEmail, task } = body;
      // For work with us we might not have a name/company fields
      teamSubject = `New Work With Us Inquiry`;
      clientSubject = `We received your request - Agency 42`;
      teamHtml = `
        <h1>New Work With Us Inquiry</h1>
        <p><strong>Email:</strong> ${workEmail}</p>
        <p><strong>Task:</strong></p>
        <p>${task}</p>
      `;
      clientHtml = `
        <h1>Thanks for reaching out!</h1>
        <p>We've received your request and will get back to you as soon as possible.</p>
      `;
      discordEmbeds = [{
        title: '💼 New Work With Us Inquiry',
        color: 0x228b22,
        fields: [
          { name: '✉️ Email', value: workEmail, inline: false },
          { name: '📝 Task', value: task.substring(0, 1000) + (task.length > 1000 ? '...' : ''), inline: false },
        ],
        footer: { text: 'Agency42 Website' },
        timestamp: new Date().toISOString()
      }];
    } else {
      // Covers qual_form, vibe_code_inquiry, services_inquiry
      const company = body.companyName || body.company || 'N/A';
      const companySize = body.companySize || 'N/A';
      const budget = body.budget || 'N/A';
      const description = body.projectDescription || body.message || '';

      const isVibe = type === 'vibe_code_inquiry';
      const isServices = type === 'services_inquiry';

      if (isVibe) {
        // Vibe Code Inquiry formatting
        const interest = body.interestType || 'N/A';
        teamSubject = `New Vibe Code Inquiry from ${name}`;
        clientSubject = `We received your inquiry - Agency 42`;
        teamHtml = `
          <h1>New Vibe Code Inquiry</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Interest Type:</strong> ${interest}</p>
          <p><strong>Company:</strong> ${company}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${description}</p>
        `;
        clientHtml = `
          <h1>Thanks for reaching out!</h1>
          <p>We've received your inquiry and will follow up shortly with next steps.</p>
        `;
        discordEmbeds = [{
          title: '💫 New Vibe Code Inquiry',
          color: 0x6a0dad,
          fields: [
            { name: '👤 Name', value: name, inline: true },
            { name: '✉️ Email', value: email, inline: true },
            { name: '🎯 Interest', value: interest, inline: true },
            { name: '🏢 Company', value: company, inline: false },
            { name: '📝 Message', value: description.substring(0, 1000) + (description.length > 1000 ? '...' : ''), inline: false },
          ],
          footer: { text: 'Agency42 Website' },
          timestamp: new Date().toISOString()
        }];
      } else if (isServices) {
        // Services Inquiry (formerly qual form)
        teamSubject = `New Services Inquiry from ${name}`;
        clientSubject = `We received your message - Agency 42`;
        teamHtml = `
          <h1>New Services Inquiry</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Company Size:</strong> ${companySize}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <hr />
          <p><strong>Description:</strong></p>
          <p>${description}</p>
        `;
        clientHtml = `
          <h1>Thank you for reaching out!</h1>
          <p>We've received your message and will get back to you as soon as possible.</p>
        `;
        discordEmbeds = [{
          title: '🛠️ New Services Inquiry',
          color: 0xffa500,
          fields: [
            { name: '👤 Name', value: name, inline: true },
            { name: '🏢 Company', value: company, inline: true },
            { name: '✉️ Email', value: email, inline: false },
            { name: '👥 Company Size', value: companySize, inline: true },
            { name: '💰 Budget', value: budget, inline: true },
            { name: '📝 Description', value: description.substring(0, 1000) + (description.length > 1000 ? '...' : ''), inline: false },
          ],
          footer: { text: 'Agency42 Website' },
          timestamp: new Date().toISOString()
        }];
      } else {
        // Generic / legacy qual form
        const baseTitle = 'Qual Form Submission';
        teamSubject = `New ${baseTitle} from ${name}`;
        clientSubject = `We received your message - Agency 42`;
        teamHtml = `
          <h1>New ${baseTitle}</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Company Size:</strong> ${companySize}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <hr />
          <p><strong>Description:</strong></p>
          <p>${description}</p>
        `;
        clientHtml = `
          <h1>Thank you for reaching out!</h1>
          <p>We've received your message and will get back to you as soon as possible.</p>
        `;
        discordEmbeds = [{
          title: '🚀 New Qual Form Submission',
          color: 0x00bfff,
          fields: [
            { name: '👤 Name', value: name, inline: true },
            { name: '🏢 Company', value: company, inline: true },
            { name: '✉️ Email', value: email, inline: false },
            { name: '👥 Company Size', value: companySize, inline: true },
            { name: '💰 Budget', value: budget, inline: true },
            { name: '📝 Description', value: description.substring(0, 1000) + (description.length > 1000 ? '...' : ''), inline: false },
          ],
          footer: { text: 'Agency42 Website' },
          timestamp: new Date().toISOString()
        }];
      }
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