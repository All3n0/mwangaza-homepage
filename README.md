# Mwangaza Homepage

Build a single, production-quality homepage for "Mwangaza Institute", a Nairobi-based professional training institute that sells short instructor-led courses (5–10 days) to professionals at NGOs, government agencies, banks and development organisations across Africa. Courses run as classroom sessions in cities (Nairobi, Mombasa, Kigali, Kampala, Dar es Salaam, Addis Ababa, Accra, Dubai), live online, or in-house for teams.

The audience is HR / L&D officers and mid-career professionals who are comparing providers, often on a phone, often on a slow connection, and often booking on behalf of a team with a donor budget. They care about: dates, city, price, format, certificate, and whether the institute looks credible. The page must answer "what's running, where, when, how much" within one scroll.

Stack: React + Tailwind + shadcn/ui. Use framer-motion only for subtle reveals. Mobile-first. No backend needed; use realistic mock data in a separate data file.

==================================================

DESIGN DIRECTION — THIS MUST NOT LOOK AI-GENERATED

==================================================

The look is "editorial institution meets warm East African modernism": think a well-designed university press or a museum website, not a SaaS landing page. Confident typography, generous whitespace, real photography, and organic shapes used deliberately.

Hard bans (do not use any of these):

- Purple/blue/indigo gradients, gradient text, glassmorphism, glowing blurs, neon accents

- Centered hero with a headline, subtitle and two buttons stacked in the middle

- Rows of three identical feature cards with an icon on top

- Emoji as icons, generic Lucide icons as decoration, "sparkle" icons

- Phrases like "Unlock your potential", "Elevate", "Empower your journey", "Transform your career", "Seamless", "Cutting-edge", "world-class"

- Fake round-number stats ("5M+ students"), stock handshake photos, cartoon illustrations of people with laptops

- Everything rounded-2xl with the same shadow; uniform card grids everywhere

Colour palette (use as CSS variables, no other colours):

- Ink: #14201C (primary text, dark sections)

- Forest: #1F4D3F (primary brand colour, buttons, links)

- Clay: #C8553D (accent — used sparingly: key CTA, date badges, highlights)

- Ochre: #E2A13B (secondary accent for small details, tags, underlines)

- Sand: #F1E8D8 (alternating section background)

- Paper: #FBF8F2 (main background — never pure white)

- Stone: #6B6F68 (muted text), Line: #E3DCCD (borders)

Ensure all text meets WCAG AA contrast.

Typography:

- Display: "Fraunces" (Google Fonts), weights 400–600, slight optical softness, used large (clamp 2.75rem → 5rem on hero). Allow italic for one or two emphasised words per heading.

- UI/body: "Manrope", 400/500/700, 16–18px body, line-height 1.6.

- Numbers (dates, prices, stats) use tabular figures.

- Headings left-aligned, not centred. Mix sizes boldly — some section headings very large, supporting text small and quiet.

Shapes and graphic language (this is what gives it character):

- Photos cropped into arch shapes (rounded top, flat bottom), tall pill shapes, and one or two organic blob masks — never plain rectangles everywhere.

- A thin-line geometric pattern (concentric arcs or a simple grid of dots) used as a subtle background texture in 2–3 places at low opacity.

- Large soft circles and half-circles in Sand/Ochre sitting behind images, slightly offset, overlapping section boundaries so the page doesn't feel like stacked boxes.

- One hand-drawn-style underline (SVG squiggle in Ochre) under a single word in the hero.

- Occasional overlap: cards that break out of their section, a photo that bleeds into the next section, a floating "ticket" card over an image.

- Vary card styles: some bordered, some filled Sand, some image-led. Corners: mix of 6px and fully rounded pills; avoid one radius everywhere.

Photography:

- Use real photos from Unsplash (images.unsplash.com URLs). Search terms: "African professionals workshop", "Nairobi skyline", "Kigali city", "conference room training Africa", "woman presenting whiteboard", "team meeting Kenya", "Accra street", "Kampala". Choose natural, candid, well-lit images of real people in real rooms. No staged handshakes.

- Every image needs meaningful alt text.

- Lazy-load everything below the fold; use responsive sizes.

==================================================

PAGE STRUCTURE (in this order)

==================================================

1. Utility bar (thin, Ink background, Paper text, small)

   Left: "Next intake: 13 Oct · Nairobi & Online". Right: phone (+254 700 000 000, tel: link), WhatsApp link, email. Collapses to just the intake line + WhatsApp icon on mobile.

