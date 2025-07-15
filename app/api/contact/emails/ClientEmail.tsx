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

interface ClientEmailProps {
  clientName: string;
}

const ClientEmail: React.FC<ClientEmailProps> = ({ clientName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Agency42</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>Thank You for Contacting Agency42</Heading>
          
          <Section>
            <Text style={styles.text}>Hi {clientName},</Text>
            <Text style={styles.text}>
              Thank you for reaching out to us. We&apos;ve received your message and our team will review it shortly.
            </Text>
            <Text style={styles.text}>
              We typically respond within 1-2 business days. If your matter is urgent, please feel free to call us directly.
            </Text>
          </Section>
          
          <Hr style={styles.hr} />
          
          <Section>
            <Text style={styles.text}>
              Best regards,
            </Text>
            <Text style={styles.text}>
              The Agency42 Team
            </Text>
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

export default ClientEmail; 