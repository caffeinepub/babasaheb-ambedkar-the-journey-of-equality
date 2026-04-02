# Babasaheb Ambedkar - The Journey of Equality

## Current State
Full website with sections: Hero, About, EarlyLife, Education, Contributions, WhyBuddhism, ConversionToBuddhism, Quotes, Timeline, Gallery, Legacy, Footer. All content is in English. The hero has a static portrait image. Animations exist (spin-slow, float, orb-drift) but the image itself doesn't animate.

## Requested Changes (Diff)

### Add
- Hindi translations for ALL text content across every component (Navbar, Hero, About, EarlyLife, Education, Contributions, WhyBuddhism, ConversionToBuddhism, Quotes, Timeline, Gallery, Legacy, Footer)
- Motion animations on Dr. BR Ambedkar's portrait image in the Hero section: floating/levitating effect, subtle parallax, entrance animation (fade+slide up), a glowing pulsing border/aura, and a shimmer effect
- Entrance animations on section headings (slide in from left/right)
- Staggered card animations when sections come into view
- Particle-like floating elements in hero background
- Animated counter numbers in the stats row (count up effect)

### Modify
- All text strings in every component to Hindi (Devanagari script)
- Hero portrait: add animate-float class and entrance animation (fadeInUp), glowing aura around the image
- Navbar links: Hindi labels
- Quotes: translate all 8 quotes to Hindi
- Timeline events: translate to Hindi
- Footer: keep "© 2026. Developed with ❤️ by SAGAR INDRAKIYA" but translate other text to Hindi
- Stats in hero: change labels to Hindi
- Section subtitle labels ("Resilience & Determination", etc.) → Hindi

### Remove
- Nothing removed

## Implementation Plan
1. Translate all content in Navbar.tsx → Hindi nav labels
2. Translate Hero.tsx → Hindi headings, subtitle, button text, stats labels; add floating animation to portrait image with glowing aura and entrance animation
3. Translate About.tsx → Hindi headings and body text
4. Translate EarlyLife.tsx → Hindi
5. Translate Education.tsx → Hindi
6. Translate Contributions.tsx → Hindi
7. Translate WhyBuddhism.tsx and ConversionToBuddhism.tsx → Hindi
8. Translate Quotes.tsx → Hindi (all 8 quotes translated to Hindi)
9. Translate Timeline.tsx → Hindi
10. Translate Gallery.tsx → Hindi
11. Translate Legacy.tsx → Hindi
12. Translate Footer.tsx → Hindi (except developer credit)
13. Add new keyframe animations to index.css: imageFloat (more dramatic float for portrait), glowPulse (aura effect), countUp support
14. Apply animated entrance classes throughout components