2. Header (sticky, Paper background with bottom border on scroll)

   Logo: wordmark "Mwangaza" in Fraunces with a small half-sun mark (simple SVG, Clay). Nav: Courses, Calendar, Cities, In-house training, About. Right: search icon button, "Talk to an advisor" (outline) and "Browse courses" (Forest filled).

   "Courses" opens a mega-menu with ONLY 8 fields of study in two columns plus a "Most booked" list on the right and a small photo card — not 60 links.

   Mobile: hamburger opens a full-screen sheet with a search field at top, the 8 fields as large tappable rows, then contact links. All menu items must be real links, not "#".

3. Hero (asymmetric, two columns on desktop, stacked on mobile)

   Left column:

   - Small eyebrow tag: "Short courses for working professionals"

   - H1 (Fraunces, huge): "Practical training, taught by people who've *done the work*." — "done the work" in italic with the Ochre squiggle underline.

   - Supporting line (Manrope, Stone, max 52ch): "5–10 day courses in eight African cities and live online. Built for NGOs, public institutions and finance teams."

   - A real search bar, not buttons: one wide input "What do you want to learn?" plus three compact selects (City, Format, Month) and a Forest "Search" button. On mobile it becomes one input + a "Filters" button that opens a bottom sheet.

   - Below the search: popular searches as small pill links: "Monitoring & Evaluation", "Power BI", "Procurement", "Data Protection", "Leadership".

   Right column:

   - A collage of 3 photos: one tall arch-cropped photo (workshop), one smaller circle photo (participant), one pill-shaped photo (Nairobi skyline), overlapping, with a large Sand circle behind them.

   - A floating "ticket" card overlapping the arch photo: "Starts Mon 13 Oct · Nairobi · M&E for Development Programmes · 10 days · USD 2,450" with a small Clay date block on the left, styled like a perforated event ticket (dashed divider, notched edges).

4. Trust strip

   "Trusted by teams at" followed by 10 greyscale partner logos (use placeholder SVG wordmarks with invented organisation names, e.g. "Rift Valley Water Board", "Lake Region Health Trust" — do NOT use real UN/NGO logos). Gentle auto-scrolling marquee on desktop, static wrapped grid on mobile; duplicated marquee items aria-hidden. Pause on hover and respect prefers-reduced-motion.

5. "Starting soon" — date-first course list (Paper background)

   Heading left: "Starting in the next 30 days". Right: link "Full 2026–27 calendar →".

   Filter chips above the list: All · Nairobi · Kigali · Online · Dubai.

   Show 6 upcoming sessions as horizontal rows (desktop) that turn into stacked cards on mobile — NOT a wide table. Each row: large date block (day number big in Fraunces, month small, Clay background for the nearest one), course title, field tag, city + format icon, duration, price shown per format ("Classroom USD 2,450 · Online USD 1,200"), seats-left indicator when under 6 ("4 seats left" in Clay), and a "View & book" button.

   Titles must be written properly: correct acronyms (M&E, AI, HR, ISO 27001, OHS), sentence length under ~70 characters.

6. Browse by field — bento grid (Sand background)

   Heading: "Eight fields. 640 courses. One place to start." (numbers must match everywhere else on the page).

   A bento layout with varied tile sizes (not a uniform grid): 2 large image tiles, 3 medium, 3 small. Fields: Monitoring, Evaluation & Learning; Data & Analytics; Finance, Audit & Risk; Leadership & Management; Procurement & Supply Chain; Climate, Energy & Environment; Digital, AI & Cybersecurity; Governance, Law & Public Sector.

   Each tile: photo (some arch/pill-cropped), field name, course count, 3 example courses as small text, arrow. Hover: image slowly scales, arrow nudges. Mobile: 2-column grid with the first tile full width.

7. Choose your format — three formats, NOT three identical cards

   Split layout: left side is a vertical tab list (Classroom · Live online · In-house for teams); right side shows a large image in a different shape for each (arch for classroom, circle for online, wide rounded rect for in-house) plus 3–4 short facts, typical price range, and a CTA. On mobile, tabs become an accordion.

   Classroom facts: "8 cities · 20 participants max · Airport pickup and hotel booking help". Online: "Live on Zoom, not recorded · Same trainers · EAT and WAT friendly hours". In-house: "Built around your team's roles · From 8 participants · Delivered at your office or ours".

