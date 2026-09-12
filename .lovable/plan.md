# KINETIC Atelier — Production Agency Website

## Goal
Build the uploaded KINETIC Atelier direction into a polished, responsive agency website with real routes, working interactions, and a production-quality contact flow. Preserve its editorial high-modern visual language: warm porcelain surfaces, mineral charcoal, electric cobalt accents, expressive Syne headlines, precise Hanken Grotesk body copy, and restrained mono labels.

## Pages and navigation
- Create a shared sticky header, animated mobile menu, custom desktop cursor, footer, and route transitions.
- Build distinct pages for Home, Work, Services, About, Case Studies, Insights, and Contact.
- Add four individual case-study routes and three complete article routes; every visible navigation item and CTA will lead somewhere meaningful.
- Add unique SEO titles, descriptions, social metadata, semantic page structure, and useful not-found/error states for every route.

## Home experience
- Build the editorial hero with the requested headline, staged text/media reveal, restrained pointer response, and project/work CTAs.
- Add the pause-on-hover trusted-brand marquee.
- Add an expandable editorial services directory for pointer and touch users.
- Add an asymmetric Selected Work presentation with project imagery, result callouts, reveal motion, and case-study links.
- Add viewport-triggered count-up results, agency story, parallax imagery, interactive five-step process, swipeable/autoplay testimonial carousel, case-study previews, article previews, and final conversion CTA.

## Content pages
- Work: filterable editorial project archive with six realistic projects.
- Services: detailed capability overview with outcomes and service-specific CTA paths.
- About: agency story, values, approach, team-style imagery, and process.
- Case Studies: overview plus four detail pages covering Challenge, Strategy, Execution, and measurable Results.
- Insights: editorial index plus three full article pages with metadata and readable long-form layouts.
- Contact: accessible project inquiry form with all requested fields, client/server validation, loading, success, and error states.
- Add concise Privacy and Terms pages so footer links are not placeholders.

## Imagery and visual system
- Generate a cohesive set of premium campaign, product, interface, and studio images for the hero, work, case studies, articles, and about story.
- Store palette, typography, spacing, motion, borders, focus, and elevation as semantic design tokens; avoid ad-hoc page styling.
- Use stable responsive aspect ratios, lazy loading below the fold, and appropriately sized assets.

## Interactions and accessibility
- Add scroll reveals, text reveals, image parallax, marquee, magnetic CTA treatment, animated arrows, hover disclosures, active process progress, count-up metrics, and touch gestures.
- Disable or simplify pointer/parallax effects on touch devices and honor reduced-motion preferences globally.
- Ensure keyboard navigation, visible focus, labeled controls, correct heading order, meaningful image descriptions, touch-sized controls, and no horizontal overflow.

## Contact delivery
- Enable Lovable Cloud and store validated contact submissions securely so the form performs a real action now and can later trigger email or CRM automation.
- Add defensive field limits, clear inline errors, submission feedback, and duplicate-click prevention.

## Quality audit
- Verify all routes and interactions in desktop, tablet, and mobile layouts.
- Check visual rhythm, typography, menu behavior, carousel controls, accordions, form states, loading/error states, internal links, console output, and current build diagnostics.
- Correct accessibility, overflow, image loading, and interaction issues before completion.

## Technical notes
- Use TanStack Start file-based routes and shared React components.
- Use the existing shadcn primitives for buttons, inputs, select fields, dialogs/drawers, and accessible interaction patterns.
- Keep animation lightweight with CSS and browser observers; use Embla for the testimonial carousel.
- Use validated server functions for contact submission and keep the integration boundary ready for email/CRM services.
