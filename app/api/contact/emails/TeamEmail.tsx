import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface TeamEmailProps {
  name: string;
  email: string;
  message: string;
  company?: string;
}

const TeamEmail: React.FC<TeamEmailProps> = ({ name, email, message, company }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>New Contact Form Submission</Heading>
          
          <Section>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.text}>{name}</Text>
            
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.text}>{email}</Text>
            
            {company && (
              <>
                <Text style={styles.label}>Company:</Text>
                <Text style={styles.text}>{company}</Text>
              </>
            )}
            
            <Text style={styles.label}>Message:</Text>
            <Text style={styles.text}>{message}</Text>
          </Section>
          
          <Hr style={styles.hr} />
          
          <Text style={styles.footer}>
            © {currentYear} Agency42. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  body: {
    backgroundColor: '#f6f9fc',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },
  container: {
    margin: '0 auto',
    padding: '20px 0',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#333',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#555',
    marginBottom: '4px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '26px',
    color: '#555',
    marginBottom: '16px',
  },
  hr: {
    borderColor: '#e6ebf1',
    margin: '20px 0',
  },
  footer: {
    fontSize: '14px',
    color: '#9ca299',
    textAlign: 'center' as const,
    marginTop: '16px',
  },
};

export default TeamEmail; 