8. Why Mwangaza — proof, not adjectives (Ink background, Paper text)

   Left: large Fraunces statement: "We publish our numbers." Right: a 2×2 grid of stats with a short explanation under each:

   "4.7 / 5 — average from 312 published reviews", "86 — approved trainers, all practitioners", "8 — classroom cities", "1,900+ — professionals trained since 2019".

   Use the thin-line arc pattern at low opacity in the background. Counters must render the real number in HTML (animate only as progressive enhancement; never show 0 if JS fails).

9. Cities — "Train somewhere worth travelling to"

   Horizontal scroll-snap carousel of city cards (tall pill-shaped photos), each with city name, country, number of upcoming sessions, and "View sessions". Include a note under Nairobi: "Visa, airport transfer and accommodation support included for international participants." Arrow buttons on desktop, swipe on mobile, visible scrollbar hint.

10. Testimonials

    Not a generic carousel. Layout: one large featured quote on the left (Fraunces, 2rem, with a big Clay quotation mark shape), and two smaller quotes stacked on the right. Each with photo (circle crop), full name, job title, organisation, course taken and month/year. Write realistic, specific quotes (mention a skill or tool they used afterwards), not "Great experience!". Link: "Read all 312 reviews →".

11. For teams band (Forest background with a large Ochre half-circle bleeding off the right edge)

    Heading: "Training a whole team?" Text: "Tell us the roles and the outcome you need. We'll propose a programme, trainer and dates within two working days." Two CTAs: "Plan team training" (Clay filled) and "Download 2026–27 calendar (PDF)" — the download is direct, NOT gated behind a form.

12. FAQ (accordion, two-column on desktop: heading left, questions right)

    Questions: How do I pay (invoice, bank transfer, M-Pesa, card)? Do you help with visas and accommodation? Is the certificate recognised? Can online and classroom participants join the same session? What's your cancellation and transfer policy? Can you invoice a donor or our organisation directly?

13. Newsletter (Sand background, compact)

    "One email a month: new dates and course changes. No spam." Email input + Subscribe. Show an inline success state.

14. Footer (Ink background)

    Four columns: brand blurb + address (Westlands, Nairobi) + contact; Fields of study (the 8 fields); Company (About, Trainers, Accreditation, Gallery, Careers, Blog); Help (Calendar, Payments, Visa support, Terms, Privacy). Bottom row: copyright, social icons (LinkedIn, Facebook, Instagram, YouTube — same set as anywhere else on the page). One consistent email address and phone number site-wide.

15. Floating elements (mobile)

    Only ONE floating element: a WhatsApp button bottom-right. No stacked chat bubble + scroll-to-top + inquiry button. On mobile, show a slim sticky bottom bar on scroll with "Browse courses" once the hero search is out of view.

==================================================

RESPONSIVENESS & QUALITY REQUIREMENTS

==================================================

- Viewport meta must allow zooming (no user-scalable=no, no maximum-scale=1).

- Test layouts at 360px, 390px, 768px, 1024px, 1280px and 1536px. No horizontal scrolling at any width.

- Nothing important is a hover-only interaction; every menu works by tap and keyboard.

- Tap targets at least 44×44px.

- One H1 only; logical H2/H3 hierarchy; descriptive link text (never "Click here" or repeated "View course info").

- Visible focus states in Clay/Ochre; skip-to-content link.

- prefers-reduced-motion disables marquee, parallax and counters.

- Images in WebP with width/height set to avoid layout shift. Hero image eager-loaded; the rest lazy.

- Consistent numbers: course count, city count, review count and trainer count come from a single constants file and are reused everywhere.

- Consistent capitalisation: sentence case for all course titles and headings.

- Section spacing: generous (py-24 desktop, py-16 mobile) but vary it slightly so the rhythm doesn't feel templated.

==================================================

MOCK DATA

==================================================

Create a data file with: 8 fields of study (with counts that sum to 640), 12 upcoming sessions over the next 30 days across different cities and formats with realistic titles (e.g. "Monitoring & evaluation for development programmes", "Data analysis with Power BI", "Public procurement and contract management", "ISO 27001 lead implementer", "Financial management for donor-funded projects", "AI for M&E: practical tools", "Climate finance and carbon markets", "Leadership for new managers"), prices in USD, 8 cities with session counts, 6 testimonials, 10 invented partner organisations.

The end result should feel like it was designed by a thoughtful studio for a serious institution: warm, confident, specific, easy to scan on a phone, and clearly better than a template.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f4b5a968-5fa7-5bd9-92e0-e4017223b11d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
