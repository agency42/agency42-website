import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Log whether the API key is available
console.log('API Key available:', !!process.env.RESEND_API_KEY);

// Keep recipient email server-side
const AGENCY_EMAIL = 'hello@agency42.co';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { email, task } = await request.json();

    // Validate inputs
    if (!email || !task) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send notification email to Agency 42
    await resend.emails.send({
      from: 'Agency 42 <onboarding@resend.dev>',
      to: [AGENCY_EMAIL],
      subject: '[ NEW CLIENT INQUIRY ] Agency 42',
      html: `
        <div style="font-family: monospace; padding: 20px; border: 2px solid black;">
          <h1 style="border-bottom: 2px solid black; padding-bottom: 10px;">NEW CLIENT INQUIRY</h1>
          
          <div style="margin: 20px 0;">
            <strong>CLIENT EMAIL:</strong><br/>
            ${email}
          </div>
          
          <div style="margin: 20px 0;">
            <strong>PROJECT DESCRIPTION:</strong><br/>
            ${task}
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid black;">
            <strong>AGENCY 42</strong><br/>
            Artificial Intelligence Solutions
          </div>
        </div>
      `,
    });

    // Send confirmation email to the client
    await resend.emails.send({
      from: 'Agency 42 <onboarding@resend.dev>',
      to: [email],
      subject: 'We received your inquiry - Agency 42',
      html: `
        <div style="font-family: monospace; padding: 20px; border: 2px solid black;">
          <h1 style="border-bottom: 2px solid black; padding-bottom: 10px;">Thank You for Reaching Out</h1>
          
          <div style="margin: 20px 0;">
            <p>We've received your inquiry about:</p>
            <div style="background: #f5f5f5; padding: 15px; margin: 10px 0; border-left: 4px solid black;">
              ${task}
            </div>
          </div>
          
          <div style="margin: 20px 0;">
            <p>Our team will review your request and get back to you if it aligns with our expertise.</p>
            <p>In the meantime, you can:</p>
            <ul style="margin-top: 10px;">
              <li><a href="https://discord.gg/amR4AEjqh4" style="color: black; text-decoration: underline;">Join Bootoshi's AI Class every Wednesday at 9am PST</a></li>
              <li><a href="https://improbable.beehiiv.com/" style="color: black; text-decoration: underline;">Read our blog</a></li>
              <li><a href="https://x.com/agency42co" style="color: black; text-decoration: underline;">Follow us on Twitter</a></li>
            </ul>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid black;">
            <strong>AGENCY 42</strong><br/>
            Artificial Intelligence Solutions<br/>
            <a href="https://agency42.co" style="color: black;">agency42.co</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Detailed error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    } else {
      console.error('Unknown error:', error);
      return NextResponse.json(
        { error: 'An unknown error occurred' },
        { status: 500 }
      );
    }
  }
} 