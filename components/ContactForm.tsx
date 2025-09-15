"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface ContactFormProps {
  interestType: "individual" | "team" | "university" | null;
}

export default function ContactForm({ interestType }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    interestType: interestType || "individual",
  });

  const [status, setStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interestType: value as "individual" | "team" | "university",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: "",
    });

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          subject: "Vibe Code Inquiry",
          message: formData.message,
          form_type: "vibe_code_inquiry",
          company: formData.company,
        }),
      });

      const data = await response.json();

      if (!(response.ok && data?.success)) {
        throw new Error(data.error || "Something went wrong");
      }

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        interestType: interestType || "individual",
      });

      setStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: "Thank you! Your message has been sent.",
      });
    } catch (error) {
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message:
          error instanceof Error ? error.message : "Failed to send message",
      });
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {status.isSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {status.message}
        </div>
      )}

      {status.isError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="interestType">I'm interested in...</Label>
          <Select
            onValueChange={handleSelectChange}
            defaultValue={formData.interestType}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Founder/Executive</SelectItem>
              <SelectItem value="team">Team/Company</SelectItem>
              <SelectItem value="university">University/Lab</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={status.isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={status.isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="company">Company or University</Label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={status.isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="message">Tell us about the learner(s) *</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Who will be learning AI? Share current skill level, goals, and any timelines you're working toward."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={status.isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={status.isSubmitting}
          className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors disabled:opacity-50"
        >
          {status.isSubmitting ? "Sending..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
