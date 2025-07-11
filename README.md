# ⚡️ Stockify

> A modern, full-stack stock market dashboard and trading platform. Built with **Next.js 14**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB**. Stockify provides real-time price updates, secure authentication, portfolio management, and a seamless trading experience.

[![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧾 Overview

Stockify is a robust, full-stack trading platform that empowers users to track stocks, manage portfolios, place orders, and monitor real-time price changes. The project leverages modern web technologies for a fast, secure, and responsive experience.

---

## 🎯 Features

- 🔐 **JWT Authentication** — Secure login and registration
- 📊 **Live Dashboard** — Real-time price updates (interval-based polling)
- 💼 **Portfolio Management** — Holdings, orders, positions, and funds
- ⭐ **Watchlist** — Add/remove stocks to your personal watchlist
- 📝 **Order Management** — Place, view, and manage buy/sell orders
- 📱 **Responsive UI** — Mobile-first, adaptive layouts
- 🎨 **Modern UI/UX** — Built with Tailwind CSS and Next.js App Router
- 🧩 **Component-Based** — Modular, reusable React components
- 🛡️ **Secure** — Password hashing, CORS, and environment-based configs

---

## 💻 Tech Stack

| Layer      | Technology         | Purpose                       |
|------------|--------------------|-------------------------------|
| Frontend   | Next.js 14         | React framework (App Router)  |
|            | Tailwind CSS       | Utility-first styling         |
|            | Axios              | API requests                  |
|            | JWT                | Auth token handling           |
| Backend    | Node.js, Express   | REST API server               |
|            | MongoDB, Mongoose  | Database & ODM                |
|            | JWT, bcrypt        | Auth & password security      |
|            | CORS               | Cross-origin requests         |

---

## 📁 Project Structure

```
project-root/
├── backend/
│   ├── data/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── .env
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── styles/
│   ├── .env.local
│   ├── next.config.js
│   └── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB running locally or in the cloud

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/stockify.git
cd stockify
```

### 2. Backend Setup

```bash
cd backend
npm install
# Create .env file with:
# PORT=8080
# MONGO_URL=mongodb://localhost:27017/stockify
# JWT_SECRET_KEY=your_jwt_secret
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
# Create .env.local file with:
# NEXT_PUBLIC_API_URL=http://localhost:8080
npm run dev
```

### 4. Open in Browser

Visit [http://localhost:3000](http://localhost:3000)

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint      | Description         |
|--------|--------------|---------------------|
| POST   | /newuser     | Register user       |
| POST   | /login       | Login user          |

### Holdings

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| GET    | /allholdings     | Get user holdings          |
| POST   | /addholdings     | Add new holding            |
| DELETE | /removeholdings  | Remove holding             |

### Watchlist

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| GET    | /allwatchlist    | Get user watchlist         |
| POST   | /addwatchlist    | Add to watchlist           |
| DELETE | /removewatchlist | Remove from watchlist      |

### Orders

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| GET    | /allorders       | Get all orders             |
| POST   | /addorder        | Place new order            |
| DELETE | /sellitem        | Sell stock                 |

---

## 🛠 Development

- **Linting:** `npm run lint`
- **Formatting:** Prettier config included
- **Testing:** Add your tests in `/backend` and `/frontend` as needed

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

*Built with ❤️ by [Priyangshu](https://github.com/Priyangshu-0221)*