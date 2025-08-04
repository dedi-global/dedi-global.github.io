# Overview

DeDi (Decentralized Directory Protocol) is a full-stack web application built to enhance trust in digital transactions by creating a universal way to verify public information instantly. The application transforms fragmented registries into AI-ready directories through standardized API specifications for accessing public registries. This is a modern React-based frontend with an Express.js backend, using PostgreSQL for data persistence and featuring a comprehensive UI component library.

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

## Backend Architecture
- **Runtime**: Node.js with TypeScript and ES modules
- **Framework**: Express.js for REST API endpoints
- **Build System**: esbuild for production builds, tsx for development
- **API Structure**: Centralized route registration system with middleware for logging and error handling
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage) and PostgreSQL support

## Database & ORM
- **Database**: PostgreSQL with Neon Database serverless driver
- **ORM**: Drizzle ORM with migrations support
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Session Management**: PostgreSQL session store using connect-pg-simple

## Authentication & Security
- **Session-based authentication** with PostgreSQL session storage
- **Password hashing** and user management system
- **CORS and security middleware** for API protection
- **Type-safe API contracts** between frontend and backend

## Development & Build Pipeline
- **Monorepo structure** with shared types and schemas
- **Hot module replacement** in development with Vite
- **TypeScript compilation** with strict type checking
- **Path aliases** for clean imports across client, server, and shared code
- **Development tooling** includes Replit-specific plugins for enhanced development experience

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