'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import posthog from 'posthog-js'

interface FormState {
  companyName: string
  name: string
  email: string
  companySize: string
  budget: string
  projectDescription: string
}

interface QualFormProps {
  className?: string
}

export default function QualForm({ className = '' }: QualFormProps) {
  const [formState, setFormState] = useState<FormState>({
    companyName: '',
    name: '',
    email: '',
    companySize: '',
    budget: '',
    projectDescription: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'Something went wrong')
      }

      posthog.capture('qual_form_submitted', {
        company_name: formState.companyName,
        company_size: formState.companySize,
        budget: formState.budget,
      })

      setSubmitSuccess(true)
      setFormState({
        companyName: '',
        name: '',
        email: '',
        companySize: '',
        budget: '',
        projectDescription: ''
      })
    } catch (error: any) {
      setSubmitError(error.message || 'Failed to submit form. Please try again.')
      posthog.capture('qual_form_failed', { 
        error: error.message,
        ...formState 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className={`p-8 bg-neutral-50 border border-neutral-200 rounded-md ${className}`}>
        <div className="text-center text-foreground">
          <h3 className="text-2xl font-heading font-medium mb-4">Thank You For Your Interest</h3>
          <p className="mb-6 font-sans">
            We've received your submission and will review it shortly. If your needs align with our expertise, we'll reach out to schedule a discovery call.
          </p>
          <p className="font-mono text-[11px] tracking-wider text-secondary">
            Check your email for a confirmation message.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`p-8 bg-neutral-50 border border-neutral-200 rounded-md ${className}`}
    >
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div>
          <label htmlFor="companyName" className="block font-mono text-[11px] tracking-wider mb-2 text-foreground">COMPANY NAME</label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            value={formState.companyName}
            onChange={handleChange}
            className="w-full p-3 font-sans border border-neutral-300 bg-background focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="name" className="block font-mono text-[11px] tracking-wider mb-2 text-foreground">YOUR NAME</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formState.name}
            onChange={handleChange}
            className="w-full p-3 font-sans border border-neutral-300 bg-background focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block font-mono text-[11px] tracking-wider mb-2 text-foreground">EMAIL ADDRESS</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full p-3 font-sans border border-neutral-300 bg-background focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="companySize" className="block font-mono text-[11px] tracking-wider mb-2 text-foreground">COMPANY SIZE</label>
          <select
            id="companySize"
            name="companySize"
            required
            value={formState.companySize}
            onChange={handleChange}
            className="w-full p-3 font-sans border border-neutral-300 bg-background focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors appearance-none"
          >
            <option value="">Select an option</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="501+">501+ employees</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="budget" className="block font-mono text-[11px] tracking-wider mb-2 text-foreground">BUDGET RANGE</label>
          <select
            id="budget"
            name="budget"
            required
            value={formState.budget}
            onChange={handleChange}
            className="w-full p-3 font-sans border border-neutral-300 bg-background focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors appearance-none"
          >
            <option value="">Select an option</option>
            <option value="$4k-$10k">$4k-$10k</option>
            <option value="$10k-$25k">$10k-$25k</option>
            <option value="$25k-$50k">$25k-$50k</option>
            <option value="$50k+">$50k+</option>
            <option value="Not sure">Not sure yet</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="projectDescription" className="block font-mono text-[11px] tracking-wider mb-2 text-foreground">PROJECT DESCRIPTION</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            required
            value={formState.projectDescription}
            onChange={handleChange}
            placeholder="Please describe your AI challenges or opportunities. What are you hoping to achieve?"
            className="w-full p-3 font-sans border border-neutral-300 bg-background focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors h-32"
          />
        </div>
      </div>

      {submitError && (
        <div className="text-red-500 mb-4 text-sm font-sans">
          {submitError}
        </div>
      )}
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-background font-mono text-[11px] tracking-wider py-4 hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
      </button>
      
      <p className="mt-4 text-xs text-secondary text-center font-sans">
        By submitting this form, you agree to our <Link href="/legal/privacy" className="underline hover:text-accent">Privacy Policy</Link>.
      </p>
    </form>
  )
} 