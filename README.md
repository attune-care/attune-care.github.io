# Attune - Pre-Prosthetic EMG Training Platform

The first pre-prosthetic EMG training platform preparing amputees for myoelectric control—before their device arrives.

## About

Attune uses surface EMG sensors and immersive XR environments to help amputees train muscle signals to control a virtual prosthetic hand before physical device delivery, reducing early frustration and improving long-term prosthetic adoption.

Website: [attune-care.github.io](https://attune-care.github.io/)

## Project Structure

```
attune-website/
├── client/                 # React/Vite frontend
│   ├── public/            # Static assets (images, videos, docs)
│   ├── src/
│   │   ├── pages/         # Page components (Home, NotFound)
│   │   ├── components/    # UI components
│   │   ├── contexts/      # React contexts (Theme)
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilities
│   ├── index.html
│   └── ...
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── package.json
└── ...
```

## Tech Stack

- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **UI Components**: Custom Shadcn/ui based components
- **Icons**: Lucide React

## Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/attune-website.git
cd attune-website

# Install dependencies
npm install
# or
pnpm install
```

### Running Locally

```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

Output is in `dist/public/`

## Deployment

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy-pages.yml`.
See [DEPLOYMENT.md](DEPLOYMENT.md) for Cloudflare Pages, Netlify, and Vercel, plus custom-domain setup.

## Site structure

`client/src/pages/Home.tsx` composes the sections in `client/src/components/site/`:

1. **Hero**: positioning, plus a "press and hold" virtual-hand teaser
2. **Story**: sticky scrollytelling through the care pathway (surgery → waiting → fitting → daily life)
3. **Problem**: patient, clinician, and system lenses, with cited statistics
4. **Product**: how Attune works and an illustrative clinician readiness view
5. **Opportunity**: why now, care-pathway positioning, B2B2C model, milestones
6. **Mission**
7. **Team**
8. **Contact & footer**: audience-specific CTAs, sources, and regulatory disclaimer

Copy, links, team, and citations live in `client/src/lib/site.ts`.

### Content guardrails

- Keep product descriptions high level. Don't publish signal-processing methods, metric definitions,
  hardware specs, or performance numbers that haven't been validated.
- Interactive demos are simulations (`useActivation`), not Attune's real pipeline, and are labeled as such.
- Mock dashboard data must be labeled illustrative and never use realistic patient names.
- Keep the footer disclaimer: Attune is in development and not FDA cleared.

### Theme

Light, warm palette defined in `client/src/index.css` (`@theme`): paper `#fbf8f4`, ink `#1a1819`,
cream `#f6e7d8` (brand), signal blue `#2f5fd0`. Display type is Fraunces; body text is Inter.

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -m "Add feature"`
3. Push to GitHub: `git push origin feature/your-feature`
4. Create a Pull Request

## License

© 2026 Attune. All rights reserved.

## Contact

- Built at: The Luminosity Lab

---

**For deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**
