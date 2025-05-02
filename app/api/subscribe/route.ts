import { NextResponse } from 'next/server';

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID; // Removed _V2 to match .env.local
const BEEHIIV_API_URL = `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`;

export async function POST(request: Request) {
  if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
    console.error('Beehiiv API Key or Publication ID not configured in .env.local');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    const response = await fetch(BEEHIIV_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEEHIIV_API_KEY}`
      },
      body: JSON.stringify({ email: email })
    });

    const data = await response.json();

    if (!response.ok) {
      // Log the detailed error from Beehiiv if possible
      console.error('Beehiiv API Error:', data);
      const errorMessage = data?.errors?.[0]?.message || 'Subscription failed. Please try again.';
      return NextResponse.json({ error: errorMessage }, { status: response.status });
    }

    // Successfully subscribed
    return NextResponse.json({ success: true, message: 'Successfully subscribed!' }, { status: 200 });

  } catch (error) {
    console.error('Subscription request failed:', error);
    // Check if it's a JSON parsing error or network error
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid request format.' }, { status: 400 });
    }
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
} 