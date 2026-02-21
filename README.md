# Prateek Kumar Srivastava — Portfolio

A full-stack React portfolio with Express backend, dark/light mode, live GitHub API, and animated loading screen.

## 🚀 Quick Start

### Frontend

```bash
# Install dependencies
npm install

# Start development server (port 3000)
npm run dev
```

### Backend (Contact Form)

```bash
cd server

# Install dependencies
npm install

# Copy env template and fill in your Gmail credentials
cp .env.example .env

# Start server (port 5000)
npm run dev
```

### Run both together (from root)

```bash
npm install concurrently --save-dev
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Loader/        # VS Code-style loading screen
│   │   ├── Navbar/        # Responsive navbar with theme toggle
│   │   ├── Hero/          # Animated hero with particle canvas
│   │   ├── About/         # About with animated orbit visual
│   │   ├── Skills/        # Skill cards + MERN showcase
│   │   ├── Experience/    # Animated timeline
│   │   ├── Projects/      # Project cards with GitHub links
│   │   ├── GitHub/        # Live GitHub API data
│   │   ├── Achievements/  # Cert + achievement cards
│   │   ├── Contact/       # Contact form + Express backend
│   │   └── Footer/
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/light mode
│   ├── data/
│   │   └── portfolioData.js  # ← Edit your info here
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   └── useGitHub.js
│   └── styles/
│       └── globals.css      # Full design system
└── server/
    ├── index.js             # Express contact form API
    └── .env.example         # Gmail config template
```

## ✏️ Customizing

All personal data is in **`src/data/portfolioData.js`** — edit that file to update:
- Personal info, email, links
- Skills
- Experience
- Projects  
- Achievements

## 🌙 Dark Mode

The dark mode toggle is in the navbar. It saves preference to `localStorage`. The theme system is defined in `src/styles/globals.css` using CSS custom properties (`--bg`, `--text-primary`, etc.)

## 📬 Contact Form Setup

1. Enable 2-Factor Authentication on your Gmail account
2. Go to: Google Account → Security → App Passwords
3. Create an App Password for "Mail"
4. Add to `server/.env`:
   ```
   EMAIL_USER=your@gmail.com
   EMAIL_PASS=your_16_char_app_password
   ```

## 🚀 Deployment

### Frontend: Vercel
```bash
# Install Vercel CLI
npm i -g vercel
vercel
```

### Backend: Railway / Render
- Push `server/` folder to a separate repo or use Railway monorepo support
- Set environment variables in the platform dashboard
- Update the contact form fetch URL in `Contact.jsx` to your production server URL

## 📦 Tech Stack
- React 18 + Vite
- Framer Motion (animations)
- Lucide React (icons)
- Express.js (contact form backend)
- Nodemailer (email sending)
- GitHub REST API (live repo data)
