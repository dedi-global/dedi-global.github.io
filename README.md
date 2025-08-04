# DeDi - Decentralized Directory Protocol Homepage

A professional, frontend-only homepage showcasing the DeDi (Decentralized Directory) protocol's value proposition for enhancing trust in digital transactions.

## Features

- **Professional Design**: Clean, modern interface highlighting DeDi's trust infrastructure
- **Responsive Layout**: Mobile-first design that works on all devices
- **Partner Integration**: Prominently features Finternet Labs (sponsor) and Dhiway (technology partner)
- **Educational Content**: Clear explanation of the three pillars of digital trust
- **Call-to-Action**: Direct links to https://publish.dedi.global for getting started

## Key Sections

1. **Hero Section**: Compelling value proposition with trust-focused messaging
2. **Problem Statement**: Highlighting verification challenges in digital transactions
3. **Solution Overview**: Technical benefits and capabilities
4. **Business Value**: Six key benefits for enterprise users
5. **Trust Pillars**: Integrity, Validity, and Authenticity explained
6. **Partners**: Sponsor and technology partner information
7. **Call-to-Action**: Clear path to get started with DeDi

## Development

### Running Locally

```bash
# Install dependencies (if needed)
npm install

# Start development server
cd client && npx vite --host 0.0.0.0 --port 5001
```

The application will be available at `http://localhost:5001`

### Building for Production

```bash
# Build static files
npx vite build client
```

The built files will be in the `dist/` directory, ready for static hosting.

## Deployment

This is a static site that can be deployed to any static hosting platform:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Host directly from your repository
- **Replit**: Use Replit's static site deployment feature

### Deployment Configuration

- **Build Command**: `npx vite build client`
- **Output Directory**: `dist/`
- **Node Version**: 18+ recommended

## Technology Stack

- **React 18**: Modern React with functional components and hooks
- **TypeScript**: Type-safe development experience
- **Vite**: Fast development server and optimized production builds
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **shadcn/ui**: Professional component library with Radix UI primitives
- **Lucide React**: Beautiful, customizable icons

## Project Structure

```
client/
├── src/
│   ├── components/ui/     # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Application pages
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles and CSS variables
│   └── main.tsx          # Application entry point
├── index.html            # HTML template
└── package.json          # Dependencies and scripts
```

## License

MIT License - feel free to use this as a template for your own projects.