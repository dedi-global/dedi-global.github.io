# Overview

DeDi (Decentralized Directory Protocol) is a frontend-only web application built to showcase the protocol's value proposition for enhancing trust in digital transactions. The application serves as a professional homepage highlighting how DeDi creates a universal way to verify public information instantly through standardized API specifications. This is a modern React-based static website with comprehensive UI components, designed for easy deployment as a static site.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **UI Framework**: Comprehensive component system using Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with CSS custom properties for theming and dark mode support
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Form Handling**: React Hook Form with Zod validation through @hookform/resolvers
- **Design System**: shadcn/ui component library with "new-york" style variant

## Static Site Architecture
- **Build System**: Vite for fast development and optimized production builds
- **Deployment**: Static site deployment ready for platforms like Vercel, Netlify, or GitHub Pages
- **Assets**: Self-contained with no external dependencies or API requirements
- **Structure**: Single-page application with clean, professional design

## Development & Build Pipeline
- **Frontend-only structure** optimized for static deployment
- **Hot module replacement** in development with Vite
- **TypeScript compilation** with strict type checking
- **Path aliases** for clean imports across client components
- **Development tooling** includes Replit-specific plugins for enhanced development experience
- **Simplified deployment** - no server infrastructure required

## Key Design Patterns
- **Shared schema approach**: Common type definitions between frontend and backend
- **Component composition**: Extensive use of Radix UI primitives for accessibility
- **Utility-first CSS**: Tailwind with custom design tokens for brand consistency
- **Error boundaries**: Comprehensive error handling with user-friendly error overlays
- **Responsive design**: Mobile-first approach with comprehensive breakpoint system

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon Database
- **drizzle-orm & drizzle-kit**: Type-safe ORM with migration tooling
- **express**: Web application framework for Node.js
- **react & react-dom**: Core React library for UI development
- **@tanstack/react-query**: Server state management and caching

## UI & Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives (30+ components)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Icon library with consistent design language

## Development Tools
- **vite**: Frontend build tool and development server
- **typescript**: Static type checking
- **@vitejs/plugin-react**: React support for Vite
- **esbuild**: Fast JavaScript bundler for production builds

## Form & Validation
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Integration with Zod for schema validation
- **zod**: TypeScript-first schema validation

## Additional Utilities
- **wouter**: Minimalist routing library
- **date-fns**: Date utility library
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component