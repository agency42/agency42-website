# Copy Implementation v2: Technical Implementation Guide

## Overview

This document provides specific technical implementation details for the copy strategy v2 redesign. Based on psychology-driven conversion optimization and real client data analysis.

**Related Strategy**: See Obsidian vault `/agency42/strategy/website-copy-strategy-v2.md` for strategic context and reasoning.

## Implementation Priority

### Phase 1: High Impact Changes (Week 1)
1. Hero sections (homepage + services)
2. CTA button updates across all pages
3. Contact form messaging

### Phase 2: Content Updates (Week 2)
1. Social proof section redesign
2. Services accordion copy updates
3. About page team positioning

### Phase 3: New Sections (Week 3)
1. Risk reversal guarantee section
2. Qualification messaging
3. Process methodology updates

## File-by-File Changes

### 1. Homepage Hero Section
**File**: `/app/components/HeroSection.tsx`

#### Current TypewriterAnimation texts:
```typescript
texts={[
  "From AI Ambition to Action.",
  "We don't just build AI systems. We build your team's capability to command them.",
]}
```

#### New TypewriterAnimation texts:
```typescript
texts={[
  "We've saved clients 1000s of hours of manual work they didn't know they were doing",
  "In 6 weeks, Agency42 discovered $53,000 in hidden operational value for Cogent World. Our systematic approach finds the AI opportunities your team can't see - then builds the systems to capture them.",
]}
```

#### CTA Button Update:
```typescript
// Current
<Link href="/services" className="...">
  Begin Your Journey
</Link>

// New
<Link href="/services#contact" className="...">
  Analyze My Needs
</Link>
```

### 2. Homepage Social Proof Section
**File**: `/app/components/HomePageClient.tsx`

#### Replace "Proof of Capability" section (lines 144-176):

```typescript
{/* Real Results Section */}
<section className="py-12 md:py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
        Real Results from Real Companies
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
        Clients who discovered their hidden operational value
      </p>
    </div>
    <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
      <div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-indigo-600">
        <div className="flex items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Cogent World</h3>
          <span className="ml-2 text-sm text-gray-500">Marketing Agency ($6M Revenue)</span>
        </div>
        <p className="text-2xl font-bold text-indigo-600 mb-2">1000s of hours eliminated annually</p>
        <p className="text-base text-gray-600 mb-4">
          Problem: Pass-through financial reconciliation consuming 467-844 hours annually
        </p>
        <p className="text-base text-gray-600">
          <strong>Result:</strong> $38k-$53k annual operational value identified in 6 weeks
        </p>
      </div>
      
      <div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-green-600">
        <div className="flex items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Herman-Scheer</h3>
          <span className="ml-2 text-sm text-gray-500">Brand Design Studio ($15M Revenue)</span>
        </div>
        <p className="text-2xl font-bold text-green-600 mb-2">$90k revenue opportunity discovered</p>
        <p className="text-base text-gray-600 mb-4">
          Problem: AI tool integration across creative processes
        </p>
        <p className="text-base text-gray-600">
          <strong>Result:</strong> Fractional AI leadership + automated lead generation system
        </p>
      </div>
      
      <div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-purple-600">
        <div className="flex items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Dog & Pony Studios</h3>
          <span className="ml-2 text-sm text-gray-500">Creative Agency (25 years)</span>
        </div>
        <p className="text-2xl font-bold text-purple-600 mb-2">73% adoption rate vs 30% industry average</p>
        <p className="text-base text-gray-600 mb-4">
          Problem: Uneven AI adoption across senior developers
        </p>
        <p className="text-base text-gray-600">
          <strong>Result:</strong> 8/8 developers actively using AI daily
        </p>
      </div>
    </div>
  </div>
</section>
```

### 3. Services Page Hero
**File**: `/app/services/page.tsx`

