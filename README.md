<div align="center">

# Abu Tamanna Hasan — Portfolio

**Senior Software Engineer | Full-Stack & Applied AI Systems**

[![Live Demo](https://img.shields.io/badge/Live-Demo-emerald?style=for-the-badge&logo=githubpages&logoColor=white)](https://hasancsecu.github.io/portfolio/)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)

<p align="center">
  A high-performance, modern, and fully responsive personal portfolio web application built with <strong>React 18</strong>, <strong>TypeScript</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS</strong>.
</p>

[View Live Site](https://hasancsecu.github.io/portfolio/) · [Report Bug](https://github.com/hasancsecu/portfolio/issues) · [Request Feature](https://github.com/hasancsecu/portfolio/issues)

</div>

---

## 📌 Overview

This repository powers the personal portfolio of **Abu Tamanna Hasan**, showcasing 4+ years of professional engineering experience across high-performance fintech platforms, real-time trading engines, applied AI pipelines, and modern distributed systems.

### Key Highlights
- ⚡ **Ultra-Fast Performance**: Built on Vite 5 with SWC compilation and optimized asset delivery.
- 🎨 **Modern Design & Theming**: Dark/Light mode with smooth transitions, custom emerald accents, and glassmorphic UI components.
- 📱 **Fully Responsive**: Mobile-first design optimized across mobile, tablet, and desktop viewports.
- 📊 **Dynamic Project Showcase**: Interactive modal views and category filtering (Fintech, AI, Full-Stack, Frontend, Backend).
- 🛠️ **Categorized Skills**: Visual matrix covering Frontend, Backend (Node.js &rarr; Java &rarr; Python ecosystems), AI & LLMs, Databases/ORMs, and DevOps.
- ✉️ **Functional Contact Form**: Direct message delivery powered by EmailJS with form validation.
- 🚀 **Zero-Config Deployment**: Automated SPA-compatible deployment script for GitHub Pages.

---

## 💻 Tech Stack

### Frontend & Core
- **Framework**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 5](https://vitejs.dev/) with `@vitejs/plugin-react-swc`
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with `tailwindcss-animate`
- **Component Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **State & Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with Zod validation
- **Email Delivery**: [EmailJS](https://www.emailjs.com/)

### Featured Engineering Proficiencies
- **Frontend Architecture**: Angular (Zoneless, Signals), RxJS, NgRx, AG-Grid, TradingView Charts, React.js, Next.js, Tailwind CSS.
- **Backend & Real-Time**: 
  1. **Node.js**: Node.js, Express.js, Nest.js
  2. **Java**: Java, Spring Boot, Hibernate
  3. **Python**: Python, FastAPI
  - *Distributed Tools*: RESTful API, GraphQL, Apache Kafka, RabbitMQ, Redis, WebSockets & Socket.io.
- **AI & Data Integration**: Prompt Engineering, LLM API Utilization, Basic AI Model Integration, Sentiment Analysis.
- **Databases & ORMs**: PostgreSQL, MySQL, MSSQL, MongoDB, Prisma, Hibernate, TypeORM, Sequelize, Mongoose.
- **DevOps & Tooling**: Docker, GitLab CI/CD, GitHub Actions, Linux, Postman, Vite, Webpack, Jira.

---

## 📂 Project Structure

```text
portfolio/
├── public/                 # Static assets and favicon
├── src/
│   ├── components/         # Reusable UI & section components
│   │   ├── ui/             # Radix UI and Shadcn primitives
│   │   ├── Navbar.tsx      # Responsive header with theme toggle
│   │   ├── Hero.tsx        # Hero banner with call-to-actions
│   │   ├── About.tsx       # Bio, stats, and key engineering highlights
│   │   ├── Skills.tsx      # Categorized technical skill cards
│   │   ├── Experience.tsx  # Interactive work history timeline
│   │   ├── Projects.tsx    # Filterable project gallery & detail modals
│   │   ├── Education.tsx   # Academic background
│   │   ├── Contact.tsx     # EmailJS-backed inquiry form
│   │   └── Footer.tsx      # Social links and copyright
│   ├── data/
│   │   └── portfolioData.ts# Centralized portfolio data (Bio, Skills, Projects, etc.)
│   ├── images/             # Project screenshots, logos, and graphic assets
│   ├── scripts/
│   │   └── deploy.cjs      # GitHub Pages deploy script
│   ├── App.tsx             # Main application layout & routes
│   ├── index.css           # Global Tailwind styling & theme variables
│   └── main.tsx            # Application entry point
├── vite.config.ts          # Vite configuration & SPA fallback plugin
├── tailwind.config.ts      # Tailwind CSS theme configuration
└── package.json            # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended) and `npm`.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hasancsecu/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:8080/portfolio/`.

---

## 🛠️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite local development server on port `8080` with HMR |
| `npm run build` | Compiles TypeScript and builds production-ready bundle into `dist/` |
| `npm run preview` | Locally previews the production build |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |
| `npm run deploy` | Builds the project and deploys the `dist/` output directly to GitHub Pages |

---

## 📬 Contact & Connect

- **Name**: Abu Tamanna Hasan
- **Email**: [hasansouravcsecu@gmail.com](mailto:hasansouravcsecu@gmail.com)
- **LinkedIn**: [linkedin.com/in/abu-tamanna-hasan-6a3469195](https://linkedin.com/in/abu-tamanna-hasan-6a3469195/)
- **GitHub**: [@hasancsecu](https://github.com/hasancsecu)
- **Website**: [hasancsecu.github.io/portfolio](https://hasancsecu.github.io/portfolio/)

---

<div align="center">
  <sub>Designed & Developed by Abu Tamanna Hasan. All rights reserved.</sub>
</div>
