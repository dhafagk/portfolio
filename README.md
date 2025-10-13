# Dhafa Gustiadi Kurniawan - Portfolio

A modern, terminal-inspired portfolio website built with Next.js, showcasing my work as a Full Stack Developer. Features a unique dark/light theme system and interactive terminal-style navigation.

## 🚀 Live Demo

Visit the live portfolio at [dhafagk.com](https://dhafagk.com)

## ✨ Features

- **Terminal-Inspired Design**: Unique developer-focused interface with terminal aesthetics
- **Dark/Light Theme Toggle**: Seamless theme switching with system preference detection
- **Responsive Design**: Optimized for desktop and mobile devices
- **Interactive Navigation**: Keyboard shortcuts (1, 2, 3) for quick page navigation
- **Dynamic Project Showcase**: Markdown-based project content with live preview
- **Performance Focused**: Built with Next.js for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with Pages Router
- **Styling**: TailwindCSS v4 with custom CSS variables
- **Typography**: JetBrains Mono font for authentic terminal feel
- **Language**: TypeScript with strict mode
- **Content**: Markdown with remark for project pages
- **Theme**: Custom theme context with localStorage persistence

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation with responsive menu
│   ├── Footer.tsx      # Theme toggle and credits
│   ├── Layout.tsx      # Main layout wrapper with SEO
│   ├── Terminal.tsx    # Interactive terminal component
│   ├── Dropdown.tsx    # Custom dropdown component
│   └── index.ts        # Component exports
├── context/            # React contexts
│   ├── ThemeContext.tsx # Theme management
│   └── AppContext.tsx  # Global app state
├── interfaces/         # TypeScript type definitions
│   └── ProjectInterface.ts # Project-related types
├── pages/              # Next.js pages (Pages Router)
│   ├── _app.tsx        # App wrapper
│   ├── _document.tsx   # Document structure with SEO
│   ├── index.tsx       # Homepage (redirects to projects)
│   ├── about.tsx       # About page
│   ├── skills.tsx      # Skills showcase
│   ├── projects/       # Project pages
│   │   ├── index.tsx   # Projects listing
│   │   └── [slug].tsx  # Individual project pages
├── styles/
│   └── globals.css     # Global styles with theme variables
└── content/
    └── projects/       # Markdown files for projects
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dhafagk/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Start the development server:

```bash
yarn dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Commands

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build production version
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript compiler check

## 📝 Content Management

### Adding New Projects

1. Create a new markdown file in `content/projects/`:

```markdown
---
id: my-new-project
date: "1st January 2024"
name: "My New Project"
tech: "React, Node.js, MongoDB"
description: "Project description here"
image: "/images/projects/my-project/preview.jpg"
githubUrl: ["https://github.com/username/repo"]
liveUrl: ["https://project-demo.com"]
---

# Project Content

Your project description and details in markdown format.

## Tech Stack

| Component | Technology | Purpose |
| --------- | ---------- | ------- |
| Frontend  | React      | UI      |
| Backend   | Node.js    | API     |
```

2. The project will automatically appear in the projects list.

## 🎨 Theme Customization

The theme system uses CSS custom properties defined in `src/styles/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  /* ... other light theme colors */
}

.dark {
  --background: #000;
  --foreground: #fff;
  /* ... other dark theme colors */
}
```

## 📱 Responsive Design

The portfolio is fully responsive with:

- Mobile-first approach using Tailwind breakpoints
- Collapsible navigation menu for mobile devices
- Optimized typography and spacing across devices
- Touch-friendly interactive elements

## ⌨️ Keyboard Navigation

- Press `1` to navigate to Projects
- Press `2` to navigate to About
- Press `3` to navigate to Skills
- Use arrow keys in project list for selection

## 🌐 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/dhafagk/portfolio/issues).

## 📬 Contact

- **Website**: [dhafagk.com](https://dhafagk.com)
- **Email**: dhafageka@gmail.com
- **GitHub**: [@dhafagk](https://github.com/dhafagk)

---

Built with ❤️ by [Dhafa Gustiadi Kurniawan](https://dhafagk.com)

_Design inspired by [Alex Dimitrov's Figma Template](https://www.figma.com/community/file/1417555189581721037)_