#### Update hero section (lines 42-47):
```typescript
// Current
<h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium mb-6">
  Operate at the speed of AI
</h1>
<p className="text-base md:text-lg mb-8 font-sans text-gray-600 max-w-xl">
  We take a systematic approach to designing intelligent systems, automating workflows, and exploring frontier AI use cases—bridging strategy and execution at every step.
</p>

// New
<h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium mb-6">
  Your biggest AI opportunity is probably something you do every day but never thought to automate
</h1>
<p className="text-base md:text-lg mb-8 font-sans text-gray-600 max-w-xl">
  Most $6M-$15M companies have 900+ hours of manual work hiding in plain sight. We specialize in finding these 'unknown unknowns' and building the AI systems to eliminate them - with 73% adoption rates that actually stick.
</p>

{/* Add qualification box */}
<div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 max-w-xl">
  <div className="space-y-2">
    <div className="flex items-start">
      <span className="text-green-500 mr-2">✅</span>
      <span className="text-sm text-gray-700"><strong>This is for you if:</strong> $6M-$15M revenue, scaling but manual work is bottlenecking growth</span>
    </div>
    <div className="flex items-start">
      <span className="text-red-500 mr-2">❌</span>
      <span className="text-sm text-gray-700"><strong>This is NOT for you if:</strong> Under $5M revenue, already have dedicated AI team</span>
    </div>
  </div>
</div>
```

### 4. Services Accordion Updates
**File**: `/app/components/ServicesAccordion.tsx`

#### AI Opportunity Audit Section (lines 28-66):

Update the content section:
```typescript
<AccordionContent className="p-8 pt-6 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
    <div>
      <h4 className="font-mono text-[11px] tracking-wider mb-4 uppercase text-black">The 'Hidden Hours' Discovery Process</h4>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <p className="font-mono text-[11px] tracking-wider uppercase text-indigo-600 mb-2">Real Example: Cogent World</p>
        <p className="text-sm text-gray-700 mb-2">Thought they needed "general AI help"</p>
        <p className="text-sm text-gray-700 mb-2">→ We found 467 hours in financial reconciliation alone</p>
        <p className="text-sm text-gray-700 mb-2">→ $53k annual value identified in 6 weeks</p>
        <p className="text-sm text-gray-700">→ Complete automation roadmap delivered</p>
      </div>
      
      <h4 className="font-mono text-[11px] tracking-wider mt-6 md:mt-8 mb-4 uppercase text-black">Your audit includes</h4>
      <ul className="space-y-3 mb-6 font-sans text-gray-700">
        <li className="flex items-start">
          <span className="text-black mr-2">✓</span>
          <span>Systematic workflow analysis (find your 900+ hidden hours)</span>
        </li>
        <li className="flex items-start">
          <span className="text-black mr-2">✓</span>
          <span>Team readiness assessment (achieve our 73% adoption rate)</span>
        </li>
        <li className="flex items-start">
          <span className="text-black mr-2">✓</span>
          <span>ROI-driven implementation roadmap (clear break-even timeline)</span>
        </li>
      </ul>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="font-mono text-[11px] tracking-wider uppercase text-green-600 mb-2">Our Guarantee</p>
        <p className="text-sm text-gray-700">If we don't find at least $25k in annual operational value, we refund 50% of your investment.</p>
      </div>
      
      <p className="text-sm text-gray-600 mb-6">
        <strong>Investment:</strong> $30k-$100k | <strong>Timeline:</strong> 6 weeks | <strong>ROI:</strong> $38k-$53k annually
      </p>
      
      <Link
        href="#contact"
        className="inline-block border border-black text-black font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-black hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      >
        SEE IF YOU QUALIFY →
      </Link>
    </div>
    <div className="w-full aspect-video border border-black overflow-hidden">
      <Image 
        src="/content/observe.png" 
        alt="AI Opportunity Audit" 
        width={800} 
        height={450} 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</AccordionContent>
```

#### Update CTA buttons for each service:

```typescript
// Hands-on Workshops (line ~110)
INQUIRE ABOUT WORKSHOPS → → ANALYZE MY NEEDS →

// Fractional AI Leadership (line ~167)
DISCUSS A RETAINER → → CHECK YOUR FIT →

// Research & Development (line ~220)
EXPLORE R&D POSSIBILITIES → → ANALYZE MY NEEDS →
```

### 5. Contact Section Updates
**File**: `/app/services/page.tsx` (lines 131-142)

