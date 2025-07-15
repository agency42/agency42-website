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
import ContactForm from "./ContactForm"

export type WorkshopQuoteModalProps = {
  isOpen: boolean
  onClose: () => void
  interestType: 'individual' | 'team' | 'university' | null;
}

export default function WorkshopQuoteModal({ isOpen, onClose, interestType }: WorkshopQuoteModalProps) {
    return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Started with Vibe Coding</DialogTitle>
          <DialogDescription>
            Tell us a bit about your goals, and we'll get in touch to design a plan that's right for you.
          </DialogDescription>
                            </DialogHeader>
        <ContactForm interestType={interestType} />
            </DialogContent>
        </Dialog>
  )
} 