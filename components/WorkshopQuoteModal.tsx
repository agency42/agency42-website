"use client";

import { useState, FC } from "react";
import posthog from "posthog-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

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
    message: string;
}

const WorkshopQuoteModal: FC<WorkshopQuoteModalProps> = ({ isOpen, onClose }) => {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        companyName: '',
        email: '',
        attendees: '',
        proficiency: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: keyof FormState, value: string) => {
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

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

            posthog.capture('workshop_quote_form_submitted', { ...formState });
            setSubmitSuccess(true);

            setTimeout(() => {
                onClose();
                setSubmitSuccess(false); // Reset for next time
                setFormState({ name: '', companyName: '', email: '', attendees: '', proficiency: '', message: '' });
            }, 4000);

        } catch (error: any) {
            setSubmitError(error.message || 'Unable to process your request.');
            posthog.capture('workshop_quote_form_failed', { error: error.message, ...formState });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-lg bg-white border-2 border-black rounded-lg p-0" style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}>
                <button onClick={onClose} className="absolute top-4 right-4 text-black hover:text-gray-700 z-10" aria-label="Close">✕</button>
                <div className="p-8">
                    {submitSuccess ? (
                        <div className="text-center text-black">
                            <h3 className="text-2xl font-heading font-medium mb-4">Thank You!</h3>
                            <p className="font-sans">We've received your workshop request and will be in touch shortly to discuss the details.</p>
                        </div>
                    ) : (
                        <>
                            <DialogHeader className="mb-6 border-b-2 border-black pb-4">
                                <DialogTitle className="text-2xl font-heading font-medium text-black text-left">Request a Workshop Quote</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="name" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">Your Name</Label>
                                        <Input id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black transition" />
                                    </div>
                                    <div>
                                        <Label htmlFor="companyName" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">Company Name</Label>
                                        <Input id="companyName" name="companyName" value={formState.companyName} onChange={handleChange} required className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black transition" />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="email" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">Email Address</Label>
                                    <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black transition" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="attendees" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">Est. Attendees</Label>
                                        <Input id="attendees" name="attendees" type="number" value={formState.attendees} onChange={handleChange} required className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black transition" />
                                    </div>
                                    <div>
                                        <Label htmlFor="proficiency" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">Team Proficiency</Label>
                                        <Select name="proficiency" value={formState.proficiency} onValueChange={(value) => handleSelectChange('proficiency', value)}>
                                            <SelectTrigger className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black">
                                                <SelectValue placeholder="Select level" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white border-2 border-black rounded-none shadow-lg z-[1000]">
                                                <SelectItem value="new_to_ai">New to AI</SelectItem>
                                                <SelectItem value="has_used_chatgpt">Has used ChatGPT</SelectItem>
                                                <SelectItem value="uses_ai_regularly">Uses AI regularly</SelectItem>
                                                <SelectItem value="professional_programmers">Programmers</SelectItem>
                                                <SelectItem value="mixed">Mixed</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="message" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">Your Goals</Label>
                                    <Textarea id="message" name="message" value={formState.message} onChange={handleChange} required placeholder="What are you hoping to achieve with this workshop?" className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black transition h-24 resize-none" />
                                </div>
                                
                                {submitError && <p className="text-red-500 text-sm font-sans">{submitError}</p>}
                                
                                <Button type="submit" disabled={isSubmitting} className="w-full bg-black text-white font-mono text-[11px] tracking-wider uppercase py-4 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 border-2 border-black">
                                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                                </Button>
                            </form>
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default WorkshopQuoteModal; 