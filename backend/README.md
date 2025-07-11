# 📦 Stockify Backend

A modern, real-time stock market trading platform backend built with **Node.js**, **Express**, and **MongoDB**. Provides SSE-enabled live data streaming, secure authentication, and comprehensive portfolio management.

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

---

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Setup & Installation](#-setup--installation)
- [API Documentation](#-api-documentation)
- [Development Notes](#-development-notes)

---

## 🎯 Features

- 🔐 **Secure Authentication**
  - JWT-based auth system
  - Password hashing with bcrypt
  - Token expiration & refresh

- 📊 **Real-time Data**
  - Server-Sent Events (SSE) for live updates
  - Real-time price fluctuations
  - Instant portfolio value updates

- 💼 **Portfolio Management**
  - Holdings tracking
  - Watchlist functionality
  - Order management
  - Position tracking

- 🛠 **Developer Features**
  - CORS enabled
  - Modular architecture
  - Comprehensive error handling
  - Test data seeding

---

## 💻 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT & bcrypt
- **Security**: CORS, Helmet

---

## 📁 Project Structure

```
backend/
├── data/
│   └── StocksData.js        # Seed data
├── middleware/
│   ├── auth.js              # JWT authentication
│   └── errorHandler.js      # Global error handling
├── models/
│   ├── HoldingModel.js      # Holdings schema & model
│   ├── OrderModel.js        # Orders management
│   ├── StockModel.js        # Stock data
│   ├── UserModel.js         # User authentication
│   └── WatchListModel.js    # Watchlist functionality
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── holdings.js          # Portfolio routes
│   └── watchlist.js         # Watchlist routes
├── .env                     # Environment configuration
├── index.js                 # Application entry
└── package.json
```

---

## ⚙️ Setup & Installation

1. **Clone & Install**
   ```bash
   git clone https://github.com/Priyangshu-0221/stockify-backend.git
   cd stockify-backend
   npm install
   ```

2. **Environment Setup**
   ```bash
   # Create .env file
   copy .env.example .env
   
   # Configure your variables
   notepad .env
   ```

3. **Database Setup**
   ```bash
   # Start MongoDB (Windows)
   "C:\Program Files\MongoDB\Server\{version}\bin\mongod.exe"
   
   # Seed initial data
   npm run seed
   ```

4. **Start Server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

---

## 📡 API Documentation

### 🔐 Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Create new user |
| POST | `/auth/login` | User login |
| POST | `/auth/refresh` | Refresh token |

### 📈 Portfolio
| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| GET | `/holdings` | Yes | Get user holdings |
| POST | `/holdings` | Yes | Add new holding |
| GET | `/holdings/stream` | Yes | Live updates (SSE) |

### 📋 Watchlist
| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| GET | `/watchlist` | Yes | Get watchlist |
| POST | `/watchlist` | Yes | Add to watchlist |
| DELETE | `/watchlist/:id` | Yes | Remove item |

### 🔄 Orders
| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| GET | `/orders` | Yes | Get all orders |
| POST | `/orders` | Yes | Place new order |
| DELETE | `/orders/:id` | Yes | Cancel order |

---

## 🧪 Development

```bash
# Run with nodemon
npm run dev

# Run tests
npm test

# Lint code
npm run lint
```

## 📝 Environment Variables

```ini
NODE_ENV=development
PORT=8080
MONGODB_URI=mongodb://localhost:27017/stockify
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=1h
```

---

## 📄 License

MIT © [Your Name]

---

## 🤝 Contributing

1. Fork it
2. Create feature branch (`git checkout -b feature/foo`)
3. Commit changes (`git commit -am 'Add foo'`)
4. Push (`git push origin feature/foo`)
5. Open Pull Request