import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Keep recipient email server-side
const AGENCY_EMAIL = 'hello@agency42.co';

// Helper function to handle CORS
function corsResponse(response: NextResponse) {
  // Add CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return corsResponse(new NextResponse(null, { status: 200 }));
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { email, task } = await request.json();

    // Validate inputs
    if (!email || !task) {
      return corsResponse(
        NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        )
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return corsResponse(
        NextResponse.json(
          { error: 'Invalid email format' },
          { status: 400 }
        )
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

    return corsResponse(NextResponse.json({ success: true }));
  } catch (error) {
    console.error('Error sending email:', error);
    return corsResponse(
      NextResponse.json(
        { error: 'Error processing inquiry' },
        { status: 500 }
      )
    );
  }
} 