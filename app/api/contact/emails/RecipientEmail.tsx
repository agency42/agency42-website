import React from 'react';

export interface RecipientEmailProps {
  fromName: string;
  fromEmail: string;
  message: string;
  company?: string;
}

export const RecipientEmail = ({
  fromName,
  fromEmail,
  message,
  company,
}: RecipientEmailProps) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: '0' }}>New Contact Submission</h1>
      </div>
      
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ color: '#333', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
          Contact Details
        </h2>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Name:</strong> {fromName}
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Email:</strong> {fromEmail}
        </div>
        
        {company && (
          <div style={{ marginBottom: '15px' }}>
            <strong>Company:</strong> {company}
          </div>
        )}
        
        <h3 style={{ color: '#333', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginTop: '25px' }}>
          Message
        </h3>
        
        <div style={{ whiteSpace: 'pre-wrap', backgroundColor: 'white', padding: '15px', borderRadius: '4px', border: '1px solid #ddd' }}>
          {message}
        </div>
      </div>
      
      <div style={{ backgroundColor: '#f2f2f2', padding: '15px', textAlign: 'center', fontSize: '14px', color: '#666' }}>
        <p>This message was submitted through the Agency 42 contact form.</p>
      </div>
    </div>
  );
};

export default RecipientEmail; 