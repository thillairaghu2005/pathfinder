# Pathfinders – The Guide

> A modern corporate and academic mentoring platform delivering subject-expert guidance from Higher Secondary to PhD level.

---

## Overview

**Pathfinders – The Guide** is an academic coaching, career mentoring, and corporate training portal. The web application features interactive curriculum overviews, PhD research guidance modules, and modern responsive layouts tailored for students, researchers, and enterprise partners.

---

## Tech Stack

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations & Graphics:** [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/), [OGL](https://github.com/oframe/ogl)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Installation

```bash
# Clone the repository
git clone https://github.com/thillairaghu2005/pathfinder.git
cd pathfinder

# Install dependencies
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

Type-check and create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```text
├── public/              # Static assets
├── src/
│   ├── assets/          # Media, branding & imagery
│   ├── components/      # Reusable UI & layout components
│   ├── data/            # Static data & configurations
│   ├── pages/           # Application views (Home, Academic, PhD, etc.)
│   ├── types/           # TypeScript interfaces & types
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── package.json
└── vite.config.ts
```

---

## License

This project is proprietary and confidential. All rights reserved.
