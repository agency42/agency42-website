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
    // Log when the API route is hit and if the API key is present
    console.log('API Route hit, API Key present:', !!process.env.RESEND_API_KEY);
    
    // Parse the request body and log the result
    const body = await request.json();
    console.log('Request body parsed:', !!body);
    
    const { email, task } = body;
    
    // Validate inputs and log their presence
    if (!email || !task) {
      console.log('Validation failed:', { email: !!email, task: !!task });
      return NextResponse.json(
        { error: 'Missing required fields', email: !!email, task: !!task },
        { status: 400 }
      );
    }

    // Check if the API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('API key missing in environment variables');
      return NextResponse.json(
        { error: 'Missing API key configuration' },
        { status: 500 }
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
    // Log detailed error information
    console.error('Detailed error:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack available',
      apiKeyExists: !!process.env.RESEND_API_KEY
    });
    
    return NextResponse.json(
      { 
        error: 'Error processing inquiry',
        details: error instanceof Error ? error.message : 'Unknown error',
        type: error instanceof Error ? error.constructor.name : 'Unknown'
      },
      { status: 500 }
    );
  }
} 