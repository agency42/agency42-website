import { NextResponse } from "next/server";
import { Resend } from "resend";

type InquiryRequestBody = {
  email: string;
  task: string;
};

const AGENCY_EMAIL = "hello@agency42.co";
const AGENCY_SIGNATURE = `
  <strong>AGENCY 42</strong><br/>
  Artificial Intelligence Solutions<br/>
  <a href="https://agency42.co" style="color: black;">agency42.co</a>
`;

function validateRequestBody(
  body: Partial<InquiryRequestBody>
): body is InquiryRequestBody {
  return typeof body.email === "string" && typeof body.task === "string";
}

function buildAgencyEmail(email: string, task: string): string {
  return `
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
        ${AGENCY_SIGNATURE}
      </div>
    </div>
  `;
}

function buildClientEmail(task: string): string {
  return `
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
        ${AGENCY_SIGNATURE}
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    // Check if the API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("API key missing in environment variables");
      return NextResponse.json(
        { error: "Missing API key configuration" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Parse and validate request body
    const body = (await request.json()) as Partial<InquiryRequestBody>;
    if (!validateRequestBody(body)) {
      console.warn("Validation failed:", {
        email: !!body.email,
        task: !!body.task,
      });
      return NextResponse.json(
        {
          error: "Missing required fields",
          email: !!body.email,
          task: !!body.task,
        },
        { status: 400 }
      );
    }

    const { email, task } = body;

    // Send notification email to Agency 42
    await resend.emails.send({
      from: "Agency 42 <onboarding@resend.dev>",
      to: [AGENCY_EMAIL],
      subject: "[ NEW CLIENT INQUIRY ] Agency 42",
      html: buildAgencyEmail(email, task),
    });

    // Send confirmation email to the client
    await resend.emails.send({
      from: "Agency 42 <onboarding@resend.dev>",
      to: [email],
      subject: "We received your inquiry - Agency 42",
      html: buildClientEmail(task),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      {
        error: "Error processing inquiry",
        details: error instanceof Error ? error.message : "Unknown error",
        type: error instanceof Error ? error.constructor.name : "Unknown",
      },
      { status: 500 }
    );
  }
}