```typescript
// Current
<h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-4 md:mb-6">
  Ready to Start Your AI Journey?
</h2>
<p className="text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto font-sans text-gray-600">
  Fill out the form below, and we'll schedule a discovery call to discuss your needs and how we can help.
</p>

// New
<h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-4 md:mb-6">
  Ready to discover your hidden operational value?
</h2>
<p className="text-base md:text-lg mb-4 max-w-2xl mx-auto font-sans text-gray-600">
  Complete the form below so we can analyze your specific situation and identify potential AI opportunities. If we see a strong fit, we'll schedule a strategy call to discuss your specific needs.
</p>

{/* Add process explanation */}
<div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto text-left">
  <h4 className="font-mono text-[11px] tracking-wider uppercase text-black mb-4">What happens next</h4>
  <ol className="space-y-2 text-sm text-gray-700">
    <li className="flex items-start">
      <span className="font-medium mr-2">1.</span>
      <span>You complete our qualification form (2 minutes)</span>
    </li>
    <li className="flex items-start">
      <span className="font-medium mr-2">2.</span>
      <span>We review your business profile within 24 hours</span>
    </li>
    <li className="flex items-start">
      <span className="font-medium mr-2">3.</span>
      <span>If there's a strong fit, we'll reach out to schedule a strategy call</span>
    </li>
    <li className="flex items-start">
      <span className="font-medium mr-2">4.</span>
      <span>No fit? We'll send you relevant resources instead</span>
    </li>
  </ol>
</div>
```

### 6. QualForm Submit Button
**File**: `/app/components/QualForm.tsx`

Update the submit button text to:
```typescript
// Find the submit button and change text to:
"ANALYZE MY NEEDS"
```

### 7. Homepage CTA Updates
**File**: `/app/components/HomePageClient.tsx`

Update journey section CTAs (lines 197, 209, 221):
```typescript
// All three cards should use:
<a href="/services#contact" className="...">
  Analyze My Needs &rarr;
</a>
```

Update final CTA section (line 258):
```typescript
// Current
<Link href="/services#contact" className="...">
  Get In Touch
</Link>

// New  
<Link href="/services#contact" className="...">
  Analyze My Needs
</Link>
```

## New Sections to Add

### Risk Reversal Section (Add to Services Page)
Add this section before the contact form:

```typescript
{/* Risk Reversal Section */}
<section className="py-16 md:py-24 px-4 border-b border-black bg-gray-50">
  <div className="container mx-auto max-w-4xl text-center">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-6">
      What if we don't find hidden value?
    </h2>
    
    <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
      <p className="text-lg font-medium text-gray-900 mb-4">
        Our Guarantee: If our assessment doesn't reveal at least $25k in annual operational value, we'll refund 50% of your investment.
      </p>
      <p className="text-base text-gray-600 mb-6">
        In 24 months, we've never had a client where we couldn't identify significant operational inefficiencies worth $25k+ annually. The manual work is always there - most companies just can't see it.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
        <div className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span className="text-sm text-gray-700">Systematic methodology (not guesswork)</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span className="text-sm text-gray-700">Proven across industries</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span className="text-sm text-gray-700">73% adoption success rate</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span className="text-sm text-gray-700">Real client results</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Technical Requirements

### Dependencies
- No new dependencies required
- Uses existing Tailwind classes and component structure
- Maintains current form functionality and webhook integration

### Testing Checklist
- [ ] Hero sections display correctly on mobile/desktop
- [ ] All CTA buttons link to correct anchors
- [ ] Form submission still works with webhook
- [ ] New sections are responsive
- [ ] TypewriterAnimation works with longer text
- [ ] Client logo carousel still functions
- [ ] Navigation menu still works

### Performance Considerations
- Longer hero text may affect TypewriterAnimation timing
- Additional content sections increase page length
- Monitor Core Web Vitals after implementation

## Rollback Strategy

### Quick Rollback
If issues arise, revert these key files:
1. `/app/components/HeroSection.tsx` (hero text)
2. `/app/components/HomePageClient.tsx` (social proof section) 
3. `/app/services/page.tsx` (services hero)
4. `/app/components/ServicesAccordion.tsx` (CTA buttons)

### Gradual Implementation
Can implement in phases:
1. Phase 1: Just CTA updates (low risk)
2. Phase 2: Hero sections (medium risk)
3. Phase 3: New content sections (higher risk)

## Success Metrics to Track

### Conversion Metrics
- Form completion rate
- CTA click-through rates by service
- Consultation booking rate
- Time spent on key pages

### User Behavior
- Scroll depth on new sections
- Heat map analysis of new content
- Exit rates from hero sections

### Business Impact
- Lead quality improvement
- Consultation-to-proposal conversion
- Client feedback on website clarity

---

**Next Steps**: 
1. Review this implementation plan
2. Begin with Phase 1 (CTA updates)
3. Test each change before proceeding
4. Monitor metrics throughout implementation

**Related Strategy**: See `/agency42/strategy/website-copy-strategy-v2.md` in Obsidian vault for complete strategic context.