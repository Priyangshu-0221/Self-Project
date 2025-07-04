# 📦 Stockify Backend

The backend for **Stockify** — a sleek stock market dashboard and trading platform. Built using **Node.js**, **Express**, and **MongoDB**, this backend provides powerful RESTful APIs for managing holdings, positions, and other stock-related data.

---

## 🚀 Features

- 🔗 RESTful APIs for stocks, holdings, and positions
- 🧠 MongoDB integration via Mongoose
- 🌐 CORS-enabled for frontend integration
- 🧪 Dummy data seeding routes for testing
- 🧱 Modular schema-model architecture

---

## 🗂️ Project Structure

```
backend/
├── .env                  # Environment variables
├── index.js              # Server entry point
├── model/                # Mongoose models
│   ├── HoldingModel.js
│   └── PositionModel.js
├── schemas/              # Mongoose schemas
│   ├── HoldingSchema.js
│   └── PositionSchema.js
├── package.json
├── package-lock.json
└── ...
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone <repo-url>
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```ini
MONGO_URL=mongodb://localhost:27017/stockify
PORT=8080
```

### 4. Start the Server

```bash
node index.js
```

Server will start at: [http://localhost:8080](http://localhost:8080)

---

## 📡 API Endpoints

### 📁 Holdings

| Method | Endpoint        | Description                      |
|--------|----------------|----------------------------------|
| GET    | /allholdings   | Fetch all holdings from database |
| GET    | /addHoldings   | Seed dummy holdings (dev only)   |

### 📊 Positions

| Method | Endpoint        | Description                      |
|--------|----------------|----------------------------------|
| GET    | /allpositions  | Fetch all positions from database|
| GET    | /addPositions  | Seed dummy positions (dev only)  |

> ⚠️ **Note:** Use `/addHoldings` and `/addPositions` only for initial testing. Disable or comment them after seeding to avoid duplicates.

---

## 🧩 Code Overview

| File/Folder   | Purpose                                         |
|---------------|-------------------------------------------------|
| index.js      | Sets up Express, MongoDB connection, and routes |
| model/        | Contains Mongoose models (logic + structure)    |
| schemas/      | Mongoose schemas defining DB document structure |

---

## 📝 Developer Notes

- ✅ CORS is pre-configured for development mode.
- ✅ Mongoose handles schema validation and document modeling.
- ⚠️ Add proper error handling before deploying to production.
- 🧪 Dummy data routes help test the UI/UX quickly.

---

## 📄 License

This project is open for educational