# Attune - Pre-Prosthetic EMG Training Platform

The first pre-prosthetic EMG training platform preparing amputees for myoelectric control—before their device arrives.

## About

Attune uses surface EMG sensors and immersive XR environments to help amputees train muscle signals to control a virtual prosthetic hand before physical device delivery, reducing early frustration and improving long-term prosthetic adoption.

Website: [attune-care.github.io/attune/](attune-care.github.io/attune/)

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

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions for:
- GitHub Pages
- Vercel (Recommended)
- Netlify

## Key Features

- **EMG Signal Capture**: Lightweight surface sensors detect residual muscle activation
- **Real-Time Virtual Control**: Signals drive a virtual prosthetic hand in training environments
- **Clinician Dashboard**: Engagement metrics and activation insights
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Theme**: Optimized for extended viewing sessions

## Content Sections

1. **Hero** - Product positioning and CTAs
2. **Problem** - The early frustration and abandonment challenges
3. **Solution** - Pre-prosthetic training approach
4. **Hardware** - EMG armband specifications
5. **How It Works** - 4-step process overview
6. **Dashboard** - Clinician insights visualization
7. **Market Opportunity** - TAM and business model
8. **Team** - The Luminosity Lab team members
9. **Roadmap** - 2026 and future plans

## Configuration

### Environment Variables

Create a `.env.local` file if needed:

```env
# Add any necessary environment variables here
```

### Tailwind Customization

Edit `client/src/index.css` to modify the color palette and theme.

### Theme

The website uses a dark theme with the color scheme:
- Primary: `#ffbd59` (Gold)
- Dark BG: `#0f1e2b` (Navy)
- Secondary BG: `#1b2f44` (Slate)

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -m "Add feature"`
3. Push to GitHub: `git push origin feature/your-feature`
4. Create a Pull Request

## License

© 2026 Attune LLC. All rights reserved.

## Contact

- Built at: The Luminosity Lab

---

**For deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**
