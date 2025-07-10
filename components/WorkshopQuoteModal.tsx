import React, { useState, FormEvent, MouseEvent } from 'react';
import posthog from 'posthog-js';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

interface WorkshopQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  companyName: string;
  email: string;
  attendees: string;
  proficiency: string;
}

export const WorkshopQuoteModal: React.FC<WorkshopQuoteModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    companyName: '',
    email: '',
    attendees: '',
    proficiency: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof FormState, value: string) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    posthog.capture('workshop_quote_form_submitted', { ...formState });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, type: 'workshop_quote' }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.error || 'Request failed');
      }

      setSuccessMessage('Your request has been sent! We will get back to you shortly.');
      setTimeout(() => {
        onClose();
        setSuccessMessage('');
        setFormState({ name: '', companyName: '', email: '', attendees: '', proficiency: '' });
      }, 3000);
    } catch (error: any) {
      setErrorMessage(error.message || 'Unable to process your request.');
      posthog.capture('workshop_quote_form_failed', { error: error.message, ...formState });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center font-sans"
      aria-hidden="true"
    >
      <div
        className="relative bg-background border border-border p-6 md:p-8 max-w-[90%] w-[500px] rounded-lg"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="mb-6 border-b border-border pb-4">
          <h2 className="text-xl font-bold text-primary">Request a Workshop Quote</h2>
        </div>

        {successMessage ? (
          <p className="text-center">{successMessage}</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">Your Name</Label>
              <Input id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black transition" />
            </div>
            <div>
              <Label htmlFor="companyName" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">Company Name</Label>
              <Input id="companyName" name="companyName" value={formState.companyName} onChange={handleChange} required className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black transition" />
            </div>
            <div>
              <Label htmlFor="email" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">Email Address</Label>
              <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black transition" />
            </div>
            <div>
              <Label htmlFor="attendees" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">Estimated Attendees</Label>
              <Input id="attendees" name="attendees" type="number" value={formState.attendees} onChange={handleChange} required className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black transition" />
            </div>
            <div>
              <Label htmlFor="proficiency" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">Audience Technical Proficiency</Label>
              <Select value={formState.proficiency} onValueChange={(value) => handleSelectChange('proficiency', value)}>
                <SelectTrigger className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black">
                  <SelectValue placeholder="Select proficiency level" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-black rounded-none shadow-lg z-[1000]">
                  <SelectItem value="new_to_ai">New to AI</SelectItem>
                  <SelectItem value="has_used_chatgpt">Has used ChatGPT before</SelectItem>
                  <SelectItem value="uses_ai_regularly">Uses AI regularly in their work</SelectItem>
                  <SelectItem value="professional_programmers">Professional Programmers</SelectItem>
                  <SelectItem value="mixed">Mixed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {errorMessage && <p className="text-destructive">{errorMessage}</p>}

            <Button type="submit" disabled={isSubmitting} className="w-full bg-black text-white font-mono text-[11px] tracking-wider uppercase py-4 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 border-2 border-black">
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}; 