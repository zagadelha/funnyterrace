# Funny Terrace — website (Horizon)

Marketing site for [Funny Terrace](https://funnyterrace.com), an AI product and engineering studio in Porto.

A single static page with no build step and no runtime dependencies besides Google Fonts.

## What's inside

| File | Purpose |
| --- | --- |
| `index.html` | The whole site: markup, styles and scripts in one file |
| `robots.txt`, `sitemap.xml` | Search engine discovery |
| `.github/workflows/static.yml` | Deploys to GitHub Pages on every push to `main` |

## Features

- Bilingual (English and European Portuguese), auto-detected from the browser, switchable in the header
- Animated hero: a latent-space particle sphere on canvas, with pointer parallax; static when the visitor prefers reduced motion
- The contact email is not in the source. It is assembled only after a press-and-hold check, a small SHA-256 proof of work, a honeypot field and a minimum time on page
- Responsive down to 360px, keyboard accessible, SEO metadata and Organization structured data

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Editing content

All copy lives in `index.html`. English text is in the markup; Portuguese text is in the `PT` dictionary in the script at the bottom. Each translatable element has a `data-i18n` key that matches an entry in that dictionary.

## To do before launch

- Add `og-image.png` (1200×630) at the site root for social previews
- Connect the contact form to a backend (Formspree, a Supabase Edge Function) and add Cloudflare Turnstile
- Confirm which case studies can be named publicly
