# Development Approach

This project was developed through close collaboration between an engineer and Claude Code, demonstrating best practices in component-driven development:

### Engineer's Role & Responsibilities

1. **Visual Design Verification** — Independently verified that UI spacing, typography, and colors matched the Figma design specifications
2. **Autonomous Refactoring** — Made independent decisions on component extraction and code organization without waiting for AI suggestions
3. **Problem Identification** — Identified design inconsistencies (misaligned close buttons, oversized modals) and corrected them proactively
4. **Responsive Refinement** — Designed and implemented responsive padding strategy (16px/40px/80px) for different viewports
5. **Component Simplification** — Simplified over-engineered component patterns and removed unnecessary complexity
6. **Styling Iteration** — Refined typography, colors, and spacing to match design specifications exactly

### AI Collaboration Pattern

Claude Code assisted with:

- Initial component structure and boilerplate
- TypeScript interface definitions and type safety
- Responsive design implementation guidance
- Git commit composition and structure
- Technical implementations while engineer maintained creative control

### Timeline & Productivity

**Total Active Development Time:** ~2-3 hours of focused engineering work

The development process was highly efficient because:

- Clear requirements from existing Figma design
- Engineer made autonomous decisions on refactoring and improvements
- Iterative visual feedback loop with immediate CSS adjustments
- Minimal back-and-forth; engineer directly corrected approach when needed
- Strong design review discipline throughout development

**Key Moments:**

- 0-30min: Initial component setup and basic structure
- 30-90min: Component extraction (FilterHeader, FilterFooter, FilterGroup)
- 90-120min: Responsive padding implementation and edge cases
- 120-150min: Visual refinement and design verification
- 150-180min: Final polish, commits, and documentation

### Engineering Practices Applied

1. **Component Reusability** — Extracted Button, CloseButton, and Title into reusable UI components
2. **DRY Principle** — Eliminated repeated button styling by creating variant-based components
3. **Responsive-First** — Built responsive design using Tailwind's mobile-first breakpoints
4. **Git Discipline** — Used conventional commits with meaningful messages documenting changes
5. **Type Safety** — Maintained strict TypeScript typing throughout
6. **Accessibility** — Proper ARIA labels, semantic HTML, and keyboard navigation support

## Design System

### Colors

- **Primary:** `#FF5F00` (Orange - calls to action)
- **Primary Hover:** `#E54D00` (Darker orange)
- **Neutral:** Gray palette (`#F3F4F6` to `#374151`)

### Spacing Scale

- **Mobile:** 16px (p-4)
- **Tablet:** 40px (p-10)
- **Desktop:** 80px (p-20)

### Typography

- **Headings:** Inter, 40px, semibold
- **Body:** Inter, 16px, regular
- **Small:** Inter, 14px, regular

## Component API

### Button

```tsx
<Button variant="primary" | "secondary" | "link" onClick={...}>
  Action Label
</Button>
```

### CloseButton

```tsx
<CloseButton
	onClick={closeHandler}
	ariaLabel="Close dialog"
/>
```

### Title

```tsx
<Title>{heading}</Title>
```

## State Management

Filter state is managed through Zustand store with the following structure:

```typescript
{
  // Selected filters by user
  filters: SearchRequestFilter

  // Previously saved filters (for cancel action)
  previousFilters: SearchRequestFilter

  // Modal visibility states
  isModalOpen: boolean
  isConfirmationOpen: boolean

  // Actions
  applyFilters: () => void
  discardChanges: () => void
  updateFilter: (category, value) => void
  clearAllFilters: () => void
}
```
