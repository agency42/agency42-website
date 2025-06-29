'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import posthog from 'posthog-js'
import { ChevronDown } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

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

  const handleSelectChange = (name: keyof FormState, value: string) => {
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
      <div className={`p-8 bg-white border-2 border-black rounded-lg shadow-lg ${className}`} style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}>
        <div className="text-center text-black">
          <h3 className="text-2xl font-heading font-medium mb-4">Thank You For Your Interest</h3>
          <p className="mb-6 font-sans">
            We've received your submission and will review it shortly. If your needs align with our expertise, we'll reach out to schedule a discovery call.
          </p>
          <p className="font-mono text-[11px] tracking-wider text-gray-600 uppercase">
            Check your email for a confirmation message.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`p-8 bg-white border-2 border-black rounded-lg shadow-lg ${className}`}
      style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}
    >
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div>
          <Label htmlFor="companyName" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">COMPANY NAME</Label>
          <Input
            id="companyName"
            name="companyName"
            value={formState.companyName}
            onChange={handleChange}
            required
            className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black transition"
          />
        </div>
        
        <div>
          <Label htmlFor="name" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">YOUR NAME</Label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black transition"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">EMAIL ADDRESS</Label>
          <Input
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black transition"
          />
        </div>
        
        <div>
          <Label htmlFor="companySize" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">COMPANY SIZE</Label>
          <Select
            value={formState.companySize}
            onValueChange={(value: string) => handleSelectChange('companySize', value)}
          >
            <SelectTrigger id="companySize" className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-white border-2 border-black rounded-none shadow-lg">
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-500">201-500 employees</SelectItem>
              <SelectItem value="501+">501+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="budget" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">BUDGET RANGE</Label>
          <Select
            value={formState.budget}
            onValueChange={(value: string) => handleSelectChange('budget', value)}
          >
            <SelectTrigger id="budget" className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-white border-2 border-black rounded-none shadow-lg">
              <SelectItem value="$4k-$10k">$4k-$10k</SelectItem>
              <SelectItem value="$10k-$25k">$10k-$25k</SelectItem>
              <SelectItem value="$25k-$50k">$25k-$50k</SelectItem>
              <SelectItem value="$50k+">$50k+</SelectItem>
              <SelectItem value="Not sure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="projectDescription" className="font-mono text-[11px] tracking-wider uppercase text-black mb-2 block">PROJECT DESCRIPTION</Label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            required
            value={formState.projectDescription}
            onChange={handleChange}
            placeholder="What AI vision do you want to bring to life? Describe your goals, challenges, or the specific outcomes you're looking to achieve."
            className="w-full p-3 font-sans bg-white text-black border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black transition h-32 resize-none"
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
        className="w-full bg-black text-white font-mono text-[11px] tracking-wider uppercase py-4 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 border-2 border-black"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
      </button>
      
      <p className="mt-4 text-xs text-gray-600 text-center font-sans">
        By submitting this form, you agree to our <Link href="/legal/privacy" className="underline hover:text-black text-gray-600">Privacy Policy</Link>.
      </p>
    </form>
  )
} 