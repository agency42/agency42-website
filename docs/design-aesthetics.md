# Design Aesthetics Guidelines

## Typography Hierarchy

### Font Stack (3 fonts max)
1. **Inter** - Primary font for all text (body, headings, most UI)
2. **IBM Plex Mono** - Buttons, small accent areas, specific UI elements
3. **DotGothic16** - Special effects only (like "thinking" animation on homepage)

### Font Weight Rules
- **Headers need more pop** - ✅ SOLVED: Use `font-extrabold` (weight: 800) for main headers
- **Available Inter weights**: Thin (100) → Black (900)
- **Header pattern**: `font-heading font-extrabold` for maximum visual impact
- **Body text**: Regular (400) or Medium (500) weights

### Usage Guidelines

#### Inter (Primary)
- All body text (`font-sans`)
- All headings (`font-heading font-extrabold` for impact)
- Navigation
- Most UI text
- **Solution**: Use ExtraBold (800) weight for headers that need strong presence

#### IBM Plex Mono (Accent)
- Button text (`font-mono`)
- Small UI labels (like "What You Get:" cards)
- Technical specifications
- Code-like elements
- Arrow indicators in interactive elements
- Limited, purposeful usage

#### DotGothic16 (Effects Only)
- Special animations (homepage "thinking")
- Pixel-art style effects
- Very limited usage for specific design moments

## Successful Patterns

### Accordion Headers (Services Page)
```jsx
<h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-extrabold text-black">
  Service Title
</h3>
```

### Interactive Elements
- Arrow indicators: `font-mono` for consistency
- Rotation animations: `group-data-[state=open]:rotate-90 transition-transform`
- Hover states: Maintain consistent bg-gray-50 pattern

## Design Principles
- Clean, modern aesthetic following Rob's direction
- Strong visual hierarchy through weight, not font changes
- Purposeful use of accent fonts
- Maintain readability while adding impact
- Consistent interaction patterns

## Font Loading
- All fonts loaded locally from `app/fonts/` directory
- CSS variables: `--font-inter`, `--font-ibm-plex-mono`, `--font-pixel`
- Tailwind config maps to proper CSS variables

## Resolved Issues
1. ✅ Headers now have strong visual impact with ExtraBold weight
2. ✅ Maintained Rob's aesthetic direction
3. ✅ Consistent font application across components
4. ✅ Clear hierarchy without breaking design system

## Current Issues to Solve
1. Headers lack visual impact - need bolder Inter weights
2. Maintain Rob's aesthetic direction but with stronger hierarchy
3. Consistent font application across all components

## Next Steps
- Investigate Inter font weights (Bold, ExtraBold, Black)
- Test header improvements with proper Inter weights
- Document successful patterns for reuse 