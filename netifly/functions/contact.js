const { Resend } = require('resend');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const AGENCY_EMAIL = 'hello@agency42.co';

  try {
    console.log('API Key available:', !!process.env.RESEND_API_KEY);
    
    const body = JSON.parse(event.body);
    console.log('Request body parsed:', !!body);
    
    const { email, task } = body;
    
    if (!email || !task) {
      console.log('Validation failed:', { email: !!email, task: !!task });
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Missing required fields', 
          email: !!email, 
          task: !!task 
        })
      };
    }

    if (!process.env.RESEND_API_KEY) {
      console.log('API key missing in environment variables');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Missing API key configuration' })
      };
    }

    // Your existing email sending logic remains the same, just the response format changes
    await resend.emails.send({
      from: 'Agency 42 <onboarding@resend.dev>',
      to: [AGENCY_EMAIL],
      subject: '[ NEW CLIENT INQUIRY ] Agency 42',
      html: `...your existing HTML...`
    });

    await resend.emails.send({
      from: 'Agency 42 <onboarding@resend.dev>',
      to: [email],
      subject: 'We received your inquiry - Agency 42',
      html: `...your existing HTML...`
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message || 'Unknown error',
      stack: error.stack || 'No stack available',
      apiKeyExists: !!process.env.RESEND_API_KEY
    });
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Error processing inquiry',
        details: error.message || 'Unknown error',
        type: error.constructor.name || 'Unknown'
      })
    };
  }
};
