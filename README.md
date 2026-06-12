# Rohit Reghu - Frontend Developer Portfolio

[![React](https://img.shields.io/badge/React-19.2.5-blue?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38.0-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel&logoColor=white)](https://rohitreghu.vercel.app/)

A highly polished, interactive developer portfolio built with React, Vite, and Framer Motion. The project showcases modern frontend engineering practices, including glassmorphism UI, scroll-driven animations, CSS variable-based theming, and an advanced dark/light mode toggle utilizing the View Transitions API.

🌐 **Live Website:** [rohitreghu.vercel.app](https://rohitreghu.vercel.app/)  
🔗 **LinkedIn:** [Rohit Reghu](https://www.linkedin.com/in/rohitreghu7/)  
💻 **GitHub:** [@rohitreghu](https://github.com/rohitreghu)

---

## 🌟 Key Features

- **Glassmorphism UI:** Extensive use of `backdrop-filter` and CSS variables to create deep, multi-layered interfaces.
- **Bento Box Layouts:** Modern CSS Grid implementations for Expertise and Philosophy sections.
- **Scroll Animations:** Native `framer-motion` integration for seamless reveal animations as elements enter the viewport.
- **Advanced Theming Engine:** A fully engineered dark/light mode toggle that uses the native browser **View Transitions API** to create a stunning "circular ripple wipe" effect, falling back gracefully on older browsers.
- **Interactive Case Studies:** Custom architecture diagrams drawn purely with CSS and SVG elements, showcasing a deep understanding of layout engineering.

---

## 🏗️ Architecture & Directory Structure

The project utilizes a strict, component-driven architecture:

```text
src/
├── components/          # Reusable UI components (Navbar, Hero, Contact, etc.)
│   ├── CaseStudies/     # Contains the complex animated architecture diagrams
│   ├── Expertise/       # Bento-box layout components
│   └── ...              # Each component has a co-located .css file
├── context/             # React Context Providers
│   └── ThemeContext.jsx # Manages Dark/Light mode state and View Transition logic
├── data/                # Centralized mock data layer
│   └── caseStudies.jsx  # Content layer for projects/case studies
├── pages/               # Page-level components
│   ├── Home.jsx         # Main landing page assembling all components
│   └── CaseStudy.jsx    # Dynamic template for individual case studies
├── App.jsx              # Routing definition (React Router v7)
├── index.css            # Global CSS variables, reset, and theming tokens
└── main.jsx             # React entry point
```

---

## 🎨 Theming Engine (View Transitions API)

The dark/light mode toggle is one of the standout engineering features of this portfolio. Instead of a simple cross-fade or an instant colour swap, clicking the theme toggle triggers a **Circular Ripple Wipe**.

### How it works:
1. `ThemeContext.jsx` intercepts the toggle click and captures the exact `X` and `Y` coordinates of the user's mouse/touch event.
2. It invokes `document.startViewTransition()` to capture the current state of the DOM.
3. React updates the `data-theme` attribute on the `<html>` root, triggering a repaint using the alternate CSS variable tokens defined in `index.css`.
4. CSS pseudo-elements `::view-transition-old(root)` and `::view-transition-new(root)` animate a `clip-path: circle()` from the captured `X/Y` coordinates to `150vmax`, creating an expanding ripple that organically reveals the new UI state beneath it.

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohitreghu/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Visit `http://localhost:5173` to view the application.

---

## 📝 Managing Content

The portfolio's heavy content (like specific project case studies) is decoupled from the UI components. 

To add or modify case studies, edit the `src/data/caseStudies.jsx` file. The UI components will automatically ingest this data and render the appropriate bento grids, routing, and animated diagrams.
