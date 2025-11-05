# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses Yarn as the package manager and Next.js with Turbopack for fast builds.

### Core Commands
- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build production version with Turbopack  
- `yarn start` - Start production server

### Development Server
The development server runs on `http://localhost:3000` by default. Hot reload is enabled for all changes.

## Architecture Overview

This is a portfolio website built with Next.js 15, React 19, and TypeScript, using the Pages Router architecture.

### Tech Stack
- **Framework**: Next.js 15.5.2 with Pages Router
- **Styling**: TailwindCSS v4 with custom CSS variables for theming
- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to `./src/*`)
- **Font**: JetBrains Mono loaded via `next/font/google`

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation with responsive menu
│   ├── Dropdown.tsx    # Custom dropdown component  
│   └── index.ts        # Component exports
├── interfaces/         # TypeScript type definitions
│   └── IconInterface.ts # Icon-related types
├── pages/              # Next.js pages (Pages Router)
│   ├── _app.tsx        # App wrapper
│   ├── _document.tsx   # Document structure
│   ├── index.tsx       # Homepage - portfolio layout
│   └── api/            # API routes
└── styles/
    └── globals.css     # Global styles with dark mode support
```

### Component Architecture

**Header Component**: Responsive navigation with mobile menu toggle, uses state for menu visibility

**Dropdown Component**: 
- Fully controlled with TypeScript interfaces
- Implements click-outside functionality via useRef/useEffect
- Handles keyboard and mouse interactions
- Props: `options`, `onSelect`, `selectedValue`, `placeholder`

**Styling System**:
- Uses CSS custom properties for theming
- Automatic dark mode via `prefers-color-scheme`
- TailwindCSS configured for Pages Router file structure
- Color tokens: `--background`, `--foreground`, `--link`, `--header`, `--muted`, etc.

### Key Patterns
- Components export default and are re-exported through `src/components/index.ts`
- TypeScript interfaces are defined in dedicated files under `src/interfaces/`
- Responsive design with mobile-first approach using Tailwind breakpoints
- Image optimization using Next.js `Image` component with local assets in `/public/`

### State Management
Currently uses local component state with React hooks. No external state management library is implemented.