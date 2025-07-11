# ⚡️ Stockify — Frontend

> A modern, sleek stock market dashboard and trading platform built with **Next.js 14**, **Tailwind CSS**, and **Server-Sent Events** for real-time updates.

[![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)

---

## 🧾 Overview

Stockify is a feature-rich stock market dashboard that provides real-time market data, portfolio management, and trading capabilities. Built with modern web technologies, it offers an intuitive and responsive experience for traders and investors.

![Dashboard Preview](./public/Media/Images/dashboard-preview.png)

---

## 🎯 Features

### 📊 Real-time Dashboard
- Live stock price updates via SSE
- Interactive charts and graphs
- Portfolio performance metrics
- Real-time profit/loss tracking

### 💼 Portfolio Management
- Holdings overview with live updates
- Watchlist functionality
- Order management system
- Position tracking

### 🛠 Technical Features
- **Architecture**
  - Next.js 14 App Router
  - Server-Side Rendering (SSR)
  - API Route Handlers
  - Middleware for authentication

- **UI/UX**
  - Responsive design
  - Dark/Light mode
  - Animated transitions
  - Toast notifications

- **Performance**
  - Image optimization
  - Route prefetching
  - Component lazy loading
  - Memoized computations

---

## 💻 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| Tailwind CSS | Utility-first styling |
| JWT | Authentication |
| Axios | API requests |
| React Query | Server state management |

---

## 📁 Project Structure

```
frontend/
├── app/
│   ├── dashboard/             # Dashboard routes
│   │   ├── holdings/         # Holdings management
│   │   ├── order/           # Order placement
│   │   ├── position/        # Position tracking
│   │   ├── funds/           # Fund management
│   │   └── watchlist/       # Watchlist component
│   ├── auth/                # Authentication pages
│   ├── layout.js            # Root layout
│   └── page.js              # Home page
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── dashboard/           # Dashboard components
│   └── shared/              # Shared components
├── lib/
│   ├── utils/              # Utility functions
│   └── hooks/              # Custom hooks
├── public/
│   └── Media/              # Static assets
└── styles/
    └── globals.css         # Global styles
```

---

## ⚡️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stockify-frontend.git
   cd stockify-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Visit [http://localhost:3000](http://localhost:3000)

---

## 🛠 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

### Code Style
- ESLint configuration
- Prettier for code formatting
- Husky for pre-commit hooks

---

## 📦 Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

---

## 🔑 Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_SSE_URL=http://localhost:8080/holdings-stream
JWT_SECRET=your_jwt_secret
```

---

## 📈 Performance Optimization

- Image optimization with Next.js Image
- Dynamic imports for code splitting
- Memoization for expensive computations
- Debounced API calls
- Optimistic UI updates

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- The open-source community

---

*Built with ❤️ by [Priyangshu](https://github.com/Priyangshu-0221)*
