# PageTurner – Design Notes

## Layout

- **Mobile-first:** Base styles are for small screens (single column, stacked nav). Media queries at 768px (tablet) and 1024px (desktop) add columns and spacing.
- **Percentage-based widths:** Main content uses `width: 90%` (mobile), `85%` (desktop) with `max-width: 1200px` so the layout scales with the viewport.
- **Three-column areas:** Home, About, and Services use a 3-column content area. On mobile these stack (one column); on tablet and up they sit side by side (about 33.33% each). Same idea for the footer: three columns (copyright, feedback, social) that stack on small screens.

This keeps the same structure on all devices while making best use of space on larger screens.

---

## Colour scheme

- **Background:** `#f9f6f1` – light warm grey so the page is easy on the eyes and fits a bookstore feel.
- **Header/Footer:** `#4a2c2a` – dark brown for a calm, traditional look and clear separation from content.
- **Links:** `#6b4f4f` in content, `#f5d6ba` in the footer for contrast on dark brown.
- **Focus outline:** `#8b6914` for keyboard users so focus is visible and consistent.

Colours are chosen for readability and a simple, professional look across devices.

---

## Typography

- **Font:** Georgia (with serif fallbacks). Serif type fits a book brand and stays readable at different sizes.
- **Base size:** 100% on `html`, with a slight increase (18px) at desktop (1024px+) for better readability on large screens.
- **Line height:** 1.6 for body text to keep reading comfortable on mobile and desktop.

---

## User experience (UX) across devices

1. **Mobile:** One column, vertical nav, and stacked footer reduce scrolling sideways and make taps easy. Content width is limited so lines don’t get too long.
2. **Tablet:** Nav becomes a horizontal bar; content and footer use 3 columns where it fits, so more information is visible without feeling crowded.
3. **Desktop:** Slightly larger text and a contained content width (85%) keep the layout readable and focused.
4. **Accessibility:** CSS reset for consistent spacing; focus styles on links and form controls; semantic HTML (`header`, `nav`, `main`, `footer`, `section`, `article`); `aria-label` on nav and key sections; form labels and alt text for images.

---

## Page mock-up behaviour

| Page      | Mobile              | Tablet                    | Desktop                    |
|----------|---------------------|---------------------------|----------------------------|
| Home     | Stacked 3 blocks   | 3 columns                 | 3 columns, wider container |
| About    | Stacked 3 blocks   | 3 columns                 | Same                       |
| Services | Stacked 3 blocks   | 3 columns                 | Same                       |
| Product  | Image above details | Image + details side by side | Same, larger text        |
| Contact  | Full-width form    | Same                      | Same                       |
| Footer   | 3 rows             | 3 columns                 | 3 columns                  |

All pages share the same header, navigation, and three-column footer so the experience is consistent and easy to learn on any device.
